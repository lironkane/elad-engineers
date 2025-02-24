import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-white shadow-md" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* לוגו - עם רקע וגודל מוגדל */}
          <div className="flex-shrink-0">
            <Link to="/">
              <div className="bg-gray-50 rounded-lg p-0 shadow-md"> {/* הווספתי רקע */}
                <img
                  src="/images/logo.png"
                  alt="אלעד מהנדסים לוגו"
                  className="h-32 w-auto"  
                />
              </div>
            </Link>
          </div>

          {/* כפתור המבורגר (מוצג רק במסכים קטנים) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">פתח תפריט</span>

              {/* אייקון המבורגר */}
              <div className="relative w-10 h-10">
                {/* פס עליון */}
                <span
                  className={`absolute left-2 right-2 h-[2px] bg-gray-800 rounded-full transform transition-all duration-300 ease-in-out
                    ${isOpen ? 'top-5 rotate-45' : 'top-2'}
                  `}
                  style={{ transformOrigin: 'center' }}
                />
                {/* פס אמצעי */}
                <span
                  className={`absolute left-2 right-2 h-[2px] bg-gray-800 rounded-full transform transition-all duration-300 ease-in-out
                    ${isOpen ? 'opacity-0' : 'top-5'}
                  `}
                />
                {/* פס תחתון */}
                <span
                  className={`absolute left-2 right-2 h-[2px] bg-gray-800 rounded-full transform transition-all duration-300 ease-in-out
                    ${isOpen ? 'top-5 -rotate-45' : 'top-8'}
                  `}
                  style={{ transformOrigin: 'center' }}
                />
              </div>
            </button>
          </div>

          {/* תפריט Desktop (מוצג במסכים בינוניים ומעלה) */}
          <div className="hidden md:flex md:items-center space-x-4 space-x-reverse">
            <Link
              to="/"
              className="text-gray-700 font-medium px-3 py-2 rounded-md
                transition-all duration-200 transform
                hover:text-primary-500 hover:scale-105
                active:scale-95"
            >
              דף הבית
            </Link>
            <Link
              to="/whatisit"
              className="text-gray-700 font-medium px-3 py-2 rounded-md
                transition-all duration-200 transform
                hover:text-primary-500 hover:scale-105
                active:scale-95"
            >
              מה זה בדק בית?
            </Link>
            <Link
              to="/services"
              className="text-gray-700 font-medium px-3 py-2 rounded-md
                transition-all duration-200 transform
                hover:text-primary-500 hover:scale-105
                active:scale-95"
            >
              שירותים
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 font-medium px-3 py-2 rounded-md
                transition-all duration-200 transform
                hover:text-primary-500 hover:scale-105
                active:scale-95"
            >
              צור קשר
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay (צל שקוף) שמופיע מאחורי התפריט רק במסכים קטנים */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-300 md:hidden z-40"
        />
      )}

      {/* תפריט נשלף במסכים קטנים (Side Drawer) */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg 
        transform transition-transform duration-300 ease-in-out md:hidden
        z-50
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* תוכן התפריט הנשלף */}
        <div className="flex flex-col mt-16 space-y-4 p-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 font-medium transition-all duration-200 transform
              hover:text-primary-500 hover:scale-105 active:scale-95"
          >
            דף הבית
          </Link>
          <Link
            to="/whatisit"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 font-medium transition-all duration-200 transform
              hover:text-primary-500 hover:scale-105 active:scale-95"
          >
            מה זה בדק בית?
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 font-medium transition-all duration-200 transform
              hover:text-primary-500 hover:scale-105 active:scale-95"
          >
            שירותים
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 font-medium transition-all duration-200 transform
              hover:text-primary-500 hover:scale-105 active:scale-95"
          >
            צור קשר
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;