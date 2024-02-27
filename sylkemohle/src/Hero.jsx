
import './Hero.css'

import skyImage from '../assets/sky4.webp';

import pexelsImage from '../assets/pexels-phot.webp';
import contactImage from '../assets/pexels-photo-5715892.webp';

import SpectacleCarousel from './SpectacleCarousel';

import React, { useState } from 'react';
import useElementInView from './ElementInView';

  import contactImage from '../assets/pexels-photo-5715892.webp';

import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faClipboard, faClipboardCheck, faCopy } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  
  const textBubbleRef = useElementInView('.text-bubble');
  const serviceCardRef = useElementInView('.service-card');
  const contactRef = useElementInView('.contact-text');
  const contactImageRef = useElementInView('.contact-image');
  const HeaderRef = useElementInView('.wwo-header');
  const HeaderARef = useElementInView('.wwo-about');
  const isMobile = window.innerWidth <= 768;
 
 

  const phoneNumber = '+27178260308';
  const [clicked, setClicked] = useState(false)
  const copyToClipboard = () => {
    setClicked(true)
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        console.log('Phone number copied to clipboard');
      })
      .catch((err) => {
        console.error('Unable to copy to clipboard', err);
      });
    }
  

  return (
    <>
      <Navbar></Navbar>
      
      

      <section className="hero" style={{backgroundImage:  `url(${skyImage})`}} >

      <div className="hero-title"> <h1 className='tag-line'>YOUR VISION, OUR EXPERTISE</h1>
      <p className='tag'>So you can see more of what's important in life.</p>
        </div>  
      </section>
      <section className="offer">
     
         <div className="offer-content" id='services'>
         <h1 className='wwo-header' ref={HeaderRef} >OUR SERVICES</h1>
<div className="grid-1" ref={serviceCardRef}>
<Link to={`/services/comprehensive-oct-eye-exams`}className='service-link'>
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
    <h2 className='service-title'  style={{marginBottom:'0px' }}>Contact Lenses</h2>
    <div style={{display:'flex', alignItems:'center', gap:'10px', padding:'0px'}}className='price-container'>
        <p  >from</p>
        <p className='service-price' >R450.00</p>
    </div>
    <p className='service-description'  style={{marginTop:'0px' }}>
      Looking for a more discreet look? We provide contact lenses in 
      a variety of colors, so you can look good at every occasion, without 
      sacrificing your vision.
    </p>
  </div>
 
  <div className='service-card' id='card-3'>
    <h2 className='service-title'>Dilated Eye Exam</h2>
    <p className='service-price'>R200.00</p>
    <p className='service-description'>
      Providing Dilated eye exams as well as Cataract Screening .
      Addressing issues such as eye coordination and focusing problems.
    </p>
  </div>

</div>

<div className="grid-2"><Link to={`/services/prescription-eyeglasses`}className='service-link'>
  <div className='service-card' id='card-4'>
    <h2 className='service-title' style={{marginBottom:'0px' }}>Prescription Eyeglasses</h2>
    <div style={{display:'flex', alignItems:'center', gap:'10px', padding:'0px'}}className='price-container'>
        <p >from</p>
        <p className='service-price' >R1 300.00</p>
    </div>
    <p className='service-description' style={{marginTop:'0px' }}>
      Conducting eye exams to prescribe corrective lenses.
      Assisting in selecting eyeglass frames and fitting contact lenses.
      With our wide range of well-known brands we ensure you not only see great,
        but look great too.
    </p>
     <div className="arrow-cnt">
   <div><p className='rd-mre'>read more</p>
    </div><FontAwesomeIcon icon ={faArrowAltCircleRight}className='btn-arrow-up'></FontAwesomeIcon> </div>
  </div>
  </Link>
 
  <div className='service-card' id='card-5'>
    <h2 className='service-title' style={{marginBottom:'0px' }}>Perscription Sunglasses</h2>
    <div style={{display:'flex', alignItems:'center', gap:'10px', padding:'0px'}}className='price-container'>
        <p >from</p>
        <p className='service-price' >R1 300.00</p>
    </div>
    <p className='service-description'style={{marginTop:'0px' }}>
        Choose from a variety of polarized/sunglass brands, or turn 
        Your own frame into sunglasses, combining the best of style, comfort and 
        protection.
    </p>
  </div>
 

  <div className='service-card' id='card-6'>
    <h2 className='service-title'>Driver's Test</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Providing necessary eye test results needed for both 
      writing the Learners Liscence test and Drivers test.
    </p>
  </div>
</div>


</div>

 <section className='about-section' id='about-us'>
        <h1 className='wwo-about' id='wwo-about' ref={HeaderARef}>ABOUT US</h1>
        <div className='about-div'>
          <div className="about-image"style={{height: "30rem", width: "33rem"}}>
            <img src={pexelsImage} loading="lazy" style={{ maxHeight:"100%",maxWidth:"100%"}}/>
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
  With 31 years of experience, our highly qualified optometrists bring expertise to every examination. We utilize advanced technology, ensuring accurate diagnoses and tailored solutions for your eye health
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
              <h3 className='call-contact' href="tel:+27178263435">(+27) 17 826 0308</h3>
          <h3 className='book-contact' onClick={copyToClipboard} style={{ cursor: 'pointer'}}>CALL TO BOOK <FontAwesomeIcon icon ={clicked ?  faClipboardCheck:faClipboard}className='btn-copy' style={{ marginLeft:'8px',transition:'all 1s', color:'rgb(255, 255, 255)' }}></FontAwesomeIcon> </h3>
          </div>
        
        </address>
       </div>
        
        <div className="contact-image-cnt">
          <img className='contact-image' style={{maxWidth: "100%"}} src={contactImage} alt="optometrist piet retief holding glasses" loading='lazy' />

        </div>
      

      </section>
     
      </section>
     
    </>
  )
}

export default Hero
