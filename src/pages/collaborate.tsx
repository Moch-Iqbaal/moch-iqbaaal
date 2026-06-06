import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Card, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
 
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
    <div className="space-y-12">

      {/* HEADLINE */}
      <section className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-sans tracking-tightest">
          LET'S BUILD <br />
          <span className="italic opacity-40">TOGETHER.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Saya selalu menerima & mencari-cari sebuah proyek menarik yang menjadi bagian dari perubahan masa depan.
          Jika Anda memiliki proyek yang ingin berkerja sama dengan saya atau membutuhkan wawasan seputar keamanan digital, teknologi, atau pengembangan sistem,
          mari kita bicara.
        </p>
      </section>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-transparent border-border/40 shadow-none">
          <CardHeader>
            <CardTitle className="font-mono text-sm uppercase tracking-widest">Consultancy</CardTitle>
            <CardDescription className="text-muted-foreground">
              Konsultasi keamanan digital, audit sistem, dan strategi mitigasi risiko untuk individu atau organisasi.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-transparent border-border/40 shadow-none">
          <CardHeader>
            <CardTitle className="font-mono text-sm uppercase tracking-widest">Speaking</CardTitle>
            <CardDescription className="text-muted-foreground">
              Sesi berbicara tentang keamanan digital, teknologi terbaru, dan tren industri untuk konferensi, webinar, atau acara perusahaan.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* FORM */}
      <section className="space-y-8 pt-8">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest opacity-40">Send a Brief</span>
          <div className="h-px w-full bg-border/40"></div>
        </div>

        <div className="space-y-4 max-w-xl">

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase opacity-40">Name *</label>
              <Input
                placeholder="Your good name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent border-border/40 rounded-none focus-visible:ring-0"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase opacity-40">Email</label>
              <Input
                placeholder="your@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-border/40 rounded-none focus-visible:ring-0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase opacity-40">Subject</label>
            <Input
              placeholder="What's on your mind?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-transparent border-border/40 rounded-none focus-visible:ring-0"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase opacity-40">Message *</label>
            <Textarea
              placeholder="Tell me more about the project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[150px] bg-transparent border-border/40 rounded-none focus-visible:ring-0 resize-none"
            />
          </div>

          {/* BUTTON */}
          <Button
            onClick={handleDispatch}
            disabled={sent}
            className="w-full h-12 font-mono uppercase tracking-widest rounded-none transition-all"
          >
            {sent ? "✓ Redirecting to WhatsApp..." : "Dispatch Message →"}
          </Button>

          {/* INFO */}
          <p className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest text-center">
            Pesan akan dikirim langsung via WhatsApp
          </p>

        </div>
      </section>
    </div>
  );
}