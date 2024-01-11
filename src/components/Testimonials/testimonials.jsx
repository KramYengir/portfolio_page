import "./testimonials.css";
import IMG1 from "../../assets/me.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css/skyblue";

const testimonialData = [
  {
    id: 1,
    image: IMG1,
    name: "Jim Blonkbly",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cupiditate earum! sit amet consectetur adipisicing elit. Eos, cupiditate earum!",
  },
  {
    id: 2,
    image: IMG1,
    name: "Blim Flamko",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cupiditate earum! sit amet consectetur adipisicing elit. Eos, cupiditate earum!",
  },
  {
    id: 3,
    image: IMG1,
    name: "Eric Shneckle",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cupiditate earum! sit amet consectetur adipisicing elit. Eos, cupiditate earum!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Feedback From Clients</h5>
      <h2>Testimonials</h2>
      <Splide
        aria-label="My Favorite Images"
        className="container testimonial__container"
        options={{
          rewind: false,
          gap: "2rem",
        }}
      >
        {testimonialData.map(({ id, name, image, content }) => {
          return (
            <SplideSlide key={id} className="testimonial">
              <div className="testimonial__img">
                <img src={image} alt="Image of a past Client" />
              </div>
              <h5 className="testimonial__name">{name}</h5>
              <small className="testimonial__content">{content}</small>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Testimonials;
