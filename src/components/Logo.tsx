import React from "react";

const Logo = () => {
  return (
    <header 
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200"
      aria-label="Beelio Logo Section"
    >
      <h1 className="relative text-5xl md:text-6xl font-extrabold text-purple-700 tracking-wider">
        Beelio
        <span className="absolute left-0 -bottom-2 w-full h-1 bg-pink-500 animate-pulse"></span>
      </h1>
    </header>
  );
};

export default Logo;
