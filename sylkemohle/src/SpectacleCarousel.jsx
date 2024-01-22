import React, { useState } from 'react';
import raybanLogo from '../assets/rayban.svg';
import bossLogo from '../assets/Boss.svg';
import oakleyLogo from '../assets/Oakley.svg';
import michaelkorsLogo from '../assets/Michael Kors.svg';
import polaroidLogo from '../assets/Polaroid.svg';
import tomFordLogo from '../assets/Tom Ford.svg';
import guessLogo from '../assets/Guess_logo.svg';
import pumaLogo from '../assets/puma.svg';
import eyeSun from '../assets/fraser-sun.jpg'
import eye from '../assets/pexels-fraser-3048507.jpg'

import './Hero.css';
import useElementInView from './ElementInView';


const logos = [raybanLogo, bossLogo, oakleyLogo, michaelkorsLogo, polaroidLogo, tomFordLogo,,guessLogo, pumaLogo ];

const SpectacleCarousel = () => {
  const [eyeImage, setEyeImage] = useState(eye);
  

  const handleClick = () => {
    setEyeImage(eyeImage === eye ? eyeSun : eye);
    const log=document.querySelectorAll('.Logo-img')
    log.forEach((image, index) => {
       image.style.filter= 'brightness(0) invert(1)' 
      });

    
  };

  const persHRef = useElementInView('.pers-header');
  const persDRef = useElementInView('.pers-desc');
  const presHRef = useElementInView('#pers-head-disc');
  const presDRef = useElementInView('#pers-desc-disc')

  return (
    <section className="spectacle-section"style={{ backgroundImage: `url(${eyeImage})` }}>
    <>
      
      <h1 className='pers-header' ref={persHRef}>Need A Prescription?</h1>
      <h3 className='pers-desc' ref={persDRef}>No matter the Budget, Choose from a range of Popular Brands </h3>
      <div className="pres-sun">
        <h1 className='pers-header' id='pers-head-sun'>Need Sunglasses?</h1>
        <h3 className='pers-desc' id='pers-desc-sun'>Turn Any Prescription frame into Sunglasses... no seriously    <button className='try-it-btn' onClick={handleClick}>TRY IT</button></h3>
      </div>

      

      <div className="carousel-container">
        <div className='carousel-inner'>
          {logos.map((logo, index) => (
            <img key={index} src={logo} className={`Logo-img ${index + 1}`} alt={`Logo-img ${index + 1}`} />
          ))}
        </div>
        <div className='carousel-inner'>
          {logos.map((logo, index) => (
            <img key={index} src={logo} className={`Logo-img ${index + 1}`} alt={`Logo-img ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className="pres-disc">
        <h1 className='pers-header' id='pers-head-disc' ref={presHRef}>Need A Discount? </h1>
        <h3 className='pers-desc' id='pers-desc-disc' ref={presDRef}>Are you a Pensioner? Grab a eye test for only R400, and reading glasses from as low as R1000
       </h3>
      </div>
    </>
    </section>
  );
};

export default SpectacleCarousel;
