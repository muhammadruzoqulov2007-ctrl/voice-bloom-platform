import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";
import { Mic } from "lucide-react";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Speaking Practice — Coming Soon" },
      { name: "description", content: "Mock speaking interviews with sample answers — launching soon." },
    ],
  }),
  component: () => <ComingSoon icon={Mic} title="Speaking Practice" description="Practice exam-style interviews with recorded sample answers." />,
});
