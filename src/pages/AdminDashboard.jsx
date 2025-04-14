import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, X, Eye, User, Building } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminDashboard = () => {
//   const { user, profile, isAdmin } = useAuth();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [centerRequests, setCenterRequests] = useState([
    {
      id: 1,
      name: "Hope Center",
      email: "hope@example.com",
      address: "123 Main St, City",
      status: "pending",
      documents: ["license.pdf", "tax_form.pdf"]
    },
    {
      id: 2,
      name: "Care Foundation",
      email: "care@example.com",
      address: "456 Oak Ave, Town",
      status: "pending",
      documents: ["nonprofit_cert.pdf", "mission_docs.pdf"]
    },
    {
      id: 3,
      name: "Helping Hands",
      email: "helping@example.com",
      address: "789 Pine Rd, Village",
      status: "pending",
      documents: ["certification.pdf", "registration.pdf"]
    }
    ]);

    const handleViewDetails = (requestId) => {
        navigate(`/admin/center-verification/${requestId}`);
    };

    const handleApprove = (requestId) => {
        setCenterRequests(prevRequests => 
            prevRequests.map(request => 
                request.id === requestId ? {...request, status: 'approved'} : request
            )
        );
        toast({
        title: "Center Approved",
        description: "The charitable center has been approved successfully.",
        });
    };

  const handleReject = (requestId) => {
    setCenterRequests(prevRequests => 
      prevRequests.map(request => 
        request.id === requestId ? {...request, status: 'rejected'} : request
      )
    );
    toast({
      title: "Center Rejected",
      description: "The charitable center has been rejected.",
    });
  };

//   if (!isAdmin) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <div className="flex-1 container-custom py-16 text-center">
//           <h1 className="text-2xl font-bold text-red-500">Access Denied</h1>
//           <p className="mt-4">You don't have permission to access this page.</p>
//           <Button 
//             className="mt-6 bg-donation-orange hover:bg-donation-orange/90"
//             onClick={() => navigate('/dashboard')}
//           >
//             Back to Dashboard
//           </Button>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <div className="flex-1 container-custom py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage centers and verification requests</p>
        </div>

        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="pending" className="text-base">Pending Requests</TabsTrigger>
            <TabsTrigger value="approved" className="text-base">Approved Centers</TabsTrigger>
            <TabsTrigger value="rejected" className="text-base">Rejected Requests</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending">
            <div className="grid gap-6">
              {centerRequests.filter(request => request.status === 'pending').map(request => (
                <Card key={request.id} className="overflow-hidden">
                  <CardHeader className="bg-gray-50 py-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center gap-2">
                        <Building size={20} className="text-donation-orange" />
                        {request.name}
                      </CardTitle>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Contact Email</p>
                        <p className="mt-1">{request.email}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Address</p>
                        <p className="mt-1">{request.address}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Documents</p>
                        <p className="mt-1">{request.documents.length} documents provided</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => handleViewDetails(request.id)}
                      >
                        <Eye size={16} />
                        View Details
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex items-center gap-1 bg-green-600 hover:bg-green-700"
                        onClick={() => handleApprove(request.id)}
                      >
                        <Check size={16} />
                        Approve
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => handleReject(request.id)}
                      >
                        <X size={16} />
                        Reject
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {centerRequests.filter(request => request.status === 'pending').length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-lg border">
                  <p className="text-gray-500">No pending verification requests.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="approved">
            <div className="grid gap-6">
              {centerRequests.filter(request => request.status === 'approved').map(request => (
                <Card key={request.id}>
                  <CardHeader className="bg-gray-50 py-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center gap-2">
                        <Building size={20} className="text-donation-orange" />
                        {request.name}
                      </CardTitle>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Approved
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Contact Email</p>
                        <p className="mt-1">{request.email}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Address</p>
                        <p className="mt-1">{request.address}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => handleViewDetails(request.id)}
                      >
                        <Eye size={16} />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {centerRequests.filter(request => request.status === 'approved').length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-lg border">
                  <p className="text-gray-500">No approved centers yet.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="rejected">
            <div className="grid gap-6">
              {centerRequests.filter(request => request.status === 'rejected').map(request => (
                <Card key={request.id}>
                  <CardHeader className="bg-gray-50 py-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center gap-2">
                        <Building size={20} className="text-donation-orange" />
                        {request.name}
                      </CardTitle>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Rejected
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Contact Email</p>
                        <p className="mt-1">{request.email}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Address</p>
                        <p className="mt-1">{request.address}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => handleViewDetails(request.id)}
                      >
                        <Eye size={16} />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {centerRequests.filter(request => request.status === 'rejected').length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-lg border">
                  <p className="text-gray-500">No rejected requests.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
