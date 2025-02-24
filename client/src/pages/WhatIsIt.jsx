// src/pages/HomeInspection.jsx
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaTools, 
  FaChartLine, 
  FaUserShield, 
  FaFileAlt, 
  FaHeadset, 
  FaMoneyBill, 
  FaRuler, 
  FaClipboardCheck, 
  FaHardHat,
  FaSearchPlus,
  FaBuilding,
  FaShieldAlt
} from 'react-icons/fa';
import { TbRuler2, TbMathFunction } from 'react-icons/tb';
import { GiBrickWall, GiWaterGallon } from 'react-icons/gi';
import { RiRulerLine } from 'react-icons/ri';
import AnimatedCTA from '../components/AnimatedCTA';

// קומפוננטה של רקע הנדסי אנימטיבי
const EngineeringBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none z-0">
      {/* רשת קווים - סגנון שרטוט הנדסי */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0">
        <defs>
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#007BFF" strokeWidth="0.3" />
          </pattern>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#smallGrid)" />
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#007BFF" strokeWidth="0.8" />
          </pattern>
          <pattern id="blueprint" width="300" height="300" patternUnits="userSpaceOnUse">
            <circle cx="150" cy="150" r="50" fill="none" stroke="#007BFF" strokeWidth="0.5" opacity="0.5" />
            <rect x="100" y="100" width="100" height="100" fill="none" stroke="#007BFF" strokeWidth="0.5" opacity="0.5" />
            <line x1="0" y1="150" x2="300" y2="150" stroke="#007BFF" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.5" />
            <line x1="150" y1="0" x2="150" y2="300" stroke="#007BFF" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3" />
        <rect width="100%" height="100%" fill="url(#blueprint)" opacity="0.5" />
      </svg>

      {/* אלמנטים אנימטיביים הנדסיים */}
      <div className="absolute inset-0">
        {/* קווי מדידה נעים */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`measure-line-${i}`}
            className="absolute h-px bg-primary-600"
            style={{ top: `${20 + i * 30}%`, right: 0, width: '100%' }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1], 
              scaleX: [0, 1, 0],
              x: ['0%', '100%', '0%'] 
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* מעגלי מדידה */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`measure-circle-${i}`}
            className="absolute rounded-full border-2 border-primary-500"
            style={{ 
              top: `${40 + i * 20}%`, 
              left: `${30 + i * 30}%`, 
              width: '150px', 
              height: '150px',
              opacity: 0.05
            }}
            animate={{ 
              opacity: [0.05, 0.2, 0.05], 
              scale: [0, 1.1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: i * 10,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* קווי זווית מדידה */}
        <motion.div
          className="absolute"
          style={{ 
            top: '60%', 
            left: '70%', 
            width: '200px', 
            height: '200px', 
            border: '1px dashed rgba(0, 123, 255, 0.2)',
            borderRadius: '50%'
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.div 
            className="absolute h-full w-0.5 bg-primary-500 left-1/2"
            style={{ opacity: 0.1, transformOrigin: 'bottom center' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

// קומפוננטת אנימציה למדידה
const MeasuringAnimation = () => {
  return (
    <motion.div 
      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"
      animate={{ 
        scaleX: [0, 1, 0],
        opacity: [0, 0.7, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// אנימציה לאייקון
const AnimatedIcon = ({ icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay: delay 
      }}
      className="flex-shrink-0 mr-3 text-accent-500"
    >
      {icon}
    </motion.div>
  );
};

// קומפוננטת בדיקה עם אנימציה
const InspectionCheckItem = ({ icon, text, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { 
          opacity: 1, 
          x: 0, 
          transition: { 
            duration: 0.5, 
            delay: index * 0.1 
          } 
        }
      }}
      className="flex items-start space-x-2 mb-3"
    >
      <span className="text-accent-500 ml-2 mt-1">{icon}</span>
      <span className="text-lg">{text}</span>
    </motion.li>
  );
};

// קומפוננטת הגדרה
const DefinitionCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const listItems = [
    { icon: <GiWaterGallon size={20} />, text: "מערכות אינסטלציה וצנרת" },
    { icon: <FaTools size={20} />, text: "מערכות חשמל ותקשורת" },
    { icon: <FaBuilding size={20} />, text: "מערכות מיזוג אוויר ואוורור" },
    { icon: <FaShieldAlt size={20} />, text: "איטום ובידוד" },
    { icon: <GiBrickWall size={20} />, text: "שלד המבנה ויציבותו" },
    { icon: <FaRuler size={20} />, text: "גימורים פנימיים וחיצוניים" },
    { icon: <FaCheckCircle size={20} />, text: "התאמה לתקני בטיחות אש" }
  ];

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg shadow-xl p-8 mb-12 relative overflow-hidden border-t-4 border-primary-500"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.6, 
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.1
          } 
        }
      }}
      initial="hidden"
      animate={controls}
    >
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary-50 rounded-full opacity-30 z-0"></div>
      <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-accent-50 rounded-full opacity-30 z-0"></div>
      
      <div className="relative z-10">
        <motion.div 
          className="flex items-center mb-6"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
          }}
        >
          <AnimatedIcon icon={<FaHardHat size={28} />} />
          <h2 className="text-2xl font-rubik font-bold text-primary-700">
            הגדרה מקצועית לבדיקת מבנים
          </h2>
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
          }}
        >
          <p className="text-lg leading-relaxed">
            בדק בית הוא תהליך הערכה מקיף ויסודי של נכס, שמטרתו לוודא את התאמתו לתקני הבנייה המחייבים,
            לאתר ליקויים קיימים ולהעריך את הצורך בתיקונים או שיפורים. בדיקה זו חיונית במיוחד לפני רכישת נכס,
            אך מומלצת גם כחלק מתחזוקה שוטפת למבנים קיימים.
          </p>
          
          <motion.p 
            className="text-lg leading-relaxed mt-4 font-medium"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } }
            }}
          >
            במהלך בדק הבית, מבוצעת סקירה הנדסית מקיפה של כל מרכיבי הנכס, לרבות:
          </motion.p>
          
          <motion.ul className="mt-4 space-y-2 pr-2">
            {listItems.map((item, index) => (
              <InspectionCheckItem 
                key={index} 
                icon={item.icon} 
                text={item.text} 
                index={index} 
              />
            ))}
          </motion.ul>
          
          <motion.div 
            className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-transparent rounded-lg border-r-4 border-primary-500"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }
            }}
          >
            <p className="text-lg leading-relaxed">
              הבדיקה מספקת תמונת מצב אובייקטיבית ומפורטת, המאפשרת לקבל החלטות מושכלות בנוגע לרכישה,
              שיפוץ או תחזוקת הנכס, תוך צמצום סיכונים והוצאות בלתי צפויות בעתיד.
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      <MeasuringAnimation />
    </motion.div>
  );
};

