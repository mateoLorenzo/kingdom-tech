import type { Metadata } from "next";
import { instrumentSans, dmSerifDisplay } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dental.kingdom-tech.co"),
  title: "Dental — Expertos en Odontología | Palermo Hollywood",
  description:
    "Clínica odontológica en Palermo Hollywood. Atención cercana y tecnología de última generación para cuidar cada detalle de tu sonrisa.",
  openGraph: {
    title: "Dental — Expertos en Odontología",
    description:
      "Clínica odontológica en Palermo Hollywood. Atención cercana y tecnología de última generación para cuidar cada detalle de tu sonrisa.",
    url: "/",
    siteName: "Dental",
    images: [
      {
        url: "/img/hero-5.jpg",
        width: 1024,
        height: 683,
        alt: "Dental — Consultorio odontológico en Palermo Hollywood",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental — Expertos en Odontología",
    description:
      "Clínica odontológica en Palermo Hollywood. Atención cercana y tecnología de última generación.",
    images: ["/img/hero-5.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      translate="no"
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${dmSerifDisplay.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className={`${instrumentSans.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
