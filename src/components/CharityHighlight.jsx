import React from 'react';
import { Users } from 'lucide-react';
import { Button } from './ui/button';

const CharityHighlight = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-donation-orange text-white rounded-lg inline-flex items-center p-4 mb-6">
              <Users size={32} className="mr-3" />
              <span className="text-xl font-bold">20,000+ Clients</span>
            </div>
            
            <h3 className="text-donation-orange text-xl font-medium mb-3">Donate To Our Charity</h3>
            <h2 className="text-3xl font-bold mb-6">Lorem ipsum dolor sit amet</h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, 
                sapien dui mattis dui, non pulvinar lorem felis nec erat.
              </p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, 
                sapien dui mattis dui, non pulvinar lorem felis nec erat.
              </p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, 
                sapien dui mattis dui, non pulvinar lorem felis nec erat.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <div>
                <div className="text-donation-orange font-bold text-2xl">28%</div>
                <div className="text-sm">Lorem ipsum</div>
              </div>
              <div>
                <div className="text-donation-orange font-bold text-2xl">$232k</div>
                <div className="text-sm">Lorem ipsum</div>
              </div>
              <div>
                <div className="text-donation-orange font-bold text-2xl">$134k</div>
                <div className="text-sm">Lorem ipsum</div>
              </div>
            </div>
            
            <Button className="donation-btn mt-6 uppercase">Donate Now</Button>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="/public/lovable-uploads/8a92bcea-2e57-49bf-920c-07869b5bf53d.png" 
              alt="Helping Hands" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharityHighlight;
