import React, { useEffect, useState } from 'react';
import './navbar.css';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - window.innerHeight / 2 &&
          window.scrollY < sectionTop + sectionHeight - window.innerHeight / 2
        ) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`header ${activeSection === 'about' ? 'about-active': ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
      >
        <nav className="Navbar">
          <ul>
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active about-link' : ''}>About</a></li>
            <li><a href="#myworks" className={activeSection === 'myworks' ? 'active' : ''}>My Work</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default NavBar;
