import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";
import { ClipboardCheck } from "lucide-react";

export const Route = createFileRoute("/mock-tests")({
  head: () => ({
    meta: [
      { title: "Mock Tests — Coming Soon" },
      { name: "description", content: "Complete timed mock exams with full scoring." },
    ],
  }),
  component: () => <ComingSoon icon={ClipboardCheck} title="Full Mock Tests" description="Complete timed mock exams with realistic scoring and analysis." />,
});
