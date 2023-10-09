import React from "react";
import Aloe from "../styles/About_image.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${Aloe})` }}></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Our plant catalogue website is an online platform dedicated to
          showcasing a diverse range of plants, often for gardening and
          landscaping purposes. These websites typically provide detailed
          information about many plant varieties, including photos and descriptions.
          Plant catalogue websites are valuable resources for both amateur and
          experienced gardeners, helping them discover new plant varieties and plan
          their gardens.
        </p>
      </div>
    </div>
  );
}

export default About;