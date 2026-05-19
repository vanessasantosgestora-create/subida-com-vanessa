"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { cn, buildWhatsappLink } from "@/lib/utils";

const links = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#processo", label: "Processo" },
  { href: "#promocao", label: "Promoção" },
  { href: "#vanessa", label: "Quem sou eu" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border border-white/5 px-4 py-2.5 transition-all duration-500 sm:px-6",
            scrolled
              ? "glass-strong shadow-premium"
              : "bg-transparent",
          )}
        >
          <a href="#topo" className="shrink-0">
            <Logo size={32} />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={buildWhatsappLink(
              "Olá Vanessa! Vim pelo site e quero saber mais sobre a landing page premium.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-royal-500 to-royal-400 px-5 py-2 text-sm font-medium text-white shadow-glow transition-all hover:shadow-[0_0_60px_-10px_rgba(166,120,255,0.9)] sm:flex"
          >
            <span>Falar no WhatsApp</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
