import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Headphones, PenLine, Mic, Sparkles, ClipboardCheck, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "English Practice AI — Improve Your English Skills" },
      { name: "description", content: "Practice reading and listening with realistic exam-style tests. Track progress and prepare for IELTS-style exams." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_0%,oklch(0.95_0.08_27)_0%,transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              AI-assisted practice for exam-grade results
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Improve Your <span className="text-primary">English Skills</span> with Focused Practice
            </h1>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Realistic reading passages, exam-style listening audio, and instant answer checking.
              Track your band score and prepare with confidence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/reading">
                <Button variant="hero" size="lg">Start Practicing <ArrowRight className="h-4 w-4" /></Button>
              </Link>
              <Link to="/premium">
                <Button variant="outline" size="lg">View Premium</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice cards */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          <Link to="/reading" className="group rounded-2xl border border-border bg-[image:var(--gradient-card)] p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]">
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">Available</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold">Reading Practice</h3>
            <p className="mt-2 text-sm text-muted-foreground">Exam-style passages with multiple question types, timed practice, and instant answer checking.</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">Start reading <ArrowRight className="h-4 w-4" /></span>
          </Link>

          <Link to="/listening" className="group rounded-2xl border border-border bg-[image:var(--gradient-card)] p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]">
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Headphones className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">Available</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold">Listening Practice</h3>
            <p className="mt-2 text-sm text-muted-foreground">Audio lectures and conversations with built-in player, transcript, and scored question sets.</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">Start listening <ArrowRight className="h-4 w-4" /></span>
          </Link>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Coming Soon</h2>
            <p className="mt-1 text-sm text-muted-foreground">More skills to round out your preparation.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: PenLine, title: "Writing Practice", desc: "Task 1 & 2 prompts with AI feedback." },
            { icon: Mic, title: "Speaking Practice", desc: "Mock interviews with sample answers." },
            { icon: Sparkles, title: "Vocabulary", desc: "Spaced repetition for exam-grade words." },
            { icon: ClipboardCheck, title: "Full Mock Tests", desc: "Complete timed exams with scoring." },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-dashed border-border bg-secondary/40 p-5">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-background text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-semibold">{c.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              <span className="mt-3 inline-block rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">COMING SOON</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-3xl bg-[image:var(--gradient-hero)] px-6 py-14 text-center text-primary-foreground md:px-12">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Ready to raise your band score?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm opacity-90 md:text-base">Join thousands of learners and start practicing today — free tests available.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/login">
              <Button size="lg" variant="secondary">Create free account</Button>
            </Link>
            <Link to="/premium">
              <Button size="lg" variant="outline" className="border-white/40 bg-transparent text-primary-foreground hover:bg-white/10">Unlock Premium</Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
