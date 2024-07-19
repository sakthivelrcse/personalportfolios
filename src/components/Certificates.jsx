import React from 'react';
import './Certificates.css'; 
import html from '../assets/html.png'; // Corrected import
import fincer from '../assets/fincer.jpg'; // Corrected import

function Certificates() {
  const certificates = [
    {
      title: 'Financial Analyst Certification',
      provider: '365 Careers (Udemy)',
      date: 'Completed: July 2024',
      image: fincer, // Corrected to use `fincer`
      link: '/' 
    },
    {
      title: 'HTML, CSS, and Javascript for Web Developers',
      provider: 'Coursera',
      date: 'Completed: June 2024',
      image: html, // Corrected to use `html`
      link: '/' 
    },
    {
      title: 'JavaScript Programming with React, Node & MongoDB Specialization',
      provider: 'Coursera',
      date: 'Started: June 2024',
      image: html, // Corrected to use `html`
      link: '/' 
    },
    {
      title: 'Application Development using Microservices and Serverless',
      provider: 'Coursera',
      date: 'Started: June 2024',
      image: html, // Corrected to use `html`
      link: '/' 
    },
    {
      title: 'Introduction to Microsoft Azure Cloud Services',
      provider: 'Coursera',
      date: 'Started: June 2024',
      image: html, // Corrected to use `html`
      link: '/' 
    }
  ];

  return (
    <section id="certificates">
      <h2>Certificates</h2>
      <div className="certificates-cards-container">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificates-card">
            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              <img src={certificate.image} alt={certificate.title} className="certificates-image" />
              <div className="certificates-details">
                <h3>{certificate.title}</h3>
                <p>{certificate.provider}</p>
                <p>{certificate.date}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
