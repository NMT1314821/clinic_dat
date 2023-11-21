import React from "react";
import './Body.css'

const Testimonials = () => {
  const parentReviewsData = [
    {
      id: 1,
      title: "Parent 1",
      des: "Childcare Clinic and Dr. Shrilekha have been an incredible support system for our family. Dr. Shrilekha's expertise and compassionate care have made every visit to the clinic a reassuring experience. Her dedication to our child's health is truly remarkable. The clinic itself is a welcoming place, filled with friendly staff who go the extra mile to ensure our child feels comfortable. The exceptional guidance we've received from Dr. Shrilekha on everything from vaccinations to sleep routines has been invaluable in raising a healthy, happy child. We're immensely grateful for the care and support we've received at Childcare Clinic, and we couldn't recommend them highly enough.",
    },
    {
      id: 2,
      title: "Parent 2",
      des: "Childcare Clinic and Dr. Shrilekha have been our trusted partners in our parenting journey. From the moment we stepped into the clinic, we felt welcomed and cared for. Dr. Shrilekha's knowledge, patience, and the genuine concern she shows for our child's well-being put our minds at ease. Her guidance, whether it's about managing common childhood illnesses or understanding developmental milestones, has been instrumental in helping us raise a healthy child. The clinic's efficient and friendly staff have always made our visits stress-free. Childcare Clinic is more than a healthcare provider; it's a place where we've found not only top-notch medical expertise but also the comfort and support we need as parents.",
    },
    {
      id: 3,
      title: "Parent 3",
      des: "Childcare Clinic and Dr. Shrilekha have been a beacon of hope for our family. Dr. Shrilekha's expertise, warmth, and unwavering commitment to our child's health have been a source of comfort during every visit. She takes the time to listen, answer all our questions, and provide us with the guidance we need to make informed decisions about our child's well-being. The clinic's staff are always welcoming, making our visits enjoyable. Dr. Shrilekha and her team have not only provided exceptional medical care but have also created a safe space where we feel heard and supported as parents. Childcare Clinic is a sanctuary for our family, and we can't express our gratitude enough for the care they've provided over the years.",
    },
    {
      id: 4,
      title: "Parent 4",
      des: "Childcare Clinic and Dr. Shrilekha have been a lifeline for our family. Dr. Shrilekha's deep expertise, kindness, and genuine passion for pediatric care shine through in every interaction. The clinic is not just a place to address our child's health needs; it's a place where we've found reassurance, guidance, and support on our parenting journey. The staff at Childcare Clinic make each visit a positive experience, and they have become like an extended family to us. We have complete trust in the care and advice provided by Dr. Shrilekha and her team. Childcare Clinic is more than a healthcare facility; it's a sanctuary of health and hope for our child, and we can't thank them enough for the excellent care they've consistently delivered.",
    },
  ];

  return (
    <div>
      <div className="new">
        <h2>Testimonials</h2>
      </div>
      <div id="review__fields">
        {parentReviewsData.map((field, id) => (
          <Field
            key={field.id}
            id={field.id}
            title={field.title}
            des={field.des}
          />
        ))}
      </div>
    </div>
  );
};

const Field = ({ id, title, des }) => (
  <div key={id} className="review">
    <div className="pad">
      <div className="field__data">
        <h4>{title}</h4>
        <p>{des}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
