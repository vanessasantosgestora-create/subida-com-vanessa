"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Particles } from "@/components/Particles";
import { VanessaPortrait } from "@/components/VanessaPortrait";
import { trackMetaEvent } from "@/components/MetaPixel";
import { buildWhatsappLink } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="topo"
      className="noise relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-44 lg:pb-24"
    >
      {/* Fundo: grid + partículas + radiais */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-0">
        <Particles density={50} />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-royal-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-gold-300/10 blur-[120px]"
      />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Coluna texto */}
          <div className="relative">
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-royal-300/30 bg-royal-500/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-royal-100 backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-gold-300" />
              <span>Landing Pages Premium</span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.85rem]"
            >
              <span className="text-white">Landing pages premium para </span>
              <span className="text-gradient-premium">empresas que querem parecer gigantes.</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg text-white/65 text-balance"
            >
              Criamos experiências digitais futuristas que aumentam autoridade, confiança e conversão — para a sua marca finalmente ser percebida como ela merece.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={buildWhatsappLink(
                  "Olá Vanessa! Quero minha landing premium. Pode me passar os detalhes?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackMetaEvent("Lead", { source: "hero_primary_cta" })
                }
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-7 py-3.5 text-sm font-semibold text-ink shadow-glow-gold transition-all hover:shadow-[0_0_70px_-10px_rgba(251,199,64,0.85)]"
              >
                Quero minha landing premium
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={buildWhatsappLink(
                  "Olá Vanessa! Vim pelo site e quero conversar.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackMetaEvent("Lead", { source: "hero_secondary_cta" })
                }
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white transition-all hover:border-royal-200/40 hover:bg-white/[0.06]"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                Falar no WhatsApp
              </a>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs text-white/45"
            >
              <Trust label="Performance" value="< 1s LCP" />
              <Trust label="Mobile-first" value="100% responsivo" />
              <Trust label="Entrega" value="até 15 dias" />
              <Trust label="Conversão" value="foco real" />
            </motion.div>
          </div>

          {/* Coluna foto + mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <VanessaPortrait priority variant="hero" />

            {/* Cartão flutuante: badge premium */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-4 top-12 hidden glass rounded-2xl px-4 py-3 shadow-glow-soft md:flex md:items-center md:gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-royal-400 to-royal-600 text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Direção criativa
                </p>
                <p className="text-sm font-semibold text-white">Premium · Futurista</p>
              </div>
            </motion.div>

            {/* Cartão flutuante: métrica */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-4 bottom-20 hidden glass rounded-2xl px-4 py-3 shadow-glow-soft md:block"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Carregamento
              </p>
              <p className="mt-0.5 font-display text-xl font-semibold text-gradient-gold">
                97 / 100
              </p>
              <p className="text-[10px] text-white/45">PageSpeed estimado</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Trust({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-royal-300 shadow-[0_0_8px_rgba(166,120,255,0.7)]" />
      <span className="uppercase tracking-[0.18em]">{label}</span>
      <span className="text-white/75">{value}</span>
    </div>
  );
}
