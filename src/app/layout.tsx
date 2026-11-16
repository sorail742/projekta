import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { ReadingProgressBar } from "@/components/layout/ReadingProgressBar";
import { PageTransition } from "@/components/layout/PageTransition";
import { COMPANY_INFO } from "@/data/company";
import { SITE_URL } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4FA764",
};

export const metadata: Metadata = {
  title: {
    default: "PROJEKTA | Innovation • Technology • Projects",
    template: "%s | PROJEKTA",
  },
  description:
    "PROJEKTA vous accompagne dans le développement web et mobile, la création graphique, la communication digitale, les portfolios et la formation informatique en Guinée et à l'international.",
  keywords: [
    "PROJEKTA",
    "Développement web Guinée",
    "Création de site web Conakry",
    "Application mobile Guinée",
    "Création de logo Conakry",
    "Identité visuelle",
    "Agence digitale Guinée",
    "Formation informatique Conakry",
    "Portfolio professionnel",
    "Transformation numérique Afrique",
  ],
  authors: [{ name: "PROJEKTA" }],
  creator: "PROJEKTA",
  publisher: "PROJEKTA",
  icons: {
    icon: [
      { url: "/logo-icon.webp", type: "image/webp" },
      { url: "/logo-icon.png", type: "image/png" },
    ],
    apple: "/logo-icon.png",
    shortcut: "/favicon.ico",
  },
  formatDetection: {
    email: true,
    telephone: true,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "PROJEKTA | Innovation • Technology • Projects",
    description:
      "Accompagnement d'excellence dans le développement web et mobile, la création graphique, la communication digitale et la formation informatique.",
    url: SITE_URL,
    siteName: "PROJEKTA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PROJEKTA | Innovation • Technology • Projects",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROJEKTA | Innovation • Technology • Projects",
    description:
      "Solutions numériques, développement web/mobile, graphisme et accompagnement en Guinée et à l'international.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: "PROJEKTA",
        url: SITE_URL,
        logo: `${SITE_URL}/logo-full.webp`,
        image: `${SITE_URL}/opengraph-image`,
        description: COMPANY_INFO.description,
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: COMPANY_INFO.address.city,
          addressCountry: COMPANY_INFO.address.country,
        },
        sameAs: [
          COMPANY_INFO.socialLinks.facebook,
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "PROJEKTA",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "fr-FR",
      },
    ],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${montserrat.className} min-h-screen flex flex-col bg-white text-ink font-sans antialiased selection:bg-primary-100 selection:text-ink`}>
        <ReadingProgressBar />
        <Navbar />
        <main className="flex-1 flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
