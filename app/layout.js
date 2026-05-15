import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.bravuscompany.com"),
  title: "Bravus Company | Landing Pages e MVPs sob demanda",
  description:
    "Transformamos sua ideia em um site profissional em até 7 dias. Landing pages, MVPs e sites institucionais para negócios brasileiros.",
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
      <body>{children}</body>
    </html>
  );
}
