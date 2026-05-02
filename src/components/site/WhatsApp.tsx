import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=919841727799"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.7_0.18_150)] animate-ping opacity-40" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-glow group-hover:scale-110 transition-transform">
        <MessageCircle className="w-7 h-7" />
      </span>
    </a>
  );
}