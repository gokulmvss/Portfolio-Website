import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import "../ContactME/ContactMe.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleToggle = () => {
    setIsExpanded(prevState => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    toast.success("Your message has been successfully sent!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      progressStyle: {
        background: "linear-gradient(to right, #654321, #123456)",
      },
    });
  };

  return (
    <motion.div 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="Contact-Me flex flex-col lg:flex-row p-8 rounded-lg shadow-lg bg-black-800 dark:bg-light-primary text-white dark:text-indigo-400 space-y-8 lg:space-y-0 lg:space-x-8"
    >
      {/* Left Section: Heading and Description */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="left flex flex-col items-center lg:items-start lg:w-1/3 p-4"
      >
        <h1 className="text-4xl font-bold text-indigo-400 dark:text-indigo-800 border-l-4 border-indigo-400 dark:border-indigo-800 pl-4 mb-6">
          Connect With Me
        </h1>
        <p className="text-center lg:text-left text-gray-400 dark:text-black mb-6">
          I'm currently open to new projects, positions, and opportunities! Whether you're looking to collaborate, 
          have a discussion, or explore potential partnerships, feel free to reach out. 
          I'm always excited to connect with like-minded individuals and explore exciting ideas together. Don't hesitate to drop me a message!
        </p>
      </motion.div>

      {/* Right Section: Form */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="about-right bg-gray-700 rounded-lg p-6 shadow-inner lg:w-2/3"
      >
        <form
          className="space-y-6"
          action="https://getform.io/f/bejjpeqa"
          method="POST"
          onSubmit={handleSubmit}
        >
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.div
                key="simple"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="name" className="block text-gray-300 dark:text-indigo-600 mb-2 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white dark:text-black border border-gray-600 dark:border-black"
                  required
                />
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex space-x-4"
              >
                <div className="w-1/2">
                  <label htmlFor="first-name" className="block text-gray-300 dark:text-indigo-400 mb-2 font-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="Enter your first name"
                    className="w-full p-3 rounded-lg bg-gray-800 text-white dark:text-black border border-gray-600"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="last-name" className="block text-gray-300 dark:text-indigo-400 mb-2 font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Enter your last name"
                    className="w-full p-3 rounded-lg bg-gray-800 dark:text-black text-white border border-gray-600"
                    required
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="subject" className="block text-gray-300 dark:text-indigo-400 mb-2 font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white dark:text-black border border-gray-600"
                  required
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="toggle-container flex items-center space-x-2">
            <div
              className={`toggle-switch ${isExpanded ? 'active' : ''}`}
              onClick={handleToggle}
            >
              <div className="toggle-knob"></div>
            </div>
            <label
              htmlFor="toggle-switch"
              className="text-gray-300 text-sm font-medium cursor-pointer"
              onClick={handleToggle}
            >
              {isExpanded ? 'Compress Form' : 'Expand Form'}
            </label>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="message" className="block text-gray-300 dark:text-indigo-400 mb-2 font-semibold">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-800 text-white dark:text-black border border-gray-600"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="gradient-button w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
      <ToastContainer />
    </motion.div>
  );
};

export default ContactMe;