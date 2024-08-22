import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import MyWorks from './Pages/myworks';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const headerHeight = document.querySelector('.header').offsetHeight;
      const scrollPosition = window.scrollY + headerHeight;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize active section on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <NavBar activeSection={activeSection} />
      <Home id="home" />
      <About id="about" />
      <MyWorks id="myworks" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
