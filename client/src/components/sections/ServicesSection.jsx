import React, { useEffect, useRef } from 'react';
import { Ruler, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
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
                duration: 0.9,
                ease: "easeOut",
                staggerChildren: 0.15,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    // useRef for canvas element
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Function to generate a random point within the canvas
        const randomPoint = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.25, // Slightly faster movement
            vy: (Math.random() - 0.5) * 0.25,
            radius: Math.random() * 1.2 + 0.8, // More varied sizes
        });

        // Create an array of random points
        let points = Array.from({ length: 60 }, randomPoint); // More points for richer background

        // Function to draw the connecting lines
        const drawLines = () => {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 123, 255, 0.12)'; // Slightly more transparent lines
            ctx.lineWidth = 0.4; // Even thinner lines for elegance

            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const dx = points[i].x - points[j].x;
                    const dy = points[i].y - points[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 160) { // Slightly larger connection radius
                        // Fade line opacity based on distance
                        const opacity = 1 - (dist / 160);
                        ctx.globalAlpha = opacity * 0.5;
                        ctx.moveTo(points[i].x, points[i].y);
                        ctx.lineTo(points[j].x, points[j].y);
                    }
                }
            }
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        };

        // Function to update and draw points
        const updatePoints = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawLines();
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

                // Draw with gradient
                const gradient = ctx.createRadialGradient(
                    point.x, point.y, 0,
                    point.x, point.y, point.radius * 2
                );
                gradient.addColorStop(0, 'rgba(0, 123, 255, 0.5)');
                gradient.addColorStop(1, 'rgba(0, 123, 255, 0)');
                
                ctx.beginPath();
                ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = gradient;
                ctx.fill();
                ctx.closePath();
            });

            requestAnimationFrame(updatePoints);
        };

        // Resize handler
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Reset points on resize for new distribution
                points = Array.from({ length: 60 }, randomPoint);
            }
        };

        // Initial call and setup resize listener
        updatePoints();
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <motion.div
            className="py-28 relative overflow-hidden"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Background Animations */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Hexagon Pattern */}
                <div className="absolute inset-0 bg-gray-50/80" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23007bff' fill-opacity='0.08'%3E%3Cpath d='M36 0l18 9v18L36 36 18 27V9L36 0zm0 72l-18-9V45L36 36l18 9v18L36 72zM0 45l18 9V36L0 45zm0-36h18v18H0V9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '72px 72px',
                }} />

                <canvas ref={canvasRef} className="absolute inset-0" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-20">
                    <motion.div 
                        className="inline-block mb-4"
                        variants={itemVariants}
                    >
                        <span className="inline-block px-6 py-2 bg-primary-100 text-primary-700 rounded-full text-lg font-medium">
                            פתרונות מקצועיים
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        className="text-5xl font-rubik font-bold text-primary-700 mb-3"
                        variants={itemVariants}
                    >
                        השירותים שלנו
                    </motion.h2>
                    
                    <motion.div 
                        className="w-24 h-1.5 bg-primary-500 mx-auto mb-6"
                        variants={itemVariants}
                    />
                    
                    <motion.p
                        className="mt-4 text-xl text-secondary-600 max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        פתרונות הנדסיים מתקדמים, המותאמים לצרכים הייחודיים שלך
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white p-8 rounded-3xl shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-primary-100 hover:border-primary-300"
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.03, 
                                y: -8,
                                boxShadow: "0 25px 50px -12px rgba(0, 123, 255, 0.25)"
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-3xl" />
                            <div className="relative flex-grow">
                                <motion.div
                                    className="flex items-center justify-center w-24 h-24 bg-primary-100 rounded-full mb-8 group-hover:bg-primary-200 transition-colors duration-300 mx-auto"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-2xl font-rubik font-bold text-secondary-900 mb-4 text-center">{service.title}</h3>
                                <p className="text-secondary-700 leading-relaxed mb-8 text-center">{service.description}</p>
                                
                                {/* Details List - עם נקודות כחולות במקום וי ירוק */}
                                <div className="space-y-4 border-t border-primary-100 pt-6">
                                    {service.details.map((detail, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="relative flex items-center text-secondary-700 rtl group/item"
                                            variants={{
                                                hidden: { opacity: 0, x: -10 },
                                                visible: { 
                                                    opacity: 1, 
                                                    x: 0, 
                                                    transition: { 
                                                        delay: idx * 0.1,
                                                        duration: 0.5
                                                    } 
                                                }
                                            }}
                                        >
                                            {/* נקודה כחולה במקום וי ירוק */}
                                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 
                                                          w-3.5 h-3.5 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 
                                                          shadow-sm group-hover/item:scale-125 transition-transform"></div>
                                            <span className="text-base leading-relaxed pr-8 group-hover/item:text-primary-700 transition-colors">
                                                {detail}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            {/* Subtle animated element in the corner */}
                            <motion.div
                                className="absolute bottom-0 right-0 w-52 h-52 rounded-tl-[60%] opacity-0 group-hover:opacity-30 transform -translate-x-1/4 -translate-y-1/4 transition-all duration-500"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23007bff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
                                }}
                                animate={{
                                    rotate: [0, 10, 0],
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