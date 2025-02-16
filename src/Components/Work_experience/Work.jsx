import "../Work_experience/Work.css"

import React, { useEffect, useState,useRef } from 'react'
import { motion, AnimatePresence ,useInView} from 'framer-motion'

const info = [
      {
        jobTitle: "Internship Trainee",
        companyName: "KPMG Global Services (KGS), Bangalore",
        location: "On-Site",
        duration: "Jan 2025 - Present",
        description:
        [
            "Undergoing training in industry-relevant technologies and methodologies to develop expertise in developing advanced enterprise-level solutions",
        ],
        techstack:[
          { name: "Angular", logo: "angular-original.svg" },
          { name: "Spring", logo: "spring-original.svg" },
          { name: "Java", logo: "java-original.svg" },
          { name: "Oracle", logo: "oracle-original.svg" }
        ]
    },
    {
        jobTitle: "Data Science Intern",
        companyName: "Neoperk Technologies, Mumbai",
        location: "Remote",
        duration: "Sept 2024 - Dec 2024",
        description:
        [
          "Conducted an in-depth analysis of NIR spectral data for soil properties, identifying key patterns and providing insights for model development. ",
          "Researched and implemented solutions for the inherent biased dataset problem, explored methodologies to enhance the existing solution offered, and assisted in drafting research papers and data visualization."
        ],
        techstack:[
          { name: "Python", logo: "python-original.svg" },
          { name: "Pandas", logo: "pandas-original.svg" },
          { name: "Matplotlib", logo: "matplotlib-original.svg" },
          { name: "Scikitlearn", logo: "scikitlearn-original.svg" }
        ]
    },
    {
        jobTitle: "Research Intern",
        companyName: "Center for Innovation and Entrepreneurship @ PES University, Bangalore",
        location: "On-site, Bangalore, India",
        duration: "Jun 2024 - Jul 2024",
        description:[
          "Worked on a Computer Vision project on Video footage analysis in collaboration with ”Mindset Systems.",
          "Conducted research and gained experience with Computer Vision frameworks while leading backend development for a prototype end-to-end application, integrating a full-stack solution using Python and PostgreSQL.  " 
        ],
        techstack:[
          { name: "Python", logo: "python-original.svg" },
          { name: "OpenCV", logo: "opencv-original.svg" },
          { name: "PostgreSql", logo: "postgresql-original.svg" },
          { name: "Streamlit", logo: "streamlit-original.svg" }
        ]
    },
];

const TechStack = ({ stack }) => {
  if (!stack || stack.length === 0) return null;

  return (
    <motion.div 
      className="techstack-container mt-4 flex flex-wrap gap-4 justify-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-sm font-bold text-white dark:text-black">
        Tech Stack:
        </h1>
      {stack.map((skill, index) => (
        <motion.div 
          key={index}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center justify-center"
        >
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.name.toLowerCase()}/${skill.logo}`}
            alt={skill.name}
            className="w-8 h-10"
            onError={(e) => {
              e.target.src = "/api/placeholder/64/64";
            }}
          />
          {/* <h3 className="text-sm text-white dark:text-black">{skill.name}</h3> */}
        </motion.div>
      ))}
    </motion.div>
  );
};

const Work = () => {
  const [expandedIndices, setExpandedIndices] = useState([]);
  const [expandAll, setExpandAll] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleExpand = (index) => {
    setExpandedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const handleExpandAll = () => {
    setExpandAll(!expandAll);
    if (!expandAll) {
      setExpandedIndices(info.map((_, index) => index));
    } else {
      setExpandedIndices([]);
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0}}
      // animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='about-container lg:flex-row p-8 rounded-lg shadow-lg bg-black-800 dark:bg-light-primary text-white'
    >
        <div className="flex justify-between items-center mb-6 lg:mb-12 p-2">
        <motion.h1 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='text-4xl font-bold text-indigo-400 dark:text-yellow-400 border-l-4 border-indigo-400 dark:border-yellow-400 pl-4'
        >
            Professional Experience
        </motion.h1>
        
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="expand-all-container text-right"
        >
            <button
            onClick={handleExpandAll}
            className="text-indigo-400 hover:text-indigo-500 dark:text-orange-400 dark:hover:text-yellow-500 flex items-center"
            >
            {expandAll ? (
                <span className="mr-2">Collapse All</span>
            ) : (
                <span className="mr-2">Expand All</span>
            )}
            <span>{expandAll ? '↑' : '↓'}</span>
            </button>
        </motion.div>
        </div>

        <motion.div 
          className="experience flex flex-col gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
        {info.map((experience, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 0, x:-20 },
              show: { opacity: 1, y: 0, x:0 }
            }}

            className={`experience-card relative p-5 rounded-lg cursor-pointer 
              transition-all duration-1000 ease-in-out
              border-[3px] border-transparent 
              ${expandedIndices.includes(index) ? 'expanded' : ''} 
              ${isInitialLoad ? 'initial-highlight' : ''}`}
              
            onClick={() => handleExpand(index)}
          >
            <div className="unexpand">
            <div className="header flex justify-between">
              <div className="left-side">
                <h2 className="text-xl font-bold dark:text-orange-400">{experience.jobTitle}</h2>
                <p className="text-indigo-400 dark:text-yellow-800">{experience.companyName}</p>
              </div>
              <div className="right-side text-right">
                <p className="text-gray-400 dark:text-orange-400">{experience.duration}</p>
                <p className="text-gray-400 dark:text-yellow-800">{experience.location}</p>
                <span className="text-indigo-400 dark:text-yellow-800">
                  {expandedIndices.includes(index) ? '↑' : '↓'}
                </span>
              </div>
            </div>
            </div>

            <AnimatePresence>
            {expandedIndices.includes(index) && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`expandable-content mt-5`}
              style={{
                display: expandedIndices.includes(index) ? 'block' : 'none'
              }}
            >
                <ul className="list-disc pl-5">
                {experience.description.map((point, idx) => (
                    <li 
                      key={idx} 
                      className="text-gray-200 dark:text-dark-secondary mb-2"
                    >
                      {point}
                    </li>
                ))}
                </ul>

                <TechStack stack={experience.techstack} />
            </motion.div>
            )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Work

