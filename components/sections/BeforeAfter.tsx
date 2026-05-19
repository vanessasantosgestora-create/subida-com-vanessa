"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const before = [
  "Visual genérico de template",
  "Lenta para carregar",
  "Quebrada no celular",
  "Sem foco em conversão",
  "Sem identidade visual",
  "Cliente não confia",
];

const after = [
  "Visual cinematográfico premium",
  "Carregamento ultra rápido",
  "Mobile perfeito em qualquer tela",
  "Cada elemento focado em vender",
  "Identidade futurista marcante",
  "Cliente confia e contrata",
];

export function BeforeAfter() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.32em] text-royal-200/80">
            A diferença que muda tudo
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl">
            <span className="text-white">Empresa comum </span>
            <span className="text-gradient-premium">vs. empresa premium.</span>
          </h2>
          <p className="mt-5 text-white/60 text-balance">
            O mesmo negócio, com duas percepções completamente diferentes. Qual delas seu cliente está vendo agora?
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* ANTES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#0a0814]/60 p-8 sm:p-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
              Antes
            </span>
            <h3 className="mt-4 font-display text-2xl text-white/80">
              Site comum, sem alma
            </h3>

            {/* Mockup desbotado */}
            <div className="mt-6 rounded-xl border border-white/5 bg-black/50 p-3">
              <div className="flex gap-1.5 pb-3">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </div>
              <div className="space-y-2 opacity-50">
                <div className="h-4 w-2/3 rounded bg-white/10" />
                <div className="h-2 w-full rounded bg-white/[0.06]" />
                <div className="h-2 w-5/6 rounded bg-white/[0.06]" />
                <div className="mt-4 h-20 w-full rounded bg-white/[0.04]" />
                <div className="mt-4 h-8 w-32 rounded bg-white/10" />
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-white/55">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 ring-1 ring-inset ring-red-400/20">
                    <X className="h-3 w-3 text-red-300" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DEPOIS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="border-glow relative overflow-hidden rounded-3xl bg-gradient-to-br from-royal-900/40 via-ink-soft to-ink p-8 shadow-premium sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-royal-500/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gold-300/15 blur-3xl"
            />

            <span className="relative inline-flex items-center gap-2 rounded-full bg-gold-300/15 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold-200 ring-1 ring-inset ring-gold-300/30">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-300 shadow-[0_0_8px_rgba(251,199,64,0.8)]" />
              Depois · Premium
            </span>
            <h3 className="relative mt-4 font-display text-2xl font-semibold text-gradient-premium">
              Marca de autoridade digital
            </h3>

            {/* Mockup premium */}
            <div className="relative mt-6 rounded-xl border border-royal-200/15 bg-ink-deep/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="flex gap-1.5 pb-3">
                <span className="h-2 w-2 rounded-full bg-royal-300/70" />
                <span className="h-2 w-2 rounded-full bg-gold-300/70" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-2/3 rounded bg-gradient-to-r from-white/80 via-royal-100/60 to-gold-300/60" />
                <div className="h-2 w-full rounded bg-white/15" />
                <div className="h-2 w-5/6 rounded bg-white/10" />
                <div className="relative mt-4 h-20 w-full overflow-hidden rounded bg-gradient-to-br from-royal-500/30 via-royal-700/20 to-gold-300/10">
                  <span className="absolute inset-y-0 -left-full w-1/2 animate-shimmer bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </div>
                <div className="mt-4 inline-flex h-8 items-center rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-4 text-[10px] font-semibold text-ink">
                  Quero agora →
                </div>
              </div>
            </div>

            <ul className="relative mt-8 space-y-3">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-white/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-300/20 ring-1 ring-inset ring-gold-300/40">
                    <Check className="h-3 w-3 text-gold-200" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
