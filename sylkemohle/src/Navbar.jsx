import React from "react";

export default function Navbar(){
    return(
        <div>
  <nav className="navbar"> 
    <h2 className="logo-header">SYLKA MöHLE </h2>
   
    <ul className="nav-links">
      <li><a href="#services">Services</a></li>
      <li><a href="#about-us">About</a></li>
      <li><a href="#contact-us">Contact Us</a></li>
    </ul>
    
    <button className="book-btn">CALL US</button>
  </nav>
</div>

    )
}