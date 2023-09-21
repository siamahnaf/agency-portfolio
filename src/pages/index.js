//Seo
import Heads from "Utilis/Heads";

// Sections
import Header from "Section/Header";
import Hero from "Section/Hero";
import About from "Section/About";
import Portfolio from "Section/Portfolio";
import Skill from "Section/Skill";
import Client from "Section/Client";
import Blog from "Section/Blog";
import Contact from "Section/Contact";
import Footer from "Section/Footer";

const index = () => {
  return (
    <>
      <Heads />
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skill />
      <Client />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};
export default index;