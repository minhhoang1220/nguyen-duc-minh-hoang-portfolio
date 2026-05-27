import About from "./components/About";
import CaseStudyCard from "./components/CaseStudyCard";
import Contact from "./components/Contact";
import ExperienceCard from "./components/ExperienceCard";
import Footer from "./components/Footer";
import GameThinking from "./components/GameThinking";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProofStrip from "./components/ProofStrip";
import SectionHeader from "./components/SectionHeader";
import SkillsMatrix from "./components/SkillsMatrix";
import { portfolio } from "./data/portfolio";

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar items={portfolio.navigation} />
      <main>
        <Hero personal={portfolio.personal} />
        <ProofStrip items={portfolio.proof} />

        <section id="case-studies" className="section-padding bg-cream" aria-labelledby="case-studies-title">
          <div className="container-main">
            <SectionHeader
              eyebrow="Featured Case Studies"
              titleId="case-studies-title"
              title="Evidence of requirement clarity, system flow, and product handoff."
              description="Selected work is framed around the problem, role, delivered artifacts, and implementation value. Case study pages are prepared as placeholders for future expansion."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {portfolio.caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.title} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-padding bg-card" aria-labelledby="experience-title">
          <div className="container-main">
            <SectionHeader
              eyebrow="Experience Snapshot"
              titleId="experience-title"
              title="Practical BA/Product evidence across fintech, transformation, and operations."
              description="The emphasis is on transferable product systems work: flows, documentation, backlog coordination, permission logic, testing, and stakeholder alignment."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {portfolio.experience.map((experience) => (
                <ExperienceCard key={experience.company} experience={experience} />
              ))}
            </div>
          </div>
        </section>

        <SkillsMatrix groups={portfolio.skillGroups} />
        <GameThinking notes={portfolio.gameThinking.notes} description={portfolio.gameThinking.description} />
        <About copy={portfolio.about} education={portfolio.education} />
        <Contact personal={portfolio.personal} />
      </main>
      <Footer personal={portfolio.personal} />
    </div>
  );
}

export default App;
