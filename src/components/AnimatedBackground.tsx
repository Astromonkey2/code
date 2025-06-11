'use client';
import React,{useEffect,useState} from 'react';
interface Particle{ id:number; x:number; y:number; size:number; duration:number; delay:number; }
export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2, // 2px to 6px
      duration: Math.random() * 20 + 10, // 10s to 30s
      delay: Math.random() * 5 // 0s to 5s
    })));
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden"> {/* Added -z-10 for good measure */}
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute bg-white/10 rounded-full animate-float-fade" // Changed to animate-float-fade
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <div className="absolute top-20 left-20 w-72 h-72 bg-russian_violet/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-russian_violet_secondary/30 rounded-full blur-3xl animate-pulse" /> {/* Added translate for true centering */}
    </div>
  );
}