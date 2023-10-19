import React from "react";
import "../styles/AboutMe.css";
import ME from "../images/mePic.jpg";

function AboutMe() {
  return (
    <section className="about__container">
      <div className="about__left-bar">
        <div className="aboutme">
          <h2>About Me</h2>
          <p>
            Hello! My name is Axel Santiago, and I'm excited to share a bit
            about myself with you.
          </p>
          <h2>My Educational Journey</h2>
          <p>
            I started my college journey at Indiana University of Pennsylvania,
            where I spent three years exploring different subjects. In my first
            year, I focused on Computer Science because I was really interested
            in technology and innovation. But as I continued, I found that I was
            also drawn to the connection between business and technology. That's
            why I eventually switched my major to Management Information
            Systems, which allowed me to blend my interests in business and
            technical studies.
          </p>

          <h2>Entrepreneurship</h2>
          <p>
            After finishing my academic journey, I took a leap into the world of
            entrepreneurship. I started my own e-commerce business, which was a
            challenging and transformative experience. Handling every aspect of
            the business, from sourcing products to customer service, taught me
            valuable lessons in resilience, creative problem-solving, and the
            significance of customer satisfaction. Through effective online
            advertising methods like Facebook and google ads, I successfully
            scaled my business to achieve substantial revenue in the multiple
            six figures.
          </p>
          <h2>Looking Ahead</h2>
          <p>
            I'm a web developer, mainly focusing on front-end work. I'm skilled
            in CSS, HTML, JavaScript, React, Redux, Git, and Figma. I've worked
            on more than 50 web applications during my career, putting a strong
            emphasis on making them modular, responsive, and ensuring a great
            user experience. One of my strengths is taking UI/UX designs and
            turning them into functional components, helping to bridge the gap
            between design and development.
          </p>
          <img id="me" src={ME} alt="Me" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
