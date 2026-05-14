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
            I've spent over a decade navigating the intersection of technology and human rights. 
            My work focuses on identifying vulnerabilities—not just in code, but in the systems 
            that govern our digital lives.
          </p>
          <p>
            Whether it's auditing a national database or developing privacy-preserving tools, 
            the goal remains the same: transparency, security, and empowerment.
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
