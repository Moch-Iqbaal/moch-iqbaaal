import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";

export default function Collaborate() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-sans tracking-tightest">
          LET'S BUILD <br />
          <span className="italic opacity-40">TOGETHER.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          I'm always looking for interesting projects that challenge the status quo. 
          If you have a project that requires deep technical insight or security auditing, 
          let's talk.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-transparent border-border/40 shadow-none">
          <CardHeader>
            <CardTitle className="font-mono text-sm uppercase tracking-widest">Consultancy</CardTitle>
            <CardDescription className="text-muted-foreground">Security audits, architecture reviews, and performance optimization.</CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="bg-transparent border-border/40 shadow-none">
          <CardHeader>
            <CardTitle className="font-mono text-sm uppercase tracking-widest">Speaking</CardTitle>
            <CardDescription className="text-muted-foreground">Workshops and talks on privacy, OSINT, and the future of the web.</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <section className="space-y-8 pt-8">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest opacity-40">Send a Brief</span>
          <div className="h-px w-full bg-border/40"></div>
        </div>

        <form className="space-y-4 max-w-xl" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase opacity-40">Name</label>
              <Input placeholder="Your good name" className="bg-transparent border-border/40 rounded-none focus-visible:ring-0" />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase opacity-40">Email</label>
              <Input placeholder="your@email.com" className="bg-transparent border-border/40 rounded-none focus-visible:ring-0" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase opacity-40">Subject</label>
            <Input placeholder="What's on your mind?" className="bg-transparent border-border/40 rounded-none focus-visible:ring-0" />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase opacity-40">Message</label>
            <Textarea placeholder="Tell me more about the project..." className="min-h-[150px] bg-transparent border-border/40 rounded-none focus-visible:ring-0 resize-none" />
          </div>
          <Button className="w-full h-12 font-mono uppercase tracking-widest rounded-none">
            Dispatch Message
          </Button>
        </form>
      </section>
    </div>
  );
}
