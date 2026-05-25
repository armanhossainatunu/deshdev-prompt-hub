export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="size-8 rounded-lg bg-brand flex items-center justify-center shadow-[0_0_20px_-2px_var(--color-brand)]">
        <div className="size-4 border-2 border-white rotate-45" />
      </div>
      <span className="text-xl font-extrabold tracking-tight text-foreground">
        DESH<span className="text-brand">DEV</span>
      </span>
    </div>
  );
}
