import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Site para Barbearia",
  description: "Criamos sites e landing pages para barbearias com galeria de fotos, tabela de serviços e preços, localização e botão de agendamento via WhatsApp.",
  alternates: { canonical: "/servicos/site-para-barbearia" },
};

export default function SiteParaBarbeariaPage() {
  return (
    <main className="page-shell">
      <div className="page-mesh" />
      <Header />

      {/* Hero */}
      <section className="section servico-hero">
        <Container narrow>
          <div style={{ textAlign: "center" }}>
            <div className="servico-hero__eyebrow">Landing Page · Barbearia</div>
            <h1 className="servico-hero__title gradient-text">
              Site para barbearia — galeria,<br />preços e agendamento via WhatsApp
            </h1>
            <p className="servico-hero__lead">
              Desenvolvemos sites e landing pages para barbearias que mostram seus trabalhos, apresentam o cardápio de serviços com preços e facilitam o agendamento direto pelo WhatsApp.
            </p>
            <a className="button button-primary" href="/#contato">
              Solicitar site para minha barbearia
            </a>
          </div>
        </Container>
      </section>

      {/* Benefícios */}
      <section className="section servico-benefits">
        <Container>
          <div className="servico-benefits__grid">
            <article className="servico-benefit-card">
              <div className="servico-benefit-card__icon">✂️</div>
              <h2 className="servico-benefit-card__title">Galeria de cortes e trabalhos</h2>
              <p className="servico-benefit-card__text">Seção de galeria para mostrar os seus melhores trabalhos e convencer o cliente antes mesmo de ele entrar na barbearia.</p>
            </article>
            <article className="servico-benefit-card">
              <div className="servico-benefit-card__icon">💈</div>
              <h2 className="servico-benefit-card__title">Cardápio de serviços com preços</h2>
              <p className="servico-benefit-card__text">Tabela clara com serviços, descrições e valores — sem surpresa para o cliente na hora do pagamento.</p>
            </article>
            <article className="servico-benefit-card">
              <div className="servico-benefit-card__icon">📍</div>
              <h2 className="servico-benefit-card__title">Localização e agendamento</h2>
              <p className="servico-benefit-card__text">Mapa do Google, horários de funcionamento e botão de agendamento direto pelo WhatsApp para facilitar a vida do cliente.</p>
            </article>
          </div>
        </Container>
      </section>

      {/* Prova */}
      <section className="section servico-proof">
        <Container>
          <article className="glass-panel servico-proof__card">
            <img
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=560&h=360&q=80"
              alt="Site para barbearia — Barbearia Dom Pedro"
              className="servico-proof__image"
              loading="lazy"
            />
            <div className="servico-proof__body">
              <p className="servico-proof__label">Projeto entregue</p>
              <h2 className="servico-proof__title">Barbearia Dom Pedro</h2>
              <p className="servico-proof__text">Landing page premium com estilo masculino dourado, galeria de trabalhos com fotos reais, tabela de serviços e localização integrada.</p>
              <a href="/portfolio/barbearia.html" target="_blank" rel="noopener noreferrer" className="button button-secondary">
                Ver projeto ao vivo
              </a>
            </div>
          </article>
        </Container>
      </section>

      {/* CTA */}
      <section className="section servico-cta">
        <Container narrow>
          <h2 className="servico-cta__title">Sua barbearia no digital do jeito certo</h2>
          <p className="servico-cta__text">Preencha o formulário e receba uma proposta personalizada em até 24 horas.</p>
          <a className="button button-primary" href="/#contato">Solicitar orçamento</a>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
