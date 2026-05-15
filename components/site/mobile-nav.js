"use client";

// Menu de navegação mobile com hambúrguer — Client Component
import { useState } from "react";
import Link from "next/link";

const links = [
  { rotulo: "Serviços", href: "/#servicos" },
  { rotulo: "Como funciona", href: "/#como-funciona" },
  { rotulo: "Portfólio", href: "/portfolio" },
];

export function MobileNav() {
  const [aberto, setAberto] = useState(false);

  function fechar() {
    setAberto(false);
  }

  return (
    <>
      {/* Botão hambúrguer */}
      <button
        className={`mobile-nav-toggle${aberto ? " is-open" : ""}`}
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        aria-controls="mobile-nav-overlay"
      >
        <span className="mobile-nav-toggle__bar" />
        <span className="mobile-nav-toggle__bar" />
        <span className="mobile-nav-toggle__bar" />
      </button>

      {/* Overlay com os links */}
      <nav
        id="mobile-nav-overlay"
        className={`mobile-nav-overlay${aberto ? " is-open" : ""}`}
        role="dialog"
        aria-label="Menu de navegação"
        aria-hidden={!aberto}
      >
        {links.map((link) =>
          link.href.startsWith("/") && !link.href.startsWith("/#") ? (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-overlay__link"
              onClick={fechar}
            >
              {link.rotulo}
            </Link>
          ) : (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-overlay__link"
              onClick={fechar}
            >
              {link.rotulo}
            </a>
          )
        )}

        {/* CTA destaque */}
        <a
          href="/#contato"
          className="mobile-nav-overlay__link nav-pill"
          onClick={fechar}
        >
          Fale conosco
        </a>
      </nav>
    </>
  );
}
