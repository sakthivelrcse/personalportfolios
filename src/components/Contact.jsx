import React from 'react';
import './Contact.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; // Example solid icon for portfolio
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-info">
        <p>Email: <a href="mailto:sakthivelramalingamcse@gmail.com">sakthivelramalingamcse@gmail.com</a></p>
        <p>Phone: <a href="tel:+919944174406">9944174406</a></p>
        <p>Social Media:</p>
        <ul className="social-links">
          <li>
            <a href="https://github.com/sakthivelrcse" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sakthivelrcse/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://sakthivel-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGlobe} className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
