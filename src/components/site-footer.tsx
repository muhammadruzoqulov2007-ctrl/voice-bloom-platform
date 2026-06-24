import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
                <BookOpen className="h-4 w-4" />
              </span>
              English Practice <span className="text-primary">AI</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              A modern practice platform for learners preparing for international English exams.
              Reading, listening, and more — designed for measurable progress.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Practice</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/reading" className="hover:text-foreground">Reading</Link></li>
              <li><Link to="/listening" className="hover:text-foreground">Listening</Link></li>
              <li><Link to="/premium" className="hover:text-foreground">Premium</Link></li>
              <li><Link to="/results" className="hover:text-foreground">Results</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><a href="https://t.me/Muhammad231722" target="_blank" rel="noreferrer" className="hover:text-foreground">Telegram Support</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© 2026 English Practice AI – All rights reserved.</p>
          <p className="mt-3 leading-relaxed">
            <strong className="text-foreground/80">Disclaimer:</strong> This is an independent
            English language practice platform. We are not affiliated with, endorsed by, or
            connected to IELTS, Cambridge Assessment English, the British Council, IDP: IELTS
            Australia, or any official IELTS testing organization. This website provides
            educational practice materials only.
          </p>
        </div>
      </div>
    </footer>
  );
}
