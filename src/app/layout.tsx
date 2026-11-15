import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { ReadingProgressBar } from "@/components/layout/ReadingProgressBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

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
  metadataBase: new URL("https://projekta-tech.com"),
  openGraph: {
    title: "PROJEKTA | Innovation • Technology • Projects",
    description:
      "Accompagnement d'excellence dans le développement web et mobile, la création graphique, la communication digitale et la formation informatique.",
    url: "https://projekta-tech.com",
    siteName: "PROJEKTA",
    images: [
      {
        url: "/logo-full-whitebg.png",
        width: 1254,
        height: 464,
        alt: "PROJEKTA - Innovation • Technology • Projects",
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
    images: ["/logo-full-whitebg.png"],
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
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${montserrat.variable} ${montserrat.className} min-h-screen flex flex-col bg-white text-ink font-sans antialiased selection:bg-primary-100 selection:text-ink`}>
        <ReadingProgressBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
