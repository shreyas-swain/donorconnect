import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="text-donation-orange mb-2">{role}</div>
      <h3 className="font-bold text-lg mb-4">{name}</h3>
      <div className="flex justify-center space-x-3">
        <a href="#" className="text-gray-500 hover:text-donation-orange">
          <Facebook size={16} />
        </a>
        <a href="#" className="text-gray-500 hover:text-donation-orange">
          <Twitter size={16} />
        </a>
        <a href="#" className="text-gray-500 hover:text-donation-orange">
          <Linkedin size={16} />
        </a>
        <a href="#" className="text-gray-500 hover:text-donation-orange">
          <Instagram size={16} />
        </a>
      </div>
    </div>
  );
};

const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Edward James",
      role: "Volunteer",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Edward James",
      role: "Volunteer",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Edward James",
      role: "Volunteer",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Edward James",
      role: "Volunteer",
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h3 className="text-donation-orange text-lg text-center mb-2">Our Volunteers</h3>
        <h2 className="text-3xl font-bold text-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <TeamMember 
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
