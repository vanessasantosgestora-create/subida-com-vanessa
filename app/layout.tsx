import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MetaPixel } from "@/components/MetaPixel";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const GA_ID = "G-1K9KJT5KB3";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Subida com Vanessa — Landing Pages Premium para Empresas Modernas",
    template: "%s · Subida com Vanessa",
  },
  description:
    "Criação de landing pages premium, cinematográficas e focadas em conversão. Para empresas que querem parecer gigantes. Atendimento direto com Vanessa em São Paulo.",
  keywords: [
    "landing page premium",
    "landing page moderna",
    "criação de landing page",
    "landing page profissional",
    "criação de sites premium",
    "páginas modernas para empresas",
    "Subida com Vanessa",
    "landing page São Paulo",
    "landing page futurista",
    "landing page de alta conversão",
  ],
  authors: [{ name: "Vanessa" }],
  creator: "Subida com Vanessa",
  publisher: "Subida com Vanessa",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Subida com Vanessa",
    title: "Landing Pages Premium para Empresas que Querem Parecer Gigantes",
    description:
      "Experiências digitais futuristas que aumentam autoridade, confiança e conversão. Premium · Cinematográfico · Mobile-first.",
    images: [
      {
        url: "/vanessa.jpg",
        width: 940,
        height: 1130,
        alt: "Subida com Vanessa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subida com Vanessa — Landing Pages Premium",
    description:
      "Landing pages cinematográficas e futuristas, focadas em conversão real.",
    images: ["/vanessa.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='14' r='3' fill='%23FBC740'/><path d='M6 36 L20 22 L26 30 L32 16 L38 30 L44 22 L58 36' stroke='%23A678FF' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>",
        type: "image/svg+xml",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#05030A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans">
        {children}
        <MetaPixel />
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}
