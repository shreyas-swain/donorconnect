import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

export const ProtectedRoute = ({ 
  children, 
  requireAdmin = false,
  requireDonation = false,
  redirectTo = '/login'
}) => {
  // const { isAuthenticated, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-donation-orange"></div>
      </div>
    );
  }

  // Check authentication
  if (!isAuthenticated) {
    // Save the location they were trying to access for redirecting after login
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Check admin status if required
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  // If authenticated (and admin if required), render the children
  return children;
};

export default ProtectedRoute;
