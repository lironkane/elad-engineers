// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-right">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            אלעד מהנדסים - בדק בית וייעוץ הנדסי
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl">
            אלעד מהנדסים הינה חברה הנדסית המציעה שירותי בדק בית וייעוץ הנדסי. אנו מתמחים בביצוע בדיקות בית מקצועיות ומעמיקות על מנת לשקף לך את המצב של הנכס.
          </p>
          <div className="mt-8 flex gap-4 justify-end">
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
            >
              <span className="ml-2">📞</span>
              לתיאום בדיקה: 054-8116482
            </Link>
            <Link
              to="https://wa.me/972548116482"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-700"
            >
              <span className="ml-2">📱</span>
              WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-right">
          <h2 className="text-3xl font-extrabold text-gray-900">למה לבחור באלעד מהנדסים?</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* אמינות */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">אמינות</h3>
              <p className="mt-2 text-base text-gray-500">
                באלעד מהנדסים, אנו רואים באמינות ערך עליון. כל בדיקה שאנו מבצעים מתבצעת במקצועיות גבוהה, תוך שמירה על שקיפות מלאה והצגת ממצאים מדויקים.
              </p>
            </div>
          </div>

          {/* מקצועיות */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">מקצועיות</h3>
              <p className="mt-2 text-base text-gray-500">
                הצוות שלנו מורכב ממהנדסים מיומנים ומנוסים, המתחייבים לביצוע בדיקות מעמיקות ואיכותיות. אנו משתמשים בטכנולוגיות מתקדמות ובשיטות עבודה מדויקות.
              </p>
            </div>
          </div>

          {/* ליווי משפטי */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">ליווי משפטי</h3>
              <p className="mt-2 text-base text-gray-500">
                אנו לא רק מספקים בדיקות מעמיקות, אלא גם מציעים ליווי משפטי מקצועי ע"י משרד עורכי דין מנוסה בתחום.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-right mb-8">
            איך מתנהל תהליך בדק הבית?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">1. תיאום פגישה</h3>
              <p>לאחר יצירת קשר איתנו, מתואמת פגישה לביצוע הבדיקה בנכס.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">2. ביצוע הבדיקה</h3>
              <p>מהנדס מוסמך יגיע לנכס ויבצע בדיקה מקיפה של כל היבטי הבית.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">3. הפקת דוח</h3>
              <p>לאחר הבדיקה, יוכן דוח מפורט הכולל את כל הממצאים והמלצות לתיקונים.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">4. ליווי מקצועי</h3>
              <p>אנו זמינים לכל שאלה או בקשה נוספת גם לאחר סיום הבדיקה.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            מעוניינים בבדיקה מקצועית?
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            צוות המומחים שלנו ישמח לעמוד לרשותכם
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="tel:+972548116482" 
               className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              📞 054-8116482
            </a>
            <a href="https://wa.me/972548116482"
               className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;