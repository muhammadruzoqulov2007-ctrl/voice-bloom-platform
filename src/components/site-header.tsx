import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/reading", label: "Reading" },
  { to: "/listening", label: "Listening" },
  { to: "/writing", label: "Writing", soon: true },
  { to: "/speaking", label: "Speaking", soon: true },
  { to: "/vocabulary", label: "Vocabulary", soon: true },
  { to: "/mock-tests", label: "Mock Tests", soon: true },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <BookOpen className="h-4 w-4" />
          </span>
          <span>English Practice <span className="text-primary">AI</span></span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
                {item.soon && (
                  <span className="ml-1.5 rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                    SOON
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/login">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link to="/premium">
            <Button variant="hero" size="sm">Go Premium</Button>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent"
              >
                <span>{item.label}</span>
                {item.soon && (
                  <span className="rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                    SOON
                  </span>
                )}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 border-t border-border pt-3">
              <Link to="/login" onClick={() => setOpen(false)} className="flex-1">
                <Button variant="outline" className="w-full">Log in</Button>
              </Link>
              <Link to="/premium" onClick={() => setOpen(false)} className="flex-1">
                <Button variant="hero" className="w-full">Premium</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
