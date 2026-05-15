import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.bravuscompany.com"),
  title: {
    default: "Bravus Company | Landing Pages e MVPs sob demanda",
    template: "%s | Bravus Company",
  },
  description:
    "Transformamos sua ideia em um site profissional em até 7 dias. Landing pages, MVPs e sites institucionais para negócios brasileiros.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/brand/bravus-logo-original.jpg",
    shortcut: "/brand/bravus-logo-original.jpg",
    apple: "/brand/bravus-logo-original.jpg",
  },
  openGraph: {
    title: "Bravus Company | Landing Pages e MVPs sob demanda",
    description:
      "Transformamos sua ideia em um site profissional em até 7 dias. Landing pages, MVPs e sites institucionais para negócios brasileiros.",
    images: [
      {
        url: "/brand/bravus-logo-original.jpg",
        width: 1200,
        height: 1200,
        alt: "Logo original da Bravus Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bravus Company | Landing Pages e MVPs sob demanda",
    description:
      "Transformamos sua ideia em um site profissional em até 7 dias. Landing pages, MVPs e sites institucionais para negócios brasileiros.",
    images: ["/brand/bravus-logo-original.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bravus Company",
              url: "https://www.bravuscompany.com",
              logo: "https://www.bravuscompany.com/brand/bravus-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-97331-5085",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              sameAs: ["https://www.instagram.com/bravus.comp/"],
            }),
          }}
        />
      </body>
    </html>
  );
}
