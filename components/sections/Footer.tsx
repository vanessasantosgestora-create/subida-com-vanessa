import { Logo } from "@/components/Logo";
import { buildWhatsappLink, WHATSAPP_DISPLAY } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-deep/60 py-12">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-white/50">
              Landing pages premium para empresas que querem ser percebidas como gigantes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-16">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.28em] text-royal-200/80">
                Navegação
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-white/55">
                <li><a href="#beneficios" className="hover:text-white">Benefícios</a></li>
                <li><a href="#processo" className="hover:text-white">Processo</a></li>
                <li><a href="#promocao" className="hover:text-white">Promoção</a></li>
                <li><a href="#vanessa" className="hover:text-white">Quem sou eu</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.28em] text-royal-200/80">
                Contato
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-white/55">
                <li>
                  <a
                    href={buildWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp {WHATSAPP_DISPLAY}
                  </a>
                </li>
                <li>São Paulo · SP</li>
                <li>Online em todo Brasil</li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[10px] uppercase tracking-[0.28em] text-royal-200/80">
                CTA
              </h4>
              <a
                href={buildWhatsappLink(
                  "Olá Vanessa! Quero iniciar meu projeto premium.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-royal-500 to-royal-400 px-5 py-2 text-sm font-medium text-white shadow-glow hover:shadow-[0_0_60px_-10px_rgba(166,120,255,0.9)]"
              >
                Iniciar projeto →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} Subida com Vanessa. Todos os direitos reservados.</p>
          <p>Feito com direção criativa em São Paulo.</p>
        </div>
      </div>
    </footer>
  );
}
