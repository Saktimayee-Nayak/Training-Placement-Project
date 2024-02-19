// Achievement.js
import React from 'react';
import './Achievement.css'; // Import the CSS file
import Footer from '../component/Footer';
const Achievement = () => {
  return (
    <div className="achievement-container">
      <h1>Our Achievements</h1>

      <section className="achievement-list">
        <h2>Academic Achievements</h2>
        <ul>
          <li>Winner of the National Academic Excellence Award</li>
          <li>Top-ranked university in Computer Science</li>
          <li>Research paper published in prestigious journal</li>
          {/* Add more academic achievements */}
        </ul>
      </section>

      <section className="achievement-list">
        <h2>Sports Achievements</h2>
        <ul>
          <li>Champions in the National Football Tournament</li>
          <li>Gold medal in the Regional Swimming Competition</li>
          <li>Runner-up in the Annual Athletics Meet</li>
          {/* Add more sports achievements */}
        </ul>
      </section>

      <section className="achievement-list">
        <h2>Community Engagement</h2>
        <ul>
          <li>1000+ hours of community service by our students</li>
          <li>Partnership with local schools for educational initiatives</li>
          <li>Environmental sustainability initiatives</li>
          {/* Add more community engagement achievements */}
        </ul>
      </section>
    </div>
  );
}

export default Achievement;
