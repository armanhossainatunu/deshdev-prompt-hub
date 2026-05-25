import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Code2, Smartphone, Palette, Cpu, Database, Cloud, Sparkles, ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DESHDEV" },
      { name: "description", content: "Web, mobile, UI/UX, SaaS, API, cloud and digital transformation services from DESHDEV." },
      { property: "og:title", content: "DESHDEV Services" },
      { property: "og:description", content: "Full-stack engineering services for ambitious teams." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Code2, title: "Web Development", desc: "Custom progressive web applications engineered with React, Next.js, and TypeScript. Built for speed, accessibility, and longevity." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native iOS and Android products, plus cross-platform builds with React Native. Pixel-perfect, native-feeling, App Store ready." },
  { icon: Palette, title: "UI / UX Design", desc: "Editorial design systems and product flows researched and tested with real users. Figma source files included." },
  { icon: Cpu, title: "SaaS Development", desc: "Multi-tenant cloud platforms with billing, RBAC, audit logs and analytics baked in from day one." },
  { icon: Database, title: "API Development", desc: "Type-safe REST and GraphQL APIs scaled for millions of requests, with full observability and contract testing." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Zero-downtime deployment pipelines, serverless edge architectures, infrastructure-as-code, and SRE best practices." },
  { icon: Sparkles, title: "Digital Transformation", desc: "Legacy modernization, platform migrations, and AI-powered workflow re-engineering. We meet you where you are." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The full software stack, one team."
        description="Seven specialized practices, deeply integrated. Hire one or all — your roadmap, our delivery."
      />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass-card p-8 rounded-2xl glow-border group">
              <div className="flex items-start gap-5">
                <div className="size-12 shrink-0 rounded-xl bg-brand/10 grid place-items-center group-hover:bg-brand/20 transition-colors">
                  <s.icon className="size-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-primary-foreground font-bold rounded-2xl shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all"
          >
            Discuss your project <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
