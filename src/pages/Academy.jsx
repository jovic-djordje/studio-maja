import { Link } from "react-router-dom";
import { HiArrowTurnDownLeft } from "react-icons/hi2";
import "./academy.style.css";
import ImageTrail from "../components/ImageTrail";

const Academy = () => {
  return (
    <section className="academy-page about-page">
      <ImageTrail />
      <div className="academy-holder">
        <h2 className="academy-title">
          Iza Objektiva is an online photography academy created by Maja
          Topčagić, designed to help you see photography through different eyes.
          Drawing from over fifteen years of international experience across
          editorial, portrait, and commercial photography, the academy offers
          practical education designed to help photographers find their voice,
          master light, and elevate their creative workflow.
        </h2>

        <div className="academy-structure">
          <div className="detail-group academy-detail-group">
            <span className="detail-label">Overview</span>
            <ul className="detail-list">
              <li>Online photography academy</li>
              <li>15+ years of real-world experience</li>
              <li>Insights from international projects</li>
              <li>Accessible to all skill levels</li>
            </ul>
          </div>

          <div className="detail-group academy-detail-group">
            <span className="detail-label">Structure</span>
            <ul className="detail-list">
              <li>6 core lessons across key photography areas</li>
              <li>2 bonus lessons with extra practical tips</li>
              <li>Flexible, self-paced video content</li>
              <li>Clear guidance for developing personal aesthetic</li>
            </ul>
          </div>

          <div className="detail-group academy-detail-group">
            <span className="detail-label">Audience</span>
            <ul className="detail-list">
              <li>Beginners wanting to truly understand photography</li>
              <li>Camera owners aiming to unlock full gear potential</li>
              <li>Creatives building their own style and vision</li>
              <li>Anyone taking their first or next step behind the lens</li>
            </ul>
          </div>

          <div className="detail-group academy-detail-group">
            <span className="detail-label">Enrollment</span>
            <ul className="detail-list">
              <li>Format: 100% online video</li>
              <li>Access: On-demand, learn anytime</li>
              <li>
                <Link
                  to="mailto:maja.topcagic@gmail.com"
                  className="academy-cta"
                >
                  Get in touch via email{" "}
                  <HiArrowTurnDownLeft className="academy-cta-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
