import { Mail, Github, Twitter, Linkedin, Shield, Instagram, VoicemailIcon, Facebook } from "lucide-react";

export default function Contacts() {
  const socials = [
    { name: "Email", icon: Mail, value: "muh.maulanaiqbal18@gmail.com", href: "mailto:muh.maulanaiqbal18@gmail.com" },
    { name: "Voicemail", icon: VoicemailIcon, value: "muhm.iqbal@proton.me", href: "mailto:muhm.iqbal@proton.me" },
    { name: "GitHub", icon: Github, value: "Moch-Iqbaal", href: "https://github.com/Moch-Iqbaal" },
    { name: "Instagram", icon: Instagram, value: "@m.iqbaaal_3", href: "https://www.instagram.com/m.iqbaaal_3/" },
    { name: "Facebook", icon: Facebook, value: "Baal Iqq", href: "https://www.facebook.com/INIAKUNABAIDEH.TQ" },
    { name: "LinkedIn", icon: Linkedin, value: "Muhamad Maulana Iqbal", href: "https://www.linkedin.com/in/muhamad-maulana-iqbal/" },
    { name: "PGP Key", icon: Shield, value: "Download Key", href: "#" },
  ];

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-sans tracking-tightest">
          ESTABLISH <br />
          <span className="italic opacity-40">CONTACT.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          For secure communications, please use PGP or contact me via Signal. 
          Standard queries are best handled via Email or Instagram DMs.
        </p>
      </section>

      <div className="space-y-1">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="flex items-center justify-between py-6 border-b border-border/40 group hover:px-2 transition-all"
          >
            <div className="flex items-center gap-4">
              <social.icon className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-sm uppercase tracking-widest">{social.name}</span>
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors font-mono text-sm hidden md:block">
              {social.value}
            </span>
            <span className="md:hidden">
              <social.icon className="w-4 h-4 opacity-40" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
