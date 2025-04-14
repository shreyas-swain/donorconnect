import React from 'react';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DonationCard from '../components/DonationCard';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '../components/ui/pagination';

const DonationList = () => {
  // Mock donation items for the listing page
  const donationItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=1470&auto=format&fit=crop',
      title: 'Support hungry children',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
      progress: 65,
      category: 'Children',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop',
      title: 'Help for homeless families',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
      progress: 45,
      category: 'Families',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop',
      title: 'Better future for girls',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
      progress: 80,
      category: 'Education',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop',
      title: 'Community support program',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
      progress: 35,
      category: 'Community',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1470&auto=format&fit=crop',
      title: 'Hearts for the elderly',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
      progress: 55,
      category: 'Elderly',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1470&auto=format&fit=crop',
      title: 'Environmental awareness',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
      progress: 60,
      category: 'Environment',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* <Navbar /> */}

      {/* Banner section */}
      <div className="relative bg-dark-bg text-white py-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="relative container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Donation Lists</h1>
          <p className="text-lg">Home / Donation Lists</p>
        </div>
      </div>

      {/* Donations grid section */}
      <section className="py-16 bg-light-bg flex-grow">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donationItems.map((item) => (
              <DonationCard 
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                progress={item.progress}
                category={item.category}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DonationList;
