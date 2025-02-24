// src/pages/Home.jsx (Corrected - using lucide-react)
import React, {useState, useEffect} from 'react'; // I added useState, useEffect and useRef.
import { Building2, Ruler, BookOpen, Handshake, FileSearch, ClipboardCheck, HeartHandshake, MoveRight, Award, ChevronRight, ArrowRight, Shield, } from 'lucide-react';
// שירותים
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
  
  // שלבי התהליך
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
  

  
  // המלצות לקוחות
  const testimonials = [
    {
      name: 'דוד כהן',
      location: 'תל אביב',
      content: 'הטכנולוגיה המתקדמת והמקצועיות של אלעד הצילו אותנו מטעויות יקרות. הדוח המפורט והליווי הצמוד היו ברמה הגבוהה ביותר.'
    },
    {
      name: 'רחל לוי',
      location: 'הרצליה',
      content: 'התרשמנו מאוד מהגישה המקצועית והטכנולוגית. הבדיקות המקיפות והדוח המפורט עזרו לנו לקבל החלטה מושכלת.'
    },
    {
      name: 'משה ישראלי',
      location: 'רמת גן',
      content: 'השילוב של טכנולוגיה מתקדמת עם שירות אישי מעולה עשה את כל ההבדל. ממליץ בחום!'
    }
  ];
  const ProcessSection = () => {
    return (
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(0,123,255,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">תהליך העבודה שלנו</h2>
            <p className="mt-4 text-xl text-secondary-600">מתודולוגיה מדויקת המבטיחה תוצאות מיטביות</p>
          </div>
  
          <div className="relative">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* חץ בין השלבים */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 right-0 w-full z-0">
                      <div className="flex items-center justify-center w-full">
                        <div className="h-0.5 bg-primary-200 w-full" />
                        <MoveRight className="w-6 h-6 text-primary-400 animate-pulse absolute left-0 transform translate-x-1/2" />
                      </div>
                    </div>
                  )}
                  
                  {/* כרטיס שלב */}
                  <div className="bg-white rounded-2xl p-6 relative z-10 group hover:shadow-lg transition-all duration-300 border border-gray-100">
                    {/* מספר שלב */}
                    <div className="absolute -top-4 right-6 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
  
                    {/* תוכן השלב */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors duration-300">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">{step.title}</h3>
                      <p className="text-secondary-600 mb-4">{step.description}</p>
                    </div>
  
                    {/* פירוט נוסף */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-secondary-700">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* הערה נוספת */}
          <div className="mt-12 text-center">
            <p className="text-secondary-600 max-w-2xl mx-auto">
              אנו מקפידים על שקיפות מלאה לאורך כל התהליך ומעדכנים אתכם בכל שלב. 
              הניסיון שלנו מבטיח תהליך חלק ויעיל שיחסוך לכם זמן וכסף.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  const Home = () => {  

    const [isVisible, setIsVisible] = useState(false); // Add this if you intend to use isVisible as state

    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    return (
      <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,123,255,0.5),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.3))]" />
          {/* Animated Tech Background */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-white"
                style={{
                  right: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 200 + 100}px`,
                  opacity: Math.random(),
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animation: `pulse ${Math.random() * 3 + 2}s infinite`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8">
          <div className="translate-y-0 opacity-100 transition-all duration-1000 ease-out">
            <div className="inline-flex items-center px-4 py-2 bg-primary-800/30 rounded-full text-primary-50 mb-6 backdrop-blur-sm hover:bg-primary-800/40 transition-all duration-300 cursor-pointer">
              <Award className="w-5 h-5 mr-2 animate-pulse" />
              <span>המהנדס המוביל בישראל</span>
              <ChevronRight className="w-4 h-4 ml-2 animate-bounce" />
            </div>
            
            <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
              אלעד מהנדסים
            </h1>
            
            <p className="mt-8 max-w-3xl text-xl text-primary-50 leading-relaxed backdrop-blur-sm bg-primary-900/10 p-6 rounded-2xl">
              חדשנות, מקצועיות ודיוק הנדסי ללא פשרות. 
              אנחנו משלבים טכנולוגיה מתקדמת עם ניסיון של שנים כדי להבטיח את ההחלטות החשובות ביותר שלכם.
            </p>

            <div className="mt-10 flex gap-6">
              <a
                href="tel:+972548116482"
                className="group inline-flex items-center px-8 py-4 bg-white text-lg font-semibold rounded-xl text-primary-700 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="ml-2">📞</span>
                054-8116482
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </a>
              <a
                href="https://wa.me/972548116482"
                className="group inline-flex items-center px-8 py-4 bg-accent-500 text-lg font-semibold rounded-xl text-white hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="ml-2">💬</span>
                WhatsApp
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

    {/* Services Section - עודכן */}
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

      {/* Process Section - משופר */}
      <ProcessSection />
      {/* Testimonials Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(0,123,255,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900">חוות דעת לקוחות</h2>
            <p className="mt-4 text-xl text-secondary-600">מה אומרים עלינו לקוחותינו המרוצים</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-bold text-secondary-900">{testimonial.name}</div>
                      <div className="text-secondary-600">{testimonial.location}</div>
                    </div>
                  </div>
                  <p className="text-secondary-600 leading-relaxed">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]" />
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10"
              style={{
                width: '2px',
                height: '100px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: 'rotate(45deg)',
                animation: `float ${Math.random() * 4 + 3}s infinite`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white rounded-2xl shadow-2xl p-12 backdrop-blur-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                  מוכנים להתחיל?
                </h2>
                <p className="mt-4 text-xl text-secondary-600">צרו איתנו קשר עוד היום לייעוץ ראשוני ללא עלות</p>
              </div>
              <div className="mt-8 lg:mt-0 flex gap-4">
                <a
                  href="tel:+972548116482"
                  className="group inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="ml-2">📞</span>
                  התקשרו עכשיו
                  <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </a>
                <a
                  href="https://wa.me/972548116482"
                  className="group inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-xl hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="ml-2">💬</span>
                  WhatsApp
                  <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }

        .tech-line {
          animation: techLine 3s infinite;
        }

        @keyframes techLine {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Home;