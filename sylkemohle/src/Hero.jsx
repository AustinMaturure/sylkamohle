
import './Hero.css'

import skyImage from '../assets/sky3.webp';

import pexelsImage from '../assets/pexels-phot.webp';
import contactImage from '../assets/pexels-photo-5715892.webp';

import SpectacleCarousel from './SpectacleCarousel';

import React from 'react';
import useElementInView from './ElementInView';

function Hero() {
  
  const textBubbleRef = useElementInView('.text-bubble');
  const serviceCardRef = useElementInView('.service-card');
  const contactRef = useElementInView('.contact-text');
  const contactImageRef = useElementInView('.contact-image');
  const HeaderRef = useElementInView('.wwo-header');
  const HeaderARef = useElementInView('.wwo-about');

 

  

  return (
    <>
      <section className="hero" style={{backgroundImage:  `url(${skyImage})`}} loading="lazy">
        
      <h1 className='tag-line'>YOUR VISION, OUR EXPERTISE</h1>
      <p className='tag'>So you can see more of what's important in life.</p>
      
        
      </section>
      <section className="offer">
     
         <div className="offer-content" id='services'>
         <h1 className='wwo-header' ref={HeaderRef} >OUR SERVICES</h1>
<div className="grid-1" ref={serviceCardRef}>
  <div className='service-card' id='card-1' >
    <h2 className='service-title'>Comprehensive Eye Exams</h2>
    <p className='service-price'>R499.00</p>
    <p className='service-description'>
      Assessing visual acuity (clarity of vision).
      Checking for refractive errors (nearsightedness, farsightedness, astigmatism).
      Determining eye health and overall well-being.
    </p>
  </div>

  <div className='service-card' id='card-2'>
    <h2 className='service-title'>Prescription Eyeglasses</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Conducting eye exams to prescribe corrective lenses.
      Assisting in selecting eyeglass frames and fitting contact lenses.
    </p>
  </div>

  <div className='service-card' id='card-3'>
    <h2 className='service-title'>Vision Therapy</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Providing exercises and activities to improve visual skills.
      Addressing issues such as eye coordination and focusing problems.
    </p>
  </div>
</div>

<div className="grid-2">
  <div className='service-card' id='card-4'>
    <h2 className='service-title'>Prescription Eyeglasses</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Conducting eye exams to prescribe corrective lenses.
      Assisting in selecting eyeglass frames and fitting contact lenses.
    </p>
  </div>

  <div className='service-card' id='card-5'>
    <h2 className='service-title'>Spectacle Frames</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
        With our wide range of well-known brands we ensure you not only see great
        but look great to others
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
          <h1 className='about-qa-head text-bubble left-triangle' >
    Why do we love helping you see the things you love?
  </h1>
  <h3 className='about-qa-rep text-bubble right-triangle' ref={textBubbleRef}>
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
          <h3 className='book-contact' href="sylka@interkom.co.za">Book</h3>
          </div>
        
        </address>
       </div>
        
        <div className="contact-image-cnt">
          <img className='contact-image' src={contactImage} alt="" srcset="" loading='lazy' />

        </div>
      

      </section>
      <section className='footer'>
        <div ><h1 className='logo'>
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
        <adress className="foot-contact">
          <h3 className='call-whatsapp'> (+27) 82 775 1649</h3>
        <h3 className='foot-call-contact'>(+27) 17 826 3435</h3>
        <h3>
3 Alfa Bldg, 11a Retief St Piet Retief 2380</h3>

        </adress>
      </section>
      </section>
     
    </>
  )
}

export default Hero
