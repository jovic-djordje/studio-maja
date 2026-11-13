import MobileMenuReveal from "./MobileMenuReveal";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import SarajevoClock from "./SarajevoClock";
import { HiArrowTurnDownLeft } from "react-icons/hi2";

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`site-header ${isHome ? "is-center" : "is-top"} ${isScrolled ? "is-scrolled" : ""}`}
    >
      <div className="header-holder">
        <Link to="/" className="header-name">
          <span>maja topčagić</span>
        </Link>

        <p className="header-label">PORTRAIT & FASHION</p>

        <nav className="nav-header">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/work">WORK</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/academy">ACADEMY</NavLink>
        </nav>

        <Link to="mailto:maja.topcagic@gmail.com" className="cta-link">
          {" "}
          GET IN TOUCH
        </Link>

        <button
          type="button"
          className="menu-trigger cursor-hover"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="mobile-menu-top">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              MAJA TOPČAGIĆ
            </Link>
            <button
              type="button"
              className="mobile-menu-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="close navigation"
            >
              CLOSE
            </button>
          </div>
          <MobileMenuReveal>
            <div className="mobile-menu-info">
              <div className="mobile-menu-info-group">
                <p className="mobile-menu-label">Focus:</p>
                <p className="">Portrait & Fashion Photography</p>
              </div>

              <div className="mobile-menu-info-group">
                <p className="mobile-menu-label">Time:</p>

                <SarajevoClock className="mobile-menu-time" />
              </div>

              <div className="mobile-menu-info-group">
                <p className="mobile-menu-label">Socials:</p>

                <div className="mobile-menu-socials">
                  {/* Zamijeni tekst linkovima kada uneseš stvarne URL adrese */}
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
              </div>
            </div>

            <nav className="mobile-menu-links">
              <NavLink to="/" end>
                <span>HOME</span>
                <HiArrowTurnDownLeft
                  className="mobile-menu-link-icon"
                  aria-hidden="true"
                />
              </NavLink>

              <NavLink to="/work">
                <span>WORK</span>
                <HiArrowTurnDownLeft
                  className="mobile-menu-link-icon"
                  aria-hidden="true"
                />
              </NavLink>

              <NavLink to="/about">
                <span>ABOUT</span>
                <HiArrowTurnDownLeft
                  className="mobile-menu-link-icon"
                  aria-hidden="true"
                />
              </NavLink>

              <NavLink to="/academy">
                <span>ACADEMY</span>
                <HiArrowTurnDownLeft
                  className="mobile-menu-link-icon"
                  aria-hidden="true"
                />
              </NavLink>

              <NavLink to="mailto:maja.topcagic@gmail.com">
                <span>CONTACT</span>
                <HiArrowTurnDownLeft
                  className="mobile-menu-link-icon"
                  aria-hidden="true"
                />
              </NavLink>
            </nav>
          </MobileMenuReveal>
        </div>
      )}
    </header>
  );
};

export default Navigation;
