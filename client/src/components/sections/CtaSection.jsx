import React from 'react';
import { ArrowRight, Phone, MessageCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const CtaSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Floating particles
  const particles = Array(15).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2
  }));

  return (
    <motion.div 
      className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-24 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_40%)]" />
        
        {/* Floating lines */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 90}deg)`,
              animation: `float ${Math.random() * 6 + 5}s infinite ease-in-out ${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Floating particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/20"
            style={{
              width: particle.size + 'px',
              height: particle.size + 'px',
              left: particle.x + '%',
              top: particle.y + '%',
              animation: `floatParticle ${particle.duration}s infinite ease-in-out ${particle.delay}s`
            }}
          />
        ))}
        
        {/* Subtle hexagon pattern for depth */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
          variants={itemVariants}
        >
          <div className="relative">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-primary-100 rounded-br-3xl opacity-50" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary-100 rounded-tl-3xl opacity-50" />
            
            {/* Main content with gradient border */}
            <div className="p-2">
              <div className="p-10 rounded-2xl border border-primary-200 bg-gradient-to-br from-white to-primary-50">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <motion.div variants={itemVariants} className="lg:max-w-xl">
                    <div className="mb-4 inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      הצטרפו ללקוחות המרוצים שלנו
                    </div>
                    <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800">
                      התייעצות ראשונית ללא התחייבות
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mb-6"></div>
                    <p className="text-xl text-secondary-700 leading-relaxed mb-6">
                      הניסיון שלנו עומד לרשותכם. פנו אלינו עוד היום וקבלו ייעוץ מקצועי מהנדסי מותאם לצרכים שלכם.
                    </p>
                    
                    {/* Added benefit points with blue dots */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 shadow-sm"></div>
                        <span className="text-secondary-700">זמינות גבוהה ומענה מהיר</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 shadow-sm"></div>
                        <span className="text-secondary-700">שירות מקצועי עם ניסיון רב</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 shadow-sm"></div>
                        <span className="text-secondary-700">פתרונות מותאמים אישית לכל לקוח</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex flex-col gap-5 lg:min-w-[320px]">
                    {/* Call button */}
                    <a
                      href="tel:+972548116482"
                      className="group flex items-center justify-center px-6 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-xl hover:shadow-primary-300/30"
                    >
                      <Phone className="w-5 h-5 text-white" />
                      <span className="text-lg font-medium mx-10">054-811-6482</span>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                    
                    {/* WhatsApp button */}
                    <a
                      href="https://wa.me/972548116482"
                      className="group flex items-center justify-center px-6 py-4 bg-accent-500 text-white rounded-xl hover:bg-accent-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-xl hover:shadow-accent-300/30"
                    >
                      <MessageCircle className="w-5 h-5 text-white" />
                      <span className="text-lg font-medium mx-10">שלחו לנו הודעה</span>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                    
                    {/* Quick response badge */}
                    <div className="flex items-center justify-center gap-3 mt-1 text-primary-700 bg-primary-50 px-5 py-3 rounded-lg border border-primary-100">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-medium">מענה מהיר תוך 24 שעות</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extended animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--rotation, 45deg)); }
          50% { transform: translateY(-30px) rotate(var(--rotation, 45deg)); }
        }
        
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.2); }
        }
      `}</style>
    </motion.div>
  );
};

export default CtaSection;