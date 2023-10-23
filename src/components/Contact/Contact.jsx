import React, { useRef } from "react";
import "./Contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YTIcon from "../../assets/youtube.png";
import InstaIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2dtnp27",
        "template_590c129",
        form.current,
        "R1ZTNoz2VMG22UQ6P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          viverra in libero eu posuere. Suspendisse fringilla enim id ex
          vestibulum, sit amet sagittis ipsum vestibulum.
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Client" className="clientImg" />
          <img src={Adobe} alt="Client" className="clientImg" />
          <img src={Microsoft} alt="Client" className="clientImg" />
          <img src={Facebook} alt="Client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            name="your_name"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="email"
            name="your_email"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Your message"
            className="msg"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="facebook" className="link" />
            <img src={TwitterIcon} alt="twitter" className="link" />
            <img src={YTIcon} alt="youtube" className="link" />
            <img src={InstaIcon} alt="instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
