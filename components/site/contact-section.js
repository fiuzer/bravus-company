"use client";

import { useState } from "react";

import { WhatsappIcon } from "@/components/site/icons";
import { Container } from "@/components/ui/container";

export function ContactSection() {
  const [form, setForm] = useState({ nome: "", tipo: "", mensagem: "" });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      `Olá, Bravus! Me chamo ${form.nome}.`,
      `Preciso de: ${form.tipo}`,
    ];
    if (form.mensagem.trim()) lines.push("", form.mensagem.trim());
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/5511973315085?text=${text}`, "_blank");
  }

  return (
    <section className="section contact-section" id="contato">
      <div className="contact-section__glow" aria-hidden="true" />
      <Container narrow>
        <div className="section-heading">
          <h2 className="section-title">Fale com a Bravus</h2>
          <p className="section-text">
            Preencha o formulário e entraremos em contato via WhatsApp em até
            24 horas. Sem compromisso.
          </p>
        </div>

        <form
          className="glass-panel contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="contact-form__fields">
            <div className="form-group">
              <label className="form-label" htmlFor="nome">
                Seu nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                className="form-input"
                placeholder="João Silva"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="tipo">
                O que você precisa?
              </label>
              <select
                id="tipo"
                name="tipo"
                className="form-select"
                value={form.tipo}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Selecione o tipo de projeto
                </option>
                <option value="Landing Page">Landing Page</option>
                <option value="MVP">MVP</option>
                <option value="Site Institucional">Site Institucional</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="mensagem">
              Sobre o seu negócio{" "}
              <span className="form-label--optional">(opcional)</span>
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              className="form-textarea"
              placeholder="Ex: tenho uma barbearia em SP e preciso de uma landing page para agendamentos..."
              rows={4}
              value={form.mensagem}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="button button-primary contact-form__submit"
          >
            <span className="whatsapp-icon" aria-hidden="true">
              <WhatsappIcon />
            </span>
            Enviar via WhatsApp
          </button>
        </form>
      </Container>
    </section>
  );
}
