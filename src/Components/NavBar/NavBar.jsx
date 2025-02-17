import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '../../utils/utils';
import logo from '../../assets/condensed-logo-bgno.png';
import logolight from '../../assets/condensed-logo-bgno-lightmode.png';
import "./Navbar.css";
import {motion} from "framer-motion";
import { useTheme } from '../../Context/ThemeContext';

const NavBar = ({ scrollToSection, refs }) => {
  const [activeSection, setActiveSection] = useState('Home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const navSections = useMemo(() => [
    { name: 'Home', ref: refs.heroRef },
    { name: 'About Me', ref: refs.aboutRef },
    { name: 'Skills', ref: refs.skillsRef },
    { name: 'Experience', ref: refs.workRef },
    { name: 'Projects', ref: refs.projectRef },
  ], [refs]);

  const NAVBAR_HEIGHT = 72;

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 20 + NAVBAR_HEIGHT;
      for (let i = navSections.length - 1; i >= 0; i--) {
        const section = navSections[i].ref.current;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navSections[i].name);
          break;
        }
      }
      const totalScrollable = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScrollable) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navSections]);

  const NavigationLink = ({ section }) => (
  //   <li className={cn(
  //   "cursor-pointer text-white-500 dark:text-black:500 transition-all duration-300",
  //   activeSection === section.name
  //     ? "text-nav-active dark:nav-inactive scale-110"
  //     : "hover:text-light-accent dark:hover:text-dark-accent hover:scale-105"
  // )}
  <li className={cn(
    "cursor-pointer dark:text-black text-white transition-all duration-300",
    activeSection === section.name
      ? "dark:text-yellow-500 text-indigo-500 scale-110"
      : "dark:hover:text-dark-accent hover:scale-105"
  )}
      onClick={() => {
        const targetPosition = section.ref.current.offsetTop - NAVBAR_HEIGHT;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        setIsOpen(false);
      }}
    >
      {section.name}
    </li>
  );

  const ConnectButton = () => (
    <motion.button
      className="text-lg cursor-pointer bg-gradient-to-r from-dark-start to-dark-end dark:from-light-start dark:to-light-end 
                 text-white dark:text-black rounded-full py-2 px-4"
      
      onClick={() => {
        const targetPosition = refs.contactRef.current.offsetTop - NAVBAR_HEIGHT;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        setIsOpen(false);
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 20px rgba(79, 70, 229, 0.5)"
      }}
    >
      Connect With Me
    </motion.button>
  );

  const LogoButton = () => (
    <div className="z-30 flex items-center justify-center">
      {theme === 'dark' ? (
               <img
               className="object-contain w-auto transition-transform duration-300 h-14 hover:scale-105 cursor-pointer"
               src={logolight}
               alt="Logo"
               onClick={() => {
                 const targetPosition = refs.heroRef.current.offsetTop - NAVBAR_HEIGHT;
                 window.scrollTo({
                   top: targetPosition,
                   behavior: 'smooth'
                 });
                 setIsOpen(false);
               }}
             />
            ) : (
              <img
        className="object-contain w-auto transition-transform duration-300 h-14 hover:scale-105 cursor-pointer"
        src={logo}
        alt="Logo"
        onClick={() => {
          const targetPosition = refs.heroRef.current.offsetTop - NAVBAR_HEIGHT;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          setIsOpen(false);
        }}
      />
            )}
     
    </div>
  );

  return (
    <div className="sticky top-0 left-0 z-40 w-full">
      {/* Scroll progress indicator */}
      <div
        className="slider left-0 h-1 bg-gradient-to-r from-dark-start to-dark-end dark:from-light-start dark:to-light-end absolute"
        style={{ width: `${scrollProgress}%` }}
      />

        <nav className="navbar relative flex items-center justify-between p-4 
                      bg-dark-primary text-light-primary
                      dark:bg-light-primary dark:text-dark-primary
                      bg-opacity-80 backdrop-blur-sm">
                        
        <LogoButton />

        <ul className="hidden gap-8 text-lg md:flex ">
          {navSections.map(section => (
            <NavigationLink key={section.name} section={section} />
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full 
                       bg-dark-accent text-light-primary
                       dark:bg-light-accent dark:text-dark-primary
                       hover:scale-105 transition-transform duration-300"
          >
            {theme === 'dark' ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-black-800" />
            )}
          </button>

          <div className="hidden md:block">
            <ConnectButton />
          </div>

          {/* <div className="md:hidden">
            <button
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen && <Menu />}
            </button>
          </div> */}
        </div>


        {/* {isOpen && (
        <div className={`fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen 
                        bg-dark-primary text-light-primary
                        dark:bg-light-primary dark:text-dark-primary
                        bg-opacity-80 backdrop-blur-sm 
                        transition-transform duration-300 z-50 
                        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <button
            className="absolute text-2xl cursor-pointer top-7 right-5"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
          <ul className="flex flex-col text-2xl gap-y-10">
            {navSections.map(section => (
              <NavigationLink key={section.name} section={section}/>
            ))}
          </ul>
          <div className="mt-10">
            <ConnectButton />
          </div>
          </div> */}
{/* )} */}
      </nav>
    </div>
  );
};

export default NavBar;

