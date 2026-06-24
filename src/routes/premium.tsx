import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Crown, Sparkles } from "lucide-react";
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

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    features: ["Sample reading passages", "Sample listening audio", "Basic answer checking", "Public leaderboard"],
    cta: "Current plan",
    variant: "outline" as const,
    highlight: false,
  },
  {
    name: "Premium",
    price: "9",
    period: "/ month",
    features: [
      "All premium reading & listening",
      "Full mock tests",
      "AI band-score feedback",
      "Detailed answer explanations",
      "Progress analytics",
      "Priority Telegram support",
    ],
    cta: "Upgrade to Premium",
    variant: "hero" as const,
    highlight: true,
  },
  {
    name: "Pro",
    price: "19",
    period: "/ month",
    features: ["Everything in Premium", "1-on-1 mentor session monthly", "Writing & speaking review", "Early access to new content"],
    cta: "Go Pro",
    variant: "default" as const,
    highlight: false,
  },
];

function Premium() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Premium plans
          </span>
          <h1 className="mt-5 text-3xl font-semibold md:text-5xl">Unlock your full potential</h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Premium gives you access to every passage, mock exam, and AI-powered feedback feature.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-7 ${
                p.highlight
                  ? "border-primary bg-[image:var(--gradient-card)] shadow-[var(--shadow-elevated)]"
                  : "border-border bg-card shadow-[var(--shadow-soft)]"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Crown className="h-3 w-3" /> Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-3 font-display text-4xl font-semibold">
                ${p.price}
                <span className="ml-1 text-sm font-normal text-muted-foreground">{p.period}</span>
              </p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={p.variant} className="mt-7 w-full" size="lg">{p.cta}</Button>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
          <h3 className="font-display text-xl font-semibold">Have questions?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Our team is on Telegram, ready to help you choose the right plan.</p>
          <Link to="/contact" className="mt-4 inline-block">
            <Button variant="outline">Contact us</Button>
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
