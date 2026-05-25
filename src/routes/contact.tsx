import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, Check } from "lucide-react";
import { z } from "zod";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DESHDEV" },
      { name: "description", content: "Get in touch with DESHDEV. Start a project, book a consultation, or just say hi." },
      { property: "og:title", content: "Contact DESHDEV" },
      { property: "og:description", content: "Get in touch — start a project or book a consult." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(2000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something."
        description="Tell us about your project. We respond within one business day."
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="glass-card p-8 md:p-10 rounded-3xl glow-border space-y-5">
            <div>
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground focus:outline-none focus:border-brand transition-colors"
                placeholder="Ada Lovelace"
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground focus:outline-none focus:border-brand transition-colors"
                placeholder="ada@example.com"
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Project brief</label>
              <textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground focus:outline-none focus:border-brand transition-colors resize-none"
                placeholder="What are you building?"
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand text-primary-foreground font-bold rounded-xl shadow-[var(--shadow-glow)] hover:bg-brand-dark transition-colors"
            >
              {sent ? <><Check className="size-4" /> Sent</> : <>Send message <Send className="size-4" /></>}
            </button>
          </form>

          {/* Info */}
          <div className="space-y-6">
            <div className="glass-card p-7 rounded-2xl glow-border">
              <Mail className="size-5 text-brand mb-3" />
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</p>
              <a href="mailto:hello@deshdev.io" className="text-foreground font-semibold hover:text-brand">hello@deshdev.io</a>
            </div>

            <div className="glass-card p-7 rounded-2xl glow-border">
              <Phone className="size-5 text-brand mb-3" />
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
              <a href="tel:+1234567890" className="text-foreground font-semibold hover:text-brand">+1 (234) 567-890</a>
            </div>

            <div className="glass-card p-7 rounded-2xl glow-border">
              <MapPin className="size-5 text-brand mb-3" />
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Studio</p>
              <p className="text-foreground font-semibold">Floor 12, Hub Tower — Tech District</p>
            </div>

            <div className="glass-card p-7 rounded-2xl glow-border">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Find us</p>
              <div className="flex items-center gap-3">
                {[Linkedin, Twitter, Github].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social" className="size-10 rounded-full border border-border grid place-items-center text-muted-foreground hover:text-brand hover:border-brand/40 transition-colors">
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border h-64">
              <iframe
                title="DESHDEV studio map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.02%2C40.70%2C-73.96%2C40.74&layer=mapnik"
                className="w-full h-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
