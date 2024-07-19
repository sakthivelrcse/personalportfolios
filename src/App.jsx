import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import ToggleButton from './components/ToggleButton';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState('day');

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById('about');
      const education = document.getElementById('education');
      const skills = document.getElementById('skills');
      const certificates = document.getElementById('certificates');
      const projects = document.getElementById('projects');
      const contact = document.getElementById('contact');

      const scrollPosition = window.scrollY + 150;

      if (scrollPosition < education.offsetTop) {
        setActiveSection('about');
      } else if (scrollPosition < skills.offsetTop) {
        setActiveSection('education');
      } else if (scrollPosition < certificates.offsetTop) {
        setActiveSection('skills');
      } else if (scrollPosition < projects.offsetTop) {
        setActiveSection('certificates');
      } else if (scrollPosition < contact.offsetTop) {
        setActiveSection('projects');
      } else {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'day' ? 'night' : 'day'));
  };

  return (
    <div className={`App ${theme}`}>
      <header>
        <div className="header-content">
          <h1>My Personal Portfolio</h1>
          <ToggleButton theme={theme} toggleTheme={toggleTheme} />
        </div>
        <nav>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
            About
          </a>
          <a href="#education" className={activeSection === 'education' ? 'active' : ''}>
            Education
          </a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
            Skills
          </a>
          <a href="#certificates" className={activeSection === 'certificates' ? 'active' : ''}>
            Certificates
          </a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
            Projects
          </a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
            Contact
          </a>
        </nav>
      </header>
      <main>
        <About />
        <Education />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
