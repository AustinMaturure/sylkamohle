import React, { useState } from 'react';
import raybanLogo from '../assets/rayban.svg';
import bossLogo from '../assets/Boss.svg';
import oakleyLogo from '../assets/Oakley.svg';
import michaelkorsLogo from '../assets/Michael Kors.svg';
import polaroidLogo from '../assets/Polaroid.svg';
import tomFordLogo from '../assets/Tom Ford.svg';
import eye from '../assets/eye-2.jpg';
import eyeSun from '../assets/eye-sunglasses.jpg';
import './Hero.css';

const logos = [raybanLogo, bossLogo, oakleyLogo, michaelkorsLogo, polaroidLogo, tomFordLogo];

const SpectacleCarousel = () => {
  const [eyeImage, setEyeImage] = useState(eye);

  const handleClick = () => {
    setEyeImage(eyeImage === eye ? eyeSun : eye);

    
  };

  return (
    <>
      
      <h1 className='pers-header'>Need A Prescription?</h1>
      <h3 className='pers-desc'>No matter the Budget, Choose from a range of Popular Brands </h3>
      <div className="pres-sun">
        <h1 className='pers-header' id='pers-head-sun'>Need Sunglasses?</h1>
        <h3 className='pers-desc' id='pers-desc-sun'>Turn Any Prescription frame into Sunglasses... no seriously    <button className='try-it-btn' onClick={handleClick}>TRY IT</button></h3>
      </div>

      <div className='blocker' style={{ backgroundImage: `url(${eyeImage})` }}></div>

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
        <h1 className='pers-header' id='pers-head-disc'>Need A Discount?</h1>
        <h3 className='pers-desc' id='pers-desc-disc'>Are you a Pensioner? Grab a eye test for only R400, and reading glasses from as low as R1000
       </h3>
      </div>
    </>
  );
};

export default SpectacleCarousel;
