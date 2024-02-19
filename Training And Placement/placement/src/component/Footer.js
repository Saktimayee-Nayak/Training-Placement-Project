import React from 'react'
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer bg-dark text-white">
    <div className="footer section_padding">
      <div className="footer-links">
        <div className="footer-links_div">
          <h2>General</h2>

    <a href="/Holidaylist">
     <p>Holiday List</p>   
    </a> 
    <a href="/trackyourvehicle">
     <p>Track Your Vehicle</p>   
    </a> 
    <a href="/MIS/ERPLogin">
     <p>MIS/ERPLOGIN</p>   
    </a> 
    <a href="/studentvarification">
     <p>Student varification</p>   
    </a> 
    </div>
<div className="footer-links_div">
     <h2>Admission</h2>
      <a href="/admission">
                  <p>Admission</p>  
          </a>
          <a href="/howtoapply">
  <p>How To Apply</p> 
  </a> 
  < a href="/Coursefee">
  <p>Course Fee</p>  
  </a>
  <a a href="/scolarship">
  <p>Scholarship</p>   
</a>  
</div>
        <div className="footer-links_div">
          <h2>Placement</h2>
          <a a href="/overview">
  <p>Overview</p>  
  </a>
  <a a href="/ourrequiters">
  <p>Our Recruiters</p> 
  </a>
  <a a href="/placementbrochure"> 
  <p>Placement Brochure</p> 
  </a>
  <a a href="/careerdevelopmentcell"> 
  <p>Career Development Cell</p>  
  </a> 

          </div>
          <div className="footer-links_div">
          <h2>Connect</h2>
          <a a href="/imagegallery">     
  <p>image Gallery</p> 
  </a> 
  <a a href="/videogallery">
  <p>Video Gallery</p> 
  </a> 
  <a a href="/mediacoverage">
  <p>Media Coverage</p> 
  </a>
  <a a href="/calender"> 
  <p>Event Calender</p>   
</a>   
    </div>

        < div className="footer-links_div">
          <h2>Contact Us</h2>
          
  <p>CENTURION UNIVERSITY OF TECHNOLOGY AND MANAGEMENT (CUTM)</p>

    <p>
    HIG-4, Floor 1 and 2, Jaydev Vihar,Opp Pal Heights, Bhubaneswar, Dist: Khurda, Odisha, India 
    </p>

    <div class="elementor-social-icons">
  
  
 
</div>

        </div>
      </div>
    </div>

    <hr></hr>

      <div className="footer-below">
        <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Centurion University</p>
        </div>
<div className="footer-below-links">
  <a href="/disclaimer"><div><p>disclaimer  | </p></div></a>
  <a href="/privacy"><div><p>Privacy Policy  | </p></div></a>
  <a href="/terms"><div><p>Terms of Use  | </p></div></a>
  <a href="/blog"><div><p>Blog</p></div></a>
</div>
      </div>

    
    
  </footer>
  )
}

export default Footer

