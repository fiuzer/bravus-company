import { ArrowRightIcon } from "@/components/site/icons";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="section hero" id="top">
      <Container narrow>
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            <span>Análise de dados para tráfego pago</span>
          </div>

          <h1 className="display-title gradient-text">
            Você foca na estratégia
            <br />
            A Bravus cuida dos dados
          </h1>

          <p className="hero__lead">
            Limpeza, consolidação e relatórios automáticos de Meta Ads, Google
            Ads e Analytics para agências e gestores que não querem mais perder
            horas no Excel.
          </p>

          <div className="button-row">
            <a
              className="button button-primary"
              href="https://wa.me/5511973315085?text=Oi%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20an%C3%A1lise%20de%20dados%20da%20Bravus"
            >
              Quero meus dados organizados
              <span className="icon-arrow" aria-hidden="true">
                <ArrowRightIcon />
              </span>
            </a>
            <a className="button button-secondary" href="#demo">
              Ver antes e depois
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
