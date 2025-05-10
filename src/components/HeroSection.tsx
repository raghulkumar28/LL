import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-darkBlue-950 via-brand-darkBlue-900 to-brand-darkBlue-800 z-0"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxMyAwIDYtMi42ODcgNi02cy0yLjY4Ny02LTYtNi02IDIuNjg3LTYgNiAyLjY4NyA2IDYgNnptMCAxMmM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzQyLjYyNyA2IDM2IDYgMjQgMTEuMzczIDI0IDE4czUuMzczIDEyIDEyIDEyeiIgc3Ryb2tlPSIjRkZDMzAwIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMiAyaDRhMiAyIDAgMDEyIDJ2NGEyIDIgMCAwMC0yIDJIMmEyIDIgMCAwMS0yLTJWNGEyIDIgMCAwMTItMnoiIGZpbGw9IiNGRkQzMEEiLz48L2c+PC9zdmc+')]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column: Text & Search */}
        <div className={`w-full lg:w-1/2 text-center lg:text-left transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000 ease-out mb-10 lg:mb-0`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            <span className="block">Pure Traditional</span>
            <span className="text-brand-yellow-500">Cold-Pressed Oils</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
            Experience the authentic taste and health benefits of our premium cold-pressed oils made with traditional methods.
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <SearchBar />
          </div>
        </div>
        
        {/* Right Column: Animation */}
        <div className={`w-full lg:w-1/2 flex justify-center items-center transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000 delay-300 ease-out`}>
          <div className="relative w-full max-w-md">
            {/* Oil drip animation would be here */}
            <div className="w-full h-96 rounded-2xl bg-gradient-to-b from-brand-darkBlue-800 to-brand-darkBlue-900 flex items-center justify-center overflow-hidden shadow-xl border border-brand-darkBlue-700">
              <div className="relative w-32 h-64">
                {/* This would be replaced with the actual dripping oil animation */}
                <div className="absolute w-32 h-32 bg-brand-yellow-500 rounded-full top-0 opacity-80"></div>
                <div className="absolute w-4 bg-brand-yellow-500 h-64 left-14 animate-drip"></div>
                <div className="absolute w-24 h-24 bg-brand-yellow-500 rounded-full bottom-0 opacity-90 animate-pulse"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-yellow-400 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-yellow-500 rounded-full opacity-10 animate-float-delay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;