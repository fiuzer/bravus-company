import Image from "next/image";

import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <a className="site-header__logo" href="#top" aria-label="Bravus Company">
            <Image
              src="/brand/bravus-logo.png"
              alt="Bravus Company"
              width={460}
              height={132}
              priority
            />
          </a>

          <nav className="site-header__nav" aria-label="Navegacao principal">
            <a href="#beneficios">Beneficios</a>
            <a href="#como-funciona">Como funciona</a>
            <a className="nav-pill" href="#demo">
              Ver demonstracao
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
