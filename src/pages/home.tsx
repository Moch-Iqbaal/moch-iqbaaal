export default function Home() {
  return (
    <div className="space-y-12">

      {/* JUMBOTRON / HERO IMAGE */}
      <section className="w-full -mx-6 md:-mx-12">
        <div className="relative w-full h-[300px] md:h-[480px] overflow-hidden">
          <img
            src="/images/hero-LP.jpeg"
            alt="Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>
      </section>

      {/* MUSIC PLAYER */}
      <section className="mt-8 flex justify-start">
        <div className="w-full max-w-md border border-white/10 bg-black/40 backdrop-blur-md p-4 rounded-xl">
          
          {/* HEADER */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Now Playing
              </p>

              <h3 className="text-sm font-semibold tracking-wide text-white">
                Gata Only
              </h3>

              <p className="text-xs text-white/40">
                My Personal Website Theme
              </p>
            </div>

            <div className="text-xl animate-pulse">
              🎵
            </div>
          </div>

          {/* AUDIO */}
          <audio
            controls
            autoPlay
            loop
            className="w-full opacity-80 hover:opacity-100 transition"
          >
            <source
              src="/music/gata-only.mp3"
              type="audio/mpeg"
            />

            Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      {/* HEADLINE */}
      <section className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-sans tracking-tightest leading-none">
          TROUBLE MAKER. <br />
          <span className="font-mono text-muted-foreground italic">SYSTEM BREAKER.</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-sans max-w-2xl leading-relaxed">
          I build systems to understand how they break. A developer by day, 
          and a security advocate by choice. Focused on digital privacy, 
          OSINT, and ethical troubleshooting.
        </p>
      </section>

      {/* RECENT ACTIVITY */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest opacity-40">Recent Activity</span>
          <div className="h-px flex-1 bg-border/40"></div>
        </div>
        
        <div className="grid gap-8">
          {[
            {
              title: "Digital Privacy Advocacy",
              desc: "Researching data protection laws and their implementation in Southeast Asia.",
              date: "2024",
            },
            {
              title: "OSINT Framework Development",
              desc: "Building tools for investigative journalism and fact-checking.",
              date: "2023",
            },
            {
              title: "System Troubleshooting",
              desc: "Consulting for startups on scalable architecture and security hardening.",
              date: "2023",
            }
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-bold group-hover:underline underline-offset-4">{item.title}</h3>
                <span className="font-mono text-xs opacity-40">{item.date}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NAVIGATION LINKS */}
      <div className="pt-12">

        {/* DIRECT TO COLLABORATE */}
        <a 
          href="/collaborate" 
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-tighter hover:gap-4 transition-all"
        >
          View all projects <span>&rarr;</span>
        </a>

        {/* DIRECT TO CONTACTS */}
        <a 
          href="/contacts" 
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-tighter hover:gap-4 transition-all ml-8"
        >
          Get in touch <span>&rarr;</span>
        </a>

        {/* DIRECT TO ABOUT */}
        <a 
          href="/about"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-tighter hover:gap-4 transition-all ml-8"
        >
          About Me <span>&rarr;</span>
        </a>

      </div>
    </div>
  );
}