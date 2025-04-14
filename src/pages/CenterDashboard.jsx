// import React from "react";
// import Layout from "@/components/layout/Layout";
// import NeedCard from "@/components/ui/NeedCard";
// import { needsData, centerData, getPendingDonors, getCompletedDonors } from "@/lib/mockData";
// import {
//   Bookmark,
//   CheckCircle,
//   Clock,
//   Users
// } from "lucide-react";

// const CenterDashboard = () => {
//   // Count needs by status
//   const pendingNeeds = needsData.filter(need => need.status === "In Progress").length;
//   const fulfilledNeeds = needsData.filter(need => need.status === "Fulfilled").length;
  
//   // Count total pending donors
//   const totalPendingDonors = needsData.reduce((total, need) => {
//     return total + getPendingDonors(need.id).length;
//   }, 0);
  
//   // Count total completed donors
//   const totalCompletedDonors = needsData.reduce((total, need) => {
//     return total + getCompletedDonors(need.id).length;
//   }, 0);
  
//   return (
//     <Layout>
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Welcome back, {centerData.contactPerson}</h1>
//         <p className="text-gray-600">Here's what's happening with your donation needs</p>
//       </div>
      
//       {/* Stats Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
//         {/* Total Needs */}
//         <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
//           <div className="flex items-center">
//             <div className="rounded-full p-3 bg-blue-100 text-blue-600 mr-4">
//               <Bookmark className="h-6 w-6" />
//             </div>
//             <div>
//               <h3 className="text-sm font-medium text-gray-500">Total Needs</h3>
//               <p className="text-2xl font-bold">{needsData.length}</p>
//             </div>
//           </div>
//         </div>
        
//         {/* Active Needs */}
//         <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
//           <div className="flex items-center">
//             <div className="rounded-full p-3 bg-yellow-100 text-yellow-600 mr-4">
//               <Clock className="h-6 w-6" />
//             </div>
//             <div>
//               <h3 className="text-sm font-medium text-gray-500">Active Needs</h3>
//               <p className="text-2xl font-bold">{pendingNeeds}</p>
//             </div>
//           </div>
//         </div>
        
//         {/* Fulfilled Needs */}
//         <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
//           <div className="flex items-center">
//             <div className="rounded-full p-3 bg-green-100 text-green-600 mr-4">
//               <CheckCircle className="h-6 w-6" />
//               </div>
//             <div>
//               <h3 className="text-sm font-medium text-gray-500">Fulfilled Needs</h3>
//               <p className="text-2xl font-bold">{fulfilledNeeds}</p>
//             </div>
//           </div>
//         </div>
        
//         {/* Total Donors */}
//         <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
//           <div className="flex items-center">
//             <div className="rounded-full p-3 bg-purple-100 text-purple-600 mr-4">
//               <Users className="h-6 w-6" />
//             </div>
//             <div>
//               <h3 className="text-sm font-medium text-gray-500">Total Donors</h3>
//               <p className="text-2xl font-bold">{totalPendingDonors + totalCompletedDonors}</p>
//               <span className="text-xs text-gray-500">
//                 {totalPendingDonors} pending · {totalCompletedDonors} completed
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Active Needs Section */}
//       <div className="mb-8">
//         <div className="flex items-center justify-between mb-5">
//           <h2 className="text-xl font-semibold text-gray-800">Active Needs</h2>
//           <button className="text-sm text-blue-600 hover:text-blue-800">
//             View All
//           </button>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {needsData
//             .filter(need => need.status === "In Progress")
//             .map(need => (
//               <NeedCard key={need.id} need={need} />
//             ))}
//         </div>
//       </div>
      
//       {/* Fulfilled Needs Section */}
//       <div>
//         <div className="flex items-center justify-between mb-5">
//           <h2 className="text-xl font-semibold text-gray-800">Fulfilled Needs</h2>
//           <button className="text-sm text-blue-600 hover:text-blue-800">
//             View All
//           </button>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {needsData
//             .filter(need => need.status === "Fulfilled")
//             .map(need => (
//               <NeedCard key={need.id} need={need} />
//             ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CenterDashboard;