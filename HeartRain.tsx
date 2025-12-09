import React, { useEffect, useState } from 'react';

const HeartRain = () => {
  const [hearts, setHearts] = useState<{id: number, left: number, duration: number, delay: number}[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 5 + 5, // Slower fall 5-10s
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute top-[-10%] text-pink-400/20 blur-[1px]"
          style={{
            left: `${h.left}%`,
            animation: `fall ${h.duration}s linear infinite`,
            animationDelay: `${h.delay}s`,
            fontSize: `${Math.random() * 20 + 10}px`
          }}
        >
          ❤️
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HeartRain;