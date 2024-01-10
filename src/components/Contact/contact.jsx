import "./contact.css";
import { CiMail } from "react-icons/ci";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <CiMail />
            <h4>Email</h4>
            <h5>markrigz@gmail.com</h5>
            <a href="">Send a message</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger />
            <h4>Messenger</h4>
            <h5>markrigz</h5>
            <a href="">Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp />
            <h4>WhatsApp</h4>
            <h5>0123456789</h5>
            <a href="">Send a message</a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your message..."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary"></button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
