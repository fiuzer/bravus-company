import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.bravuscompany.com"),
  title: "Bravus Company | Automacao de WhatsApp",
  description:
    "Automatize respostas, organize atendimentos e faca pre-agendamentos automaticamente com a Bravus Company.",
  icons: {
    icon: "/brand/bravus-logo-original.jpg",
    shortcut: "/brand/bravus-logo-original.jpg",
    apple: "/brand/bravus-logo-original.jpg",
  },
  openGraph: {
    title: "Bravus Company | Automacao de WhatsApp",
    description:
      "Automatize respostas, organize atendimentos e faca pre-agendamentos automaticamente com a Bravus Company.",
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
    title: "Bravus Company | Automacao de WhatsApp",
    description:
      "Automatize respostas, organize atendimentos e faca pre-agendamentos automaticamente com a Bravus Company.",
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
