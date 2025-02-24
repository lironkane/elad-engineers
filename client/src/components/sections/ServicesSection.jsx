import React from 'react';
import { Building2, Ruler, BookOpen } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-8 h-8 text-primary-600" />,
    title: 'בדק בית מתקדם',
    description: 'שימוש בטכנולוגיה חדישה לאיתור ליקויים ובעיות מבניות בדיוק מרבי'
  },
  {
    icon: <Ruler className="w-8 h-8 text-primary-600" />,
    title: 'פיקוח הנדסי',
    description: 'בקרת איכות קפדנית ופיקוח צמוד על כל שלבי הבנייה והשיפוץ'
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary-600" />,
    title: 'חוות דעת מקצועית',
    description: 'ניתוח מעמיק והכנת חוות דעת מפורטת בליווי מומחים מובילים'
  }
];

const ServicesSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,123,255,0.1),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900">השירותים שלנו</h2>
          <p className="mt-4 text-xl text-secondary-600">פתרונות הנדסיים בסטנדרטים הגבוהים ביותר</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{service.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{service.description}</p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-tl-full opacity-0 group-hover:opacity-30 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
