import { Container } from "@/components/ui/container";

export function DemoSection() {
  return (
    <section className="section demo-section" id="demo">
      <Container>
        <div className="glass-panel demo-frame">
          <div className="demo-frame__layout">
            <div className="demo-frame__copy">
              <span className="demo-kicker">Demonstracao real</span>
              <h2 className="section-title demo-title">Veja a automacao em acao no celular</h2>
              <p className="section-text demo-text">
                O fluxo foi ajustado para exibir um video vertical sem desperdiçar espaco.
                Assim a secao fica mais fiel ao conteudo real e mais forte para conversao.
              </p>
            </div>

            <div className="demo-phone">
              <div className="demo-phone__bezel">
                <iframe
                  className="demo-phone__video"
                  src="https://www.youtube.com/embed/Edgev_iFO7M?autoplay=1&mute=1&loop=1&playlist=Edgev_iFO7M&playsinline=1&rel=0&modestbranding=1"
                  title="Video demonstrando a automacao da Bravus Company no WhatsApp"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
