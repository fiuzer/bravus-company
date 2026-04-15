import { ArrowRightIcon } from "@/components/site/icons";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="section hero" id="top">
      <Container narrow>
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            <span>Automacao inteligente</span>
          </div>

          <h1 className="display-title gradient-text">
            Pare de perder clientes
            <br />
            no WhatsApp
          </h1>

          <p className="hero__lead">
            Automatize respostas, organize atendimentos e faca pre-agendamentos
            automaticamente com a Bravus Company.
          </p>

          <div className="button-row">
            <a className="button button-primary" href="#demo">
              Ver demonstracao
              <span className="icon-arrow" aria-hidden="true">
                <ArrowRightIcon />
              </span>
            </a>
            <a
              className="button button-secondary"
              href="https://wa.me/5511973315085?text=Gostaria%20de%20conversar%20com%20um%20especialista"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
