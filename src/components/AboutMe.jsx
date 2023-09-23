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
          <h2>Technical Exploration</h2>
          <p>
            My desire to learn extended beyond the classroom. While at the
            University of Central Florida, I continued to develop my technical
            skills. I explored programming languages such as C# and JavaScript,
            gaining the ability to turn concepts into digital creations.
            Additionally, I took a database course that enhanced my grasp of
            data management—a crucial skill in today's digital world.
          </p>
          <h2>Entrepreneurship</h2>
          <p>
            After finishing my academic journey, I took a leap into the world of
            entrepreneurship. I started my own e-commerce business, which was a
            challenging and transformative experience. Handling every aspect of
            the business, from sourcing products to customer service, taught me
            valuable lessons in resilience, creative problem-solving, and the
            significance of customer satisfaction. Through effective online
            advertising methods like Facebook and TikTok ads, I successfully
            scaled my business to achieve substantial revenue in the multiple
            six figures.
          </p>
          <h2>Looking Ahead</h2>
          <p>
            As I find myself at this point in my journey, I'm excited about what
            lies ahead. My experiences have sparked a keen interest in Web
            Development, especially as a React Front End Developer. I've taught
            myself how to code in HTML, CSS, and JavaScript, and I'm continually
            working to improve my JavaScript skills. I understand the immense
            value of this skill and am dedicated to mastering it. Even after I
            get hired, my commitment to learning won't stop. I'll continue to
            strive for excellence, exploring new technologies to become even
            more valuable in the field.
          </p>
          <img id="me" src={ME} alt="Me" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
