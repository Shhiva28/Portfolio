import React from 'react';
import './section.css';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h1>About </h1>
      </div>
      <div className="about-content">
        <div className="about-left">
          <p>
            I am a dedicated and creative freelance videographer and editor with over 3 years of experience. My journey in video editing began with a passion for storytelling and a keen eye for detail. I started learning photography and videography to capture the beauty of the life around me.
            <br /><br />
            Over the years, I have honed my skills in editing software like DaVinci Resolve & Premiere Pro and developed a strong understanding of visual and audio dynamics. Whether it's crafting compelling narratives or delivering visually stunning content, I thrive on transforming raw footage into captivating stories.
          </p>
        </div>
        <div className="about-right">
          <h2>Experience</h2>
          <p>Details about your experience will go here.</p>
        </div>
      </div>

    </section>
  );
};

export default About;
