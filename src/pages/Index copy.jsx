import React from 'react';
// import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DonationCategories from '../components/DonationCategories';
import ImpactStats from '../components/ImpactStats';
import CharityHighlight from '../components/CharityHighlight';
import Testimonials from '../components/Testimonials';
import DonationForm from '../components/DonationForm';
import TeamMembers from '../components/TeamMembers';
import BlogPosts from '../components/BlogPosts';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <HeroSection />
        <DonationCategories />
        <CharityHighlight />
        <ImpactStats />
        <TeamMembers />
        <DonationForm />
        <Testimonials />
        <BlogPosts />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
