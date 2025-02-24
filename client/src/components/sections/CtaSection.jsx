// src/components/sections/CtaSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <div className="bg-primary-600 py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]" />
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10"
            style={{
              width: '2px',
              height: '100px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'rotate(45deg)',
              animation: `float ${Math.random() * 4 + 3}s infinite`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white rounded-2xl shadow-2xl p-12 backdrop-blur-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                מוכנים להתחיל?
              </h2>
              <p className="mt-4 text-xl text-secondary-600">צרו איתנו קשר עוד היום לייעוץ ראשוני ללא עלות</p>
            </div>
            <div className="mt-8 lg:mt-0 flex gap-4">
              <a
                href="tel:+972548116482"
                className="group inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="ml-2">📞</span>
                התקשרו עכשיו
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </a>
              <a
                href="https://wa.me/972548116482"
                className="group inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-xl hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="ml-2">💬</span>
                WhatsApp
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
      `}</style>
    </div>
  );
};

export default CtaSection;