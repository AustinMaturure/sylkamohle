import React, {useEffect} from "react";
import { useParams } from "react-router";
import '../src/servicedetail.css'
import './Hero.css'
import spec from '../assets/eye-glasses.webp'
import oct from '../assets/oct.webp'
import serviceData from '../src/servicesData.json'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./Navbar";




export default function ServiceDetail() {
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

    const { serviceSlug } = useParams();
  
    const service = serviceData.services.find(service => service.slug == serviceSlug);
  
    if (!service) {
      return <div>Service not found</div>;
    }

  
    return (
        <> <title>Optometrist Perscription Glasses and OCT exams Piet Retief</title>   
        <div>
        <nav className="navbarr"> 
        <Link to="/"><h2 className="logo-header">SYLKA MöHLE</h2></Link>
         
          <ul className="nav-link">
          <li><Link to="/#services">Services</Link></li>
          <li><Link to="/#about-us">About</Link></li>
          <li><Link to="/#contact-us">Contact Us</Link></li>
          </ul>
          
          
          <button className="book-btn">CALL US</button>
        </nav>
      </div> {console.log(serviceData.services)}
            <div className="service-detail-cnt">
                <div className="service-illustration">
                            <img src={serviceSlug == "prescription-eyeglasses" ? spec : oct} alt="perscription-eyeglasses-piet-retief" style={{maxWidth: "100%"}}className="serv-pic" loading="lazy"/>

                        </div>
                        <div className="service-descrption" key={service.id}>
                            <h1 className="service-detail-title">{service.title}</h1>
                            <ul dangerouslySetInnerHTML={{ __html: service.description.map(item => `<li>${item}</li>`).join('') }}></ul>
                            <p> <FontAwesomeIcon icon={faClock} className="clock-icon"/>{service.duration}</p>
                            <p> <FontAwesomeIcon icon={faMoneyBill} className="clock-icon"/>{service.price}</p>
                     
                        </div>
                        
            </div>
          
        </>
    );
}
