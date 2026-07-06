import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Card, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { ShieldCheck, Mic } from "lucide-react";

const WA_NUMBER = "6285385024451";

export default function Collaborate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleDispatch = () => {
    if (!name.trim() || !message.trim()) {
      alert("Minimal isi Nama dan Pesan dulu ya!");
      return;
    }

    const text = `Halo Iqbal! 👋

*COLLABORATION REQUEST*
─────────────────────
*Nama:* ${name}
*Email:* ${email || "-"}
*Subject:* ${subject || "-"}

*Pesan:*
${message}
─────────────────────
_Dikirim via collaborate.moch-iqbal.info_`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encoded}`;

    window.open(waUrl, "_blank");
    setSent(true);

    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSent(false);
    }, 3000);
  };

  return (
    <div className="space-y-16">

      {/* ── HEADLINE ── */}
      <section className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Kolaborasi
        </span>
        <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-foreground">
          Mari Membangun Sesuatu Bersama
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Saya terbuka untuk proyek yang menantang dan relevan dengan perkembangan teknologi masa
          depan. Jika Anda memiliki proyek yang ingin dikerjakan bersama, atau membutuhkan
          wawasan seputar keamanan digital, pengembangan sistem, maupun blockchain — mari
          berdiskusi lebih lanjut.
        </p>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="grid md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:100ms] [animation-fill-mode:backwards]">
        <Card className="bg-card border-border/40 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <CardHeader className="space-y-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
            </div>
            <CardTitle className="font-mono text-sm uppercase tracking-widest text-foreground">
              Consultancy
            </CardTitle>
            <CardDescription className="text-muted-foreground leading-relaxed">
              Konsultasi keamanan digital, audit sistem, dan strategi mitigasi risiko untuk
              individu atau organisasi.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-card border-border/40 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <CardHeader className="space-y-3">
            <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center">
              <Mic className="w-4 h-4 text-violet-500" />
            </div>
            <CardTitle className="font-mono text-sm uppercase tracking-widest text-foreground">
              Speaking
            </CardTitle>
            <CardDescription className="text-muted-foreground leading-relaxed">
              Sesi berbicara tentang keamanan digital, teknologi terbaru, dan tren industri untuk
              konferensi, webinar, atau acara perusahaan.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* ── FORM ── */}
      <section className="space-y-8 pt-4 animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:200ms] [animation-fill-mode:backwards]">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Kirim Pesan
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>

        <div className="space-y-4 max-w-xl">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Nama *
              </label>
              <Input
                placeholder="Nama lengkap Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent border-border/40 rounded-lg focus-visible:ring-1 focus-visible:ring-foreground/20 transition-shadow"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <Input
                placeholder="anda@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-border/40 rounded-lg focus-visible:ring-1 focus-visible:ring-foreground/20 transition-shadow"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Subjek
            </label>
            <Input
              placeholder="Topik atau kebutuhan Anda"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-transparent border-border/40 rounded-lg focus-visible:ring-1 focus-visible:ring-foreground/20 transition-shadow"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Pesan *
            </label>
            <Textarea
              placeholder="Ceritakan lebih detail tentang proyek atau kebutuhan Anda..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[150px] bg-transparent border-border/40 rounded-lg focus-visible:ring-1 focus-visible:ring-foreground/20 resize-none transition-shadow"
            />
          </div>

          {/* BUTTON */}
          <Button
            onClick={handleDispatch}
            disabled={sent}
            className="w-full h-12 font-mono uppercase tracking-widest rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
          >
            {sent ? "✓ Mengalihkan ke WhatsApp..." : "Kirim Pesan →"}
          </Button>

          {/* INFO */}
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest text-center">
            Pesan akan dikirim langsung via WhatsApp
          </p>

        </div>
      </section>
    </div>
  );
}