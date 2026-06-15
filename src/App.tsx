import { useEffect, useMemo, useState } from "react";
import About from "./components/About";
import ArtifactLightbox from "./components/ArtifactLightbox";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OrganizationsStrip from "./components/OrganizationsStrip";
import ProductSamples from "./components/ProductSamples";
import ProfessionalExperience from "./components/ProfessionalExperience";
import ProofSnapshot from "./components/ProofSnapshot";
import Reveal from "./components/Reveal";
import SkillsMatrix from "./components/SkillsMatrix";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
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
          socialLabels={{
            linkedinMicroLabel: portfolio.ui.linkedinMicroLabel,
            linkedinMicroText: portfolio.ui.linkedinMicroText,
            cvMicroLabel: portfolio.ui.cvMicroLabel,
            cvMicroText: portfolio.ui.cvMicroText,
            emailMicroLabel: portfolio.ui.emailMicroLabel,
            emailMicroText: portfolio.ui.emailMicroText,
          }}
          onImageOpen={setSelectedImage}
        />

        <Reveal>
          <About content={portfolio.about} />
        </Reveal>

        <Reveal>
          <OrganizationsStrip content={portfolio.organizations} />
        </Reveal>

        <Reveal>
          <SkillsMatrix
            mindset={portfolio.mindset}
            process={portfolio.process}
            approach={portfolio.approach}
            skillGroups={portfolio.skillGroups}
          />
        </Reveal>

        <Reveal>
          <ProofSnapshot proof={portfolio.proof} socialProof={portfolio.socialProof} />
        </Reveal>

        <Reveal>
          <ProfessionalExperience
            content={portfolio.professionalExperience}
            openSampleLabel={portfolio.ui.openArtifact}
            onImageOpen={setSelectedImage}
          />
        </Reveal>

        <Reveal>
          <WhyWorkWithMe content={portfolio.whyWork} />
        </Reveal>
        <Reveal>
          <ProductSamples content={portfolio.productNotes} />
        </Reveal>
        <Reveal>
          <Contact
            personal={portfolio.personal}
            content={portfolio.contact}
            cvFallback={portfolio.ui.cvFallback}
            linkedinAria={portfolio.ui.linkedinAria}
            cvDownloadAria={portfolio.ui.cvDownloadAria}
            socialLabels={{
              linkedinMicroLabel: portfolio.ui.linkedinMicroLabel,
              linkedinMicroText: portfolio.ui.linkedinMicroText,
              cvMicroLabel: portfolio.ui.cvMicroLabel,
              cvMicroText: portfolio.ui.cvMicroText,
              emailMicroLabel: portfolio.ui.emailMicroLabel,
              emailMicroText: portfolio.ui.emailMicroText,
            }}
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
