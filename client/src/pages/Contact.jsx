// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        });
    }, [controls]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("handleSubmit called!"); //  נשאיר את זה לבינתיים
  
      fetch('/api/send-email', { //  הנתיב
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      })
      .then(response => {
          console.log("Fetch response:", response); //  נשאיר גם את זה
          if (response.ok) {
              alert('ההודעה נשלחה בהצלחה!');  //  פידבק למשתמש
              setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // איפוס
          } else {
              // טיפול בשגיאה *מהשרת*
              response.json().then(data => {
                  alert('אירעה שגיאה בשליחת ההודעה: ' + (data.error || 'שגיאה לא ידועה'));
              })
              .catch(err => { // טיפול בשגיאת JSON
                  console.error("JSON parsing error:", err);
                  alert('אירעה שגיאה בשליחת ההודעה: שגיאה לא ידועה');
              });
          }
      })
      .catch(error => {
          console.error('Error sending email:', error);
          alert('אירעה שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.'); // שגיאת רשת
      });
  };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <motion.div
                className="flex-grow py-12"
                initial={{ opacity: 0, y: -20 }}
                animate={controls}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-right">
                        <motion.h1
                            className="text-4xl font-extrabold text-primary-700"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            צור קשר
                        </motion.h1>
                        <motion.p
                            className="mt-4 text-xl text-secondary-600"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.2 }}
                        >
                            נשמח לענות על כל שאלה ולסייע בכל פרויקט.
                        </motion.p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">

                      {/* Contact Form */}
                        <motion.div
                            className="bg-white rounded-lg shadow-xl p-8 order-1 lg:order-2"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.6 }}
                            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                        >
                            <h2 className="text-2xl font-bold text-primary-600">טופס יצירת קשר</h2>
                            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        שם מלא
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        דוא"ל
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        טלפון
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                        נושא הפנייה
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        תוכן ההודעה
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition duration-300"
                                    >
                                        שלח הודעה
                                    </button>
                                </div>
                            </form>
                        </motion.div>


                        {/* Contact Information and Social Icons */}
                        <motion.div
                            className="bg-white rounded-lg shadow-xl p-8 order-2 lg:order-1"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.4 }}
                            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                        >
                            <h2 className="text-2xl font-bold text-primary-600">פרטי התקשרות</h2>
                            <div className="mt-6 space-y-6">
                                {/* Phone */}
                                <div className="flex items-center">
                                    <div className="w-12 text-primary-500"> {/* Fixed-width container */}
                                        <FaPhoneAlt className="h-5 w-5" />  {/* Consistent icon size */}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">טלפון</h3>
                                        <a href="tel:+972548116482" className="mt-1 text-primary-500 hover:underline block">
                                            054-811-6482
                                        </a>
                                    </div>
                                </div>

                                 {/* Email */}
                                <div className="flex items-center">
                                    <div className="w-12 text-primary-500">  {/* Fixed-width container */}
                                       <FaEnvelope className="h-5 w-5" /> {/* Consistent icon size */}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">דוא"ל</h3>
                                        <a href="mailto:info@elad-engineers.co.il" className="mt-1 text-primary-500 hover:underline block">
                                            info@elad-engineers.co.il
                                        </a>
                                    </div>
                                </div>

                                 {/* Social Media Icons */}
                                <div className="mt-6">
                                  <h3 className="text-lg font-medium text-gray-900">עקבו אחרינו</h3>
                                   <div className="flex items-center mt-2 gap-6">
                                    <a href="https://www.instagram.com/eladengineers5/" aria-label="Instagram" className="hover:text-primary-300 transition duration-300">
                                      <FaInstagram className="h-6 w-6" />
                                     </a>
                                    <a href="https://www.tiktok.com/@eladengineers?lang=he-IL" aria-label="TikTok" className="hover:text-primary-300 transition duration-300">
                                      <FaTiktok className="h-6 w-6" />
                                    </a>
                                     <a href="https://www.facebook.com/share/19sG2s2Yba/?mibextid=wwXIfr" aria-label="Facebook" className="hover:text-primary-300 transition duration-300">
                                       <FaFacebookF className="h-6 w-6" />
                                      </a>
                                      <a href="https://wa.me/+972548116482" aria-label="WhatsApp" className="hover:text-primary-300 transition duration-300">
                                      <FaWhatsapp className="h-6 w-6" />
                                     </a>
                                   </div>
                                 </div>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-primary-600">שעות פעילות</h2>
                                <div className="mt-4 space-y-2">
                                    <p className="text-gray-600">ראשון - חמישי: 9:00 - 18:00</p>
                                    <p className="text-gray-600">שישי: 9:00 - 13:00</p>
                                    <p className="text-gray-600">שבת: סגור</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;