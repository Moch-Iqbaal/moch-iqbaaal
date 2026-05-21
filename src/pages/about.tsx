export default function About() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-sans tracking-tightest">
          SYSTEMS ARE <br />
          <span className="italic opacity-40">FRAGILE.</span>
        </h2>
        <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          <p>
            Saya telah menghabiskan lebih dari satu dekade menjelajahi persimpangan antara teknologi dan hak asasi manusia.
            Pekerjaan saya berfokus pada identifikasi kerentanan—bukan hanya dalam kode, tetapi juga dalam sistem
            yang mengatur kehidupan digital kita.
          </p>
          <p>
            Baik itu membaca implikasi kebocoran basis data nasional atau mengembangkan alat yang menjaga 
            privasi, tujuannya tetap sama: transparansi, keamanan, dan pemberdayaan.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest opacity-40">Core Expertise</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Offensive Security",
            "Open Source Intelligence",
            "Digital Privacy Advocacy",
            "Software Archaeology",
            "Crisis Response",
            "Technical Writing"
          ].map((skill) => (
            <div key={skill} className="p-4 border border-border/40 font-mono text-sm">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
