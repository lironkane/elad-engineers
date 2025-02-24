import React, { useEffect, useRef } from 'react';
import { Building2, Ruler, FileText, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Building2 className="w-12 h-12 text-primary-600" />,
        title: 'בדק בית מתקדם',
        description: 'איתור ליקויים נסתרים וגלויים באמצעות טכנולוגיות סריקה מתקדמות, להבטחת איכות ובטיחות המבנה.',
        details: [
            "סריקות תרמיות לאיתור נזילות וליקויי בידוד",
            "בדיקות אולטרסאונד לגילוי סדקים פנימיים",
            "שימוש ברחפנים לבדיקת גגות ומעטפת חיצונית",
            "ניתוח נתונים מתקדם להערכת מצב המבנה"
        ]
    },
    {
        icon: <Ruler className="w-12 h-12 text-primary-600" />,
        title: 'פיקוח הנדסי וניהול פרויקטים',
        description: 'ליווי צמוד ומקצועי לכל אורך תהליך הבנייה או השיפוץ, תוך הקפדה על עמידה בתקנים, לוחות זמנים ותקציב.',
        details: [
            "בדיקת תוכניות בנייה והיתרים",
            "פיקוח על עבודת הקבלנים",
            "ניהול תקציב ולוחות זמנים",
            "בקרת איכות חומרים ועבודה"
        ]
    },
    {
        icon: <FileText className="w-12 h-12 text-primary-600" />,
        title: 'חוות דעת הנדסיות מומחה',
        description: 'מתן חוות דעת מקצועיות ומקיפות למגוון צרכים: הערכת שווי נכס, סכסוכי שכנים, ליקויי בנייה ועוד.',
        details: [
            "ניתוח מעמיק של מצב הנכס",
            "הכנת חוות דעת כתובה ומנומקת",
            "הופעה בבית משפט כמומחה (במידת הצורך)",
            "ייעוץ מקצועי לגבי המשך טיפול"
        ]
    }
];

const ServicesSection = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };


    // useRef for canvas element
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // Guard clause in case ref is not yet set

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Function to generate a random point within the canvas
        const randomPoint = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.2, // Slow velocities
            vy: (Math.random() - 0.5) * 0.2,
            radius: Math.random() * 1 + 1, // Smaller points

        });

        // Create an array of random points
        let points = Array.from({ length: 50 }, randomPoint); // Fewer points

        // Function to draw the connecting lines
        const drawLines = () => {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 123, 255, 0.15)'; // Lighter, more transparent lines
            ctx.lineWidth = 0.5; // Thinner lines

            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const dx = points[i].x - points[j].x;
                    const dy = points[i].y - points[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) { // Connect within a smaller radius
                        ctx.moveTo(points[i].x, points[i].y);
                        ctx.lineTo(points[j].x, points[j].y);
                    }
                }
            }
            ctx.stroke();
            ctx.closePath();
        };

        // Function to update and draw points
        const updatePoints = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
            drawLines(); // Draw lines first
            points.forEach(point => {
                // Update position
                point.x += point.vx;
                point.y += point.vy;

                // Bounce off the edges
                if (point.x + point.radius > canvas.width || point.x - point.radius < 0) {
                    point.vx = -point.vx;
                }
                if (point.y + point.radius > canvas.height || point.y - point.radius < 0) {
                    point.vy = -point.vy;
                }

                 // Draw
                ctx.beginPath();
                ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(0, 123, 255, 0.3)'; // Lighter blue
                ctx.fill();
                ctx.closePath();
            });

            requestAnimationFrame(updatePoints); // Call the next frame
        };


          // Resize handler
        const handleResize = () => {
          if (canvasRef.current) {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
             // Reset points on resize for new distribution
            points = Array.from({length: 50}, randomPoint)
          }
        }

        // Initial call and setup resize listener
        updatePoints(); // Start the animation
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []); // Empty dependency array: effect runs only once on mount


    return (
        <motion.div
            className="py-24 relative overflow-hidden" // Removed bg-gradient-to-br
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Background Animations */}
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Hexagon Pattern (remains static) */}
                 <div className="absolute inset-0 bg-gray-100/50" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23007bff' fill-opacity='0.1'%3E%3Cpath d='M36 0l18 9v18L36 36 18 27V9L36 0zm0 72l-18-9V45L36 36l18 9v18L36 72zM0 45l18 9V36L0 45zm0-36h18v18H0V9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '72px 72px',
                }} />

               <canvas ref={canvasRef} className="absolute inset-0" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl font-rubik font-bold text-primary-700"
                        variants={itemVariants}
                    >
                        השירותים שלנו
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-xl text-secondary-600"
                        variants={itemVariants}
                    >
                        פתרונות הנדסיים מתקדמים, המותאמים לצרכים הייחודיים שלך
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {services.map((service, index) => (
                         <motion.div
                            key={index}
                            className="group relative bg-white p-8 rounded-3xl shadow-xl  transition-all duration-300  overflow-hidden flex flex-col border border-primary-100"
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, y: -5, borderColor: "rgba(0, 123, 255, 0.5)" }} // Added border color change
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-3xl" />
                            <div className="relative flex-grow">
                                 <motion.div
                                    className="flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors duration-300 mx-auto"
                                    whileHover={{ rotate: 360 }} // Rotate the icon on hover
                                    transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth rotation
                                  >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-2xl font-rubik font-bold text-secondary-900 mb-4 text-center">{service.title}</h3>
                                <p className="text-secondary-700 leading-relaxed mb-6 text-center">{service.description}</p>
                                {/*  Details List */}
                                <ul className="list-none pl-0 space-y-2"> {/* Removed pl-5 */}
                                     {service.details.map((detail, idx) => (
                                      <motion.li
                                        key={idx}
                                        className="flex items-center text-secondary-700"
                                        variants={itemVariants} // Animate each list item
                                      >
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                            <span>{detail}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            {/*  Subtle animated element in the corner */}
                             <motion.div
                               className="absolute bottom-0 right-0 w-48 h-48  rounded-tl-[60%] opacity-0 group-hover:opacity-30 transform -translate-x-1/4 -translate-y-1/4  transition-all duration-500"
                                style={{
                                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23007bff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`, // Diagonal lines
                                }}
                                animate={{
                                    rotate: [0, 10, 0], // Subtle rotation
                                     scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                     ease: "easeInOut"
                                }}

                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ServicesSection;