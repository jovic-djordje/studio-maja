import "./home.style.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [timeData, setTimeData] = useState({ time: "", timeZoneName: "" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Formatira vrijeme u tačnoj vremenskoj zoni Sarajeva sa sekundama i oznakom zone (CET / CEST)
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Sarajevo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
        hour12: false,
      });

      const parts = formatter.formatToParts(now);
      const hours = parts.find((p) => p.type === "hour")?.value || "";
      const minutes = parts.find((p) => p.type === "minute")?.value || "";
      const seconds = parts.find((p) => p.type === "second")?.value || "";
      const tz = parts.find((p) => p.type === "timeZoneName")?.value || "CET";

      setTimeData({
        time: `${hours}:${minutes}:${seconds}`,
        timeZoneName: tz,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="home-page">
      <div className="home-page-holder">
        <div className="hero-top-grid">
          <div className="hero-statement">
            <p>
              Independent portrait and fashion photographer <br /> based in
              Sarajevo, capturing light, character,
              <br /> and raw emotion across visual stories.
            </p>
          </div>

          <div className="hero-time">
            <span className="hero-time-digits">{timeData.time}</span>
            <span className="hero-time-zone">{timeData.timeZoneName}</span>
            <span className="hero-time-city">Sarajevo, BA</span>
          </div>
        </div>

        {/* Centralni video */}
        <div className="home-reel">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="reel-video"
          >
            <source src="/videos/video-hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
};

export default Home;
