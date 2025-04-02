import React from 'react';
import {
  ArrowRightCircle,
  ArrowDownCircle,
  Handshake,
  FileSearch,
  ClipboardCheck,
  Settings,
} from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedClosingStatement = () => {
  // המשפט המלא
  const sentence = "ניסיוננו רב השנים מאפשר לנו ללוות אתכם בשלבי הפרויקט השונים – מהייעוץ הראשוני ועד השלמתו, תוך חיסכון בזמן ובעלויות.";

  const [currentWord, setCurrentWord] = React.useState(''); // מחזיק את הטקסט הנוכחי
  const [charIndex, setCharIndex] = React.useState(0);     // אינדקס התו הנוכחי

  React.useEffect(() => {
    const typeInterval = setInterval(() => {
      if (charIndex < sentence.length) {
        setCurrentWord((prevWord) => prevWord + sentence[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typeInterval); // עצור כשהגענו לסוף המשפט
      }
    }, 25); // מהירות הקלדה מעט מהירה יותר

    return () => clearInterval(typeInterval);
  }, [charIndex, sentence]);

  // אנימציות Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: 360,
      transition: { duration: 15, repeat: Infinity, ease: "linear" }
    }
  };

  return (
    <motion.div
      className="mt-24 mb-6 relative text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* רקע */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-primary-50 to-blue-50 -z-10 rounded-3xl shadow-inner" />

      {/* אייקון */}
      <motion.div
        className="absolute top-1/2 left-6 transform -translate-y-1/2 text-primary-400/30"
        variants={iconVariants}
      >
        <Settings className="w-20 h-20" />
      </motion.div>

      {/* טקסט */}
      <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-secondary-800 max-w-4xl mx-auto px-8 py-10 relative">
        {currentWord}
        <span className="animate-blink">|</span>
      </p>
    </motion.div>
  );
};

// שלבי התהליך
const steps = [
  {
    icon: <Handshake className="w-12 h-12 text-primary-600" />,
    title: 'פגישת ייעוץ ראשונית',
    description: 'ניתוח מעמיק של צרכי הלקוח והתאמת פתרון מדויק',
    details: [
      'פגישה עם מהנדס בכיר',
      'הבנת דרישות מדויקת',
      'הערכת עלויות ולוחות זמנים',
    ],
  },
  {
    icon: <FileSearch className="w-12 h-12 text-primary-600" />,
    title: 'סקר טכנולוגי מקיף',
    description: 'שימוש במכשור מתקדם לבדיקה יסודית של כל מערכות המבנה',
    details: [
      'בדיקות מקיפות של המבנה',
      'שימוש בציוד מתקדם',
      'תיעוד מפורט של ממצאים',
    ],
  },
  {
    icon: <ClipboardCheck className="w-12 h-12 text-primary-600" />,
    title: 'עיבוד נתונים והמלצות',
    description: 'ניתוח ממוחשב של הממצאים והכנת דוח מפורט עם המלצות לפעולה',
    details: [
      'ניתוח מעמיק של הממצאים',
      'הכנת דוח מפורט ומקצועי',
      'פירוט המלצות לתיקון',
    ],
  },
];

// אנימציות כניסה לכרטיסים
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

// אנימציית Wiggle לחצים
const arrowVariants = {
  rest: { rotate: -15, scale: 1 },
  animate: {
    rotate: 15,
    scale: 1.2,
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.8,
    },
  },
};

