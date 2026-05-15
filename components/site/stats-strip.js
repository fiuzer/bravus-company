// Faixa de estatísticas — Server Component
const estatisticas = [
  { numero: "12+", rotulo: "projetos entregues" },
  { numero: "7 dias", rotulo: "prazo médio" },
  { numero: "100%", rotulo: "no prazo" },
  { numero: "24h", rotulo: "tempo de resposta" },
];

export function StatsStrip() {
  return (
    <section className="stats-strip">
      <div className="container">
        <ul className="stats-strip__list">
          {estatisticas.map((item) => (
            <li key={item.rotulo} className="stats-strip__item">
              <span className="stats-strip__number">{item.numero}</span>
              <span className="stats-strip__label">{item.rotulo}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
