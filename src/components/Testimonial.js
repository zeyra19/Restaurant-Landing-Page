import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Our customers love our service! Here's what they have to say about their experience with us.
        From fresh ingredients to convenient deliveries, we're proud to help them enjoy healthy,
        delicious meals with ease.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "The meals are absolutely amazing! The ingredients are always fresh, and the recipes are so easy to follow.
         It’s a real time-saver, and I love that I can enjoy delicious, healthy meals without the hassle. Highly recommend!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Ogi Nurimento</h2>
      </div>
    </div>
  );
};

export default Testimonial;