import React, { useRef } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Work from './Components/Work_experience/Work';
import Project from './Components/ProjectWork/project';
import Footer from './Components/Footer/Footer';
import ContactMe from './Components/ContactME/ContactMe';
import Skills from './Components/Skills/Skills';
import { ThemeProvider } from './Context/ThemeContext';

const App = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null); 
  const skillsRef = useRef(null); 

    // Function to handle scrolling
  // const scrollToSection = (sectionRef) => {
  //   sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  const scrollToSection = (sectionRef) => {
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0; // Adjust this selector to match your navbar class or id.
    const sectionTop = sectionRef.current?.getBoundingClientRect().top || 0;
  
    // Scroll smoothly to the section minus the navbar height
    window.scrollBy({
      top: sectionTop - navbarHeight,
      behavior: 'smooth',
    });
  };

  return (
    <ThemeProvider>
    <div>
       {/* Pass scroll function and refs to NavBar */}
      <NavBar scrollToSection={scrollToSection} refs={{ heroRef, aboutRef, workRef, projectRef, contactRef, skillsRef}} />

      {/* Sections with refs */}
      <div ref={heroRef}>
      <Hero scrollToSection={() => scrollToSection(aboutRef)} />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={workRef}>
        <Work />
      </div>

      <div ref={projectRef}>
        <Project />
      </div>

      <div ref={contactRef}>
      <ContactMe  />
      </div>

      <Footer />
    </div>
    </ThemeProvider>
  );
};

export default App;


// import React from 'react'
// import NavBar from './Components/NavBar/NavBar'
// import Hero from './Components/Hero/Hero'
// import About from './Components/About/About'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (
//     // <div>
//     //   <NavBar />
//     //   <Hero />
//     //   <About />
//     // </div>
//     <Router>
//        <NavBar /> 
//        <Hero />
//        <About />
       
//        <Routes>
//         {/* Home Page */}
//         <Route path="/" element={<Hero />} />
        
//         {/* About Page */}
//         <Route path="/about" element={<About />} />
        
//         {/* Additional pages can be added here as needed */}
//       </Routes>
//     </Router>
//   )
// }

// export default App