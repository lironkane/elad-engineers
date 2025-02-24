// src/pages/Services.js
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'תכנון מבנים',
      description: 'תכנון מקצועי ומפורט של מבנים מסוגים שונים, כולל מבני מגורים, מסחר ותעשייה',
      features: [
        'תכנון אדריכלי',
        'תכנון קונסטרוקציה',
        'חישובים סטטיים',
        'הכנת תוכניות עבודה מפורטות'
      ]
    },
    {
      title: 'ייעוץ הנדסי',
      description: 'שירותי ייעוץ מקיפים בכל תחומי ההנדסה האזרחית',
      features: [
        'בדיקות היתכנות',
        'ייעוץ טכני',
        'פתרון בעיות הנדסיות',
        'ליווי פרויקטים'
      ]
    },
    {
      title: 'פיקוח על פרויקטים',
      description: 'פיקוח צמוד ומקצועי על פרויקטי בנייה מכל הסוגים',
      features: [
        'פיקוח על ביצוע',
        'בקרת איכות',
        'ניהול לוחות זמנים',
        'תיאום בין קבלנים'
      ]
    },
    {
      title: 'בדיקות מבנים',
      description: 'בדיקות מקיפות של מבנים קיימים וחדשים',
      features: [
        'בדיקות יציבות',
        'איתור ליקויי בנייה',
        'הערכת מצב מבנים',
        'המלצות לשיפורים ותיקונים'
      ]
    },
    {
      title: 'תכנון תשתיות',
      description: 'תכנון מערכות תשתית מורכבות',
      features: [
        'תכנון כבישים',
        'מערכות ניקוז',
        'תשתיות מים וביוב',
        'תכנון חניונים'
      ]
    },
    {
      title: 'שירותי מעבדה',
      description: 'בדיקות מעבדה מקיפות לחומרי בנייה ותשתית',
      features: [
        'בדיקות בטון',
        'בדיקות קרקע',
        'בדיקות אטימות',
        'בדיקות חוזק חומרים'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-right">
          <h1 className="text-3xl font-extrabold text-gray-900">
            השירותים שלנו
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            מגוון רחב של שירותים הנדסיים מקצועיים המותאמים לצרכי הלקוח
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-500">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-right">
                      <span className="text-green-500 ml-2">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            מעוניינים לשמוע עוד על השירותים שלנו?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            צוות המומחים שלנו ישמח לענות על כל שאלה ולהתאים עבורכם את הפתרון המושלם
          </p>
          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
            צור קשר
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;