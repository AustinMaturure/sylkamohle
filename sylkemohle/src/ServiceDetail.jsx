import React from "react";
import { useParams } from "react-router";
import '../src/servicedetail.css'
import './Hero.css'
import spec from '../assets/pexels-francesco-paggiaro-1627639.jpg'
import serviceData from '../src/servicesData.json'
import { Link } from 'react-router-dom';



export default function ServiceDetail() {
    const { serviceId } = useParams();
    console.log(serviceId);
  
    const service = serviceData.services.find(service => service.id == serviceId);
  
    if (!service) {
      return <div>Service not found</div>;
    }
  
    return (
        <>   <div>
        <nav className="navbarr"> 
          <h2 className="logo-header">SYLKA MöHLE</h2>
         
          <ul className="nav-link">
          <li><Link to="/#services">Services</Link></li>
          <li><Link to="/#about-us">About</Link></li>
          <li><Link to="/#contact-us">Contact Us</Link></li>
          </ul>
          
          <button className="book-btn">BOOK</button>
        </nav>
      </div> {console.log(serviceData.services)}
            <div className="service-detail-cnt">
                <div className="service-illustration">
                            <img src={spec} alt="" className="serv-pic" />

                        </div>
                        <div className="service-descrption" key={service.id}>
                            <h1>{service.title}</h1>
                            <ul dangerouslySetInnerHTML={{ __html: service.description.map(item => `<li>${item}</li>`).join('') }}></ul>
                            <p>{service.duration}</p>
                            <p>{service.price}</p>
                     
                        </div>
                        
            </div>
          
        </>
    );
}
