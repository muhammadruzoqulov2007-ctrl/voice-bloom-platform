import { createFileRoute } from "@tanstack/react-router";
import { Trophy, TrendingUp, Target, Award } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { leaderboard } from "@/lib/mock-data";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Student Results — English Practice AI" },
      { name: "description", content: "Track your progress and see top performers on the leaderboard." },
    ],
  }),
  component: Results,
});

function Results() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold md:text-4xl">Student Results</h1>
          <p className="mt-2 text-muted-foreground">Your progress and the top learners this month.</p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Trophy, label: "Total points", value: "2,340" },
            { icon: Target, label: "Tests completed", value: "27" },
            { icon: TrendingUp, label: "Avg. accuracy", value: "82%" },
            { icon: Award, label: "Current rank", value: "#142" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{s.label}</span>
                <s.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="mt-3 font-display text-3xl font-semibold">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card overflow-hidden">
          <div className="border-b border-border bg-secondary/40 px-6 py-4">
            <h2 className="font-display text-xl font-semibold">Leaderboard</h2>
            <p className="text-xs text-muted-foreground">Top performers this month</p>
          </div>
          <table className="w-full">
            <thead className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-6 py-3">Rank</th>
                <th className="px-6 py-3">Student</th>
                <th className="px-6 py-3 text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((row) => (
                <tr key={row.rank} className="border-b border-border last:border-0 transition-colors hover:bg-accent/30">
                  <td className="px-6 py-4">
                    <span
                      className={`inline-grid h-7 w-7 place-items-center rounded-full text-xs font-semibold ${
                        row.rank === 1
                          ? "bg-primary text-primary-foreground"
                          : row.rank <= 3
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {row.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">{row.name}</td>
                  <td className="px-6 py-4 text-right font-display text-base font-semibold">{row.score.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SiteLayout>
  );
}
