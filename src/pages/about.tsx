import { useEffect, useState } from "react";

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

export default function About() {
  const typedName = useTypewriter("Muhammad Maulana Iqbal");

  return (
    <div className="space-y-16">

      {/* ── HERO ── */}
      <section className="space-y-8">

        {/* FOTO */}
        <div className="relative w-52 h-52 group animate-in fade-in zoom-in-95 duration-700">
          <div className="absolute -inset-1 rounded-full border border-border/40" />
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <img
              src="/images/my-photo.jpeg"
              alt="Muhammad Maulana Iqbal"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* NAME + TITLE */}
        <div className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground inline-flex items-center min-h-[1.4em]">
            {typedName}
            <span className="inline-block w-[2px] h-[1em] ml-1 bg-muted-foreground align-middle animate-pulse" />
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:180ms] [animation-fill-mode:backwards]">
            Fullstack Developer
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:260ms] [animation-fill-mode:backwards]">
            Membangun sistem yang andal — dari antarmuka web hingga infrastruktur blockchain terdistribusi.
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-3 gap-4 max-w-sm">
          {[
            { value: "2+", label: "Pengalaman Kerja" },
            { value: "11+", label: "Proyek Selesai" },
            { value: "3", label: "Perusahaan" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="space-y-1 animate-in fade-in slide-in-from-bottom-2 duration-700 [animation-fill-mode:backwards] transition-transform hover:-translate-y-0.5"
              style={{ animationDelay: `${340 + i * 100}ms` }}
            >
              <p className="text-2xl font-bold text-foreground font-mono">{stat.value}</p>
              <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-fill-mode:backwards]">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Tentang
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>

        <div className="space-y-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
          <p>
            Saya adalah seorang Fullstack Developer berbasis di Indonesia dengan pengalaman
            membangun aplikasi web skala produksi menggunakan{" "}
            <span className="text-foreground font-medium">React, TypeScript, PHP</span>, dan{" "}
            <span className="text-foreground font-medium">Node.js</span>. Ketertarikan saya
            pada teknologi dimulai sejak SMP dan terus berkembang hingga merambah ke ranah
            blockchain dan keamanan sistem.
          </p>
          <p>
            Pengalaman paling signifikan saya adalah mengembangkan sistem verifikasi sertifikat
            berbasis{" "}
            <span className="text-foreground font-medium">Hyperledger Fabric</span> — platform
            blockchain enterprise dengan implementasi kriptografi SHA-256, X.509, dan Digital
            Signature. Pengalaman ini memberi saya pemahaman mendalam tentang bagaimana sistem
            terdistribusi dirancang untuk keandalan dan keamanan.
          </p>
          <p>
            Saya percaya bahwa memahami cara sebuah sistem bisa gagal adalah fondasi untuk
            membangunnya lebih baik. Prinsip ini yang mengarahkan saya ke pemilihan stack,
            arsitektur, dan pendekatan dalam setiap proyek yang saya kerjakan.
          </p>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-fill-mode:backwards]">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Pendidikan
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>

        <div className="space-y-4">
          <div className="grid md:grid-cols-[180px_1fr] gap-1 md:gap-8 transition-transform duration-300 hover:translate-x-1">
            <p className="font-mono text-xs text-muted-foreground pt-0.5">2025 — Sekarang</p>
            <div>
              <h3 className="font-semibold text-foreground">
                S1 Ilmu Komputer
              </h3>
              <p className="text-sm text-muted-foreground">
                Universitas Cakrawala
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE EXPERTISE ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Keahlian Utama
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: "Fullstack Web Development",
              desc: "React, Next.js, TypeScript, PHP, Node.js",
            },
            {
              title: "Blockchain Engineering",
              desc: "Hyperledger Fabric, Solidity, Smart Contract",
            },
            {
              title: "Database & Backend",
              desc: "MySQL, PostgreSQL, Supabase, REST API",
            },
            {
              title: "DevOps & Deployment",
              desc: "Git, Docker, Vercel, Linux",
            },
            {
              title: "Security Fundamentals",
              desc: "Kriptografi, X.509, Digital Signature, SHA-256",
            },
            {
              title: "Technical Writing",
              desc: "Dokumentasi sistem, API docs, README",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="p-4 border border-border/40 rounded-xl bg-card space-y-1 transition-all duration-300 hover:bg-muted/30 hover:-translate-y-1 hover:shadow-md animate-in fade-in slide-in-from-bottom-2 duration-700 [animation-fill-mode:backwards]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="font-mono text-sm font-medium text-foreground">{item.title}</p>
              <p className="font-mono text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LINKS ── */}
      <section className="space-y-4">
        <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Temukan Saya
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            {
              label: "GitHub",
              href: "https://github.com/Moch-Iqbaal",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/muhamad-maulana-iqbal/",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/m.iqbaaal_3/",
            },
          ].map((link, i) => (
            
              <a key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/40 text-sm font-mono text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-border hover:scale-[1.04] active:scale-95 animate-in fade-in slide-in-from-bottom-2 duration-700 [animation-fill-mode:backwards]"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}