import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // מעקב אחר גלילה להוספת אפקט צל בעת גלילה
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // סגירת התפריט בעת שינוי עמוד
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    // מניעת גלילה כאשר התפריט פתוח
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // פונקציה לבדיקה אם הלינק הנוכחי פעיל
  const isActive = (path) => {
    return location.pathname === path;
  };

  // פונקציה לקביעת סטיילינג ללינק
  const getLinkStyle = (path) => {
    return `relative text-lg font-medium px-4 py-2 rounded-md
      transition-all duration-300 transform group
      ${isActive(path) 
        ? 'text-primary-600 font-bold' 
        : 'text-gray-700 hover:text-primary-500 hover:scale-105 active:scale-95'}`;
  };

  return (
    <nav 
      className={`relative w-full z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`} 
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* לוגו - עם אנימציית מעבר */}
          <div className="flex-shrink-0 transition-all duration-300 transform hover:scale-105">
            <Link to="/">
              <div className={`bg-white rounded-lg p-0 ${scrolled ? 'shadow-md' : ''}`}>
                <img
                  src="/images/logo.png"
                  alt="אלעד מהנדסים לוגו"
                  className="h-16 w-auto sm:h-20 md:h-24 lg:h-32"
                />
              </div>
            </Link>
          </div>

          {/* כפתור המבורגר משודרג (מוצג רק במסכים קטנים) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-700 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">פתח תפריט</span>

              {/* אייקון המבורגר משודרג */}
              <div className="relative w-6 h-6">
                {/* פס עליון */}
                <span
                  className={`absolute left-0 right-0 h-0.5 bg-current rounded-full transform transition-all duration-300 ease-in-out
                    ${isOpen ? 'top-3 rotate-45' : 'top-0'}
                  `}
                />
                {/* פס אמצעי */}
                <span
                  className={`absolute left-0 right-0 top-3 h-0.5 bg-current rounded-full transform transition-all duration-300 ease-in-out
                    ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}
                  `}
                />
                {/* פס תחתון */}
                <span
                  className={`absolute left-0 right-0 h-0.5 bg-current rounded-full transform transition-all duration-300 ease-in-out
                    ${isOpen ? 'top-3 -rotate-45' : 'top-6'}
                  `}
                />
              </div>
            </button>
          </div>

          {/* תפריט Desktop משודרג (מוצג במסכים בינוניים ומעלה) */}
          <div className="hidden md:flex md:items-center md:space-x-6 md:space-x-reverse">
            {/* פריטי תפריט עם אפקטים מתקדמים */}
            <Link to="/whatisit" className={getLinkStyle('/whatisit')}>
              מה זה בדק בית?
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 transform transition-all duration-300 origin-right
                ${isActive('/whatisit') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            
            <Link to="/services" className={getLinkStyle('/services')}>
              שירותים
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 transform transition-all duration-300 origin-right
                ${isActive('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            
            <Link to="/about" className={getLinkStyle('/about')}>
              אודות
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 transform transition-all duration-300 origin-right
                ${isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            
            <Link to="/contact" className={getLinkStyle('/contact')}>
              צור קשר
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 transform transition-all duration-300 origin-right
                ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
            
            {/* כפתור יצירת קשר מודגש - בולט יותר */}
            <Link
              to="/contact"
              className="bg-primary-500 text-white hover:bg-primary-600 font-medium px-6 py-2 rounded-lg
                transition-all duration-300 transform hover:scale-105 hover:shadow-md active:scale-95"
            >
              יצירת קשר מהירה
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay משופר עם אנימציה חלקה יותר */}
      <div
        onClick={toggleMenu}
        className={`fixed inset-0 bg-gray-900 transition-all duration-300 md:hidden z-40
          ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
      />

      {/* תפריט נשלף במסכים קטנים (Side Drawer) משודרג */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-xl 
          transform transition-all duration-300 ease-in-out md:hidden z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* כפתור סגירה */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 left-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* לוגו בתוך התפריט - עם קישור לעמוד הבית */}
        <div className="flex justify-center mt-8 mb-8">
          <Link to="/" onClick={toggleMenu}>
            <img
              src="/images/logo.png"
              alt="אלעד מהנדסים לוגו"
              className="h-16 w-auto transition-transform hover:scale-105"
            />
          </Link>
        </div>
        
        {/* תוכן התפריט הנשלף משופר */}
        <div className="flex flex-col space-y-6 p-6">
          {[
            { to: '/whatisit', label: 'מה זה בדק בית?' },
            { to: '/services', label: 'שירותים' },
            { to: '/about', label: 'אודות' },
            { to: '/contact', label: 'צור קשר' }
          ].map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={toggleMenu}
              className={`block text-lg font-medium px-4 py-2 rounded-md transform transition-all duration-300
                ${isActive(item.to) 
                  ? 'text-primary-600 bg-primary-50 font-bold'
                  : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'}`}
              style={{
                animationDelay: `${index * 0.05}s`,
                animation: isOpen ? 'fadeIn 0.5s ease-out forwards' : 'none'
              }}
            >
              {item.label}
            </Link>
          ))}
          
          {/* כפתור יצירת קשר בתפריט הנייד */}
          <div className="pt-6 mt-6 border-t border-gray-200">
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block w-full text-center bg-primary-500 text-white font-medium px-6 py-3 rounded-lg
                transition-all duration-300 transform hover:bg-primary-600 active:scale-95"
            >
              יצירת קשר מהירה
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;