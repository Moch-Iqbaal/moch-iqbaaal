import { NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/src/lib/utils";
import { useState } from "react";

const links = [
  { name: "About", path: "/about" },
  { name: "Collaborate", path: "/collaborate" },
  { name: "Contacts", path: "/contacts" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4 md:px-12">

          {/* LOGO */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "font-mono text-base tracking-tightest uppercase font-bold transition-all hover:opacity-100",
                isActive ? "opacity-100" : "opacity-60"
              )
            }
          >
            M<span className="text-cyan-500">.</span>IQBAL
          </NavLink>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "relative text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-lg transition-all duration-200",
                    isActive
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <ModeToggle />

            {/* HAMBURGER MOBILE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-muted transition-all"
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "w-5 h-0.5 bg-foreground rounded-full transition-all duration-300",
                  menuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "w-5 h-0.5 bg-foreground rounded-full transition-all duration-300",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-5 h-0.5 bg-foreground rounded-full transition-all duration-300",
                  menuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </button>
          </div>

        </div>

        {/* MOBILE MENU */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 border-t border-border/40",
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col px-6 py-4 gap-1 bg-background">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-mono tracking-widest uppercase px-4 py-3 rounded-lg transition-all",
                    isActive
                      ? "text-foreground bg-muted font-bold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

      </nav>

      {/* SPACER biar konten tidak ketutupan navbar */}
      <div className="h-[57px]" />
    </>
  );
}