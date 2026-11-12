import { useEffect, useRef, useState } from "react";
import { trailImages } from "../data/trailImages";
import "./ImageTrail.css";

// Razmak u pikselima koji miš mora preći prije nego se pojavi nova slika
const DISTANCE_THRESHOLD = 90;
// Koliko milisekundi slika ostaje na ekranu
const LIFETIME = 900;

export default function ImageTrail() {
  const [items, setItems] = useState([]);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const indexRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    // Ako nema slika, ne radimo ništa
    if (!trailImages || trailImages.length === 0) return;

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const last = lastPosRef.current;

      // Računamo koliko se miš pomjerio od zadnje prikazane slike
      const distance = Math.hypot(x - last.x, y - last.y);

      if (distance > DISTANCE_THRESHOLD) {
        lastPosRef.current = { x, y };

        const currentSrc = trailImages[indexRef.current % trailImages.length];
        indexRef.current += 1;

        const newId = idRef.current++;
        const newItem = { id: newId, x, y, src: currentSrc };

        // Dodajemo novu sliku u listu
        setItems((prev) => [...prev, newItem]);

        // Automatski brišemo ovu tačnu sliku nakon LIFETIME milisekundi
        setTimeout(() => {
          setItems((prev) => prev.filter((item) => item.id !== newId));
        }, LIFETIME);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="image-trail-layer" aria-hidden="true">
      {items.map((item) => (
        <img
          key={item.id}
          src={item.src}
          alt=""
          className="trail-image"
          style={{
            left: `${item.x}px`,
            top: `${item.y}px`,
          }}
        />
      ))}
    </div>
  );
}
