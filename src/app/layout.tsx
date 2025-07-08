import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Metafísica Oriental Brasil | Feng Shui e Astrologia Chinesa | Luiz Carlos Akira",
  description:
    "Consultoria e cursos de Feng Shui Tradicional e Astrologia Chinesa com Luiz Carlos Akira. Transforme sua vida com técnicas milenares orientais. Consultorias presenciais e online.",
  keywords:
    "feng shui, astrologia chinesa, consultoria feng shui, curso feng shui, luiz carlos akira, metafisica oriental, bazi, quatro pilares destino, numerologia chinesa, consultor feng shui brasil",
  authors: [{ name: "Luiz Carlos Akira" }],
  creator: "Luiz Carlos Akira",
  publisher: "Metafísica Oriental Brasil",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://metafisicaorientalbrasil.com.br"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://metafisicaorientalbrasil.com.br",
    title: "Metafísica Oriental Brasil | Feng Shui e Astrologia Chinesa",
    description:
      "Consultoria e cursos de Feng Shui Tradicional e Astrologia Chinesa com Luiz Carlos Akira. Transforme sua vida com técnicas milenares orientais.",
    siteName: "Metafísica Oriental Brasil",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metafísica Oriental Brasil - Feng Shui e Astrologia Chinesa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metafísica Oriental Brasil | Feng Shui e Astrologia Chinesa",
    description:
      "Consultoria e cursos de Feng Shui Tradicional e Astrologia Chinesa com Luiz Carlos Akira.",
    images: ["/og-image.jpg"],
  },
  other: {
    "instagram:site": "@metafisicaorientalbrasil",
    "instagram:creator": "@metafisicaorientalbrasil",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "Consultoria e Educação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Metafísica Oriental Brasil",
              description:
                "Consultoria e cursos de Feng Shui Tradicional e Astrologia Chinesa",
              url: "https://metafisicaorientalbrasil.com.br",
              telephone: "+55-41-99116-0348",
              email: "metafisicaorientalbra@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressLocality: "Brasil",
              },
              founder: {
                "@type": "Person",
                name: "Luiz Carlos Akira",
                jobTitle:
                  "Professor e Consultor de Feng Shui e Astrologia Chinesa",
              },
              sameAs: ["https://www.instagram.com/metafisicaorientalbrasil/"],
              serviceType: [
                "Consultoria Feng Shui",
                "Astrologia Chinesa",
                "Cursos Online",
                "Cursos Presenciais",
              ],
              areaServed: "Brasil",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de Feng Shui e Astrologia Chinesa",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Consultoria Feng Shui Residencial",
                      description: "Harmonização de ambientes residenciais",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Consultoria Feng Shui Empresarial",
                      description: "Harmonização de ambientes corporativos",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mapa Astrológico Chinês",
                      description: "Análise dos Quatro Pilares do Destino",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
