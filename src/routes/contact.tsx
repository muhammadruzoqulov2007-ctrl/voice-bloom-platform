import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — English Practice AI" },
      { name: "description", content: "Get in touch with the English Practice AI team — Telegram, email, and support." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-semibold md:text-4xl">Get in touch</h1>
          <p className="mt-2 text-muted-foreground">We usually reply within a few hours on Telegram.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: MessageCircle, title: "Telegram", value: "@englishpractice_ai", note: "Fastest response" },
            { icon: Mail, title: "Email", value: "hello@englishpractice.ai", note: "Within 24 hours" },
            { icon: MapPin, title: "Based in", value: "Tashkent, UZ", note: "Working globally" },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-5">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm">{c.value}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
        >
          <h2 className="font-display text-xl font-semibold">Send us a message</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4 space-y-1.5">
            <Label htmlFor="msg">Message</Label>
            <Textarea id="msg" rows={5} placeholder="How can we help?" />
          </div>
          <Button variant="hero" className="mt-5 w-full sm:w-auto" size="lg">
            <Send className="h-4 w-4" /> Send message
          </Button>
        </form>
      </div>
    </SiteLayout>
  );
}
