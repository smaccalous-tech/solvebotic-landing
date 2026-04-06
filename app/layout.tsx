import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolveBotic — AI Customer Support for Every Ecommerce Platform",
  description: "SolveBotic uses AI to instantly handle post-purchase support across Shopify, WooCommerce, ClickBank, Digistore24, Konnektive, BuyGoods, and CartPanda. Flat pricing. No per-ticket fees. One line of code.",
  keywords: "AI customer support, ecommerce support automation, Shopify customer service AI, WooCommerce support bot, ClickBank support, post-purchase support, order lookup automation, AI chatbot ecommerce",
  authors: [{ name: "SolveBotic" }],
  creator: "SolveBotic",
  publisher: "SolveBotic",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://solvebotic.com",
    title: "SolveBotic — AI Customer Support for Every Ecommerce Platform",
    description: "Handle every post-purchase support request automatically. AI-powered, multi-platform, flat pricing.",
    siteName: "SolveBotic",
    images: [{ url: "https://solvebotic.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolveBotic — AI Customer Support for Every Ecommerce Platform",
    description: "Handle every post-purchase support request automatically. AI-powered, multi-platform, flat pricing.",
    images: ["https://solvebotic.com/og-image.png"],
  },
  alternates: {
    canonical: "https://solvebotic.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SolveBotic",
              "url": "https://solvebotic.com",
              "description": "AI-powered customer support automation for ecommerce brands across all major platforms.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": [
                { "@type": "Offer", "name": "Starter", "price": "49", "priceCurrency": "USD", "billingIncrement": "P1M" },
                { "@type": "Offer", "name": "Pro", "price": "99", "priceCurrency": "USD", "billingIncrement": "P1M" },
              ],
              "provider": {
                "@type": "Organization",
                "name": "SolveBotic",
                "url": "https://solvebotic.com",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}