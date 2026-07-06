import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// ==========================================
// TYPEWRITER HOOK — khusus buat nama di hero
// ==========================================

function useTypewriter(text: string, typingSpeed = 90, deletingSpeed = 50, pauseTime = 1800) {
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && display === text) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && display === "") {
      timeout = setTimeout(() => setIsDeleting(false), 400);
    } else {
      const nextText = isDeleting
        ? text.slice(0, display.length - 1)
        : text.slice(0, display.length + 1);
      timeout = setTimeout(
        () => setDisplay(nextText),
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [display, isDeleting, text, typingSpeed, deletingSpeed, pauseTime]);

  return display;
}

// ==========================================
// DATA
// ==========================================

const PROJECTS = [
  {
    title: "Private Blockchain Certificate Verification",
    description:
      "Sistem verifikasi sertifikat berbasis Hyperledger Fabric dengan keamanan SHA-256, X.509, dan Digital Signature. Mendukung invoke, query, dan endorsement transaksi blockchain.",
    tech: ["Hyperledger Fabric", "Node.js", "SHA-256", "X.509", "Docker"],
    type: "Blockchain",
    github: "https://github.com/Moch-Iqbaal",
    demo: null,
    highlight: true,
  },
  {
    title: "Mebel Putri Jaya",
    description:
      "Platform digital untuk mendukung penjualan produk furnitur secara online. Dibangun dengan React + TypeScript + Supabase CMS, deployed di Vercel.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    type: "Fullstack",
    github: "https://github.com/Moch-Iqbaal",
    demo: "https://mebel-putri-jaya.vercel.app",
    highlight: false,
  },
  {
    title: "Asrama Al-Istiqomah",
    description:
      "Website resmi Asrama Al-Istiqomah, Pesantren Nurul Huda Munjul — Cirebon. Static site dengan SEO optimization dan sitemap.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    type: "Frontend",
    github: "https://github.com/Moch-Iqbaal/asrama-alistiqomah",
    demo: "https://asrama-alistiqomah.vercel.app",
    highlight: false,
  },
  {
    title: "Aplikasi Point of Sales",
    description:
      "Sistem kasir berbasis web untuk manajemen transaksi, stok produk, dan laporan penjualan harian.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    type: "Fullstack",
    github: "https://github.com/Moch-Iqbaal/Aplikasi-Kasir",
    demo: null,
    highlight: false,
  },
  {
    title: "OCR Application",
    description:
      "Aplikasi pengenalan teks dari gambar menggunakan Optical Character Recognition.",
    tech: ["Python", "Tesseract", "OpenCV"],
    type: "Backend",
    github: "https://github.com/Moch-Iqbaal",
    demo: null,
    highlight: false,
  },
  {
    title: "H-INT Community Website",
    description:
      "Website komunitas dengan fitur publikasi konten dan manajemen anggota.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    type: "Frontend",
    github: "https://github.com/Moch-Iqbaal/h.int",
    demo: "https://h-int.vercel.app/",
    highlight: false,
  },
];

const EXPERIENCES = [
  {
    company: "PT. Global Inovasi Terdepan (Righjet)",
    role: "Blockchain Developer Intern",
    period: "2026 · 3–4 bulan",
    points: [
      "Mengembangkan sistem verifikasi sertifikat berbasis Blockchain Private Hyperledger Fabric.",
      "Mengimplementasikan keamanan menggunakan SHA-256, X.509, dan Digital Signature.",
      "Melakukan pengujian transaksi blockchain (invoke, query, endorsement) serta analisis struktur block dan ledger.",
    ],
  },
  {
    company: "Mebel Putri Jaya",
    role: "Fullstack Developer",
    period: "2025 · 3–4 bulan",
    points: [
      "Merancang dan mengembangkan platform digital untuk mendukung penjualan produk secara online.",
      "Membangun CMS berbasis Supabase untuk manajemen produk dan konten.",
      "Melakukan maintenance dan improvement fitur berdasarkan feedback pengguna.",
    ],
  },
  {
    company: "CV. Aksarupa Grup",
    role: "Web Developer",
    period: "2023 · 3–4 bulan",
    points: [
      "Membangun dashboard untuk tracking data klien dan penjualan, mengurangi proses manual.",
      "Berkolaborasi dengan tim non-teknis untuk menerjemahkan kebutuhan bisnis menjadi solusi digital.",
    ],
  },
];

const SKILLS = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  Backend: ["Node.js", "Laravel", "PHP", "Express.js"],
  Database: ["MySQL", "PostgreSQL", "Supabase"],
  Blockchain: ["Hyperledger Fabric", "Solidity", "SHA-256", "X.509"],
  Tools: ["Git", "Docker", "Vercel", "Vite", "Linux"],
};

