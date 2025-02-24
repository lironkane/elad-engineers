import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <footer
      className="relative bg-gradient-to-r from-primary-700 via-primary-800 to-secondary-900 
                 text-white animate-gradient-x overflow-hidden"
      dir="rtl"
    >
      {/* אזור עליון */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-6">
        {/* שלוש עמודות: הכל ממורכז אופקית במסכים בינוניים ומעלה */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-items-center">
          
          {/* עמודה 1: שם העסק / תיאור קצר */}
          <div className="text-center">
            <h2 className="text-2xl font-rubik font-bold mb-3">אלעד מהנדסים</h2>
            <p className="text-sm text-secondary-200">
              מגוון שירותי הנדסה מקצועיים ואמינים
            </p>
          </div>

          {/* עמודה 2: עקבו אחרינו (רשתות חברתיות) */}
          <div className="text-center">
            <h3 className="text-xl font-rubik font-bold mb-3">עקבו אחרינו</h3>
            <div className="flex justify-center items-center space-x-6 space-x-reverse">
              {/* אינסטגרם */}
              <a
                href="https://www.instagram.com/eladengineers5/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              {/* טיקטוק */}
              <a
                href="https://www.tiktok.com/@eladengineers?lang=he-IL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors duration-300"
                aria-label="TikTok"
              >
                <SiTiktok size={24} />
              </a>
              {/* פייסבוק */}
              <a
                href="https://www.facebook.com/share/19sG2s2Yba/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>

          {/* עמודה 3: צור קשר (כפתורים לוואטסאפ ולמייל בסגנון Outline) */}
          <div className="text-center">
            <h3 className="text-xl font-rubik font-bold mb-3">צרו קשר</h3>
            {/* מרכזים את הכפתורים מתחת לכותרת */}
            <div className="flex flex-col items-center space-y-3 mx-auto">
              {/* כפתור וואטסאפ - Outline */}
              <a
                href="https://wa.me/972548116482"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 space-x-reverse
                  px-4 py-2 border border-green-400 text-green-300 
                  rounded-full hover:bg-green-400 hover:text-white
                  transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
                <span>וואטסאפ</span>
              </a>
              
              {/* כפתור מייל - Outline */}
              <a
                href="mailto:info@eladengineers.co.il"
                className="inline-flex items-center space-x-2 space-x-reverse
                  px-4 py-2 border border-blue-300 text-blue-200
                  rounded-full hover:bg-blue-300 hover:text-white
                  transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
                <span>מייל</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* אזור תחתון: פס מפריד / זכויות יוצרים / קרדיט ל-Tech-Start */}
      <div className="border-t border-white border-opacity-20">
        {/* ממקמים את הטקסטים במרכז במסכים קטנים וגם גדולים */}
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col items-center justify-center text-sm text-secondary-200 space-y-2">
          {/* זכויות יוצרים */}
          <div>© 2025 כל הזכויות שמורות</div>
          
          {/* קרדיט ל-Tech-Start */}
          <div>
            אתר זה נבנה ומנוהל על ידי{' '}
            <a
              href="https://tech-start.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-400"
            >
              Tech-Start
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;