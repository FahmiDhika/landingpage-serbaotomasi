"use client";

import Image from "next/image";
import whatsapp from "../public/assets/whatsapp.png";

type FbqFunction = {
  (command: "init", id: string): void;
  (command: "track", event: string, params?: Record<string, unknown>): void;
  (command: string, ...args: unknown[]): void;
};

declare global {
  interface Window {
    fbq: FbqFunction;
  }
}

interface TombolWAProps {
  phone: string;
  label?: string;
  floating?: boolean;
}

export default function TombolWA({
  phone,
  label = "Hubungi via WhatsApp",
  floating = false,
}: TombolWAProps) {
  const message = encodeURIComponent(
    "Halo, saya tadi melihat iklan dari Facebook.."
  );

  const handleClick = () => {
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "Contact");
    }
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  if (floating) {
    // versi tombol melayang
    return (
      <button
        onClick={handleClick}
        className="fixed flex items-center justify-center gap-3 sm:gap-4 
          right-4 sm:right-10 bottom-4 sm:bottom-10
          bg-gradient-to-r from-green-400 to-green-600 
          text-white text-lg sm:text-xl font-semibold
          px-5 sm:px-7 py-3 sm:py-4 rounded-full 
          shadow-lg hover:shadow-green-400/60
          transform hover:scale-105 hover:-translate-y-1
          transition-all duration-300 ease-out
          z-50"
      >
        <Image
          src={whatsapp}
          alt="WhatsApp"
          width={28}
          height={28}
          className="sm:w-10 sm:h-10 drop-shadow-md"
        />
        <span className="drop-shadow-md">{label}</span>
      </button>
    );
  }

  // versi tombol biasa
  return (
    <button
      onClick={handleClick}
      className="flex items-center text-xl gap-3 bg-gradient-to-r from-green-500 to-green-600 
               text-white font-semibold px-6 py-3 rounded-full shadow-lg 
               hover:from-green-600 hover:to-green-700 
               transform hover:scale-105 transition-all duration-300"
    >
      <Image src={whatsapp} alt="wa" width={28} height={28} />
      <span>{label}</span>
    </button>
  );
}
