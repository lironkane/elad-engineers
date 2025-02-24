// src/pages/BedekBait.js

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion';

import {
  FaCheckCircle,
  FaClipboardCheck,
  FaShieldAlt,
  FaTools,
  FaSearch,
  FaHouseDamage,
  FaHome,
  FaBuilding,
  FaRuler,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHandshake,
  FaStar,
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';

import { BiBuildingHouse } from 'react-icons/bi';
import { GiBrickWall } from 'react-icons/gi';
import AnimatedCTA from '../components/AnimatedCTA';

// קומפוננטה של אנימציית רקע הנדסית
const EngineeringBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full">
        {/* רשת קווים אופקיים ואנכיים - מעין "תוכנית הנדסית" */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#007BFF" strokeWidth="0.5" />
            </pattern>
            <pattern id="blueprint" width="400" height="400" patternUnits="userSpaceOnUse">
              <circle cx="200" cy="200" r="50" fill="none" stroke="#007BFF" strokeWidth="0.5" />
              <rect x="150" y="150" width="100" height="100" fill="none" stroke="#007BFF" strokeWidth="0.5" />
              <line x1="0" y1="200" x2="400" y2="200" stroke="#007BFF" strokeWidth="0.5" strokeDasharray="5,5" />
              <line x1="200" y1="0" x2="200" y2="400" stroke="#007BFF" strokeWidth="0.5" strokeDasharray="5,5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>
      
      {/* אנימציית מדידות נעות */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-primary-400"
          style={{ 
            top: `${20 + i * 15}%`, 
            left: 0,
            width: '100%'
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 2,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      ))}
      
      {/* מעגלי מדידה */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border border-primary-400"
          style={{ 
            top: `${30 + i * 20}%`, 
            left: `${20 + i * 20}%`,
            width: '150px',
            height: '150px'
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: i * 5,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

// אנימציה לכרטיסי השירות
const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5, 
            delay: index * 0.2 
          }
        }
      }}
      className="bg-white rounded-xl shadow-xl p-6 flex flex-col relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:scale-105 border-t-4 border-primary-500"
    >
      {/* אפקטים של רקע טכני שמופיע בהובר */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative">
        <div className="flex items-center space-x-3 space-x-reverse mb-4">
          <div className="p-3 bg-primary-100 rounded-full text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
            {service.icon}
          </div>
          <h3 className="text-xl font-rubik font-bold text-secondary-900">
            {service.title}
          </h3>
        </div>

        <p className="text-secondary-700 mb-5 font-heebo leading-relaxed">
          {service.shortDescription}
        </p>

        <div className="h-px w-full bg-gradient-to-l from-primary-200 to-transparent mb-5"></div>

        <ul className="mt-auto space-y-3">
          {service.points.map((point, i) => (
            <li key={i} className="flex items-start">
              <FaCheckCircle className="text-accent-500 ml-2 mt-1" />
              <span className="text-secondary-800 leading-relaxed font-heebo">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// סעיפים עיקריים מורחבים (bullet points) למה כולל בדק בית
const mainBulletPoints = [
  {
    text: 'דוח הנדסי מפורט הכולל פירוט ליקויים והפניה לתקנים הרלוונטיים',
    icon: <FaClipboardCheck size={20} />
  },
  {
    text: 'בדיקת עמידה בתקני הבנייה הישראליים ובתקנות התכנון והבנייה',
    icon: <FaShieldAlt size={20} />
  },
  {
    text: 'בדיקת ממ"ד בהתאם לדרישות פיקוד העורף (הג"א)',
    icon: <GiBrickWall size={20} />
  },
  {
    text: 'תשתיות חשמל, אינסטלציה, מיזוג אוויר ואיטום',
    icon: <FaTools size={20} />
  },
  {
    text: 'תיעוד הליקויים בצילום מקצועי והערכת עלויות תיקון',
    icon: <FaSearch size={20} />
  },
  {
    text: 'דיווח קביל משפטית מול הקבלן או בבית המשפט',
    icon: <FaClipboardCheck size={20} />
  },
  {
    text: 'ליווי מקצועי עד לתיקון הליקויים בפועל',
    icon: <BiBuildingHouse size={20} />
  }
];

// שלושה סוגי שירותי בדק בית, כל אחד עם רשימת נקודות ייחודית
const bedekServices = [
  {
    title: 'דירות חדשות מקבלן',
    icon: <FaHouseDamage size={24} />,
    shortDescription: `מבטיחים שהדירה החדשה אכן תואמת את התכניות והמפרט שקיבלתם, 
    ומאתרים ליקויים שעשויים לגרום להוצאות עתידיות.`,
    points: [
      'התאמת הדירה לחוזה המכר ולמפרט הטכני',
      'בדיקת גימורים בהתאם לתוכניות שינוי דיירים',
      'איתור כשלים מבניים וליקויי איטום בשלב מוקדם',
      'חוות דעת על איכות החומרים והביצוע'
    ]
  },
  {
    title: 'דירות יד שנייה',
    icon: <FaHome size={24} />,
    shortDescription: `בדיקה מקצועית שתחשוף ליקויים נסתרים, רטיבויות או מערכות מיושנות,
    כדי שתדעו בדיוק מה מצב הנכס לפני רכישה או שיפוץ.`,
    points: [
      'סקירת שלד ובדיקת יציבות הנכס',
      'זיהוי נזקי רטיבות, עובש וסדקים',
      'הערכת עלויות שיפוץ או תיקון פגמים',
      'בדיקת תשתיות מיושנות והמלצות לשדרוג'
    ]
  },
  {
    title: 'נכסים מסחריים',
    icon: <FaBuilding size={24} />,
    shortDescription: `בין אם זה משרד, חנות או מבנה תעשייתי, אנו בודקים עמידה בתקני בטיחות,
    מערכות HVAC, ספרינקלרים, ועוד.`,
    points: [
      'התאמה לתקנות כיבוי אש ולבטיחות מבנים',
      'בדיקת מערכות חשמל ותקשורת לעומסים גבוהים',
      'זיהוי מפגעים שעלולים לפגוע בערך הנכס',
      'ניתוח נגישות ועמידה בתקנים עדכניים'
    ]
  }
];

// קומפוננטת המספרים המרשימים
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const stats = [
    { number: "1000+", text: "פרויקטים שהושלמו" },
    { number: "97%", text: "שביעות רצון לקוחות" },
    { number: "15+", text: "שנות ניסיון" },
    { number: "50+", text: "קבלנים ויזמים שעובדים איתנו" }
  ];
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
          }
        }
      }}
      className="py-16 bg-primary-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
            >
              <div className="font-rubik font-bold text-4xl mb-2">{stat.number}</div>
              <div className="text-primary-100">{stat.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const BedekBait = () => {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.8]);
  const headerScale = useTransform(scrollYProgress, [0, 0.05], [1, 0.98]);
  
  // רפרנס לסקשנים השונים לאנימציה
  const whatIsRef = useRef(null);
  const servicesRef = useRef(null);
  const whatIsInView = useInView(whatIsRef, { once: false, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: false, amount: 0.1 });
  
  const whatIsControls = useAnimation();
  const servicesControls = useAnimation();
  
  useEffect(() => {
    if (whatIsInView) {
      whatIsControls.start("visible");
    }
    if (servicesInView) {
      servicesControls.start("visible");
    }
  }, [whatIsControls, servicesControls, whatIsInView, servicesInView]);
  
  return (
    <div className="min-h-screen font-heebo bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* רקע הנדסי אנימטיבי */}
      <EngineeringBackground />
      
      <motion.header
        style={{ opacity: headerOpacity, scale: headerScale }}
        className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 space-x-reverse">
            <FaRuler className="text-primary-500 ml-2" size={24} />
            <h1 className="text-2xl font-rubik font-bold bg-gradient-to-l from-primary-600 to-accent-600 text-transparent bg-clip-text">
              בדק בית מקצועי
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse text-secondary-800">
            <a href="#what-is" className="hover:text-primary-600 transition-colors">מה כולל?</a>
            <a href="#services" className="hover:text-primary-600 transition-colors">סוגי נכסים</a>
            <a href="#contact" className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md transition-colors">צור קשר</a>
          </nav>
        </div>
      </motion.header>
      
      <main className="relative z-10 pt-10">
        {/* כותרת ראשית עם אנימציה */}
        <motion.section
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-right"
          dir="rtl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <motion.h2 
                className="text-4xl md:text-5xl font-rubik font-extrabold text-secondary-900 leading-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                בדק בית מקצועי
                <span className="block text-primary-600">לנכס ללא פשרות</span>
              </motion.h2>
              
              <motion.p 
                className="mt-4 text-lg md:text-xl text-secondary-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                בדק בית מקצועי מספק לכם שקט נפשי וידע מלא על מצב הנכס.  
                הצוות שלנו, המורכב ממהנדסים מומחים, יאתר את כל הליקויים האפשריים ויבטיח שתיכנסו לנכס ברגל ימין.
              </motion.p>
              
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 font-medium">
                  קבע בדיקה עכשיו
                </button>
                <button className="px-6 py-3 bg-white border border-primary-500 text-primary-600 hover:bg-primary-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 font-medium">
                  למידע נוסף
                </button>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2">
              <motion.div 
                className="relative aspect-square max-w-md w-full mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.3, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="absolute inset-0 rounded-full bg-primary-100 opacity-60 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 opacity-40"></div>
                <div className="absolute inset-8 rounded-full bg-white shadow-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaRuler size={80} className="text-primary-600 transform -rotate-45" />
                </div>
                
                {/* קווי מדידה אנימטיביים */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-primary-500"
                    style={{
                      height: '2px',
                      width: '100px',
                      top: '50%',
                      left: '50%',
                      transformOrigin: 'left center',
                      transform: `rotate(${i * 90}deg) translateX(0)`,
                    }}
                    animate={{
                      scaleX: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* מקטע ראשי: מה כולל בדק בית? */}
        <section 
          id="what-is" 
          ref={whatIsRef} 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-right"
          dir="rtl"
        >
          <motion.div
            initial="hidden"
            animate={whatIsControls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.1,
                }
              }
            }}
          >
            <motion.h2 
              className="text-3xl font-rubik font-bold text-secondary-900 mb-3 pb-2 border-b-2 border-primary-500 inline-block"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
            >
              מה כולל בדק בית מקצועי?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-secondary-700 mb-8"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } }
              }}
            >
              בדק בית איכותי מבוצע על-ידי מהנדסים מוסמכים בעלי ניסיון, וכולל את הבדיקות המקיפות הבאות:
            </motion.p>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {mainBulletPoints.map((point, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                          opacity: 1, 
                          y: 0, 
                          transition: { 
                            duration: 0.4,
                            delay: index * 0.1
                          } 
                        }
                      }}
                    >
                      <div className="ml-3 p-2 bg-primary-100 rounded-full text-primary-600">
                        {point.icon}
                      </div>
                      <span className="text-secondary-800 leading-relaxed">
                        {point.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-600 to-accent-500 px-6 py-4">
                <p className="text-white font-medium text-center">
                  בדק הבית שלנו מבוסס על למעלה מ-15 שנות ניסיון בתחום ההנדסה והבנייה
                </p>
              </div>
            </div>
            
            {/* סרגל אינדיקציה אנימטיבי */}
            <motion.div 
              className="mt-8 h-2 bg-gray-200 rounded-full overflow-hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } }
              }}
            >
              <motion.div 
                className="h-full bg-gradient-to-l from-primary-600 to-accent-500"
                initial={{ width: "0%" }}
                animate={{ width: "87%" }}
                transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
              />
            </motion.div>
            <div className="flex justify-between text-sm text-secondary-500 mt-1">
              <span>0%</span>
              <span>87% מהלקוחות מדווחים על חיסכון כספי משמעותי</span>
              <span>100%</span>
            </div>
          </motion.div>
        </section>

        {/* סקציית נתונים מרשימים */}
        <StatsSection />

        {/* סוגי נכסים - בדק בית */}
        <section 
          id="services" 
          ref={servicesRef}
          className="py-16 bg-gray-50 border-t border-b border-gray-200 relative overflow-hidden"
          dir="rtl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={servicesControls}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.1,
                  }
                }
              }}
            >
              <motion.h2 
                className="text-3xl font-rubik font-bold text-secondary-900 text-center mb-2"
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                סוגי נכסים בהם אנו מבצעים בדק בית
              </motion.h2>
              
              <motion.div 
                className="h-1 w-24 bg-primary-500 mx-auto mb-6"
                variants={{
                  hidden: { opacity: 0, width: 0 },
                  visible: { opacity: 1, width: 96, transition: { duration: 0.7 } }
                }}
              />
              
              <motion.p 
                className="text-lg text-secondary-700 text-center max-w-3xl mx-auto mb-12"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.5 } }
                }}
              >
                לכל סוג נכס מאפיינים ייחודיים, וצוות המהנדסים שלנו מתאים את הבדיקה לצרכים הספציפיים של הנכס.
                אנחנו מזהים נקודות כשל נסתרות ומספקים לכם כלים להחלטה או למיקוח.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bedekServices.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </div>
              
              {/* יתרונות נוספים */}
              <motion.div 
                className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
                }}
              >
                <h3 className="text-2xl font-rubik font-bold text-primary-600 mb-6 text-center">
                  למה לבצע בדק בית עם הצוות שלנו?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="flex items-start">
    <div className="ml-4 p-3 bg-primary-100 rounded-full text-primary-600">
      <FaShieldAlt size={20} />
    </div>
    <div>
      <h4 className="font-bold text-lg text-secondary-900 mb-2">מהנדסים מוסמכים בלבד</h4>
      <p className="text-secondary-700">כל הבדיקות שלנו מבוצעות על-ידי מהנדסים רשומים בעלי רישיון בתוקף ולא ע"י הנדסאים או טכנאים.</p>
    </div>
  </div>
  
  <div className="flex items-start">
    <div className="ml-4 p-3 bg-primary-100 rounded-full text-primary-600">
      <FaTools size={20} />
    </div>
    <div>
      <h4 className="font-bold text-lg text-secondary-900 mb-2">ציוד מתקדם</h4>
      <p className="text-secondary-700">שימוש במכשור טכנולוגי מתקדם לאיתור ליקויים סמויים כגון מצלמות טרמיות ואמצעי מדידה מדויקים.</p>
    </div>
  </div>
  
  <div className="flex items-start">
    <div className="ml-4 p-3 bg-primary-100 rounded-full text-primary-600">
      <FaClipboardCheck size={20} />
    </div>
    <div>
      <h4 className="font-bold text-lg text-secondary-900 mb-2">דוחות מפורטים</h4>
      <p className="text-secondary-700">דוחות מקיפים הכוללים ממצאים, תמונות, הפניות לתקנים ואומדן עלויות לתיקון.</p>
    </div>
  </div>
  
  <div className="flex items-start">
    <div className="ml-4 p-3 bg-primary-100 rounded-full text-primary-600">
      <FaHandshake size={20} />
    </div>
    <div>
      <h4 className="font-bold text-lg text-secondary-900 mb-2">ליווי מקצועי</h4>
      <p className="text-secondary-700">ליווי אישי ומקצועי לאורך כל התהליך, כולל עזרה במו"מ מול קבלנים ומוכרים.</p>
    </div>
  </div>
