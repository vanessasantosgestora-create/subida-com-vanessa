import Image from "next/image";
import { cn } from "@/lib/utils";

interface VanessaPortraitProps {
  className?: string;
  priority?: boolean;
  /** "hero" mostra moldura premium completa, "about" foco em corpo institucional */
  variant?: "hero" | "about";
}

/**
 * Enquadra a foto da Vanessa mostrando apenas do tronco para baixo —
 * a face fica acima da área visível por design (preferência do cliente).
 */
export function VanessaPortrait({
  className,
  priority,
  variant = "hero",
}: VanessaPortraitProps) {
  const sizes =
    variant === "hero"
      ? "(max-width: 768px) 80vw, 420px"
      : "(max-width: 768px) 90vw, 480px";

  return (
    <div className={cn("relative", className)}>
      {/* Glow externo cinematográfico */}
      <div
        aria-hidden
        className="absolute -inset-10 rounded-[2.5rem] bg-radial-purple blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-royal-500/30 via-royal-400/20 to-gold-300/20 blur-2xl"
      />

      {/* Moldura premium */}
      <div className="border-glow relative overflow-hidden rounded-[1.8rem] bg-ink-soft shadow-premium">
        {/* O container "corta" a parte de cima da foto, mostrando apenas o tronco */}
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/vanessa.jpg"
            alt="Vanessa — fundadora da Subida com Vanessa"
            fill
            priority={priority}
            sizes={sizes}
            className="scale-[1.35] object-cover object-[center_88%]"
          />

          {/* Vinheta cinematográfica */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/40"
          />

          {/* Gradiente roxo no fundo */}
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-color bg-gradient-to-tr from-royal-700/30 via-transparent to-gold-300/10"
          />

          {/* Linha de scan futurista */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-royal-200/50 to-transparent"
          />
        </div>

        {/* Detalhes de canto — tipo HUD */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-royal-200/60"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-gold-300/60"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-gold-300/60"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-royal-200/60"
        />

        {variant === "hero" && (
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                online · São Paulo
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300">
              Vanessa
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
