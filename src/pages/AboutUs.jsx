import React from 'react';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <div className="relative bg-dark-bg text-white py-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="relative container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Home / About Us</p>
        </div>
      </div>
      
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At DonorConnect, our mission is to create a seamless bridge between generous donors and impactful charitable organizations. We believe that giving should be simple, transparent, and meaningful.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2020, DonorConnect emerged from a simple idea: to make charitable giving accessible to everyone while ensuring that every dollar donated reaches those who need it most.
              </p>
              <p className="text-gray-600">
                We're committed to transparency, security, and creating lasting positive change in communities worldwide. Our platform enables donors to connect directly with verified charities and see the real impact of their contributions.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1470&auto=format&fit=crop" 
                alt="Team meeting" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-light-bg">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-donation-orange/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-donation-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Transparency</h3>
              <p className="text-gray-600">We believe in complete transparency in all operations. Donors can track where their money goes and see the impact of their contributions.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-donation-orange/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-donation-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Security & Trust</h3>
              <p className="text-gray-600">We rigorously verify all charity partners and ensure secure donation processing to maintain the highest level of trust with our users.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-donation-orange/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-donation-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Community Impact</h3>
              <p className="text-gray-600">We focus on creating meaningful impact within communities through effective allocation of resources and strategic partnerships.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Michael Anderson</h3>
              <p className="text-donation-orange">CEO & Founder</p>
              <p className="text-gray-600 mt-2">With over 15 years in nonprofit management, Michael brings vision and leadership to DonorConnect.</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop" 
                  alt="COO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Sarah Johnson</h3>
              <p className="text-donation-orange">COO</p>
              <p className="text-gray-600 mt-2">Sarah oversees operations and ensures that our platform runs smoothly for all users.</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop" 
                  alt="CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">David Chen</h3>
              <p className="text-donation-orange">CTO</p>
              <p className="text-gray-600 mt-2">David leads our technical team and develops innovative solutions to enhance user experience.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-light-bg">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Get In Touch</h2>
              <p className="text-gray-600">Have questions or want to learn more about our platform? Reach out to us!</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-donation-orange/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-donation-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-donation-orange">info@donorconnect.org</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-donation-orange/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-donation-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-donation-orange">+1 (555) 123-4567</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-donation-orange/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-donation-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">123 Charity Lane<br />San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
