'use client';
import { useEffect, useState } from 'react';

export default function RandomStars() {
  const [stars, setStars] = useState<{ id: number; top: number; left: number; size: number; delay: number; color: string }[]>([]);

  useEffect(() => {
    // Generate 15 random stars only on the client to avoid hydration mismatch
    const generatedStars = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      top: Math.floor(Math.random() * 90) + 5, // 5% to 95%
      left: Math.floor(Math.random() * 95) + 2, // 2% to 97%
      size: Math.floor(Math.random() * 16) + 12, // 12px to 28px
      delay: Number((Math.random() * 5).toFixed(2)), // 0s to 5s delay
      color: Math.random() > 0.5 ? 'bg-primary' : 'bg-white'
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none animate-fade-in-slow">
      {stars.map((star) => (
        <div 
          key={star.id}
          className={`absolute ${star.color} clip-star star`}
          style={{ 
            top: `${star.top}%`, 
            left: `${star.left}%`, 
            width: `${star.size}px`, 
            height: `${star.size}px`,
            animationDelay: `${star.delay}s` 
          }}
        ></div>
      ))}
    </div>
  );
}
