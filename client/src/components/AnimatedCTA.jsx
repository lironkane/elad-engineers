import React from 'react';
import { motion } from 'framer-motion';

// לדוגמה, אם העמוד משתמש ב-Framer Motion
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const EngineerCTA = () => {
  return (
    <motion.div
      variants={itemVariants}
      className="mt-16"
    >
      <div
        className="
          relative
          bg-gradient-to-r from-blue-800 to-gray-900
          bg-[length:200%_200%] animate-gradient-x
          text-white
          rounded-lg shadow-md
          p-8
          flex flex-col items-center space-y-4
        "
      >
        <h2 className="text-3xl font-extrabold">
          בדק בית מקצועי
        </h2>
        <p className="text-lg text-center max-w-2xl">
          מהנדסי החברה ילוו אתכם עד לפרטים הקטנים, ויבטיחו 
          שתיכנסו לנכס בראש שקט וללא הפתעות.
        </p>
        <button
          onClick={() => window.location.href='/contact'}
          className="
            bg-gray-100 text-blue-800 font-semibold
            px-6 py-3 rounded-md text-lg
            hover:bg-gray-200 transition-colors
          "
        >
          צרו קשר עוד היום
        </button>
      </div>
    </motion.div>
  );
};

export default EngineerCTA;