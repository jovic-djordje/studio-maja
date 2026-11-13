import "./home.style.css";
import SarajevoClock from "../components/SarajevoClock";
import { useRef, useEffect } from "react";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Prisilno setovanje svojstva na DOM nivou za iOS WebKit
    video.defaultMuted = true;
    video.muted = true;

    const handlePlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ako iOS privremeno blokira, pokreće se na prvi dodir ekrana
          const handleFirstTouch = () => {
            video.play();
            window.removeEventListener("touchstart", handleFirstTouch);
          };
          window.addEventListener("touchstart", handleFirstTouch, {
            once: true,
          });
        });
      }
    };

    // Pokreće video čim dobije dovoljno podataka
    if (video.readyState >= 2) {
      handlePlay();
    } else {
      video.addEventListener("loadeddata", handlePlay, { once: true });
    }

    return () => {
      video.removeEventListener("loadeddata", handlePlay);
    };
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

          <SarajevoClock className="hero-time" />
        </div>

        {/* Centralni video */}
        <div className="home-reel">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            className="reel-video"
            src="/videos/video-hero.mp4"
          ></video>
        </div>
      </div>
    </main>
  );
};

export default Home;
