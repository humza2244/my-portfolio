'use client'
import { useEffect } from "react";

export default function ParticlesComponent({ id }) {
  useEffect(() => {
    const container = document.getElementById(id);
    if (!container) return;

    // Clear any existing particles
    container.innerHTML = '';

    // Create simple floating particles with CSS animations
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: ${['#8B5CF6', '#EC4899', '#06B6D4'][Math.floor(Math.random() * 3)]};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.5 + 0.2};
        animation: float ${Math.random() * 10 + 10}s linear infinite;
      `;
      container.appendChild(particle);
    }

    // Add CSS animation if not already added
    if (!document.getElementById('particle-styles')) {
      const style = document.createElement('style');
      style.id = 'particle-styles';
      style.textContent = `
        @keyframes float {
          0% { transform: translateY(100vh) translateX(0px); }
          100% { transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px); }
        }
        .particle {
          pointer-events: none;
        }
      `;
      document.head.appendChild(style);
    }
  }, [id]);

  return (
    <div
      id={id}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        background: "transparent",
      }}
    />
  );
}