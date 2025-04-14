
import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../imgs/logo.png'

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="flex items-center">
        {/* <img src={logo} alt="Logo" className="h-8 w-auto" /> */}
        <span className="text-xl font-bold ml-2">DonorConnect</span>
      </div>
    </Link>
  );
};

export default Logo;
