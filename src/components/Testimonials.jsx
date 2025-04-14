import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:border-r border-gray-200">
            <h3 className="text-donation-orange text-xl font-medium mb-2">Our Valuable Feedbacks</h3>
            <h2 className="text-2xl font-bold mb-6">Lorem ipsum dolor sit amet</h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, 
              sapien dui mattis dui, non pulvinar lorem felis nec erat. 
            </p>
            
            <button className="px-6 py-2 bg-donation-orange text-white rounded-full 
              hover:bg-opacity-90 transition-all duration-300">
              VIEW ALL FEEDBACKS
            </button>
          </div>
          
          <div className="md:w-1/2 p-8 relative">
            <div className="absolute top-8 right-8 flex">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold text-donation-orange mb-6">
              05
            </div>
            
            <p className="text-gray-700 mb-6">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, 
              sapien dui mattis dui, non pulvinar lorem felis nec erat."
            </p>
            
            <div>
              <h4 className="font-semibold text-lg">Author Maxwell</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
