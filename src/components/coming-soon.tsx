import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "./site-layout";
import { Button } from "./ui/button";

export function ComingSoon({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <SiteLayout>
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-8 w-8" />
        </div>
        <span className="mt-6 rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Coming Soon
        </span>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">{title}</h1>
        <p className="mt-3 text-muted-foreground">{description}</p>
        <div className="mt-8 flex gap-3">
          <Link to="/">
            <Button variant="outline">Back to home</Button>
          </Link>
          <Link to="/reading">
            <Button variant="hero">Try Reading instead</Button>
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
