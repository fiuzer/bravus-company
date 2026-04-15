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
                <video
                  className="demo-phone__video"
                  autoPlay
                  controls
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Video demonstrando a automacao da Bravus Company no WhatsApp"
                >
                  <source
                    src="/videos/pare-de-perder-clientes-no-whatsapp.mp4"
                    type="video/mp4"
                  />
                  Seu navegador nao suporta reproducao de video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
