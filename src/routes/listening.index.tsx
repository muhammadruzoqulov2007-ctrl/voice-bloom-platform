import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { TestList } from "@/components/test-list";
import { listeningTests } from "@/lib/mock-data";

export const Route = createFileRoute("/listening/")({
  head: () => ({
    meta: [
      { title: "Listening Practice — English Practice AI" },
      { name: "description", content: "Listen to exam-style English audio and answer questions to test your comprehension." },
    ],
  }),
  component: ListeningIndex,
});

function ListeningIndex() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold md:text-4xl">Listening Practice</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Lectures, conversations, and interviews — each with a player and scored questions.
          </p>
        </header>
        <TestList tests={listeningTests} basePath="/listening" type="Listening" />
      </div>
    </SiteLayout>
  );
}
