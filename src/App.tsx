import About from "./components/About";
import CaseStudyCard from "./components/CaseStudyCard";
import Contact from "./components/Contact";
import ExperienceCard from "./components/ExperienceCard";
import Footer from "./components/Footer";
import GameThinking from "./components/GameThinking";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProofStrip from "./components/ProofStrip";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";
import SectionHeader from "./components/SectionHeader";
import SkillsMatrix from "./components/SkillsMatrix";
import { portfolio } from "./data/portfolio";

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar items={portfolio.navigation} />
      <main>
        <Hero personal={portfolio.personal} />
        <Reveal>
          <ProofStrip items={portfolio.proof} />
        </Reveal>

        <section id="case-studies" className="section-padding bg-cream" aria-labelledby="case-studies-title">
          <div className="container-main">
            <Reveal>
              <SectionHeader
                eyebrow="Featured Case Studies"
                titleId="case-studies-title"
                title="Requirement clarity shown through system-heavy product artifacts."
                description="Each case is framed around the problem, the artifact produced, and how the work clarified expectations for product, business, and technical handoff."
              />
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {portfolio.caseStudies.map((caseStudy, index) => (
                <Reveal key={caseStudy.title} delay={index * 100}>
                  <CaseStudyCard caseStudy={caseStudy} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-padding bg-card" aria-labelledby="projects-title">
          <div className="container-main">
            <Reveal>
              <SectionHeader
                eyebrow="Selected Projects"
                titleId="projects-title"
                title="Supporting evidence across product flow, analytics, and research depth."
                description="Academic and side projects add context around product flow, KPI thinking, and structured analysis without shifting the portfolio away from BA/Product work."
              />
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {portfolio.projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 100}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-padding bg-cream" aria-labelledby="experience-title">
          <div className="container-main">
            <Reveal>
              <SectionHeader
                eyebrow="Experience Snapshot"
                titleId="experience-title"
                title="Practical BA/Product evidence across fintech, transformation, and operations."
                description="The emphasis is on transferable product systems work: flows, documentation, backlog coordination, permission logic, testing, and stakeholder alignment."
              />
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {portfolio.experience.map((experience, index) => (
                <Reveal key={experience.company} delay={index * 100}>
                  <ExperienceCard experience={experience} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <SkillsMatrix groups={portfolio.skillGroups} />
        </Reveal>
        <Reveal>
          <GameThinking notes={portfolio.gameThinking.notes} description={portfolio.gameThinking.description} />
        </Reveal>
        <Reveal>
          <About copy={portfolio.about} education={portfolio.education} />
        </Reveal>
        <Reveal>
          <Contact personal={portfolio.personal} />
        </Reveal>
      </main>
      <Footer personal={portfolio.personal} />
    </div>
  );
}

export default App;
