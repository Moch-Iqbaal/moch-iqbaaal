export default function About() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">

        {/* ABOUT ME - My Photo */}
        <div className="relative w-60 h-60 group ">

          {/* Shadow jatuh ke bawah */}
          <div className="absolute -top-11 left-11 right-11 h-full rounded-full bg-black/80 dark:bg-black/80 blur-2xl" />

          {/* Ring tipis di luar foto */}
          <div className="absolute -inset-1 rounded-full border border-zinc-300/30 dark:border-zinc-600/40" />

          {/* Foto */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <img
              src="images/my-photo.jpeg"
              alt="Profile Photo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Vignette bawah */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>

        </div>

        <span className="font-mono text-xs uppercase tracking-widest opacity-55 ">Muhammad Maulana <em className="text-cyan-600">Iqbal</em></span>

        <h2 className="text-4xl md:text-5xl font-sans mt-5 tracking-tightest">
          TENTANG MOCH <br />
          <span className="italic opacity-40">IQBAL</span>
        </h2>

      <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
        <p>
          Muhammad Maulana Iqbal adalah seorang <strong>technology enthusiast</strong> yang telah
          jatuh cinta dengan dunia teknologi sejak duduk di bangku SMP — tidak pernah berhenti
          mengikuti perkembangan teknologi seperti <strong>Artificial Intelligence, Cryptocurrency, Blockchain, Computer Quantum</strong>, hingga dunia{" "}
          <strong>Security Research</strong>. Ia secara aktif mempelajari bagaimana sebuah sistem
          bekerja, baik di sisi mobile maupun desktop, dan terus menggali <em>mengapa</em> suatu sistem aplikasi
          bisa berjalan sebagaimana mestinya di tangan penggunanya.
        </p>
        <p>
          Pada tahun 2021, ia dipercaya sebagai <strong>Leader</strong> komunitas{" "}
          <a href="https://h-int.vercel.app/" target="_blank" className="text-cyan-600 hover:underline">
            H.INT (HECKER INTERNASIONAL)
          </a>
          — dan di tengah perannya, ia menemukan celah keamanan kritis yang memilih ia{" "}
          <strong>tutup dengan bertanggung jawab</strong>, bukan dieksploitasi. Saat ini ia aktif
          mengeksplorasi persimpangan antara <strong>teknologi, keamanan digital, dan pengembangan
          sistem</strong> — Ia sendiri percaya bahwa memahami cara sesuatu bisa rusak adalah langkah pertama
          untuk membangunnya lebih baik.
        </p>
      </div>
      </section>

      <section className="space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest opacity-40">Core Expertise</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Web3/Blockchain Development",
            "Open Source Intelligence",
            "Digital Privacy Advocacy",
            "Cryptography Research",
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