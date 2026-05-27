import { useEffect, useMemo, useState } from "react";
import About from "./components/About";
import CaseStudyCard from "./components/CaseStudyCard";
import Contact from "./components/Contact";
import ExperienceCard from "./components/ExperienceCard";
import Footer from "./components/Footer";
import GameThinking from "./components/GameThinking";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductProof from "./components/ProductProof";
import ProofStrip from "./components/ProofStrip";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";
import SectionHeader from "./components/SectionHeader";
import SkillsMatrix from "./components/SkillsMatrix";
import { type Language, portfolioContent } from "./data/portfolio";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = window.localStorage.getItem("portfolio-language");
  return savedLanguage === "vi" ? "vi" : "en";
};

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const portfolio = useMemo(() => portfolioContent[language], [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar
        items={portfolio.navigation}
        language={language}
        labels={{
          brandAria: portfolio.ui.brandAria,
          navAria: portfolio.ui.navAria,
          mobileNavAria: portfolio.ui.mobileNavAria,
          menuAria: portfolio.ui.menuAria,
          switchLanguageAria: portfolio.ui.switchLanguageAria,
        }}
        onLanguageChange={setLanguage}
      />
      <main>
        <Hero
          personal={portfolio.personal}
          hero={portfolio.hero}
          cvFallback={portfolio.ui.cvFallback}
          linkedinAria={portfolio.ui.linkedinAria}
          cvDownloadAria={portfolio.ui.cvDownloadAria}
        />
        <Reveal>
          <ProofStrip proof={portfolio.proof} />
        </Reveal>

        <section id="case-studies" className="section-padding bg-cream" aria-labelledby="case-studies-title">
          <div className="container-main">
            <Reveal>
              <SectionHeader
                eyebrow={portfolio.sections.caseStudies.eyebrow}
                titleId="case-studies-title"
                title={portfolio.sections.caseStudies.title}
                description={portfolio.sections.caseStudies.description}
              />
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {portfolio.caseStudies.map((caseStudy, index) => (
                <Reveal key={caseStudy.title} delay={index * 100}>
                  <CaseStudyCard caseStudy={caseStudy} labels={portfolio.caseStudyLabels} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-padding bg-card" aria-labelledby="projects-title">
          <div className="container-main">
            <Reveal>
              <SectionHeader
                eyebrow={portfolio.sections.projects.eyebrow}
                titleId="projects-title"
                title={portfolio.sections.projects.title}
                description={portfolio.sections.projects.description}
              />
            </Reveal>
            <Reveal delay={80}>
              <ProductProof proof={portfolio.projectProof} />
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {portfolio.projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 100}>
                  <ProjectCard project={project} labels={portfolio.projectLabels} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-padding bg-cream" aria-labelledby="experience-title">
          <div className="container-main">
            <Reveal>
              <SectionHeader
                eyebrow={portfolio.sections.experience.eyebrow}
                titleId="experience-title"
                title={portfolio.sections.experience.title}
                description={portfolio.sections.experience.description}
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
          <SkillsMatrix content={portfolio.skillsMatrix} />
        </Reveal>
        <Reveal>
          <GameThinking content={portfolio.gameThinking} />
        </Reveal>
        <Reveal>
          <About content={portfolio.about} />
        </Reveal>
        <Reveal>
          <Contact
            personal={portfolio.personal}
            content={portfolio.contact}
            cvFallback={portfolio.ui.cvFallback}
            linkedinAria={portfolio.ui.linkedinAria}
            cvDownloadAria={portfolio.ui.cvDownloadAria}
          />
        </Reveal>
      </main>
      <Footer personal={portfolio.personal} footer={portfolio.footer} />
    </div>
  );
}

export default App;
