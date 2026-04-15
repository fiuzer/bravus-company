import "./globals.css";

export const metadata = {
  title: "Bravus Company | Automacao de WhatsApp",
  description:
    "Automatize respostas, organize atendimentos e faca pre-agendamentos automaticamente com a Bravus Company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
