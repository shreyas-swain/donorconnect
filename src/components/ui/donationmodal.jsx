import React from "react";

const DonationModal = ({ donor, onClose }) => {
  if (!donor) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Donation Details</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Donor Information</h3>
              <p className="text-lg font-medium text-gray-800">{donor.name}</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{donor.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{donor.phone}</span>
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  <span>{donor.location}</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-medium text-gray-700 mb-2">Donation Information</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Package className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                  <div>
                    <p className="font-medium">{donor.donationDetails.items}</p>
                    <p className="text-sm text-gray-600">Quantity: {donor.donationDetails.quantity}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <p className="text-sm">
                    Expected delivery: {donor.donationDetails.scheduledDate}
                  </p>
                </div>
                
                {donor.donationDetails.notes && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700">Notes:</p>
                    <p className="text-sm text-gray-600 mt-1">{donor.donationDetails.notes}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
