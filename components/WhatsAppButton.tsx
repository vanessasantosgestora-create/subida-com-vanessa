"use client";

import { motion } from "framer-motion";
import { buildWhatsappLink } from "@/lib/utils";
import { trackMetaEvent } from "@/components/MetaPixel";

export function WhatsAppButton() {
  return (
    <motion.a
      href={buildWhatsappLink(
        "Olá Vanessa! Quero saber mais sobre a Subida com Vanessa.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackMetaEvent("Contact", { source: "whatsapp_floating_button" });
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_40px_-5px_rgba(37,211,102,0.7)] ring-1 ring-white/10 sm:h-16 sm:w-16"
      aria-label="Falar no WhatsApp"
    >
      <span className="absolute inset-0 animate-pulse-glow rounded-full bg-[#25D366]/40 blur-xl" />
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="currentColor"
        className="relative text-white"
        aria-hidden
      >
        <path d="M19.1 17.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2.1-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3s-.9.9-.9 2.1.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 2.6 1.1 2.6.7 3.1.7.5 0 1.6-.6 1.8-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4zM16 4C9.4 4 4 9.3 4 16c0 2.1.5 4.1 1.6 5.9L4 28l6.3-1.6c1.7.9 3.7 1.5 5.7 1.5 6.6 0 12-5.3 12-12S22.6 4 16 4zm0 22c-1.9 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C6.5 19.7 6 17.9 6 16c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10z" />
      </svg>
    </motion.a>
  );
}
