"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackMetaEvent } from "@/components/MetaPixel";
import { buildWhatsappLink } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal-900/30 via-transparent to-transparent"
      />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="border-glow relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-royal-900/40 via-ink-soft to-ink p-10 text-center shadow-premium sm:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-royal-500/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-gold-300/15 blur-3xl"
          />

          <h2 className="relative font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-[2.75rem]">
            <span className="text-white">Pronto para sua marca finalmente </span>
            <span className="text-gradient-premium">parecer gigante?</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-white/65 text-balance">
            Comece agora pelo WhatsApp. Em poucos minutos eu entendo seu projeto e te mostro como sua landing premium pode ficar.
          </p>

          <a
            href={buildWhatsappLink(
              "Olá Vanessa! Estou pronto(a) para começar minha landing premium.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackMetaEvent("Lead", { source: "final_cta" })
            }
            className="group relative mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-9 py-4 font-semibold text-ink shadow-glow-gold transition-all hover:shadow-[0_0_70px_-10px_rgba(251,199,64,0.9)]"
          >
            Quero começar agora
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