</div>

{/* כפתור קריאה לפעולה */}
<div className="mt-8 text-center">
  <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 font-medium">
    קבל הצעת מחיר לבדק בית
  </button>
</div>

{/* סרגל התקדמות ויזואלי */}
<div className="mt-12">
  <h3 className="text-lg font-bold text-secondary-900 mb-3">הלקוחות שלנו מדווחים על:</h3>
  
  <div className="space-y-4">
    <div>
      <div className="flex justify-between mb-1 text-sm">
        <span>חיסכון כספי משמעותי</span>
        <span className="font-bold">92%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-accent-500" style={{ width: '92%' }}></div>
      </div>
    </div>
    
    <div>
      <div className="flex justify-between mb-1 text-sm">
        <span>שיפור בתנאי ההסכם מול הקבלן</span>
        <span className="font-bold">87%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-accent-500" style={{ width: '87%' }}></div>
      </div>
    </div>
    
    <div>
      <div className="flex justify-between mb-1 text-sm">
        <span>שקט נפשי וביטחון בהחלטת הרכישה</span>
        <span className="font-bold">95%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-accent-500" style={{ width: '95%' }}></div>
      </div>
    </div>
  </div>
  
  <p className="text-secondary-600 mt-4 text-sm">* בהתבסס על סקר שביעות רצון שנערך בקרב 500 לקוחות בשנה האחרונה</p>
