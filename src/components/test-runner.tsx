import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Question } from "@/lib/mock-data";

export function TestRunner({ questions }: { questions: Question[] }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce(
    (acc, q) => acc + (answers[q.id] === q.answer ? 1 : 0),
    0,
  );

  return (
    <div className="space-y-5">
      {questions.map((q, idx) => {
        const userAns = answers[q.id];
        return (
          <div key={q.id} className="rounded-xl border border-border bg-card p-5">
            <p className="font-medium">
              <span className="mr-2 text-primary">{idx + 1}.</span>
              {q.question}
            </p>
            <div className="mt-4 space-y-2">
              {q.options.map((opt, i) => {
                const selected = userAns === i;
                const isCorrect = submitted && i === q.answer;
                const isWrong = submitted && selected && i !== q.answer;
                return (
                  <label
                    key={i}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                      isCorrect
                        ? "border-success bg-success/10"
                        : isWrong
                          ? "border-destructive bg-destructive/10"
                          : selected
                            ? "border-primary bg-primary/5"
                            : "border-border hover:bg-accent/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      checked={selected}
                      onChange={() => !submitted && setAnswers({ ...answers, [q.id]: i })}
                      className="accent-primary"
                    />
                    <span className="flex-1">{opt}</span>
                    {isCorrect && <CheckCircle2 className="h-4 w-4 text-success" />}
                    {isWrong && <XCircle className="h-4 w-4 text-destructive" />}
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}

      {!submitted ? (
        <Button
          variant="hero"
          size="lg"
          className="w-full"
          disabled={Object.keys(answers).length < questions.length}
          onClick={() => setSubmitted(true)}
        >
          Submit Answers
        </Button>
      ) : (
        <div className="rounded-xl border border-border bg-[image:var(--gradient-card)] p-6 text-center">
          <p className="text-sm text-muted-foreground">Your score</p>
          <p className="mt-1 font-display text-5xl font-semibold text-primary">
            {score}<span className="text-2xl text-muted-foreground">/{questions.length}</span>
          </p>
          <p className="mt-2 text-sm">
            {score === questions.length
              ? "Perfect! 🎉"
              : score >= questions.length / 2
                ? "Good work — review the missed items."
                : "Keep practicing — you'll get there."}
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
          >
            <RotateCcw className="h-4 w-4" /> Try again
          </Button>
        </div>
      )}
    </div>
  );
}
