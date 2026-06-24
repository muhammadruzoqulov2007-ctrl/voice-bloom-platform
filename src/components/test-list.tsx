import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Lock, Search, Clock, Signal } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Test } from "@/lib/mock-data";

export function TestList({
  tests,
  basePath,
  type,
}: {
  tests: Test[];
  basePath: "/reading" | "/listening";
  type: "Reading" | "Listening";
}) {
  const [q, setQ] = useState("");
  const [level, setLevel] = useState<string>("All");

  const filtered = useMemo(
    () =>
      tests.filter(
        (t) =>
          (level === "All" || t.level === level) &&
          (t.title.toLowerCase().includes(q.toLowerCase()) ||
            t.description.toLowerCase().includes(q.toLowerCase())),
      ),
    [tests, q, level],
  );

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={`Search ${type.toLowerCase()} tests...`}
            className="pl-9"
          />
        </div>
        <div className="flex gap-1.5 rounded-lg bg-muted p-1">
          {["All", "Beginner", "Intermediate", "Advanced"].map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                level === l ? "bg-background shadow-sm" : "text-muted-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => {
          const inner = (
            <div className="group relative h-full rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]">
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{type}</span>
                {t.premium ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-foreground/90 px-2.5 py-1 text-xs font-medium text-background">
                    <Lock className="h-3 w-3" /> Premium
                  </span>
                ) : (
                  <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">Free</span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug group-hover:text-primary">{t.title}</h3>
              <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{t.description}</p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Signal className="h-3.5 w-3.5" /> {t.level}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {t.duration} min</span>
              </div>
              {t.premium && (
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-background/40 backdrop-blur-[1px]" />
              )}
            </div>
          );
          return t.premium ? (
            <Link key={t.id} to="/premium" className="block">{inner}</Link>
          ) : (
            <Link
              key={t.id}
              to={`${basePath}/$testId` as "/reading/$testId"}
              params={{ testId: t.id }}
              className="block"
            >
              {inner}
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-xl border border-dashed border-border bg-muted/30 p-10 text-center text-sm text-muted-foreground">
          No tests match your search.
        </div>
      )}
    </div>
  );
}
