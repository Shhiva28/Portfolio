import React from 'react';
import './myworks.css';
import Image1 from '../assets/images/image1.jpg';
import Image2 from '../assets/images/image2.jpg';
import Image3 from '../assets/images/image3.jpg';
import Image4 from '../assets/images/image4.jpg';

const MyWorks = () => {
  return (
    <section id="myworks">
      <div className="my-works-section">
        <div className="myworks-left">
          <video className="myworks-video" controls>
            <source src="path_to_your_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="myworks-right">
          <div className="myworks-header">
            <h1>My Work</h1>
          </div>
          <div className="myworks-grid">
            <div className="myworks-item">
              <div className="image-container">
                <img src={Image1} alt="Work1" />
              </div>
            </div>
            <div className="myworks-item">
              <div className="image-container">
                <img src={Image2} alt="Work2" />
              </div>
            </div>
            <div className="myworks-item">
              <div className="image-container">
                <img src={Image3} alt="Work3" />
              </div>
            </div>
            <div className="myworks-item">
              <div className="image-container">
                <img src={Image4} alt="Work4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
