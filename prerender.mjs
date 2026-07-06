// prerender.mjs
import puppeteer from "puppeteer";
import { createServer } from "http-server";
import fs from "fs";
import path from "path";

const ROUTES = ["/", "/about", "/collaborate", "/contacts"];
const DIST_DIR = path.resolve("dist");
const PORT = 4173;

async function prerender() {
  // 1. Jalankan static server untuk hasil build vite
  const server = createServer({ root: DIST_DIR });
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Static server running at http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Prerendering ${url} ...`);

    await page.goto(url, { waitUntil: "networkidle0" });

    // Tunggu React selesai render (opsional tapi aman)
    await page.waitForSelector("#root", { timeout: 5000 });

    const html = await page.content();

    // Tentukan path output
    const outDir =
      route === "/"
        ? DIST_DIR
        : path.join(DIST_DIR, route);

    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html);

    console.log(`✓ Saved: ${path.join(outDir, "index.html")}`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log("Prerendering selesai!");
}

prerender();