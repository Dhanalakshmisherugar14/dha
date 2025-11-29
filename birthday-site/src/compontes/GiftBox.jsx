import { useState } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

const GiftBox = ({ onOpen }) => {
  const [isShaking, setIsShaking] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    if (isOpened) return;
    
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      setIsOpened(true);
      setTimeout(() => {
        onOpen();
      }, 1200);
    }, 800);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Text Above */}
      <div className="text-center space-y-4 mb-12">
        <div className="flex items-center justify-center gap-2">
           <span className="text-xl animate-bounce-soft">✨</span>
           <p className="text-lg text-gray-600 font-serif italic animate-bounce-soft">A special surprise awaits you</p>
           <span className="text-xl animate-bounce-soft">✨</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 drop-shadow-sm font-handwriting animate-bounce-soft">
          I have something
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400 drop-shadow-sm font-handwriting animate-bounce-soft">
          special for you...
        </h3>
        <p className="text-xl text-gray-700 font-serif italic flex items-center justify-center gap-2 animate-bounce-soft">
          A little gift filled with all my love <span className="text-pink-500 animate-bounce-soft">💕</span>
        </p>
      </div>

      {/* Sparkles around the box */}
      {!isOpened && (
        <>
          <Sparkles 
            className="absolute -top-12 -left-12 text-yellow-400 animate-twinkle" 
            style={{ animationDelay: "0s" }}
            size={28}
          />
          <Star 
            className="absolute -top-8 right-4 text-yellow-400 fill-yellow-400 animate-twinkle" 
            style={{ animationDelay: "0.3s" }}
            size={18}
          />
          <Sparkles 
            className="absolute top-0 -right-10 text-yellow-400 animate-twinkle" 
            style={{ animationDelay: "0.7s" }}
            size={24}
          />
          <Star 
            className="absolute bottom-8 -right-8 text-yellow-400 fill-yellow-400 animate-twinkle" 
            style={{ animationDelay: "1s" }}
            size={16}
          />
          <Sparkles 
            className="absolute bottom-4 -left-10 text-yellow-400 animate-twinkle" 
            style={{ animationDelay: "1.3s" }}
            size={22}
          />
          <Star 
            className="absolute -bottom-4 left-8 text-yellow-400 fill-yellow-400 animate-twinkle" 
            style={{ animationDelay: "0.5s" }}
            size={14}
          />
        </>
      )}

      {/* Glow effect behind box */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-pink-500/20 blur-3xl animate-glow-pulse" />

      <div 
        className={`cursor-pointer transition-all duration-500 ${isShaking ? 'animate-box-shake' : ''} ${!isOpened ? 'hover:scale-110 hover:rotate-2' : ''}`}
        onClick={handleClick}
        style={{ perspective: "1000px" }}
      >
        {/* Box Container */}
        <div className="relative w-56 h-56 md:w-72 md:h-72">
          {/* Box Lid */}
          <div 
            className={`absolute top-0 left-0 w-full h-10 md:h-12 bg-gradient-to-b from-rose-600 to-pink-600 rounded-t-xl z-20 shadow-lg ${isOpened ? 'animate-lid-open' : ''}`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Ribbon bow on top */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="relative">
                <div className="absolute -left-6 w-5 h-8 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full -rotate-45 shadow-md" />
                <div className="absolute -right-6 w-5 h-8 bg-gradient-to-l from-yellow-400 to-yellow-200 rounded-full rotate-45 shadow-md" />
                <div className="relative w-5 h-5 bg-yellow-400 rounded-full shadow-md z-10" />
              </div>
            </div>
          </div>

          {/* Box Body */}
          <div className="absolute top-10 md:top-12 left-0 w-full h-46 md:h-60 bg-gradient-to-b from-pink-600 via-pink-600 to-rose-600 rounded-b-xl shadow-2xl overflow-hidden">
            {/* Vertical Ribbon */}
            <div className="absolute left-1/2 -translate-x-1/2 w-5 md:w-7 h-full bg-gradient-to-b from-yellow-400 via-yellow-200 to-yellow-400 shadow-inner" />
            {/* Horizontal Ribbon */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-5 md:h-7 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 shadow-inner" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            
            {/* Content that appears when opened */}
            {isOpened && (
              <div className="absolute inset-0 flex items-center justify-center animate-reveal-content">
                <div className="relative">
                  <Heart className="w-20 h-20 md:w-28 md:h-28 text-white fill-white animate-heartbeat drop-shadow-2xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl">💕</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Click instruction */}
      {!isOpened && (
        <div className="mt-10 text-center">
          <p className="font-serif text-3xl md:text-4xl text-pink-600 animate-bounce-soft">
            Tap to open your surprise!
          </p>
          <p className="font-serif text-lg text-gray-600 mt-2 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            Something special awaits inside... 💝
          </p>
        </div>
      )}
    </div>
  );
};

export default GiftBox;
