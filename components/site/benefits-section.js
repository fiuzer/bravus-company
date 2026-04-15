import { BotIcon, CalendarIcon, DatabaseIcon } from "@/components/site/icons";
import { benefits } from "@/components/site/site-data";
import { Container } from "@/components/ui/container";

const iconMap = {
  bot: BotIcon,
  calendar: CalendarIcon,
  database: DatabaseIcon,
};

export function BenefitsSection() {
  return (
    <section className="section benefits" id="beneficios">
      <Container>
        <div className="cards-grid">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];

            return (
              <article key={benefit.title} className="glass-panel benefit-card">
                <div className="benefit-icon" aria-hidden="true">
                  <Icon />
                </div>
                <h2 className="card-title">{benefit.title}</h2>
                <p className="card-text">{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
