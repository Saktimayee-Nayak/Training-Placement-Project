// Contact.js
import React from 'react';
import './Contact.css'; // Import the CSS file
import Footer from '../component/Footer';
const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>If you have any questions or need assistance, feel free to reach out to us:</p>
        <ul>
          <li>Email: contact@example.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>Contact Form</h2>
        <p>Send us a message using the form below:</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
