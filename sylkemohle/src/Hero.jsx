
import './Hero.css'
import '../assets/sky.png'
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function Hero() {
  
    const [ref, inView] = useInView({
      triggerOnce: true, // Ensures the animation only happens once
      threshold: 0.5,}) // Adjust as needed, 0.5 means half of the element is in the viewport
   
  
    useEffect(() => {
      if (inView) {
        const elements = document.querySelectorAll('.text-bubble');
        elements.forEach((element) => {
          element.style.opacity = 1; // Make the element visible
          element.style.animationPlayState = 'running'; // Start the animation
        });
      }
    }, [inView]);

  return (
    <>
      <section className="hero" style={{backgroundImage: "url(../assets/sky.png"}}>
        
      <h1 className='tag-line'>YOUR VISION, OUR EXPERTISE</h1>
      <p className='tag'>So you can see more of what's important in life.</p>
      <div className='image-mod-cnt'>
        
        <img className="image-mod"src="../assets/model-glass-1.png" alt="" srcset="" />
      </div>
        
      </section>
      <section className="offer">
       
         <div className="offer-content">
         <h1 className='wwo-header'>OUR SERVICES</h1>
<div className="grid-1">
  <div className='service-card' id='card-1'>
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
    <h2 className='service-title'>Vision Therapy</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Providing exercises and activities to improve visual skills.
      Addressing issues such as eye coordination and focusing problems.
    </p>
  </div>

  <div className='service-card' id='card-6'>
    <h2 className='service-title'>Vision Therapy</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Providing exercises and activities to improve visual skills.
      Addressing issues such as eye coordination and focusing problems.
    </p>
  </div>
</div>
</div>
 <section className='About-section'>
        <h1 className='wwo-header right-triangle' id='wwo-about'>ABOUT US</h1>
        <div className='about-div'>
          <div className="about-image">
            <img src="../assets/pexels-phot.webp" alt="" srcset="" />
          </div>
          <div className="about-text" >
          <h1 className='about-qa-head text-bubble left-triangle' ref={ref}>
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
  Expect a warm and inviting atmosphere, with our friendly staff you'll experience a seamless process from check-in to your eye examination, with a focus on your comfort and well-being throughout your visit
  </h3>
          </div>
          

        </div>
      </section>
      </section>
     
    </>
  )
}

export default Hero
