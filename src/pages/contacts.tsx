import { useState } from "react";
import { Mail, Github, Linkedin, Shield, Instagram, VoicemailIcon, Facebook } from "lucide-react";

const PGP_PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
X/UxMp2ic1RWuKWHJdsqE5/GYxAy
=0vSs
-----END PGP PUBLIC KEY BLOCK-----`;

const socials = [
  { name: "Email", icon: Mail, value: "muh.maulanaiqbal18@gmail.com", href: "mailto:muh.maulanaiqbal18@gmail.com" },
  { name: "Voicemail", icon: VoicemailIcon, value: "muhm.iqbal@proton.me", href: "mailto:muhm.iqbal@proton.me" },
  { name: "GitHub", icon: Github, value: "Moch-Iqbaal", href: "https://github.com/Moch-Iqbaal" },
  { name: "Facebook", icon: Facebook, value: "Muhammad Maulana Iqbal", href: "https://www.facebook.com/INIAKUNABAIDEH.TQ" },
  { name: "Instagram", icon: Instagram, value: "@m.iqbaaal_3", href: "https://www.instagram.com/m.iqbaaal_3/" },
  { name: "LinkedIn", icon: Linkedin, value: "Muhamad Maulana Iqbal", href: "https://www.linkedin.com/in/muhamad-maulana-iqbal/" },
  { name: "PGP Key", icon: Shield, value: "Lihat Security Key ↓", href: "#pgp" },
];

const pgpSteps = [
  {
    title: "Install GPG di komputer kamu",
    content: (
      <div className="space-y-3 text-sm text-muted-foreground">
        <p>GPG adalah aplikasi untuk enkripsi pesan. Install dulu sebelum lanjut.</p>
        <div className="bg-background border border-border/40 rounded-lg px-4 py-3 font-mono text-xs space-y-2">
          <p><span className="text-muted-foreground"># Mac</span></p>
          <p className="text-foreground">brew install gnupg</p>
          <p className="mt-2"><span className="text-muted-foreground"># Windows → download di</span></p>
          <p className="text-cyan-500">gpg4win.org</p>
        </div>
        <p>Atau pakai <strong className="text-foreground">GPG Keychain</strong> (Mac) di gpgtools.org — lebih mudah karena ada tampilan grafisnya.</p>
      </div>
    ),
  },
  {
    title: "Import Public Key Saya",
    content: (
      <div className="space-y-3 text-sm text-muted-foreground">
        <p>Scroll ke bawah, klik tombol <strong className="text-foreground">Copy Key</strong> saat hover di blok kunci, simpan jadi file <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-foreground">iqbal.asc</code>, lalu jalankan:</p>
        <div className="bg-background border border-border/40 rounded-lg px-4 py-3 font-mono text-xs text-foreground">
          gpg --import iqbal.asc
        </div>
        <p>Kalau pakai GPG Keychain, tinggal klik <strong className="text-foreground">Import</strong> lalu pilih file-nya.</p>
      </div>
    ),
  },
  {
    title: "Tulis pesan kamu",
    content: (
      <div className="space-y-3 text-sm text-muted-foreground">
        <p>Buat file teks biasa, misalnya <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-foreground">pesan.txt</code>, lalu isi dengan pesan yang mau kamu kirim. Tidak ada format khusus.</p>
      </div>
    ),
  },
  {
    title: "Enkripsi pesannya",
    content: (
      <div className="space-y-3 text-sm text-muted-foreground">
        <p>Jalankan perintah ini di terminal:</p>
        <div className="bg-background border border-border/40 rounded-lg px-4 py-3 font-mono text-xs text-foreground">
          gpg --encrypt --armor -r muh.maulanaiqbal18@gmail.com pesan.txt
        </div>
        <p>Hasilnya file <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-foreground">pesan.txt.asc</code> yang sudah terenkripsi — hanya Saya yang bisa membukanya.</p>
      </div>
    ),
  },
  {
    title: "Kirim ke Saya",
    content: (
      <div className="space-y-3 text-sm text-muted-foreground">
        <p>Buka file <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-foreground">pesan.txt.asc</code>, copy semua isinya, lalu kirim ke:</p>
        <div className="bg-background border border-border/40 rounded-lg px-4 py-3 font-mono text-xs text-cyan-500">
          muh.maulanaiqbal18@gmail.com
        </div>
        <p>Hanya Saya yang punya private key-nya, jadi hanya Saya yang bisa baca isinya. Aman 🔐</p>
      </div>
    ),
  },
];

// ==========================================
// COMPONENT
// ==========================================

export default function Contacts() {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyKey = () => {
    navigator.clipboard.writeText(PGP_PUBLIC_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-16">

      {/* ── HEADLINE ── */}
      <section className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Kontak
        </span>
        <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-foreground">
          Mari Terhubung
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Untuk komunikasi yang aman, silakan gunakan PGP atau hubungi Saya melalui email
          ProtonMail. Pertanyaan standar dapat ditangani melalui Email atau DM Instagram.
        </p>
      </section>

      {/* ── SOCIAL LINKS ── */}
      <div className="space-y-1 animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:100ms] [animation-fill-mode:backwards]">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="flex items-center justify-between py-6 border-b border-border/40 group hover:px-2 hover:bg-muted/20 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              <span className="font-mono text-sm uppercase tracking-widest text-foreground">
                {social.name}
              </span>
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-mono text-sm hidden md:block">
              {social.value}
            </span>
            <span className="md:hidden">
              <social.icon className="w-4 h-4 text-muted-foreground" />
            </span>
          </a>
        ))}
      </div>

      {/* ── SECURITY KEY SECTION ── */}
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:200ms] [animation-fill-mode:backwards]" id="pgp">

        {/* SECTION LABEL */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Security Key
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">PGP Public Key</h2>

        {/* KEY INFO */}
        <div className="bg-muted/50 border border-border/40 rounded-xl p-5 font-mono text-sm space-y-2">
          {[
            { label: "Key ID", value: "7135A7D9" },
            { label: "Key Type", value: "RSA" },
            { label: "Key Size", value: "4096", accent: true },
            { label: "Expires", value: "2030-05-20" },
            { label: "User ID", value: "muh.maulanaiqbal18@gmail.com" },
          ].map((row) => (
            <div key={row.label} className="flex gap-4">
              <span className="text-muted-foreground w-24 flex-shrink-0">{row.label}</span>
              <span className={row.accent ? "text-cyan-500" : "text-foreground"}>{row.value}</span>
            </div>
          ))}
          <div className="flex gap-4">
            <span className="text-muted-foreground w-24 flex-shrink-0">Fingerprint</span>
            <span className="break-all text-foreground">
              F7A8 1473 79DA 3323 BD6C{" "}
              <span className="text-cyan-500">EBBB</span> D516{" "}
              <span className="text-cyan-500">5FE8</span> 7135 A7D9
            </span>
          </div>
        </div>

        {/* PUBLIC KEY BLOCK */}
        <div className="relative group bg-muted/50 border border-border/40 rounded-xl p-5 font-mono text-xs leading-relaxed transition-colors duration-300 hover:border-border">
          <button
            onClick={handleCopyKey}
            className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-lg border border-border/40 bg-background text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95"
          >
            {copied ? "✓ Copied!" : "Copy Key"}
          </button>
          <pre className="whitespace-pre-wrap break-all text-foreground/60 leading-5">
            {PGP_PUBLIC_KEY}
          </pre>
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          Ketika saya <em>generate new key</em>, PGP Key terbaru akan tersedia dari halaman ini.
        </p>

        {/* ACCORDION — CARA KIRIM PESAN */}
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Cara Kirim Pesan Terenkripsi
            </span>
            <div className="h-px flex-1 bg-border/40" />
          </div>

          <p className="text-sm text-muted-foreground">
            Kamu bisa hubungi Saya secara private &amp; aman dengan PGP key dan berikut
            langkah-langkahnya 👇
          </p>

          <div className="space-y-2">
            {pgpSteps.map((step, i) => (
              <div
                key={i}
                className="border border-border/40 rounded-xl overflow-hidden transition-colors duration-300 hover:border-border"
              >

                {/* TRIGGER */}
                <button
                  onClick={() => setOpenStep(openStep === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-cyan-500 font-bold w-4">{i + 1}</span>
                    <span className="font-mono text-sm font-medium text-foreground">{step.title}</span>
                  </div>
                  <span
                    className="text-muted-foreground font-mono text-xs transition-transform duration-300 flex-shrink-0 ml-4"
                    style={{ transform: openStep === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    ↓
                  </span>
                </button>

                {/* CONTENT */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openStep === i ? "400px" : "0px",
                    opacity: openStep === i ? 1 : 0,
                  }}
                >
                  <div className="px-5 pb-5 pt-2 border-t border-border/40 bg-muted/20">
                    {step.content}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}