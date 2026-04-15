import React from 'react';
import ascentDashboard from '../imgs/Ascent-Dashboard-cover.png';
import ascentCover from '../imgs/Ascent-cover.png';
import deChat from '../imgs/DE-chat-cover.png';
import rtActivities from '../imgs/RT-Activities-cover.png';
import tdDataviz from '../imgs/TD-dataviz-cover.png';

const AboutModal = ({ show, onClose }) => {
  if (!show) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="about-modal-overlay" onClick={handleBackgroundClick}>
      <div className="about-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-content">
          <section className="carousel">
            <h2>Gallery</h2>
            <div className="carousel-container">
              <img src={ascentDashboard} alt="Ascent Dashboard" />
              <img src={ascentCover} alt="Ascent Cover" />
              <img src={deChat} alt="DE Chat" />
              <img src={rtActivities} alt="RT Activities" />
              <img src={tdDataviz} alt="TD Dataviz" />
            </div>
          </section>
          <section className="location">
            <h2>Current Location</h2>
            <p>San Francisco, CA</p>
          </section>
          <section className="about-me">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
          <section className="books">
            <h2>Favorite Books</h2>
            <ul>
              <li>Book 1</li>
              <li>Book 2</li>
              <li>Book 3</li>
            </ul>
          </section>
          <section className="hobbies">
            <h2>Hobbies</h2>
            <p>Hiking, Reading, Coding</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;