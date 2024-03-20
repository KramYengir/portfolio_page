import "./Contact.css";
import { CiMail } from "react-icons/ci";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// NECESSARY INFO FOR EMAILJS
const SERVICE_ID = "service_jhyagac";
const TEMPLATE_ID = "template_6r1d2zd";
const PUBLIC_KEY = "EUXrEzHA-xr7yeg-1";

const Contact = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.checkValidity()) {
      console.log("Form: ", form.current.checkValidity());
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
          setHasSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset();
    }
  };

  return (
    <section id="contact">
      <p className="sub-heading">Get In Touch</p>
      <h2 className="heading">Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <CiMail className="icon" aria-hidden={true} />
            <h3>Email</h3>
            <p>info@rigneymade.com</p>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name..."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email..."
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
      {/* Message Success Confirmation */}
      {hasSubmitted && (
        <div className="success-msg-container">
          <div className="success-msg">
            <p>Thank You!</p>
            <p>I will get back to you shortly.</p>
            <button
              className="btn btn-primary"
              onClick={() => setHasSubmitted(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
