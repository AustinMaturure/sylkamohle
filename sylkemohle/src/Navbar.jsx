import React from "react";

export default function Navbar(){
    return(
        <div>
  <nav className="navbar"> 
    <h2 className="logo-header">SYLKA MOHLE</h2>
   
    <ul className="nav-links">
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact Us</a></li>
      <li><a href="#about">About</a></li>
    </ul>
    
    <button className="book-btn">BOOK</button>
  </nav>
</div>

    )
}