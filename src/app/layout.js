import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // Basic metadata
  title: "Alberto Blanco",
  description: "Lorem ipsum dolor sit amet.", // TODO: <=160 CHAR

  // Open Graph (OG) metadata for social media sharing
  openGraph: {
    title: "Alberto Blanco",
    description: "Lorem ipsum dolor sit amet.", // TODO: <=120 CHAR
    url: "https://albertoblanco.vercel.app/", // TODO: change domain
    siteName: "Alberto Blanco",
    images: [
      {
        url: "https://albertoblanco.vercel.app/twitter-card.webp",
        width: 1200,
        height: 675,
        alt: "Alberto Blanco",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image", // or 'summary'
    title: "Alberto Blanco",
    description: "Lorem ipsum dolor sit amet.", // TODO: <=100 chars
    images: ["https://albertoblanco.vercel.app//twitter-card.webp"],
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
      url: "https://albertoblanco.vercel.app/",
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
    <html lang="es">
      <body
        className={`${inter.className} antialiased pt-6 flex justify-center`}
      >
        <div className="max-w-screen-md">{children}</div>
      </body>
    </html>
  );
}
