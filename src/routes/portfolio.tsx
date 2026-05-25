import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, X } from "lucide-react";
import projectFintech from "@/assets/project-fintech.jpg";
import projectSaas from "@/assets/project-saas.jpg";
import projectLogistics from "@/assets/project-logistics.jpg";
import projectHealth from "@/assets/project-health.jpg";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — DESHDEV" },
      { name: "description", content: "Selected client work — fintech, healthtech, SaaS, and logistics platforms built by DESHDEV." },
      { property: "og:title", content: "DESHDEV Portfolio" },
      { property: "og:description", content: "Selected client work and case studies." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

type Project = {
  id: string;
  title: string;
  category: "Fintech" | "SaaS" | "Logistics" | "Health";
  img: string;
  desc: string;
  tags: string[];
  url: string;
};

const projects: Project[] = [
  { id: "1", title: "Neo-Bank Infrastructure", category: "Fintech", img: projectFintech, desc: "Rebuilt core banking APIs for a European unicorn with 5M+ users. Cut p95 latency by 62%.", tags: ["Node.js", "PostgreSQL", "AWS"], url: "#" },
  { id: "2", title: "Lumina Analytics Suite", category: "SaaS", img: projectSaas, desc: "Multi-tenant analytics dashboard powering 200+ enterprise teams worldwide.", tags: ["React", "ClickHouse", "Kafka"], url: "#" },
  { id: "3", title: "Supply Chain Intelligence", category: "Logistics", img: projectLogistics, desc: "AI-powered logistics monitoring that reduced operational costs by 24%.", tags: ["Python", "TensorFlow", "GCP"], url: "#" },
  { id: "4", title: "Helio Patient Portal", category: "Health", img: projectHealth, desc: "HIPAA-compliant patient experience platform serving 14 clinics.", tags: ["Next.js", "FHIR", "Vercel"], url: "#" },
  { id: "5", title: "Vertex Trading Engine", category: "Fintech", img: projectFintech, desc: "Sub-millisecond order matching engine for a crypto exchange.", tags: ["Rust", "Redis", "K8s"], url: "#" },
  { id: "6", title: "Atlas Ops Platform", category: "SaaS", img: projectSaas, desc: "DevOps control plane for a 1,200-engineer organization.", tags: ["Go", "Terraform", "Datadog"], url: "#" },
];

const categories = ["All", "Fintech", "SaaS", "Logistics", "Health"] as const;

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected projects."
        description="A sampler of recent work across fintech, SaaS, logistics, and health."
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                filter === c
                  ? "bg-brand text-primary-foreground border-brand"
                  : "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((p) => (
            <article
              key={p.id}
              onClick={() => setOpen(p)}
              className="group cursor-pointer"
            >
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
              <div className="flex items-center gap-3 text-[10px] font-bold text-brand uppercase tracking-widest mb-2">
                <span>{p.category}</span>
              </div>
              <h4 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors">{p.title}</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-surface/80 backdrop-blur-md grid place-items-center p-6 animate-fade-up"
          onClick={() => setOpen(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl glass-card rounded-3xl overflow-hidden border border-brand/20"
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 size-9 grid place-items-center rounded-full bg-surface/80 border border-border hover:bg-accent"
            >
              <X className="size-4" />
            </button>
            <img src={open.img} alt={open.title} className="w-full aspect-[16/9] object-cover" />
            <div className="p-8">
              <div className="text-[10px] font-bold text-brand uppercase tracking-widest mb-2">{open.category}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{open.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{open.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {open.tags.map((t) => (
                  <span key={t} className="px-2 py-1 bg-white/5 text-[10px] font-mono text-foreground/70 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={open.url}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-primary-foreground rounded-xl text-sm font-semibold hover:bg-brand-dark transition-colors"
              >
                Live preview <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
