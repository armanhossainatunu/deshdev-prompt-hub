import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Digital Enterprise Solutions Hub & Development Experts Vision.
              We architect resilient software for ambitious teams worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="size-9 rounded-full border border-border grid place-items-center text-muted-foreground hover:text-brand hover:border-brand/40 transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Platform
            </p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="text-foreground/80 hover:text-brand">Services</Link></li>
              <li><Link to="/portfolio" className="text-foreground/80 hover:text-brand">Portfolio</Link></li>
              <li><Link to="/blog" className="text-foreground/80 hover:text-brand">Blog</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Company
            </p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-foreground/80 hover:text-brand">About</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-brand">Contact</Link></li>
              <li><a href="mailto:hello@deshdev.io" className="text-foreground/80 hover:text-brand">hello@deshdev.io</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DESHDEV. All rights reserved.
          </p>
          <p className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
            v1.0.0 · Status: All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