</div>

{/* חלק טסטימוניאלס - המלצות לקוחות */}
<div className="mt-16">
  <h3 className="text-2xl font-rubik font-bold text-secondary-900 mb-6 text-center">מה הלקוחות שלנו אומרים</h3>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center ml-3">
          <span className="text-primary-700 font-bold">ד"ר</span>
        </div>
        <div>
          <h4 className="font-bold text-secondary-900">ד"ר יעל כהן</h4>
          <p className="text-sm text-secondary-600">תל אביב, דירה חדשה מקבלן</p>
        </div>
      </div>
      <p className="text-secondary-700 leading-relaxed">
        "הבדיקה המקצועית חסכה לנו עשרות אלפי שקלים בעלויות תיקון. איתרו ליקויי איטום שהיו בלתי נראים לעין והקבלן תיקן הכל לפני האכלוס."
      </p>
      <div className="mt-4 flex">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center ml-3">
          <span className="text-primary-700 font-bold">א"מ</span>
        </div>
        <div>
          <h4 className="font-bold text-secondary-900">אלון מזרחי</h4>
          <p className="text-sm text-secondary-600">חיפה, דירת יד שניה</p>
        </div>
      </div>
      <p className="text-secondary-700 leading-relaxed">
        "הדוח המפורט היה נכס אדיר במשא ומתן. הצלחנו להוריד את מחיר הדירה ב-8% בזכות הממצאים המקצועיים. שירות מעולה ומשתלם."
      </p>
      <div className="mt-4 flex">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center ml-3">
          <span className="text-primary-700 font-bold">נ"ל</span>
        </div>
        <div>
          <h4 className="font-bold text-secondary-900">נופר לוי</h4>
          <p className="text-sm text-secondary-600">ירושלים, נכס מסחרי</p>
        </div>
      </div>
      <p className="text-secondary-700 leading-relaxed">
        "המקצועיות ניכרת בכל שלב. המהנדס גילה בעיות חשמל שיכלו להוות סכנה אמיתית לעסק. הליווי בתהליך התיקונים היה יוצא מן הכלל."
      </p>
      <div className="mt-4 flex">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
    </div>
  </div>
