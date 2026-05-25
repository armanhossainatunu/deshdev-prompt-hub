import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-border bg-surface/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`transition-colors hover:text-brand ${
                pathname === l.to ? "text-brand" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-brand hover:bg-brand-dark rounded-full transition-all shadow-[var(--shadow-glow)]"
          >
            Start Project
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden size-10 grid place-items-center rounded-md border border-border text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-surface/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm font-medium ${
                  pathname === l.to ? "text-brand" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 text-center text-sm font-semibold text-primary-foreground bg-brand rounded-full"
            >
              Start Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
