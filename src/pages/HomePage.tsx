import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProgramSection from '../components/home/ProgramSection';
import FinancialSection from '../components/home/FinancialSection';
import SponsorSection from '../components/home/SponsorSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProgramSection />
      <FinancialSection />
      <SponsorSection />
    </>
  );
};

export default HomePage;