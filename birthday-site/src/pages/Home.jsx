import { useState } from "react";
import FloatingHearts from "../compontes/FloatingHearts";
import GiftBox from "../compontes/GiftBox";



import bg from "../assets/bg.jpg";
import FallingPetals from "../compontes/FallingPetals";

export default function Home({ onOpen }) {
  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 w-full flex flex-col items-center">
            <FloatingHearts />
            <GiftBox onOpen={onOpen} />
            <FallingPetals />
        </div>
    </div>
  );
}
