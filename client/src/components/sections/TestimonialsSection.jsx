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

    // הגדרת הקנבס לאנימציות הנדסיות משופרות
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
    
    // מערכים לשמירת אובייקטי אנימציה
    const grid = [];
    const particles = [];
    const blueprints = [];
    const measurementLines = [];
    
    // יצירת רשת דינמית
    const createGrid = () => {
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        grid.push({
          x1: x,
          y1: 0,
          x2: x,
          y2: canvas.height,
          opacity: Math.random() * 0.05 + 0.02,
          pulse: Math.random() * 2 * Math.PI
        });
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        grid.push({
          x1: 0,
          y1: y,
          x2: canvas.width,
          y2: y,
          opacity: Math.random() * 0.05 + 0.02,
          pulse: Math.random() * 2 * Math.PI
        });
      }
    };
    
    // יצירת חלקיקים נעים
    const createParticles = () => {
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
    };
    
    // יצירת מעגלי תוכנית (blueprints)
    const createBlueprints = () => {
      const count = 5;
      for (let i = 0; i < count; i++) {
        blueprints.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 80 + 40,
          initialRadius: Math.random() * 80 + 40,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.005 + 0.002,
          opacity: Math.random() * 0.1 + 0.05,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.002
        });
      }
    };
    
    // יצירת קווי מדידה
    const createMeasurementLines = () => {
      const count = 8;
      for (let i = 0; i < count; i++) {
        const isHorizontal = Math.random() > 0.5;
        const length = Math.random() * 200 + 100;
        
        measurementLines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: length,
          isHorizontal: isHorizontal,
          timer: Math.random() * 200,
          maxTime: Math.random() * 200 + 200,
          opacity: Math.random() * 0.15 + 0.05
        });
      }
    };
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // איפוס ויצירה מחדש של אובייקטי האנימציה
      grid.length = 0;
      particles.length = 0;
      blueprints.length = 0;
      measurementLines.length = 0;
      
      createGrid();
      createParticles();
      createBlueprints();
      createMeasurementLines();
    };
    
    window.addEventListener('resize', resizeCanvas);
    
    // יצירת כל האובייקטים בפעם הראשונה
    createGrid();
    createParticles();
    createBlueprints();
    createMeasurementLines();
    
    // פונקציית אנימציה מרכזית
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;
      
      // ציור רשת מדידה דינמית
      grid.forEach(line => {
        const pulseOpacity = line.opacity + Math.sin(time + line.pulse) * 0.02;
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.strokeStyle = `rgba(0, 123, 255, ${pulseOpacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });
      
      // עדכון וציור חלקיקים
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // בדיקת גבולות ושינוי כיוון
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // ציור החלקיק
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });
      
      // עדכון וציור מעגלי תוכניות (blueprints)
      blueprints.forEach(blueprint => {
        // עדכון רדיוס ורוטציה
        blueprint.radius = blueprint.initialRadius + Math.sin(time * blueprint.speed + blueprint.phase) * 10;
        blueprint.rotation += blueprint.rotationSpeed;
        
        // ציור מעגל מרכזי
        ctx.beginPath();
        ctx.arc(blueprint.x, blueprint.y, blueprint.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 123, 255, ${blueprint.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // ציור קווי חיתוך
        ctx.beginPath();
        ctx.moveTo(blueprint.x - blueprint.radius - 10, blueprint.y);
        ctx.lineTo(blueprint.x + blueprint.radius + 10, blueprint.y);
        ctx.strokeStyle = `rgba(0, 123, 255, ${blueprint.opacity * 0.7})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(blueprint.x, blueprint.y - blueprint.radius - 10);
        ctx.lineTo(blueprint.x, blueprint.y + blueprint.radius + 10);
        ctx.stroke();
        
        // ציור קווים פנימיים מסתובבים
        const drawRotatedLine = (angle) => {
          const rotatedAngle = angle + blueprint.rotation;
          const x1 = blueprint.x + Math.cos(rotatedAngle) * blueprint.radius;
          const y1 = blueprint.y + Math.sin(rotatedAngle) * blueprint.radius;
          const x2 = blueprint.x - Math.cos(rotatedAngle) * blueprint.radius;
          const y2 = blueprint.y - Math.sin(rotatedAngle) * blueprint.radius;
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        };
        
        for (let i = 0; i < 3; i++) {
          drawRotatedLine((Math.PI / 3) * i);
        }
        
        // ציור טקסט מדידה
        ctx.font = '8px Arial';
        ctx.fillStyle = `rgba(0, 123, 255, ${blueprint.opacity * 1.5})`;
        ctx.fillText(`R: ${blueprint.radius.toFixed(1)}`, blueprint.x + blueprint.radius / 2, blueprint.y - 5);
      });
      
      // עדכון וציור קווי מדידה דינמיים
      measurementLines.forEach(line => {
        line.timer++;
        if (line.timer >= line.maxTime) {
          // עדכון מיקום קו חדש
          line.x = Math.random() * canvas.width;
          line.y = Math.random() * canvas.height;
          line.timer = 0;
        }
        
        // חישוב אפקט נראות מתמוגג
        let visibility = 1;
        if (line.timer < 30) {
          visibility = line.timer / 30;
        } else if (line.timer > line.maxTime - 30) {
          visibility = (line.maxTime - line.timer) / 30;
        }
        
        // ציור הקו
        ctx.beginPath();
        if (line.isHorizontal) {
          ctx.moveTo(line.x, line.y);
          ctx.lineTo(line.x + line.length, line.y);
        } else {
          ctx.moveTo(line.x, line.y);
          ctx.lineTo(line.x, line.y + line.length);
        }
        ctx.strokeStyle = `rgba(0, 123, 255, ${line.opacity * visibility})`;
        ctx.lineWidth = 0.8;
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // הוספת סימונים על הקו
        if (line.isHorizontal) {
          ctx.beginPath();
          ctx.moveTo(line.x, line.y - 5);
          ctx.lineTo(line.x, line.y + 5);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(line.x + line.length, line.y - 5);
          ctx.lineTo(line.x + line.length, line.y + 5);
          ctx.stroke();
          
          // טקסט מדידה
          ctx.font = '8px Arial';
          ctx.fillStyle = `rgba(0, 123, 255, ${line.opacity * visibility * 1.5})`;
          ctx.fillText(`${line.length.toFixed(1)}`, line.x + line.length / 2 - 10, line.y - 5);
        } else {
          ctx.beginPath();
          ctx.moveTo(line.x - 5, line.y);
          ctx.lineTo(line.x + 5, line.y);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(line.x - 5, line.y + line.length);
          ctx.lineTo(line.x + 5, line.y + line.length);
          ctx.stroke();
          
          // טקסט מדידה
          ctx.font = '8px Arial';
          ctx.fillStyle = `rgba(0, 123, 255, ${line.opacity * visibility * 1.5})`;
          ctx.fillText(`${line.length.toFixed(1)}`, line.x + 8, line.y + line.length / 2);
        }
      });
      
      // ציור אפקט גלי סינוס
      const drawSineWave = () => {
        const amplitude = 20;
        const frequency = 0.01;
        const speed = time * 2;
        
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 2) {
          const y = canvas.height * 0.5 + Math.sin(x * frequency + speed) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.strokeStyle = 'rgba(0, 123, 255, 0.1)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        // ציור נקודות סימון על הגל
        for (let x = 0; x < canvas.width; x += canvas.width / 8) {
          const y = canvas.height * 0.5 + Math.sin(x * frequency + speed) * amplitude;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 123, 255, 0.2)';
          ctx.fill();
        }
      };
      
      drawSineWave();
      
      // אפקט סריקה נעה
      const drawScanEffect = () => {
        const scanHeight = 2;
        const scanY = (canvas.height + scanHeight * 2) * ((time * 0.2) % 1) - scanHeight;
        
        const gradient = ctx.createLinearGradient(0, scanY - scanHeight, 0, scanY + scanHeight);
        gradient.addColorStop(0, 'rgba(0, 123, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(0, 123, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 123, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, scanY - scanHeight, canvas.width, scanHeight * 2);
      };
      
      drawScanEffect();
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagePaths.length) % imagePaths.length);
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-50 px-3 py-1 rounded-full text-primary-700 text-sm font-medium mb-4">
            <Check className="w-4 h-4 mr-1" />
            הלקוחות שלנו
          </div>
          <h2 className="text-4xl font-bold text-secondary-900">חוות דעת מלקוחותינו</h2>
          <p className="mt-4 text-xl text-secondary-600">
            אנו גאים להציג את ההמלצות שהתקבלו מלקוחות מרוצים שחוו את השירות המקצועי שלנו
          </p>
        </div>

        {/* גלריית התמונות - עם שיפור חדות */}
        <div className="relative mx-auto max-w-4xl">
          {/* תמונה ראשית */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl mb-6 border border-primary-200 bg-white">
            {/* קישוטי מדידה */}
            <div className="absolute top-4 left-4 w-20 h-20 border-t border-l border-primary-200 z-10"></div>
            <div className="absolute top-4 right-4 w-20 h-20 border-t border-r border-primary-200 z-10"></div>
            <div className="absolute bottom-4 left-4 w-20 h-20 border-b border-l border-primary-200 z-10"></div>
            <div className="absolute bottom-4 right-4 w-20 h-20 border-b border-r border-primary-200 z-10"></div>
            
            {/* נקודות מדידה */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-primary-400 rounded-full z-10"></div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full z-10"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary-400 rounded-full z-10"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary-400 rounded-full z-10"></div>
            
            {/* תצוגת טעינה */}
            {!isLoaded[currentIndex] && (
              <div className="absolute inset-0 bg-white flex items-center justify-center z-20">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary-500" />
                  </div>
                </div>
              </div>
            )}
            
            {/* התמונה הראשית - ללא אפקטים מטשטשים */}
            <div className="relative w-full h-full">
              <img 
                src={imagePaths[currentIndex]} 
                alt={`המלצה מספר ${currentIndex + 1}`} 
                className={`w-full h-full object-contain ${isLoaded[currentIndex] ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
              />
            </div>
            
            {/* כפתורי ניווט */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 text-primary-600 hover:bg-white hover:text-primary-700 transition-all duration-200 shadow-md hover:scale-110 z-20"
              aria-label="המלצה קודמת"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 text-primary-600 hover:bg-white hover:text-primary-700 transition-all duration-200 shadow-md hover:scale-110 z-20"
              aria-label="המלצה הבאה"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* סמל ואימות */}
            <div className="absolute top-4 right-4 bg-white rounded-full shadow-md flex items-center border border-primary-100 px-3 py-1 z-20">
              <Shield className="w-4 h-4 text-primary-600 mr-1" />
              <span className="text-xs font-medium text-primary-700">מאומת</span>
            </div>
            
            {/* מידע טכני */}
            <div className="absolute bottom-4 left-4 bg-white rounded text-xs text-primary-700 border border-primary-100 px-2 py-1 z-20">
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
                } overflow-hidden transition-all duration-200 rounded-md`}
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
          
          {/* מידע אודות מספר התמונה הנוכחית */}
          <div className="text-center mt-6 text-secondary-600">
            <div className="inline-flex items-center gap-2">
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