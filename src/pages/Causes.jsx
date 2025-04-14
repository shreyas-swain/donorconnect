import React from 'react';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

const Causes = () => {
  const navigate = useNavigate();
  // const { isAuthenticated } = useAuth();
  
  // Mock causes data
  const causes = [
    {
      id: 1,
      title: "Children's Education",
      description: "Support education initiatives for underprivileged children around the world.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop",
      progress: 75,
      raised: 15000,
      goal: 20000,
    },
    {
      id: 2,
      title: "Clean Water Access",
      description: "Help provide clean and safe drinking water to communities in need.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=1470&auto=format&fit=crop",
      progress: 60,
      raised: 30000,
      goal: 50000,
    },
    {
      id: 3,
      title: "Healthcare for All",
      description: "Expand access to quality healthcare services in underserved regions.",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1470&auto=format&fit=crop",
      progress: 45,
      raised: 90000,
      goal: 200000,
    },
    {
      id: 4,
      title: "Disaster Relief",
      description: "Provide immediate assistance to areas affected by natural disasters.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1470&auto=format&fit=crop",
      progress: 90,
      raised: 180000,
      goal: 200000,
    },
    {
      id: 5,
      title: "Environmental Conservation",
      description: "Protect endangered ecosystems and promote sustainable practices.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1470&auto=format&fit=crop",
      progress: 30,
      raised: 15000,
      goal: 50000,
    },
    {
      id: 6,
      title: "Animal Welfare",
      description: "Support shelters and initiatives that protect and care for animals in need.",
      image: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=1470&auto=format&fit=crop",
      progress: 65,
      raised: 32500,
      goal: 50000,
    },
  ];

  // const handleDonate = (causeId) => {
  //   if (isAuthenticated) {
  //     navigate(`/payment?causeId=${causeId}`);
  //   } else {
  //     navigate('/login', { state: { from: { pathname: `/payment?causeId=${causeId}` } } });
  //   }
  // };

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <div className="relative bg-dark-bg text-white py-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469571486292-b53601020a8a?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="relative container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Causes</h1>
          <p className="text-lg">Home / Causes</p>
        </div>
      </div>
      
      {/* Causes Grid */}
      <section className="py-16 bg-light-bg flex-grow">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Causes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We support a wide range of humanitarian and environmental initiatives. 
              Every donation, no matter how small, helps make a significant difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((cause) => (
              <div key={cause.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={cause.image} 
                    alt={cause.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{cause.title}</h3>
                  <p className="text-gray-600 mb-4">{cause.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div 
                      className="bg-donation-orange h-2.5 rounded-full" 
                      style={{ width: `${cause.progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-gray-600">Raised: <span className="font-bold text-donation-orange">${cause.raised.toLocaleString()}</span></span>
                    <span className="text-gray-600">Goal: <span className="font-bold">${cause.goal.toLocaleString()}</span></span>
                  </div>
                  
                  <Button 
                    className="w-full bg-donation-orange hover:bg-donation-orange/90"
                    onClick={() => handleDonate(cause.id)}
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Get Involved */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-donation-orange/10 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Want to Start Your Own Fundraiser?</h2>
                <p className="text-gray-700 mb-6">
                  If you represent a charitable organization or have a cause close to your heart, 
                  you can start your own fundraiser on our platform to reach donors worldwide.
                </p>
                <div className="space-x-4">
                  <Button 
                    className="bg-donation-orange hover:bg-donation-orange/90"
                    onClick={() => navigate('/signup')}
                  >
                    Register Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-donation-orange text-donation-orange hover:bg-donation-orange hover:text-white"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1470&auto=format&fit=crop" 
                  alt="Fundraising team" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Causes;
