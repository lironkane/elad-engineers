import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800">
              אלעד מהנדסים
            </Link>
          </div>
          <div className="flex space-x-4 space-x-reverse">
            <Link to="/" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
              דף הבית
            </Link>
            <Link to="/about" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
              אודות
            </Link>
            <Link to="/services" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
              שירותים
            </Link>
            <Link to="/contact" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
              צור קשר
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;