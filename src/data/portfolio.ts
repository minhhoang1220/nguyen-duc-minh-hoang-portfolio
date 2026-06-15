export type Language = "en" | "vi";

export type NavItem = {
  label: string;
  href: string;
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type AssetImage = {
  src: string;
  previewSrc?: string;
  alt: string;
  title: string;
  caption?: string;
};

export type HeroArtifact =
  | {
      type: "image";
      title: string;
      meta: string;
      image: AssetImage;
      priority?: boolean;
    }
  | {
      type: "timeline";
      title: string;
      meta: string;
      phases: string[];
    };

export type ProofStat = {
  value: string;
  label: string;
  subtitle?: string;
};

export type HeroUsp = {
  label: string;
  statement: string;
  signals: string[];
};

export type HeroJourneyStep = {
  label: string;
  title: string;
  body: string;
};

export type HeroVisualCopy = {
  topLabel: string;
  proofLabel: string;
  profileLabel: string;
  statusStrip: string[];
  artifactStackLabel: string;
  desktopLabel: string;
  mobileLabel: string;
  tabletLabel: string;
  matrixLabel: string;
  noteLabel: string;
  liveOpsLabel: string;
  visualTemplateLabel: string;
  anonymizedLabel: string;
};

export type SocialProofCard = {
  label: string;
  title: string;
  body: string;
  evidence: string[];
  logo?: string;
};

export type CaseStudy = {
  title: string;
  summary: string;
  evidence: string[];
  mainPreview?: AssetImage;
  detailPreview?: AssetImage;
  visualType?: "permission" | "timeline" | "matrix";
  context: string;
  problem: string;
  role: string;
  keyDecisions: string[];
  outcomeLearning: string;
  process: string[];
  delivered: string;
  artifacts: string[];
  artifactTags?: string[];
  impact: string;
  skills: string[];
  logo?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  context: string;
  featuredLabel?: string;
  summary?: string;
  proofLabel?: string;
  proof?: string;
  highlights?: {
    value: string;
    label: string;
  }[];
  evidence: string[];
  logo?: string;
};

export type Project = {
  title: string;
  type: string;
  image: AssetImage;
  positioning: string;
  contributions: string[];
  relevance: string;
  tags: string[];
  logo?: string;
};

export type ProcessRow = {
  number: string;
  title: string;
  description: string;
};

export type ApproachItem = {
  title: string;
  body: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type GameDirectionPillar = {
  title: string;
  body: string;
};

export type WhyWorkPillar = {
  title: string;
  body: string;
  proof: string;
};

export type Organization = {
  name: string;
  context: string;
  logo?: string;
};

export type WorkSample = AssetImage;

export type SupportedProject = {
  title: string;
  summary: string;
  scope: string[];
  samples: WorkSample[];
  tags: string[];
};

export type ProfessionalEntry = {
  title: string;
  focus: string;
  summary: string;
  logo?: string;
};

export type ProfessionalExperienceContent = {
  eyebrow: string;
  title: string;
  description: string;
  sampleLabel: string;
  projectLabel: string;
  scopeLabel: string;
  vega: {
    title: string;
    period: string;
    focus: string;
    logo?: string;
    projects: SupportedProject[];
  };
  entries: ProfessionalEntry[];
  additionalNote?: string;
};

export type PortfolioContent = {
  navigation: NavItem[];
  personal: {
    name: string;
    shortRole: string;
    location: string;
    email: string;
    linkedin: string;
    cv: string;
  };
  ui: {
    brandAria: string;
    navAria: string;
    mobileNavAria: string;
    menuAria: string;
    switchLanguageAria: string;
    linkedinAria: string;
    cvDownloadAria: string;
    cvFallback: string;
    linkedinMicroLabel: string;
    linkedinMicroText: string;
    cvMicroLabel: string;
    cvMicroText: string;
    emailMicroLabel: string;
    emailMicroText: string;
    openArtifact: string;
    closeArtifact: string;
    zoomInArtifact: string;
    zoomOutArtifact: string;
    resetArtifactZoom: string;
    loadingArtifact: string;
  };
  hero: {
    roleLine: string;
    headline: string;
    intro: string;
    usp: HeroUsp;
    focusItems: string[];
    trustHint: string;
    journey: HeroJourneyStep[];
    visual: HeroVisualCopy;
    artifactAria: string;
    ctas: {
      caseStudies: string;
      gameDirection: string;
      contact: string;
      cv: string;
      linkedin: string;
    };
    artifacts: HeroArtifact[];
  };
  proof: {
    eyebrow: string;
    title: string;
    stats: ProofStat[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    portrait?: AssetImage;
    points: {
      title: string;
      description: string;
    }[];
    abstractCard: {
      eyebrow: string;
      title: string;
      lines: string[];
    };
    profileCard: {
      label: string;
      title: string;
      subtitle: string;
      placeholder: string;
      chips: string[];
    };
    educationLabel: string;
    education: {
      school: string;
      degree: string;
      period: string;
      logo?: string;
    };
  };
  organizations: {
    eyebrow: string;
    title: string;
    description?: string;
    items: Organization[];
  };
  sections: {
    caseStudies: SectionCopy;
    projects: SectionCopy;
    experience: SectionCopy;
  };
  caseStudyLabels: {
    eyebrow: string;
    context: string;
    problem: string;
    role: string;
    keyDecisions: string;
    outcomeLearning: string;
    evidence: string;
    process: string;
    deliveredArtifacts: string;
    delivered: string;
    impact: string;
    skills: string;
    viewDetails: string;
    hideDetails: string;
    sanitized: string;
    matrixTitle: string;
    matrixMeta: string;
    artifactPreview: string;
    internalPreview: string;
    whatItProves: string;
    bottomLine: string;
    artifactTags: string;
  };
  caseStudies: CaseStudy[];
  whyWork: {
    eyebrow: string;
    title: string;
    description: string;
    proofLabel: string;
    pillars: WhyWorkPillar[];
  };
  socialProof: {
    eyebrow: string;
    title: string;
    description: string;
    cards: SocialProofCard[];
  };
  projectProof: {
    eyebrow: string;
    title: string;
    description: string;
    images: AssetImage[];
  };
  projectLabels: {
    contributions: string;
    whyItMatters: string;
  };
  projects: Project[];
  experience: Experience[];
  professionalExperience: ProfessionalExperienceContent;
  mindset: SectionCopy;
  process: {
    header: SectionCopy;
    rows: ProcessRow[];
  };
  approach: {
    header: SectionCopy;
    items: ApproachItem[];
  };
  skillGroups: {
    header: SectionCopy;
    groups: SkillGroup[];
  };
  productNotes: {
    eyebrow: string;
    title: string;
    description: string;
    noteLabel: string;
    noteTitle: string;
    notePreview: string;
    availability: string;
  };
  gameDirection: {
    eyebrow: string;
    title: string;
    body: string;
    genresTitle: string;
    gamesTitle: string;
    pillarsTitle: string;
    genres: string[];
    games: string[];
    pillars: GameDirectionPillar[];
  };
  contact: {
    eyebrow: string;
    title: string;
    emailLabel: string;
    linkedinLabel: string;
    cvLabel: string;
  };
  footer: {
    location: string;
    techStack: string;
    vibeNote: string;
    currentFocus: string;
    linksLabel: string;
  };
};

const assets = {
  cdpCampaignList: "/assets/cdp-campaign-list-ui.png",
  cdpFlowReport: "/assets/cdp-flow-report-detail.png",
  cdpAutomationFlow: "/assets/cdp-automation-flow-map.png",
  cdpFlowStates: "/assets/cdp-flow-management-states.png",
  chatbotJourney: "/assets/chatbot-zalo-journey-flow.png",
  chatbotFeedback: "/assets/chatbot-feedback-rating-flow.png",
  immerseVietnamOverview: "/assets/immersevietnam-website-overview.png",
  thesisPortfolioOverview: "/assets/thesis-portfolio-optimization-overview.png",
  dashboardRevenueOverview: "/assets/dashboard-revenue-overview.png",

  // Vega work sample assets
  vegaCanvasFlow: "/assets/case-studies/vega-canvas-flow.png",
  vegaFlowDetails: "/assets/case-studies/vega-flow-details.png",
  vegaMessChatbox: "/assets/case-studies/vega-mess-chatbox.png",
  vegaFacebookProfile: "/assets/case-studies/vega-facebook-profile.png",
  vegaZalo: "/assets/case-studies/vega-zalo.png",

  // Process and access-control preview assets
  case2CoverPreview: "/assets/prototypes/v3/previews/case-study-02-v3-cover-preview.png",
  case3CoverPreview: "/assets/prototypes/v3/previews/case-study-03-v3-cover-preview.png",

  // Logos
  vegaLogo: "/assets/logos/vega-fintech-logo.png",
  britishCouncilLogo: "/assets/logos/british-council-logo.png",
  vnuIsLogo: "/assets/logos/vnu-is-logo-landscape.png",
  cmctsLogo: "/assets/logos/cmcts-logo.png",
};

const assetPreviews = {
  cdpCampaignList: "/assets/previews/cdp-campaign-list-ui-preview.jpg",
  cdpFlowReport: "/assets/previews/cdp-flow-report-detail-preview.jpg",
  cdpAutomationFlow: "/assets/previews/cdp-automation-flow-map-preview.jpg",
  cdpFlowStates: "/assets/previews/cdp-flow-management-states-preview.jpg",
  chatbotJourney: "/assets/previews/chatbot-zalo-journey-flow-preview.jpg",
  chatbotFeedback: "/assets/previews/chatbot-feedback-rating-flow-preview.jpg",
  immerseVietnamOverview: "/assets/previews/immersevietnam-website-overview-preview.jpg",
  thesisPortfolioOverview: "/assets/previews/thesis-portfolio-optimization-overview-preview.jpg",
  dashboardRevenueOverview: "/assets/previews/dashboard-revenue-overview-preview.jpg",

  // Vega work sample previews
  vegaCanvasFlow: "/assets/previews/vega-canvas-flow-preview.png",
  vegaFlowDetails: "/assets/previews/vega-flow-details-preview.png",
  vegaMessChatbox: "/assets/previews/vega-mess-chatbox-preview.png",
  vegaFacebookProfile: "/assets/previews/vega-facebook-profile-preview.png",
  vegaZalo: "/assets/previews/vega-zalo-preview.png",
};

export const portfolioContent: Record<Language, PortfolioContent> = {
  en: {
    navigation: [
      { label: "About", href: "#about" },
      { label: "Mindset", href: "#mindset" },
      { label: "Snapshot", href: "#snapshot" },
      { label: "Experience", href: "#experience" },
      { label: "Value", href: "#value" },
      { label: "Contact", href: "#contact" },
    ],
    personal: {
      name: "Nguyễn Đức Minh Hoàng",
      shortRole: "BA/PM moving toward Game Product & LiveOps",
      location: "Hanoi, Vietnam",
      email: "hoang.nguyenducminh@gmail.com",
      linkedin: "https://www.linkedin.com/in/hoangnguyenducminh/",
      cv: "/Nguyen-Duc-Minh-Hoang-CV.pdf",
    },
    ui: {
      brandAria: "Go to home section",
      navAria: "Primary navigation",
      mobileNavAria: "Mobile navigation",
      menuAria: "Toggle navigation menu",
      switchLanguageAria: "Switch language",
      linkedinAria: "Open LinkedIn profile",
      cvDownloadAria: "Download Nguyễn Đức Minh Hoàng CV",
      cvFallback: "CV file is unavailable right now. Please email {email} and I will send it directly.",
      linkedinMicroLabel: "LinkedIn",
      linkedinMicroText: "Connect",
      cvMicroLabel: "Download CV",
      cvMicroText: "Resume PDF",
      emailMicroLabel: "Email",
      emailMicroText: "Email me",
      openArtifact: "View work sample",
      closeArtifact: "Close preview",
      zoomInArtifact: "Zoom in",
      zoomOutArtifact: "Zoom out",
      resetArtifactZoom: "Reset zoom",
      loadingArtifact: "Loading high-resolution asset",
    },
    hero: {
      roleLine: "BA/PM foundation for product workflow, documentation, and game-product direction.",
      headline: "BA/PM-oriented product learner building toward Game Product, Game Operations, and LiveOps roles.",
      intro:
        "I turn ambiguous product ideas into structured workflows, UX mockups, requirements, and handoff-ready documentation — with a long-term direction toward Game Product, Game Operations, and LiveOps.",
      usp: {
        label: "Positioning",
        statement:
          "A product learner with BA/PM execution, Product Operations habits, data thinking, and a long-term game-domain direction.",
        signals: [
          "BA/PM delivery across workflows, mockups, requirements, and handoff notes",
          "Product workflow thinking that maps states, constraints, and edge cases",
          "Data-informed reasoning from a Business Data Analytics background",
          "Game Product / Operations / LiveOps direction grounded in competitive game exposure",
        ],
      },
      focusItems: [
        "BA/PM foundation: workflow, documentation, mockups, QA/UAT",
        "Product direction: Game Product / Game Operations / LiveOps",
        "Transferable base: Product Operations and cross-functional delivery",
      ],
      trustHint:
        "Key evidence: work samples, professional recommendations, and cross-functional feature delivery.",
      journey: [
        {
          label: "Player insights",
          title: "Analyze behavior",
          body: "Understand player behaviors, competitive motivation, and live operation events.",
        },
        {
          label: "Product logic",
          title: "Clarify feature flow",
          body: "Translate unclear ideas into structured interactive flows, states, and edge cases.",
        },
        {
          label: "Buildable specs",
          title: "Make it development-ready",
          body: "Provide clear mockups, user stories, functional specs, and testing checklists for the dev team.",
        },
      ],
      visual: {
        topLabel: "Engagement Automation",
        proofLabel: "Campaign Logic",
        profileLabel: "Profile node",
        statusStrip: ["Signals", "Logic", "Specs", "Delivery"],
        artifactStackLabel: "Work Sample Stack",
        desktopLabel: "Flow Orchestration Canvas",
        mobileLabel: "Drop-off Analytics",
        tabletLabel: "LiveOps planning board",
        matrixLabel: "Matrix/table layout",
        noteLabel: "Campaign Logic Flow",
        liveOpsLabel: "Campaign logic",
        visualTemplateLabel: "Performance Feedback Loop",
        anonymizedLabel: "Product Work Samples",
      },
      artifactAria: "Selected product work sample previews",
      ctas: {
        caseStudies: "View experience",
        gameDirection: "Explore mindset",
        contact: "Let's talk",
        cv: "Download CV",
        linkedin: "LinkedIn",
      },
      artifacts: [
        {
          type: "image",
          title: "Engagement Automation Canvas",
          meta: "Flow orchestration",
          priority: true,
          image: {
            src: assets.vegaCanvasFlow,
            previewSrc: assetPreviews.vegaCanvasFlow,
            alt: "Product delivery evidence — confidential details removed. Engagement automation campaign flow canvas showing triggers, segments, and message nodes",
            title: "Engagement Automation Canvas",
            caption: "Product delivery evidence — confidential details removed.",
          },
        },
        {
          type: "image",
          title: "Performance & Drop-off Analysis",
          meta: "Campaign metrics",
          image: {
            src: assets.vegaFlowDetails,
            previewSrc: assetPreviews.vegaFlowDetails,
            alt: "Product delivery evidence — confidential details removed. Product details showing funnel metrics and performance drop-offs",
            title: "Performance & Drop-off Analysis",
            caption: "Product delivery evidence — confidential details removed.",
          },
        },
        {
          type: "image",
          title: "Report detail",
          meta: "Operations view",
          image: {
            src: assets.cdpFlowReport,
            previewSrc: assetPreviews.cdpFlowReport,
            alt: "Product delivery evidence — confidential details removed. CDP flow report detail interface screenshot",
            title: "CDP flow report detail",
            caption: "Product delivery evidence — confidential details removed.",
          },
        },
        {
          type: "timeline",
          title: "Delivery timeline",
          meta: "Planning / sequencing",
          phases: ["Discovery", "Flow Mapping", "Mockup", "Review", "Dev Handoff", "QA"],
        },
      ],
    },
    proof: {
      eyebrow: "Snapshot",
      title: "A Snapshot of My Work",
      stats: [
        {
          value: "65+",
          label: "Screens / Features",
          subtitle: "UX mockups and feature screens for CDP workflows, customer management, automation states, and edge cases.",
        },
        {
          value: "21 / ~400",
          label: "Roles / Permissions",
          subtitle: "Role and permission logic mapped for access control, approval flow, and internal product alignment.",
        },
        {
          value: "3",
          label: "Sprint Cycles",
          subtitle: "Supported planning, tracking, bug follow-up, and delivery alignment across product and ML-related features.",
        },
        {
          value: "4,000+",
          label: "Hours Game Exposure",
          subtitle: "Competitive game exposure translated into analysis of player behavior, meta shifts, live content, and system design.",
        },
      ],
    },
    about: {
      eyebrow: "About Me",
      title: "Business Data Analytics background, BA/PM execution, and a product path toward games.",
      body:
        "Hoàng is a Business Data Analytics graduate building his career around Business Analysis, Project Management, and Product Operations. His work focuses on turning ambiguous product ideas into structured workflows, UX mockups, requirements, and documentation that development teams can use.\n\nHis next direction is Game Product, Game Operations, and LiveOps — where BA/PM execution, data thinking, and long-term exposure to competitive games can be translated into player behavior analysis, feature planning, content operations, and product improvement.",
      portrait: {
        src: "/assets/portrait-nguyen-duc-minh-hoang.jpg",
        alt: "Portrait of Nguyễn Đức Minh Hoàng",
        title: "Nguyễn Đức Minh Hoàng portrait",
        caption: "Hanoi, Vietnam",
      },
      points: [
        {
          title: "BA/PM and Product Operations Base",
          description:
            "Hands-on experience with product workflow clarification, UX mockups, requirements, documentation, stakeholder coordination, sprint tracking, and QA/UAT support.",
        },
        {
          title: "Data-informed Product Thinking",
          description:
            "Business Data Analytics training supports structured analysis, model comparison, metric thinking, and clearer product tradeoff discussions.",
        },
        {
          title: "Games as a Product Domain",
          description:
            "Competitive game exposure is treated as product-domain learning: player motivation, meta shifts, progression, content loops, and live-service operations.",
        },
      ],
      abstractCard: {
        eyebrow: "Working profile",
        title: "BA / PM / Product",
        lines: ["Requirement clarity", "Flow mapping", "System logic", "Feature specification"],
      },
      profileCard: {
        label: "Professional Monogram",
        title: "NDMH",
        subtitle: "BA/PM focused on workflow clarity, product delivery, and game-domain growth.",
        placeholder: "Competency Profile",
        chips: ["Structured", "BA/PM", "Data-informed", "Product Ops", "Game-domain"],
      },
      educationLabel: "Education",
      education: {
        school: "VNU International School, Vietnam National University, Hanoi",
        degree: "Bachelor of Business Data Analytics",
        period: "2021-2025",
        logo: assets.vnuIsLogo,
      },
    },
    organizations: {
      eyebrow: "Organizations",
      title: "Organizations I’ve Worked With",
      description: "A lightweight view of the work and learning environments behind the portfolio evidence.",
      items: [
        { name: "Vega Fintech", context: "Product workflow / BA-PM", logo: assets.vegaLogo },
        { name: "British Council", context: "Operations / service coordination", logo: assets.britishCouncilLogo },
        { name: "CMC TS", context: "Data & Business Analyst internship", logo: assets.cmctsLogo },
        { name: "VNU-IS", context: "Business Data Analytics", logo: assets.vnuIsLogo },
        { name: "TalentNet", context: "Professional exposure" },
        { name: "Sonat", context: "Game design collaboration" },
      ],
    },
    sections: {
      caseStudies: {
        eyebrow: "Supported Projects",
        title: "Requirement clarity shown through real product work outputs.",
        description:
          "These cases focus on interaction flows, system logic, access-control rules, and backlog readiness as evidence of structured feature delivery.",
      },
      projects: {
        eyebrow: "Supporting Evidence",
        title: "Additional proof across UX, analytics, and research depth.",
        description:
          "These projects show transferable skills: web/UX structure, KPI storytelling, and analytical decision support.",
      },
      experience: {
        eyebrow: "Experience",
        title: "Practical BA/PM evidence across fintech, transformation, and operations.",
        description:
          "This is the proof base behind the game direction: user flows, backlogs, system rules, feature checks, and team coordination in complex products.",
      },
    },
    caseStudyLabels: {
      eyebrow: "Case Study",
      context: "Context",
      problem: "Problem",
      role: "My Role",
      keyDecisions: "Key Decisions / Tradeoffs",
      outcomeLearning: "Outcome / Learning",
      evidence: "Key evidence",
      process: "Process",
      deliveredArtifacts: "Delivered work outputs",
      delivered: "Delivered",
      impact: "Product/System Impact",
      skills: "Skills Demonstrated",
      viewDetails: "View details",
      hideDetails: "Hide details",
      sanitized: "Product Work Evidence",
      matrixTitle: "Role-permission matrix",
      matrixMeta: "21 roles / ~400 permissions",
      artifactPreview: "Work Sample",
      internalPreview: "Confidential details removed",
      whatItProves: "What it proves",
      bottomLine: "Bottom line",
      artifactTags: "Work output types",
    },
    caseStudies: [
      {
        title: "Engagement Flow & Notification Analytics",
        summary:
          "Mapped event automation logic across triggers, segments, notification states, and edge cases, directly transferring to LiveOps and player event logic.",
        evidence: [
          "Clarified flow/state behavior before mockup and handoff",
          "Structured event-based logic for developer and stakeholder review",
          "Supported QA/UAT validation with clear interaction flows",
        ],
        mainPreview: {
          src: assets.vegaCanvasFlow,
          previewSrc: assetPreviews.vegaCanvasFlow,
          alt: "Product delivery evidence — confidential details removed. Engagement automation campaign flow canvas showing triggers, segments, and message nodes",
          title: "Engagement flow canvas",
          caption: "Product delivery evidence — confidential details removed.",
        },
        detailPreview: {
          src: assets.vegaFlowDetails,
          previewSrc: assetPreviews.vegaFlowDetails,
          alt: "Product delivery evidence — confidential details removed. Product details showing funnel metrics and performance drop-offs",
          title: "Flow execution detail analytics",
          caption: "Product delivery evidence — confidential details removed.",
        },
        context:
          "Automation and push notification logic involving user segment triggers, status checks, and messaging flows.",
        problem:
          "The interaction logic was complex: triggers, segment conditions, push states, and edge cases needed alignment across stakeholders and developers before building mockups.",
        role:
          "BA/PM — responsible for logic flow mapping, feature breakdown, mockup support, edge case checks, and developer handoff preparation.",
        keyDecisions: [
          "Broke automation into modular triggers, user segment filters, state checks, and message actions instead of a single flat screen.",
          "Combined user flow maps with interface states to allow developers and stakeholders to review system behavior before implementation.",
          "Designed state-validation paths to cover delivery failures and segment changes, ensuring system reliability.",
        ],
        outcomeLearning:
          "The structured flow maps and state layouts reduced requirement ambiguity, enabled quick alignment on feature logic, and provided a clear basis for QA/UAT checks.",
        process: [
          "Mapped end-to-end user and system logic flows for notification events.",
          "Categorized feature behaviors into trigger conditions, user states, and notification actions.",
          "Prepared mockup-ready logic notes and edge-case lists for developer handoff.",
        ],
        delivered:
          "Complete event interaction flows, mockups, and logic specifications for developer handoff.",
        artifacts: ["Interaction flow maps", "Feature-state screens", "Logic spec notes", "Developer handoff checklists"],
        artifactTags: ["Flow Logic", "Mockups", "Functional Specs", "LiveOps Logic", "Edge Cases"],
        impact:
          "Simplified complex trigger logic, reduced dev handoff ambiguity, and served as a clear source of truth for QA checks.",
        skills: ["Interaction logic", "System thinking", "Event flows", "Backlog specs", "Edge case analysis"],
        logo: assets.vegaLogo,
      },
      {
        title: "Product Operations & Feature Delivery · Vega Fintech",
        summary:
          "Structured backlog management, release tracking, and cross-functional coordination for complex AI forecasting features and operations.",
        evidence: [
          "Translated complex financial/AI logic into clear backlog stories",
          "Established release tracking and pre-UAT checklists to coordinate delivery",
          "Managed sprint planning and stakeholder alignment without exposing sensitive data",
        ],
        visualType: "timeline",
        context:
          "Product operations and release management for cash forecasting and AI chatbot products involving predictive modeling and operations.",
        problem:
          "The features involved sensitive calculations and operational workflows that could not be displayed publicly, while the cross-functional team required clearer backlog structures and release alignment.",
        role:
          "Project Collaborator / BA-PM — responsible for requirements gathering, backlog management, sprint planning coordination, release tracking, and pre-UAT validation.",
        keyDecisions: [
          "Used release tracking timelines and backlog planning materials to represent execution process without exposing sensitive forecasting data.",
          "Translated high-level business requirements into functional criteria and developer-ready backlog tasks.",
          "Structured sprint planning and pre-UAT checklists to ensure cross-functional teams could validate feature logic before releases.",
        ],
        outcomeLearning:
          "Developed a repeatable sprint coordination rhythm, reduced requirement gaps between stakeholders, and created a clearer verification path for complex features.",
        process: [
          "Clarified product requirements with operations and business stakeholders.",
          "Mapped AI output logic with engineering teams to set clear acceptance criteria.",
          "Structured user stories, tasks, and verification checklists in Jira sprints.",
          "Validated product changes against test cases prior to UAT release.",
        ],
        delivered:
          "Sprint backlog, release trackers, functional specification notes, and feature validation checklists.",
        artifacts: ["Functional specification notes", "Sprint planning backlog", "Feature validation checklists", "Release tracker timeline"],
        artifactTags: ["Backlog Specs", "Sprint Planning", "UAT/QA Support", "Release Tracking", "Product Operations"],
        impact:
          "Aligned stakeholders on release timelines, improved cross-team delivery coordination, and set a structured testing basis.",
        skills: ["Backlog management", "Sprint planning", "Cross-team coordination", "UAT validation", "Product operations"],
        logo: assets.vegaLogo,
        mainPreview: {
          src: assets.case2CoverPreview,
          previewSrc: assets.case2CoverPreview,
          alt: "Process Evidence: Sprint backlog, release trackers, functional specification notes, and checklists.",
          title: "Product Operations & Feature Delivery",
          caption: "Process Evidence",
        },
      },
      {
        title: "System Logic & Access Matrix",
        summary:
          "Designed a structured role-permission matrix to map system complexity and rule-based governance across 21 roles and 400 access levels.",
        evidence: [
          "Mapped a complex access matrix covering 21 roles and ~400 permission points",
          "Clarified inheritance rules and conflict-resolution logic before implementation",
          "Provided a single source of truth for developers to implement access controls cleanly",
        ],
        context:
          "System logic and role-based access controls for an internal platform with multi-layered operational workflows.",
        problem:
          "The system lacked a consolidated security and role governance framework. We needed to map access boundaries for 21 roles and around 400 permission actions without creating security holes or login bugs.",
        role:
          "BA / System Analyst — responsible for permission structure design, role mapping, inheritance rule formulation, and validation logic check.",
        keyDecisions: [
          "Created a comprehensive access matrix (21 roles, ~400 entries) with explicit priority and conflict-resolution rules.",
          "Defined clear inheritance layers (e.g., administrator down to operational viewer) to minimize manual configuration errors.",
          "Coordinated with development team via Jira tickets to clarify permission checks on front-end components and API endpoints.",
        ],
        outcomeLearning:
          "The matrix became the developer single source of truth, preventing permission conflict bugs and simplifying security validation prior to build.",
        process: [
          "Analyzed operational workflows to group access rights into logical categories.",
          "Structured the permission grid to clarify where roles share or separate access rights.",
          "Aligned with technical leads to ensure the matrix rules map to database check logic.",
        ],
        delivered:
          "Structured role-permission matrix, access logic specs, and developer implementation guidelines.",
        artifacts: ["Role-permission matrix", "Access logic specifications", "Developer validation guides"],
        artifactTags: ["System Logic", "Access Control", "Matrix Design", "Edge Cases", "Governance"],
        impact:
          "Unified security rules, simplified access audits, and reduced dev errors in user-role configuration.",
        skills: ["System thinking", "Permission design", "Access control logic", "Edge case analysis", "Governance structure"],
        visualType: "matrix",
        mainPreview: {
          src: assets.case3CoverPreview,
          previewSrc: assets.case3CoverPreview,
          alt: "System Logic Matrix: role-permission matrix grid mapping access control rules for organizational roles.",
          title: "System Logic & Access Matrix",
          caption: "System Logic Matrix",
        },
      },
    ],
    whyWork: {
      eyebrow: "Value",
      title: "What I Can Bring to Your Team",
      description:
        "Practical BA/PM execution, product thinking, and game-domain awareness for teams that need clarity, structure, and delivery support.",
      proofLabel: "Evidence",
      pillars: [
        {
          title: "Structured BA/PM Execution",
          body:
            "Turn unclear ideas into user flows, requirements, mockups, acceptance criteria, and handoff-ready documentation.",
          proof: "Workflow mapping, requirements, mockups, and QA/UAT checklists.",
        },
        {
          title: "Product & Game-domain Thinking",
          body:
            "Understand products and games through user behavior, player motivation, progression, UX friction, content loops, and product metrics.",
          proof: "Competitive game exposure, product-system analysis, and data-informed reasoning.",
        },
        {
          title: "Cross-functional Delivery Support",
          body:
            "Work with product, design, development, AI/data, and operation teams to clarify scope, follow up delivery, and turn new domain knowledge into practical outputs.",
          proof: "Sprint follow-up, stakeholder alignment, bug tracking, and service-operations discipline.",
        },
      ],
    },
    socialProof: {
      eyebrow: "Proof signals",
      title: "Concise work signals",
      description:
        "A quick look at concrete outputs, working scope, and product direction behind my BA/PM and game-product journey.",
      cards: [
        {
          label: "Documentation",
          title: "Product Flow & Documentation",
          body:
            "Workflows, UX mockups, requirements, and handoff notes prepared for stakeholder review and development use.",
          evidence: [
            "Flow mapping",
            "Requirements notes",
            "QA/UAT checklists",
          ],
          logo: assets.vegaLogo,
        },
        {
          label: "Coordination",
          title: "Cross-functional Coordination",
          body:
            "Supported product, design, development, AI/data, and operations stakeholders through sprint follow-up and scope clarification.",
          evidence: [
            "Sprint tracking",
            "Bug follow-up",
            "Expected behavior clarification",
          ],
          logo: assets.vegaLogo,
        },
        {
          label: "Direction",
          title: "Game Product Direction",
          body:
            "Competitive game exposure is translated into product thinking around players, systems, live content, and engagement loops.",
          evidence: [
            "Player behavior",
            "Meta shifts",
            "Live-service loops",
          ],
        },
        {
          label: "Operations",
          title: "Operations Discipline",
          body:
            "Service operations experience supports reliability, process discipline, communication, and careful execution under pressure.",
          evidence: [
            "Frontline coordination",
            "Service communication",
            "Process discipline",
          ],
          logo: assets.britishCouncilLogo,
        },
      ],
    },
    projectProof: {
      eyebrow: "Supporting Work Samples",
      title: "Real work samples behind the product story.",
      description:
        "These previews show UI, reporting, and operational work samples from direct product planning.",
      images: [
        {
          src: assets.cdpCampaignList,
          previewSrc: assetPreviews.cdpCampaignList,
          alt: "CDP campaign list product UI screenshot",
          title: "CDP campaign list UI",
          caption: "Feature screen and operations evidence",
        },
        {
          src: assets.cdpFlowReport,
          previewSrc: assetPreviews.cdpFlowReport,
          alt: "CDP flow report detail interface screenshot",
          title: "CDP flow report detail",
          caption: "Reporting and operational visibility evidence",
        },
      ],
    },
    projectLabels: {
      contributions: "Contributions",
      whyItMatters: "Why it matters",
    },
    projects: [
      {
        title: "ImmerseVietnam",
        type: "UX & Product Structure Project",
        image: {
          src: assets.immerseVietnamOverview,
          previewSrc: assetPreviews.immerseVietnamOverview,
          alt: "ImmerseVietnam website overview showing hero, navigation, and content sections",
          title: "ImmerseVietnam website overview",
          caption: "Web / UX structure",
        },
        positioning:
          "User-facing web project showing page layout, content structure, and front-end logic.",
        contributions: ["User personas", "Interaction flows", "Figma wireframes", "Content structure"],
        relevance:
          "Shows how user needs are mapped into clear screen structures, logical navigation, and interactive flows.",
        tags: ["Product Flow", "Mockups", "UX Logic", "Content Structure"],
        logo: assets.vnuIsLogo,
      },
      {
        title: "Sales Performance Dashboard",
        type: "Data Operations Dashboard",
        image: {
          src: assets.dashboardRevenueOverview,
          previewSrc: assetPreviews.dashboardRevenueOverview,
          alt: "Revenue dashboard overview with KPI cards, revenue chart, treemap, and order tables",
          title: "Dashboard revenue overview",
          caption: "KPI / BI storytelling",
        },
        positioning:
          "BI dashboard project showing KPI formulation, data relationships, and trend analysis.",
        contributions: ["ETL workflows", "Data schema design", "KPI dashboard configuration", "Power BI"],
        relevance:
          "Demonstrates analytical thinking by turning raw operations data into clear metrics, similar to LiveOps dashboards.",
        tags: ["ETL Pipeline", "KPI design", "Data Modeling", "BI Analytics"],
        logo: assets.vnuIsLogo,
      },
      {
        title: "Data-Informed Product Analysis · VNU Research",
        type: "Analytical Research & Modeling",
        image: {
          src: assets.thesisPortfolioOverview,
          previewSrc: assetPreviews.thesisPortfolioOverview,
          alt: "Thesis portfolio optimization overview with investment strategy analysis and portfolio metrics",
          title: "Thesis portfolio optimization overview",
          caption: "Analytical decision support",
        },
        positioning:
          "Research project evaluating model benchmarking, comparative analytics, and decisions under uncertainty.",
        contributions: [
          "Model performance comparison",
          "Time-series data processing",
          "Machine learning testing",
          "Quantitative decision reasoning",
        ],
        relevance:
          "Highlights mathematical depth, structured logic, and model-based decision support, useful for game balance calculations.",
        tags: ["Research", "Benchmarking", "Time-Series", "ML"],
        logo: assets.vnuIsLogo,
      },
    ],
    experience: [
      {
        company: "Vega Fintech",
        role: "Project Management & Business Analysis Collaborator",
        period: "03/2026 - Present",
        context: "AI, customer service, fintech, and CDP product modules.",
        featuredLabel: "Core experience",
        summary:
          "Core experience where I coordinated feature delivery across AI chatbot, cash forecasting, and database modules — translating unclear needs into structured user flows, mockups, spec notes, and testing checklists.",
        proofLabel: "What it proves",
        proof:
          "Practical ability to manage feature complexity: clarifying behaviors, structuring mockups and specifications, coordinating sprints, and validating logic before release.",
        highlights: [
          { value: "65+", label: "screens / feature states" },
          { value: "21 / ~400", label: "roles and permissions" },
          { value: "3-4", label: "features planned per sprint" },
          { value: "8-10", label: "tasks coordinated per sprint" },
          { value: "~5", label: "bugs found before UAT" },
        ],
        evidence: [
          "Designed end-to-end interaction flows and Figma mockups for around 65 screens/features across customer-service modules.",
          "Managed backlog and sprint planning for 3-4 features per sprint, coordinating 8-10 developer tasks.",
          "Mapped a complex access matrix covering 21 user roles and ~400 permission points, and built feature verification checklists.",
        ],
        logo: assets.vegaLogo,
      },
      {
        company: "CMC Technology & Solutions",
        role: "Data & Business Analyst Intern",
        period: "09/2024 - 12/2024",
        context: "Digital transformation projects across business and technical teams.",
        evidence: [
          "Supported requirement gathering and structured documentation for transformation initiatives.",
          "Created process maps, system analysis diagrams, and data flow charts.",
          "Practiced cross-team business and technical communication across banking, education, and construction contexts.",
        ],
        logo: assets.cmctsLogo,
      },
      {
        company: "British Council Vietnam",
        role: "Multi-department Operations Support",
        period: "08/2021 - 12/2025",
        context: "High-pressure service operations with multiple internal stakeholders.",
        evidence: [
          "Coordinated operations, inventory, and data workflows across departments.",
          "Handled practical service issues where customer experience and operational timing mattered.",
          "Built stakeholder communication habits and sensitivity to frontline execution constraints.",
        ],
        logo: assets.britishCouncilLogo,
      },
    ],
    professionalExperience: {
      eyebrow: "Experience",
      title: "Professional Experience & Supported Projects",
      description:
        "Practical work experience and supported projects across product workflow, automation systems, documentation, stakeholder coordination, and operations.",
      sampleLabel: "Supporting work samples",
      projectLabel: "Supported project",
      scopeLabel: "Scope covered",
      vega: {
        title: "Vega Fintech — Project Management & Business Analyst Collaborator",
        period: "03/2026 - Present",
        focus:
          "Product workflow, BA documentation, UX mockup, stakeholder coordination, sprint tracking, QA/UAT support.",
        logo: assets.vegaLogo,
        projects: [
          {
            title: "CDP Automation Flow & Journey Builder Logic",
            summary:
              "Designed and documented CDP automation flow logic, including flow creation, node actions, entry conditions, trigger rules, status handling, reporting/debug views, and edge cases for development handoff.",
            scope: [
              "Flow list, create/edit/duplicate/delete, pause/resume, and flow status handling",
              "Entry conditions, trigger conditions, customer segments, node/stage logic, action nodes, wait/delay, and condition splits",
              "Reporting/debug views, drop-off/conversion tracking, validation states, and edge cases",
            ],
            samples: [
              {
                src: assets.cdpAutomationFlow,
                previewSrc: assetPreviews.cdpAutomationFlow,
                alt: "CDP automation flow map showing journey builder logic",
                title: "CDP automation flow map",
                caption: "Journey builder logic",
              },
              {
                src: assets.cdpFlowStates,
                previewSrc: assetPreviews.cdpFlowStates,
                alt: "CDP flow management states screen",
                title: "CDP flow management states",
                caption: "Flow status handling",
              },
              {
                src: assets.cdpFlowReport,
                previewSrc: assetPreviews.cdpFlowReport,
                alt: "CDP flow report detail screen",
                title: "CDP flow report detail",
                caption: "Reporting and debug view",
              },
            ],
            tags: ["CDP", "Journey Builder", "Workflow", "Edge Cases", "QA/UAT"],
          },
          {
            title: "Omnichannel Customer Engagement & AI Chatbot Integration",
            summary:
              "Researched and mapped omnichannel customer engagement flows for AI chatbot integration across Zalo, Messenger, and the company’s internal customer management system.",
            scope: [
              "Zalo and Messenger integration, AI chatbot response flow, and human support handoff",
              "Centralized conversation management, customer profile/context, message status, and channel-specific constraints",
              "Webhook/event handling, duplicate/out-of-order events, and session rating/feedback flow",
            ],
            samples: [
              {
                src: assets.chatbotJourney,
                previewSrc: assetPreviews.chatbotJourney,
                alt: "Chatbot Zalo journey flow showing customer engagement steps",
                title: "Chatbot Zalo journey flow",
                caption: "Omnichannel flow mapping",
              },
              {
                src: assets.vegaMessChatbox,
                previewSrc: assetPreviews.vegaMessChatbox,
                alt: "Messenger chatbot response mockup",
                title: "Messenger chatbot response",
                caption: "Customer conversation state",
              },
              {
                src: assets.chatbotFeedback,
                previewSrc: assetPreviews.chatbotFeedback,
                alt: "Chatbot feedback rating flow",
                title: "Session rating and feedback flow",
                caption: "Feedback loop",
              },
            ],
            tags: ["Omnichannel", "AI Chatbot", "Zalo", "Messenger", "Webhook"],
          },
          {
            title: "ML Forecasting & Product Support",
            summary:
              "Supported delivery tracking for an internal ML forecasting initiative while also contributing to product documentation and logic mapping for permission matrix and role-based access control.",
            scope: [
              "AI/data stakeholder coordination, sprint progress tracking, bug/issue follow-up, and expected behavior clarification",
              "Permission matrix, role mapping, approval logic, access rule clarification, and product/development alignment",
              "Release tracking, functional notes, validation checklists, and delivery support for ML-related features",
            ],
            samples: [
              {
                src: assets.case2CoverPreview,
                previewSrc: assets.case2CoverPreview,
                alt: "Process evidence preview for sprint backlog and release tracking",
                title: "Sprint backlog and release tracking",
                caption: "Delivery support",
              },
              {
                src: assets.case3CoverPreview,
                previewSrc: assets.case3CoverPreview,
                alt: "Role-permission matrix preview for access control logic",
                title: "Permission matrix and access logic",
                caption: "Product support",
              },
            ],
            tags: ["ML Forecasting", "Sprint Tracking", "Permission Matrix", "RBAC", "Product Support"],
          },
        ],
      },
      entries: [
        {
          title: "British Council — Exams Admin Supporter / Teaching Center Helper",
          focus: "Operations support, user-facing coordination, process discipline, communication.",
          summary:
            "Supported exam and teaching center operations in structured, high-pressure environments, working with internal teams, candidates, students, and parents while building reliability, attention to detail, and service communication habits.",
          logo: assets.britishCouncilLogo,
        },
        {
          title: "Academic Research — Machine Learning & Portfolio Optimization",
          focus: "Data analysis, machine learning, research documentation, model comparison.",
          summary:
            "Built a structured research pipeline for market trend forecasting and portfolio optimization, comparing machine learning models and presenting findings through report, visualization, and demo.",
          logo: assets.vnuIsLogo,
        },
      ],
      additionalNote:
        "CMC TS remains represented in the organization strip as supporting BA/data exposure, without diluting the main Vega/CDP/Game Product direction.",
    },
    mindset: {
      eyebrow: "Mindset",
      title: "Mindset",
      description:
        "How ambiguous product problems are clarified, structured, visualized, and turned into practical work outputs.",
    },
    process: {
      header: {
        eyebrow: "Product Thinking Process",
        title: "Approach to Ambiguous Product Problems",
      },
      rows: [
        {
          number: "01",
          title: "Clarify context",
          description:
            "Understand the business goal, users, constraints, and success criteria before jumping into solution.",
        },
        {
          number: "02",
          title: "Map the flow",
          description: "Turn scattered requirements into user flows, system flows, states, and dependencies.",
        },
        {
          number: "03",
          title: "Identify edge cases",
          description:
            "Look for permission gaps, trigger conflicts, failure states, and operational risks.",
        },
        {
          number: "04",
          title: "Translate into work outputs",
          description:
            "Convert logic into functional documents, mockups, acceptance criteria, checklists, and backlog-ready items.",
        },
        {
          number: "05",
          title: "Align and iterate",
          description:
            "Use work outputs to align stakeholders, support dev handoff, and refine through review or QA feedback.",
        },
      ],
    },
    approach: {
      header: {
        eyebrow: "Working Approach",
        title: "Core Approaches to Problem Solving",
      },
      items: [
        {
          title: "System-first thinking",
          body: "I analyze system dependencies, event triggers, permission states, and edge cases before designing features.",
        },
        {
          title: "Business ↔ Technical Translation",
          body: "I bridge communication gaps by reading API docs, understanding system constraints, and translating business goals into clear specs.",
        },
        {
          title: "Evidence-based decisions",
          body: "I use data analysis, structured reasoning, and quantitative model benchmarking to support product direction and tradeoffs.",
        },
        {
          title: "Stakeholder alignment",
          body: "I create clear visual flows, mockups, and detailed checklists to align product, engineering, and business teams.",
        },
      ],
    },
    skillGroups: {
      header: {
        eyebrow: "Capability Groups & Toolsets",
        title: "Capability Groups & Toolsets",
      },
      groups: [
        {
          category: "BA/PM Execution",
          skills: ["Requirement Gathering", "BRD/SRS Documentation", "User Stories", "Sprint Planning", "Backlog Management", "QA/UAT Support"],
        },
        {
          category: "Product & UX Design",
          skills: ["Figma Mockups", "User Journey Mapping", "Interaction Logic", "Edge Case Analysis", "Product Wireframes"],
        },
        {
          category: "System & Integration",
          skills: ["API Integration", "OAuth 2.0", "Webhooks", "Permission Design", "Role-Matrix Logic", "Event-Driven Flows"],
        },
        {
          category: "Data & Machine Learning",
          skills: ["Python (Pandas, NumPy)", "SQL", "Time-Series Forecasting", "Machine Learning Models", "Portfolio Optimization"],
        },
        {
          category: "Game Product Direction",
          skills: ["Player Behavior", "Game Economy Basics", "LiveOps Awareness", "Retention / Engagement / Monetization", "Competitive Meta Analysis", "Event / Content Loop"],
        },
      ],
    },
    productNotes: {
      eyebrow: "Supporting Work Samples",
      title: "Supporting Work Samples",
      description:
        "Optional supporting materials for recruiters who want to review additional product thinking and writing samples.",
      noteLabel: "Product writing sample",
      noteTitle: "How I turn vague requirements into product flows",
      notePreview:
        "A short note on how I clarify context, map flows, identify edge cases, and turn product logic into work outputs that teams can discuss and build from.",
      availability: "Full document available for review",
    },
    gameDirection: {
      eyebrow: "Game Product Direction",
      title: "Games are the career domain I am building toward.",
      body:
        "I treat games as a product domain, not just a hobby: systems where motivation, competition, progression, retention, community behavior, and live operations all interact. My BA/Product/System work gives me a practical bridge into that domain through flow logic, edge cases, coordination, documentation, and delivery clarity.",
      genresTitle: "Genres and systems I want to understand deeper",
      gamesTitle: "Games I follow or play",
      pillarsTitle: "How my current BA/PM base maps to game work",
      pillars: [
        {
          title: "Product & LiveOps Thinking",
          body: "Understanding how progression, events, rewards, and feature states shape long-term player engagement.",
        },
        {
          title: "Player / Community Understanding",
          body: "Reading player behavior, competitive motivation, meta shifts, and community feedback as product signals.",
        },
        {
          title: "Data-informed Decision Making",
          body: "Using a Business Data Analytics base to frame metrics, compare options, and explain tradeoffs clearly.",
        },
        {
          title: "Delivery & Stakeholder Alignment",
          body: "Turning ambiguous needs into flows, mockups, BRD/FSD deliverables, backlog items, and QA-ready checks.",
        },
      ],
      genres: [
        "MOBA",
        "FPS",
        "Battle royale",
        "Auto-battler",
        "Strategy games",
        "Meta shifts",
        "Competitive multiplayer systems",
        "Live-service events",
        "Progression and reward loops",
        "Balance updates",
        "Player behavior",
      ],
      games: [
        "Arena of Valor / Liên Quân Mobile",
        "League of Legends",
        "Valorant",
        "CS2",
        "Teamfight Tactics",
        "PUBG",
        "Other competitive and live-service titles",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to BA/PM, Game Product, Game Operations, and LiveOps opportunities where structured product thinking and hands-on delivery support are valued.",
      emailLabel: "Send an email →",
      linkedinLabel: "LinkedIn",
      cvLabel: "Download CV",
    },
    footer: {
      location: "Hanoi, Vietnam",
      techStack: "Built with React, TypeScript, and Tailwind CSS",
      vibeNote:
        "Built with React, TypeScript, and Tailwind CSS — refined through product thinking and iterative development.",
      currentFocus: "Currently exploring Game Product / LiveOps / Game Operations.",
      linksLabel: "Contact routes",
    },
  },
  vi: {
    navigation: [
      { label: "Giới thiệu", href: "#about" },
      { label: "Tư duy", href: "#mindset" },
      { label: "Điểm nổi bật", href: "#snapshot" },
      { label: "Kinh nghiệm", href: "#experience" },
      { label: "Giá trị", href: "#value" },
      { label: "Liên hệ", href: "#contact" },
    ],
    personal: {
      name: "Nguyễn Đức Minh Hoàng",
      shortRole: "BA/PM đang chuyển hướng sang Game Product & LiveOps",
      location: "Hà Nội, Việt Nam",
      email: "hoang.nguyenducminh@gmail.com",
      linkedin: "https://www.linkedin.com/in/hoangnguyenducminh/",
      cv: "/Nguyen-Duc-Minh-Hoang-CV.pdf",
    },
    ui: {
      brandAria: "Đi tới phần trang chủ",
      navAria: "Điều hướng chính",
      mobileNavAria: "Điều hướng trên mobile",
      menuAria: "Mở hoặc đóng menu điều hướng",
      switchLanguageAria: "Chuyển ngôn ngữ",
      linkedinAria: "Mở hồ sơ LinkedIn",
      cvDownloadAria: "Tải CV Nguyễn Đức Minh Hoàng",
      cvFallback: "Hiện tại chưa tải được file CV. Vui lòng email {email}, Hoàng sẽ gửi CV trực tiếp.",
      linkedinMicroLabel: "LinkedIn",
      linkedinMicroText: "Kết nối",
      cvMicroLabel: "Tải CV",
      cvMicroText: "PDF hồ sơ",
      emailMicroLabel: "Email",
      emailMicroText: "Gửi email",
      openArtifact: "Xem mẫu công việc",
      closeArtifact: "Đóng preview",
      zoomInArtifact: "Phóng to",
      zoomOutArtifact: "Thu nhỏ",
      resetArtifactZoom: "Đặt lại zoom",
      loadingArtifact: "Đang tải tài liệu",
    },
    hero: {
      roleLine: "Nền tảng BA/PM cho product workflow, documentation và định hướng game-product.",
      headline: "Product learner có nền tảng BA/PM, phát triển theo hướng Game Product, Game Operations và LiveOps.",
      intro:
        "Biến các ý tưởng sản phẩm còn mơ hồ thành workflow, UX mockup, requirement và tài liệu đủ rõ để handoff — với định hướng phát triển sang Game Product, Game Operations và LiveOps.",
      usp: {
        label: "Định vị",
        statement:
          "Một product learner có nền tảng BA/PM, thói quen Product Operations, tư duy dữ liệu và định hướng phát triển dài hạn trong game-domain.",
        signals: [
          "BA/PM execution qua workflow, mockup, requirement và tài liệu handoff",
          "Tư duy product workflow qua state, constraint và edge case",
          "Tư duy dữ liệu từ nền tảng Business Data Analytics",
          "Định hướng Game Product / Operations / LiveOps từ trải nghiệm theo dõi game competitive",
        ],
      },
      focusItems: [
        "Nền tảng BA/PM: workflow, documentation, mockup, QA/UAT",
        "Định hướng product: Game Product / Game Operations / LiveOps",
        "Nền tảng chuyển đổi: Product Operations và cross-functional delivery",
      ],
      trustHint:
        "Bằng chứng tiêu biểu: mẫu công việc, ghi nhận chuyên môn và kinh nghiệm bàn giao tính năng.",
      journey: [
        {
          label: "Trải nghiệm người chơi",
          title: "Phân tích hành vi",
          body: "Đọc vị nhu cầu người chơi, động lực cạnh tranh và bối cảnh sự kiện game.",
        },
        {
          label: "Logic sản phẩm",
          title: "Làm rõ tính năng",
          body: "Chuyển ý tưởng mơ hồ thành sơ đồ tương tác, trạng thái tính năng và edge case.",
        },
        {
          label: "Bàn giao kỹ thuật",
          title: "Sẵn sàng phát triển",
          body: "Cung cấp mockup, user story, tài liệu đặc tả tính năng và checklist kiểm thử cho đội phát triển.",
        },
      ],
      visual: {
        topLabel: "Engagement Automation",
        proofLabel: "Campaign Logic",
        profileLabel: "Profile node",
        statusStrip: ["Signals", "Logic", "Specs", "Delivery"],
        artifactStackLabel: "Work Sample Stack",
        desktopLabel: "Flow Orchestration Canvas",
        mobileLabel: "Drop-off Analytics",
        tabletLabel: "LiveOps planning board",
        matrixLabel: "Matrix/table layout",
        noteLabel: "Campaign Logic Flow",
        liveOpsLabel: "Campaign logic",
        visualTemplateLabel: "Performance Feedback Loop",
        anonymizedLabel: "Mẫu công việc product",
      },
      artifactAria: "Các preview mẫu công việc product đã chọn",
      ctas: {
        caseStudies: "Xem kinh nghiệm",
        gameDirection: "Khám phá tư duy",
        contact: "Trao đổi",
        cv: "Tải CV",
        linkedin: "LinkedIn",
      },
      artifacts: [
        {
          type: "image",
          title: "Engagement Automation Canvas",
          meta: "Flow orchestration",
          priority: true,
          image: {
            src: assets.vegaCanvasFlow,
            previewSrc: assetPreviews.vegaCanvasFlow,
            alt: "Bằng chứng bàn giao sản phẩm — thông tin bảo mật đã ẩn. Sơ đồ luồng tương tác tự động hóa với các điều kiện trigger, phân khúc người chơi và kênh gửi tin",
            title: "Engagement Automation Canvas",
            caption: "Bằng chứng bàn giao sản phẩm — thông tin bảo mật đã ẩn.",
          },
        },
        {
          type: "image",
          title: "Performance & Drop-off Analysis",
          meta: "Campaign metrics",
          image: {
            src: assets.vegaFlowDetails,
            previewSrc: assetPreviews.vegaFlowDetails,
            alt: "Bằng chứng bàn giao sản phẩm — thông tin bảo mật đã ẩn. Thông số phễu đo lường hiệu suất và tỷ lệ sụt giảm tương tác",
            title: "Performance & Drop-off Analysis",
            caption: "Bằng chứng bàn giao sản phẩm — thông tin bảo mật đã ẩn.",
          },
        },
        {
          type: "image",
          title: "Report detail",
          meta: "Operations view",
          image: {
            src: assets.cdpFlowReport,
            previewSrc: assetPreviews.cdpFlowReport,
            alt: "Bằng chứng bàn giao sản phẩm — thông tin bảo mật đã ẩn. Ảnh chụp giao diện báo cáo chi tiết luồng tự động hóa",
            title: "CDP flow report detail",
            caption: "Bằng chứng bàn giao sản phẩm — thông tin bảo mật đã ẩn.",
          },
        },
        {
          type: "timeline",
          title: "Delivery timeline",
          meta: "Planning / sequencing",
          phases: ["Discovery", "Flow Mapping", "Mockup", "Review", "Dev Handoff", "QA"],
        },
      ],
    },
    proof: {
      eyebrow: "Điểm nổi bật",
      title: "Điểm nổi bật trong công việc",
      stats: [
        {
          value: "65+",
          label: "Screens / Features",
          subtitle: "Mockup và màn hình tính năng cho CDP workflow, quản lý khách hàng, trạng thái automation và edge case.",
        },
        {
          value: "21 / ~400",
          label: "Roles / Permissions",
          subtitle: "Mapping logic role và permission cho phân quyền, luồng phê duyệt và alignment nội bộ.",
        },
        {
          value: "3",
          label: "Sprint Cycles",
          subtitle: "Hỗ trợ planning, tracking, theo dõi bug và alignment triển khai qua các feature product/ML.",
        },
        {
          value: "4,000+",
          label: "Hours Game Exposure",
          subtitle: "Trải nghiệm game competitive được chuyển hóa thành góc nhìn về hành vi người chơi, meta, live content và system design.",
        },
      ],
    },
    about: {
      eyebrow: "Giới thiệu",
      title: "Nền tảng Business Data Analytics, năng lực BA/PM và định hướng product trong game.",
      body:
        "Hoàng có nền tảng Business Data Analytics và đang phát triển theo hướng Business Analysis, Project Management và Product Operations. Trọng tâm công việc là biến các ý tưởng sản phẩm còn mơ hồ thành workflow, UX mockup, requirement và tài liệu đủ rõ để team phát triển có thể triển khai.\n\nĐịnh hướng tiếp theo là Game Product, Game Operations và LiveOps — nơi nền tảng BA/PM, tư duy dữ liệu và trải nghiệm theo dõi game competitive lâu dài có thể được chuyển hóa thành góc nhìn về hành vi người chơi, feature planning, vận hành nội dung và cải thiện sản phẩm.",
      portrait: {
        src: "/assets/portrait-nguyen-duc-minh-hoang.jpg",
        alt: "Ảnh chân dung Nguyễn Đức Minh Hoàng",
        title: "Ảnh chân dung Nguyễn Đức Minh Hoàng",
        caption: "Hà Nội, Vietnam",
      },
      points: [
        {
          title: "Nền tảng BA/PM và Product Operations",
          description:
            "Kinh nghiệm thực tế về làm rõ product workflow, UX mockup, requirement, documentation, stakeholder coordination, sprint tracking và QA/UAT support.",
        },
        {
          title: "Tư duy product dựa trên dữ liệu",
          description:
            "Nền tảng Business Data Analytics hỗ trợ phân tích có cấu trúc, so sánh mô hình, tư duy metric và thảo luận product tradeoff rõ ràng hơn.",
        },
        {
          title: "Game như một product domain",
          description:
            "Trải nghiệm theo dõi game competitive được nhìn như quá trình học domain: player motivation, meta shift, progression, content loop và live-service operation.",
        },
      ],
      abstractCard: {
        eyebrow: "Working profile",
        title: "BA / PM / Product",
        lines: ["Làm rõ yêu cầu", "Sơ đồ tương tác", "Logic hệ thống", "Đặc tả tính năng"],
      },
      profileCard: {
        label: "Professional Monogram",
        title: "NDMH",
        subtitle: "BA/PM tập trung vào workflow clarity, product delivery và phát triển game-domain.",
        placeholder: "Competency Profile",
        chips: ["Có cấu trúc", "BA/PM", "Data-informed", "Product Ops", "Game-domain"],
      },
      educationLabel: "Học vấn",
      education: {
        school: "VNU International School, Vietnam National University, Hanoi",
        degree: "Bachelor of Business Data Analytics",
        period: "2021-2025",
        logo: assets.vnuIsLogo,
      },
    },
    organizations: {
      eyebrow: "Môi trường",
      title: "Các môi trường Hoàng từng làm việc và học tập",
      description: "Một lát cắt gọn về các môi trường tạo nên nền tảng công việc và học tập hiện tại.",
      items: [
        { name: "Vega Fintech", context: "Product workflow / BA-PM", logo: assets.vegaLogo },
        { name: "British Council", context: "Operations / service coordination", logo: assets.britishCouncilLogo },
        { name: "CMC TS", context: "Data & Business Analyst internship", logo: assets.cmctsLogo },
        { name: "VNU-IS", context: "Business Data Analytics", logo: assets.vnuIsLogo },
        { name: "TalentNet", context: "Professional exposure" },
        { name: "Sonat", context: "Game design collaboration" },
      ],
    },
    sections: {
      caseStudies: {
        eyebrow: "Dự án đã hỗ trợ",
        title: "Requirement clarity được thể hiện qua sản phẩm công việc thật.",
        description:
          "Các case study này tập trung vào sơ đồ tương tác, logic hệ thống, quy tắc phân quyền và tính sẵn sàng bàn giao thay vì trình bày mang tính hình thức.",
      },
      projects: {
        eyebrow: "Mẫu công việc hỗ trợ",
        title: "Bằng chứng bổ sung qua UX, analytics và chiều sâu nghiên cứu.",
        description:
          "Các dự án này nhẹ hơn case study chính. Chúng thể hiện kỹ năng có thể chuyển đổi: cấu trúc web/UX, KPI storytelling và analytical decision support.",
      },
      experience: {
        eyebrow: "Kinh nghiệm",
        title: "Bằng chứng BA/PM thực tế qua fintech, chuyển đổi số và vận hành.",
        description:
          "Đây là nền tảng chứng minh cho định hướng game: sơ đồ tương tác, tài liệu, quản lý backlog, logic phân quyền, kiểm thử tính năng và điều phối các bộ phận.",
      },
    },
    caseStudyLabels: {
      eyebrow: "Case Study",
      context: "Bối cảnh",
      problem: "Vấn đề",
      role: "Vai trò",
      keyDecisions: "Quyết định chính / đánh đổi",
      outcomeLearning: "Kết quả / Bài học",
      evidence: "Bằng chứng chính",
      process: "Cách triển khai",
      deliveredArtifacts: "Sản phẩm công việc đã bàn giao",
      delivered: "Kết quả bàn giao",
      impact: "Tác động đến sản phẩm / hệ thống",
      skills: "Năng lực thể hiện",
      viewDetails: "Xem chi tiết",
      hideDetails: "Thu gọn",
      sanitized: "Product Work Evidence",
      matrixTitle: "Role-permission matrix",
      matrixMeta: "21 vai trò / ~400 quyền hạn",
      artifactPreview: "Work Sample",
      internalPreview: "Confidential details removed",
      whatItProves: "Điều case này chứng minh",
      bottomLine: "Bottom line",
      artifactTags: "Loại sản phẩm công việc",
    },
    caseStudies: [
      {
        title: "Engagement Flow & Notification Analytics",
        summary:
          "Map logic automation phức tạp qua trigger, segment, trạng thái và edge case, trực tiếp chuyển đổi sang tư duy logic sự kiện LiveOps và tương tác người chơi.",
        evidence: [
          "Làm rõ hành vi flow/state trước khi vẽ mockup và bàn giao",
          "Cấu trúc logic dựa trên sự kiện để đội ngũ phát triển và stakeholder cùng review",
          "Hỗ trợ kiểm thử QA/UAT với sơ đồ tương tác và logic trạng thái",
        ],
        mainPreview: {
          src: assets.vegaCanvasFlow,
          previewSrc: assetPreviews.vegaCanvasFlow,
          alt: "Bằng chứng bàn giao sản phẩm — thông tin bảo mật đã ẩn. Sơ đồ luồng tương tác tự động hóa với các điều kiện trigger, phân khúc người chơi và kênh gửi tin",
          title: "Engagement flow canvas",
          caption: "Bằng chứng bàn giao sản phẩm — thông tin bảo mật đã ẩn.",
        },
        detailPreview: {
          src: assets.vegaFlowDetails,
          previewSrc: assetPreviews.vegaFlowDetails,
          alt: "Bằng chứng bàn giao sản phẩm — thông tin bảo mật đã ẩn. Thông số phễu đo lường hiệu suất và tỷ lệ sụt giảm tương tác",
          title: "Flow execution detail analytics",
          caption: "Bằng chứng bàn giao sản phẩm — thông tin bảo mật đã ẩn.",
        },
        context:
          "Hệ thống tự động hóa thông báo đẩy dựa trên phân khúc người dùng, điều kiện kích hoạt (trigger) và trạng thái tin nhắn.",
        problem:
          "Logic tương tác phức tạp: các điều kiện kích hoạt, bộ lọc phân khúc, trạng thái gửi và edge case cần được thống nhất giữa các bên trước khi triển khai thiết kế chi tiết.",
        role:
          "BA/PM — chịu trách nhiệm thiết kế logic flow, bóc tách tính năng, hỗ trợ mockup, phân tích các trường hợp biên và chuẩn bị handoff cho dev.",
        keyDecisions: [
          "Bóc tách quy trình tự động thành các mô-đun: điều kiện kích hoạt, bộ lọc phân khúc người dùng và hành động gửi tin nhắn thay vì hiển thị trên một màn hình phẳng.",
          "Kết hợp sơ đồ luồng dữ liệu (flow map) với giao diện trạng thái để các bên liên quan dễ dàng kiểm tra hành vi hệ thống trước khi code.",
          "Thiết kế các kịch bản kiểm thử trạng thái lỗi gửi hoặc thay đổi phân khúc để đảm bảo tính nhất quán của hệ thống.",
        ],
        outcomeLearning:
          "Sơ đồ luồng tương tác và màn hình trạng thái giúp loại bỏ sự mơ hồ trong thảo luận, đẩy nhanh quá trình thống nhất logic và cung cấp cơ sở rõ ràng cho QA/UAT.",
        process: [
          "Xây dựng sơ đồ logic hệ thống và hành trình người chơi từ đầu đến cuối cho các sự kiện thông báo.",
          "Phân loại hành vi tính năng thành các điều kiện trigger, trạng thái người dùng và hành động tương tác.",
          "Chuẩn bị các ghi chú logic và danh sách edge case để bàn giao cho đội phát triển.",
        ],
        delivered:
          "Sơ đồ tương tác toàn diện, mockups và đặc tả logic bàn giao kỹ thuật.",
        artifacts: ["Sơ đồ tương tác", "Giao diện trạng thái tính năng", "Ghi chú đặc tả logic", "Checklist bàn giao kỹ thuật"],
        artifactTags: ["Flow Logic", "Mockups", "Đặc tả chức năng", "LiveOps Logic", "Edge Cases"],
        impact:
          "Đơn giản hóa logic kích hoạt sự kiện phức tạp, giảm thiểu sai sót khi bàn giao cho lập trình viên và làm single source of truth cho QA.",
        skills: ["Logic tương tác", "Tư duy hệ thống", "Event flows", "Đặc tả tính năng", "Phân tích edge case"],
        logo: assets.vegaLogo,
      },
      {
        title: "Product Operations & Feature Delivery · Vega Fintech",
        summary:
          "Cấu trúc backlog, sprint planning, release tracking và pre-UAT checks cho sản phẩm dự báo bằng AI.",
        evidence: [
          "Chuyển dịch logic tài chính/AI phức tạp thành các backlog stories rõ ràng",
          "Xây dựng quy trình theo dõi release và pre-UAT checklists để đồng bộ tiến độ",
          "Quản lý sprint planning và tạo sự đồng thuận giữa các stakeholder",
        ],
        visualType: "timeline",
        context:
          "Vận hành và quản lý phát hành cho các sản phẩm chatbot AI và công cụ dự báo dòng tiền liên quan đến các mô hình học máy.",
        problem:
          "Các tính năng chứa thuật toán và quy trình tài chính phức tạp, trong khi đội ngũ phát triển và vận hành cần cấu trúc backlog rõ nét cùng quy trình phát hành đồng bộ.",
        role:
          "Project Collaborator / BA-PM — chịu trách nhiệm thu thập yêu cầu, quản lý backlog, điều phối sprint planning, theo dõi phát hành và xác thực trước UAT.",
        keyDecisions: [
          "Sử dụng sơ đồ lộ trình phát hành (release timeline) và tài liệu lập kế hoạch backlog để mô tả quy trình thực thi nhằm tối ưu hóa quy trình bàn giao.",
          "Dịch nhu cầu vận hành của doanh nghiệp thành tiêu chí chấp nhận (acceptance criteria) rõ ràng cho đội ngũ kỹ thuật.",
          "Thiết lập các tiêu chí kiểm thử trước UAT để đảm bảo tính chính xác của tính năng trước khi đưa ra môi trường thử nghiệm.",
        ],
        outcomeLearning:
          "Duy trì nhịp độ làm việc ổn định qua từng sprint, giảm thiểu khoảng cách thông tin giữa các bộ phận và chuẩn hóa quy trình xác thực tính năng.",
        process: [
          "Làm rõ yêu cầu sản phẩm với các bộ phận vận hành và kinh doanh.",
          "Khớp các tiêu chí đầu ra của thuật toán dự báo với đội ngũ kỹ thuật và AI team lead.",
          "Cấu trúc user story, checklist kiểm thử trên Jira phục vụ sprint planning.",
          "Xác thực tính năng dựa trên các kịch bản kiểm thử trước khi bàn giao UAT.",
        ],
        delivered:
          "Backlog sản phẩm, timeline theo dõi phát hành, ghi chú đặc tả chức năng và checklist xác thực tính năng.",
        artifacts: ["Ghi chú đặc tả chức năng", "Backlog sprint planning", "Checklist xác thực tính năng", "Timeline theo dõi release"],
        artifactTags: ["Quản lý Backlog", "Sprint Planning", "Hỗ trợ UAT/QA", "Theo dõi Release", "Vận hành Sản phẩm"],
        impact:
          "Đồng bộ hóa kế hoạch phát hành giữa các phòng ban, nâng cao hiệu quả phối hợp và chuẩn hóa quy trình test trước bàn giao.",
        skills: ["Quản lý backlog", "Sprint planning", "Điều phối liên phòng ban", "Xác thực UAT", "Vận hành sản phẩm"],
        logo: assets.vegaLogo,
        mainPreview: {
          src: assets.case2CoverPreview,
          previewSrc: assets.case2CoverPreview,
          alt: "Process Evidence: Sơ đồ lập kế hoạch backlog sprint, theo dõi phát hành và danh sách kiểm thử tính năng.",
          title: "Product Operations & Feature Delivery",
          caption: "Process Evidence",
        },
      },
      {
        title: "System Logic & Access Matrix Design",
        summary:
          "Thiết kế ma trận vai trò - quyền hạn chi tiết để quản lý tính phức tạp của hệ thống và thiết lập quy tắc vận hành cho 21 vai trò và 400 cấp độ truy cập.",
        evidence: [
          "Thiết lập ma trận truy cập phức tạp bao trùm 21 vai trò và khoảng 400 điểm phân quyền",
          "Làm rõ quy tắc kế thừa quyền và xử lý xung đột logic trước khi lập trình",
          "Cung cấp tài liệu single source of truth giúp lập trình viên triển khai chính xác",
        ],
        context:
          "Logic hệ thống và kiểm soát quyền truy cập dựa trên vai trò cho một nền tảng nội bộ với nhiều quy trình vận hành phức tạp.",
        problem:
          "Hệ thống thiếu một khung phân quyền nhất quán. Cần xác định ranh giới truy cập cho 21 vai trò và khoảng 400 hành động phần mềm mà không tạo ra lỗ hổng bảo mật hay lỗi hệ thống.",
        role:
          "BA / System Analyst — chịu trách nhiệm thiết kế cấu trúc phân quyền, mapping vai trò, xây dựng quy tắc kế thừa và xác thực logic phân quyền.",
        keyDecisions: [
          "Xây dựng ma trận phân quyền chi tiết (21 vai trò, ~400 mục) kèm theo quy tắc giải quyết xung đột quyền hạn rõ ràng.",
          "Định hình các lớp kế thừa (ví dụ: từ Admin tổng xuống Viewer vận hành) để giảm thiểu sai số khi cấu hình thủ công.",
          "Điều phối với đội dev qua Jira để làm rõ cách kiểm tra quyền trên giao diện front-end và endpoint API.",
        ],
        outcomeLearning:
          "Ma trận phân quyền trở thành nguồn tham chiếu duy nhất cho dev, ngăn chặn lỗi logic phân quyền và rút ngắn thời gian kiểm thử trước khi build.",
        process: [
          "Phân tích luồng vận hành để nhóm các quyền truy cập vào danh mục hợp lý.",
          "Cấu trúc luồng phân quyền để làm rõ nơi các vai trò chia sẻ hoặc phân tách quyền truy cập.",
          "Thống nhất với kỹ thuật trưởng để đảm bảo các quy tắc trong ma trận khớp với logic kiểm tra cơ sở dữ liệu.",
        ],
        delivered:
          "Ma trận vai trò - quyền hạn có cấu trúc, đặc tả logic truy cập và hướng dẫn triển khai cho dev.",
        artifacts: ["Ma trận vai trò - quyền hạn", "Tài liệu đặc tả logic truy cập", "Hướng dẫn kiểm thử phân quyền"],
        artifactTags: ["System Logic", "Kiểm soát truy cập", "Thiết kế ma trận", "Edge Cases", "Governance"],
        impact:
          "Nhất quán hóa các quy tắc bảo mật hệ thống, đơn giản hóa kiểm thử và giảm thiểu sai sót cấu hình vai trò người dùng.",
        skills: ["Tư duy hệ thống", "Thiết kế phân quyền", "Logic truy cập", "Phân tích edge case", "Cấu trúc quản trị"],
        visualType: "matrix",
        mainPreview: {
          src: assets.case3CoverPreview,
          previewSrc: assets.case3CoverPreview,
          alt: "System Logic Matrix: role-permission matrix grid mapping access control rules.",
          title: "System Logic & Access Matrix Design",
          caption: "System Logic Matrix",
        },
      },
    ],
    whyWork: {
      eyebrow: "Giá trị",
      title: "Giá trị có thể mang đến cho team",
      description:
        "Năng lực BA/PM thực tế, tư duy product và hiểu biết game-domain cho những team cần sự rõ ràng, cấu trúc và hỗ trợ triển khai.",
      proofLabel: "Bằng chứng",
      pillars: [
        {
          title: "Structured BA/PM Execution",
          body:
            "Biến yêu cầu chưa rõ thành user flow, requirement, mockup, acceptance criteria và tài liệu đủ rõ để handoff.",
          proof: "Workflow mapping, requirement, mockup và QA/UAT checklist.",
        },
        {
          title: "Product & Game-domain Thinking",
          body:
            "Nhìn sản phẩm và game qua hành vi người dùng/người chơi, motivation, progression, UX friction, content loop và các chỉ số sản phẩm.",
          proof: "Game exposure, phân tích hệ thống product và tư duy dựa trên dữ liệu.",
        },
        {
          title: "Cross-functional Delivery Support",
          body:
            "Phối hợp với product, design, development, AI/data và operation team để làm rõ scope, theo dõi triển khai và chuyển kiến thức domain mới thành output thực tế.",
          proof: "Sprint follow-up, stakeholder alignment, bug tracking và kỷ luật service operations.",
        },
      ],
    },
    socialProof: {
      eyebrow: "Tín hiệu chứng minh",
      title: "Các tín hiệu công việc ngắn gọn",
      description:
        "Một lát cắt ngắn về output thực tế, phạm vi công việc và định hướng product/game mà Hoàng đang xây dựng.",
      cards: [
        {
          label: "Documentation",
          title: "Product Flow & Documentation",
          body:
            "Workflow, UX mockup, requirement và handoff note được chuẩn bị để stakeholder review và team phát triển sử dụng.",
          evidence: [
            "Flow mapping",
            "Requirement notes",
            "QA/UAT checklist",
          ],
          logo: assets.vegaLogo,
        },
        {
          label: "Coordination",
          title: "Cross-functional Coordination",
          body:
            "Hỗ trợ product, design, development, AI/data và operation stakeholder qua sprint follow-up và làm rõ scope.",
          evidence: [
            "Sprint tracking",
            "Bug follow-up",
            "Expected behavior clarification",
          ],
          logo: assets.vegaLogo,
        },
        {
          label: "Direction",
          title: "Game Product Direction",
          body:
            "Trải nghiệm game competitive được chuyển hóa thành product thinking về người chơi, hệ thống, live content và engagement loop.",
          evidence: [
            "Player behavior",
            "Meta shifts",
            "Live-service loops",
          ],
        },
        {
          label: "Operations",
          title: "Operations Discipline",
          body:
            "Kinh nghiệm service operations hỗ trợ sự đáng tin cậy, kỷ luật quy trình, giao tiếp rõ ràng và thực thi cẩn thận dưới áp lực.",
          evidence: [
            "Frontline coordination",
            "Service communication",
            "Process discipline",
          ],
          logo: assets.britishCouncilLogo,
        },
      ],
    },
    projectProof: {
      eyebrow: "Mẫu công việc hỗ trợ",
      title: "Những mẫu công việc thật phía sau câu chuyện sản phẩm.",
      description:
        "Các preview đã được làm sạch này thể hiện product UI, báo cáo và mẫu vận hành như bằng chứng của BA/Product work thực tế.",
      images: [
        {
          src: assets.cdpCampaignList,
          previewSrc: assetPreviews.cdpCampaignList,
          alt: "Ảnh chụp UI danh sách campaign CDP đã được làm sạch thông tin nhạy cảm",
          title: "CDP campaign list UI",
          caption: "Bằng chứng feature screen / operations",
        },
        {
          src: assets.cdpFlowReport,
          previewSrc: assetPreviews.cdpFlowReport,
          alt: "Ảnh chụp CDP flow report detail đã được làm sạch, thể hiện reporting và operational visibility",
          title: "CDP flow report detail",
          caption: "Bằng chứng reporting / analytics",
        },
      ],
    },
    projectLabels: {
      contributions: "Đóng góp",
      whyItMatters: "Vì sao liên quan",
    },
    projects: [
      {
        title: "ImmerseVietnam",
        type: "Dự án Thiết kế cấu trúc UX & Sản phẩm",
        image: {
          src: assets.immerseVietnamOverview,
          previewSrc: assetPreviews.immerseVietnamOverview,
          alt: "Tổng quan website ImmerseVietnam với hero, navigation và content sections",
          title: "ImmerseVietnam website overview",
          caption: "Cấu trúc web / UX",
        },
        positioning:
          "Dự án web hướng người dùng thể hiện bố cục trang, cấu trúc nội dung và logic front-end.",
        contributions: ["Persona người dùng", "Luồng tương tác", "Figma wireframe", "Cấu trúc nội dung"],
        relevance:
          "Cho thấy cách nhu cầu người dùng có thể trở thành navigation, screen structure và content flow cụ thể.",
        tags: ["Product Flow", "Mockups", "UX Logic", "Cấu trúc nội dung"],
        logo: assets.vnuIsLogo,
      },
      {
        title: "Sales Performance Dashboard",
        type: "Dashboard Vận hành & Phân tích Dữ liệu",
        image: {
          src: assets.dashboardRevenueOverview,
          previewSrc: assetPreviews.dashboardRevenueOverview,
          alt: "Dashboard doanh thu với KPI cards, revenue chart, treemap và bảng order",
          title: "Dashboard revenue overview",
          caption: "KPI / BI storytelling",
        },
        positioning:
          "Dự án dashboard BI thể hiện thiết lập chỉ số KPI, mô hình hóa dữ liệu và phân tích xu hướng.",
        contributions: ["ETL pipeline", "Thiết kế schema dữ liệu", "Cấu hình dashboard KPI", "Power BI"],
        relevance:
          "Thể hiện tư duy phân tích bằng cách chuyển đổi dữ liệu thô thành chỉ số trực quan, tương tự dashboard theo dõi LiveOps.",
        tags: ["ETL Pipeline", "Thiết kế KPI", "Mô hình dữ liệu", "Phân tích BI"],
        logo: assets.vnuIsLogo,
      },
      {
        title: "Phân tích sản phẩm dựa trên dữ liệu · VNU Research",
        type: "Nghiên cứu & Mô hình hóa Phân tích",
        image: {
          src: assets.thesisPortfolioOverview,
          previewSrc: assetPreviews.thesisPortfolioOverview,
          alt: "Tổng quan thesis portfolio optimization với investment strategy analysis và portfolio metrics",
          title: "Thesis portfolio optimization overview",
          caption: "Analytical decision support",
        },
        positioning:
          "Dự án nghiên cứu đánh giá so sánh mô hình, phân tích định lượng và ra quyết định trong điều kiện bất định.",
        contributions: [
          "So sánh hiệu năng mô hình",
          "Xử lý dữ liệu chuỗi thời gian",
          "Thử nghiệm mô hình học máy",
          "Lập luận quyết định định lượng",
        ],
        relevance:
          "Thể hiện tư duy toán học, logic cấu trúc và hỗ trợ quyết định bằng mô hình, hỗ trợ tốt cho việc cân bằng chỉ số game.",
        tags: ["Research", "Benchmarking", "Time-Series", "ML"],
        logo: assets.vnuIsLogo,
      },
    ],
    experience: [
      {
        company: "Vega Fintech",
        role: "Project Management & Business Analysis Collaborator",
        period: "03/2026 - Present",
        context: "AI, customer service, fintech và CDP product modules.",
        featuredLabel: "Kinh nghiệm chính",
        summary:
          "Kinh nghiệm thực tiễn điều phối bàn giao tính năng cho các phân hệ AI chatbot, công cụ dự báo dòng tiền — chuyển ý tưởng chưa rõ ràng thành sơ đồ tương tác, mockup giao diện và checklist kiểm thử.",
        proofLabel: "Điều kinh nghiệm này chứng minh",
        proof:
          "Năng lực quản lý tính phức tạp của tính năng: làm rõ hành vi hệ thống, cấu trúc mockup và tài liệu đặc tả, điều phối sprint và kiểm thử logic trước khi release.",
        highlights: [
          { value: "65+", label: "màn hình / trạng thái tính năng" },
          { value: "21 / ~400", label: "vai trò và quyền hạn" },
          { value: "3-4", label: "feature được plan mỗi sprint" },
          { value: "8-10", label: "task được điều phối mỗi sprint" },
          { value: "~5", label: "bug phát hiện trước UAT" },
        ],
        evidence: [
          "Thiết kế sơ đồ tương tác từ đầu đến cuối và mockup Figma cho khoảng 65 màn hình/tính năng thuộc phân hệ chăm sóc khách hàng.",
          "Quản lý backlog và lập kế hoạch sprint cho 3-4 tính năng mỗi sprint, điều phối khoảng 8-10 nhiệm vụ lập trình.",
          "Xây dựng ma trận phân quyền chi tiết cho 21 vai trò người dùng / ~400 mục quyền truy cập và thiết lập danh sách kiểm thử trước phát hành.",
        ],
        logo: assets.vegaLogo,
      },
      {
        company: "CMC Technology & Solutions",
        role: "Data & Business Analyst Intern",
        period: "09/2024 - 12/2024",
        context: "Digital transformation projects giữa business và technical teams.",
        evidence: [
          "Hỗ trợ thu thập yêu cầu và xây dựng tài liệu quy trình cho các sáng kiến chuyển đổi số.",
          "Thực hiện vẽ sơ đồ quy trình, phân tích hệ thống và lập luồng tích hợp dữ liệu.",
          "Rèn luyện kỹ năng giao tiếp nghiệp vụ và kỹ thuật giữa các bên trong bối cảnh ngân hàng, giáo dục và xây dựng.",
        ],
        logo: assets.cmctsLogo,
      },
      {
        company: "British Council Vietnam",
        role: "Multi-department Operations Support",
        period: "08/2021 - 12/2025",
        context: "Môi trường service operations áp lực cao với nhiều bên liên quan nội bộ.",
        evidence: [
          "Điều phối operations, inventory và data workflows giữa nhiều bộ phận.",
          "Xử lý các vấn đề thực tế nơi customer experience và operational timing có ảnh hưởng trực tiếp.",
          "Xây dựng thói quen giao tiếp với các bên liên quan và hiểu constraint của vận hành tuyến đầu.",
        ],
        logo: assets.britishCouncilLogo,
      },
    ],
    professionalExperience: {
      eyebrow: "Kinh nghiệm",
      title: "Kinh nghiệm chuyên môn & dự án đã hỗ trợ",
      description:
        "Kinh nghiệm làm việc và các dự án đã hỗ trợ trong product workflow, automation system, documentation, stakeholder coordination và operation.",
      sampleLabel: "Mẫu công việc hỗ trợ",
      projectLabel: "Dự án đã hỗ trợ",
      scopeLabel: "Phạm vi công việc",
      vega: {
        title: "Vega Fintech — Project Management & Business Analyst Collaborator",
        period: "03/2026 - Present",
        focus:
          "Product workflow, BA documentation, UX mockup, stakeholder coordination, sprint tracking, QA/UAT support.",
        logo: assets.vegaLogo,
        projects: [
          {
            title: "CDP Automation Flow & Journey Builder Logic",
            summary:
              "Thiết kế và mô tả logic CDP Automation Flow, bao gồm tạo flow, node action, điều kiện vào flow, trigger, trạng thái flow, reporting/debug view và edge case để handoff cho team phát triển.",
            scope: [
              "Flow list, tạo/sửa/duplicate/delete flow, pause/resume và trạng thái flow",
              "Điều kiện vào flow, trigger condition, customer segment, node/stage logic, action node, wait/delay và condition split",
              "Reporting/debug view, drop-off/conversion tracking, validation state và edge case",
            ],
            samples: [
              {
                src: assets.cdpAutomationFlow,
                previewSrc: assetPreviews.cdpAutomationFlow,
                alt: "Sơ đồ CDP automation flow thể hiện logic journey builder",
                title: "CDP automation flow map",
                caption: "Journey builder logic",
              },
              {
                src: assets.cdpFlowStates,
                previewSrc: assetPreviews.cdpFlowStates,
                alt: "Màn hình trạng thái quản lý CDP flow",
                title: "CDP flow management states",
                caption: "Flow status handling",
              },
              {
                src: assets.cdpFlowReport,
                previewSrc: assetPreviews.cdpFlowReport,
                alt: "Màn hình chi tiết báo cáo CDP flow",
                title: "CDP flow report detail",
                caption: "Reporting and debug view",
              },
            ],
            tags: ["CDP", "Journey Builder", "Workflow", "Edge Cases", "QA/UAT"],
          },
          {
            title: "Omnichannel Customer Engagement & AI Chatbot Integration",
            summary:
              "Nghiên cứu và mapping luồng Omnichannel Customer Engagement, tập trung vào tích hợp chatbot AI với Zalo, Messenger và hệ thống nội bộ để quản lý, phản hồi và giao tiếp khách hàng tập trung qua nhiều kênh.",
            scope: [
              "Zalo/Messenger integration, AI chatbot response flow và human support handoff",
              "Centralized conversation management, customer profile/context, message status và constraint theo từng kênh",
              "Webhook/event handling, duplicate/out-of-order events và session rating/feedback flow",
            ],
            samples: [
              {
                src: assets.chatbotJourney,
                previewSrc: assetPreviews.chatbotJourney,
                alt: "Luồng chatbot Zalo thể hiện các bước customer engagement",
                title: "Chatbot Zalo journey flow",
                caption: "Omnichannel flow mapping",
              },
              {
                src: assets.vegaMessChatbox,
                previewSrc: assetPreviews.vegaMessChatbox,
                alt: "Mockup phản hồi chatbot trên Messenger",
                title: "Messenger chatbot response",
                caption: "Customer conversation state",
              },
              {
                src: assets.chatbotFeedback,
                previewSrc: assetPreviews.chatbotFeedback,
                alt: "Luồng rating và feedback sau phiên chatbot",
                title: "Session rating and feedback flow",
                caption: "Feedback loop",
              },
            ],
            tags: ["Omnichannel", "AI Chatbot", "Zalo", "Messenger", "Webhook"],
          },
          {
            title: "ML Forecasting & Product Support",
            summary:
              "Hỗ trợ theo dõi tiến độ cho dự án ML Forecasting nội bộ, đồng thời tham gia tài liệu hóa và mapping logic cho permission matrix và phân quyền theo role.",
            scope: [
              "AI/data stakeholder coordination, sprint progress tracking, bug/issue follow-up và expected behavior clarification",
              "Permission matrix, role mapping, approval logic, access rule clarification và product/development alignment",
              "Release tracking, functional note, validation checklist và delivery support cho các feature liên quan ML",
            ],
            samples: [
              {
                src: assets.case2CoverPreview,
                previewSrc: assets.case2CoverPreview,
                alt: "Preview sprint backlog và release tracking",
                title: "Sprint backlog and release tracking",
                caption: "Delivery support",
              },
              {
                src: assets.case3CoverPreview,
                previewSrc: assets.case3CoverPreview,
                alt: "Preview ma trận phân quyền và logic truy cập",
                title: "Permission matrix and access logic",
                caption: "Product support",
              },
            ],
            tags: ["ML Forecasting", "Sprint Tracking", "Permission Matrix", "RBAC", "Product Support"],
          },
        ],
      },
      entries: [
        {
          title: "British Council — Exams Admin Supporter / Teaching Center Helper",
          focus: "Operations support, user-facing coordination, process discipline, communication.",
          summary:
            "Hỗ trợ vận hành kỳ thi và trung tâm giảng dạy trong môi trường có quy trình rõ ràng, áp lực cao; thường xuyên làm việc với team nội bộ, thí sinh, học sinh và phụ huynh, từ đó xây dựng sự cẩn thận, đáng tin cậy và khả năng giao tiếp dịch vụ.",
          logo: assets.britishCouncilLogo,
        },
        {
          title: "Academic Research — Machine Learning & Portfolio Optimization",
          focus: "Data analysis, machine learning, research documentation, model comparison.",
          summary:
            "Xây dựng pipeline nghiên cứu cho bài toán dự báo xu hướng thị trường và tối ưu danh mục, so sánh các mô hình machine learning và trình bày kết quả qua báo cáo, visualization và demo.",
          logo: assets.vnuIsLogo,
        },
      ],
      additionalNote:
        "CMC TS được giữ trong logo strip như một tín hiệu hỗ trợ về BA/data exposure, không làm loãng trọng tâm Vega/CDP/Game Product.",
    },
    mindset: {
      eyebrow: "Tư duy",
      title: "Tư duy",
      description:
        "Cách các bài toán sản phẩm mơ hồ được làm rõ, cấu trúc hóa, trực quan hóa và chuyển thành sản phẩm công việc có thể sử dụng.",
    },
    process: {
      header: {
        eyebrow: "Product Thinking Process",
        title: "Approach to Ambiguous Product Problems",
      },
      rows: [
        {
          number: "01",
          title: "Làm rõ bối cảnh",
          description: "Hiểu business goal, người dùng, constraint và tiêu chí thành công trước khi đi vào giải pháp.",
        },
        {
          number: "02",
          title: "Map flow",
          description: "Chuyển requirement rời rạc thành user flow, system flow, state và dependency.",
        },
        {
          number: "03",
          title: "Xác định edge case",
          description: "Tìm permission gap, trigger conflict, failure state và rủi ro vận hành.",
        },
        {
          number: "04",
          title: "Translate into Work Outputs",
          description:
            "Chuyển logic thành tài liệu chức năng, mockup, acceptance criteria, checklist và backlog-ready item.",
        },
        {
          number: "05",
          title: "Đồng thuận và lặp lại",
          description:
            "Dùng sản phẩm công việc để tạo alignment với các bên liên quan, hỗ trợ dev handoff và tinh chỉnh qua review hoặc QA feedback.",
        },
      ],
    },
    approach: {
      header: {
        eyebrow: "Working Approach",
        title: "Core Approaches to Problem Solving",
      },
      items: [
        {
          title: "Tư duy hệ thống",
          body: "Phân tích dependency, trạng thái và edge case trước khi đi vào giải pháp để tránh thiếu logic khi triển khai.",
        },
        {
          title: "Kết nối Business ↔ Technical",
          body: "Đọc tài liệu kỹ thuật, API và constraint hệ thống để chuyển mục tiêu business thành đặc tả rõ ràng cho dev.",
        },
        {
          title: "Quyết định dựa trên dữ liệu",
          body: "Sử dụng dữ liệu, tư duy phân tích có cấu trúc và so sánh định lượng để hỗ trợ định hướng product.",
        },
        {
          title: "Đồng thuận các bên liên quan",
          body: "Tạo flow trực quan, mockup và checklist chi tiết để kết nối và thống nhất kỳ vọng giữa các bên.",
        },
      ],
    },
    skillGroups: {
      header: {
        eyebrow: "Capability Groups & Toolsets",
        title: "Capability Groups & Toolsets",
      },
      groups: [
        {
          category: "BA/PM Execution",
          skills: ["Thu thập yêu cầu", "Tài liệu BRD/SRS", "User Stories", "Sprint Planning", "Backlog Management", "QA/UAT Support"],
        },
        {
          category: "Product & UX Design",
          skills: ["Figma Mockups", "User Journey Mapping", "Logic tương tác", "Phân tích edge case", "Product Wireframes"],
        },
        {
          category: "System & Integration",
          skills: ["API Integration", "OAuth 2.0", "Webhooks", "Thiết kế phân quyền", "Ma trận vai trò", "Event-Driven Flows"],
        },
        {
          category: "Dữ liệu & Học máy",
          skills: ["Python (Pandas, NumPy)", "SQL", "Dự báo Time-Series", "Mô hình Machine Learning", "Tối ưu hóa danh mục"],
        },
        {
          category: "Game Product Direction",
          skills: ["Player Behavior", "Game Economy Basics", "LiveOps Awareness", "Retention / Engagement / Monetization", "Competitive Meta Analysis", "Event / Content Loop"],
        },
      ],
    },
    productNotes: {
      eyebrow: "Mẫu công việc bổ sung",
      title: "Mẫu công việc bổ sung",
      description:
        "Phần hỗ trợ dành cho recruiter muốn xem thêm mẫu tư duy product và cách trình bày tài liệu.",
      noteLabel: "Product writing sample",
      noteTitle: "Cách biến yêu cầu mơ hồ thành product flow rõ ràng",
      notePreview:
        "Một ghi chú ngắn về cách làm rõ bối cảnh, map flow, xác định edge case và chuyển product logic thành sản phẩm công việc để team có thể trao đổi và triển khai.",
      availability: "Tài liệu đầy đủ sẵn sàng cung cấp khi cần",
    },
    gameDirection: {
      eyebrow: "Định hướng game",
      title: "Game là domain nghề nghiệp Hoàng đang xây dựng hướng tới.",
      body:
        "Game được nhìn như một product domain, không chỉ là sở thích: nơi motivation, competition, progression, retention, community behavior và live operations cùng tác động lên trải nghiệm người chơi. Nền tảng BA/Product/System hiện tại là cầu nối thực tế qua flow logic, edge case, coordination, documentation và delivery clarity.",
      genresTitle: "Thể loại và hệ thống cần hiểu sâu hơn",
      gamesTitle: "Một số game đang theo dõi hoặc chơi",
      pillarsTitle: "Cách nền tảng BA/PM hiện tại kết nối với game work",
      pillars: [
        {
          title: "Product & LiveOps Thinking",
          body: "Hiểu progression, event, reward và feature state ảnh hưởng thế nào tới long-term player engagement.",
        },
        {
          title: "Player / Community Understanding",
          body: "Đọc player behavior, competitive motivation, meta shift và community feedback như tín hiệu sản phẩm.",
        },
        {
          title: "Data-informed Decision Making",
          body: "Dùng nền tảng Business Data Analytics để frame metric, so sánh lựa chọn và giải thích tradeoff rõ ràng.",
        },
        {
          title: "Delivery & Stakeholder Alignment",
          body: "Chuyển nhu cầu mơ hồ thành flow, mockup, BRD/FSD deliverable, backlog item và QA-ready checks.",
        },
      ],
      genres: [
        "MOBA",
        "FPS",
        "Battle royale",
        "Auto-battler",
        "Strategy games",
        "Meta shifts",
        "Competitive multiplayer systems",
        "Live-service events",
        "Progression và reward loops",
        "Balance updates",
        "Hành vi người chơi",
      ],
      games: [
        "Liên Quân Mobile / Arena of Valor",
        "League of Legends",
        "Valorant",
        "CS2",
        "Teamfight Tactics",
        "PUBG",
        "Các tựa game competitive và live-service khác",
      ],
    },
    contact: {
      eyebrow: "Liên hệ",
      title: "Sẵn sàng trao đổi về các cơ hội BA/PM, Game Product, Game Operations và LiveOps — đặc biệt ở những team cần tư duy product có cấu trúc và khả năng hỗ trợ triển khai thực tế.",
      emailLabel: "Gửi email →",
      linkedinLabel: "LinkedIn",
      cvLabel: "Tải CV",
    },
    footer: {
      location: "Hà Nội, Việt Nam",
      techStack: "Xây dựng bằng React, TypeScript và Tailwind CSS",
      vibeNote:
        "Được phát triển bằng React, TypeScript và Tailwind CSS — tinh chỉnh thông qua tư duy sản phẩm và lặp lại liên tục.",
      currentFocus: "Hiện đang khám phá Game Product / LiveOps / Game Operations.",
      linksLabel: "Kênh liên hệ",
    },
  },
};
