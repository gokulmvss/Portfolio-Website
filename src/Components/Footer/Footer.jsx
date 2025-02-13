import React from "react";
import "./Footer.css"; // Import the separate CSS file for styling

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer dark:bg-light-primary rounded-lg">
      <p className="footer-text dark:text-dark-primary">
        © {new Date().getFullYear()} Gokul Mallem. All rights reserved.
      </p>
      <button className="scroll-to-top dark:text-dark-primary" onClick={scrollToTop}>
        ↑
      </button>
    </footer>
  );
};

export default Footer;
