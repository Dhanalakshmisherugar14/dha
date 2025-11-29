import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const initialHearts = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 8,
      size: 30 + Math.random() * 40,
      opacity: 0.6 + Math.random() * 0.4,
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0"
          style={{
            left: `${heart.left}%`,
            animation: `float-heart ${heart.duration}s ease-in-out infinite`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          <Heart
            className="text-red-600 fill-red-600 drop-shadow-xl"
            style={{ width: heart.size, height: heart.size }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
