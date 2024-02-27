import React, { useState, useEffect } from 'react';
import eyeMobile from '../assets/no-sun-mobile.webp';
import eyeSunMobile from '../assets/sun-mobile.webp';
import zeissLogo from '../assets/zeiss.svg';
import bossLogo from '../assets/Boss.svg';
import oakleyLogo from '../assets/Oakley.svg';
import oceanLogo from '../assets/ocean.svg';
import elleLogo from '../assets/elle.svg';
import guessLogo from '../assets/Guess_logo.svg';
import poloLogo from '../assets/polo.svg';
import pumaLogo from '../assets/puma.svg';
import JeepLogo from '../assets/Jeep.svg';
import eyeSun from '../assets/sunglass-bg-img-lg.webp';
import brentoniLogo from '../assets/brentonr.svg';
import annaLogo from '../assets/anna-hickmann.svg'
import eye from '../assets/perscription-bg-img-lg.webp';

import './Hero.css';
import useElementInView from './ElementInView';


const logos = [oakleyLogo, JeepLogo, annaLogo, oceanLogo, zeissLogo, poloLogo, brentoniLogo, bossLogo, guessLogo, pumaLogo, elleLogo];

const SpectacleCarousel = () => {
  const [isSunMode, setIsSunMode] = useState(false);
  const [showEyeSunMobile, setShowEyeSunMobile] = useState(false);
  const [showEyeSun, setShowEyeSun] = useState(false);

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const preloadImages = () => {
      const imgSunMobile = new Image();
      imgSunMobile.src = eyeSunMobile;
      imgSunMobile.onload = () => setShowEyeSunMobile(true);

      const imgSun = new Image();
      imgSun.src = eyeSun;
      imgSun.onload = () => setShowEyeSun(true);
    };

    preloadImages();
  }, []);

  const handleClick = () => {
    setIsSunMode(prevMode => !prevMode);
    const logos = document.querySelectorAll('.Logo-img');
    logos.forEach((logo) => {
      logo.classList.toggle('sun-mode');
    });
  };

  return (
    <section className="spectacle-section">
      <div className="bg-images">
        {showEyeSunMobile && isMobile && isSunMode && <img src={eyeSunMobile} alt="Sun Mode Background" />}
        {showEyeSun && !isMobile && isSunMode && <img src={eyeSun} alt="Sun Mode Background" />}
        {!isSunMode && <img src={isMobile ? eyeMobile : eye} alt="Default Background" />}
      </div>
      <h1 className="pers-header" ref={useElementInView('.pers-header')}>
        Need A Prescription?
      </h1>
      <h3 className="pers-desc" ref={useElementInView('.pers-desc')}>
        No matter the Budget, Choose from a range of Popular Brands{' '}
      </h3>
      <div className="pres-sun">
        <h1 className="pers-header" id="pers-head-sun">
          Need Sunglasses?
        </h1>
        <h3 className="pers-desc" id="pers-desc-sun">
          Turn Any Prescription frame into Sunglasses... no seriously{' '}
          <button className="try-it-btn" onClick={handleClick}>
            TRY IT
          </button>
        </h3>
      </div>

      <div className="carousel-container">
        <div className="carousel-inner">
          {logos.map((logo, index) => (
            <img key={index} src={logo} className={`Logo-img ${index + 1}`} alt={`Eyeware brand ${index + 1}`} />
          ))}
        </div>
        <div className="carousel-inner">
          {logos.map((logo, index) => (
            <img key={index} src={logo} className={`Logo-img ${index + 1}`} alt={`Eyeware brand ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className="pres-disc">
        <h1 className="pers-header" id="pers-head-disc" ref={useElementInView('#pers-head-disc')}>
          Need A Discount?{' '}
        </h1>
        <h3 className="pers-desc" id="pers-desc-disc" ref={useElementInView('#pers-desc-disc')}>
          Are you a Pensioner? Grab an eye test for only R400, and reading glasses from as low as R1000
        </h3>
      </div>
    </section>
  );
};

export default SpectacleCarousel;
