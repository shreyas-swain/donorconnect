
import Layout from "@/components/layout/Layout";
import { centerData } from "@/lib/mockData";
import { 
  Calendar, 
  Clock, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Users,
  UserCheck
} from "lucide-react";

const Profile = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Center Profile</h1>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-white">
                <img 
                  src={centerData.profileImage || "/placeholder.svg"} 
                  alt={centerData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{centerData.name}</h2>
                <p className="opacity-90">{centerData.description}</p>
                <div className="flex items-center mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {centerData.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <section>
                <h3 className="text-lg font-medium text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="text-gray-800">{centerData.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="text-gray-800">{centerData.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Address</p>
                      <p className="text-gray-800">{centerData.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Website</p>
                      <a href={centerData.websiteUrl} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        {centerData.websiteUrl}
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Center Details */}
              <section>
                <h3 className="text-lg font-medium text-gray-800 mb-4">Center Details</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Registration Date</p>
                      <p className="text-gray-800">{centerData.registrationDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Operating Hours</p>
                      <p className="text-gray-800">{centerData.operatingHours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Volunteers</p>
                      <p className="text-gray-800">{centerData.volunteers} active volunteers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <UserCheck className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Beneficiaries</p>
                      <p className="text-gray-800">Serving {centerData.beneficiaries}+ beneficiaries</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            
            {/* Services Offered */}
            <section className="mt-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Services Offered</h3>
              <div className="flex flex-wrap gap-2">
                {centerData.servicesOffered.map((service, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </section>
            
            {/* Social Media */}
            {centerData.socialMedia && (
              <section className="mt-8">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Social Media</h3>
                <div className="flex space-x-4">
                  {Object.entries(centerData.socialMedia).map(([platform, handle]) => (
                    <div key={platform} className="text-gray-600">
                      <span className="font-medium capitalize">{platform}:</span> {handle}
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {/* Edit Button */}
            <div className="mt-8 flex justify-end">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;