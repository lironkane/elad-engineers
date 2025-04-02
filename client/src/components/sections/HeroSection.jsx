import React, { useEffect, useRef, useState } from 'react';
import { Award, ChevronRight, Compass, Phone, MessageCircle, Check, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const EnhancedHeroSection = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // אפקט הופעה מדורג במקום אנימציית הקלדה שיכולה לגרום לבעיות בעברית
  const [textVisible, setTextVisible] = useState(false);
  const description = 'חברה הנדסית המציעה שירותי בדק בית וייעוץ הנדסי מקצועי לכל סוגי הנכסים';
  
  useEffect(() => {
    // אפקט פשוט להופעה מדורגת של הטקסט
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // אפקט כניסה לדף
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // אנימציית גרף הנדסי מתקדם
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const connections = [];
    const particleCount = 80; // הגדלת מספר החלקיקים לרקע עשיר יותר

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // יצירת חלקיקים עם תנועה איטית יותר ומגוון גדלים
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2.5 + 0.5,
        color: i % 5 === 0 ? 'rgba(77, 171, 247, 0.4)' : 'rgba(255, 255, 255, 0.3)', // חלק מהחלקיקים בצבע כחול לגיוון
      });
    }

    // יצירת חיבורים בין החלקיקים
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        if (Math.random() > 0.985) { // הורדת הסיכוי לחיבור כדי למנוע עומס ויזואלי
          connections.push({
            from: i,
            to: j,
          });
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // רשת הנדסית
      drawEngineeringGrid(ctx, canvas.width, canvas.height);
      
      // חלקיקים וחיבורים
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // החזרת חלקיקים שיוצאים מהמסך
        if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy;

        // ציור החלקיק עם גרדיאנט
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // ציור הקווים שמחברים בין החלקיקים
      connections.forEach((conn) => {
        const fromParticle = particles[conn.from];
        const toParticle = particles[conn.to];
        const dx = fromParticle.x - toParticle.x;
        const dy = fromParticle.y - toParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 180) { // הגדלת טווח החיבור
          ctx.beginPath();
          ctx.moveTo(fromParticle.x, fromParticle.y);
          ctx.lineTo(toParticle.x, toParticle.y);
          
          // גרדיאנט לקו החיבור
          const gradient = ctx.createLinearGradient(
            fromParticle.x, fromParticle.y,
            toParticle.x, toParticle.y
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${0.12 * (1 - distance / 180)})`);
          gradient.addColorStop(1, `rgba(77, 171, 247, ${0.12 * (1 - distance / 180)})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      // אלמנטים הנדסיים נוספים
      drawEngineeringElements(ctx, canvas.width, canvas.height);
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // ציור הרשת ההנדסית
    const drawEngineeringGrid = (ctx, width, height) => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 0.5;

      // קווים אופקיים
      for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // קווים אנכיים
      for (let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
    };

    // ציור אלמנטים הנדסיים מורכבים
    const drawEngineeringElements = (ctx, width, height) => {
      const time = Date.now() * 0.001;

      // מעגל עם מדידות
      ctx.beginPath();
      const circleX = width * 0.15;
      const circleY = height * 0.7;
      const circleRadius = 40 + Math.sin(time) * 5;
      ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(77, 171, 247, 0.15)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // קווי מדידה למעגל
      ctx.beginPath();
      ctx.moveTo(circleX - circleRadius - 20, circleY);
      ctx.lineTo(circleX + circleRadius + 20, circleY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(circleX, circleY - circleRadius - 20);
      ctx.lineTo(circleX, circleY + circleRadius + 20);
      ctx.stroke();

      // טקסט מדידה
      ctx.font = '10px Arial';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillText(
        `R: ${circleRadius.toFixed(1)}`,
        circleX + circleRadius + 5,
        circleY - 10
      );

      // מד זווית מתקדם
      const angleX = width * 0.85;
      const angleY = height * 0.3;
      const angleRadius = 50;
      const startAngle = Math.PI * 0.5;
      const endAngle = startAngle + Math.sin(time * 0.5) * Math.PI * 0.4;

      ctx.beginPath();
      ctx.arc(angleX, angleY, angleRadius, startAngle, endAngle);
      ctx.strokeStyle = 'rgba(77, 171, 247, 0.15)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // מחוון זווית
      ctx.beginPath();
      ctx.moveTo(angleX, angleY);
      ctx.lineTo(
        angleX + Math.cos(endAngle) * (angleRadius + 10),
        angleY + Math.sin(endAngle) * (angleRadius + 10)
      );
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.stroke();

      // טקסט זווית
      ctx.fillText(
        `${((endAngle - startAngle) * (180 / Math.PI)).toFixed(0)}°`,
        angleX + Math.cos(endAngle) * (angleRadius + 20),
        angleY + Math.sin(endAngle) * (angleRadius + 20)
      );

      // גל סינוס אנימטיבי
      const waveX = width * 0.5;
      const waveY = height * 0.85;
      const amplitude = 20;
      const frequency = 0.05;

      ctx.beginPath();
      for (let i = -100; i < 100; i++) {
        const x = waveX + i;
        const y = waveY + Math.sin(time + i * frequency) * amplitude;
        if (i === -100) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(77, 171, 247, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      // הוספת נקודות מדידה לאורך הגל
      for (let i = -80; i < 80; i += 40) {
        const x = waveX + i;
        const y = waveY + Math.sin(time + i * frequency) * amplitude;
        
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
        
        if (i % 80 === 0) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + 20);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.lineWidth = 0.5;
          ctx.stroke();
          
          ctx.fillText(
            `P${i/40 + 3}`,
            x - 5,
            y + 30
          );
        }
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // אנימציות Framer Motion
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden min-h-screen">
      {/* קנבס לאפקטים הנדסיים */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* שכבת גרדיאנטים מורכבת יותר */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(77,171,247,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(77,171,247,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.3),transparent_30%,rgba(0,0,0,0.4))]" />
      </div>

      {/* אלמנטים דקורטיביים */}
      <div className="absolute top-1/4 right-10 opacity-20 hidden lg:block">
        <div className="relative">
          <div className="h-40 w-1 bg-primary-300/30 rounded"></div>
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <div className="w-4 h-4 rounded-full bg-primary-300/40"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <div className="w-4 h-4 rounded-full bg-primary-300/40"></div>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 -left-24 w-24 h-px bg-primary-300/30"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 -left-8 text-xs text-primary-300/50 whitespace-nowrap">
            45.5cm
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-10 opacity-20 hidden lg:block">
        <div className="relative">
          <div className="w-32 h-32 border-2 border-primary-300/10 rounded-full"></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-primary-300/30 origin-bottom animate-pulse"
            style={{ transform: 'translate(-50%, -100%) rotate(-30deg)', animationDuration: '4s' }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-primary-300/50">
            30°
          </div>
        </div>
      </div>

      {/* תוכן עיקרי */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainerVariants}
        className="relative z-10 max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center text-center">
          {/* תגית בדק בית מקצועי משופרת - שימוש בטבלה עם מירכוז */}
          <motion.div 
            variants={fadeInUpVariants}
            className="inline-flex justify-center items-center px-6 py-2 bg-primary-800/40 rounded-full text-primary-50 mb-8 backdrop-blur-sm hover:bg-primary-700/50 transition-all duration-300 cursor-pointer border border-primary-600/30 shadow-lg shadow-primary-900/50 hover:shadow-primary-600/30"
          >
            <table className="border-collapse w-full">
              <tbody>
                <tr className="text-center">
                  <td className="w-10 pr-8 text-right">
                    <Award className="w-5 h-5 text-accent-300 inline-block" />
                  </td>
                  <td className="text-center">
                    <span>בדק הבית המקצועי בישראל</span>
                  </td>
                  <td className="w-10"></td> {/* תא מאזן בצד השני */}
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* לוגו וכותרת */}
          <motion.div 
            variants={scaleVariants}
            className="relative flex items-center justify-center mb-8"
          >
            <div className="relative">
              <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-100 to-primary-200 whitespace-nowrap relative z-10">
                אלעד מהנדסים
              </h1>
              
              {/* אפקט הילה מאחורי הטקסט */}
              <div className="absolute -inset-4 bg-primary-500/10 blur-3xl rounded-full -z-10"></div>
              
              {/* מצפן מסתובב */}
              <div className="absolute -top-6 -right-6 w-16 h-16 opacity-30">
                <Compass
                  className="w-full h-full text-primary-300 animate-spin"
                  style={{ animationDuration: '15s' }}
                />
              </div>
            </div>
          </motion.div>

          {/* תיאור עם אפקט הופעה מדורג */}
          <motion.div
            variants={fadeInUpVariants}
            className="max-w-3xl text-xl text-primary-50 leading-relaxed backdrop-blur-sm bg-primary-900/30 p-8 rounded-2xl border border-primary-700/20 shadow-xl mb-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: textVisible ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* יתרונות מרכזיים - עם אייקונים */}
          <motion.div 
            variants={fadeInUpVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col items-center backdrop-blur-sm bg-primary-800/20 p-5 rounded-xl border border-primary-700/30 hover:bg-primary-800/30 transition-all duration-300 group">
              <div className="p-3 bg-primary-700/30 rounded-full mb-3 group-hover:bg-primary-600/40 transition-colors">
                <Shield className="w-7 h-7 text-accent-300" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-1">איכות מובטחת</h3>
              <p className="text-primary-200 text-sm text-center">בדיקות מקיפות עם ציוד מתקדם</p>
            </div>
            
            <div className="flex flex-col items-center backdrop-blur-sm bg-primary-800/20 p-5 rounded-xl border border-primary-700/30 hover:bg-primary-800/30 transition-all duration-300 group">
              <div className="p-3 bg-primary-700/30 rounded-full mb-3 group-hover:bg-primary-600/40 transition-colors">
                <Check className="w-7 h-7 text-accent-300" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-1">מומחיות מוכחת</h3>
              <p className="text-primary-200 text-sm text-center">ניסיון רב בפרויקטים מורכבים</p>
            </div>
            
            <div className="flex flex-col items-center backdrop-blur-sm bg-primary-800/20 p-5 rounded-xl border border-primary-700/30 hover:bg-primary-800/30 transition-all duration-300 group">
              <div className="p-3 bg-primary-700/30 rounded-full mb-3 group-hover:bg-primary-600/40 transition-colors">
                <Clock className="w-7 h-7 text-accent-300" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-1">זמינות גבוהה</h3>
              <p className="text-primary-200 text-sm text-center">מענה מהיר ושירות אדיב</p>
            </div>
          </motion.div>

          {/* סטטיסטיקה עם אנימציה */}
          <motion.div 
            variants={fadeInUpVariants}
            className="flex justify-center gap-10 sm:gap-20 max-w-3xl mx-auto mb-12"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-primary-100 flex flex-col items-center backdrop-blur-sm bg-primary-800/20 py-5 px-8 rounded-lg border border-primary-700/30 shadow-lg hover:shadow-primary-600/20 hover:bg-primary-800/30 transition-all duration-300"
            >
              <span className="font-bold text-3xl sm:text-4xl text-white mb-1">+1,000</span>
              <span className="text-sm text-primary-200">פרויקטים מוצלחים</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-primary-100 flex flex-col items-center backdrop-blur-sm bg-primary-800/20 py-5 px-8 rounded-lg border border-primary-700/30 shadow-lg hover:shadow-primary-600/20 hover:bg-primary-800/30 transition-all duration-300"
            >
              <span className="font-bold text-3xl sm:text-4xl text-white mb-1">24/7</span>
              <span className="text-sm text-primary-200">זמינות לקוחות</span>
            </motion.div>
          </motion.div>

          {/* כפתורי פעולה משופרים */}
          <motion.div 
            variants={fadeInUpVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 w-full max-w-xl mx-auto"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+972548116482"
              className="relative overflow-hidden group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-lg font-medium rounded-xl text-white border border-primary-400/30 transition-all duration-300 shadow-lg shadow-primary-900/30 w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-primary-800/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></span>
              <Phone className="w-5 h-5 ml-0 mr-4 relative z-10" />
              <span className="relative z-10 mx-2">054-811-6482</span>
              <div className="absolute bottom-0 right-0 left-0 h-1 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/972548116482"
              className="relative overflow-hidden group inline-flex items-center justify-center px-8 py-4 bg-accent-600/80 backdrop-blur-md text-lg font-medium rounded-xl text-white border border-accent-400/30 transition-all duration-300 shadow-lg shadow-accent-900/30 w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-700/30 to-accent-500/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></span>
              <MessageCircle className="w-5 h-5 ml-0 mr-4 relative z-10" />
              <span className="relative z-10 mx-2">WhatsApp</span>
              <div className="absolute bottom-0 right-0 left-0 h-1 bg-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* אלמנט גלילה למטה */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary-300/70"
      >
        <span className="text-sm mb-1">גלול למטה</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRight className="w-5 h-5 transform rotate-90" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnhancedHeroSection;