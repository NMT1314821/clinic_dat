import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blue } from "@mui/material/colors";

const Location = () => {
  return (
    <>
      <Header />
      <div className="location__box">
        <div className="location__left">
          <div className="location__content">
            <h2>Visit Us at Our Convenient Location in Bengaluru</h2>
            <p>
              At Child Care Clinic, we understand the importance of
              accessibility for our patients and their families. Our clinic is
              conveniently located in the serene neighborhood of Banashankari,
              Bengaluru, ensuring easy access from various areas.
            </p>
            <h2>Address: </h2>
            <p>
              Child Care Clinic 1234, 2nd Main Rd, 2nd Phase, Kalidasa Nagar,
              Dattatreya Nagar, Banashankari, Bengaluru, Karnataka 560085, India
            </p>
            <h2>Conveniently Reachable By:</h2>
            <p>
              Our clinic is situated just off Outer ring road of Hoskerehalli
              Corss , ensuring a smooth and direct route for those traveling by
              car. Public Transport: For those using public transportation, we
              are well-connected with Bus routes from Banashankari to
              Nayandahalli nearby, ensuring ease of commute.
            </p>
            <p>
              To make your visit even more convenient, you can use our Google
              Maps link to get step-by-step directions and real-time traffic
              updates. Click on the link, and it will lead you directly to our
              clinic location in the heart of Banashankari, Bengaluru.
            </p>
            <p>
              We look forward to welcoming you to Child Care Clinic, where your
              child's health and well-being are our top priorities. If you have
              any questions or need further assistance with directions, feel
              free to call us at 09448905454 . Your child's health journey
              begins here.
            </p>
            <a
              style={{
                color: "#ffff",
                fontSize: "15px",
                padding: "10px 20px",
                backgroundColor: "blue",
                borderRadius: "10px",
              }}
              target="_blank"
              href="https://maps.app.goo.gl/GwNToKn1kWGjECPj7"
            >
              Location link
            </a>
          </div>
        </div>
        <div className="location__right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.644045990009!2d77.5405327!3d12.9305845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f1847a84687%3A0x25fcf79ebc19f86a!2sChild%20Care%20Clinic!5e0!3m2!1sen!2sin!4v1699423067981!5m2!1sen!2sin"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Location;
