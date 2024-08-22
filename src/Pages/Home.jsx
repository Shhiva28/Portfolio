import React from 'react';
import './section.css';
import './Home.css';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Photographer. ', 'Videographer. ', 'Editor.'],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 80
  });

  return (
    <section id="home">
      <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
        >
      <a href="#" className="logo">S H H .</a>
      </motion.div>
      <div className="text-Div">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
        >
          <p className='line1'>Hi! I'm</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
        >
          <p className='line2'>Shivadhara</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeIn', delay: 0.4 }} 
        >
          <span className='line3'>{text} <Cursor cursorColor='white'/></span>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
