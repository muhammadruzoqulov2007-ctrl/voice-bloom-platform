import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";
import { PenLine } from "lucide-react";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing Practice — Coming Soon" },
      { name: "description", content: "Writing Task 1 & 2 practice with AI feedback — launching soon." },
    ],
  }),
  component: () => <ComingSoon icon={PenLine} title="Writing Practice" description="Task 1 & 2 prompts with AI band-score feedback. Launching soon." />,
});
