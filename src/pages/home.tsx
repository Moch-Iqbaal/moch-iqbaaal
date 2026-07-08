import React, { useEffect, useRef, useState } from "react";
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

interface ScrambleTextProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

function ScrambleText({ text, delay = 0, onComplete }: ScrambleTextProps): React.ReactElement {
  const [displayText, setDisplayText] = useState("");
  const chars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz1234567890@#$%&*";

  useEffect(() => {
    let isMounted = true;

    const startTimeout = setTimeout(() => {
      let iterations = 0;
      const originalText = text;

      const interval = setInterval(() => {
        if (!isMounted) return;

        const scrambled = originalText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        setDisplayText(scrambled);

        if (iterations >= originalText.length) {
          clearInterval(interval);
          onComplete?.();
        }

        iterations += 1 / 3;
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      isMounted = false;
      clearTimeout(startTimeout);
    };
  }, [text, delay]);

  return <>{displayText || text}</>;
}
 
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
  variant?: "up" | "scale" | "backLeft" | "backRight";
}

function Reveal({ children, className = "", delay = 0, as = "div", variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  // Varian backInLeft/backInRight pakai CSS keyframe animation (bukan transition biasa)
  if (variant === "backLeft" || variant === "backRight") {
    const animationClass = variant === "backLeft" ? "animate-back-in-left" : "animate-back-in-right";
    return (
      <Tag
        ref={ref as React.RefObject<any>}
        className={`${isVisible ? animationClass : "opacity-0"} ${className}`}
        style={{
          animationDelay: isVisible ? `${delay}ms` : "0ms",
          animationFillMode: "backwards",
        }}
      >
        {children}
      </Tag>
    );
  }

  const hiddenState = variant === "scale" ? "opacity-0 scale-95" : "opacity-0 translate-y-8";
  const visibleState = variant === "scale" ? "opacity-100 scale-100" : "opacity-100 translate-y-0";

  return (
    <Tag
      ref={ref as React.RefObject<any>}
      className={`transition-all duration-700 ease-out ${isVisible ? visibleState : hiddenState} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

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
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    type: "Fullstack",
    github: "https://github.com/Moch-Iqbaal",
    demo: "https://mebel-putrijaya.vercel.app",
    highlight: true,
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
    tech: ["PHP", "MySQL", "Bootstrap"],
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
    demo: "https://www.linkedin.com/posts/muhamad-maulana-iqbal_python-ocr-opencv-ugcPost-7478991284670574592-kmPD/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw1LGYBW2NwCHB3H1CpbxjKsoZndAaRlkw",
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

const ACTIVITIES = [
  {
    title: "Build Ai LLM Research & Modelling in Local Environment",
    desc: "Bereksperimen dengan LLM lokal untuk riset dan development AI, dengan fokus pada teknik yang menjaga privasi.",
    date: "2026",
  },
  {
    title: "Blockchain Research & Development Applications",
    desc: "Eksplorisasi aplikasi terdesentralisasi dan keamanan smart contract di ruang kripto.",
    date: "2025",
  },
  {
    title: "Digital Privacy Advocacy",
    desc: "Meneliti & mempelajari hukum perlindungan data serta penerapannya di Indonesia.",
    date: "2024",
  },
  {
    title: "See & Learn Case Leaked Data PDN Indonesian",
    desc: "Menganalisis implikasi kebocoran data PDN dan cara melindungi diri dari pelanggaran serupa.",
    date: "2024",
  },
  {
    title: "Learn Programming Language & Security Research",
    desc: "Mempelajari dasar-dasar pemrograman, keamanan siber, dan praktik terbaik untuk pengembangan perangkat lunak yang aman.",
    date: "2022",
  },
];

const SKILLS = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  Backend: ["Node.js", "PHP", "Express.js"],
  Database: ["MySQL", "PostgreSQL", "Supabase"],
  Blockchain: ["Hyperledger Fabric", "Solidity", "SHA-256", "Digital Signature"],
  Tools: ["Git", "Docker", "Vercel", "Vite", "Linux"],
  Cybersecurity: ["OWASP", "Penetration Testing", "Metasploit", "Data Privacy"],
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
  const typedGreeting = useTypewriter("Halo, Saya-");
  const [scrambleDone, setScrambleDone] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="space-y-24 overflow-x-hidden">

      {/* ── 1. HERO (Langsung Muncul di Awal) ── */}
      <section className="pt-8 space-y-6 max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
            Open to work
          </span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground">
          {typedGreeting}
        </p>

        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight leading-tight text-foreground min-h-[1.2em]">
          <span className={scrambleDone ? "animate-pulse" : ""}>
            <ScrambleText
              text="Muhammad Maulana Iqbal"
              delay={900}
              onComplete={() => setScrambleDone(true)}
            />
          </span>
          <span className="inline-block w-[3px] md:w-[4px] h-[0.9em] ml-1 bg-foreground align-middle animate-pulse" />
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:200ms] [animation-fill-mode:backwards]">
          Fullstack Developer — building reliable systems,{" "}
          <span className="text-foreground font-medium">
            from web interfaces to distributed ledgers.
          </span>
        </p>

        <p className="text-base text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:300ms] [animation-fill-mode:backwards]">
          Berpengalaman di React, PHP, dan Hyperledger Fabric. Telah mengerjakan
          proyek nyata mulai dari dashboard bisnis, platform e-commerce, hingga sistem
          verifikasi sertifikat berbasis blockchain.
        </p>

        <div className="flex flex-wrap gap-3 pt-2 animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:400ms] [animation-fill-mode:backwards]">
          
            <a href="https://github.com/Moch-Iqbaal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium transition-all duration-300 hover:opacity-80 hover:scale-[1.04] active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          
           <a href="https://www.linkedin.com/in/muhamad-maulana-iqbal/"
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

          
          <a  href="https://drive.google.com/drive/folders/1_JrsEo6D_rifI0vwicI8O84SFi8hA9wt?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium transition-all duration-300 hover:bg-muted hover:scale-[1.04] active:scale-95 text-foreground"
          >
            Lihat Sertifikat Saya →
          </a>
        </div>
      </section>

      {/* ── 2. AKTIVITAS RIWAYAT (Reveal On Scroll) ── */}
      <Reveal as="section" className="space-y-8">
        <div className="relative border-l border-border/50 ml-2 pl-6 md:pl-8 space-y-10">
          {ACTIVITIES.map((act, i) => (
            <Reveal key={i} delay={i * 120} className="group relative">
              {/* Titik Indikator Interaktif pada Garis Timeline */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-card border-2 border-muted-foreground/40 transition-all duration-300 group-hover:border-cyan-500 group-hover:bg-cyan-400/20 group-hover:scale-125" />

              {/* Kartu Aktivitas yang Bergeser saat di-Hover */}
              <div className="space-y-3 p-4 rounded-xl border border-transparent hover:border-border/60 hover:bg-muted/20 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1">

                {/* Tahun diletakkan di atas Title */}
                <div className="inline-block px-2 py-0.5 rounded-md bg-muted/60 border border-border/40">
                  <span className="font-mono text-[11px] font-medium text-cyan-400">
                    {act.date}
                  </span>
                </div>

                {/* Judul dan Deskripsi */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-cyan-400/90 transition-colors duration-300">
                    {act.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                    {act.desc}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ── 3. PROYEK (Reveal On Scroll) ── */}
      <Reveal as="section" className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Proyek
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={i}
              delay={Math.floor(i / 2) * 150}
              variant={i % 2 === 0 ? "backLeft" : "backRight"}
              className={`group relative border rounded-xl p-5 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg ${
                project.highlight
                  ? "border-violet-500/40 bg-violet-500/5 hover:shadow-violet-500/10"
                  : "border-border/40 bg-card hover:bg-muted/30 hover:shadow-foreground/5"
              }`}
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

                 <a href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-0.5"
                >
                  GitHub ↗
                </a>
                {project.demo && (

                   <a href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-0.5"
                  >
                    Demo ↗
                  </a>
                )}
              </div>
            </Reveal>
          ))}

          <Reveal delay={100} className="w-full">
            
             <a href="https://github.com/Moch-Iqbaal?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-5 py-4 rounded-xl border border-dashed border-border/60 hover:border-border hover:bg-muted/30 transition-all duration-300 hover:-translate-y-1 group"
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
          </Reveal>
        </div>
      </Reveal>

      {/* ── 4. SKILLS (Reveal On Scroll) ── */}
      <Reveal as="section" className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Tech Stack
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <Reveal key={category} delay={i * 100} className="space-y-2">
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
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* ── 5. CTA (Reveal On Scroll) ── */}
      <Reveal
        as="section"
        variant="scale"
        className="group/cta relative border border-border/40 rounded-2xl p-8 bg-card space-y-4 overflow-hidden"
      >
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
      </Reveal>
    </div>
  );
}