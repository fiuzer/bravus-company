import { Container } from "@/components/ui/container";

export function DemoSection() {
  return (
    <section className="section demo-section" id="demo">
      <Container>
        <div className="glass-panel demo-frame">
          <div className="demo-frame__layout">
            <div className="demo-frame__copy">
              <span className="demo-kicker">Antes e depois</span>
              <h2 className="section-title demo-title">Do caos ao relatório em 24 horas</h2>
              <p className="section-text demo-text">
                Você manda os exports do Meta e do Google. A Bravus devolve uma
                base única, padronizada e pronta pra analisar.
              </p>
            </div>

            <div
              className="demo-comparison"
              aria-label="Comparação entre dados brutos e dados após limpeza"
            >
              <div className="demo-card">
                <div className="demo-card__header demo-card__header-danger">
                  Dados brutos
                </div>
                <div className="demo-table-wrap">
                  <table className="demo-table demo-table--raw">
                    <thead>
                      <tr>
                        <th>Data</th>
                        <th>dt_inicio</th>
                        <th>Dia</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01/03/2025</td>
                        <td>Meta Ads</td>
                        <td>R$ 120,50</td>
                      </tr>
                      <tr>
                        <td>2025-03-01</td>
                        <td>Google</td>
                        <td>120.5</td>
                      </tr>
                      <tr>
                        <td />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>03-03-25</td>
                        <td>meta</td>
                        <td>R$89,00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="demo-card">
                <div className="demo-card__header demo-card__header-success">
                  Após limpeza
                </div>
                <div className="demo-table-wrap">
                  <table className="demo-table demo-table--clean">
                    <thead>
                      <tr>
                        <th>data</th>
                        <th>plataforma</th>
                        <th>gasto</th>
                        <th>cliques</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2025-03-01</td>
                        <td>meta_ads</td>
                        <td>120.50</td>
                        <td>34</td>
                      </tr>
                      <tr>
                        <td>2025-03-01</td>
                        <td>google_ads</td>
                        <td>120.50</td>
                        <td>28</td>
                      </tr>
                      <tr>
                        <td>2025-03-03</td>
                        <td>meta_ads</td>
                        <td>89.00</td>
                        <td>21</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
