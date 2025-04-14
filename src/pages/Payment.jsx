// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Label } from '../components/ui/label';
// import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
// import { useToast } from '../components/ui/use-toast';
// import { useAuth } from '../contexts/AuthContext';

// const Payment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const { isAuthenticated, user } = useAuth();
  
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     amount: '',
//     customAmount: '',
//     paymentMethod: 'creditCard',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     anonymous: false,
//     message: '',
//   });
  
//   const [isProcessing, setIsProcessing] = useState(false);
  
//   // Get cause ID from URL query parameter
//   const searchParams = new URLSearchParams(location.search);
//   const causeId = searchParams.get('causeId');
  
//   // Pre-defined donation amounts
//   const donationAmounts = ['25', '50', '100', '250', 'custom'];
  
//   // Mock cause data (in a real app, you would fetch this based on causeId)
//   const causeData = {
//     id: causeId || '1',
//     title: "Children's Education Fund",
//     image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop",
//     description: "Support education initiatives for underprivileged children around the world.",
//   };
  
//   // Pre-fill user email if logged in
//   useEffect(() => {
//     if (isAuthenticated && user) {
//       setFormData(prev => ({
//         ...prev,
//         email: user.email || '',
//         firstName: user.firstName || '',
//         lastName: user.lastName || '',
//       }));
//     }
//   }, [isAuthenticated, user]);
  
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };
  
//   const handleAmountSelect = (amount) => {
//     setFormData(prev => ({
//       ...prev,
//       amount,
//     }));
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsProcessing(true);
    
//     // Validation
//     if (!formData.firstName || !formData.lastName || !formData.email) {
//       toast({
//         variant: "destructive",
//         title: "Missing Information",
//         description: "Please fill in all required fields.",
//       });
//       setIsProcessing(false);
//       return;
//     }
    
//     // Final amount calculation
//     const finalAmount = formData.amount === 'custom' ? 
//       parseFloat(formData.customAmount) : 
//       parseFloat(formData.amount);
    
//     if (isNaN(finalAmount) || finalAmount <= 0) {
//       toast({
//         variant: "destructive",
//         title: "Invalid Amount",
//         description: "Please enter a valid donation amount.",
//       });
//       setIsProcessing(false);
//       return;
//     }
    
//     // Here you would typically call your payment API
//     // For demo purposes, we'll simulate a successful payment
//     setTimeout(() => {
//       toast({
//         title: "Donation Successful!",
//         description: `Thank you for your generous donation of $${finalAmount.toFixed(2)}!`,
//       });
      
//       // Navigate to success page or dashboard
//       navigate('/dashboard');
//       setIsProcessing(false);
//     }, 2000);
//   };
  
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
      
//       <div className="flex-1 py-16 bg-light-bg">
//         <div className="container-custom">
//           <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//             <div className="grid md:grid-cols-5">
//               {/* Cause Information */}
//               <div className="md:col-span-2 bg-donation-orange/10 p-8">
//                 <div className="mb-6">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-2">Donation Details</h2>
//                   <p className="text-sm text-gray-600">You're supporting:</p>
//                   <h3 className="text-xl font-semibold text-donation-orange">{causeData.title}</h3>
//                 </div>
                
//                 <div className="rounded-md overflow-hidden mb-6">
//                   <img 
//                     src={causeData.image} 
//                     alt={causeData.title} 
//                     className="w-full h-40 object-cover"
//                   />
//                 </div>
                
//                 <p className="text-gray-700 mb-6">{causeData.description}</p>
                
//                 <div className="text-sm text-gray-600">
//                   <p className="mb-1">• 100% of your donation goes directly to the cause</p>
//                   <p className="mb-1">• All donations are tax-deductible</p>
//                   <p>• You will receive a receipt via email</p>
//                 </div>
//               </div>
              
//               {/* Payment Form */}
//               <div className="md:col-span-3 p-8">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h2>
                
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* Personal Information */}
//                   <div className="space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="firstName">First Name</Label>
//                         <Input 
//                           id="firstName"
//                           name="firstName"
//                           value={formData.firstName}
//                           onChange={handleChange}
//                           required
//                           className="mt-1"
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="lastName">Last Name</Label>
//                         <Input 
//                           id="lastName"
//                           name="lastName"
//                           value={formData.lastName}
//                           onChange={handleChange}
//                           required
//                           className="mt-1"
//                         />
//                       </div>
//                     </div>
                    
//                     <div>
//                       <Label htmlFor="email">Email</Label>
//                       <Input 
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="mt-1"
//                       />
//                     </div>
//                   </div>
                  