</div>

{/* חלק שאלות נפוצות */}
<div className="mt-16">
  <h3 className="text-2xl font-rubik font-bold text-secondary-900 mb-6 text-center">שאלות נפוצות</h3>
  
  <div className="space-y-4">
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full py-4 px-6 text-right bg-gray-50 hover:bg-primary-50 flex justify-between items-center transition-colors">
        <h4 className="font-bold text-secondary-900">כמה זמן אורכת בדיקת בדק בית?</h4>
        <FaChevronDown className="text-primary-600" />
      </button>
      <div className="py-4 px-6 bg-white">
        <p className="text-secondary-700">
          בדיקת בדק בית אורכת בין שעתיים לארבע שעות, בהתאם לגודל הנכס ומורכבותו. דוח מפורט נשלח תוך 48 שעות מסיום הבדיקה.
        </p>
      </div>
    </div>
    
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full py-4 px-6 text-right bg-gray-50 hover:bg-primary-50 flex justify-between items-center transition-colors">
        <h4 className="font-bold text-secondary-900">מתי מומלץ לבצע בדק בית?</h4>
        <FaChevronDown className="text-primary-600" />
      </button>
      <div className="py-4 px-6 bg-white">
        <p className="text-secondary-700">
          לדירות חדשות מקבלן - לפני חתימה על טופס 4 וקבלת מפתח. לדירות יד שניה - לפני סגירת העסקה וחתימה על חוזה. לנכסים מסחריים - לפני חתימת חוזה שכירות או רכישה.
        </p>
      </div>
    </div>
    
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full py-4 px-6 text-right bg-gray-50 hover:bg-primary-50 flex justify-between items-center transition-colors">
        <h4 className="font-bold text-secondary-900">האם נדרשת נוכחות שלי בבדיקה?</h4>
        <FaChevronDown className="text-primary-600" />
      </button>
      <div className="py-4 px-6 bg-white">
        <p className="text-secondary-700">
          מומלץ להיות נוכח לפחות בחלק מהבדיקה, במיוחד בסיכום הממצאים. עם זאת, אין הדבר הכרחי ואנו יכולים לבצע את הבדיקה גם ללא נוכחותכם.
        </p>
      </div>
    </div>
    
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button className="w-full py-4 px-6 text-right bg-gray-50 hover:bg-primary-50 flex justify-between items-center transition-colors">
        <h4 className="font-bold text-secondary-900">האם הדוח שלכם מתקבל משפטית?</h4>
        <FaChevronDown className="text-primary-600" />
      </button>
      <div className="py-4 px-6 bg-white">
        <p className="text-secondary-700">
          כן, הדוחות שלנו נכתבים על ידי מהנדסים מוסמכים ומוכרים בבתי משפט ובהליכים משפטיים מול קבלנים, מוכרים וחברות ביטוח.
        </p>
      </div>
    </div>
  </div>
