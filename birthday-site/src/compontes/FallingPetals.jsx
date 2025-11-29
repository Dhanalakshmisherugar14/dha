import { motion } from "framer-motion";

export default function FallingPetals() {
  const petals = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: -100,
            x: Math.random() * window.innerWidth,
            rotate: Math.random() * 360,
            scale: Math.random() * 0.8 + 0.8, // Increased scale
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: window.innerHeight + 100,
            x: `calc(${Math.random() * 100}vw + ${Math.random() * 200 - 100}px)`,
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          className="absolute"
        >
          {/* Rose Petal SVG */}
          <svg
            width="60" // Increased size
            height="60" // Increased size
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md" // Increased shadow
            style={{ fill: `rgba(220, 20, 60, ${Math.random() * 0.3 + 0.4})` }}
          >
            <path d="M15 0C15 0 10 5 10 10C10 15 15 20 15 20C15 20 20 15 20 10C20 5 15 0 15 0Z" />
            <path d="M15 20C15 20 10 25 5 25C0 25 0 20 0 15C0 10 5 10 5 10C5 10 10 15 15 20Z" transform="rotate(45 15 20)" />
            {/* Simplified petal shape */}
             <path d="M15,0 C5,5 0,15 5,25 C10,30 20,30 25,25 C30,15 25,5 15,0 Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
