// prerender.mjs
import puppeteer from "puppeteer";
import { createServer } from "http-server";
import fs from "fs";
import path from "path";

const ROUTES = ["/", "/about", "/collaborate", "/contacts"];
const DIST_DIR = path.resolve("dist");
const PORT = 4173;

async function prerender() {
  // 1. Jalankan static server dengan proxy/fallback ke index.html agar rute React terbaca
  const server = createServer({ 
    root: DIST_DIR,
    proxy: `http://localhost:${PORT}?` // Trik agar rute seperti /about dialihkan ke index.html utama
  });
  
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Static server running at http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  // Buat array untuk menampung koneksi aktif agar bisa ditutup paksa di akhir
  const connections = [];
  server.server.on('connection', (conn) => connections.push(conn));

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Prerendering ${url} ...`);

    try {
      // Menggunakan 'domcontentloaded' jauh lebih aman dan cepat agar tidak macet menunggu aset luar/analytics
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 10000 });

      // Tunggu sebentar (1 detik) untuk memastikan React selesai merender komponen ke layar
      await new Promise((r) => setTimeout(r, 1000));

      const html = await page.content();

      // Tentukan path output
      const outDir = route === "/" ? DIST_DIR : path.join(DIST_DIR, route);

      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), html);

      console.log(`✓ Saved: ${path.join(outDir, "index.html")}`);
    } catch (err) {
      console.error(`❌ Gagal merender rute ${route}:`, err.message);
    } finally {
      await page.close();
    }
  }

  console.log("Menutup browser dan server...");
  await browser.close();
  
  // Tutup paksa semua sisa koneksi internet lokal agar terminal langsung selesai
  connections.forEach((conn) => conn.destroy());
  server.close();
  
  console.log("Prerendering selesai total!");
  process.exit(0);
}

prerender();
