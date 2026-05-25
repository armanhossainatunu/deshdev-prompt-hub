import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Rocket, ShieldCheck, Users, Award } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DESHDEV" },
      { name: "description", content: "Our mission, vision, and the story behind DESHDEV — a digital enterprise solutions hub." },
      { property: "og:title", content: "About DESHDEV" },
      { property: "og:description", content: "Mission, vision, and team behind DESHDEV." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const whyUs = [
  { icon: ShieldCheck, title: "Senior-only team", desc: "Every engineer has 8+ years shipping production systems at scale." },
  { icon: Rocket, title: "Outcome-led", desc: "We measure success by your KPIs — revenue, retention, and velocity." },
  { icon: Users, title: "True partnership", desc: "We embed into your roadmap, standups, and rituals — not just a contract." },
  { icon: Award, title: "Battle-tested craft", desc: "Patterns proven across fintech, health, logistics, and SaaS verticals." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A studio for ambitious software."
        description="DESHDEV — Digital Enterprise Solutions Hub & Development Experts Vision. We architect the systems behind tomorrow's category leaders."
      />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Mission", body: "Engineer high-leverage software that compounds in value — every release, every quarter, every year." },
            { icon: Eye, title: "Vision", body: "A world where ambitious teams ship at the speed of imagination, free from infrastructure friction." },
            { icon: Rocket, title: "Story", body: "Founded in 2018 by a group of staff engineers, DESHDEV grew from a 3-person collective into a 48-strong studio serving clients on four continents." },
          ].map((c) => (
            <div key={c.title} className="glass-card p-8 rounded-2xl glow-border">
              <c.icon className="size-7 text-brand mb-5" />
              <h3 className="text-xl font-bold text-foreground mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card/30 border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Why DESHDEV" title="The shortlist gets shorter." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="glass-card p-7 rounded-2xl glow-border">
                <w.icon className="size-6 text-brand mb-4" />
                <h4 className="font-bold text-foreground mb-2">{w.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
