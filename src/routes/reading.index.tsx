import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { TestList } from "@/components/test-list";
import { readingTests } from "@/lib/mock-data";

export const Route = createFileRoute("/reading/")({
  head: () => ({
    meta: [
      { title: "Reading Practice — English Practice AI" },
      { name: "description", content: "Exam-style English reading passages with answer checking and timed practice." },
    ],
  }),
  component: ReadingIndex,
});

function ReadingIndex() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold md:text-4xl">Reading Practice</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Choose a passage and answer the questions. Get instant feedback and track your accuracy.
          </p>
        </header>
        <TestList tests={readingTests} basePath="/reading" type="Reading" />
      </div>
    </SiteLayout>
  );
}
