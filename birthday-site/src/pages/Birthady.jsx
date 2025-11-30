import React from 'react'
import LoveMessage from "../compontes/LoveMessage";
import bg from "../assets/bg.jpg";
import FloatingHearts from "../compontes/FloatingHearts";
import FallingPetals from "../compontes/FallingPetals";
import Confetti from "../compontes/Confetti";
import { ArrowLeft } from "lucide-react";

export const Birthady = ({ onBack }) => {
  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Back Button */}
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 z-20 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="relative z-10 w-full flex flex-col items-center space-y-8">
            <Confetti />
            <FloatingHearts />
            <LoveMessage />
            <FallingPetals />
        </div>
    </div>
  )
}