const TYPE_BADGE: Record<string, string> = {
  Blockchain: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Fullstack: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Frontend: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Backend: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

// ==========================================
// HOME PAGE
// ==========================================

export default function Home() {
  const typedName = useTypewriter("Muhammad Maulana Iqbal");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="space-y-24">

      {/* ── 1. HERO ── */}
      <section className="pt-8 space-y-6 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 animate-in fade-in slide-in-from-top-2 duration-500">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
            Open to work
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight leading-tight text-foreground min-h-[1.2em]">
          {typedName}
          <span className="inline-block w-[3px] md:w-[4px] h-[0.9em] ml-1 bg-foreground align-middle animate-pulse" />
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:200ms] [animation-fill-mode:backwards]">
          Fullstack Developer — building reliable systems,{" "}
          <span className="text-foreground font-medium">
            from web interfaces to distributed ledgers.
          </span>
        </p>

        <p className="text-base text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:300ms] [animation-fill-mode:backwards]">
          Berpengalaman di React, Laravel, dan Hyperledger Fabric. Telah mengerjakan
          proyek nyata mulai dari dashboard bisnis, platform e-commerce, hingga sistem
          verifikasi sertifikat berbasis blockchain.
        </p>

        <div className="flex flex-wrap gap-3 pt-2 animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:400ms] [animation-fill-mode:backwards]">
          <a
            href="https://github.com/Moch-Iqbaal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium transition-all duration-300 hover:opacity-80 hover:scale-[1.04] active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhamad-maulana-iqbal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium transition-all duration-300 hover:bg-muted hover:scale-[1.04] active:scale-95 text-foreground"
          >
            LinkedIn
          </a>
          <NavLink
            to="/contacts"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium transition-all duration-300 hover:bg-muted hover:scale-[1.04] active:scale-95 text-foreground"
          >
            Hubungi Saya
          </NavLink>

          <a
            href="https://drive.google.com/drive/folders/1_JrsEo6D_rifI0vwicI8O84SFi8hA9wt?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium transition-all duration-300 hover:bg-muted hover:scale-[1.04] active:scale-95 text-foreground"
          >
            Lihat Sertifikat Saya
          </a>
        </div>
      </section>

      {/* ── 2. EXPERIENCE ── */}
      <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-delay:100ms] [animation-fill-mode:backwards]">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Pengalaman
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>

        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[180px_1fr] gap-1 md:gap-8 transition-transform duration-300 hover:translate-x-1 animate-in fade-in slide-in-from-bottom-2 duration-700 [animation-fill-mode:backwards]"
              style={{ animationDelay: `${150 + i * 120}ms` }}
            >
              <div className="md:pt-0.5 space-y-0.5">
                <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
              </div>
              <div className="space-y-2">
                <div>
                  <h3 className="font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <ul className="space-y-1.5">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-border flex-shrink-0 mt-0.5">—</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. PROJECTS ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Proyek
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className={`group relative border rounded-xl p-5 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-in fade-in slide-in-from-bottom-3 [animation-fill-mode:backwards] ${
                project.highlight
                  ? "border-violet-500/40 bg-violet-500/5 hover:shadow-violet-500/10"
                  : "border-border/40 bg-card hover:bg-muted/30 hover:shadow-foreground/5"
              }`}
              style={{ animationDelay: `${i * 90}ms`, animationDuration: "700ms" }}
            >
              {project.highlight && (
                <span className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-widest text-violet-400 border border-violet-500/30 px-2 py-0.5 rounded-full animate-pulse">
                  Featured
                </span>
              )}

              <div className="space-y-1.5 pr-20">
                <span
                  className={`inline-block font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                    TYPE_BADGE[project.type]
                  }`}
                >
                  {project.type}
                </span>
                <h3 className="font-semibold text-foreground leading-snug transition-colors duration-300 group-hover:text-foreground/80">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded-lg border border-border/40 bg-muted/50 text-foreground transition-colors duration-300 group-hover:border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-0.5"
                >
                  GitHub ↗
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-0.5"
                  >
                    Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
          
          <a
            href="https://github.com/Moch-Iqbaal?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-5 py-4 rounded-xl border border-dashed border-border/60 hover:border-border hover:bg-muted/30 transition-all duration-300 hover:-translate-y-1 group animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-fill-mode:backwards]"
            style={{ animationDelay: `${PROJECTS.length * 90}ms` }}
          >
            <div>
              <p className="text-sm font-medium text-foreground">
                Lihat semua proyek di GitHub
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Masih banyak proyek lain yang belum ditampilkan di sini
              </p>
            </div>
            <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300">
              →
            </span>
          </a>

        </div>
      </section>

      {/* ── 4. SKILLS ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Tech Stack
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <div
              key={category}
              className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-700 [animation-fill-mode:backwards]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded-lg border border-border/40 bg-muted/50 text-foreground transition-all duration-300 hover:scale-105 hover:border-border hover:bg-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="group/cta relative border border-border/40 rounded-2xl p-8 bg-card space-y-4 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">

        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_50%_0%,theme(colors.foreground/8%),transparent_40%)]" />

        <h2 className="relative text-xl font-semibold text-foreground">
          Tertarik untuk berkolaborasi?
        </h2>
        <p className="relative text-sm text-muted-foreground leading-relaxed max-w-lg">
          Terbuka untuk peluang fullstack development, kontrak freelance, atau diskusi
          proyek. Kirim pesan dan saya akan membalas dalam 24 jam.
        </p>
        <div className="relative flex flex-wrap gap-3">
          <NavLink
            to="/collaborate"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.03] hover:shadow-lg hover:shadow-foreground/10 active:scale-95"
          >
            Mulai Kolaborasi
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </NavLink>
          <NavLink
            to="/contacts"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium transition-all duration-300 hover:bg-muted hover:scale-[1.03] active:scale-95 text-foreground"
          >
            Lihat Kontak
          </NavLink>
        </div>
      </section>
    </div>
  );
}