const ProcessSection = () => {
  return (
    <motion.div
      className="py-28 relative overflow-hidden bg-gradient-to-tr from-gray-50 to-blue-50"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {/* רקע של צורות הנדסיות */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='60' cy='60' r='58' fill='none' stroke='%23007bff' stroke-width='2' stroke-opacity='0.08'/%3E%3Ccircle cx='60' cy='60' r='40' fill='none' stroke='%23007bff' stroke-width='2' stroke-opacity='0.08'/%3E%3Ccircle cx='60' cy='60' r='20' fill='none' stroke='%23007bff' stroke-width='2' stroke-opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '120px 120px',
          animation: 'scroll 35s linear infinite',
        }}
      />

      {/* גלגל שיניים מסתובב */}
      <div className="absolute bottom-10 right-10 w-32 h-32 text-primary-200/40 pointer-events-none">
        <Settings className="w-full h-full animate-spin-slow" />
      </div>
      
      {/* גלגל שיניים קטן מסתובב בכיוון הפוך */}
      <div className="absolute top-20 left-10 w-24 h-24 text-primary-200/30 pointer-events-none">
        <Settings className="w-full h-full animate-spin-reverse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* כותרת */}
        <div className="text-center mb-20">
          <motion.div 
            className="inline-block mb-4"
            variants={itemVariants}
          >
            <span className="inline-block px-6 py-2 bg-primary-100 text-primary-700 rounded-full text-lg font-medium">
              תהליך עבודה מובנה
            </span>
          </motion.div>
          
          <motion.h2
            className="text-5xl font-rubik font-bold text-secondary-900 mb-4"
            variants={itemVariants}
          >
            תהליך העבודה שלנו
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1.5 bg-primary-500 mx-auto mb-6"
            variants={itemVariants}
          />
          
          <motion.p
            className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            מתודולוגיה מדויקת, בשילוב גישה הנדסית מנצחת לכל פרויקט
          </motion.p>
        </div>

        {/* Grid: במסכים קטנים עמודה אחת, במסכים גדולים 3 עמודות */}
        <div className="relative">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center"
                variants={itemVariants}
              >
                {/* חץ אופקי בין השלבים במסכים גדולים */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 right-0 w-full z-0 overflow-hidden">
                    <div className="flex items-center justify-center w-full">
                      <div className="h-1 bg-gradient-to-r from-primary-300 via-primary-400 to-primary-300 w-full" />
                      <motion.div
                        variants={arrowVariants}
                        initial="rest"
                        animate="animate"
                        className="absolute left-0 transform translate-x-1/2"
                      >
                        <ArrowRightCircle className="w-8 h-8 text-primary-500 drop-shadow-sm" />
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* חץ אנכי בין השלבים במסכים קטנים */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute bottom-[-45px] flex flex-col items-center">
                    <motion.div
                      variants={arrowVariants}
                      initial="rest"
                      animate="animate"
                    >
                      <ArrowDownCircle className="w-10 h-10 text-primary-500 drop-shadow-sm" />
                    </motion.div>
                  </div>
                )}

                {/* כרטיס שלב */}
                <div className="bg-white w-full rounded-2xl p-8 relative z-10 group 
                                hover:shadow-xl transition-all duration-300 
                                border border-primary-100 shadow-md shadow-primary-100/10
                                hover:bg-gradient-to-b hover:from-white hover:to-primary-50
                                h-full flex flex-col">
                  <div className="text-center mb-6 flex-grow">
                    <div className="w-20 h-20 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center mb-6 
                                   group-hover:bg-primary-100 transition-colors duration-300
                                   group-hover:scale-110 transform transition-transform">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* פירוט נוסף עם עיצוב משופר */}
                  <div className="space-y-4 border-t border-primary-100 pt-6">
                    {step.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="relative flex items-center text-gray-700 rtl group/item"
                      >
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 
                                       w-3.5 h-3.5 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 
                                       shadow-sm group-hover/item:scale-125 transition-transform"></div>
                        <span className="text-base leading-relaxed pr-8 group-hover/item:text-primary-700 transition-colors">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* הערה אחרונה */}
        <AnimatedClosingStatement />
      </div>

      {/* אנימציות רקע */}
      <style jsx>{`
        @keyframes scroll {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 120px 120px;
          }
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 10s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s infinite;
          font-weight: normal;
          display: inline-block;
          margin-left: 2px;
        }
      `}</style>
    </motion.div>
  );
};

export default ProcessSection;