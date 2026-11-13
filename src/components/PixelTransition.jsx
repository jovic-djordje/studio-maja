import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./pixelTransition.css";

const COLS = 12; // 12 kolona za lepše, sitnije piksele
const ROWS = 8; // 8 redova

export default function PixelTransition({ children }) {
  const location = useLocation();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const [isPageTransition, setIsPageTransition] = useState(false);
  const isFirstMount = useRef(true);

  // 1. Brojač 0% -> 100%
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 5) + 2;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);

        // Čim udari 100%, odmah kreće reveal piksela odozdo ka gore
        setTimeout(() => {
          setIsRevealing(true);
        }, 350);

        // Ukloni ceo overlay tek kad svi pikseli završe animaciju
        setTimeout(() => {
          setIsInitialLoading(false);
        }, 1600);
      } else {
        setProgress(current);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // 2. Page transition kad ideš sa stranice na stranicu
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    setIsPageTransition(true);
    const timer = setTimeout(() => {
      setIsPageTransition(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const showOverlay = isInitialLoading || isPageTransition;

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <div className="pixel-overlay">
            {/* Tekst nestaje ODMAH čim krene reveal, da ne stoji preko homepagea */}
            {isInitialLoading && !isRevealing && (
              <div className="loader-content">
                <span className="loader-top-brand">MAJA TOPČAGIĆ</span>

                {/* Horizontalna linija na sredini ekrana koja prati progress */}
                <div className="loader-line-track">
                  <motion.div
                    className="loader-line-fill"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: progress / 100 }}
                    transition={{ ease: "easeOut", duration: 0.12 }}
                  />
                </div>

                <span className="loader-bottom-counter">{progress}%</span>
              </div>
            )}

            {/* Grid piksela */}
            <div className="pixel-grid">
              {Array.from({ length: ROWS * COLS }).map((_, index) => {
                const rowIndex = Math.floor(index / COLS); // 0 (vrh) do ROWS - 1 (dno)
                const colIndex = index % COLS;

                // Računamo udaljenost od dna ekrana:
                // donji red (ROWS - 1) ima najmanji delay (kreće prvi)
                const distanceFromBottom = ROWS - 1 - rowIndex;

                // Ključ za efekat odozdo ka gore sa organskim 'pixel' šumom:
                const delay = distanceFromBottom * 0.09 + Math.random() * 0.18;

                const isHidden =
                  isRevealing || (isPageTransition && !isInitialLoading);

                return (
                  <motion.div
                    key={index}
                    className="pixel-block"
                    initial={{ opacity: 1 }}
                    animate={{
                      opacity: isHidden ? 0 : 1,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: delay,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
