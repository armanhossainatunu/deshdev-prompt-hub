import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — DESHDEV" },
      { name: "description", content: "Engineering essays, design notes, and industry insights from the DESHDEV team." },
      { property: "og:title", content: "DESHDEV Blog" },
      { property: "og:description", content: "Engineering and design writing." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const categories = ["All", "Engineering", "Design", "AI", "Cloud"] as const;

const posts = [
  { id: 1, featured: true, title: "Architecting AI agents that don't hallucinate", excerpt: "A practical guide to retrieval, guardrails, and evaluation for production LLM systems.", category: "AI", date: "May 12, 2026", read: "8 min" },
  { id: 2, title: "The post-React era is more React", excerpt: "Why server components, RSC, and edge runtimes are the next chapter — not a replacement.", category: "Engineering", date: "May 04, 2026", read: "6 min" },
  { id: 3, title: "Design systems that survive a redesign", excerpt: "Tokens, primitives, and patterns that outlast brand refreshes.", category: "Design", date: "Apr 22, 2026", read: "5 min" },
  { id: 4, title: "Migrating 800 services to Kubernetes — what we'd do differently", excerpt: "Lessons from a year-long cloud migration at a fintech scale-up.", category: "Cloud", date: "Apr 09, 2026", read: "10 min" },
  { id: 5, title: "Type-safe API contracts with tRPC and Zod", excerpt: "Eliminating an entire class of bugs at the API boundary.", category: "Engineering", date: "Mar 30, 2026", read: "7 min" },
  { id: 6, title: "Motion as a design primitive", excerpt: "How thoughtful motion design lowers cognitive load and lifts engagement.", category: "Design", date: "Mar 18, 2026", read: "4 min" },
];

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesQ = q === "" || p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase());
      const matchesC = cat === "All" || p.category === cat;
      return matchesQ && matchesC && !p.featured;
    });
  }, [q, cat]);

  const featured = posts.find((p) => p.featured)!;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Signal, not noise."
        description="Essays on engineering craft, design systems, and the future of digital products."
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* FEATURED */}
        <article className="glass-card rounded-3xl p-10 md:p-14 glow-border mb-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 size-[300px] bg-brand/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold mb-5 tracking-widest uppercase">
              Featured · {featured.category}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 max-w-3xl">{featured.title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-6">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{featured.date}</span>
              <span className="size-1 bg-white/20 rounded-full" />
              <span>{featured.read} read</span>
              <ArrowUpRight className="size-4 text-brand ml-auto" />
            </div>
          </div>
        </article>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles…"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand transition-colors"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
                  cat === c
                    ? "bg-brand text-primary-foreground border-brand"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article key={p.id} className="glass-card p-7 rounded-2xl glow-border group cursor-pointer">
              <div className="text-[10px] font-bold text-brand uppercase tracking-widest mb-4">{p.category}</div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.date}</span>
                <span>{p.read}</span>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="text-muted-foreground col-span-full text-center py-10">No articles match your search.</p>
          )}
        </div>
      </section>
    </>
  );
}
