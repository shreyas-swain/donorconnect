import React, { useEffect, useState } from 'react';
//import { useAuth } from '../contexts/AuthContext';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import CharityVerificationModal from '../components/CharityVerificationModal';

const Dashboard = () => {
//   const { user, profile, updateUserProfile } = useAuth();
//   const [showVerificationModal, setShowVerificationModal] = useState(false);
//   const [verificationSubmitted, setVerificationSubmitted] = useState(false);

//   useEffect(() => {
//     // Show verification modal only once when first visiting dashboard
//     const hasSeenModal = localStorage.getItem('hasSeenCharityModal');
//     if (!hasSeenModal && user) {
//       setShowVerificationModal(true);
//       localStorage.setItem('hasSeenCharityModal', 'true');
//     }
//   }, [user]);

//   const handleVerificationSubmit = async (documents) => {
//     try {
//       // In a real app, you would upload these documents and update the user's profile
//       await updateUserProfile({ 
//         charity_verification_submitted: true,
//         // You would store document references here
//       });
//       setVerificationSubmitted(true);
//       setShowVerificationModal(false);
//     } catch (error) {
//       console.error('Error submitting verification:', error);
//     }
//   };

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <div className="flex-1 container-custom py-8">
        <div className="mb-8">
          {/* <h1 className="text-3xl font-bold mb-2">Welcome, {profile?.first_name || user?.email}</h1> */}
          <p className="text-gray-600">Manage your donations and account settings here</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Donations</h2>
            <p className="text-gray-500 mb-4">You haven't made any donations yet.</p>
            <Button 
              variant="default"
              className="bg-donation-orange hover:bg-donation-orange/90"
              onClick={() => window.location.href = "/donation-list"}
            >
              Browse Campaigns
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Account Information</h2>
            <div className="space-y-3">
              <div>
                <span className="font-medium">Email: </span>
                {/* <span>{user?.email}</span> */}
              </div>
              {/* {profile?.charity_verification_submitted && (
                <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="text-yellow-800">Your charity verification is under review.</p>
                </div>
              )}
              {!profile?.charity_verification_submitted && (
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setShowVerificationModal(true)}
                >
                  Register as Charitable Center
                </Button>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* {showVerificationModal && (
        <CharityVerificationModal
          onClose={() => setShowVerificationModal(false)}
          onSubmit={handleVerificationSubmit}
        />
      )} */}
    </div>
  );
};

export default Dashboard;
