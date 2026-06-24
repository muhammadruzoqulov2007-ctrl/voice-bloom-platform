import { Send } from "lucide-react";

export function TelegramButton() {
  return (
    
      href="https://t.me/Muhammad231722"
      target="_blank"
      rel="noreferrer"
      aria-label="Telegram support"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#229ED9] text-white shadow-[var(--shadow-elevated)] transition-transform hover:scale-105"
    >
      <Send className="h-6 w-6" />
    </a>
  );
}
