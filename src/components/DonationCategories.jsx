import React from 'react';
import DonationCard from './DonationCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DonationCategories = () => {
  const donationItems = [
    {
      id: 1,
      image: '/public/lovable-uploads/children-1.jpeg',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit.',
      progress: 65,
      category: 'Donate to',
      link: '/donate/children',
    },
    {
      id: 2,
      image: '/public/lovable-uploads/children-2.jpeg',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit.',
      progress: 45,
      category: 'Donate to',
      link: '/donate/shelter',
    },
    {
      id: 3,
      image: '/public/lovable-uploads/children-3.jpeg',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit.',
      progress: 25,
      category: 'Donate to',
      link: '/donate/food',
    },
  ];

  return (
    <section className="py-16 bg-light-bg">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-donation-orange text-lg mb-2">Lorem ipsum dolor sit amet</h3>
            <h2 className="text-2xl font-bold">Lorem ipsum dolor sit amet</h2>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-donation-orange hover:border-donation-orange hover:text-white transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-donation-orange hover:border-donation-orange hover:text-white transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donationItems.map((item) => (
            <DonationCard 
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              progress={item.progress}
              category={item.category}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationCategories;
