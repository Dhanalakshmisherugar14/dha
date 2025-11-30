import { Heart, Sparkles, Star, Crown } from "lucide-react";

const LoveMessage = () => {
  const messages = [
    { text: "You are my sunshine", emoji: "☀️" },
    { text: "Every moment with you is magical", emoji: "✨" },
    { text: "You make my heart skip a beat", emoji: "💓" },
    { text: "I fall in love with you more every day", emoji: "🌹" },
    { text: "You're my favorite person", emoji: "👑" },
    { text: "My heart belongs to you", emoji: "💖" },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center relative z-10">
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 opacity-40 animate-float-gentle">
        <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
      </div>
      <div className="absolute top-24 right-12 opacity-50 animate-float-gentle" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-10 h-10 text-yellow-400" />
      </div>
      <div className="absolute bottom-32 left-16 opacity-40 animate-float-gentle" style={{ animationDelay: "2s" }}>
        <Heart className="w-12 h-12 text-rose-400 fill-rose-400" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-30 animate-float-gentle" style={{ animationDelay: "0.5s" }}>
        <Crown className="w-8 h-8 text-yellow-400 fill-yellow-400" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10 py-12">
        {/* Big Heart with Pulse */}
        <div className="animate-fade-in-scale mb-6">
          <Heart className="w-20 h-20 md:w-28 md:h-28 text-rose-500 fill-rose-500 mx-auto animate-heartbeat drop-shadow-2xl" />
        </div>

        {/* Main Title */}
        <div className="animate-fade-in-up space-y-4 backdrop-blur-sm  ">
          <h1 className="font-handwriting text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(244,63,94,0.5)] leading-tight animate-pulse">
            Happy Birthday
          </h1>
          <p className="font-handwriting text-4xl md:text-6xl text-amber-400">
            My Love! 💕
          </p>
        </div>

        {/* Love Letter */}
        <div 
          className="bg-white/60 p-8 md:p-14 rounded-3xl shadow-xl animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="font-serif text-2xl md:text-3xl text-gray-800 leading-relaxed mb-8 italic">
            "To the one who holds my heart forever and always..."
          </p>
          <p className="font-sans text-lg md:text-xl text-red-700 leading-loose">
            On this beautiful day, I want you to know how incredibly blessed I am to have you in my life. 
            You are my best friend, my soulmate, my everything. 
            Your smile lights up my entire world, and your love gives me strength every single day.
            Thank you for being the most amazing person I know, for loving me unconditionally, 
            and for making every moment we share absolutely magical.
          </p>
        </div>

        {/* Love Messages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {messages.map((message, index) => (
            <div
              key={index}
              className="group bg-white/80 p-7 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500 animate-fade-in-up cursor-default"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <span className="text-3xl mb-3 block group-hover:scale-125 transition-transform duration-300">{message.emoji}</span>
              <p className="font-handwriting text-xl md:text-2xl text-red-800">{message.text}</p>
            </div>
          ))}
        </div>

        {/* Big I Love You */}
        <div 
          className="mt-16 space-y-4 animate-fade-in-up" 
          style={{ animationDelay: "1.2s" }}
        >
          <p className="font-handwriting text-6xl md:text-8xl text-amber-500 drop-shadow-sm">
            I Love You
          </p>
          <p className="font-handwriting text-4xl md:text-6xl text-amber-400">
            Forever & Always 💖
          </p>
          <p className="font-serif text-xl md:text-2xl text-red-400 mt-4">
            ∞ To infinity and beyond ∞
          </p>
        </div>

        {/* Signature */}
        <div 
          className="mt-12 pt-8 border-t border-rose-200 animate-fade-in-up" 
          style={{ animationDelay: "1.4s" }}
        >
          <p className="font-serif text-lg text-red-600 italic mb-3">
            With all my heart and soul,
          </p>
          <p className="font-handwriting text-4xl text-rose-500 flex items-center justify-center gap-2">
            Yours Forever <Heart className="w-6 h-6 fill-rose-500" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoveMessage;

