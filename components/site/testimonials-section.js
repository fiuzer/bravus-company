// Seção de depoimentos — Server Component
import { testimonials } from "@/components/site/site-data";

export function TestimonialsSection() {
  return (
    <section className="section testimonials" id="depoimentos">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="section-text">
            Resultados reais de negócios que confiaram na Bravus para transformar
            sua presença online.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((depoimento) => (
            <div key={depoimento.id} className="testimonial-card glass-panel">
              {/* Aspas decorativas */}
              <span className="testimonial-card__quote-mark" aria-hidden="true">
                &ldquo;
              </span>

              {/* Cabeçalho: avatar + nome + negócio */}
              <div className="testimonial-card__header">
                <img
                  src={depoimento.avatar}
                  alt={depoimento.name}
                  width={44}
                  height={44}
                  className="testimonial-card__avatar"
                />
                <div>
                  <p className="testimonial-card__name">{depoimento.name}</p>
                  <p className="testimonial-card__business">
                    {depoimento.business}
                  </p>
                </div>
              </div>

              {/* Estrelas */}
              <div className="testimonial-card__stars" aria-label="5 estrelas">
                ★★★★★
              </div>

              {/* Citação */}
              <p className="testimonial-card__text">{depoimento.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
