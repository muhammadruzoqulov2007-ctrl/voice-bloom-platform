import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Signal } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { TestRunner } from "@/components/test-runner";
import { readingTests, sampleQuestions } from "@/lib/mock-data";

export const Route = createFileRoute("/reading/$testId")({
  loader: ({ params }) => {
    const test = readingTests.find((t) => t.id === params.testId);
    if (!test) throw notFound();
    return { test };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.test.title ?? "Reading"} — English Practice AI` },
      { name: "description", content: loaderData?.test.description ?? "" },
    ],
  }),
  component: ReadingTest,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-semibold">Test not found</h1>
        <Link to="/reading" className="mt-4 inline-block text-primary hover:underline">← Back to reading</Link>
      </div>
    </SiteLayout>
  ),
});

function ReadingTest() {
  const { test } = Route.useLoaderData();
  const data = sampleQuestions[test.id] ?? sampleQuestions.r1;

  return (
    <SiteLayout>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <Link to="/reading" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All reading tests
        </Link>
        <header className="mt-4">
          <h1 className="text-3xl font-semibold">{test.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Signal className="h-4 w-4" /> {test.level}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {test.duration} min</span>
          </div>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-6 leading-relaxed">
            <h2 className="mb-4 font-display text-xl font-semibold">Passage</h2>
            <div className="whitespace-pre-line text-sm text-foreground/90">
              {data.passage ?? "Reading passage coming soon."}
            </div>
          </article>
          <section>
            <h2 className="mb-4 font-display text-xl font-semibold">Questions</h2>
            <TestRunner questions={data.questions} />
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
