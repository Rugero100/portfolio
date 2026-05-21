import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Education from "../components/Education";
import Contact from "../components/Contact";

// Main page composing all portfolio sections
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <Contact />
    </main>
  );
}
