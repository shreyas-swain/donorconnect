import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/text-area';

const CharityVerificationModal = ({ onClose, onSubmit }) => {
  const [isCharity, setIsCharity] = useState(null);
  const [documents, setDocuments] = useState({
    registrationNumber: '',
    taxId: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCharity === 'yes') {
      onSubmit(documents);
    } else {
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocuments(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 m-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        
        <h3 className="text-xl font-semibold mb-4">Charity Organization Verification</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {isCharity === null && (
            <div className="space-y-4">
              <p className="text-gray-700">Are you representing a charitable organization?</p>
              <div className="flex space-x-4">
                <Button 
                  type="button"
                  onClick={() => setIsCharity('yes')}
                  variant="outline"
                >
                  Yes
                </Button>
                <Button 
                  type="button"
                  onClick={() => setIsCharity('no')}
                  variant="outline"
                >
                  No
                </Button>
              </div>
            </div>
          )}

          {isCharity === 'yes' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="registrationNumber">Charity Registration Number</Label>
                <Input
                  id="registrationNumber"
                  name="registrationNumber"
                  value={documents.registrationNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="taxId">Tax ID / EIN</Label>
                <Input
                  id="taxId"
                  name="taxId"
                  value={documents.taxId}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="description">Organization Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={documents.description}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full border rounded-md p-2"
                />
              </div>
              
              <p className="text-sm text-gray-500">
                Please note: We'll review your information and may contact you for additional documentation.
              </p>
              
              <div className="flex justify-end space-x-3">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-donation-orange hover:bg-donation-orange/90"
                >
                  Submit for Verification
                </Button>
              </div>
            </div>
          )}

          {isCharity === 'no' && (
            <div className="text-center space-y-4">
              <p>Thank you for your interest! You can still use our platform as a donor.</p>
              <Button 
                type="button" 
                onClick={onClose}
                className="bg-donation-orange hover:bg-donation-orange/90"
              >
                Continue as Donor
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CharityVerificationModal;
