import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import logo2 from '../../assets/condensed-logo-full-bgno-2-lightmode.png';
import logo from '../../assets/condensed-logo-full-bgno-2.png';
import "../Hero/Hero.css"
import { useTheme } from '../../Context/ThemeContext';
import BackgroundAnimation from './lightmodeComponent';

const Hero = ({ scrollToSection }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const { scrollYProgress } = useScroll();
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const { theme, toggleTheme } = useTheme();
  
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        // when: "beforeChildren"
      }
    }
  };

  const logoVariants = {
    initial: { 
      opacity: 0,
      scale: 0.8,
      x: '-50%',
      y: '-50%'
    },
    centered: {
      opacity: 1,
      scale: 1,
      x: '-40%',
      y: '0',
      transition: {
        x: { duration: 1, delay: 1 },
      }
    },
    final: {
      x: isMobile ? '-50%' : '-150%',
      y: isMobile ? '-100%' : '-50%',
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.3,
        delay: 0.5
      }
    }
  };

  const textContainerVariants = {
    hidden: {
      opacity: 0,
      x: isMobile ? '-50%' : '-50%',
      y: isMobile ? '-50%' : '-50%'
    },
    visible: {
      opacity: 1,
      x: isMobile ? '-50%' : '-15%',
      y: isMobile ? '0%' : '-50%',
      transition: {
        duration: 0.8,
        delay: 1.5,
        staggerChildren: 0.2
      }
    }
  };

  const textItemVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen w-full overflow-hidden bg-dark-primary dark:bg-light-primary"
    >
      
     {theme === 'dark' ? (
     <BackgroundAnimation />
    ):(
    <div className="absolute inset-0 pointer-events-none">
    <div className="sky">
      <div className="stars"></div>
      <div className="stars1"></div>
      <div className="stars2"></div>
      <div className="shooting-stars"></div>
    </div>
  </div> 
)}

      
      {/* Main Content Container - Changed to position relative */}
      <div className="relative h-screen">
        {/* Logo Section - Absolutely positioned */}
        <motion.div
          initial="initial"
          animate={["centered", "final"]}
          variants={logoVariants}
          style={{ scale: logoScale,textOpacity }}
          className="absolute left-1/2 top-1/2 w-full md:w-1/2 max-w-md"
        >
          {theme === 'dark' ? (
            <img
            src={logo2}
            alt="Gokul Mallem"
            className="w-full object-contain"
          />
          ):(
            <img
            src={logo}
            alt="Gokul Mallem"
            className="w-full object-contain"
          />
          )}
          
        </motion.div>

        {/* Text Content Section - Absolutely positioned */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity: textOpacity }}
          className="absolute left-1/2 top-1/2 w-full md:w-1/2 max-w px-4 md:px-8 text-center md:text-left"
        >
          <motion.h1 
            variants={textItemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white dark:text-dark-primary mb-4 leading-tight"
          >
            Hey there! I'm Gokul, an aspiring Software Developer located in Bangalore.
          </motion.h1>
          
          <motion.p 
            variants={textItemVariants}
            className="text-base md:text-lg text-gray-300 dark:text-dark-primary mb-8 leading-relaxed"
          >
            Simple things inspire me—whether it's the thrill of the game, the art of photography, or the engineering marvels of motorsports.
          </motion.p>

          <motion.button
            // variants={textItemVariants}
            onClick={scrollToSection}
            className="text-lg cursor-pointer bg-gradient-to-r from-dark-start to-dark-end dark:from-light-start dark:to-light-end 
                 text-white dark:text-black rounded-full py-2 px-4 
                 hover:scale-105 transition-all duration-30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(79, 70, 229, 0.5)"
            }}
          >
            About Me
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;

