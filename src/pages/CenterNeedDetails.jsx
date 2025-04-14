import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import DonorCard from '@/components/ui/DonorCard';
import DonationModal from '@/components/ui/DonationModal';
import { getNeedDetails, getDonorsByNeedId } from '@/services/donationService';
import { ArrowLeft, Calendar } from 'lucide-react';

const CenterNeedDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDonor, setSelectedDonor] = useState(null);
  
  // Find the need based on the ID from the URL
  const need = needsData.find(need => need.id === id);
  
  // If need doesn't exist, redirect or show error
  if (!need) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-800">Need not found</h2>
          <button 
            onClick={() => navigate('/dashboard')}
            className="mt-4 text-blue-600 hover:text-blue-800 flex items-center mx-auto"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
          </button>
        </div>
      </Layout>
    );
  }
  
  // Get donors for this need
  const donors = getDonorsByNeedId(need.id);
  const pendingDonors = donors.filter(donor => donor.donationDetails.status === "Pending");
  const completedDonors = donors.filter(donor => donor.donationDetails.status === "Completed");
  
  const completionPercentage = getCompletionPercentage(need);
  
  // Handle click to view donation details
  const handleViewDonationDetails = (donor) => {
    setSelectedDonor(donor);
  };
  
  // Handle modal close
  const handleCloseModal = () => {
    setSelectedDonor(null);
  };
  
  return (
    <Layout>
      <button 
        onClick={() => navigate('/dashboard')}
        className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
      </button>
      
      {/* Need Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-gray-800">{need.title}</h1>
              <span 
                className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                  need.status === "Fulfilled" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {need.status}
              </span>
            </div>
            <p className="text-gray-600">{need.description}</p>
          </div>
          
          <div className="mt-4 sm:mt-0">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Edit Need
            </button>
          </div>
        </div>
      </div>
      
      {/* Need Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Progress */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Progress</h3>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-2xl font-bold">{completionPercentage}%</span>
            <span className="text-gray-500 text-sm">
              ({need.currentQuantity} of {need.targetQuantity})
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
            <div 
              className={`h-2.5 rounded-full ${need.status === "Fulfilled" ? "bg-green-500" : "bg-blue-500"}`}
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Donors */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Donors</h3>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold">{donors.length}</span>
            <span className="text-gray-500 text-sm">
              ({pendingDonors.length} pending · {completedDonors.length} completed)
            </span>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Timeline</h3>
          <div className="flex items-center gap-1 mb-1">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-700">
              {need.startDate} - {need.endDate}
            </span>
          </div>
        </div>
      </div>
      
      {/* Donors List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pending Donors */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Pending Donations ({pendingDonors.length})
          </h2>
          {pendingDonors.length > 0 ? (
            pendingDonors.map(donor => (
              <DonorCard 
                key={donor.id} 
                donor={donor} 
                onViewDetails={handleViewDonationDetails} 
              />
            ))
          ) : (
            <p className="text-gray-500">No pending donations</p>
          )}
        </div>
        
        {/* Completed Donors */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Completed Donations ({completedDonors.length})
          </h2>
          {completedDonors.length > 0 ? (
            completedDonors.map(donor => (
              <DonorCard 
                key={donor.id} 
                donor={donor} 
                onViewDetails={handleViewDonationDetails} 
              />
            ))
          ) : (
            <p className="text-gray-500">No completed donations</p>
          )}
        </div>
      </div>
      
      {/* Donation Details Modal */}
      <DonationModal 
        donor={selectedDonor} 
        onClose={handleCloseModal} 
      />
    </Layout>
  );
};

export default CenterNeedDetails;