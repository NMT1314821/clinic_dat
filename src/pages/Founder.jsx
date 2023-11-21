import React from "react";
import "./AllPages.css";
import doctor from "../assets/hos/doctor.jpeg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Founder = () => {
  return (
    <>
      <Header />
      <div className="about__box">
        <div className="about__layout">
          <div className="about__content">
            <h2>Founder - Dr. Shrilekha</h2>
            <p>
              Meet Dr. Shrilekha - Expert Pediatrician Dedicated to Children's
              Health & Your Trusted Partner in Pediatric Healthcare
            </p>
            <div>
              <h3>
                Her Publications in National and International Indexed Journals:
              </h3>
              <p>
                Catastrophic Antiphospholipid Antibody Syndrome" - Dr. Shrilekha
                made a groundbreaking contribution to the field, authoring this
                publication in July 2005. It was featured in Volume 20, Issue 7,
                pp 998–999 in Pediatric Nephrology, delving into a crucial
                aspect of pediatric health.
              </p>
              <p>
                Snakebite-Induced Acute Renal Failure: A Case Report and Review
                of the Literature" - Dr. Shrilekha's commitment to advancing
                medical knowledge is evident in this publication from September
                2004. It was featured in Volume 19, Issue 9, pp 1053–1054 in
                Pediatric Nephrology, highlighting her contribution to
                understanding rare pediatric conditions.
              </p>
              <p>
                Pediatric Renal Transplantation: The Bangalore Experience" - Dr.
                Shrilekha's passion for pediatric healthcare finds expression in
                this publication, featured in Indian Pediatrics 2006; 43:44-48.
                The work provides invaluable insights into pediatric renal
                transplantation, shedding light on critical procedures.
              </p>
              <p>
                Cyclosporine in Steroid Dependent and Resistant Childhood
                Nephrotic Syndrome" - In Indian Pediatrics 2006; 43:14-19, Dr.
                Shrilekha explores innovative therapeutic approaches for
                children with steroid-dependent and resistant nephrotic
                syndrome, emphasizing her commitment to improving treatment
                outcomes.
              </p>
              <p>
                Dr. Shrilekha didn't confine her expertise to the confines of
                medical journals but also took the stage as a presenter. In
                November 2004, she presented a paper at the First National
                Pediatric Rheumatology Conference in Mumbai. The topic,
                "Antiphospholipid Antibody Syndrome," remains a cornerstone in
                the field of pediatric rheumatology.
              </p>
              <p>
                Dr. Shrilekha actively participated in local Continuing Medical
                Education (CME) events, contributing to the knowledge exchange.
                These presentations at various local CMEs held at
              </p>
            </div>
          </div>
          <div className="about__right">
            <img src={doctor} alt="doctor" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Founder;
