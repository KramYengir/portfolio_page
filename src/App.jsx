import "./App.css";
import Header from "./components/Header/header";
import Experience from "./components/Experience/experience";
import Services from "./components/Services/services";
import Portfolio from "./components/Portfolio/portfolio";
import Testimonials from "./components/Testimonials/testimonials";
import Nav from "./components/Nav/nav";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Services></Services>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
