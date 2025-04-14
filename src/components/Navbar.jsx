import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <Link to="/" className="font-medium hover:text-donation-orange transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-medium hover:text-donation-orange transition-colors">
              About
            </Link>
            <Link to="/event" className="font-medium hover:text-donation-orange transition-colors">
              Event
            </Link>
            <Link to="/donation-list" className="font-medium hover:text-donation-orange transition-colors">
              Donation Lists
            </Link>
            <div className="relative group">
              <button className="font-medium hover:text-donation-orange transition-colors flex items-center gap-1">
                Pages <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-40">
                <Link to="/fundraising" className="block py-2 px-3 hover:bg-gray-100 rounded-md">
                  Fundraising
                </Link>
                <Link to="/causes" className="block py-2 px-3 hover:bg-gray-100 rounded-md">
                  Causes
                </Link>
                <Link to="/blog" className="block py-2 px-3 hover:bg-gray-100 rounded-md">
                  Blog
                </Link>
              </div>
            </div>
            <Link to="/contact" className="font-medium hover:text-donation-orange transition-colors">
              Contact Us
            </Link>
          </div>
          
          {/* {isAuthenticated ? (
            <div className="relative group">
              <Button 
                variant="ghost"
                className="flex items-center gap-2 font-medium hover:text-donation-orange"
              >
                <User size={16} /> {user?.email?.split('@')[0]}
              </Button>
              <div className="absolute top-full right-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-40">
                <Link to="/dashboard" className="block py-2 px-3 hover:bg-gray-100 rounded-md">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left flex items-center gap-2 py-2 px-3 hover:bg-gray-100 rounded-md text-red-600"
                >
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            </div>
          ) : ( */}
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="border-donation-orange text-donation-orange hover:bg-donation-orange hover:text-white"
                onClick={() => navigate('/login')}
              >
                Sign In
              </Button>
              <Button 
                className="bg-donation-orange hover:bg-donation-orange/90"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </div>
          {/* )} */}
          
          <Button className="donation-btn">DONATE NOW</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden rounded-md p-2 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50">
          <div className="flex flex-col p-4 gap-4">
            <Link 
              to="/" 
              className="font-medium py-2 hover:text-donation-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium py-2 hover:text-donation-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/event" 
              className="font-medium py-2 hover:text-donation-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Event
            </Link>
            <Link 
              to="/donation-list" 
              className="font-medium py-2 hover:text-donation-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Donation Lists
            </Link>
            <div className="py-2">
              <button className="font-medium w-full text-left py-2 flex items-center justify-between">
                Pages <ChevronDown size={16} />
              </button>
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link 
                  to="/fundraising" 
                  className="block py-2 hover:text-donation-orange"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fundraising
                </Link>
                <Link 
                  to="/causes" 
                  className="block py-2 hover:text-donation-orange"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Causes
                </Link>
                <Link 
                  to="/blog" 
                  className="block py-2 hover:text-donation-orange"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
            </div>
            <Link 
              to="/contact" 
              className="font-medium py-2 hover:text-donation-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            {/* {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="font-medium py-2 hover:text-donation-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="font-medium py-2 text-left text-red-600 hover:text-red-700 flex items-center gap-2"
                >
                  <LogOut size={16} /> Sign Out
                </button>
              </>
            ) : ( */}
              <div className="flex flex-col gap-3 pt-2">
                <Button 
                  variant="outline" 
                  className="border-donation-orange text-donation-orange hover:bg-donation-orange hover:text-white"
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                >
                  Sign In
                </Button>
                <Button 
                  className="bg-donation-orange hover:bg-donation-orange/90"
                  onClick={() => {
                    navigate('/signup');
                    setIsMenuOpen(false);
                  }}
                >
                  Sign Up
                </Button>
              </div>
            {/* )} */}
            
            {/* <Button 
              className="donation-btn mt-2"
              onClick={() => {
                if (isAuthenticated) {
                  navigate('/donation-list');
                } else {
                  navigate('/login', { state: { from: { pathname: '/donation-list' } } });
                }
                setIsMenuOpen(false);
              }}
            >
              DONATE NOW
            </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
