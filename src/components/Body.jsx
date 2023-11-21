import React from "react";
import hero from "../assets/homepage_hero_01.jpg";
import "./Body.css";
import grid1 from "../assets/hos/img1.jpeg";
import grid2 from "../assets/hos/img2.jpeg";
import grid3 from "../assets/hos/img3.jpeg";
import Image from "react-bootstrap/Image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";

const Body = () => {
  const vaccinationData = [
    {
      id: 1,
      image: grid1,
      title: "Contents for Child Health & Well Being",
      des: "Welcome to the Child Health and Well-being page at Child Care Clinic. We understand that your child's health is your top priority, and it's ours too. On this page, we're dedicated to providing you with valuable insights and resources to ensure your child's health, growth, and development",
      link: "/child",
    },
    {
      id: 2,
      image: grid2,
      title: "Contents for Sleeping and Settling",
      des: "At Child Care Clinic, we understand the importance of peaceful nights for both parents and children. On our Sleeping and Settling page, we offer you valuable insights, tips, and guidance on creating a bedtime routine that ensures restful nights for your little one.",
      link: "/sleeping",
    },
    {
      id: 3,
      image: grid3,
      title: "Parent Help Line",
      des: "At Childcare Clinic, we understand that parenting can be both rewarding and challenging. That's why we've established a dedicated Parent Helpline to provide you with the support, guidance, and information you need to navigate the journey of parenthood confidently.",
      link: "/helpline",
    },
  ];

  return (
    <>
      <div className="hero">
        <Image src={hero} fluid />
      </div>
      <div>
        <div className="new">
          <Link to="/vaccination">Vaccination</Link>
        </div>
        <div id="vaccination__fields">
          {vaccinationData.map((field, id) => (
            <Field
              key={field.id}
              id={field.id}
              image={field.image}
              title={field.title}
              des={field.des}
              link={field.link}
            />
          ))}
        </div>
      </div>
      <Testimonials />
    </>
  );
};

const Field = ({ id, image, title, des, link }) => (
  <div key={id} className="field">
    <Image className="patients" src={image} />
    <Link to={link}>
      <div className="pad">
        <div className="field__data">
          <h4>{title}</h4>
          <p>{des}</p>
        </div>
        <ArrowForwardIcon />
      </div>
    </Link>
  </div>
);

export default Body;
