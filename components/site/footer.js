import Image from "next/image";

import { InstagramIcon } from "@/components/site/icons";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__inner">
          <a className="site-footer__brand" href="#top" aria-label="Bravus Company">
            <Image
              src="/brand/bravus-logo.png"
              alt="Bravus Company"
              width={440}
              height={128}
            />
          </a>

          <p className="footer-copy">
            © {new Date().getFullYear()} Bravus Company. Todos os direitos reservados.
          </p>

          <div className="site-footer__socials" aria-label="Redes sociais">
            <a
              className="social-icon"
              href="https://www.instagram.com/bravus.comp/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
