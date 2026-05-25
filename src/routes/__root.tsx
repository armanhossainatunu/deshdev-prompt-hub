import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-extrabold text-gradient-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Signal lost.</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has drifted off the grid.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-brand-dark transition-colors"
          >
            Back to base
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing — we're on it.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-brand-dark transition-colors"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DESHDEV — Digital Enterprise Solutions Hub" },
      { name: "description", content: "DESHDEV builds high-performance custom software, cloud infrastructure, and AI-driven experiences for the world's most ambitious enterprises." },
      { name: "author", content: "DESHDEV" },
      { property: "og:title", content: "DESHDEV — Digital Enterprise Solutions Hub" },
      { property: "og:description", content: "Premium software development & digital transformation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-surface">
        <Navbar />
        <main className="flex-1 pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