</div>

{/* חלק תחתון עם CTA סופי */}
<div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-xl p-8 text-white text-center">
  <h3 className="text-2xl font-rubik font-bold mb-4">מוכנים לקבל שקט נפשי לגבי הנכס שלכם?</h3>
  <p className="mb-6 max-w-2xl mx-auto">
    צוות המהנדסים המקצועי שלנו נמצא כאן כדי לעזור לכם לקבל החלטות מושכלות ולחסוך זמן וכסף. בדק בית איכותי הוא ההשקעה החכמה והמשתלמת ביותר שתעשו בתהליך רכישת הנכס.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <button className="px-6 py-3 bg-white text-primary-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 font-medium">
      תיאום בדיקה עכשיו
    </button>
    <button className="px-6 py-3 bg-transparent border border-white text-white hover:bg-white/10 rounded-lg transition duration-300 font-medium">
      שיחה עם מהנדס
    </button>
  </div>
</div>

{/* פוטר */}
<footer className="mt-16 pt-12 border-t border-gray-200">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
    <div>
      <h4 className="font-bold text-lg text-secondary-900 mb-4">בדק בית מקצועי</h4>
      <p className="text-secondary-700">
        שירותי בדיקה הנדסית מקצועית לכל סוגי הנכסים - דירות חדשות, יד שנייה ונכסים מסחריים.
      </p>
    </div>
    
    <div>
      <h4 className="font-bold text-lg text-secondary-900 mb-4">איזורי שירות</h4>
      <ul className="space-y-2 text-secondary-700">
        <li>תל אביב והמרכז</li>
        <li>ירושלים והסביבה</li>
        <li>חיפה והצפון</li>
        <li>באר שבע והדרום</li>
      </ul>
    </div>
    
    <div>
      <h4 className="font-bold text-lg text-secondary-900 mb-4">צור קשר</h4>
      <ul className="space-y-2 text-secondary-700">
        <li className="flex items-center">
          <FaPhone className="ml-2" size={14} />
          <span dir="ltr">03-1234567</span>
        </li>
        <li className="flex items-center">
          <FaEnvelope className="ml-2" size={14} />
          <span>info@bedek-bait.co.il</span>
        </li>
        <li className="flex items-center">
          <FaMapMarkerAlt className="ml-2" size={14} />
          <span>רחוב הבונים 10, תל אביב</span>
        </li>
      </ul>
    </div>
    
    <div>
      <h4 className="font-bold text-lg text-secondary-900 mb-4">שעות פעילות</h4>
      <ul className="space-y-2 text-secondary-700">
        <li>ימים א'-ה': 08:00-18:00</li>
        <li>יום ו': 08:00-13:00</li>
        <li>שבת: סגור</li>
      </ul>
      
      <div className="mt-4 flex space-x-4">
        <a href="#" className="text-primary-600 hover:text-primary-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-primary-600 hover:text-primary-800">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-primary-600 hover:text-primary-800">
          <FaLinkedin size={20} />
        </a>
        <a href="#" className="text-primary-600 hover:text-primary-800">
          <FaWhatsapp size={20} />
        </a>
      </div>
    </div>
  </div>
  <div className="py-4 border-t border-gray-200 text-center text-secondary-600 text-sm">
    <p>© {new Date().getFullYear()} בדק בית מקצועי. כל הזכויות שמורות.</p>
  </div>
</footer>

              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA תחתון */}
        <section id="contact" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCTA />
        </section>
      </main>
      
      <footer className="bg-secondary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-300">בדק בית מקצועי</h3>
              <p className="text-gray-400">
                צוות המהנדסים שלנו בעל ניסיון של למעלה מ-15 שנה בתחום. נשמח לסייע לך בכל שאלה.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-300">ליצירת קשר</h3>
              <ul className="space-y-2 text-gray-400">
                <li>טלפון: 03-1234567</li>
                <li>דוא"ל: info@bedek-bait.co.il</li>
                <li>כתובת: רחוב הבונים 10, תל אביב</li>
                <li>נייד: 050-1234567</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-300">שעות פעילות</h3>
              <ul className="space-y-2 text-gray-400">
                <li>ימים א'-ה': 08:00-18:00</li>
                <li>יום ו': 08:00-13:00</li>
                <li>שבת: סגור</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} בדק בית מקצועי. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BedekBait;