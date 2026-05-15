import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <a className="site-header__logo" href="/" aria-label="Bravus Company">
            <Image
              src="/brand/bravus-logo.png"
              alt="Bravus Company"
              width={460}
              height={132}
              priority
            />
          </a>

          <nav className="site-header__nav" aria-label="Navegação principal">
            <a href="/#servicos">Serviços</a>
            <a href="/#como-funciona">Como funciona</a>
            <Link className="nav-pill" href="/portfolio">
              Portfólio
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
