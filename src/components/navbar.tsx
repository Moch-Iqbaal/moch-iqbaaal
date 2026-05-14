import { NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/src/lib/utils";

const links = [
  { name: "About", path: "/about" },
  { name: "Collaborate", path: "/collaborate" },
  { name: "Contacts", path: "/contacts" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12">
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
            "text-lg font-mono tracking-tighter uppercase transition-opacity hover:opacity-100",
            isActive ? "opacity-100" : "opacity-40"
          )
        }
      >
        M.IQBAL
      </NavLink>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-mono tracking-tighter uppercase transition-opacity hover:opacity-100",
                  isActive ? "opacity-100 font-bold" : "opacity-40"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
