
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, ArrowLeft, Download, File, Eye } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/text-area';
import { Label } from '@/components/ui/label';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const CenterVerificationDetails = () => {
  const { id } = useParams();
//   const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Document viewer state
  const [viewingDocument, setViewingDocument] = useState(null);
  
  // Rejection dialog state
  const [rejectingDocument, setRejectingDocument] = useState(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [comment, setComment] = useState('');
  const [showRejectAlert, setShowRejectAlert] = useState(false);
  
  const [centerRequest, setCenterRequest] = useState({
    id: parseInt(id),
    name: "Care Foundation",
    email: "care@example.com",
    address: "456 Oak Ave, Town",
    phone: "555-123-4567",
    website: "www.carefoundation.org",
    description: "Care Foundation is dedicated to providing support and resources to homeless individuals and families. Our mission is to help those in need with shelter, food, and assistance in finding permanent housing solutions.",
    status: "pending",
    documents: [
      { 
        id: 1,
        name: "nonprofit_cert.pdf", 
        type: "Nonprofit Certification", 
        size: "1.2 MB",
        status: "pending", 
        rejectionReason: null 
      },
      { 
        id: 2,
        name: "mission_docs.pdf", 
        type: "Mission Statement", 
        size: "0.8 MB",
        status: "pending", 
        rejectionReason: null 
      },
      { 
        id: 3,
        name: "tax_form.pdf", 
        type: "Tax Exemption Document", 
        size: "2.1 MB",
        status: "pending", 
        rejectionReason: null 
      }
    ],
    submittedAt: "2025-04-10",
    contactPerson: "Jane Smith",
    contactPosition: "Executive Director"
  });

  const handleApprove = () => {
    const allDocsApproved = centerRequest.documents.every(doc => doc.status === 'approved');
    
    if (!allDocsApproved) {
      toast({
        title: "Documents Not Verified",
        description: "Please verify all documents before approving the center.",
        variant: "destructive"
      });
      return;
    }
    
    setCenterRequest(prev => ({...prev, status: 'approved'}));
    toast({
      title: "Center Approved",
      description: "The charitable center has been approved successfully.",
    });
  };

  const handleReject = () => {
    setCenterRequest(prev => ({...prev, status: 'rejected'}));
    toast({
      title: "Center Rejected",
      description: "The charitable center has been rejected.",
    });
  };

  const handleDownload = (document) => {
    toast({
      title: "Document Download",
      description: `Downloading ${document.name}...`,
    });
    // In a real app, this would trigger an actual file download
  };

  const handleViewDocument = (document) => {
    setViewingDocument(document);
    // In a real app, this would show a document preview
  };

  const handleApproveDocument = (documentId) => {
    setCenterRequest(prev => ({
      ...prev,
      documents: prev.documents.map(doc => 
        doc.id === documentId ? { ...doc, status: 'approved', rejectionReason: null, comment: null } : doc
      )
    }));
    
    toast({
      title: "Document Approved",
      description: "Document has been approved successfully.",
    });
  };

  const handleRejectDocumentClick = (document) => {
    setRejectingDocument(document);
    setRejectionReason('');
    setComment('');
  };

  const handleRejectDocument = () => {
    if (!rejectionReason.trim()) {
      setShowRejectAlert(true);
      return;
    }
    
    setCenterRequest(prev => ({
      ...prev,
      documents: prev.documents.map(doc => 
        doc.id === rejectingDocument.id 
          ? { ...doc, status: 'rejected', rejectionReason: rejectionReason.trim(), comment: comment.trim() } 
          : doc
      )
    }));
    
    toast({
      title: "Document Rejected",
      description: "Document has been rejected with provided reason.",
    });
    
    setRejectingDocument(null);
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
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate('/admin/dashboard')}
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Button>

        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Center Verification Details</h1>
          <div className="flex items-center gap-2">
            <p className="text-gray-600">Application ID: {centerRequest.id}</p>
            {centerRequest.status === 'pending' && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Pending
              </span>
            )}
            {centerRequest.status === 'approved' && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Approved
              </span>
            )}
            {centerRequest.status === 'rejected' && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Rejected
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader className="bg-gray-50">
                <CardTitle>Organization Information</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Organization Name</p>
                    <p className="mt-1 font-medium">{centerRequest.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email Address</p>
                    <p className="mt-1">{centerRequest.email}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Phone Number</p>
                    <p className="mt-1">{centerRequest.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Website</p>
                    <p className="mt-1">{centerRequest.website}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Physical Address</p>
                  <p className="mt-1">{centerRequest.address}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Organization Description</p>
                  <p className="mt-1">{centerRequest.description}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader className="bg-gray-50">
                <CardTitle>Contact Person</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Full Name</p>
                    <p className="mt-1">{centerRequest.contactPerson}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Position</p>
                    <p className="mt-1">{centerRequest.contactPosition}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader className="bg-gray-50">
                <CardTitle>Supporting Documents</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {centerRequest.documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                      <div className="flex items-center gap-3">
                        <File size={20} className="text-blue-500" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-gray-500">{doc.type} • {doc.size}</p>
                          {doc.status === 'approved' && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                              Approved
                            </span>
                          )}
                          {doc.status === 'rejected' && (
                            <div>
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-1">
                                Rejected
                              </span>
                              {doc.rejectionReason && (
                                <p className="text-sm text-red-600 mt-1">Reason: {doc.rejectionReason}</p>
                              )}
                              {doc.comment && (
                                <p className="text-sm text-gray-400 mt-1">Comment: {doc.comment}</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex items-center gap-1"
                          onClick={() => handleViewDocument(doc)}
                        >
                          <Eye size={16} />
                          View
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex items-center gap-1"
                          onClick={() => handleDownload(doc)}
                        >
                          <Download size={16} />
                          Download
                        </Button>
                        
                        {centerRequest.status === 'pending' && doc.status === 'pending' && (
                          <>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="flex items-center gap-1 border-green-500 text-green-600 hover:bg-green-50"
                              onClick={() => handleApproveDocument(doc.id)}
                            >
                              <Check size={16} />
                              Approve
                            </Button>
                            
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="flex items-center gap-1 border-red-500 text-red-600 hover:bg-red-50"
                              onClick={() => handleRejectDocumentClick(doc)}
                            >
                              <X size={16} />
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card>
              <CardHeader className="bg-gray-50">
                <CardTitle>Application Status</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-4">Date Submitted: {centerRequest.submittedAt}</p>
                
                {centerRequest.status === 'pending' && (
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
                      onClick={handleApprove}
                    >
                      <Check size={16} />
                      Approve Application
                    </Button>
                    <Button 
                      variant="destructive" 
                      className="w-full flex items-center justify-center gap-2"
                      onClick={handleReject}
                    >
                      <X size={16} />
                      Reject Application
                    </Button>
                  </div>
                )}
                
                {centerRequest.status === 'approved' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 font-medium">This application has been approved.</p>
                    <p className="text-green-700 text-sm mt-1">The organization can now operate as a verified charitable center.</p>
                  </div>
                )}
                
                {centerRequest.status === 'rejected' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800 font-medium">This application has been rejected.</p>
                    <p className="text-red-700 text-sm mt-1">The organization does not meet our verification requirements.</p>
                  </div>
                )}
                
                <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
                  <p className="font-medium mb-2">Document Verification Status</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Approved</span>
                      <span className="font-medium">{centerRequest.documents.filter(doc => doc.status === 'approved').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rejected</span>
                      <span className="font-medium">{centerRequest.documents.filter(doc => doc.status === 'rejected').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pending</span>
                      <span className="font-medium">{centerRequest.documents.filter(doc => doc.status === 'pending').length}</span>
                    </div>
                    <div className="h-px bg-gray-200 my-2"></div>
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span className="font-medium">{centerRequest.documents.length}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Document Preview Dialog */}
        <Dialog open={viewingDocument !== null} onOpenChange={(open) => !open && setViewingDocument(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Document Preview</DialogTitle>
              <DialogDescription>
                {viewingDocument?.name} ({viewingDocument?.type})
              </DialogDescription>
            </DialogHeader>
            <div className="bg-gray-100 p-10 rounded-md flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <File size={64} className="mx-auto mb-4 text-gray-400" />
                <p>Document preview would appear here.</p>
                <p className="text-sm text-gray-500 mt-1">
                  In a production environment, this would render a PDF or image preview.
                </p>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">Close</Button>
              </DialogClose>
              <Button onClick={() => handleDownload(viewingDocument)}>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Reject Document Dialog */}
        <Dialog open={rejectingDocument !== null} onOpenChange={(open) => !open && setRejectingDocument(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reject Document</DialogTitle>
              <DialogDescription>
                Provide a reason why the document "{rejectingDocument?.name}" is being rejected.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Label htmlFor="rejection-reason" className="block mb-2">Rejection Reason <span className="text-red-500">*</span></Label>
              <Textarea 
                id="rejection-reason" 
                value={rejectionReason} 
                onChange={(e) => setRejectionReason(e.target.value)} 
                placeholder="Explain why this document does not meet requirements..."
                className="min-h-[100px]"
              />
            </div>
            <div className="py-4">
              <Label htmlFor="comment" className="block mb-2">Comment </Label>
              <Textarea 
                id="comment" 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                placeholder="Any extra comment..."
                className="min-h-[100px]"
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button 
                variant="destructive"
                onClick={handleRejectDocument}
              >
                Reject Document
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Alert for empty rejection reason */}
        <AlertDialog open={showRejectAlert} onOpenChange={setShowRejectAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Rejection Reason Required</AlertDialogTitle>
              <AlertDialogDescription>
                You must provide a reason for rejecting this document. Please enter a detailed explanation.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Understood</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Footer />
    </div>
  );
};

export default CenterVerificationDetails;
