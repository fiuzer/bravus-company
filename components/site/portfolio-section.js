import Link from "next/link";

import { ArrowRightIcon } from "@/components/site/icons";
import { Container } from "@/components/ui/container";

const projects = [
  {
    nicho: "Academia / Personal",
    name: "ForcaMax Personal Training",
    description:
      "Landing page energética com foco em conversão, planos, depoimentos e WhatsApp.",
    file: "/portfolio/academia.html",
    accent: "#f97316",
  },
  {
    nicho: "Barbearia / Salão",
    name: "Barbearia Dom Pedro",
    description:
      "Landing page premium com estilo masculino dourado, galeria e agendamento.",
    file: "/portfolio/barbearia.html",
    accent: "#c9a84c",
  },
  {
    nicho: "Clínica / Saúde",
    name: "Clínica Vita Saúde",
    description:
      "Site institucional limpo e confiável com equipe médica, especialidades e agendamento.",
    file: "/portfolio/clinica.html",
    accent: "#1e6fbf",
  },
];

export function PortfolioSection() {
  return (
    <section className="section portfolio-section" id="portfolio">
      <Container>
        <div className="section-heading">
          <h2 className="section-title">Nosso portfólio</h2>
          <p className="section-text">
            Confira alguns projetos que já entregamos para clientes reais.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article key={project.name} className="glass-panel portfolio-card">
              <div
                className="portfolio-card__stripe"
                style={{ background: project.accent }}
                aria-hidden="true"
              />
              <div className="portfolio-card__body">
                <span className="portfolio-card__badge">{project.nicho}</span>
                <h3 className="portfolio-card__title">{project.name}</h3>
                <p className="portfolio-card__text">{project.description}</p>
              </div>
              <div className="portfolio-card__cta">
                <a
                  href={project.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary portfolio-card__btn"
                >
                  Ver projeto
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-section__more">
          <Link href="/portfolio" className="portfolio-section__more-link">
            Ver portfólio completo
            <span className="icon-arrow" aria-hidden="true">
              <ArrowRightIcon />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
