"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Sparkles,
  Smartphone,
  MessageCircle,
  Search,
  TrendingUp,
  Crown,
  Wand2,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Carregamento ultra rápido",
    description:
      "Páginas otimizadas para abrir em menos de 1 segundo, mesmo no 4G. Velocidade é percepção de qualidade.",
  },
  {
    icon: Crown,
    title: "Visual premium",
    description:
      "Estética cinematográfica de startups de tecnologia — sua marca finalmente parece gigante.",
  },
  {
    icon: Wand2,
    title: "Design moderno",
    description:
      "Direção criativa atual com gradientes, motion e microinterações que encantam à primeira vista.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description:
      "85% do tráfego vem do celular. Sua landing é desenhada primeiro para mobile, com perfeição absoluta.",
  },
  {
    icon: MessageCircle,
    title: "Integração com WhatsApp",
    description:
      "Botão flutuante e CTAs estratégicos levam o visitante direto para a conversa onde a venda acontece.",
  },
  {
    icon: Search,
    title: "SEO otimizado",
    description:
      "Metadata, Open Graph e estrutura técnica feitas para o Google entender e ranquear sua marca.",
  },
  {
    icon: TrendingUp,
    title: "Foco em conversão",
    description:
      "Cada elemento, cada linha de copy e cada CTA é pensado para transformar visitante em cliente.",
  },
  {
    icon: Sparkles,
    title: "Aparência profissional",
    description:
      "Saia de cara de freelancer amador. Tenha uma vitrine digital que transmite autoridade real.",
  },
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-royal-300/40 to-transparent"
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.32em] text-royal-200/80">
            Por que escolher premium
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl">
            <span className="text-white">Tudo que sua marca precisa para </span>
            <span className="text-gradient-premium">parecer e vender mais.</span>
          </h2>
          <p className="mt-5 text-white/60 text-balance">
            Não é só uma página bonita. É uma máquina de percepção, autoridade e conversão.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: (i % 4) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-glow group relative overflow-hidden rounded-2xl bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.04]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-royal-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500/30 to-royal-700/10 ring-1 ring-inset ring-royal-300/20">
                <b.icon className="h-5 w-5 text-royal-100" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-white">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {b.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
