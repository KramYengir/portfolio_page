import "./Contact.css";
import { CiMail } from "react-icons/ci";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// NECESSARY INFO FOR EMAILJS
const SERVICE_ID = "service_bwawi82";
const TEMPLATE_ID = "template_6r1d2zd";
const PUBLIC_KEY = "EUXrEzHA-xr7yeg-1";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <p className="sub-heading">Get In Touch</p>
      <h2 className="heading">Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <CiMail className="icon" />
            <h3>Email</h3>
            <p>info@rigneymade.com</p>
            {/* <button className="btn btn-primary">Send Email</button> */}
          </article>
          {/* <article className="contact__option">
            <FaWhatsapp className="icon" />
            <h3>WhatsApp</h3>
            <button>Open</button>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name..."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Your message..."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
