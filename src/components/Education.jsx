import React from 'react';
import './Education.css'; // Import the CSS file
import resume from '../assets/resume.pdf'; // Import the resume file

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-cards-container">
        <div className="education-card">
          <h3>Computer Science Engineering -  8.00 CGPA</h3>
          <p>Saveetha Engineering College, Thandalam Chennai</p>
        </div>
        <div className="education-card">
          <h3>Higher Secondary Certificate With 92.5%</h3>
          <p>Vidhyalakshmi Matric Higher Secondary School</p>
        </div>
        <div className="education-card">
          <h3>Secondary Leaving School Certificate With 86.5%</h3>
          <p>Ambalal Jain Saraswathi Matriculation Vidhyalaya</p>
        </div>
      </div>
      <div className="resume-download">
        <a href={resume} download="Sakthivel_Resume.pdf">
          <button>Download Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Education;
