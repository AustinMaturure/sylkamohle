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
import PageSEO from "./PageSEO";

export default function ServiceDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { serviceSlug } = useParams();

  const service = serviceData.services.find(
    (service) => service.slug == serviceSlug
  );

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

  if (!service) {
    return (
      <>
        <PageSEO
          title="Service Not Found | Sylka Möhle Optometrist"
          description="The requested eye care service could not be found. Browse our optometry services in Piet Retief."
          path={`/services/${serviceSlug}`}
        />
        <div>Service not found</div>
      </>
    );
  }

  const imageAlt =
    serviceSlug === "prescription-eyeglasses"
      ? "Prescription eyeglasses and frames at Sylka Möhle Optometrist Piet Retief"
      : "Comprehensive OCT eye exam at Sylka Möhle Optometrist Piet Retief";

  return (
    <>
      <PageSEO
        title={service.seoTitle || `${service.title} | Sylka Möhle Optometrist`}
        description={service.seoDescription || service.description.join(" ")}
        path={`/services/${service.slug}`}
        service={service}
      />
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
                  <Link to="/#services" onClick={toggleMenu}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/#about-us" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/#contact-us" onClick={toggleMenu}>
                    Contact Us
                  </Link>
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
      <div className="service-detail-cnt">
        <div className="service-illustration">
          <img
            src={serviceSlug == "prescription-eyeglasses" ? spec : oct}
            alt={imageAlt}
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
