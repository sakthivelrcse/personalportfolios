import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faAtom, faDatabase, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Import the GitHub icon
import './Skills.css'; // Import the CSS file

function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="skills" className={visible ? 'visible' : ''}>
      <h2>Skills</h2>
      <div className="skills-cards-container">
        <div className="skills-card">
          <FontAwesomeIcon icon={faCode} size="3x" />
          <h3>HTML, CSS, JavaScript</h3>
        </div>
        <div className="skills-card">
          <FontAwesomeIcon icon={faAtom} size="3x" />
          <h3>React.js</h3>
        </div>
        <div className="skills-card">
          <FontAwesomeIcon icon={faDatabase} size="3x" />
          <h3>API Integration</h3>
        </div>
        <div className="skills-card">
          <FontAwesomeIcon icon={faGithub} size="3x" />
          <h3>Git and GitHub</h3>
        </div>
        <div className="skills-card">
          <FontAwesomeIcon icon={faChartLine} size="3x" />
          <h3>Financial Analysis</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
