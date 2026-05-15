import { ArrowRightIcon } from "@/components/site/icons";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="section hero" id="top">
      <Container narrow>
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            <span>Agência de desenvolvimento web</span>
          </div>

          <h1 className="display-title gradient-text">
            Transformamos sua ideia
            <br />
            em um site profissional
            <br />
            em até 7 dias
          </h1>

          <p className="hero__lead">
            Landing pages, MVPs e sites institucionais para empreendedores e
            empresas que precisam de presença online profissional — sem
            complicação e no prazo.
          </p>

          <div className="button-row">
            <a
              className="button button-primary"
              href="#contato"
            >
              Quero meu site agora
              <span className="icon-arrow" aria-hidden="true">
                <ArrowRightIcon />
              </span>
            </a>
            <a className="button button-secondary" href="#portfolio">
              Ver portfólio
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
