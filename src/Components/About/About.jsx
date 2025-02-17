import React from 'react';
import { Mail, Linkedin, Github, Instagram} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';
import photo1 from '../../assets/photo1.png';

const About = ({ scrollToSection, refs }) => {
  // console.log("Refs in About component:", refs); // Debugging
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
            Hey there! I'm <span className="font-semibold">Gokul Mallem</span>, a final-year <span className="font-semibold">ECE student at PES University, Bangalore</span>.  
            I thrive at the intersection of <span className="font-semibold">Full-Stack Development</span> and <span className="font-semibold">Machine Learning</span>,  
            building scalable tech solutions that create real-world impact—because what’s the point of innovation if it doesn’t hit the road?
          </p>

          <p className="mb-6">
            My academic journey has deepened my understanding of electronics and communication systems while keeping me grounded in software engineering concepts.  
            I love bringing ideas to life through hands-on projects that push boundaries and encourage collaboration.
          </p>

          <p className="mb-6">
            Professionally, I've worked on a range of projects, from <span className="font-semibold">Computer Vision Applications</span> to real-time analysis of NIR-spectral data.  
            You can check it out in the<span className="font-semibold text-indigo-400 dark:text-orange-400 cursor-pointer"> Professional Experience section </span>.
            {/* onClick={() =>  */}
              {/* console.log("workRef before calling scrollToSection:", refs.workRef); */}
                {/* scrollToSection(refs.WorkRef)}}>  */}
                 
            My personal projects, which include full-stack applications (like a job-search platform) and deploying Machine Learning for accessibility,  
            are showcased in the  
            <span className="font-semibold text-green-400 dark:text-orange-400 cursor-pointer" onClick={() => navigateToSection('projects-section')}> Projects section</span>.  
            Be sure to check them out !
          </p>

          <p className="mb-6">
            Beyond coding, you'll often find me capturing moments through my <span className="font-semibold">capturing the facinations of nature by photography</span>, chasing the thrill of <span className="font-semibold">racing</span>,  
            or enjoying a good game of <span className="font-semibold">sports</span>. Whether it's pixels, speed, or strategy—I love a challenge!
          </p>

          <p className="mb-6">
            Right now, I'm exploring new technologies, particularly integrating <span className="font-semibold">ML models into web applications, and learning technologies to </span> to make systems deployable and scalable at an enterprise level.
          </p>

          <p className="mb-6">
            Feel free to explore my page, check out my work, and if anything sparks your interest (or if you just want to talk tech, photography, or racing),  
            hit me up through the <span className="font-semibold text-green-400 cursor-pointer" onClick={() => navigateToSection('contact-section')}>Contact Me</span> section or my socials linked below.  <br />
            Let’s build something awesome!
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
              href="https://github.com/gokulmvss/gokulmvss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 dark:hover-text-black-600 transition-colors"
            >
              <Github size={30} />
            </a>

            {/* <a
              href="https://github.com/gokulmvss/gokulmvss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 dark:hover-text-black-600 transition-colors"
            >
              <Instagram size={30} />
            </a> */}

            {/* <a
              href="https://leetcode.com/u/G0kew1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 dark:hover-text-black-600 transition-colors"
            >
              <LucideIcon
                size={30}
                className="fill-current"
                viewBox="0 0 24 24"
                dangerouslySetInnerHTML={{
                  __html: `
                    <path fill="currentColor" d="M14.085 0L7.932 6.153L10.89 9.11l4.064-4.064l3.79 3.791l-3.79 3.791l-4.064-4.064L7.931 11.62l6.154 6.154l7.58-7.58l-7.58-7.58zm-7.58 9.72l-4.095 4.095l4.095 4.095l2.958-2.957l-4.074-4.074zm4.053 7.053L8.504 18.83l6.153 6.153l6.153-6.154l-2.954-2.955l-3.2 3.2l-3.099-3.1z"/>
                  `,
                }}
              />
            </a> */}

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
