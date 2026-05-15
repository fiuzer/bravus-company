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
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&h=180&q=80",
    imageAlt: "Academia com equipamentos de musculação",
  },
  {
    nicho: "Barbearia / Salão",
    name: "Barbearia Dom Pedro",
    description:
      "Landing page premium com estilo masculino dourado, galeria e agendamento.",
    file: "/portfolio/barbearia.html",
    accent: "#c9a84c",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&h=180&q=80",
    imageAlt: "Interior de barbearia premium",
  },
  {
    nicho: "Clínica / Saúde",
    name: "Clínica Vita Saúde",
    description:
      "Site institucional limpo e confiável com equipe médica, especialidades e agendamento.",
    file: "/portfolio/clinica.html",
    accent: "#1e6fbf",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&h=180&q=80",
    imageAlt: "Recepção de clínica médica moderna",
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
              <div className="portfolio-card__image">
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
              </div>
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
