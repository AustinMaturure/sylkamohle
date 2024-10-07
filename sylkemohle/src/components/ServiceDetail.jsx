import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../css/servicedetail.css";
import "../css/hero.css";
import spec from "../../assets/eye-glasses.webp";
import oct from "../../assets/oct.webp";
import serviceData from "./servicesData.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

export default function ServiceDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { serviceSlug } = useParams();

  const service = serviceData.services.find(
    (service) => service.slug == serviceSlug
  );

  if (!service) {
    return <div>Service not found</div>;
  }
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {" "}
      <title>Optometrist Perscription Glasses and OCT exams Piet Retief</title>
      <div>
        <div style={{ backgroundColor: "#388ad2" }}>
          {" "}
          {isMobile && (
            <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
              {isMobile && (
                <button className="menu-toggle" onClick={toggleMenu}>
                  {isOpen ? (
                    <img src={close} style={{ fill: "red" }} alt="Close Menu" />
                  ) : (
                    <img src={menu} alt="Open Menu" />
                  )}
                </button>
              )}
              <ul className="mobile-links">
                <li>
                  <a href="#services" onClick={toggleMenu}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about-us" onClick={toggleMenu}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact-us" onClick={toggleMenu}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          )}
          <nav className="navbar" id="prescrip-nav">
            <Link to="/">
              <h2 className="logo-header">
                SYLKA MöHLE <p className="opt-p"> optometrist</p>
              </h2>
            </Link>
          </nav>
        </div>
      </div>{" "}
      {console.log(serviceData.services)}
      <div className="service-detail-cnt">
        <div className="service-illustration">
          <img
            src={serviceSlug == "prescription-eyeglasses" ? spec : oct}
            alt="perscription-eyeglasses-piet-retief"
            style={{ maxWidth: "100%" }}
            className="serv-pic"
            loading="lazy"
          />
        </div>
        <div className="service-descrption" key={service.id}>
          <h1 className="service-detail-title">{service.title}</h1>
          <ul
            dangerouslySetInnerHTML={{
              __html: service.description
                .map((item) => `<li>${item}</li>`)
                .join(""),
            }}
          ></ul>
          <p>
            {" "}
            <FontAwesomeIcon icon={faClock} className="clock-icon" />
            {service.duration}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faMoneyBill} className="clock-icon" />
            {service.price}
          </p>
        </div>
      </div>
    </>
  );
}
