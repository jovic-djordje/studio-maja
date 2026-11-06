import "./about.style.css";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-page-holder">
        <div className="about-page-text-holder">
          <h1 className="about-text">
            Hi, I’m Maja Topčagić, a portrait, art, and fashion photographer
            based in Sarajevo. With over a decade of <br />
            visual storytelling, I create expressive portraits and editorial
            series focused on natural light, authentic character, and raw
            emotion. Alongside commissioned campaigns and studio sessions, I run
            creative workshops and educational programs to help photographers
            refine their visual voice.
          </h1>

          <div className="detail-group">
            <span className="detail-label">Services</span>
            <ul className="detail-list">
              <li>Portrait &amp; Beauty Photography</li>
              <li>Fashion &amp; Commercial Editorials</li>
              <li>Art Direction &amp; Creative Production</li>
              <li>1 on 1 Mentorship &amp; Online Academy</li>
            </ul>
          </div>

          <div className="detail-group">
            <span className="detail-label">SELECTED CLIENTS</span>
            <ul className="detail-list">
              <li>L’Oréal</li>
              <li>Samsung</li>
              <li>Porsche</li>
              <li>Adobe</li>
              <li>DM Drogerie Markt</li>
              <li>Vogue Italia</li>
            </ul>
          </div>

          <div className="detail-group">
            <span className="detail-label">FEATURES &amp; RECOGNITION</span>
            <ul className="detail-list">
              <li>Vogue Italia (Art+Commerce)</li>
              <li>National Geographic &amp; Phlearn Featured Artist</li>
              <li>Trevillion Images &amp; 500px Contributor</li>
              <li>Ladies In Magazine • Cover Stories</li>
              <li>
                Global Viral Series: Freckles (Over 50+ Global Publications)
              </li>
            </ul>
          </div>
        </div>

        <div className="about-media">
          <img
            src="/images/about-photo.webp"
            alt="Maja Topčagić with her cameras"
            className="about-image"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
