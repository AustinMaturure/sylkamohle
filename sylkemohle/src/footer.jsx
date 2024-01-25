import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServicestack, faWhatsapp, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faLocation, faMessage, faPhone, faTextSlash } from "@fortawesome/free-solid-svg-icons";


export default function Footer(){
    return (
        <section className='footer'>
        <div className='logo-ctn' ><h1 className='logo'>
          Sylka Mölhe</h1>
          <p className='ocu-optometrist'>optomtree</p><p className='ocu-optometrist'>optometrist</p></div>
        
        <div className="map">
          <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.775158543744!2d30.801239174004895!3d-27.005661376591878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeee5a9be8b9cb7%3A0xa277efcd410b0890!2sSykla%20M%C3%B6hle!5e0!3m2!1sen!2sza!4v1705502982045!5m2!1sen!2sza"
      width="400"
      height="200"
      style={{ border: '2px solid #213547', borderRadius:"22px" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
        <div className="foot-contact">
          <h3 className='call-whatsapp'> <FontAwesomeIcon icon={faMessage} className="clock-icon"/>(+27) 82 775 1649</h3>
        <h3 className='foot-call-contact'> <FontAwesomeIcon icon={faPhone} className="clock-icon"/> (+27) 17 826 3435</h3>
        <h3>
        
        <FontAwesomeIcon icon={faLocation} className="clock-icon"/>3 Alfa Bldg, 11a Retief St Piet Retief 2380</h3>
<div className='opening-times'>
  <div>
    <h3>MON - FRI</h3>
    <h4>08:00 - 17:00</h4>
  </div>
  <div ><h3>SAT</h3>
    <h4>09:00 - 11:00</h4></div>
    <div ><h3>SUN</h3>
    <h4>CLOSED</h4></div>
</div>
  
        </div>
      </section>
    )
}