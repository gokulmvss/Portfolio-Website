import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';
import photo1 from '../../assets/photo1.png';


const About = () => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const isLeftInView = useInView(leftSectionRef, { once: true, margin: "-100px" });
  const isRightInView = useInView(rightSectionRef, { once: true, margin: "-100px" });
  
  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="about-container flex flex-col lg:flex-row p-8 rounded-lg shadow-lg bg-black-800 dark:bg-light-primary text-white dark:text-dark-primary">
      {/* Left Section: Heading and Image */}
      <motion.div 
        ref={leftSectionRef}
        className="about-left flex flex-col items-center lg:items-start lg:w-1/3 p-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isLeftInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", duration: 2, bounce: 0.5 }}
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold text-indigo-400 dark:text-yellow-400 border-l-4 border-indigo-400 dark:border-yellow-400  pl-4 lg:mb-12">
          About Me
        </h1>
        {/* Image */}
        <motion.div
          className="image-container"
          whileHover={{
            scale: 1.05,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={photo1}
            alt="Gokul Mallem"
            className="profile-image rounded-full shadow-lg h-48 w-48 object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Right Section: Text Content */}
      <motion.div 
        ref={rightSectionRef}
        initial={{ opacity: 0, x: isMobile ? 0 : "18vw", y: isMobile ? "20vh" : 0 }}
        animate={isRightInView 
          ? { opacity: 1, x: 0, y: 0 } 
          : { opacity: 0, x: isMobile ? 0 : "18vw", y: isMobile ? "20vh" : 0 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className="about-right rounded-lg p-6 shadow-inner"
      >
        <div className="text-container">
        <p className="mb-6">
          Hi, I'm <span className="font-semibold">Gokul Mallem</span>, a final-year <span className="font-semibold">ECE student at PES University, Bangalore</span>. 
          I specialize in <span className="font-semibold">Full-Stack Development</span> and <span className="font-semibold">Machine Learning</span>, building scalable solutions that merge technology with real-world impact.
        </p>

        <p className="mb-6">
          My academic journey has strengthened my expertise in electronics, communication systems, and software engineering. I've complemented my coursework with hands-on projects that emphasize innovation and collaboration.
        </p>

        <p className="mb-6">
          Professionally, I have worked on a <span className="font-semibold">job-seeking app</span> with recruiter dashboards and a <span className="font-semibold">Retrieval-Augmented Generation (RAG) system</span> for personalized pharma recommendations. These projects refined my skills in <span className="font-semibold">React, Flask, Python, and SQL</span>.
        </p>

        <p className="mb-6">
          Currently, I'm integrating <span className="font-semibold">ML models into web applications</span>, enhancing UX with predictive analytics and recommendation systems while exploring cloud scalability.
        </p>

        <p className="mb-6">
          Check out my <span className="font-semibold text-indigo-400 dark:text-indigo-600 cursor-pointer" onClick={() => navigateToSection('projects-section')}>projects</span> or reach out through the <span className="font-semibold text-green-400 cursor-pointer" onClick={() => navigateToSection('contact-section')}>Contact Me</span> section!
        </p>



          <div className="social-links flex items-center mt-6 space-x-4">
            <a
              href="mailto:mallemgokul@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 dark:hover:text-red-800 transition-colors"
            >
              <Mail size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/gokul-mallem-vss-b99461269/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-800 transition-colors"
            >
              <Linkedin size={30} />
            </a>
            <a
              href="https://github.com/gokulmvss?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 dark:hover-text-black-600 transition-colors"
            >
              <Github size={30} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;




// import React,{ useEffect, useState } from 'react';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
// import photo1 from '../../assets/photo1.png';
// import './About.css';
// import { motion, AnimatePresence  } from 'framer-motion';

// const About = () => {
//   const navigateToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
// const isMobile = window.innerWidth <= 768;
// const [isVisible, setIsVisible] = useState(false);
//   return (
    
//     <motion.div 
//     initial={{ opacity: 0}}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 1 }}
//     className="about-container flex flex-col lg:flex-row p-8 rounded-lg shadow-lg bg-black-800 text-white"
//     >
//       {/* Left Section: Heading and Image */}
//       <motion.div className="about-left flex flex-col items-center lg:items-start lg:w-1/3 p-4"
//        initial={{ scale: 0.8, opacity:0}}
//        animate={{ scale: 1, opacity:1 }}
//     //    transition={{
//     //      duration: 1,
//     //      ease: 'easeInOut',
//     //  }}
//     transition={{ type: "spring", duration:2, bounce: 0.5 }}
  
//     >
//         {/* Heading */}
//         <h1 className="text-4xl font-bold text-indigo-400 border-l-4 border-indigo-400 pl-4 mb-6 lg:mb-12">
//           About Me
//         </h1>
//         {/* Image */}
//         <motion.div
//          className="image-container"
//          whileHover={{
//           scale: 1.05,
//           transition: { duration: 1 },
//         }}
//         whileTap={{ scale: 0.9 }}
//         >
//           <img
//             src={photo1}
//             alt="Gokul Mallem"
//             className="profile-image rounded-full shadow-lg h-48 w-48 object-cover"
//           />
//         </motion.div>
//       </motion.div>

//       {/* Right Section: Text Content */}
//       <motion.div 
//       initial={{ opacity: 0, x: isMobile ? 0 : "18vw", y: isMobile ? "20vh" : 0 }}
//       animate={{ opacity: 1, x: isMobile ? 0 : "0vw", y: isMobile ? "0vh" : 0 }}
//       transition={{ duration: 1, delay: isMobile ? 1.5 : 2, ease: "easeInOut" }}

//       className="about-right bg-gray-700 rounded-lg p-6 shadow-inner">
//         <div className="text-container">
//           {/* Introduction */}
//           <p className="mb-6">
//             Hi, I’m <span className="font-semibold">Gokul Mallem</span>, a final-year Electronics and Communication Engineering (ECE) student at <span className="font-semibold">PES University, Bangalore</span>. I have a passion for bridging cutting-edge technology with practical applications, especially in <span className="font-semibold">Full-Stack Development</span> and <span className="font-semibold">Machine Learning</span>. My goal is to create scalable, impactful solutions that make a difference.
//           </p>

//           {/* Education */}
//           <p className="mb-6">
//             My academic journey has provided a strong foundation in electronics, communication systems, and software engineering. At PES University, I’ve honed my technical expertise, balancing coursework with hands-on projects that emphasize innovation and collaboration.
//           </p>

//           {/* Work Experience */}
//           <p className="mb-6">
//             In my previous roles, I have worked on various impactful projects, including a <span className="font-semibold">job-seeking application</span> with advanced filtering features and recruiter dashboards, and a <span className="font-semibold">Retrieval-Augmented Generation (RAG) system</span> for personalized recommendations in the pharmaceutical industry. These experiences have solidified my skills in tools like <span className="font-semibold">React, Flask, Python, and SQL</span>, and have given me invaluable insight into end-to-end application development.
//           </p>

//           {/* Current Work */}
//           <p className="mb-6">
//             Currently, I am exploring the integration of <span className="font-semibold">Machine Learning models</span> in web applications, focusing on enhancing user experiences with predictive analytics and recommendation systems. I’m also delving into the nuances of cloud computing to expand the scalability of my projects.
//           </p>

//           {/* Closing with navigation links */}
//           <p className="mb-6">
//             Explore my <span className="font-semibold text-indigo-400 cursor-pointer" onClick={() => navigateToSection('projects-section')}>projects and work experience</span> to learn more about what I’ve done so far. If you’d like to connect or collaborate, feel free to reach out through the <span className="font-semibold text-green-400 cursor-pointer" onClick={() => navigateToSection('contact-section')}>Contact Me</span> section!
//           </p>

//           <div className="social-links flex items-center mt-6 space-x-4">
//            <a
//             href="mailto:mallemgokul@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-red-500 transition"
//           >
//             <FaEnvelope size={30} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/gokul-mallem-vss-b99461269/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-blue-600 transition"
//           >
//             <FaLinkedin size={30} />
//           </a>
//           <a
//             href="https://github.com/gokulmvss?tab=repositories"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-gray-800 transition"
//           >
//             <FaGithub size={30} />
//           </a>
          
//         </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default About;



