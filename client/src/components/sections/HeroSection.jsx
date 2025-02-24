import React, { useEffect, useRef } from 'react';
import { Award, ChevronRight, Compass, Phone, MessageCircle } from 'lucide-react';

const EnhancedHeroSection = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  // אנימציית גרף הנדסי מתקדם (ללא שינוי)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const connections = [];
    const particleCount = 60;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: 'rgba(255, 255, 255, 0.3)',
      });
    }

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        if (Math.random() > 0.97) {
          connections.push({
            from: i,
            to: j,
          });
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawEngineeringGrid(ctx, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      connections.forEach((conn) => {
        const fromParticle = particles[conn.from];
        const toParticle = particles[conn.to];
        const dx = fromParticle.x - toParticle.x;
        const dy = fromParticle.y - toParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(fromParticle.x, fromParticle.y);
          ctx.lineTo(toParticle.x, toParticle.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${
            0.1 * (1 - distance / 150)
          })`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      drawEngineeringElements(ctx, canvas.width, canvas.height);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const drawEngineeringGrid = (ctx, width, height) => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 0.5;

      for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
    };

    const drawEngineeringElements = (ctx, width, height) => {
      const time = Date.now() * 0.001;

      ctx.beginPath();
      const circleX = width * 0.15;
      const circleY = height * 0.7;
      const circleRadius = 40 + Math.sin(time) * 5;
      ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(circleX - circleRadius - 20, circleY);
      ctx.lineTo(circleX + circleRadius + 20, circleY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(circleX, circleY - circleRadius - 20);
      ctx.lineTo(circleX, circleY + circleRadius + 20);
      ctx.stroke();

      ctx.font = '10px Arial';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillText(
        `R: ${circleRadius.toFixed(1)}`,
        circleX + circleRadius + 5,
        circleY - 10
      );

      const angleX = width * 0.85;
      const angleY = height * 0.3;
      const angleRadius = 50;
      const startAngle = Math.PI * 0.5;
      const endAngle = startAngle + Math.sin(time * 0.5) * Math.PI * 0.4;

      ctx.beginPath();
      ctx.arc(angleX, angleY, angleRadius, startAngle, endAngle);
      ctx.strokeStyle = 'rgba(0, 123, 255, 0.15)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(angleX, angleY);
      ctx.lineTo(
        angleX + Math.cos(endAngle) * (angleRadius + 10),
        angleY + Math.sin(endAngle) * (angleRadius + 10)
      );
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.stroke();

      ctx.fillText(
        `${((endAngle - startAngle) * (180 / Math.PI)).toFixed(0)}°`,
        angleX + Math.cos(endAngle) * (angleRadius + 20),
        angleY + Math.sin(endAngle) * (angleRadius + 20)
      );

      const waveX = width * 0.5;
      const waveY = height * 0.8;
      const amplitude = 20;
      const frequency = 0.05;

      ctx.beginPath();
      for (let i = -100; i < 100; i++) {
        const x = waveX + i;
        const y = waveY + Math.sin(time + i * frequency) * amplitude;
        if (i === -100) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(0, 123, 255, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-primary-800 to-primary-900 overflow-hidden">
      {/* קנבס לאפקטים הנדסיים */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* שכבת גרדיאנטים */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.3),transparent,rgba(0,0,0,0.4))]" />
      </div>

      {/* מדידה נעה */}
      <div className="absolute top-40 right-10 opacity-20 hidden lg:block">
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

      {/* מד זווית */}
      <div className="absolute bottom-20 left-10 opacity-20 hidden lg:block">
        <div className="relative">
          <div className="w-32 h-32 border-2 border-primary-300/10 rounded-full"></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-primary-300/30 origin-bottom"
            style={{ transform: 'translate(-50%, -100%) rotate(-30deg)' }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-primary-300/50">
            30°
          </div>
        </div>
      </div>

      {/* תוכן עיקרי */}
      <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8">
        <div className="translate-y-0 opacity-100 transition-all duration-1000 ease-out flex flex-col items-center text-center">
          {/* תגית בדק בית מקצועי עם אייקון */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-800/40 rounded-full text-primary-50 mb-6 backdrop-blur-sm hover:bg-primary-700/50 transition-all duration-300 cursor-pointer border border-primary-600/30">
            <Award className="w-5 h-5 mr-2 animate-pulse" />
            <span>בדק הבית המקצועי בישראל</span>
            <ChevronRight className="w-4 h-4 ml-2 animate-bounce" />
          </div>

          {/* לוגו וכותרת */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Logo Image */}

            {/* כותרת עם אפקט גרדיאנט */}
            <div className="relative">
              <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-100 to-primary-200 whitespace-nowrap">
                אלעד מהנדסים
              </h1>
              <div className="absolute -top-4 -right-4 w-12 h-12 opacity-20">
                <Compass
                  className="w-full h-full text-primary-300 animate-spin"
                  style={{ animationDuration: '15s' }}
                />
              </div>
            </div>
          </div>

          {/* תיאור עם רקע חצי שקוף */}
          <p className="max-w-3xl text-xl text-primary-50 leading-relaxed backdrop-blur-sm bg-primary-900/20 p-6 rounded-2xl border border-primary-700/20 shadow-lg">
            אלעד מהנדסים הינה חברה הנדסית המציעה שירותי בדק בית וייעוץ הנדסי
          </p>

          {/* סטטיסטיקה מקצועית מתחת לפסקה - ממורכזת */}
          <div className="mt-8 flex justify-center gap-8 sm:gap-16 max-w-3xl mx-auto">
            <div className="text-primary-100 flex flex-col items-center backdrop-blur-sm bg-primary-800/10 py-4 px-6 sm:px-8 rounded-lg border border-primary-700/20">
              <span className="font-bold text-2xl sm:text-3xl text-white">+1,000</span>
              <span className="text-xs sm:text-sm text-primary-200">פרויקטים מוצלחים</span>
            </div>
            <div className="text-primary-100 flex flex-col items-center backdrop-blur-sm bg-primary-800/10 py-4 px-6 sm:px-8 rounded-lg border border-primary-700/20">
              <span className="font-bold text-2xl sm:text-3xl text-white">24/7</span>
              <span className="text-xs sm:text-sm text-primary-200">זמינות לקוחות</span>
            </div>
          </div>

          {/* כפתורי פעולה משופרים - ממורכזים */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-md w-full">
            <a
              href="tel:+972548116482"
              className="relative overflow-hidden group inline-flex items-center justify-center px-6 py-4 bg-white/15 backdrop-blur-md text-base lg:text-lg font-medium rounded-lg text-white border border-primary-400/30 hover:bg-white/20 transition-all duration-300 shadow-lg w-full max-w-xs gap-x-2"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-600/40 to-primary-800/40 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              <Phone className="w-5 h-5 relative z-10" />
              {/* מסתיר את המספר במסכים קטנים ומציג "לחץ להתקשר" במקום */}
              <span className="relative z-10 hidden sm:inline-block">054-8116482</span>
              <span className="relative z-10 sm:hidden">לחץ להתקשר</span>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </a>
            <a
              href="https://wa.me/972548116482"
              className="relative overflow-hidden group inline-flex items-center justify-center px-6 py-4 bg-accent-600/80 backdrop-blur-md text-base lg:text-lg font-medium rounded-lg text-white border border-accent-400/30 hover:bg-accent-600/90 transition-all duration-300 shadow-lg w-full max-w-xs gap-x-2"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-700/40 to-accent-500/40 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              <MessageCircle className="w-5 h-5 relative z-10" />
              <span className="relative z-10">WhatsApp</span>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedHeroSection;