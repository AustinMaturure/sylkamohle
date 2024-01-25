
import './Hero.css'

import skyImage from '../assets/sky4.webp';

import pexelsImage from '../assets/pexels-phot.webp';
import contactImage from '../assets/pexels-photo-5715892.webp';

import SpectacleCarousel from './SpectacleCarousel';

import React from 'react';
import useElementInView from './ElementInView';

import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import servicesData from './servicesData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  
  const textBubbleRef = useElementInView('.text-bubble');
  const serviceCardRef = useElementInView('.service-card');
  const contactRef = useElementInView('.contact-text');
  const contactImageRef = useElementInView('.contact-image');
  const HeaderRef = useElementInView('.wwo-header');
  const HeaderARef = useElementInView('.wwo-about');

 

  

  return (
    <>
      <Navbar></Navbar>
      <section className="hero" style={{backgroundImage:  `url(${skyImage})`}} >
        
      <h1 className='tag-line'>YOUR VISION, OUR EXPERTISE</h1>
      <p className='tag'>So you can see more of what's important in life.</p>
      
        
      </section>
      <section className="offer">
     
         <div className="offer-content" id='services'>
         <h1 className='wwo-header' ref={HeaderRef} >OUR SERVICES</h1>
<div className="grid-1" ref={serviceCardRef}>
<Link to={`/services/1`}className='service-link'>
  <div className='service-card' id='card-1' >
    <h2 className='service-title'>Comprehensive OCT Exams</h2>
    <p className='service-price'>R599.00</p>
    <p className='service-description'>
      Assessing visual acuity (clarity of vision).
      Checking for refractive errors (nearsightedness, farsightedness, astigmatism).
      Determining eye health and overall well-being.
    </p>
   <div className="arrow-cnt">
   <div><p className='rd-mre'>read more</p>
    </div><FontAwesomeIcon icon ={faArrowAltCircleRight}className='btn-arrow-up'></FontAwesomeIcon> </div>
  </div>
  </Link>

  <div className='service-card' id='card-2'>
    <h2 className='service-title'>Contact Lenses</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Looking for a more discreet look? We provide contact lenses in 
      a variety of colors , so you can look good with every outfit with 
      sacrificing your vision.
    </p>
  </div>
 
  <div className='service-card' id='card-3'>
    <h2 className='service-title'>Dilated Eye Exam</h2>
    <p className='service-price'>R200.00</p>
    <p className='service-description'>
      Providing Cataract Screening as well as dialted eye exams.
      Addressing issues such as eye coordination and focusing problems.
    </p>
  </div>

</div>

<div className="grid-2"><Link to={`/services/4`}className='service-link'>
  <div className='service-card' id='card-4'>
    <h2 className='service-title'>Prescription Eyeglasses</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Conducting eye exams to prescribe corrective lenses.
      Assisting in selecting eyeglass frames and fitting contact lenses.
      With our wide range of well-known brands we ensure you not only see great
        but look great too
    </p>
     <div className="arrow-cnt">
   <div><p className='rd-mre'>read more</p>
    </div><FontAwesomeIcon icon ={faArrowAltCircleRight}className='btn-arrow-up'></FontAwesomeIcon> </div>
  </div>
  </Link>
 
  <div className='service-card' id='card-5'>
    <h2 className='service-title'>Perscription Sunglasses</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
        Choose from a variety of polarized/sunglass brands , or turn 
        Your own frame into sunglasses, combining the best of style, comfort and 
        protection
    </p>
  </div>
 

  <div className='service-card' id='card-6'>
    <h2 className='service-title'>Driver's Test</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Providing exercises and activities to improve visual skills.
      Addressing issues such as eye coordination and focusing problems.
    </p>
  </div>
</div>


</div>

 <section className='about-section' id='about-us'>
        <h1 className='wwo-about' id='wwo-about' ref={HeaderARef}>ABOUT US</h1>
        <div className='about-div'>
          <div className="about-image">
            <img src={pexelsImage} alt="" srcset="" loading="lazy"/>
          </div>
          <div className="about-text" >
          <h1 className='about-qa-head text-bubble left-triangle' ref={textBubbleRef}>
    Why do we love helping you see the things you love?
  </h1>
  <h3 className='about-qa-rep text-bubble right-triangle' >
    Our passion lies in enhancing your vision for a brighter, more enjoyable life. We take pride in helping you see the things you love, ensuring your journey is clear, comfortable, and plain for you to see
  </h3>
  <h1 className='about-qa-head text-bubble left-triangle'>
    Why choose us?
  </h1>
  <h3 className='about-qa-rep text-bubble right-triangle'>
  With years of experience, our highly qualified optometrists bring expertise to every examination. We utilize advanced technology, ensuring accurate diagnoses and tailored solutions for your eye health
  </h3>
  <h1 className='about-qa-head text-bubble left-triangle'>
    What will you see the moment you check-in?
  </h1>
  <h3 className='about-qa-rep text-bubble right-triangle'>
  Expect a warm and inviting atmosphere, with our friendly staff you'll experience a seamless process from check-in to your eye examination, with a focus on your comfort and well-being
  </h3>
          </div>
          

        </div>
      </section>

<SpectacleCarousel></SpectacleCarousel>

      <section className='contact-us' id='contact-us' ref={contactImageRef} >
       <div className="contact-text" ref={contactRef}>
        <address >
          <h1 className='cta-contact'>Make a Appointment with an Expert</h1>
          <div className="c-info">
              <h3 className='call-contact' href="tel:+27178263435">(+27) 17 826 3435</h3>
          <h3 className='book-contact' href="sylka@interkom.co.za">CALL TO BOOK</h3>
          </div>
        
        </address>
       </div>
        
        <div className="contact-image-cnt">
          <img className='contact-image' src={contactImage} alt="" srcset="" loading='lazy' />

        </div>
      

      </section>
     
      </section>
     
    </>
  )
}

export default Hero
