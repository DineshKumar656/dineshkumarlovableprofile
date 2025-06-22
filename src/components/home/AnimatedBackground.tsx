
import { useState, useEffect } from "react";

interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number };
}

const AnimatedBackground = ({ mousePosition }: AnimatedBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Interactive gradient orbs */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.3}px)`,
          top: '-10%',
          right: '-10%'
        }}
      />
      <div
        className="absolute w-80 h-80 bg-gradient-to-l from-purple-400/25 to-pink-300/25 rounded-full blur-3xl animate-pulse delay-1000 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.4}px)`,
          top: '40%',
          left: '-15%'
        }}
      />
      <div
        className="absolute w-64 h-64 bg-gradient-to-br from-indigo-400/15 to-blue-300/15 rounded-full blur-3xl animate-pulse delay-2000 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * -0.2}px)`,
          bottom: '10%',
          right: '20%'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