// קומפוננטת יתרון
const AdvantageCard = ({ title, description, icon, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg hover:bg-primary-50"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.5, 
            delay: index * 0.1 
          } 
        }
      }}
      initial="hidden"
      animate={controls}
    >
      <div className="flex items-center mb-3">
        <motion.div
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: index * 0.1 
          }}
          className="p-3 bg-primary-100 rounded-full text-primary-600 mr-3"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-rubik font-semibold text-secondary-800">
          {title}
        </h3>
      </div>
      <p className="text-lg text-secondary-700">
        {description}
      </p>
    </motion.div>
  );
};

// עמוד ראשי - מה זה בדק בית
const HomeInspection = () => {
  const advantages = [
    {
      title: 'מומחיות וניסיון',
      description: 'צוות המהנדסים שלנו מורכב ממומחים מנוסים בתחום בדק הבית, בעלי ידע מעמיק בתקנות הבנייה וניסיון רב שנים באיתור ליקויים מורכבים.',
      icon: <FaChartLine size={20} />
    },
    {
      title: 'דוחות מקיפים ומדויקים',
      description: 'אנו מספקים דוחות בדק בית מפורטים, הכוללים תיאור מלא של כל הליקויים שנמצאו, הערכת חומרתם, המלצות לתיקון, ולעיתים אף אומדן עלויות.',
      icon: <FaFileAlt size={20} />
    },
    {
      title: 'אמינות ושקיפות',
      description: 'אנו מחויבים לאמינות מלאה, שקיפות ויושרה מקצועית. הדוחות שלנו מבוססים על ממצאים אובייקטיביים, ומטרתם לספק לך את התמונה המלאה והמדויקת ביותר של מצב הנכס.',
      icon: <FaUserShield size={20} />
    },
    {
      title: 'שירות ממוקד לקוח',
      description: 'אנו מעניקים יחס אישי ומקצועי לכל לקוח, תוך הקפדה על זמינות, מענה מהיר לפניות והתאמת השירות לצרכים הייחודיים שלך.',
      icon: <FaHeadset size={20} />
    },
    {
      title: 'תמחור הוגן ותחרותי',
      description: 'אנו מציעים שירותי בדק בית באיכות הגבוהה ביותר, במחירים הוגנים ותחרותיים, המשקפים את המקצועיות והניסיון שלנו.',
      icon: <FaMoneyBill size={20} />
    },
    {
      title: 'בדיקות מתקדמות',
      description: 'אנו משתמשים בכלים וטכנולוגיות מתקדמות לאיתור ליקויים נסתרים, כולל מצלמות טרמיות, גלאי רטיבות מדויקים ומכשור ייעודי לבדיקת איטום.',
      icon: <FaSearchPlus size={20} />
    }
  ];

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        when: "beforeChildren", 
        staggerChildren: 0.3 
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  const advantageSectionRef = useRef(null);
  const advantageSectionInView = useInView(advantageSectionRef, { once: true, amount: 0.1 });
  const advantageSectionControls = useAnimation();

  useEffect(() => {
    if (advantageSectionInView) {
      advantageSectionControls.start("visible");
    }
  }, [advantageSectionControls, advantageSectionInView]);

  return (
    <div className="min-h-screen bg-gray-50 font-heebo text-secondary-800 relative overflow-hidden">
      {/* רקע אנימטיבי */}
      <EngineeringBackground />
      
      <motion.header
        className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 text-center overflow-hidden"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* אלמנטים עיצוביים בכותרת */}
          <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-10">
            <defs>
              <pattern id="headerGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#headerGrid)" />
          </svg>
          
          {/* כלי מדידה אנימטיביים */}
          <motion.div
            className="absolute top-1/4 right-10 w-20 h-20 border-2 border-white rounded-full opacity-10"
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-10 w-16 h-16 border-2 border-white opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="inline-block bg-white text-primary-700 text-sm font-bold px-4 py-1 rounded-full mb-4"
            variants={heroItemVariants}
          >
            מבוא מקצועי
          </motion.div>
          
          <motion.h1
            className="text-4xl sm:text-5xl font-rubik font-bold mb-4"
            variants={heroItemVariants}
          >
            מה זה בדק בית?
          </motion.h1>
          
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            variants={heroItemVariants}
          >
            הבטחת איכות, בטיחות וערך הנכס שלך באמצעות בדיקה הנדסית מקיפה ומקצועית
          </motion.p>
          
          <motion.div
            className="mt-8 flex justify-center space-x-4 space-x-reverse"
            variants={heroItemVariants}
          >
            <a
              href="tel:+972548116482"
              className="px-6 py-3 bg-white text-primary-700 rounded-lg shadow hover:shadow-lg transition-all duration-300 font-medium"
            >
              לייעוץ ראשוני חינם
            </a>
            <a
              href="/services"
              className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-300 font-medium"
            >
              לרשימת השירותים
            </a>
          </motion.div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* מקטע הגדרה */}
        <DefinitionCard />
        
        {/* מקטע יתרונות */}
        <motion.section
          ref={advantageSectionRef}
          className="bg-white rounded-lg shadow-xl p-8 relative overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.6, 
                ease: "easeOut",
                when: "beforeChildren",
                delayChildren: 0.3
              } 
            }
          }}
          initial="hidden"
          animate={advantageSectionControls}
        >
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary-50 rounded-full opacity-20 z-0"></div>
          
          <div className="relative z-10">
            <motion.div
              className="flex items-center justify-center mb-10"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <div className="h-px w-16 bg-primary-300 ml-4"></div>
              <h2 className="text-3xl font-rubik font-bold text-primary-700 flex items-center">
                <FaTools className="mr-2 text-accent-500" />
                למה לבחור באלעד מהנדסים לבדק הבית שלך?
              </h2>
              <div className="h-px w-16 bg-primary-300 mr-4"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <AdvantageCard
                  key={index}
                  title={advantage.title}
                  description={advantage.description}
                  icon={advantage.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          <MeasuringAnimation />
        </motion.section>
        
        <motion.section 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-6 px-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-rubik font-bold mb-4">בחירה באלעד מהנדסים היא בחירה בראש שקט</h3>
            <p className="text-lg mb-4">
              פנו אלינו עוד היום לקבלת ייעוץ ראשוני והצעת מחיר לבדיקת הנכס שלכם.
            </p>
            <a
              href="tel:+972548116482"
              className="inline-block px-6 py-3 bg-white text-primary-700 rounded-lg shadow hover:shadow-lg transition-all duration-300 font-medium"
            >
              לתיאום בדיקה עכשיו
            </a>
          </div>
        </motion.section>
          </main>
    </div>
  );
};

export default HomeInspection;