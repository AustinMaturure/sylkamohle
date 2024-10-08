import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="logo-ctn">
          <h1 className="logo">Sylka Möhle</h1>
          <p className="ocu-optometrist">oogkundige</p>
          <p className="ocu-optometrist">optometrist</p>
        </div>

        <div className="map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.775309671417!2d30.801239173872986!3d-27.005656597090763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeee5a9be8b9cb7%3A0xa277efcd410b0890!2sSykla%20M%C3%B6hle!5e0!3m2!1sen!2sza!4v1728311266452!5m2!1sen!2sza"
            width="400"
            height="200"
            className="map-frame"
            style={{ border: "2px solid #213547", borderRadius: "22px" }}
            allowFullScreen=""
            loading="async"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="foot-contact">
          <h3 className="call-whatsapp">
            <FontAwesomeIcon icon={faPhone} className="clock-icon" /> (+27) 82
            554 2925
          </h3>
          <h3 className="foot-call-contact">
            <FontAwesomeIcon icon={faEnvelope} className="clock-icon" />{" "}
            sylka@intekom.co.za
          </h3>
          <h3>
            <FontAwesomeIcon icon={faLocation} className="clock-icon" /> 3 Alfa
            Building, 11a Retief St Piet Retief
          </h3>
          <div className="opening-times">
            <div>
              <h3>MON - FRI</h3>
              <h4>08:00 - 17:00</h4>
            </div>
            <div>
              <h3>SAT</h3>
              <h4>09:00 - 11:00</h4>
            </div>
            <div>
              <h3>SUN</h3>
              <h4>CLOSED</h4>
            </div>
          </div>
        </div>
      </section>{" "}
      <div className="legal">
        <p className="copy-right">
          &copy; {new Date().getFullYear()} Sylka Möhle Optometrist Piet Retief.
          All rights reserved.
        </p>
        <p className="author">
          Designed and developed by{" "}
          <a
            href="https://austinmaturure.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline #388AD2 1px" }}
          >
            ⚡
          </a>
        </p>
      </div>
    </>
  );
}
