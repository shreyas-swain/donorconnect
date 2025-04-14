import React from 'react';
import { Button } from './ui/button';

const DonationForm = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/0cba4437-c5cd-4b0f-beff-15062c01f068.png')] bg-cover bg-center opacity-75"></div>
      <div className="absolute inset-0 bg-dark-bg bg-opacity-75"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-xl">
            <div className="mb-6">
              <div className="text-donation-orange font-bold">$20,000 donated of $30,000 goal</div>
              <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
                <div className="h-full bg-donation-orange rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-6 text-white">I Want To Donate:</h3>
            
            <div className="grid grid-cols-4 gap-4 mb-6">
              <button className="bg-gray-700 hover:bg-donation-orange transition-colors rounded-md py-2 px-4 text-center text-white">
                $50
              </button>
              <button className="bg-gray-700 hover:bg-donation-orange transition-colors rounded-md py-2 px-4 text-center text-white">
                $100
              </button>
              <button className="bg-gray-700 hover:bg-donation-orange transition-colors rounded-md py-2 px-4 text-center text-white">
                $150
              </button>
              <button className="bg-gray-700 hover:bg-donation-orange transition-colors rounded-md py-2 px-4 text-center text-white">
                $200
              </button>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 text-sm text-white">$ Custom Amount</label>
              <input 
                type="text" 
                className="w-full bg-gray-700 rounded-md py-2 px-4 text-white border border-gray-600" 
                placeholder="Enter amount"
              />
            </div>
            
            <Button className="donation-btn w-full uppercase bg-donation-orange hover:bg-donation-orange/90">Donate Now</Button>
            
            <div className="mt-6 grid grid-cols-1 gap-2">
              <div className="bg-gray-700 p-3 rounded-md hover:bg-gray-600 cursor-pointer text-white">
                Children Care
              </div>
              <div className="bg-gray-700 p-3 rounded-md hover:bg-gray-600 cursor-pointer text-white">
                Women & Girl
              </div>
              <div className="bg-gray-700 p-3 rounded-md hover:bg-gray-600 cursor-pointer text-white">
                Natural Disaster
              </div>
              <div className="bg-gray-700 p-3 rounded-md hover:bg-gray-600 cursor-pointer text-white">
                Medical Care
              </div>
              <div className="bg-gray-700 p-3 rounded-md hover:bg-gray-600 cursor-pointer text-white">
                Homeless People
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;
