import { title } from "process";
import { useEffect, useState, useRef, use } from "react";

const QNA = [
  {
    keywords: ["halo", "hai", "hi", "hello", "hey", "yo", "selamat", "p"],
    answer: "Halo! Gue @ai_akal_akalan_iqebal 🤖 asisten virtual Moch Iqbal. Tanya aja soal dia, projectnya, skill, atau cara kontak!",
  },
  {
    keywords: ["siapa", "moch", "iqbal", "lo siapa", "kamu siapa", "tentang", "about", "profil"],
    answer: "Moch Iqbal adalah developer(web2/web3) & security advocate. Ia juga founder dari beberapa komunitas/groups yang fokus di digital privacy, OSINT, development applications dan ethical troubleshooting. Based di Indonesia 🇮🇩",
  },
  {
    keywords: ["project", "karya", "portfolio", "buat apa", "crypto", "osint toolkit"],
    answer: "Project Iqbal antara lain: Info Market Crypto Intelligence 📊, OSINT Framework Tools 🔍, dan System Troubleshooting untuk startup serta masih banyak lagi.",
  },
  {
    keywords: ["kontak", "contact", "hubungi", "reach", "email", "dm"],
    answer: "Hubungi Iqbal lewat halaman Contacts di navbar, atau DM Instagram @m.iqbaaal_3 📩",
  },
  {
    keywords: ["kolaborasi", "collaborate", "kerja sama", "freelance", "hire", "rekrut"],
    answer: "Iqbal terbuka untuk kolaborasi & freelance! Kunjungi halaman Collaborate di navbar untuk info lengkapnya 🤝",
  },
  {
    keywords: ["osint", "hacking", "security", "cyber", "siber", "privasi", "privacy", "etis"],
    answer: "OSINT adalah teknik investigasi open-source yang legal & etis untuk mengumpulkan informasi dari sumber publik. Iqbal juga lumayan aktif di bidang ini 🔐",
  },
  {
    keywords: ["bitcoin", "btc", "crypto", "market", "harga", "trading"],
    answer: "Cek widget BTC di atas untuk harga live! Atau kunjungi Info Market Crypto Intelligence untuk analisis lebih lengkap 📈",
  },
  {
    keywords: ["skill", "teknologi", "tech", "stack", "coding", "bahasa", "bisa apa"],
    answer: "Stack Iqbal: TypeScript, React, Next.js, Tailwind CSS, Node.js, dan berbagai tools keamanan siber 💻",
  },
  {
    keywords: ["instagram", "sosmed", "social", "media", "facebook", "follow"],
    answer: "Follow Iqbal di Instagram: @m.iqbaaal_3 dan Facebook: Baal Iqq 🔥",
  },
  {
    keywords: ["website", "web", "ini", "dibuat", "dibangun", "teknologi apa", "vite"],
    answer: "Website ini dibangun pakai Vite + React + TypeScript + Tailwind CSS, di-deploy di Vercel ⚡",
  },
  {
    keywords: ["ctf", "capture the flag", "kompetisi", "lomba"],
    answer: "CTF (Capture The Flag) adalah kompetisi keamanan siber di mana peserta memecahkan tantangan untuk mendapatkan 'flag'.",
  },
  {
    keywords: ["sql", "injection", "xss", "exploit", "vulnerability"],
    answer: "Itu topik web security! SQL Injection & XSS adalah celah keamanan umum di web. Kamu juga bisa mempelajarinya untuk tujuan ethical hacking & bug bounty 🔎",
  },
  {
    keywords: ["tools", "software", "rekomendasi", "pakai apa"],
    answer: "Beberapa tools favorit yang biasa Saya pakai: Nmap, theHarvester, Shodan, Burp Suite, dan Maltego — semua untuk OSINT & security research 🛠️",
  },
  {
    keywords: ["terima kasih", "makasih", "thanks", "thx", "mantap", "keren", "bagus"],
    answer: "Sama-sama! 😄 Kalau ada yang lain, tanya aja ke gue — @ai_akal_akalan_iqebal siap bantu!",
  },
];

const QUICK_REPLIES = [
  "Siapa Moch Iqbal?",
  "Projectnya apa aja?",
  "Cara hubungi dia?",
  "Mau kolaborasi",
];

function getBotReply(input: string): string {
  const lower = input.toLowerCase();
  for (const item of QNA) {
    if (item.keywords.some((k) => lower.includes(k))) {
      return item.answer;
    }
  }
  return "Hmm, gue belum bisa jawab itu 🤔 Coba tanya soal Iqbal, project, atau cara kontak dia!";
}

interface ChatMessage {
  from: "user" | "bot";
  text: string;
}

// ==========================================
// CHATBOT COMPONENT
// ==========================================

function ChatBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      from: "bot",
      text: "Yo! Gue @ai_akal_akalan_iqebal 🤖 Asisten virtual Moch Iqbal. Tanya apa aja soal dia — project, kontak, atau kolaborasi!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim() || isTyping) return;
    setMessages((prev) => [...prev, { from: "user", text: text.trim() }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const reply = getBotReply(text);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage(input);
  };

  const clearChat = () => {
    setMessages([{ from: "bot", text: "Chat dibersihkan! Gue @ai_akal_akalan_iqebal, siap bantu lagi 🤖" }]);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-border bg-card shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-between px-5 py-4 bg-muted border-b border-border">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-sm font-bold text-white">
              AI
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-background" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-sm font-semibold text-foreground truncate">@ai_akal_akalan_iqebal</p>
            <p className="font-mono text-[10px] text-cyan-500 uppercase tracking-widest">NLP · Powered by AI RBC (Rule-Based Chatbot)</p>
          </div>
        </div>
        <button
          onClick={clearChat}
          className="flex-shrink-0 font-mono text-xs text-muted-foreground hover:text-foreground transition px-3 py-1.5 rounded-lg border border-border hover:border-foreground/30 ml-3"
        >
          Bersihkan
        </button>
      </div>

      {/* MESSAGES */}
      <div className="h-64 sm:h-72 md:h-80 overflow-y-auto px-4 py-4 space-y-4 bg-background">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-end gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.from === "bot" && (
              <span className="text-lg mb-0.5 flex-shrink-0">🤖</span>
            )}
            <div
              className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed font-sans break-words ${
                msg.from === "user"
                  ? "bg-cyan-500 text-white rounded-br-sm"
                  : "bg-muted text-foreground rounded-bl-sm border border-border"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* TYPING INDICATOR */}
        {isTyping && (
          <div className="flex items-end gap-2 justify-start">
            <span className="text-lg mb-0.5">🤖</span>
            <div className="bg-muted border border-border px-4 py-3 rounded-2xl rounded-bl-sm">
              <div className="flex gap-1 items-center">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* QUICK REPLIES */}
      <div className="flex gap-2 px-4 py-3 flex-wrap bg-background border-t border-border">
        {QUICK_REPLIES.map((qr, i) => (
          <button
            key={i}
            onClick={() => sendMessage(qr)}
            disabled={isTyping}
            className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all disabled:opacity-30 whitespace-nowrap"
          >
            {qr}
          </button>
        ))}
      </div>

      {/* INPUT */}
      <div className="flex items-center gap-3 px-4 py-3 border-t border-border bg-muted">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tanya @ai_akal_akalan_iqebal apa saja..."
          disabled={isTyping}
          className="flex-1 min-w-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none font-sans py-1"
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={isTyping || !input.trim()}
          className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-600 disabled:opacity-30 transition-all"
        >
          <svg width="14" height="14" viewBox="0 0 13 13" fill="none">
            <path d="M1.5 6.5L11.5 1.5L7.5 6.5L11.5 11.5L1.5 6.5Z" fill="white" />
          </svg>
        </button>
      </div>

    </div>
  );
}

// ==========================================
// HOME PAGE
// ==========================================

