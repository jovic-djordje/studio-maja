import { motion, useReducedMotion } from "framer-motion";

const COLS = 6;
const ROWS = 10;

const MobileMenuReveal = ({ children }) => {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div className="mobile-menu-pixels" aria-hidden="true">
        {Array.from({ length: COLS * ROWS }, (_, index) => {
          const row = Math.floor(index / COLS);
          const col = index % COLS;

          const distanceFromBottom = ROWS - 1 - row;

          // Stalan raspored kašnjenja, bez promjena pri ponovnom renderu.
          const variation = ((row * 7 + col * 3) % 5) * 0.012;
          const delay = distanceFromBottom * 0.022 + variation;

          return (
            <motion.div
              key={index}
              className="mobile-menu-pixel"
              initial={{ opacity: reduceMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.1,
                delay: reduceMotion ? 0 : delay,
                ease: "linear",
              }}
            />
          );
        })}
      </div>

      <motion.div
        className="mobile-menu-content"
        initial={{ opacity: reduceMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.15,
          delay: reduceMotion ? 0 : 0.28,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default MobileMenuReveal;
