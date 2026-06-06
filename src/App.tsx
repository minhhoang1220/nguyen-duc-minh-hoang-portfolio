import { useEffect, useMemo, useState } from "react";
import About from "./components/About";
import ArtifactLightbox from "./components/ArtifactLightbox";
import CaseStudyCard from "./components/CaseStudyCard";
import Contact from "./components/Contact";
import ExperienceCard from "./components/ExperienceCard";
import Footer from "./components/Footer";
import GameThinking from "./components/GameThinking";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductNotes from "./components/ProductNotes";
import ProductProof from "./components/ProductProof";
import ProofStrip from "./components/ProofStrip";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";
import SectionHeader from "./components/SectionHeader";
import SkillsMatrix from "./components/SkillsMatrix";
import { type AssetImage, type Language, portfolioContent } from "./data/portfolio";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = window.localStorage.getItem("portfolio-language");
  return savedLanguage === "vi" ? "vi" : "en";
};

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [selectedImage, setSelectedImage] = useState<AssetImage | null>(null);
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
          openArtifactLabel={portfolio.ui.openArtifact}
          onImageOpen={setSelectedImage}
        />

        <Reveal>
          <GameThinking content={portfolio.gameDirection} />
        </Reveal>

        <Reveal>
          <ProofStrip proof={portfolio.proof} />
        </Reveal>

        <Reveal>
          <About content={portfolio.about} />
        </Reveal>

        <section id="case-studies" className="section-cases section-padding" aria-labelledby="case-studies-title">
          <div className="container-wide">
            <Reveal>
              <SectionHeader
                eyebrow={portfolio.sections.caseStudies.eyebrow}
                titleId="case-studies-title"
                title={portfolio.sections.caseStudies.title}
                description={portfolio.sections.caseStudies.description}
                wide
              />
            </Reveal>
            <div className="mt-10">
              {portfolio.caseStudies.map((caseStudy, index) => (
                <Reveal key={caseStudy.title} delay={index * 90}>
                  <CaseStudyCard
                    caseStudy={caseStudy}
                    labels={portfolio.caseStudyLabels}
                    index={index}
                    openArtifactLabel={portfolio.ui.openArtifact}
                    onImageOpen={setSelectedImage}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-product-proof section-padding" aria-labelledby="product-proof-title">
          <div className="container-wide">
            <Reveal>
              <ProductProof
                proof={portfolio.projectProof}
                titleId="product-proof-title"
                openArtifactLabel={portfolio.ui.openArtifact}
                onImageOpen={setSelectedImage}
              />
            </Reveal>

            <Reveal>
              <div className="mt-20 border-t border-line pt-12">
                <div className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
                  <p className="section-kicker text-navy">{portfolio.sections.projects.eyebrow}</p>
                  <div>
                    <h2 className="max-w-4xl text-balance text-[32px] font-semibold leading-[1.07] text-navy md:text-[48px] lg:text-[56px]">
                      {portfolio.sections.projects.title}
                    </h2>
                    {portfolio.sections.projects.description ? (
                      <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
                        {portfolio.sections.projects.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {portfolio.projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 100}>
                  <ProjectCard
                    project={project}
                    openArtifactLabel={portfolio.ui.openArtifact}
                    onImageOpen={setSelectedImage}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-padding bg-navy text-cream" aria-labelledby="experience-title">
          <div className="container-wide">
            <Reveal>
              <SectionHeader
                eyebrow={portfolio.sections.experience.eyebrow}
                titleId="experience-title"
                title={portfolio.sections.experience.title}
                description={portfolio.sections.experience.description}
                wide
                inverse
              />
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6">
              {portfolio.experience[0] ? (
                <Reveal>
                  <ExperienceCard experience={portfolio.experience[0]} featured />
                </Reveal>
              ) : null}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {portfolio.experience.slice(1).map((experience, index) => (
                  <Reveal key={experience.company} delay={(index + 1) * 100}>
                    <ExperienceCard experience={experience} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Reveal>
          <SkillsMatrix process={portfolio.process} approach={portfolio.approach} skillGroups={portfolio.skillGroups} />
        </Reveal>
        <Reveal>
          <ProductNotes content={portfolio.productNotes} />
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
      <ArtifactLightbox
        image={selectedImage}
        closeLabel={portfolio.ui.closeArtifact}
        zoomInLabel={portfolio.ui.zoomInArtifact}
        zoomOutLabel={portfolio.ui.zoomOutArtifact}
        resetZoomLabel={portfolio.ui.resetArtifactZoom}
        loadingLabel={portfolio.ui.loadingArtifact}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}

export default App;
