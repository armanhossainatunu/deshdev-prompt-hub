import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Code2, Cpu, Cloud, Smartphone, Palette, Database,
  Quote, Sparkles,
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectSaas from "@/assets/project-saas.jpg";
import projectLogistics from "@/assets/project-logistics.jpg";
import { SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DESHDEV — Architecting Digital Futures" },
      { name: "description", content: "Premium software development agency building custom web, mobile, SaaS, AI and cloud solutions for enterprises." },
      { property: "og:title", content: "DESHDEV — Architecting Digital Futures" },
      { property: "og:description", content: "Premium software development agency for enterprises." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Code2, title: "Web Development", desc: "High-performance progressive web apps built with React, Next.js and TypeScript.", tags: ["Next.js", "React"] },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native iOS and Android experiences with React Native and Swift.", tags: ["React Native", "Swift"] },
  { icon: Palette, title: "UI / UX Design", desc: "Editorial design systems that make complex products feel intuitive.", tags: ["Figma", "Design Systems"] },
  { icon: Cpu, title: "SaaS & AI", desc: "Multi-tenant platforms with LLM integration, predictive analytics, agents.", tags: ["OpenAI", "PyTorch"] },
  { icon: Database, title: "API Development", desc: "Type-safe APIs with REST and GraphQL, scaled for millions of requests.", tags: ["Node.js", "PostgreSQL"] },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Zero-downtime pipelines and serverless edge architectures.", tags: ["AWS", "Kubernetes"] },
];

const techs = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Kubernetes", "OpenAI", "Stripe", "Supabase"];

const projects = [
  { img: projectFintech, title: "Neo-Bank Infrastructure", desc: "Rebuilding core banking APIs for a European unicorn startup with 5M+ users.", tag: "Fintech" },
  { img: projectSaas, title: "Lumina Analytics Suite", desc: "Multi-tenant analytics dashboard powering 200+ enterprise teams.", tag: "SaaS" },
  { img: projectLogistics, title: "Supply Chain Intelligence", desc: "AI-powered logistics monitoring that cut operational costs by 24%.", tag: "Logistics" },
];

const testimonials = [
  { quote: "DESHDEV rebuilt our core platform in 12 weeks. Performance up 4x, churn down 30%.", name: "Aisha Reyes", role: "CTO, Vertex Capital" },
  { quote: "The most senior engineering team we've worked with. They ship like a tier-1 product org.", name: "Marcus Lin", role: "VP Engineering, Lumina" },
  { quote: "From discovery to launch, they treated our roadmap like their own. A real partnership.", name: "Jonas Kerr", role: "Founder, Helio Health" },
];

const team = [
  { name: "Ravi Mehta", role: "Founder & CEO", initials: "RM" },
  { name: "Sofia Park", role: "Chief Design Officer", initials: "SP" },
  { name: "Liam Chen", role: "Head of Engineering", initials: "LC" },
  { name: "Nadia Khoury", role: "AI Lead", initials: "NK" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -right-32 size-[600px] bg-brand/30 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-40 -left-20 size-[400px] bg-brand-glow/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[11px] font-bold mb-6 tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
                </span>
                Next-Gen Software Agency
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight">
                Architecting <br />
                <span className="text-gradient-brand">Digital Futures</span>
              </h1>
              <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
                DESHDEV builds high-performance custom software, cloud infrastructure,
                and AI-driven experiences for the world's most ambitious enterprises.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-surface font-bold rounded-xl hover:bg-foreground/90 transition-all"
                >
                  View our work <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 glass-card text-foreground font-bold rounded-xl hover:bg-white/5 transition-all"
                >
                  Book a demo
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {[["120+","Projects"],["48","Engineers"],["99.9%","Uptime"]].map(([k,v]) => (
                  <div key={v}>
                    <div className="text-2xl font-extrabold text-foreground">{k}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute -inset-6 bg-brand/30 blur-3xl rounded-full" />
              <div className="relative glass-card rounded-3xl overflow-hidden shadow-[var(--shadow-glow)]">
                <img
                  src={heroDashboard}
                  alt="DESHDEV enterprise dashboard preview"
                  width={1280}
                  height={960}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border-y border-border bg-card/40 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {techs.map((t) => (
              <span key={t} className="text-sm font-mono uppercase tracking-widest text-muted-foreground/60 hover:text-brand transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <SectionHeader
          eyebrow="Specialized Solutions"
          title="End-to-end engineering for complex systems."
          description="Six disciplines, one integrated team. We plug into your roadmap and ship outcomes."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass-card p-8 rounded-2xl glow-border">
              <div className="size-12 rounded-xl bg-brand/10 grid place-items-center mb-6">
                <s.icon className="size-5 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="px-2 py-1 bg-white/5 text-[10px] font-mono text-foreground/70 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-card/30 border-y border-border py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <SectionHeader
              eyebrow="Featured Impact"
              title="A glimpse into our work."
              description="Selected digital transformations we've pioneered for global market leaders."
            />
            <Link to="/portfolio" className="self-start px-5 py-2.5 border border-border rounded-xl text-sm font-semibold hover:bg-accent transition-colors">
              View all projects
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <article key={p.title} className="group">
                <div className="overflow-hidden rounded-2xl border border-border mb-5">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex items-center gap-3 text-[10px] font-bold text-brand uppercase tracking-widest">
                  <span>Case study</span>
                  <span className="size-1 bg-white/20 rounded-full" />
                  <span>{p.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <SectionHeader
          eyebrow="Voices"
          title="What our partners say."
          align="center"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-8 rounded-2xl glow-border">
              <Quote className="size-7 text-brand/60 mb-5" />
              <p className="text-foreground/90 leading-relaxed mb-8">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-card/30 border-y border-border py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="The Crew"
            title="A senior-only collective."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="glass-card p-8 rounded-2xl glow-border text-center">
                <div className="mx-auto size-20 rounded-full bg-gradient-to-br from-brand to-brand-glow grid place-items-center text-xl font-extrabold text-surface mb-5">
                  {m.initials}
                </div>
                <h4 className="font-bold text-foreground">{m.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center relative">
        <div className="absolute inset-x-0 -top-10 mx-auto size-[400px] bg-brand/20 blur-[120px] rounded-full pointer-events-none -z-10" />
        <Sparkles className="mx-auto size-8 text-brand mb-6" />
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
          Ready to <span className="text-gradient-brand">evolve?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Join the ecosystem of forward-thinking enterprises powered by DESHDEV.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-10 py-5 bg-brand text-primary-foreground font-bold rounded-2xl shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all"
        >
          Initiate consultation <ArrowRight className="size-5" />
        </Link>
      </section>
    </>
  );
}
