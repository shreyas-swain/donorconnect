import React from 'react';
import { Book, Users, Heart, Home } from 'lucide-react';

const StatItem = ({ icon, count, label }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-white rounded-full p-4 mb-4 inline-block">
        {icon}
      </div>
      <p className="text-donation-orange font-bold text-2xl">
        {count}
      </p>
      <h3 className="text-text-dark text-lg font-semibold mb-2">
        {label}
      </h3>
      <p className="text-sm text-gray-600 max-w-xs mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

const ImpactStats = () => {
  return (
    <section className="py-16 bg-light-bg">
      <div className="container-custom">
        <h3 className="text-donation-orange text-lg text-center mb-2">From your heart to need</h3>
        <h2 className="text-3xl font-bold text-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem 
            icon={<Book size={32} className="text-donation-orange" />}
            count="2,480 +"
            label="Lorem ipsum dolor sit amet"
          />
          <StatItem 
            icon={<Users size={32} className="text-donation-orange" />}
            count="2,480 +"
            label="Lorem ipsum dolor sit amet"
          />
          <StatItem 
            icon={<Heart size={32} className="text-donation-orange" />}
            count="2,480 +"
            label="Lorem ipsum dolor sit amet"
          />
          <StatItem 
            icon={<Home size={32} className="text-donation-orange" />}
            count="2,480 +"
            label="Lorem ipsum dolor sit amet"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
