// Academics.js
import React from 'react';
import './Academics.css'; // Import the CSS file
import Footer from '../component/Footer';
const Academics = () => {
  return (
    <div className="academics-container">
      <h1>Academics</h1>

      <section className="academic-program">
        <h2>Bachelor's Degrees</h2>
        <p>
          Our Bachelor's degree programs offer a wide range of majors and opportunities for students to explore their interests.
        </p>
        <ul>
          <li>Program 1</li>
          <li>Program 2</li>
          <li>Program 3</li>
          {/* Add more programs */}
        </ul>
      </section>

      <section className="academic-program">
        <h2>Master's Degrees</h2>
        <p>
          Pursue advanced studies with our Master's degree programs that are designed to deepen your knowledge and expertise.
        </p>
        <ul>
          <li>Program 1</li>
          <li>Program 2</li>
          <li>Program 3</li>
          {/* Add more programs */}
        </ul>
      </section>

      <section className="academic-program">
        <h2>Doctoral Programs</h2>
        <p>
          Our doctoral programs offer a path to become experts in your field and contribute to cutting-edge research.
        </p>
        <ul>
          <li>Program 1</li>
          <li>Program 2</li>
          <li>Program 3</li>
          {/* Add more programs */}
        </ul>
      </section>
    </div>
  );
}

export default Academics;
