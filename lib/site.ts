// Dados centrais do site, usados em metadata, robots, sitemap e dados estruturados (JSON-LD).
// Fonte única de verdade para evitar divergência entre os arquivos.

export const SITE_URL = "https://premium.subidacomvanessa.com.br";
export const SITE_NAME = "Subida com Vanessa";

// Redes sociais — entram no campo "sameAs" do schema.org (reforça identidade/E-E-A-T).
// Preencher com a URL completa quando disponível. Ex.: "https://www.instagram.com/seu_usuario"
export const INSTAGRAM_URL = "https://www.instagram.com/subidacomvanessa7";

// Apenas links preenchidos entram no schema.
export const SOCIAL_LINKS: string[] = [INSTAGRAM_URL].filter(Boolean);
