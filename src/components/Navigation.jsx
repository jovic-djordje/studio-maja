import { Link, NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className={`site-header ${isHome ? "is-center" : "is-top"}`}>
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
      </div>
    </header>
  );
};

export default Navigation;
