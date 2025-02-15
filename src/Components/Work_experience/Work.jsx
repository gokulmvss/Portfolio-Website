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
            "Undergoing Industry-ready training to get to speed on upcoming technologies.",
            '',
        ]

    },
    {
        jobTitle: "Data Science Intern",
        companyName: "Neoperk Technologies, Mumbai",
        location: "Remote",
        duration: "Sept 2024 - Dec 2024",
        description:
        [
            "Tasked to analyse NIR Spectral data captured from proprietary hardware and perform feature engineering for model training with target chemical variables",
            'Conduct research and assist development on enhanced Machine Learning and Deep Learning solutions to aid developement of their ML based solution.'
        ]

    },
    {
        jobTitle: "Research Intern",
        companyName: "Center for Innovation and Entrepreneurship @ PES University, Bangalore",
        location: "On-site, Bangalore, India",
        duration: "Jun 2024 - Jul 2024",
        description:[
            'Worked on a Computer Vision project on Video footage analysis in collaboration with "Mindset Systems" ',
            'Conducted research and gained experience working with various Computer Vision frameworks to develop a robust,comprehensive end-to-end framework.',
            'Worked on the development of an end-to-end application, leading the backend team and integrating the full-stack application, using Python and PostgreSQL.'
        ]

    },
];

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

