import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in or Sign up — English Practice AI" },
      { name: "description", content: "Access your account to track progress and unlock premium content." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <SiteLayout>
      <div className="mx-auto flex max-w-md flex-col px-4 py-16">
        <div className="mb-6 flex items-center gap-2 self-center font-display text-xl font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
            <BookOpen className="h-5 w-5" />
          </span>
          English Practice <span className="text-primary">AI</span>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
          <div className="mb-6 grid grid-cols-2 rounded-lg bg-muted p-1">
            <button
              onClick={() => setMode("login")}
              className={`rounded-md py-2 text-sm font-medium transition-colors ${mode === "login" ? "bg-background shadow-sm" : "text-muted-foreground"}`}
            >
              Log in
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`rounded-md py-2 text-sm font-medium transition-colors ${mode === "signup" ? "bg-background shadow-sm" : "text-muted-foreground"}`}
            >
              Sign up
            </button>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === "signup" && (
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" placeholder="Jane Doe" />
              </div>
            )}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button variant="hero" className="w-full" size="lg">
              {mode === "login" ? "Log in" : "Create account"}
            </Button>
          </form>

          <p className="mt-5 text-center text-xs text-muted-foreground">
            By continuing you agree to our terms. Enable Lovable Cloud to wire real authentication.
          </p>
        </div>

        <Link to="/" className="mt-6 self-center text-sm text-muted-foreground hover:text-foreground">
          ← Back to home
        </Link>
      </div>
    </SiteLayout>
  );
}
