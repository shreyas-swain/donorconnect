import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ id, image, title, description, progress, category, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-donation-orange text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-4">{title}</h3>
        <div className="mb-4">
          <div className="progress-bar mb-2">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="text-sm font-medium flex justify-between">
            <span className="text-donation-orange">{progress}% Raised</span>
            <span className="text-gray-500">Goal: $50,000</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between mt-4">
          <Link to={`/donation/${id}`} className="text-sm text-gray-500 hover:text-donation-orange">
            VIEW DETAILS
          </Link>
          <Link to={`/donation/${id}`} className="text-sm text-donation-orange border border-donation-orange rounded-md px-4 py-1 hover:bg-donation-orange hover:text-white transition-all">
            DONATE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
