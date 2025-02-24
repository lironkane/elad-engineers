import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRefs = {
    about: useRef(null),
    expertise: useRef(null),
    service: useRef(null),
    advantage: useRef(null)
  };

  // אפקט אנימציה להופעת האלמנטים בגלילה
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('translate-y-0');
          entry.target.classList.remove('translate-y-10');
        }
      });
    }, observerOptions);

    // הוספת כל הסקשנים לאובזרבר
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen font-heebo overflow-hidden">
      {/* רקע הנדסי מקצועי */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden">
        {/* רשת הנדסית עדינה */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '25px 25px'
          }}></div>
        </div>
        
        {/* קווי שרטוט הנדסיים */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8" />
            </pattern>
          </defs>
          
          {/* רשת שרטוט טכנית */}
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* קווי מידה שרטוטיים */}
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" strokeDasharray="10,12" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" strokeDasharray="10,12" />
          <line x1="30%" y1="0" x2="30%" y2="100%" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" strokeDasharray="10,12" />
          <line x1="70%" y1="0" x2="70%" y2="100%" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" strokeDasharray="10,12" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 gap-10 min-h-screen items-center max-w-4xl mx-auto">
          
          {/* תוכן במסך מלא */}
          <div className="text-white space-y-12">
            <div 
              ref={sectionRefs.about} 
              className="transition-all duration-700 ease-out opacity-0 translate-y-10"
            >
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-rubik font-bold mb-3 text-white">
                  אודות אלעד חתומה
                </h1>
                <div className="w-24 h-0.5 bg-primary-500 mb-1"></div>
                <div className="w-16 h-0.5 bg-primary-500 opacity-70"></div>
              </div>
              
              <div className="border-r-2 border-primary-500 pr-6 mb-12">
                <h2 className="text-2xl font-rubik font-semibold text-primary-300 mb-3">מי אני</h2>
                <p className="text-base text-gray-100 leading-relaxed">
                  אלעד חתומה, מהנדס בניין מוסמך ובעלים של חברת "אלעד מהנדסים". כמהנדס עם ניסיון עשיר בתחום, 
                  ביצעתי מאות בדיקות איכות לדירות חדשות ברחבי הארץ, וצברתי מוניטין כמומחה אמין ומקצועי.
                </p>
              </div>
            </div>
            
            <div 
              ref={sectionRefs.expertise}
              className="transition-all duration-700 ease-out opacity-0 translate-y-10"
            >
              <div className="border-r-2 border-primary-500 pr-6 mb-12">
                <h2 className="text-2xl font-rubik font-semibold text-primary-300 mb-3">המומחיות שלי</h2>
                <p className="text-base text-gray-100 leading-relaxed">
                  אני מתמחה בבדיקות בדק בית מקיפות ויסודיות, המספקות ללקוחותיי את השקט הנפשי והביטחון 
                  שהם זקוקים לו בעת רכישת דירה חדשה. הבדיקות שלי מתבצעות באמצעות ציוד טכנולוגי מתקדם, 
                  המאפשר לי לזהות ליקויי בנייה שאינם גלויים לעין, ולהבטיח שהנכס שלך עומד בכל התקנים והדרישות.
                </p>
              </div>
            </div>
            
            <div 
              ref={sectionRefs.service}
              className="transition-all duration-700 ease-out opacity-0 translate-y-10"
            >
              <div className="border-r-2 border-primary-500 pr-6 mb-12">
                <h2 className="text-2xl font-rubik font-semibold text-primary-300 mb-3">השירות שלי</h2>
                <p className="text-base text-gray-100 leading-relaxed mb-6">
                  בחברת "אלעד מהנדסים", אני מאמין בליווי אישי ומקצועי לכל לקוח. התהליך כולל:
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center mt-1">
                      <span className="font-medium text-sm">1</span>
                    </div>
                    <div className="mr-4">
                      <h3 className="font-medium text-lg text-primary-300">בדיקה מקיפה של הנכס</h3>
                      <p className="text-sm text-gray-300">סריקה יסודית של כל מערכות הבית, כולל איתור ליקויי בנייה, רטיבות, סדקים, ובעיות תשתית.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center mt-1">
                      <span className="font-medium text-sm">2</span>
                    </div>
                    <div className="mr-4">
                      <h3 className="font-medium text-lg text-primary-300">דו"ח הנדסי מפורט</h3>
                      <p className="text-sm text-gray-300">בסיום הבדיקה, תקבלו דו"ח מקצועי המתעד את כל הממצאים, מלווה בתמונות והסברים ברורים.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              ref={sectionRefs.advantage}
              className="transition-all duration-700 ease-out opacity-0 translate-y-10"
            >
              <div className="border-r-2 border-primary-500 pr-6">
                <h2 className="text-2xl font-rubik font-semibold text-primary-300 mb-3">היתרון שלי</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-primary-800/40 p-4 rounded border border-primary-700">
                    <div className="text-primary-400 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg text-white mb-1">מקצועיות ללא פשרות</h3>
                    <p className="text-sm text-gray-300">כמהנדס בניין מוסמך, אני מביא ידע טכני ומקצועי ברמה הגבוהה ביותר.</p>
                  </div>
                  
                  <div className="bg-primary-800/40 p-4 rounded border border-primary-700">
                    <div className="text-primary-400 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg text-white mb-1">ניסיון מוכח</h3>
                    <p className="text-sm text-gray-300">מאות לקוחות מרוצים נהנו משירותי בדק הבית שלי ומהליווי המקצועי שקיבלו.</p>
                  </div>
                  
                  <div className="bg-primary-800/40 p-4 rounded border border-primary-700">
                    <div className="text-primary-400 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg text-white mb-1">דוחות מוכרים משפטית</h3>
                    <p className="text-sm text-gray-300">הדוחות שלי מנוסחים באופן מקצועי ומוכרים בבתי משפט, במקרה שנדרשת התערבות משפטית.</p>
                  </div>
                  
                  <div className="bg-primary-800/40 p-4 rounded border border-primary-700">
                    <div className="text-primary-400 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg text-white mb-1">שירות אישי</h3>
                    <p className="text-sm text-gray-300">אני מאמין במתן יחס אישי לכל לקוח, והתאמת השירות לצרכים הספציפיים שלו.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* כפתור פעולה */}
            <div className="pt-8 text-center">
              <a 
                href="tel:+972548116482" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-flex items-center"
                onClick={(e) => {
                  window.location.href = 'tel:+972548116482';
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                תיאום בדיקת בדק בית
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;