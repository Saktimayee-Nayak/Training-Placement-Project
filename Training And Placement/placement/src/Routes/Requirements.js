// Requirements.js
import React from 'react';
import './Requirements.css'; // Import the CSS file
import Footer from '../component/Footer';
const Requirements = () => {
  return (
    <div className="requirements-container">
      <h1>Admission Requirements</h1>

      <div className="requirement-section">
        <h2>Undergraduate Programs</h2>
        <ul>
          <li>High school diploma or equivalent</li>
          <li>Minimum GPA of 3.0</li>
          <li>SAT or ACT scores (if applicable)</li>
          <li>Letter of recommendation</li>
          <li>Personal statement</li>
        </ul>
      </div>

      <div className="requirement-section">
        <h2>Graduate Programs</h2>
        <ul>
          <li>Bachelor's degree in a related field</li>
          <li>Minimum GPA of 3.5</li>
          <li>GRE or GMAT scores</li>
          <li>Letters of recommendation</li>
          <li>Statement of purpose</li>
        </ul>
      </div>

      <div className="requirement-section">
        <h2>International Students</h2>
        <ul>
          <li>Valid passport</li>
          <li>TOEFL or IELTS scores (if English is not the native language)</li>
          <li>Financial statement</li>
          <li>Student visa</li>
        </ul>
      </div>
    </div>
  );
}

export default Requirements;
