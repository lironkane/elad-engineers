import React from 'react';
import {
  ArrowRightCircle,
  ArrowDownCircle,
  Handshake,
  FileSearch,
  ClipboardCheck,
  HeartHandshake,
  Settings
} from 'lucide-react';
import { motion } from 'framer-motion';

// שלבי התהליך (ללא מספרים)
const steps = [
  {
    icon: <Handshake className="w-10 h-10 text-primary-600" />,
    title: 'פגישת ייעוץ ראשונית',
    description: 'ניתוח מעמיק של צרכי הלקוח והתאמת פתרון מדויק',
    details: [
      'פגישה עם מהנדס בכיר',
      'הבנת דרישות מדויקת',
      'הערכת עלויות ולוחות זמנים'
    ]
  },
  {
    icon: <FileSearch className="w-10 h-10 text-primary-600" />,
    title: 'סקר טכנולוגי מקיף',
    description: 'שימוש במכשור מתקדם לבדיקה יסודית של כל מערכות המבנה',
    details: [
      'בדיקות מקיפות של המבנה',
      'שימוש בציוד מתקדם',
      'תיעוד מפורט של ממצאים'
    ]
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-primary-600" />,
    title: 'עיבוד נתונים והמלצות',
    description: 'ניתוח ממוחשב של הממצאים והכנת דוח מפורט עם המלצות לפעולה',
    details: [
      'ניתוח מעמיק של הממצאים',
      'הכנת דוח מפורט ומקצועי',
      'פירוט המלצות לתיקון'
    ]
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-primary-600" />,
    title: 'ליווי מקצועי מתמשך',
    description: 'תמיכה וייעוץ לאורך כל הדרך עד להשלמת הפרויקט',
    details: [
      'ליווי בתהליך התיקונים',
      'פיקוח על ביצוע העבודות',
      'זמינות מלאה לשאלות'
    ]
  }
];

// אנימציות כניסה (Fade+Slide) לכרטיסים
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// אנימציית Wiggle לחצים
const arrowVariants = {
  rest: { rotate: -15, scale: 1 },
  animate: {
    rotate: 15,
    scale: 1.2,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.7,
    }
  }
};

const ProcessSection = () => {
  return (
    <motion.div
      className="py-24 relative overflow-hidden bg-gradient-to-tr from-gray-50 to-blue-50"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
          }
        }
      }}
    >
      {/* רקע של צורות הנדסיות (Arcs) בצורה חוזרת ועדינה */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='60' cy='60' r='58' fill='none' stroke='%23007bff' stroke-width='2' stroke-opacity='0.08'/%3E%3Ccircle cx='60' cy='60' r='40' fill='none' stroke='%23007bff' stroke-width='2' stroke-opacity='0.08'/%3E%3Ccircle cx='60' cy='60' r='20' fill='none' stroke='%23007bff' stroke-width='2' stroke-opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '120px 120px'
        }}
      />

      {/* גלגל שיניים מסתובב לאט – שימוש ב־Settings מ־lucide-react */}
      <div className="absolute bottom-4 right-4 w-20 h-20 text-gray-300 pointer-events-none">
        <Settings className="w-full h-full animate-spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* כותרת */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-rubik font-bold text-secondary-900"
            variants={itemVariants}
          >
            תהליך העבודה שלנו
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-gray-700"
            variants={itemVariants}
          >
            מתודולוגיה מדויקת, בשילוב גישה הנדסית מנצחת.
          </motion.p>
        </div>

        {/* Grid: במסכים קטנים עמודה אחת (עם חץ אנכי), במסכים גדולים 4 עמודות (עם חץ אופקי) */}
        <div className="relative">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center"
                variants={itemVariants}
              >
                {/* חץ אופקי ב-Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-full z-0">
                    <div className="flex items-center justify-center w-full">
                      <div className="h-0.5 bg-primary-200 w-full" />
                      <motion.div
                        variants={arrowVariants}
                        initial="rest"
                        animate="animate"
                        className="absolute left-0 transform translate-x-1/2"
                      >
                        <ArrowRightCircle className="w-6 h-6 text-primary-500" />
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* חץ אנכי ב-Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute bottom-[-40px] flex flex-col items-center">
                    <motion.div
                      variants={arrowVariants}
                      initial="rest"
                      animate="animate"
                    >
                      <ArrowDownCircle className="w-8 h-8 text-primary-500" />
                    </motion.div>
                  </div>
                )}

                {/* כרטיס שלב */}
                <div className="bg-white w-full rounded-2xl p-6 relative z-10 group hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* פירוט נוסף (Bullet Points) עם מרווח גדול יותר */}
                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start text-gray-700">
                        <div className="mt-1 mr-3 w-2 h-2 bg-primary-500 rounded-full" />
                        <span className="text-sm leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* הערה אחרונה */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-2xl mx-auto">
            ניסיוננו רב השנים מאפשר לנו ללוות אתכם בשלבי הפרויקט השונים – 
            מהייעוץ הראשוני ועד השלמתו, תוך חיסכון בזמן ובעלויות.
          </p>
        </div>
      </div>

      {/* אם תרצה, אפשר להוסיף @keyframes scroll לרקע */}
      <style jsx>{`
        @keyframes scroll {
          from { background-position: 0 0; }
          to { background-position: 60px 60px; }
        }
      `}</style>
    </motion.div>
  );
};

export default ProcessSection;