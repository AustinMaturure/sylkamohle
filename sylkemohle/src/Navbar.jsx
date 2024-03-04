import React, { useState, useEffect } from "react";
import menu from "../assets/menu.svg";
import close from '../assets/close.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change the value 768 to your desired breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <h2 className="logo-header">SYLKA MöHLE <p className="opt-p"> optometrist</p></h2>
        

        {isMobile && (
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <img src={close} alt="Close Menu" /> : <img src={menu} alt="Open Menu" />}
          </button>
        )}
        
  
        {isMobile && isOpen && (
          <ul className="nav-links-mobile">
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#about-us" onClick={toggleMenu}>About</a></li>
            <li><a href="#contact-us" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
        )}
        

        {!isMobile && (
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about-us">About</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        )}
        

        <button className="book-btn">CALL US</button>
      </nav>
    </div>
  );
}
