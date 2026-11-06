import "../pages/home.style.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className={`global-footer ${isHome ? "is-fixed" : "is-relative"}`}>
      <div className="footer-holder">
        {/* Kolone 1 do 3 */}
        <span className="footer-copy">©2026</span>

        {/* Kolone 4 do 6 */}
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/maja-topcagic-5b2331a9/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/majatopcagich/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>

        {/* Kolone 7 do 10 */}
        <div className="footer-contact">
          <a href="mailto:maja.topcagic@gmail.com">
            (E) maja.topcagic@gmail.com
          </a>
          <a href="tel:+38761860675">(P) +387 61 860 675</a>
          <a
            href="https://maps.app.goo.gl/6MXuyAEfZRmhfjPp6"
            target="_blank"
            rel="noreferrer"
          >
            (A) Stupska 1D, Sarajevo 71210
          </a>
        </div>

        {/* Kolone 12 do 13 */}
        <a
          href="https://jovicweb.dev/"
          target="_blank"
          rel="noreferrer"
          className="footer-credits"
        >
          Credits
        </a>
      </div>
    </footer>
  );
};

export default Footer;
