"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buildWhatsappLink } from "@/lib/utils";
import { faqs } from "@/lib/faqs";

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.32em] text-royal-200/80">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl">
            <span className="text-white">Tudo que você precisa </span>
            <span className="text-gradient-premium">saber antes de começar.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 rounded-2xl border border-royal-300/20 bg-royal-500/[0.08] p-6 text-center backdrop-blur">
            <p className="text-sm text-white/70">
              Ficou com alguma outra dúvida?
            </p>
            <a
              href={buildWhatsappLink(
                "Olá Vanessa! Tenho uma dúvida antes de contratar.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gold-200 hover:text-gold-100"
            >
              Pergunte direto no WhatsApp →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
