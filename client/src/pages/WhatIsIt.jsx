// src/pages/HomeInspection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTools, FaChartLine, FaUserShield, FaFileAlt, FaHeadset, FaMoneyBill } from 'react-icons/fa'; // Import icons
import AnimatedCTA from '../components/AnimatedCTA'; // נתיב דוגמה

const HomeInspection = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-heebo text-secondary-800">
            <motion.header
                className="bg-primary-500 text-white py-10 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
            >
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-rubik font-bold">מה זה בדק בית?</h1>
                    <p className="text-lg mt-2">הבטחת איכות ובטיחות הנכס שלך</p>
                </div>
            </motion.header>

            <main className="container mx-auto px-4 py-12">
                <motion.section
                    className="bg-white rounded-lg shadow-lg p-8 mb-12"
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className="text-2xl font-rubik font-bold text-primary-700 mb-4 flex items-center">
                        <FaCheckCircle className="mr-2 text-accent-500" />
                         <span className="w-4"></span> {/* Added Spacer */}
                        הגדרה מקצועית לבדיקת מבנים
                    </h2>
                    <p className="text-lg leading-relaxed">
                        בדק בית הוא תהליך הערכה מקיף ויסודי של נכס, שמטרתו לוודא את התאמתו לתקני הבנייה המחייבים,
                        לאתר ליקויים קיימים ולהעריך את הצורך בתיקונים או שיפורים. בדיקה זו חיונית במיוחד לפני רכישת נכס,
                        אך מומלצת גם כחלק מתחזוקה שוטפת למבנים קיימים.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                        במהלך בדק הבית, מבוצעת סקירה הנדסית מקיפה של כל מרכיבי הנכס, לרבות:
                    </p>
                      <ul className="list-disc pl-5 mt-2 text-lg">
                        <li>מערכות אינסטלציה וצנרת</li>
                        <li>מערכות חשמל ותקשורת</li>
                        <li>מערכות מיזוג אוויר ואוורור</li>
                        <li>איטום ובידוד</li>
                        <li>שלד המבנה ויציבותו</li>
                        <li>גימורים פנימיים וחיצוניים</li>
                        <li>התאמה לתקני בטיחות אש</li>
                      </ul>
                      <p className="text-lg leading-relaxed mt-4">
                        הבדיקה מספקת תמונת מצב אובייקטיבית ומפורטת, המאפשרת לקבל החלטות מושכלות בנוגע לרכישה,
                        שיפוץ או תחזוקת הנכס, תוך צמצום סיכונים והוצאות בלתי צפויות בעתיד.
                      </p>

                </motion.section>

                <motion.section
                    className="bg-white rounded-lg shadow-lg p-8"
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-2xl font-rubik font-bold text-primary-700 mb-4 flex items-center">
                        <FaTools className="mr-2 text-accent-500" />
                         <span className="w-4"></span> {/* Added Spacer */}
                        למה לבחור באלעד מהנדסים לבדק הבית שלך?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-rubik font-semibold text-secondary-700 mb-2 flex items-center">
                                <FaChartLine className="mr-2 text-primary-500" />
                                 <span className="w-4"></span> {/* Added Spacer */}
                                מומחיות וניסיון
                            </h3>
                            <p className="text-lg">
                                צוות המהנדסים שלנו מורכב ממומחים מנוסים בתחום בדק הבית, בעלי ידע מעמיק בתקנות הבנייה
                                וניסיון רב שנים באיתור ליקויים מורכבים.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-rubik font-semibold text-secondary-700 mb-2 flex items-center">
                              <FaFileAlt className="mr-2 text-primary-500" />
                               <span className="w-4"></span> {/* Added Spacer */}
                                דוחות מקיפים ומדויקים
                            </h3>
                            <p className="text-lg">
                                אנו מספקים דוחות בדק בית מפורטים, הכוללים תיאור מלא של כל הליקויים שנמצאו,
                                 הערכת חומרתם, המלצות לתיקון, ולעיתים אף אומדן עלויות.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-rubik font-semibold text-secondary-700 mb-2 flex items-center">
                                <FaUserShield className="mr-2 text-primary-500" />
                                <span className="w-4"></span> {/* Added Spacer */}
                                אמינות ושקיפות
                            </h3>
                            <p className="text-lg">
                                אנו מחויבים לאמינות מלאה, שקיפות ויושרה מקצועית.  הדוחות שלנו מבוססים על ממצאים
                                אובייקטיביים, ומטרתם לספק לך את התמונה המלאה והמדויקת ביותר של מצב הנכס.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-rubik font-semibold text-secondary-700 mb-2 flex items-center">
                                <FaHeadset className="mr-2 text-primary-500" />
                                 <span className="w-4"></span> {/* Added Spacer */}
                                שירות ממוקד לקוח
                            </h3>
                            <p className="text-lg">
                                אנו מעניקים יחס אישי ומקצועי לכל לקוח, תוך הקפדה על זמינות, מענה מהיר לפניות
                                והתאמת השירות לצרכים הייחודיים שלך.
                            </p>
                        </div>
                          <div>
                            <h3 className="text-xl font-rubik font-semibold text-secondary-700 mb-2 flex items-center">
                                <FaMoneyBill className="mr-2 text-primary-500" />
                                 <span className="w-4"></span> {/* Added Spacer */}
                                תמחור הוגן ותחרותי
                            </h3>
                            <p className="text-lg">
                                אנו מציעים שירותי בדק בית באיכות הגבוהה ביותר, במחירים הוגנים ותחרותיים, המשקפים
                                את המקצועיות והניסיון שלנו.
                            </p>
                        </div>
                    </div>
                </motion.section>
                <motion.section variants={sectionVariants} initial="hidden" animate="visible" transition={{delay: 0.5}}>
                   <p className="mt-8 text-lg text-center">
                       <b>בחירה באלעד מהנדסים היא בחירה בראש שקט. פנו אלינו עוד היום לקבלת ייעוץ ראשוני והצעת מחיר לבדיקת הנכס שלכם.</b>
                  </p>
               </motion.section>
               <AnimatedCTA />

            </main>

        </div>
    );
};

export default HomeInspection;