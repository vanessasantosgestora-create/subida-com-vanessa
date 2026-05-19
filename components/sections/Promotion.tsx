"use client";

import { motion } from "framer-motion";
import { Flame, Check, ArrowRight } from "lucide-react";
import { Countdown } from "@/components/Countdown";
import { buildWhatsappLink } from "@/lib/utils";

const included = [
  "Landing page premium completa",
  "Direção visual cinematográfica",
  "Copy focada em conversão",
  "Integração WhatsApp",
  "SEO técnico aplicado",
  "Hospedagem e publicação inclusas",
  "Otimização mobile total",
  "Revisões até você aprovar",
];

export function Promotion() {
  return (
    <section
      id="promocao"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-royal-900/20 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-500/15 blur-[140px]"
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="border-glow relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink-soft via-[#0d0820] to-ink shadow-premium"
        >
          {/* Glow interno animado */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-pulse-glow rounded-full bg-gold-300/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 animate-pulse-glow rounded-full bg-royal-500/25 blur-3xl"
          />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-16">
            {/* Lado texto */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/30 bg-gold-300/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-200">
                <Flame className="h-3.5 w-3.5 animate-pulse text-gold-300" />
                Promoção Relâmpago
              </span>

              <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] text-balance sm:text-4xl lg:text-[2.75rem]">
                <span className="text-white">Sua landing premium por apenas </span>
                <span className="text-gradient-gold">R$ 497.</span>
              </h2>

              <p className="mt-5 max-w-lg text-white/65 text-balance">
                Por tempo limitado, ofereço o pacote premium completo por um valor que dificilmente você verá novamente. Vagas reduzidas para garantir qualidade artesanal em cada projeto.
              </p>

              <div className="mt-7 flex items-baseline gap-3">
                <span className="text-sm text-white/40 line-through">De R$ 1.497</span>
                <span className="font-display text-5xl font-semibold text-gradient-gold sm:text-6xl">
                  R$ 497
                </span>
              </div>
              <p className="mt-1 text-xs text-white/45">
                Pagamento em até 12x
              </p>

              <div className="mt-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                  Promoção encerra em
                </p>
                <div className="mt-4">
                  <Countdown />
                </div>
              </div>

              <a
                href={buildWhatsappLink(
                  "Olá Vanessa! Quero garantir minha landing premium pela promoção de R$497.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-8 py-4 font-semibold text-ink shadow-glow-gold transition-all hover:shadow-[0_0_70px_-10px_rgba(251,199,64,0.9)]"
              >
                Garantir minha vaga agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-3 text-[11px] text-white/40">
                ⚡ Restam poucas vagas neste mês
              </p>
            </div>

            {/* Lado: o que está incluso */}
            <div className="relative">
              <div className="glass-strong rounded-2xl p-6 sm:p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-royal-200">
                  Pacote inclui
                </p>
                <ul className="mt-5 space-y-3.5">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-ink shadow-glow-gold">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 rounded-xl border border-royal-300/15 bg-royal-500/5 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-royal-200/80">
                    Garantia
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    Revisões ilimitadas até você aprovar 100% do resultado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
