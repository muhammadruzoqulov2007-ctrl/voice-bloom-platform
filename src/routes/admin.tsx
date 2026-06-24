import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, Headphones, Users, Crown, BarChart3, Plus, Pencil, Trash2 } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { readingTests, listeningTests } from "@/lib/mock-data";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — English Practice AI" },
      { name: "description", content: "Manage reading, listening, premium content and users." },
    ],
  }),
  component: Admin,
});

const tabs = [
  { id: "stats", label: "Overview", icon: BarChart3 },
  { id: "reading", label: "Reading", icon: BookOpen },
  { id: "listening", label: "Listening", icon: Headphones },
  { id: "users", label: "Users", icon: Users },
  { id: "premium", label: "Premium", icon: Crown },
];

function Admin() {
  const [tab, setTab] = useState("stats");

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">Demo interface — connect Lovable Cloud to make changes persist.</p>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">DEMO MODE</span>
        </header>

        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <aside>
            <nav className="space-y-1">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    tab === t.id ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-accent"
                  }`}
                >
                  <t.icon className="h-4 w-4" />
                  {t.label}
                </button>
              ))}
            </nav>
          </aside>

          <section className="rounded-2xl border border-border bg-card p-6">
            {tab === "stats" && <StatsView />}
            {tab === "reading" && <TestsView type="Reading" tests={readingTests} />}
            {tab === "listening" && <TestsView type="Listening" tests={listeningTests} />}
            {tab === "users" && <UsersView />}
            {tab === "premium" && <PremiumView />}
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}

function StatsView() {
  const stats = [
    { label: "Total users", value: "42,318" },
    { label: "Premium users", value: "3,104" },
    { label: "Tests completed", value: "186,920" },
    { label: "Monthly revenue", value: "$27,940" },
  ];
  return (
    <div>
      <h2 className="font-display text-xl font-semibold">Overview</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border p-4">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{s.label}</div>
            <div className="mt-2 font-display text-2xl font-semibold">{s.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid h-48 place-items-center rounded-xl border border-dashed border-border text-sm text-muted-foreground">
        Analytics chart placeholder
      </div>
    </div>
  );
}

function TestsView({ type, tests }: { type: string; tests: typeof readingTests }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold">{type} tests</h2>
        <Button variant="hero" size="sm"><Plus className="h-4 w-4" /> Add new</Button>
      </div>
      <div className="mt-5 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Level</th>
              <th className="px-4 py-3">Duration</th>
              <th className="px-4 py-3">Access</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((t) => (
              <tr key={t.id} className="border-t border-border">
                <td className="px-4 py-3 font-medium">{t.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{t.level}</td>
                <td className="px-4 py-3 text-muted-foreground">{t.duration}m</td>
                <td className="px-4 py-3">
                  {t.premium ? (
                    <span className="rounded-full bg-foreground/90 px-2 py-0.5 text-[11px] font-semibold text-background">Premium</span>
                  ) : (
                    <span className="rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success">Free</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8"><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 className="h-4 w-4" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UsersView() {
  const users = [
    { name: "Aziza K.", email: "aziza@example.com", plan: "Premium", joined: "Mar 2026" },
    { name: "Bekzod M.", email: "bekzod@example.com", plan: "Free", joined: "Apr 2026" },
    { name: "Diyora S.", email: "diyora@example.com", plan: "Pro", joined: "Jan 2026" },
  ];
  return (
    <div>
      <h2 className="font-display text-xl font-semibold">Users</h2>
      <div className="mt-5 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.email} className="border-t border-border">
                <td className="px-4 py-3 font-medium">{u.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{u.email}</td>
                <td className="px-4 py-3">{u.plan}</td>
                <td className="px-4 py-3 text-muted-foreground">{u.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PremiumView() {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold">Premium content</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Lock or unlock specific tests, edit pricing plans, and grant access to individual users.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border p-5">
          <h3 className="font-semibold">Locked tests</h3>
          <p className="mt-1 text-2xl font-display font-semibold">
            {[...readingTests, ...listeningTests].filter((t) => t.premium).length}
          </p>
        </div>
        <div className="rounded-xl border border-border p-5">
          <h3 className="font-semibold">Active subscriptions</h3>
          <p className="mt-1 text-2xl font-display font-semibold">3,104</p>
        </div>
      </div>
    </div>
  );
}
