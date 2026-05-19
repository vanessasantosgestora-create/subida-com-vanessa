"use client";

import { motion } from "framer-motion";
import { MapPin, Target, Clock } from "lucide-react";
import { VanessaPortrait } from "@/components/VanessaPortrait";
import { buildWhatsappLink } from "@/lib/utils";

export function About() {
  return (
    <section
      id="vanessa"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-radial-purple opacity-60"
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
            Quem está por trás
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl">
            <span className="text-white">A pessoa por trás da </span>
            <span className="text-gradient-premium">Subida com Vanessa.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-sm"
          >
            <VanessaPortrait variant="about" />
          </motion.div>

          {/* Texto institucional */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <p className="font-display text-2xl font-medium leading-snug text-white text-balance sm:text-[1.75rem]">
              <span className="text-gradient-premium">“Transformo negócios comuns</span>
              <span className="text-white"> em marcas com presença digital premium.”</span>
            </p>

            <div className="mt-7 space-y-4 text-white/65">
              <p>
                Sou a <strong className="font-semibold text-white">Vanessa</strong>, fundadora da Subida com Vanessa. Há mais de <strong className="font-semibold text-white">três anos</strong> trabalho com criação digital, atuando como freelancer autônoma — estudando, praticando e refinando o ofício de criar páginas que não são apenas bonitas, mas <em className="text-gold-200">vendem</em>.
              </p>
              <p>
                Acredito que pequenas empresas e MEIs merecem o mesmo padrão visual das grandes marcas de tecnologia. É exatamente isso que entrego: design premium, identidade futurista e foco real em conversão — sem cobrar como uma agência de São Paulo.
              </p>
            </div>

            {/* Cards de info */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <InfoCard
                icon={<MapPin className="h-4 w-4" />}
                label="Atendimento"
                value="São Paulo · Online no Brasil todo"
              />
              <InfoCard
                icon={<Clock className="h-4 w-4" />}
                label="Experiência"
                value="+3 anos em criação digital"
              />
              <InfoCard
                icon={<Target className="h-4 w-4" />}
                label="Foco"
                value="Páginas que convertem de verdade"
              />
            </div>

            <a
              href={buildWhatsappLink(
                "Olá Vanessa! Quero conversar diretamente com você sobre meu projeto.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-royal-300/40 bg-royal-500/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-royal-500/20"
            >
              Conversar com a Vanessa →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5 backdrop-blur">
      <div className="flex items-center gap-2 text-royal-200">
        <span className="text-royal-200">{icon}</span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-white/45">
          {label}
        </span>
      </div>
      <p className="mt-1.5 text-sm text-white/85">{value}</p>
    </div>
  );
}
