import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Shield, Ruler, Compass, Check, Zap } from 'lucide-react';

const EngineeringTestimonialsGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState([false, false, false, false, false]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // ניתן להוסיף עוד תמונות בעתיד
  const imagePaths = [
    '/images/recomendations/Elad-reco-1.jpeg',
    '/images/recomendations/Elad-reco-2.jpeg',
    '/images/recomendations/Elad-reco-3.jpeg',
    '/images/recomendations/Elad-reco-4.jpeg',
    '/images/recomendations/Elad-reco-5.jpeg'
  ];

  useEffect(() => {
    // טעינה מקדימה של כל התמונות
    imagePaths.forEach((path, index) => {
      const img = new Image();
      img.onload = () => {
        setIsLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      img.src = path;
    });

    // הגדרת הקנבס לאנימציות הנדסיות
    setupEngineeringCanvas();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const setupEngineeringCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', resizeCanvas);

    // ציור רשת וגרפים הנדסיים
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // רשת מדידה
      drawEngineeringGrid(ctx, canvas.width, canvas.height);
      
      // מעגלי מדידה
      drawMeasurementCircles(ctx, canvas.width, canvas.height);
      
      // קווי מדידה
      drawMeasurementLines(ctx, canvas.width, canvas.height);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // רשת הנדסית
    const drawEngineeringGrid = (ctx, width, height) => {
      ctx.strokeStyle = 'rgba(0, 123, 255, 0.05)';
      ctx.lineWidth = 0.5;
      
      // רשת אופקית
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // רשת אנכית
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
    };

    // מעגלי מדידה
    const drawMeasurementCircles = (ctx, width, height) => {
      const time = Date.now() * 0.001;
      
      // מעגל גדול שמתנודד
      ctx.beginPath();
      const circleRadius = 80 + Math.sin(time * 0.5) * 10;
      ctx.arc(width * 0.15, height * 0.7, circleRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 123, 255, 0.1)';
      ctx.stroke();
      
      // מעגל קטן נודד
      ctx.beginPath();
      const smallCircleX = width * 0.85;
      const smallCircleY = height * 0.2;
      ctx.arc(smallCircleX, smallCircleY, 30, 0, Math.PI * 2);
      ctx.stroke();
      
      // קו מחבר בין המעגלים
      ctx.beginPath();
      ctx.moveTo(width * 0.15, height * 0.7);
      ctx.lineTo(smallCircleX, smallCircleY);
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    // קווי מדידה
    const drawMeasurementLines = (ctx, width, height) => {
      const time = Date.now() * 0.001;
      
      // גל סינוס
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 123, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let x = 0; x < width; x += 5) {
        const y = height * 0.5 + Math.sin(x * 0.02 + time) * 20;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      
      // קווים משתנים
      const lineCount = 5;
      for (let i = 0; i < lineCount; i++) {
        const progress = (time * 0.5 + i / lineCount) % 1;
        
        ctx.beginPath();
        ctx.moveTo(width * 0.2, height * (0.3 + 0.4 * progress));
        ctx.lineTo(width * 0.8, height * (0.3 + 0.4 * progress));
        ctx.strokeStyle = `rgba(0, 123, 255, ${0.1 * (1 - progress)})`;
        ctx.stroke();
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  };

  // הפכנו את המיפוי: כפתור ימני מזיז את האינדקס לכיוון שמאלי (מפחית אינדקס)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagePaths.length) % imagePaths.length);
  };

  // הכפתור השמאלי מזיז את האינדקס לכיוון ימיני (מגדיל אינדקס)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50/80 to-white">
      {/* רקע הנדסי מונפש */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(0,123,255,0.1),transparent)]" />
      
      {/* אלמנטים דקורטיביים הנדסיים */}
      <div className="absolute top-24 left-8 hidden lg:block">
        <Ruler className="w-8 h-8 text-primary-400/20 animate-pulse" style={{ animationDuration: '4s' }} />
      </div>
      <div className="absolute bottom-24 right-8 hidden lg:block">
        <Compass className="w-10 h-10 text-primary-400/20 animate-spin" style={{ animationDuration: '8s' }} />
      </div>
      
      {/* קווי מדידה דקורטיביים */}
      <div className="absolute top-1/4 left-0 w-20 h-px bg-primary-300/10 hidden lg:block"></div>
      <div className="absolute top-1/4 left-20 w-px h-20 bg-primary-300/10 hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-0 w-20 h-px bg-primary-300/10 hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-20 w-px h-20 bg-primary-300/10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-50 px-3 py-1 rounded-full text-primary-700 text-sm font-medium mb-4">
            <Check className="w-4 h-4 mr-1" />
            המלצות מלקוחות אמיתיים
          </div>
          <h2 className="text-4xl font-bold text-secondary-900">חוות דעת מלקוחותינו</h2>
          <p className="mt-4 text-xl text-secondary-600">
            אנו גאים להציג את ההמלצות שהתקבלו מלקוחות מרוצים שחוו את השירות המקצועי שלנו
          </p>
        </div>

        {/* גלריית התמונות */}
        <div className="relative mx-auto max-w-4xl backdrop-blur-sm">
          {/* תמונה ראשית */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl mb-6 border border-primary-200 bg-white">
            {/* רקע עם קווי מדידה */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm">
              <div className="absolute top-4 left-4 w-20 h-20 border-t border-l border-primary-200"></div>
              <div className="absolute top-4 right-4 w-20 h-20 border-t border-r border-primary-200"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b border-l border-primary-200"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b border-r border-primary-200"></div>
              
              {/* נקודות מדידה */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-primary-400 rounded-full"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary-400 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary-400 rounded-full"></div>
            </div>
            
            {/* תצוגת טעינה */}
            {!isLoaded[currentIndex] && (
              <div className="absolute inset-0 bg-white flex items-center justify-center">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary-500" />
                  </div>
                </div>
              </div>
            )}
            
            {/* התמונה הראשית */}
            <img 
              src={imagePaths[currentIndex]} 
              alt={`המלצה מספר ${currentIndex + 1}`} 
              className={`w-full h-full object-contain ${isLoaded[currentIndex] ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            />
            
            {/* קישוטי הנדסה בתוך התמונה */}
            <div className="absolute inset-0 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="opacity-20">
                <circle cx="10" cy="10" r="2" fill="none" stroke="rgba(0,123,255,0.5)" />
                <circle cx="90" cy="10" r="2" fill="none" stroke="rgba(0,123,255,0.5)" />
                <circle cx="10" cy="90" r="2" fill="none" stroke="rgba(0,123,255,0.5)" />
                <circle cx="90" cy="90" r="2" fill="none" stroke="rgba(0,123,255,0.5)" />
                <line x1="10" y1="10" x2="90" y2="10" stroke="rgba(0,123,255,0.2)" strokeDasharray="2,2" />
                <line x1="90" y1="10" x2="90" y2="90" stroke="rgba(0,123,255,0.2)" strokeDasharray="2,2" />
                <line x1="90" y1="90" x2="10" y2="90" stroke="rgba(0,123,255,0.2)" strokeDasharray="2,2" />
                <line x1="10" y1="90" x2="10" y2="10" stroke="rgba(0,123,255,0.2)" strokeDasharray="2,2" />
              </svg>
            </div>
            
            {/* כפתורי ניווט - עם התפקידים המעודכנים */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 text-primary-600 hover:bg-white hover:text-primary-700 transition-all duration-200 backdrop-blur-sm shadow-md hover:scale-110"
              aria-label="המלצה הבאה"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 text-primary-600 hover:bg-white hover:text-primary-700 transition-all duration-200 backdrop-blur-sm shadow-md hover:scale-110"
              aria-label="המלצה קודמת"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* סמל ואימות */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md flex items-center border border-primary-100">
              <Shield className="w-4 h-4 text-primary-600 mr-1" />
              <span className="text-xs font-medium text-primary-700">מאומת</span>
            </div>
            
            {/* מידע טכני */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-primary-700 border border-primary-100">
              המלצה #{currentIndex + 1}
            </div>
          </div>
          
          {/* שורת תמונות ממוזערות */}
          <div className="flex justify-center gap-4 mt-6">
            {imagePaths.map((path, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative ${
                  currentIndex === index 
                    ? 'ring-2 ring-primary-500 scale-105' 
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                } overflow-hidden transition-all duration-200 rounded`}
              >
                <div className="w-20 h-16 overflow-hidden">
                  <img 
                    src={path} 
                    alt={`תמונה ממוזערת ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-300"
                    style={{ transform: hoveredIndex === index || currentIndex === index ? 'scale(1.1)' : 'scale(1)' }}
                  />
                </div>
                {currentIndex === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* מידע אודות מספר התמונה הנוכחית - מסודר מימין לשמאל */}
          <div className="text-center mt-6 text-secondary-600">
            <div className="inline-flex items-center gap-2 flex-row-reverse">
              {imagePaths.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    currentIndex === index 
                      ? 'bg-primary-600 scale-150' 
                      : 'bg-primary-300 hover:bg-primary-400'
                  }`}
                  aria-label={`עבור להמלצה ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* חלק של עידוד הוספת המלצות */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <div className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-sm border border-primary-100 relative overflow-hidden">
            {/* קישוטים הנדסיים */}
            <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#007bff" strokeWidth="1" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="#007bff" strokeWidth="1" />
                <line x1="10" y1="50" x2="90" y2="50" stroke="#007bff" strokeWidth="1" />
                <line x1="50" y1="10" x2="50" y2="90" stroke="#007bff" strokeWidth="1" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-primary-800 mb-2 relative z-10">מרוצים מהשירות שלנו?</h3>
            <p className="text-primary-700 mb-4 relative z-10">נשמח לקבל גם מכם חוות דעת על השירות המקצועי שקיבלתם</p>
            <a 
              href="https://g.page/r/CeMXFUSbWvNdEAE/review"
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 relative z-10 shadow hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="mr-2">השאירו המלצה</span>
              <Shield className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringTestimonialsGallery;