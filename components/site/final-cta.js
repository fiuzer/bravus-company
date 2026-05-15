import { WhatsappIcon } from "@/components/site/icons";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section className="section final-cta">
      <div className="final-cta__glow" aria-hidden="true" />
      <Container narrow>
        <div className="final-cta__content">
          <h2 className="cta-title">Seu negócio merece um site profissional</h2>
          <p className="cta-text">
            Entre em contato agora e receba uma proposta em até 24 horas. Sem
            compromisso.
          </p>
          <a
            className="button button-primary button-whatsapp"
            href="https://wa.me/5511999999999"
          >
            <span className="whatsapp-icon" aria-hidden="true">
              <WhatsappIcon />
            </span>
            Falar com a Bravus no WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
