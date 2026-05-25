import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[11px] font-bold mb-5 tracking-widest uppercase`}>
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {description && <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>}
      {align === "left" && <div className="h-1 w-16 bg-gradient-to-r from-brand to-brand-glow rounded-full mt-6" />}
    </div>
  );
}

export function PageHero({ eyebrow, title, description, children }: {
  eyebrow?: string; title: string; description?: string; children?: ReactNode;
}) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[600px] bg-brand/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 text-center animate-fade-up">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[11px] font-bold mb-6 tracking-widest uppercase">
            {eyebrow}
          </div>
        )}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
