import React, { useRef,useState } from "react";
import { motion, useInView } from 'framer-motion';
import "./Skills.css"

const skills = [
  {
    name: "Python",
    category: "Programming Languages",
    logo: "python-original.svg"
  },
  {
    name: "C",
    category: "Programming Languages",
    logo: "c-original.svg"
  },
  {
    name: "Java",
    category: "Programming Languages",
    logo: "java-original.svg"
  },
  {
    name: "JavaScript",
    category: "Programming Languages",
    logo: "javascript-original.svg"
  },
  {
    name: "React",
    category: "Frameworks",
    logo: "react-original.svg"
  },
  {
    name: "Flask",
    category: "Frameworks",
    logo: "flask-original-wordmark.svg"
  },
  {
    name: "PostgreSQL",
    category: "Database",
    logo: "postgresql-original.svg"
  },
  {
    name: "MySQL",
    category: "Database",
    logo: "mysql-original.svg"
  },
  {
    name: "Oracle",
    category: "Database",
    logo: "oracle-original.svg"
  },
  {
    name: "OpenCV",
    category: "Frameworks",
    logo: "opencv-original.svg"
  },
  {
    name: "PyTorch",
    category: "Frameworks",
    logo: "pytorch-original.svg"
  },
  {
    name: "Angular",
    category: "Frameworks",
    logo: "angular-original.svg"
  },
  {
    name: "AmazonWebServices",
    category: "Cloud Services",
    logo: "amazonwebservices-original-wordmark.svg"
  },
  {
    name: "Vercel",
    category: "Cloud Services",
    logo: "vercel-original-wordmark.svg"
  }
];

const categories = ["All", ...new Set(skills.map(skill => skill.category))];

const SkillCard = ({ skill, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <div className="relative group">
      <motion.div
        ref={cardRef}
        className="rounded-lg p-6 text-white dark:text-black relative z-10"
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
        <div className="flex flex-col items-center justify-center">
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.name.toLowerCase()}/${skill.logo}`}
            alt={skill.name}
            className="w-12 h-12 mb-4"
            onError={(e) => {
              e.target.src = "/api/placeholder/64/64";
            }}
          />
          <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
          <motion.span
            whileHover={{y:-3}}
            transition={{duration:0.2}}
            className="bg-gray-700 dark:bg-orange-200 text-white dark:text-black px-2 py-1 rounded text-sm"
          >
            {skill.category}
          </motion.span>
        </div>
      </motion.div>
      
      {/* Gradient Border */}
      <div 
        className="borders absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };


  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen p-4 dark:bg-light-primary">
      <div className="p-6 rounded-lg shadow-lg text-white ">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center lg:mb-12 "
        >
          <h1 className="text-4xl font-bold text-indigo-400 dark:text-yellow-400 border-l-4 border-indigo-400 dark:border-yellow-400 pl-4">
            Skills
          </h1>

          {/* Expand/Collapse Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleExpand}
            className="px-4 py-2 text-white hover:text-indigo-400 dark:text-yellow-400 dark:hover:text-orange-400"
          >
            {expanded ? 'Collapse all ↑' : 'Expand all ↓'}
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-8 "
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCategory(category);
              }}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-indigo-400 text-white dark:bg-orange-200 dark:text-black"
                  : "bg-gray-700 dark:text-black dark:bg-yellow-200 text-white hover:bg-gray-600"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 border border-gray-700 rounded-lg text-white bg-gray-800/50 backdrop-blur-sm">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div> */}

        <motion.div
          animate={{ height: expanded ? "auto" : "200px", overflow: "hidden" }}
          transition={{ duration: 0.5 }}
          className={`grid ${expanded ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 lg:grid-cols-4"} gap-6 border border-gray-700 rounded-lg text-white bg-gray-800/50 backdrop-blur-sm`}
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;