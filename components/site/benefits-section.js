import { MonitorIcon, RocketIcon, BuildingIcon } from "@/components/site/icons";
import { benefits } from "@/components/site/site-data";
import { Container } from "@/components/ui/container";

const iconMap = {
  monitor: MonitorIcon,
  rocket: RocketIcon,
  building: BuildingIcon,
};

export function BenefitsSection() {
  return (
    <section className="section benefits" id="servicos">
      <Container>
        <div className="section-heading">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-text">
            Do projeto mais simples ao mais complexo, entregamos com qualidade
            e no prazo combinado.
          </p>
        </div>

        <div className="cards-grid">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];

            return (
              <article key={benefit.title} className="glass-panel benefit-card">
                <div className="benefit-icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3 className="card-title">{benefit.title}</h3>
                <p className="card-text">{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
