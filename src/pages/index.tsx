import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/banner/Hero";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";
import Resume from "../components/resume/Resume";

import SkillDiagram from "../components/skill/SkillDiagram";

export default function Index() {
  return (
    <div className="grid min-h-screen min-w-screen overflow-hidden ">
      <Navbar />
      <Hero />
      <Projects />
      <SkillDiagram />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
