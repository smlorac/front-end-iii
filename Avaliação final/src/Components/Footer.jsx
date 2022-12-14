import { useContext } from "react";
import styles from "./Footer.module.css";

import { ThemeContext } from "../providers/ThemeProvider";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <footer>
      <div className={styles.footerWrapper}>
        <button
          className={`btn btn-danger ${styles.top}`}
          onClick={scrollToTop}
        >
          Voltar para o topo
        </button>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a class navbar-dark bg-dark ou navbar-light bg-light  */}
        <div
          className={
            theme === "light"
              ? `navbar-light bg-light ${styles.footer}`
              : `navbar-dark bg-dark ${styles.footer}`
          }
          data-testid="footerDiv"
        >
          <div className="container">
            <div className={`row`}>
              <div className="col-sm-12 col-lg-6">
                {/* //Na linha seguinte deverá ser feito um teste se a aplicação
                // está em dark mode e deverá utilizar o css correto */}
                <img
                  className={theme === "light" ? `${styles.dhLogo}` : `dark ${styles.dhLogo}`}
                  src="/images/DH.png"
                  alt="DH-logo"
                  data-testid="footerImg"
                />
              </div>
              <div className={theme === "light" ? `col-sm-12 col-lg-6 ${styles.icons}` : `col-sm-12 col-lg-6 dark ${styles.icons}`}>
                <img
                  src="/images/ico-facebook.png"
                  alt="ícone do facebook"
                  className={styles.icon}
                />
                <img
                  src="/images/ico-instagram.png"
                  alt="ícone do instagram"
                  className={styles.icon}
                />
                <img
                  src="/images/ico-whatsapp.png"
                  alt="ícone do whatsapp"
                  className={styles.icon}
                />
                <img
                  src="/images/ico-tiktok.png"
                  alt="ícone do tiktok"
                  className={styles.icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
