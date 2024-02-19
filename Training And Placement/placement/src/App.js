import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Team from './Routes/Team';
import Requirements from './Routes/Requirements';
import Academics from './Routes/Academics';
import Contact from './Routes/Contact';
import Achievement from './Routes/Achievement';
import Footer from './component/Footer';
import Login from './component/Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;