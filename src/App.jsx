import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="fade-effect"></div>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Services></Services>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
