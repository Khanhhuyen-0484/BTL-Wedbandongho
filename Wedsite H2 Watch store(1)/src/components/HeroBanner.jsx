import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <section className="bg-black text-white relative h-[300px] md:h-[400px] flex items-center">
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      
      <div className="absolute left-0 top-0 h-full w-[100%] z-10">
        <img
          src="/img/Banner-img1.png"
          alt="Luxury Watch"
          className="h-[90%] w-auto object-contain object-left mt-10"
        />
      </div>
    
    {/* Text container with constraints */}
    <div className="container mx-auto px-4 relative z-20">
        <div className="ml-auto w-full md:w-[50%] py-8">
          {/* Subtitle with responsive sizing */}
          <h2 className="text-lg md:text-xl font-light tracking-widest text-gray-300 mb-2 md:mb-4 truncate animate-fade-in" style={{animationDelay: '0.1s'}}>
            THE ULTIMATE OFFER ON WATCHES
          </h2>
          
          {/* Main title with line clamping */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-snug line-clamp-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
            WATCHHOUSE SALE
          </h1>
          
          {/* Discount with responsive sizing */}
          <div className="text-2xl md:text-4xl font-bold text-green-400 mb-6 md:mb-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
            UP TO 40% OFF
          </div>
          
          {/* Limited offer text */}
          <div className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 italic animate-fade-in" style={{animationDelay: '0.7s'}}>
            LIMITED TIME OFFER
          </div>
          
          {/* Button */}
          <Link
            to="/shop"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold py-2 md:py-3 px-6 md:px-8 rounded-none transition duration-300 inline-block text-base md:text-lg animate-fade-in"
            style={{animationDelay: '0.9s'}}
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;