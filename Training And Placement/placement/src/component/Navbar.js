import React from 'react';
import { ReactDOM } from 'react';
import './NavbarStyle.css';
import universityLogo from './university_logo.jpg'; 
import { NavLink } from 'react-router-dom';
import Login from './Login';


const Navbar = () => {
  return (

    <>
 
  <div className="button">
        <h1>
          <NavLink to="/login" className="login-button">
            Login
          </NavLink>
        </h1>
      </div>


      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div className="logo">
          <img
            src={universityLogo} 
            alt="University Logo"
            className="logo"
            />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="main-content">
            <h1>CENTURION UNIVERSITY</h1>
            <p>Shaping Lives, Empowering Communities....</p>
          </section>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/requirements">
                  Requirements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/academics">
                  Academics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="achievement">
                  Achievement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
    
  );
};

export default Navbar;
