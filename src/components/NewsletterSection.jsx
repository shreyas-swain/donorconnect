import React from 'react';
import { Button } from './ui/button';

const NewsletterSection = () => {
  return (
    <section className="py-12 bg-dark-bg text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-donation-orange font-medium">Get Latest Updates</h3>
            <h2 className="text-2xl font-bold">Get Our Newsletter</h2>
          </div>
          
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className="px-4 py-2 rounded-l-full bg-white text-gray-800 focus:outline-none flex-grow"
            />
            <Button className="bg-donation-orange hover:bg-opacity-90 rounded-r-full text-white px-6">
              SUBSCRIBE
            </Button>
          </div>
        </div>
        <div className="text-center text-sm mt-6 text-gray-400">
          © 2022 by Website Template. All rights reserved
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
