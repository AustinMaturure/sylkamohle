import React, { useState, useEffect } from "react";
import zeissLogo from "../../assets/zeiss.svg";
import bossLogo from "../../assets/Boss.svg";
import oakleyLogo from "../../assets/Oakley.svg";
import oceanLogo from "../../assets/ocean.svg";
import elleLogo from "../../assets/elle.svg";
import guessLogo from "../../assets/Guess_logo.svg";
import poloLogo from "../../assets/polo.svg";
import pumaLogo from "../../assets/puma.svg";
import JeepLogo from "../../assets/Jeep.svg";
import eye from "../../assets/sunglass-bg-img-lg.webp";
import brentoniLogo from "../../assets/brentonr.svg";
import annaLogo from "../../assets/anna-hickmann.svg";
import eyeSun from "../../assets/perscription-bg-img-lg.webp";
import eyeMobile from "../../assets/no-sun-mobile.webp";
import eyeSunMobile from "../../assets/sun-mobile.webp";
import "../css/hero.css";
import useElementInView from "../utils/ElementInView";

const logos = [
  oakleyLogo,
  JeepLogo,
  annaLogo,
  oceanLogo,
  zeissLogo,
  poloLogo,
  brentoniLogo,
  bossLogo,
  guessLogo,
  pumaLogo,
  elleLogo,
];

const SpectacleCarousel = () => {
  const isMobile = window.innerWidth <= 768;

  const [eyeImage, setEyeImage] = useState(isMobile ? eyeMobile : eye);
  const [eyeImageMobile, setEyeImageMobile] = useState(eyeMobile);

  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = isMobile ? eyeSunMobile : eyeSun;

    preloadImage.onload = () => {
      setEyeImage(isMobile ? eyeSunMobile : eyeSun);
    };
  }, [isMobile]);

  const handleClick = () => {
    if (isMobile) {
      setEyeImageMobile((prevImage) =>
        prevImage === eyeMobile ? eyeSunMobile : eyeMobile
      );
    } else {
      setEyeImage((prevImage) => (prevImage === eye ? eyeSun : eye));
    }

    const logos = document.querySelectorAll(".Logo-img");
    logos.forEach((image) => {
      image.style.transition = "all 0.3s";
      image.style.filter = "brightness(0) invert(1)";
    });
  };

  const persHRef = useElementInView(".pers-header");
  const persDRef = useElementInView(".pers-desc");
  const presHRef = useElementInView("#pers-head-disc");
  const presDRef = useElementInView("#pers-desc-disc");

  return (
    <section
      className="spectacle-section"
      style={{
        backgroundImage: `url(${isMobile ? eyeImageMobile : eyeImage})`,
      }}
    >
      <h1 className="pers-header" ref={persHRef}>
        Need A Prescription?
      </h1>
      <h3 className="pers-desc" ref={persDRef}>
        No matter the Budget, Choose from a range of Popular Brands
      </h3>
      <div className="pres-sun">
        <h1 className="pers-header" id="pers-head-sun">
          Need Sunglasses?
        </h1>
        <h3 className="pers-desc" id="pers-desc-sun">
          Turn Any Prescription frame into Sunglasses... no seriously
          <button className="try-it-btn" onClick={handleClick}>
            TRY IT
          </button>
        </h3>
      </div>

      <div className="carousel-container">
        <div className="carousel-inner">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="Logo-img"
              alt={`Eyeware brand ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="Logo-img"
              alt={`Eyeware brand ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="pres-disc">
        <h1 className="pers-header" id="pers-head-disc" ref={presHRef}>
          Need A Discount?
        </h1>
        <h3 className="pers-desc" id="pers-desc-disc" ref={presDRef}>
          Are you a Pensioner? Grab an eye test for only R400, and reading
          glasses from as low as R1000
        </h3>
      </div>
    </section>
  );
};

export default SpectacleCarousel;
