
import React, { useState } from "react";
import { Calendar, MapPin, Phone, Mail } from "lucide-react";

const DonorCard = ({ donor, onViewDetails }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const isPending = donor.donationDetails.status === "Pending";
  const dateLabel = isPending ? "Expected" : "Donated";
  const dateValue = isPending 
    ? donor.donationDetails.scheduledDate 
    : donor.donationDetails.donationDate;
    
  return (
    <div 
      className="relative bg-white rounded-lg border border-gray-200 p-4 mb-4 shadow-sm hover:shadow-md transition-all"
      onMouseEnter={() => isPending && setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-800">{donor.name}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Calendar className="h-4 w-4 mr-1" /> 
            <span>{dateLabel}: {dateValue}</span>
          </div>
          <p className="text-gray-600 mt-2">
            Donating: {donor.donationDetails.items} ({donor.donationDetails.quantity})
          </p>
        </div>
        
        <span 
          className={`text-xs font-medium px-2.5 py-0.5 rounded ${
            isPending ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
          }`}
        >
          {donor.donationDetails.status}
        </span>
      </div>
      
      {isPending && (
        <button 
          onClick={() => onViewDetails(donor)}
          className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          View Details
        </button>
      )}
      
      {/* Animated details panel - shown on hover for pending donations */}
      {showDetails && isPending && (
        <div className="absolute left-0 right-0 top-full z-10 bg-gray-50 border-t border-gray-200 p-4 rounded-b-lg shadow-md animate-fade-in">
          <h4 className="font-medium text-gray-700 mb-2">Contact Information</h4>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <Mail className="h-4 w-4 mr-2 text-gray-500" />
              <span>{donor.email}</span>
            </div>
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-2 text-gray-500" />
              <span>{donor.phone}</span>
            </div>
            <div className="flex items-start text-sm">
              <MapPin className="h-4 w-4 mr-2 text-gray-500" />
              <span>{donor.location}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorCard;
