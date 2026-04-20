import { WhatsappIcon } from "@/components/site/icons";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section className="section final-cta">
      <div className="final-cta__glow" aria-hidden="true" />
      <Container narrow>
        <div className="final-cta__content">
          <h2 className="cta-title">Seu relatório não precisa nascer no braço</h2>
          <p className="cta-text">
            Pare de consolidar planilhas na mão e receba seus dados organizados
            todo mês em até 24 horas.
          </p>
          <a
            className="button button-primary button-whatsapp"
            href="https://wa.me/5511973315085?text=Oi%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20an%C3%A1lise%20de%20dados%20da%20Bravus"
          >
            <span className="whatsapp-icon" aria-hidden="true">
              <WhatsappIcon />
            </span>
            Quero meus dados organizados
          </a>
        </div>
      </Container>
    </section>
  );
}
