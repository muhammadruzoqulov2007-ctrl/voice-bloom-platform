import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Signal } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { TestRunner } from "@/components/test-runner";
import { listeningTests, sampleQuestions } from "@/lib/mock-data";

export const Route = createFileRoute("/listening/$testId")({
  loader: ({ params }) => {
    const test = listeningTests.find((t) => t.id === params.testId);
    if (!test) throw notFound();
    return { test };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.test.title ?? "Listening"} — English Practice AI` },
      { name: "description", content: loaderData?.test.description ?? "" },
    ],
  }),
  component: ListeningTest,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-semibold">Test not found</h1>
        <Link to="/listening" className="mt-4 inline-block text-primary hover:underline">← Back to listening</Link>
      </div>
    </SiteLayout>
  ),
});

function ListeningTest() {
  const { test } = Route.useLoaderData();
  const data = sampleQuestions[test.id] ?? sampleQuestions.l1;

  return (
    <SiteLayout>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <Link to="/listening" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All listening tests
        </Link>
        <header className="mt-4">
          <h1 className="text-3xl font-semibold">{test.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Signal className="h-4 w-4" /> {test.level}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {test.duration} min</span>
          </div>
        </header>

        <div className="mt-8 rounded-2xl border border-border bg-[image:var(--gradient-card)] p-6">
          <h2 className="mb-3 font-display text-lg font-semibold">Audio</h2>
          {data.audioUrl ? (
            <audio controls preload="metadata" className="w-full">
              <source src={data.audioUrl} type="audio/mpeg" />
            </audio>
          ) : (
            <p className="text-sm text-muted-foreground">Audio coming soon.</p>
          )}
        </div>

        <section className="mt-8">
          <h2 className="mb-4 font-display text-xl font-semibold">Questions</h2>
          <TestRunner questions={data.questions} />
        </section>
      </div>
    </SiteLayout>
  );
}
