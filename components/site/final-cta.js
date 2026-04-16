import { WhatsappIcon } from "@/components/site/icons";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section className="section final-cta">
      <div className="final-cta__glow" aria-hidden="true" />
      <Container narrow>
        <div className="final-cta__content">
          <h2 className="cta-title">Quer isso funcionando no seu WhatsApp?</h2>
          <p className="cta-text">
            Dê o primeiro passo rumo a um atendimento que nunca dorme e nunca falha.
          </p>
          <a
            className="button button-primary button-whatsapp"
            href="https://wa.me/5511973315085?text=Gostaria%20de%20conversar%20com%20um%20especialista"
          >
            <span className="whatsapp-icon" aria-hidden="true">
              <WhatsappIcon />
            </span>
            Falar no WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
