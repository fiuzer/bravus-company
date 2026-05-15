import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Landing Page São Paulo",
  description: "Criamos landing pages profissionais para negócios em São Paulo em até 7 dias. Design que converte, integração com WhatsApp e suporte incluso.",
  alternates: { canonical: "/servicos/landing-page-sao-paulo" },
};

export default function LandingPageSaoPauloPage() {
  return (
    <main className="page-shell">
      <div className="page-mesh" />
      <Header />

      {/* Hero */}
      <section className="section servico-hero">
        <Container narrow>
          <div style={{ textAlign: "center" }}>
            <div className="servico-hero__eyebrow">Landing Page · São Paulo</div>
            <h1 className="servico-hero__title gradient-text">
              Landing page profissional<br />em São Paulo — entregue em 7 dias
            </h1>
            <p className="servico-hero__lead">
              Desenvolvemos landing pages de alta conversão para empreendedores e empresas em São Paulo. Do briefing à entrega em até 7 dias, com design que atrai clientes e botão WhatsApp integrado.
            </p>
            <a className="button button-primary" href="/#contato">
              Solicitar minha landing page
            </a>
          </div>
        </Container>
      </section>

      {/* Benefícios */}
      <section className="section servico-benefits">
        <Container>
          <div className="servico-benefits__grid">
            <article className="servico-benefit-card">
              <div className="servico-benefit-card__icon">⚡</div>
              <h2 className="servico-benefit-card__title">Pronto em 7 dias</h2>
              <p className="servico-benefit-card__text">Do briefing à landing page no ar em até 7 dias corridos. Sem enrolação, sem surpresa no prazo.</p>
            </article>
            <article className="servico-benefit-card">
              <div className="servico-benefit-card__icon">📈</div>
              <h2 className="servico-benefit-card__title">Design focado em conversão</h2>
              <p className="servico-benefit-card__text">Hierarquia visual clara, chamadas para ação estratégicas e prova social para transformar visitantes em clientes.</p>
            </article>
            <article className="servico-benefit-card">
              <div className="servico-benefit-card__icon">💬</div>
              <h2 className="servico-benefit-card__title">WhatsApp e Analytics integrados</h2>
              <p className="servico-benefit-card__text">Botão flutuante de WhatsApp e Google Analytics configurados para você acompanhar os resultados em tempo real.</p>
            </article>
          </div>
        </Container>
      </section>

      {/* Prova */}
      <section className="section servico-proof">
        <Container>
          <article className="glass-panel servico-proof__card">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=560&h=360&q=80"
              alt="Landing page de academia — ForcaMax Personal Training"
              className="servico-proof__image"
              loading="lazy"
            />
            <div className="servico-proof__body">
              <p className="servico-proof__label">Projeto entregue</p>
              <h2 className="servico-proof__title">ForcaMax Personal Training</h2>
              <p className="servico-proof__text">Landing page energética com hero de impacto, seção de planos, depoimentos de alunos e botão WhatsApp flutuante. Entregue em 5 dias.</p>
              <a href="/portfolio/academia.html" target="_blank" rel="noopener noreferrer" className="button button-secondary">
                Ver projeto ao vivo
              </a>
            </div>
          </article>
        </Container>
      </section>

      {/* CTA */}
      <section className="section servico-cta">
        <Container narrow>
          <h2 className="servico-cta__title">Pronto para ter sua landing page?</h2>
          <p className="servico-cta__text">Preencha o formulário e receba uma proposta personalizada em até 24 horas.</p>
          <a className="button button-primary" href="/#contato">Quero minha landing page</a>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
