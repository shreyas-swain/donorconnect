import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const DonationDetails = () => {
  const { id } = useParams();
  const [donationAmount, setDonationAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  // Mock data for the donation details
  const donationData = {
    title: 'Support hungry children',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: '/public/lovable-uploads/b60ba327-7e40-42b5-b46e-92dff169b95e.png',
    goalAmount: 50000,
    raisedAmount: 32500,
    donorsCount: 235,
    daysLeft: 15,
    category: 'Children',
    organizer: {
      name: 'John Doe',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop',
      title: 'Project Coordinator'
    },
    relatedCauses: [
      { id: 1, title: 'Help for homeless families', image: '/public/lovable-uploads/d0e30467-847f-4edc-892f-84dfefc13e3c.png', progress: 45 },
      { id: 2, title: 'Better future for girls', image: '/public/lovable-uploads/7f5ced55-69e3-4afd-ba56-78bd4b810dc0.png', progress: 80 },
      { id: 3, title: 'Community support program', image: '/public/lovable-uploads/b60ba327-7e40-42b5-b46e-92dff169b95e.png', progress: 35 }
    ]
  };

  const handleDonationAmountSelection = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseFloat(customAmount) : donationAmount;
    console.log('Donation submitted:', {
      amount: finalAmount,
      email,
      firstName,
      lastName,
      paymentMethod
    });
    // Here would go the actual submission logic
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* <Navbar /> */}

      {/* Banner section */}
      <div className="relative bg-dark-bg text-white py-16">
        <div className="absolute inset-0 bg-[url('/public/lovable-uploads/b60ba327-7e40-42b5-b46e-92dff169b95e.png')] bg-cover bg-center opacity-30"></div>
        <div className="relative container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Donation Details</h1>
          <p className="text-lg">Home / Donation Details</p>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left column - Donation details */}
            <div className="lg:col-span-2">
              <img src={donationData.image} alt={donationData.title} className="w-full h-auto rounded-lg mb-8" />
              
              <h2 className="text-2xl font-bold mb-4">{donationData.title}</h2>
              <p className="text-gray-700 mb-6">{donationData.description}</p>
              <p className="text-gray-700 mb-6">{donationData.description}</p>
              
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-donation-orange font-semibold">${donationData.raisedAmount.toLocaleString()} raised</span>
                  <span className="text-gray-500">Goal: ${donationData.goalAmount.toLocaleString()}</span>
                </div>
                <div className="progress-bar mb-2">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(donationData.raisedAmount / donationData.goalAmount) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{donationData.donorsCount} Donors</span>
                  <span>{donationData.daysLeft} Days Left</span>
                </div>
              </div>
              
              {/* Donation form */}
              <div className="bg-light-bg p-6 rounded-lg mb-10">
                <h3 className="text-xl font-bold mb-6">I Want To Donate:</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {[50, 100, 150, 200].map((amount) => (
                    <button 
                      key={amount}
                      onClick={() => handleDonationAmountSelection(amount)}
                      className={`py-2 px-4 rounded-md text-center transition-colors ${
                        donationAmount === amount && !customAmount 
                          ? 'bg-donation-orange text-white' 
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 text-sm">$ Custom Amount</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-md py-2 px-4" 
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                </div>
                
                {/* Select payment method */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Select Payment Method</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button 
                      onClick={() => setPaymentMethod('credit-card')}
                      className={`p-3 border rounded-md flex items-center justify-center ${
                        paymentMethod === 'credit-card' 
                          ? 'border-donation-orange bg-donation-orange/10' 
                          : 'border-gray-300'
                      }`}
                    >
                      Credit Card
                    </button>
                    <button 
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-3 border rounded-md flex items-center justify-center ${
                        paymentMethod === 'paypal' 
                          ? 'border-donation-orange bg-donation-orange/10' 
                          : 'border-gray-300'
                      }`}
                    >
                      PayPal
                    </button>
                  </div>
                </div>
                
                {/* Personal information */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Personal Information</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <input 
                      type="text" 
                      className="border border-gray-300 rounded-md py-2 px-4" 
                      placeholder="First Name *"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input 
                      type="text" 
                      className="border border-gray-300 rounded-md py-2 px-4" 
                      placeholder="Last Name *"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <input 
                    type="email" 
                    className="w-full border border-gray-300 rounded-md py-2 px-4 mb-6" 
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  
                  <Button 
                    onClick={handleSubmit}
                    className="donation-btn w-full uppercase"
                  >
                    Donate Now
                  </Button>
                  
                  <div className="text-right mt-2 text-sm text-gray-500">
                    Total Donation: ${customAmount || donationAmount}
                  </div>
                </div>
              </div>
              
              {/* Additional information */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Lorem ipsum dolor sit amet</h3>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <img 
                      src="/public/lovable-uploads/d0e30467-847f-4edc-892f-84dfefc13e3c.png" 
                      alt="Donation impact" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-donation-orange mr-2">•</span>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-donation-orange mr-2">•</span>
                        <span>Sed do eiusmod tempor incididunt ut labore et dolore</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-donation-orange mr-2">•</span>
                        <span>Ut enim ad minim veniam, quis nostrud exercitation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Search box */}
              <div className="bg-light-bg p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold mb-4">Search Here</h3>
                <div className="flex">
                  <input 
                    type="text" 
                    className="flex-grow border border-gray-300 rounded-l-md py-2 px-4" 
                    placeholder="Search..."
                  />
                  <button className="bg-donation-orange text-white px-4 py-2 rounded-r-md">
                    Search
                  </button>
                </div>
              </div>
              
              {/* Organizer info */}
              <div className="bg-light-bg p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold mb-4">Organizer</h3>
                <div className="flex items-center mb-3">
                  <img 
                    src={donationData.organizer.image} 
                    alt={donationData.organizer.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">{donationData.organizer.name}</p>
                    <p className="text-sm text-gray-500">{donationData.organizer.title}</p>
                  </div>
                </div>
                <div className="mb-2 text-sm">
                  <span className="text-donation-orange font-semibold">235 Donors</span> donated so far
                </div>
                <div className="text-sm">
                  <span className="text-donation-orange font-semibold">15 days</span> left to donate
                </div>
              </div>
              
              {/* Popular Projects */}
              <div className="bg-light-bg p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold mb-4">Popular Projects</h3>
                <div className="space-y-4">
                  {donationData.relatedCauses.map((cause) => (
                    <Link to={`/donation/${cause.id}`} key={cause.id} className="flex items-start group">
                      <img 
                        src={cause.image} 
                        alt={cause.title} 
                        className="w-20 h-20 object-cover rounded-md mr-3"
                      />
                      <div>
                        <h4 className="font-medium group-hover:text-donation-orange transition-colors">{cause.title}</h4>
                        <div className="progress-bar mt-2 mb-1" style={{height: '4px'}}>
                          <div 
                            className="progress-fill" 
                            style={{ width: `${cause.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-donation-orange">{cause.progress}% Funded</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-light-bg p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Subscribe Us</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Subscribe to our newsletter to receive the latest updates about our services
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    className="w-full border border-gray-300 rounded-md py-2 px-4" 
                    placeholder="Your Email Address"
                  />
                  <Button className="donation-btn w-full uppercase">
                    Subscribe
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    Never share your email with other parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DonationDetails;
