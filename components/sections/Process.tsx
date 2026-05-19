"use client";

import { motion } from "framer-motion";
import { MessageSquare, Palette, Globe2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Você envia as informações",
    description:
      "Conversa rápida no WhatsApp. Eu entendo seu negócio, público e objetivo. Você não precisa preparar nada — eu te guio.",
  },
  {
    icon: Palette,
    title: "Crio sua landing premium",
    description:
      "Desenho cada seção com direção visual cinematográfica, copy focada em conversão e identidade que destaca sua marca.",
  },
  {
    icon: Globe2,
    title: "Publico online",
    description:
      "Hospedagem premium configurada, domínio conectado, SEO aplicado. Sua landing entra no ar pronta para receber clientes.",
  },
  {
    icon: Rocket,
    title: "Sua empresa ganha autoridade",
    description:
      "Cada visitante passa a ver uma marca grande, sofisticada e confiável. Resultado: mais propostas, mais vendas, mais autoridade.",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal-300/30 to-transparent"
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.32em] text-royal-200/80">
            Como funciona
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl">
            <span className="text-white">Da conversa ao </span>
            <span className="text-gradient-premium">site no ar em até 15 dias.</span>
          </h2>
        </motion.div>

        <div className="relative mt-16">
          {/* Linha de conexão (apenas desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px lg:block"
          >
            <div className="mx-auto h-full w-[78%] bg-gradient-to-r from-transparent via-royal-300/40 to-transparent" />
          </div>

          <ol className="grid gap-6 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-royal-500/40 blur-xl"
                    />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-royal-300/30 bg-gradient-to-br from-royal-700/60 to-royal-900 shadow-glow">
                      <step.icon className="h-5 w-5 text-royal-100" />
                      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 font-display text-[11px] font-semibold text-ink shadow-glow-gold">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-6 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-white/55">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
