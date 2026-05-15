import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { ArrowRightIcon } from "@/components/site/icons";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Portfólio | Bravus Company",
  description:
    "Confira os projetos desenvolvidos pela Bravus Company — landing pages e sites profissionais para negócios brasileiros.",
};

const projects = [
  {
    nicho: "Academia / Personal Trainer",
    name: "ForcaMax Personal Training",
    description:
      "Landing page energética com foco em conversão para personal trainer. Hero de impacto, seção de serviços, depoimentos de alunos, tabela de planos e botão WhatsApp flutuante.",
    tags: ["Landing Page", "Energia", "Conversão"],
    file: "/portfolio/academia.html",
    accent: "#f97316",
  },
  {
    nicho: "Barbearia / Salão Premium",
    name: "Barbearia Dom Pedro",
    description:
      "Landing page premium com estilo masculino e dourado. Tabela de serviços com preços, galeria simulada com gradientes, mapa de localização e horários de atendimento.",
    tags: ["Landing Page", "Premium", "Agendamento"],
    file: "/portfolio/barbearia.html",
    accent: "#c9a84c",
  },
  {
    nicho: "Clínica / Saúde",
    name: "Clínica Vita Saúde",
    description:
      "Site institucional limpo e confiável para clínica médica. Especialidades, equipe médica com CRM, processo em 3 passos e formulário de agendamento acessível.",
    tags: ["Site Institucional", "Saúde", "Confiança"],
    file: "/portfolio/clinica.html",
    accent: "#1e6fbf",
  },
];

export default function PortfolioPage() {
  return (
    <main className="page-shell">
      <div className="page-mesh" />
      <Header />

      {/* Hero da página de portfólio */}
      <section className="section portfolio-page-hero">
        <Container narrow>
          <div className="hero__content">
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-dot" aria-hidden="true" />
              <span>Projetos entregues</span>
            </div>
            <h1 className="display-title gradient-text">Portfólio</h1>
            <p className="hero__lead">
              Sites profissionais desenvolvidos pela Bravus Company para
              negócios brasileiros de diferentes nichos.
            </p>
          </div>
        </Container>
      </section>

      {/* Grid de projetos */}
      <section className="section portfolio-page-grid">
        <Container>
          <div className="portfolio-full-grid">
            {projects.map((project) => (
              <article
                key={project.name}
                className="glass-panel portfolio-full-card"
              >
                <div
                  className="portfolio-full-card__stripe"
                  style={{ background: project.accent }}
                  aria-hidden="true"
                />
                <div className="portfolio-full-card__body">
                  <div className="portfolio-full-card__meta">
                    <span className="portfolio-card__badge">{project.nicho}</span>
                    <div className="portfolio-full-card__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="portfolio-full-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="portfolio-full-card__title">{project.name}</h2>
                  <p className="portfolio-card__text">{project.description}</p>
                  <a
                    href={project.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary portfolio-full-card__btn"
                  >
                    Ver projeto ao vivo
                    <span className="icon-arrow" aria-hidden="true">
                      <ArrowRightIcon />
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="section final-cta">
        <div className="final-cta__glow" aria-hidden="true" />
        <Container narrow>
          <div className="final-cta__content">
            <h2 className="cta-title">Quer um site assim para o seu negócio?</h2>
            <p className="cta-text">
              Entre em contato e receba uma proposta personalizada em até 24
              horas.
            </p>
            <a
              className="button button-primary button-whatsapp"
              href="https://wa.me/5511999999999"
            >
              Falar com a Bravus no WhatsApp
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
