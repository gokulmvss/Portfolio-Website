// import React, { useEffect, useState } from "react";
// import '../ProjectWork/project.css'
// import { motion, AnimatePresence  } from 'framer-motion';

import React from "react";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import '../ProjectWork/project.css'

const description = [
  {
      projecttitle: "Emotion-Cause Pair Extraction from Text Extracts.",
      description: [
          'Working on developing an end-to-end approach for Emotion-Cause Pair Extraction from textual data using various NLP techniques.',
          'Conducting research on various approaches to enhance semantic understanding between clauses, aiming to improve the model ability to interpret complex relationships between emotions and their causes.'],
      year: "2024-2025",
      techStack: ["Python", "Pytorch"],
      status: "Still Working",
      demoLink: []
  },
  {
    projecttitle: "Video Analysis using Computer Vision.",
    description: [
        'Developed a scalable and efficient system for analyzing CCTV footage using Computer Vision libraries that detects, identifies, and tracks individuals across multiple cameras, with the capability to process video in one-shot and retrieve analysis for various applications.',
        'Driven the development of a full stack application with Streamlit for frontend and PostgreSQL as backend.'
    ],
    year: "2024",
    techStack: ["Python", "PostgreSQL","Streamlit"],
    status: "Finished",
    demoLink: []
  },
  {
    projecttitle: "Jobseek.com - Website for job search information.",
    description: [
        'A job-seeking platform that provides a seamless user experience for job seekers to filter opportunities based on various criteria and recruiters to upload job postings.',
        'Consists of features including User Authorization, Job seeker dashboard to view postings and market statistics and recruiter dashboard to perform CRUD operations for job postings.'
    ],
    year: "2024-2025",
    techStack: ["Flask", "React", "PostgreSQL"],
    status: "Still Working",
    demoLink: []
  },
  {
    projecttitle: "Video-based Identification of Child Patients and Therapists.",
    description: [
        'Developed a system using YOLO, Haar classifiers, and DeepFace for detecting and identifying child patients and therapists from video footage. ',
        'Integrated with a web app using Streamlit and Flask to upload videos and display classification results.'
    ],
    year: "2024-2025",
    techStack: ["Python", "OpenCV", "YOLO", "Haar Classifiers", "DeepFace", "Streamlit", "Flask", "Computer Vision"],
    status: "Finished",
    demoLink: ["https://github.com/gokulmvss/-Video-based-Identification-of-Child-Patients-and-Therapists"]
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const statusColor = project.status === "Still Working" ? "bg-green-500" : "bg-gray-500";

  return (
    <motion.div
      ref={cardRef}
      className="border rounded-lg p-4 text-white z-8 card"
      initial={{ opacity: 0, rotateY: 90 }}
      animate={isInView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: 90 }}
      transition={{ 
        delay: (index % 4) * 0.2 + Math.floor(index / 4) * 0.3,
        duration: 0.5 
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 20px 25px -5px rgba(219, 209, 209, 0.2)",
        transition: { duration: 0.1 }
      }}
    >
      <div className="flex items-center justify-between mt-4">
        <h2 className="text-lg font-semibold dark:text-indigo-600">{project.projecttitle}</h2>
        <div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
      </div>

      <div className="mt-4">
        {project.description.map((desc, index) => (
          <p key={index} className="text-gray-300 dark:text-indigo-400 mb-2">
            {desc}
          </p>
        ))}
      </div>

      {project.demoLink.length > 0 && (
        <div className="mt-4">
          {project.demoLink.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              View Demo
            </a>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <motion.span
          whileHover={{y:-3}}
          transition={{duration:0.2}}
            key={index}
            className="bg-gray-700 text-white px-2 py-1 rounded text-sm"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-400">{project.year}</div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="project" ref={sectionRef}>
      <div className="about-container lg:flex-row p-8 rounded-lg shadow-lg bg-black-800 dark:bg-light-primary text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-6 lg:mb-12 p-2"
        >
          <h1 className="text-4xl font-bold text-indigo-400 dark:text-indigo-800 border-l-4 border-indigo-400 pl-4">
            Projects
          </h1>
        </motion.div>

        <div className="project-tiles grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {description.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;