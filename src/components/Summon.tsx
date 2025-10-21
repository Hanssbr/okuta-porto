import React, { useState, useEffect, useRef } from "react";
import fotoOcta from "../assets/foto 1.png";

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function SummonImage() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastTime = useRef(0); // ✅ pakai ref, bukan variabel biasa
  const MAX_PARTICLES = 10;

  const handleMouseMove = (e: MouseEvent) => {
    const now = Date.now();
    if (now - lastTime.current < 400) return; // throttle: 1 gambar per 100ms
    lastTime.current = now;

    const newParticle: Particle = {
      id: now + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };

    setParticles((prev) => {
      const updated = [...prev, newParticle];
      if (updated.length > MAX_PARTICLES) updated.shift(); // batas partikel
      return updated;
    });

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 700);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[9999]">
      {particles.map((p) => (
        <img
          key={p.id}
          src={fotoOcta}
          alt="particle"
          className="fixed w-56 h-56 opacity-80 transition-all duration-700"
          style={{
            left: p.x,
            top: p.y,
            transform: "translate(-50%, -50%) scale(1)",
            animation: "fadeOut 0.7s ease-out forwards",
          }}
        />
      ))}

      <style>
        {`
          @keyframes fadeOut {
            0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(2); }
          }
        `}
      </style>
    </div>
  );
}
