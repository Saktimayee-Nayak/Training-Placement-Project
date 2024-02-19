import React from 'react';
import About from './About';
import Team from './Team'; // Import the About component
import Requirements from './Requirements';
import Academics from './Academics';
import Contact from './Contact';
import Achievement from './Achievement';
import Footer from '../component/Footer';
import Login from '../component/Login';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
      <About />
      <Team />
      <Requirements />
      <Academics />
      <Contact />
      <Achievement />
      <Login/>
      
    </div>
  );
}

export default Home;

