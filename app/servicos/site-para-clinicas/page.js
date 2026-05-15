import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Site para Clínicas Médicas",
  description: "Desenvolvemos sites institucionais para clínicas médicas e consultórios. Design confiável, página de especialidades, equipe e agendamento online.",
  alternates: { canonical: "/servicos/site-para-clinicas" },
};

export default function SiteParaClinicasPage() {
  return (
    <main className="page-shell">
      <div className="page-mesh" />
      <Header />

      {/* Hero */}
      <section className="section servico-hero">
        <Container narrow>
          <div style={{ textAlign: "center" }}>
            <div className="servico-hero__eyebrow">Site Institucional · Clínicas</div>
            <h1 className="servico-hero__title gradient-text">
              Site para clínica médica<br />que transmite confiança e atrai pacientes
            </h1>
            <p className="servico-hero__lead">
              Desenvolvemos sites institucionais para clínicas e consultórios que passam credibilidade, apresentam a equipe médica e facilitam o agendamento de consultas.
            </p>
            <a className="button button-primary" href="/#contato">
              Solicitar site para minha clínica
            </a>
          </div>
        </Container>
      </section>

      {/* Benefícios */}
      <section className="section servico-benefits">
        <Container>
          <div className="servico-benefits__grid">
            <article className="servico-benefit-card">
              <div className="servico-benefit-card__icon">🩺</div>
              <h2 className="servico-benefit-card__title">Especialidades e equipe médica</h2>
              <p className="servico-benefit-card__text">Página dedicada para apresentar especialidades, currículo e CRM de cada médico — transmitindo credibilidade desde o primeiro acesso.</p>
            </article>
            <article className="servico-benefit-card">
              <div className="servico-benefit-card__icon">📅</div>
              <h2 className="servico-benefit-card__title">Agendamento facilitado</h2>
              <p className="servico-benefit-card__text">Formulário de agendamento e botão WhatsApp para que o paciente entre em contato com o menor atrito possível.</p>
            </article>
            <article className="servico-benefit-card">
              <div className="servico-benefit-card__icon">🏥</div>
              <h2 className="servico-benefit-card__title">Design limpo e confiável</h2>
              <p className="servico-benefit-card__text">Paleta neutra, tipografia clara e layout que transmite higiene, organização e profissionalismo — o que o paciente precisa sentir.</p>
            </article>
          </div>
        </Container>
      </section>

      {/* Prova */}
      <section className="section servico-proof">
        <Container>
          <article className="glass-panel servico-proof__card">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=560&h=360&q=80"
              alt="Site para clínica médica — Clínica Vita Saúde"
              className="servico-proof__image"
              loading="lazy"
            />
            <div className="servico-proof__body">
              <p className="servico-proof__label">Projeto entregue</p>
              <h2 className="servico-proof__title">Clínica Vita Saúde</h2>
              <p className="servico-proof__text">Site institucional com especialidades, equipe médica com CRM, processo de agendamento em 3 passos e formulário acessível.</p>
              <a href="/portfolio/clinica.html" target="_blank" rel="noopener noreferrer" className="button button-secondary">
                Ver projeto ao vivo
              </a>
            </div>
          </article>
        </Container>
      </section>

      {/* CTA */}
      <section className="section servico-cta">
        <Container narrow>
          <h2 className="servico-cta__title">Sua clínica merece um site à altura</h2>
          <p className="servico-cta__text">Preencha o formulário e receba uma proposta personalizada em até 24 horas.</p>
          <a className="button button-primary" href="/#contato">Solicitar orçamento</a>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
