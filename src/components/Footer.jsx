import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-300">
              DonorConnect connects donors with nearby donation centers and NGOs supporting 
              orphanages and vulnerable groups, optimizing the donation process.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="bg-white/10 hover:bg-donation-orange p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-donation-orange p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-donation-orange p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-donation-orange p-2 rounded-full transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-donation-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-donation-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/causes" className="text-gray-300 hover:text-donation-orange transition-colors">
                  Our Causes
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-donation-orange transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-donation-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-donation-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Donate Now</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/donate/children" className="text-gray-300 hover:text-donation-orange transition-colors">
                  Children Support
                </Link>
              </li>
              <li>
                <Link to="/donate/education" className="text-gray-300 hover:text-donation-orange transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/donate/water" className="text-gray-300 hover:text-donation-orange transition-colors">
                  Clean Water
                </Link>
              </li>
              <li>
                <Link to="/donate/medical" className="text-gray-300 hover:text-donation-orange transition-colors">
                  Medical Support
                </Link>
              </li>
              <li>
                <Link to="/donate/food" className="text-gray-300 hover:text-donation-orange transition-colors">
                  Healthy Food
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-donation-orange mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  123 Charity Street, New Delhi, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-donation-orange flex-shrink-0" size={18} />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-donation-orange transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-donation-orange flex-shrink-0" size={18} />
                <a href="mailto:info@homelyhub.org" className="text-gray-300 hover:text-donation-orange transition-colors">
                  info@donorconnect.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 DonorConnect. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-donation-orange transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-donation-orange transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 text-sm hover:text-donation-orange transition-colors">
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