export default function Home() {
  const [btcPrice, setBtcPrice] = useState<number | null>(null);
  const [btcChange, setBtcChange] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);

  useEffect(() => {
    const fetchBTC = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true"
        );
        const data = await res.json();
        setBtcPrice(data.bitcoin.usd);
        setBtcChange(data.bitcoin.usd_24h_change);
      } catch (err) {
        console.error("Gagal fetch BTC:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBTC();
    const interval = setInterval(fetchBTC, 30000);
    return () => clearInterval(interval);
  }, []);

  const isUp = btcChange !== null && btcChange >= 0;

  return (
    <div className="space-y-12">

      {/* 1. JUMBOTRON / HERO IMAGE */}
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

      {/* 2. MUSIC PLAYER */}
      <section className="flex justify-start">
        <div className="w-full max-w-md border border-border bg-card p-4 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Now Playing</p>
              <h3 className="text-sm font-semibold tracking-wide text-foreground">Gata Only</h3>
              <p className="text-xs text-muted-foreground">My Personal Website Theme</p>
            </div>
            <div className="text-xl animate-pulse">🎵</div>
          </div>
          <audio controls autoPlay loop className="w-full opacity-80 hover:opacity-100 transition">
            <source src="/music/gata-only.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      {/* 3. HEADLINE */}
      <section className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-sans tracking-tightest leading-none">
          —TROUBLE MAKER, <br />
          <span className="font-mono text-muted-foreground italic">SYSTEM BREAKER &</span> <br />
          <span className="text-foreground">PROBLEM SOLVER.</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-sans max-w-2xl leading-relaxed">
          Saya membangun sistem untuk memahami bagaimana sistem tersebut bisa rusak. 
          Seorang developer day to day, dan seorang advokat keamanan atas pilihan sendiri. 
          Berfokus pada privasi digital, Blockchain/Cryptocurrency, OSINT, dan pemecahan masalah yang etis.
        </p>
      </section>

      {/* 4. RECENT ACTIVITY */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest opacity-40">Recent Activity</span>
          <div className="h-px flex-1 bg-border/40"></div>
        </div>
        <div className="grid gap-8">
          {[
            {
              title: "Blockchain Research & Development Applications",
              desc: "Eksplorisasi aplikasi terdesentralisasi dan keamanan smart contract di ruang kripto.",
              date: "2025",
            },
            {
              title: "Build Ai LLM Research & Modelling in Local Environment",
              desc: "Bereksperimen dengan LLM lokal untuk riset dan development AI, dengan fokus pada teknik yang menjaga privasi.",
              date: "2025",
            },
            {
              title: "Digital Privacy Advocacy",
              desc: "Meneliti & mempelajari hukum perlindungan data serta penerapannya di Indonesia.",
              date: "2024",
            },
            {
              title: "System Troubleshooting",
              desc: "Konsultasi untuk startup mengenai arsitektur yang skalabel dan penguatan keamanan.",
              date: "2023",
            },
            {
              title: "See & Learn Case Leaked Data PDN Indonesian",
              desc: "Menganalisis implikasi kebocoran data PDN dan cara melindungi diri dari pelanggaran serupa.",
              date: "2023",
            },
            {
              title: "Search Bug Bounty Programs & Write-ups in Social Media",
              desc: "Berbagi wawasan dan write-ups dari program bug bounty untuk membantu orang lain belajar tentang hacking etis dan penelitian keamanan.",
              date: "2022",
            },
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

      {/* 5. RECENT INFO MARKET */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest opacity-40">Recent Info Market</span>
          <div className="h-px flex-1 bg-border/40"></div>
        </div>
        <div className="grid gap-6">
          <h1 className="text-2xl font-bold">INFO MARKET CRYPTO INTELLIGENCE</h1>
          <p className="text-muted-foreground leading-relaxed">
            Sebuah platform untuk melihat informasi pasar kripto dan sentimen makroekonomi dari berbagai sumber tepercaya. 👇
          </p>
          <a
            href="https://crypto-pulse-174.preview.emergentagent.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block w-full max-w-sm border border-border bg-card hover:bg-muted transition-all duration-300 rounded-xl p-5 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">₿</span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Bitcoin</span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50 group-hover:text-muted-foreground transition">
                klik untuk lihat lebih →
              </span>
            </div>
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-24 h-7 bg-muted rounded animate-pulse" />
                <div className="w-14 h-4 bg-muted/50 rounded animate-pulse" />
              </div>
            ) : btcPrice ? (
              <div className="flex items-end gap-3">
                <span className="font-mono text-2xl font-bold text-foreground">
                  ${btcPrice.toLocaleString("en-US")}
                </span>
                <span className={`font-mono text-sm mb-0.5 ${isUp ? "text-emerald-500" : "text-red-500"}`}>
                  {isUp ? "▲" : "▼"} {Math.abs(btcChange!).toFixed(2)}%
                </span>
              </div>
            ) : (
              <span className="font-mono text-sm text-muted-foreground">Gagal memuat data</span>
            )}
            <p className="font-mono text-[10px] text-muted-foreground/50 mt-2 uppercase tracking-widest">
              24h change · auto refresh 30s
            </p>
          </a>
        </div>
      </section>

      {/* 6. CHATBOT */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest opacity-40">AI Assistant</span>
          <div className="h-px flex-1 bg-border/40"></div>
        </div>
        <h1 className="text-2xl font-bold">ASISTEN CHATBOT AI MY WEB PERSONAL—</h1>
        <p className="text-muted-foreground leading-relaxed">
          Kamu dapat menggunakan fitur chatbot asisten AI di bawah ini untuk bertanya tentang kepribadian <a href="#" className="text-foreground hover:underline">
            Iqbaal
          </a>.
        </p>
        <ChatBot />
      </section>

      {/* 7. NAVIGATION LINKS */}
      <div className="pt-12">
        <a href="/collaborate" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-tighter hover:gap-4 transition-all">
          View all projects <span>&rarr;</span>
        </a>
        <a href="/contacts" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-tighter hover:gap-4 transition-all ml-8">
          Get in touch <span>&rarr;</span>
        </a>
        <a href="/about" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-tighter hover:gap-4 transition-all ml-8">
          About Me <span>&rarr;</span>
        </a>
      </div>

    </div>
  );
}