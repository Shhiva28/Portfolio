import React from 'react';
import './section.css';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-header">
        <span>GET IN</span>
        <span>TOUCH</span>
      </div>
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> <span style={{ marginLeft: '10px' }}>shivadhara28@gmail.com</span>
        </p>
        <span></span>
        <p>
          <FontAwesomeIcon icon={faPhone} /> <span style={{ marginLeft: '10px' }}>+91 76542 88902</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faInstagram} /> <span style={{ marginLeft: '10px' }}>shh._.28</span>
        </p>
        <div className="socials">
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a> */}
          {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
