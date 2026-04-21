import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { instrumentSans, dmSerifDisplay } from "./fonts";
import { clinic } from "@/lib/clinic";
import "./globals.css";

export function generateMetadata(): Metadata {
  const { seo } = clinic;
  return {
    metadataBase: new URL(seo.baseUrl),
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url: "/",
      siteName: seo.siteName,
      images: [
        {
          url: seo.ogImage,
          width: 1024,
          height: 683,
          alt: seo.ogAlt,
        },
      ],
      locale: seo.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle,
      description: seo.twitterDescription,
      images: [seo.ogImage],
    },
  };
}

const themeVars = {
  "--color-brand-primary": clinic.theme.primary,
  "--color-brand-accent": clinic.theme.accent,
  "--color-brand-label": clinic.theme.label,
  "--color-brand-bg-soft": clinic.theme.bgSoft,
  "--color-brand-footer-bg": clinic.theme.footerBg,
  "--color-brand-footer-text": clinic.theme.footerText,
  "--color-brand-text": clinic.theme.text,
} as CSSProperties;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang={clinic.seo.htmlLang}
      translate="no"
      suppressHydrationWarning
      style={themeVars}
      className={`h-full scroll-smooth antialiased ${instrumentSans.variable} ${dmSerifDisplay.variable} font-sans`}
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
