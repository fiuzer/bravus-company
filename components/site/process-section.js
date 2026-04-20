import { LayersIcon, SettingsIcon, UsersIcon } from "@/components/site/icons";
import { steps } from "@/components/site/site-data";
import { Container } from "@/components/ui/container";

const iconMap = {
  layers: LayersIcon,
  settings: SettingsIcon,
  users: UsersIcon,
};

export function ProcessSection() {
  return (
    <section className="section process" id="como-funciona">
      <Container>
        <div className="section-heading">
          <h2 className="section-title">Como funciona na prática</h2>
          <p className="section-text">
            Você envia os arquivos das plataformas e recebe uma base pronta para
            análise com os números organizados em até 24 horas.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => {
            const Icon = iconMap[step.icon];

            return (
              <article key={step.number} className="step-card">
                <span className="step-number" aria-hidden="true">
                  {step.number}
                </span>
                <div className="step-icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
