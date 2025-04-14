import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative w-full bg-dark-bg text-white">
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/you-can-help.jpeg')] bg-cover bg-center opacity-30"></div>
      <div className="relative container-custom py-20 md:py-28 flex flex-col items-center justify-center text-center">
        <h3 className="text-donation-orange text-lg md:text-xl mb-2">From your heart to need</h3>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
          Together we can make a difference in someone's life
        </h1>
        <p className="text-lg max-w-2xl mb-8 text-gray-200">
          Join us in our mission to connect donors with those who need it most, creating a world where generosity knows no bounds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
          <Link to="/donation-list">
            <Button className="donation-btn min-w-40 uppercase">Donate Now</Button>
          </Link>
          <Button variant="outline" className="text-black border-white flex items-center gap-2 hover:bg-white/10 uppercase">
            Watch Video →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