//                   {/* Donation Amount */}
//                   <div>
//                     <Label>Donation Amount</Label>
//                     <div className="grid grid-cols-3 gap-2 mt-2">
//                       {donationAmounts.map((amount) => (
//                         <button
//                           key={amount}
//                           type="button"
//                           className={`p-3 rounded-md border text-center transition ${
//                             formData.amount === amount 
//                               ? 'bg-donation-orange text-white border-donation-orange' 
//                               : 'bg-white text-gray-700 border-gray-300 hover:border-donation-orange'
//                           }`}
//                           onClick={() => handleAmountSelect(amount)}
//                         >
//                           {amount === 'custom' ? 'Custom' : `$${amount}`}
//                         </button>
//                       ))}
//                     </div>
                    
//                     {formData.amount === 'custom' && (
//                       <div className="mt-3">
//                         <Label htmlFor="customAmount">Enter Amount</Label>
//                         <div className="relative mt-1">
//                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <span className="text-gray-500">$</span>
//                           </div>
//                           <Input 
//                             id="customAmount"
//                             name="customAmount"
//                             type="number"
//                             min="1"
//                             step="0.01"
//                             placeholder="0.00"
//                             value={formData.customAmount}
//                             onChange={handleChange}
//                             className="pl-8"
//                           />
//                         </div>
//                       </div>
//                     )}
//                   </div>
                  
//                   {/* Payment Method */}
//                   <div>
//                     <Label>Payment Method</Label>
//                     <div className="mt-2">
//                       <RadioGroup 
//                         defaultValue="creditCard"
//                         value={formData.paymentMethod}
//                         onValueChange={(value) => setFormData(prev => ({ ...prev, paymentMethod: value }))}
//                       >
//                         <div className="flex items-center space-x-2">
//                           <RadioGroupItem value="creditCard" id="creditCard" />
//                           <Label htmlFor="creditCard">Credit / Debit Card</Label>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <RadioGroupItem value="paypal" id="paypal" />
//                           <Label htmlFor="paypal">PayPal</Label>
//                         </div>
//                       </RadioGroup>
//                     </div>
//                   </div>
                  
//                   {/* Credit Card Info */}
//                   {formData.paymentMethod === 'creditCard' && (
//                     <div className="space-y-4">
//                       <div>
//                         <Label htmlFor="cardNumber">Card Number</Label>
//                         <Input 
//                           id="cardNumber"
//                           name="cardNumber"
//                           placeholder="1234 5678 9012 3456"
//                           value={formData.cardNumber}
//                           onChange={handleChange}
//                           className="mt-1"
//                         />
//                       </div>
                      
//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <Label htmlFor="expiryDate">Expiry Date</Label>
//                           <Input 
//                             id="expiryDate"
//                             name="expiryDate"
//                             placeholder="MM/YY"
//                             value={formData.expiryDate}
//                             onChange={handleChange}
//                             className="mt-1"
//                           />
//                         </div>
//                         <div>
//                           <Label htmlFor="cvv">CVV</Label>
//                           <Input 
//                             id="cvv"
//                             name="cvv"
//                             placeholder="123"
//                             value={formData.cvv}
//                             onChange={handleChange}
//                             className="mt-1"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   )}
                  
//                   {/* Message and Anonymous Option */}
//                   <div className="space-y-4">
//                     <div>
//                       <Label htmlFor="message">Leave a Message (Optional)</Label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows="3"
//                         value={formData.message}
//                         onChange={handleChange}
//                         className="mt-1 w-full border rounded-md p-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-donation-orange focus:border-donation-orange"
//                       />
//                     </div>
                    
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id="anonymous"
//                         name="anonymous"
//                         checked={formData.anonymous}
//                         onChange={handleChange}
//                         className="rounded border-gray-300 text-donation-orange focus:ring-donation-orange h-4 w-4"
//                       />
//                       <Label htmlFor="anonymous" className="ml-2">Make this donation anonymous</Label>
//                     </div>
//                   </div>
                  
//                   <Button
//                     type="submit"
//                     className="w-full bg-donation-orange hover:bg-donation-orange/90 py-2 h-12 text-lg"
//                     disabled={isProcessing}
//                   >
//                     {isProcessing ? 'Processing...' : `Complete Donation ${
//                       formData.amount ? 
//                         `($${formData.amount === 'custom' ? formData.customAmount || '0' : formData.amount})` : 
//                         ''
//                     }`}
//                   </Button>
                  
//                   <p className="text-xs text-center text-gray-500 mt-4">
//                     By completing this donation, you agree to our Terms of Service and Privacy Policy.
//                     Your financial information is secured with 256-bit encryption.
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <Footer />
//     </div>
//   );
// };

// export default Payment;
