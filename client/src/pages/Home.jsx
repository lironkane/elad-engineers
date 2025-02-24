// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }

        .tech-line {
          animation: techLine 3s infinite;
        }

        @keyframes techLine {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Home;