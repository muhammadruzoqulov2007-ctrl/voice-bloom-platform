import { createFileRoute } from "@tanstack/react-router";
import { Crown, Sparkles, Send } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "Premium — English Practice AI" },
      { name: "description", content: "Unlock all premium reading and listening lessons, mock tests, and AI feedback." },
    ],
  }),
  component: Premium,
});

function Premium() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium">
          <Sparkles className="h-3.5 w-3.5 text-primary" /> Premium plans
        </span>
        <h1 className="mt-5 text-3xl font-semibold md:text-5xl">Unlock your full potential</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Premium gives you access to every passage, mock exam, and AI-powered feedback feature.
        </p>

        <div className="mt-12 rounded-2xl border border-primary bg-[image:var(--gradient-card)] p-8 shadow-[var(--shadow-elevated)]">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            <Crown className="h-3 w-3" /> Premium access
          </span>
          <p className="mt-5 text-sm text-muted-foreground">
            To get Premium access, message us directly on Telegram and we'll set you up.
          </p>
          <a href="https://t.me/Muhammad231722" target="_blank" rel="noreferrer" className="mt-6 inline-block">
            <Button variant="hero" size="lg">
              <Send className="h-4 w-4" /> Message us on Telegram
            </Button>
          </a>
        </div>
      </div>
    </SiteLayout>
  );
}
