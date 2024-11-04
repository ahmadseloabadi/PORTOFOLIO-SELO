import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectCards from "../components/ProjectCards";
import Resume from "../components/Resume";

import SkillDiagram from "../components/SkillDiagram";

export default function Index() {
  return (
    <div className="grid min-h-screen min-w-screen overflow-hidden ">
      <Navbar />
      <Hero />
      <ProjectCards />
      <SkillDiagram />
      <Resume />
    </div>
  );
}
