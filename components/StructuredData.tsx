import { SITE_URL, SITE_NAME, SOCIAL_LINKS } from "@/lib/site";
import { WHATSAPP_NUMBER } from "@/lib/utils";
import { faqs } from "@/lib/faqs";

/**
 * Dados estruturados schema.org (JSON-LD) renderizados no servidor.
 * Não adiciona JS de cliente nem disputa a thread principal — zero impacto no LCP.
 * Habilita rich results no Google (negócio local, FAQ, identidade da marca).
 */
export function StructuredData() {
  const telephone = `+${WHATSAPP_NUMBER}`;
  const sameAs = SOCIAL_LINKS.length ? { sameAs: SOCIAL_LINKS } : {};

  const graph = [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      description:
        "Criação de landing pages premium, cinematográficas e focadas em conversão para empresas modernas. Atendimento direto com Vanessa em São Paulo, online em todo o Brasil.",
      url: SITE_URL,
      image: `${SITE_URL}/vanessa.jpg`,
      telephone,
      priceRange: "$$",
      areaServed: { "@type": "Country", name: "Brasil" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      founder: { "@id": `${SITE_URL}/#vanessa` },
      knowsAbout: [
        "Landing pages premium",
        "Criação de landing pages",
        "Design de conversão",
        "Desenvolvimento web Next.js",
        "Otimização de performance e SEO",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone,
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
      ...sameAs,
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#vanessa`,
      name: "Vanessa",
      jobTitle: "Designer de Landing Pages e Fundadora",
      worksFor: { "@id": `${SITE_URL}/#business` },
      url: SITE_URL,
      ...sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Subida com Vanessa — Landing Pages Premium para Empresas Modernas",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
      primaryImageOfPage: `${SITE_URL}/vanessa.jpg`,
      inLanguage: "pt-BR",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
