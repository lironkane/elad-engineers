// src/components/sections/HeroSection.jsx
import React from 'react';
import { Award, ChevronRight, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-700 to-primary-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,123,255,0.5),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.3))]" />
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-white"
              style={{
                right: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 +.100}px`,
                opacity: Math.random(),
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `pulse ${Math.random() * 3 + 2}s infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8">
        <div className="translate-y-0 opacity-100 transition-all duration-1000 ease-out">
          <div className="inline-flex items-center px-4 py-2 bg-primary-800/30 rounded-full text-primary-50 mb-6 backdrop-blur-sm hover:bg-primary-800/40 transition-all duration-300 cursor-pointer">
            <Award className="w-5 h-5 mr-2 animate-pulse" />
            <span>המהנדס המוביל בישראל</span>
            <ChevronRight className="w-4 h-4 ml-2 animate-bounce" />
          </div>
          
          <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
            אלעד מהנדסים
          </h1>
          
          <p className="mt-8 max-w-3xl text-xl text-primary-50 leading-relaxed backdrop-blur-sm bg-primary-900/10 p-6 rounded-2xl">
            חדשנות, מקצועיות ודיוק הנדסי ללא פשרות. 
            אנחנו משלבים טכנולוגיה מתקדמת עם ניסיון של שנים כדי להבטיח את ההחלטות החשובות ביותר שלכם.
          </p>

          <div className="mt-10 flex gap-6">
            <a
              href="tel:+972548116482"
              className="group inline-flex items-center px-8 py-4 bg-white text-lg font-semibold rounded-xl text-primary-700 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="ml-2">📞</span>
              054-8116482
              <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </a>
            <a
              href="https://wa.me/972548116482"
              className="group inline-flex items-center px-8 py-4 bg-accent-500 text-lg font-semibold rounded-xl text-white hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="ml-2">💬</span>
              WhatsApp
              <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
