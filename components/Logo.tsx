import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}

export function Logo({ className, size = 36, showWordmark = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-royal-500/30 blur-xl"
        />
        <svg
          viewBox="0 0 64 64"
          width={size}
          height={size}
          fill="none"
          className="relative"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Subida com Vanessa"
        >
          <defs>
            <linearGradient id="eagleStroke" x1="0" y1="0" x2="64" y2="64">
              <stop offset="0%" stopColor="#E4D2FF" />
              <stop offset="55%" stopColor="#A678FF" />
              <stop offset="100%" stopColor="#FBC740" />
            </linearGradient>
            <linearGradient id="eagleFill" x1="32" y1="6" x2="32" y2="58">
              <stop offset="0%" stopColor="#A678FF" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Asas estilizadas em V ascendente — geometria minimalista */}
          <path
            d="M6 36 L20 22 L26 30 L32 16 L38 30 L44 22 L58 36"
            stroke="url(#eagleStroke)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Penas internas */}
          <path
            d="M14 30 L20 26 M50 30 L44 26"
            stroke="url(#eagleStroke)"
            strokeOpacity="0.7"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Corpo / vetor de ascensão */}
          <path
            d="M32 16 L32 48"
            stroke="url(#eagleStroke)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Cauda */}
          <path
            d="M26 44 L32 50 L38 44"
            stroke="url(#eagleStroke)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="url(#eagleFill)"
          />
          {/* Ponto dourado — visão / olho */}
          <circle cx="32" cy="14" r="2.2" fill="#FBC740" />
          <circle cx="32" cy="14" r="4" fill="#FBC740" fillOpacity="0.25" />
        </svg>
      </div>

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-semibold tracking-wide text-white">
            Subida
            <span className="ml-1 text-gold-300">com Vanessa</span>
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.32em] text-royal-200/70">
            premium digital
          </span>
        </div>
      )}
    </div>
  );
}
