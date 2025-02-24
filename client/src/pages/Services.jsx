// src/pages/BedekBait.js

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHouseDamage, // אייקון לדירות חדשות מקבלן
  FaHome,        // אייקון לדירות יד שנייה
  FaBuilding,    // אייקון לנכסים מסחריים
  FaCheckCircle  // אייקון "וי" לנקודות
} from 'react-icons/fa';
import AnimatedCTA from '../components/AnimatedCTA'; // נתיב דוגמה

// הגדרות לאנימציה: Fade-In עדין לכל העמוד ולילדים
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

// סעיפים עיקריים (bullet points) למה כולל בדק בית
const mainBulletPoints = [
  'דוח הנדסי מפורט הכולל פירוט ליקויים והפניה לתקנים הרלוונטיים',
  'בדיקת עמידה בתקני הבנייה הישראליים ובתקנות התכנון והבנייה',
  'בדיקת ממ"ד בהתאם לדרישות פיקוד העורף (הג"א)',
  'תשתיות חשמל, אינסטלציה, מיזוג אוויר ואיטום',
  'תיעוד הליקויים בצילום מקצועי והערכת עלויות תיקון',
  'דיווח קביל משפטית מול הקבלן או בבית המשפט',
  'ליווי מקצועי עד לתיקון הליקויים בפועל'
];

// שלושה סוגי שירותי בדק בית, כל אחד עם רשימת נקודות ייחודית
const bedekServices = [
  {
    title: 'דירות חדשות מקבלן',
    icon: <FaHouseDamage size={32} className="text-red-600" />,
    shortDescription: `מבטיחים שהדירה החדשה אכן תואמת את התכניות והמפרט שקיבלתם, 
    ומאתרים ליקויים שעשויים לגרום להוצאות עתידיות.`,
    points: [
      'התאמת הדירה לחוזה המכר ולמפרט הטכני',
      'בדיקת גימורים בהתאם לתוכניות שינוי דיירים',
      'איתור כשלים מבניים וליקויי איטום בשלב מוקדם'
    ]
  },
  {
    title: 'דירות יד שנייה',
    icon: <FaHome size={32} className="text-green-600" />,
    shortDescription: `בדיקה מקצועית שתחשוף ליקויים נסתרים, רטיבויות או מערכות מיושנות,
    כדי שתדעו בדיוק מה מצב הנכס לפני רכישה או שיפוץ.`,
    points: [
      'סקירת שלד ובדיקת יציבות הנכס',
      'זיהוי נזקי רטיבות, עובש וסדקים',
      'הערכת עלויות שיפוץ או תיקון פגמים'
    ]
  },
  {
    title: 'נכסים מסחריים',
    icon: <FaBuilding size={32} className="text-blue-600" />,
    shortDescription: `בין אם זה משרד, חנות או מבנה תעשייתי, אנו בודקים עמידה בתקני בטיחות,
    מערכות HVAC, ספרינקלרים, ועוד.`,
    points: [
      'התאמה לתקנות כיבוי אש ולבטיחות מבנים',
      'בדיקת מערכות חשמל ותקשורת לעומסים גבוהים',
      'זיהוי מפגעים שעלולים לפגוע בערך הנכס'
    ]
  }
];

const BedekBait = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-right"
      dir="rtl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* כותרת כללית */}
      <motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          בדק בית – כל מה שאתם צריכים לדעת
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          בדק בית מקצועי מספק לכם שקט נפשי וידע מלא על מצב הנכס.  
          הצוות שלנו, המורכב ממהנדסים מומחים, יאתר את כל הליקויים האפשריים ויבטיח שתיכנסו ברגל ימין.
        </p>
      </motion.div>

      {/* מקטע ראשי: מה כולל בדק בית? */}
      <motion.div
        variants={itemVariants}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-12"
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            מה כולל בדק בית?
          </h2>
          <ul className="space-y-3">
            {mainBulletPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-green-500 ml-2 mt-1" />
                <span className="text-gray-700 leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* סוגי נכסים - בדק בית */}
      <motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          סוגי נכסים בהם אנו מבצעים בדק בית
        </h2>
        <p className="mt-2 text-gray-600">
          לכל סוג נכס מאפיינים ייחודיים, וצוות המהנדסים שלנו מתאים את הבדיקה לצרכים הספציפיים של הנכס.
        </p>
      </motion.div>

      {/* Grid של שלושת השירותים */}
      <motion.div
        variants={itemVariants}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {bedekServices.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col"
          >
            <div className="flex items-center space-x-3 space-x-reverse mb-3">
              {service.icon}
              <h4 className="text-xl font-bold text-gray-900">
                {service.title}
              </h4>
            </div>

            <p className="text-gray-600 mb-3">
              {service.shortDescription}
            </p>

            {/* נקודות ייחודיות לכל סוג נכס */}
            <ul className="mt-auto space-y-2">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <FaCheckCircle className="text-green-500 ml-2 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA תחתון */}
      <AnimatedCTA />
    </motion.div>
  );
};

export default BedekBait;