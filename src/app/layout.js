import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // Basic metadata
  title: "Alberto Blanco",
  description: "Adult male performer.",

  // Open Graph (OG) metadata for social media sharing
  openGraph: {
    title: "Alberto Blanco",
    description: "Adult male performer.",
    url: "https://xblanco.es/",
    siteName: "Alberto Blanco",
    images: [
      {
        url: "https://xblanco.es/twitter-card.webp",
        width: 1200,
        height: 675,
        alt: "Alberto Blanco",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Alberto Blanco",
    description: "Adult male performer.",
    images: ["https://xblanco.es//twitter-card.webp"],
    site: "@AlbertoBlancoX",
  },

  // Favicons and icons
  icons: {
    icon: "/favicon.ico",
  },

  // Robots metadata
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },

  // Schema.org structured data (JSON-LD)
  other: {
    'script[type="application/ld+json"]': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Alberto Blanco",
      url: "https://xblanco.es/",
    }),
  },

  // Additional meta tags (custom)
  other: {
    'meta[name="author"]': "Joel Taylor",
    'meta[name="keywords"]': "Alberto, Blanco, actor",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased pt-6 flex justify-center`}
      >
        <Providers>
          <div className="relative max-w-screen-md">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
