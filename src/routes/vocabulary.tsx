import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/vocabulary")({
  head: () => ({
    meta: [
      { title: "Vocabulary — Coming Soon" },
      { name: "description", content: "Spaced-repetition vocabulary for exam-grade English." },
    ],
  }),
  component: () => <ComingSoon icon={Sparkles} title="Vocabulary Practice" description="Spaced repetition for the words that matter most on exam day." />,
});
