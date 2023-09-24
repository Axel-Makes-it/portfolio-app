import React, { useRef } from "react";
import emailjs from "emailjs-com";

import "../styles/ContactMe.css";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_toafqzi",
        "template_sowm2fp",
        form.current,
        "z-f3-hT03hQ0IjIE3"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact__container">
      <div className="contact__left-bar">
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea id="textarea" name="message" />
          <input id="btn" type="submit" value="Send" title="Send" />
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
