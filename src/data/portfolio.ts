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

  // Vega Case Study 1 assets
  vegaCanvasFlow: "/assets/case-studies/vega-canvas-flow.png",
  vegaFlowDetails: "/assets/case-studies/vega-flow-details.png",
  vegaMessChatbox: "/assets/case-studies/vega-mess-chatbox.png",
  vegaFacebookProfile: "/assets/case-studies/vega-facebook-profile.png",
  vegaZalo: "/assets/case-studies/vega-zalo.png",

  // Case Study 2 and 3 V3 previews
  case2CoverPreview: "/assets/prototypes/v3/previews/case-study-02-v3-cover-preview.png",
  case3CoverPreview: "/assets/prototypes/v3/previews/case-study-03-v3-cover-preview.png",

  // Logos
  vegaLogo: "/assets/logos/vega-fintech-logo.png",
  britishCouncilLogo: "/assets/logos/british-council-logo.png",
  vnuIsLogo: "/assets/logos/vnu-is-logo-landscape.png",
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

  // Vega Case Study 1 previews
  vegaCanvasFlow: "/assets/previews/vega-canvas-flow-preview.png",
  vegaFlowDetails: "/assets/previews/vega-flow-details-preview.png",
  vegaMessChatbox: "/assets/previews/vega-mess-chatbox-preview.png",
  vegaFacebookProfile: "/assets/previews/vega-facebook-profile-preview.png",
  vegaZalo: "/assets/previews/vega-zalo-preview.png",
};

export const portfolioContent: Record<Language, PortfolioContent> = {
  en: {
    navigation: [
      { label: "Home", href: "#home" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Selected Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Mindset", href: "#mindset" },
      { label: "Product Samples", href: "#product-samples" },
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
      openArtifact: "View work sample",
      closeArtifact: "Close preview",
      zoomInArtifact: "Zoom in",
      zoomOutArtifact: "Zoom out",
      resetArtifactZoom: "Reset zoom",
      loadingArtifact: "Loading high-resolution asset",
    },
    hero: {
      roleLine: "BA/PM thinking for game products, LiveOps, and player-facing features.",
      headline: "Game-focused BA/PM turning player insights into buildable features.",
      intro:
        "I help cross-functional teams understand what to build by turning unclear requirements into structured user flows, mockups, and clear checklist specifications. I combine this delivery discipline with data thinking and a deep understanding of player behaviors.",
      usp: {
        label: "Positioning",
        statement:
          "A BA/PM transitioning into Game Product and LiveOps through delivery discipline, data-informed thinking, and a competitive gaming foundation.",
        signals: [
          "BA/PM delivery across mockups, specs, feature research, and backlog alignment",
          "Product thinking that maps player behavior, feature logic, states, and edge cases",
          "Data-informed decisions backed by a Business Data Analytics background",
          "Game direction grounded in player motivation, meta shifts, and live operations",
        ],
      },
      focusItems: [
        "Primary direction: Game Product / LiveOps / Game Operations",
        "Proof base: BA / PM feature delivery experience",
        "Transferable path: Associate PM / Product Operations",
      ],
      trustHint:
        "Key evidence: product artifacts, professional recommendations, and cross-functional feature delivery.",
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
        artifactStackLabel: "Orchestration Workspace",
        desktopLabel: "Flow Orchestration Canvas",
        mobileLabel: "Drop-off Analytics",
        tabletLabel: "LiveOps planning board",
        matrixLabel: "Matrix/table layout",
        noteLabel: "Campaign Logic Flow",
        liveOpsLabel: "Campaign logic",
        visualTemplateLabel: "Performance Feedback Loop",
        anonymizedLabel: "Product Work Evidence",
      },
      artifactAria: "Selected product artifact previews",
      ctas: {
        caseStudies: "View Case Studies",
        gameDirection: "Explore Game Direction",
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
      eyebrow: "In numbers",
      title: "Measured artifacts, not abstract traits.",
      stats: [
        { value: "65+", label: "Feature screens / product states", subtitle: "Structured across CDP and customer-service modules" },
        { value: "21", label: "User roles", subtitle: "Mapped in permission and access-control logic" },
        { value: "~400", label: "Permission points", subtitle: "Structured for system governance" },
        { value: "3-4", label: "Features per sprint", subtitle: "Planned and coordinated in delivery cycles" },
        { value: "8-10", label: "Tasks per sprint", subtitle: "Coordinated across developer handoff" },
        { value: "~5", label: "Bugs before UAT", subtitle: "Detected and clarified before release validation" },
      ],
    },
    about: {
      eyebrow: "About Me",
      title: "Bridging system logic, delivery execution, and a deep understanding of game systems.",
      body:
        "I’m Hoàng, a BA/PM based in Hanoi, focusing on transitioning into Game Product, LiveOps, and Game Operations. I specialize in turning complex feature concepts into structured, development-ready flows and specifications. I connect this operational discipline with a quantitative data analytics background and a lifelong engagement in competitive gaming.\n\nOutside work, I follow competitive games closely and have supported team preparation through ban/pick planning, opponent analysis, and match strategy — experience that helps me understand player motivation, meta shifts, and competitive behavior beyond surface-level gameplay.",
      portrait: {
        src: "/assets/portrait-nguyen-duc-minh-hoang.jpg",
        alt: "Portrait of Nguyễn Đức Minh Hoàng",
        title: "Nguyễn Đức Minh Hoàng portrait",
        caption: "Hanoi, Vietnam",
      },
      points: [
        {
          title: "Logic & System-First Thinking",
          description:
            "I analyze system dependencies, user actions, states, and edge cases to ensure new features align with the overall system structure before development starts.",
        },
        {
          title: "Bridging Teams with Clear Specs",
          description:
            "I translate ideas into detailed user flows, mockups, user stories, and acceptance checklists that developers can build and stakeholders can review easily.",
        },
        {
          title: "Competitive Game Understanding",
          description:
            "I analyze meta changes, player loops, and competitive behaviors, using esports preparation experience to bring structured system insights to game operations.",
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
        subtitle: "BA/PM focused on system logic and feature delivery.",
        placeholder: "Competency Profile",
        chips: ["Structured", "Game-minded", "Data-informed", "Coordination-focused", "Player-centric"],
      },
      educationLabel: "Education",
      education: {
        school: "VNU International School, Vietnam National University, Hanoi",
        degree: "Bachelor of Business Data Analytics",
        period: "2021-2025",
        logo: assets.vnuIsLogo,
      },
    },
    sections: {
      caseStudies: {
        eyebrow: "Featured Case Studies",
        title: "Requirement clarity shown through real product artifacts.",
        description:
          "These cases focus on interaction flows, system logic, access-control rules, and backlog readiness as evidence of structured feature delivery.",
      },
      projects: {
        eyebrow: "Selected Projects",
        title: "Additional proof across UX, analytics, and research depth.",
        description:
          "These projects show transferable skills: web/UX structure, KPI storytelling, and analytical decision support.",
      },
      experience: {
        eyebrow: "Experience Snapshot",
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
      deliveredArtifacts: "Delivered Artifacts",
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
      artifactTags: "Artifact types",
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
          "Used release tracking timelines and backlog planning artifacts to represent execution process without exposing sensitive forecasting data.",
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
      eyebrow: "Why work with me",
      title: "A game-minded BA/PM who ensures teams know exactly what to build.",
      description:
        "I bridge the gap between player experience and structured development by translating product complexity into clear, development-ready specs.",
      pillars: [
        {
          title: "Deep Game Domain Understanding",
          body:
            "As a competitive player across Arena of Valor, League of Legends, TFT, Valorant, and CS2, I analyze player behaviors, meta balance shifts, and progression systems from a product perspective.",
          proof: "Esports tournament planning, strategy support, and competitive match analysis.",
        },
        {
          title: "Structured BA/PM Feature Delivery",
          body:
            "I help teams turn unclear feature ideas into structured user flows, mockups, backlog items, and functional specs. Experienced in Jira sprint planning and testing support.",
          proof: "Product specs, interaction mockups, backlog management, and release checks.",
        },
        {
          title: "Data-Informed Decision Making",
          body:
            "Leveraging a Business Data Analytics degree and data engineering experience to analyze performance metrics, model forecasting, and compare tradeoffs to support product choices.",
          proof: "Time-series forecasting platforms, ETL pipelines, and performance dashboards.",
        },
        {
          title: "Cross-Functional Coordination",
          body:
            "Operations support background at British Council Vietnam. Proven ability to coordinate multiple stakeholders, resolve operational issues, and maintain clear communications under pressure.",
          proof: "Multi-department operational support and recommendation-backed communication skills.",
        },
      ],
    },
    socialProof: {
      eyebrow: "Proof Points",
      title: "Credibility grounded in execution.",
      description:
        "Demonstrated competency through professional recommendations and direct work evidence.",
      cards: [
        {
          label: "Transferable skills recognition",
          title: "British Council Operations Support",
          body:
            "Recognized in an official recommendation letter for professionalism, reliability, structured communication, teamwork, organization, and English proficiency.",
          evidence: [
            "Coordinated logistics & multi-department flows",
            "Supported complex service delivery and administration",
          ],
          logo: assets.britishCouncilLogo,
        },
        {
          label: "Product delivery evidence",
          title: "Vega Fintech Feature Release",
          body:
            "Demonstrated core business analysis execution, from mapping detailed user flows and defining mockups to coordinating sprint releases and performing pre-UAT validation checks.",
          evidence: [
            "Sprint delivery coordination & tracking",
            "Pre-UAT validation checklists",
            "Functional spec mapping and reviews",
          ],
          logo: assets.vegaLogo,
        },
        {
          label: "Public Work Boundary",
          title: "Logic design without system exposure",
          body:
            "Product features and system rules are presented using visual templates and high-contrast previews to demonstrate logic design without exposing private business configurations.",
          evidence: [
            "Process artifacts prepared for public review",
            "Operational framework models to verify logic",
          ],
          logo: assets.vegaLogo,
        },
      ],
    },
    projectProof: {
      eyebrow: "Selected Work",
      title: "Real artifacts behind the product story.",
      description:
        "These previews show UI, reporting, and operational artifacts from direct product planning.",
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
    process: {
      header: {
        eyebrow: "How I Think",
        title: "How I approach ambiguous product problems",
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
          title: "Translate into artifacts",
          description:
            "Convert logic into functional documents, mockups, acceptance criteria, checklists, and backlog-ready items.",
        },
        {
          number: "05",
          title: "Align and iterate",
          description:
            "Use artifacts to align stakeholders, support dev handoff, and refine through review or QA feedback.",
        },
      ],
    },
    approach: {
      header: {
        eyebrow: "How I Work",
        title: "Core approaches to problem solving",
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
        eyebrow: "Skills Matrix",
        title: "Capability groups & toolsets",
      },
      groups: [
        {
          category: "System & Integration",
          skills: ["API Integration", "OAuth 2.0", "Webhooks", "Permission Design", "Role-Matrix Logic", "Event-Driven Flows"],
        },
        {
          category: "Business Analysis & PM",
          skills: ["Requirement Gathering", "BRD/SRS Documentation", "User Stories", "Sprint Planning", "Backlog Management", "Jira/Confluence"],
        },
        {
          category: "Product & UX Design",
          skills: ["Figma Mockups", "User Journey Mapping", "Interaction Logic", "Edge Case Analysis", "Product Wireframes"],
        },
        {
          category: "Data & Machine Learning",
          skills: ["Python (Pandas, NumPy)", "SQL", "Time-Series Forecasting", "Machine Learning Models", "Portfolio Optimization"],
        },
      ],
    },
    productNotes: {
      eyebrow: "Product Samples",
      title: "Writing sample for structured product thinking.",
      description:
        "A lightweight product sample showing how I explain BA/Product reasoning in a concise, reviewable format.",
      noteLabel: "Product Sample / Draft Note",
      noteTitle: "How I turn vague requirements into product flows",
      notePreview:
        "A short note on how I clarify context, map flows, identify edge cases, and turn product logic into artifacts that teams can discuss and build from.",
      availability: "Full document available for review",
    },
    gameDirection: {
      eyebrow: "Game direction",
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
          body: "Turning ambiguous needs into flows, mockups, BRD/FSD artifacts, backlog items, and QA-ready checks.",
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
        "Teamfight Tactics",
        "Valorant",
        "CS2",
        "Other competitive and live-service titles",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s talk about game products, LiveOps, or player-facing features.",
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
      { label: "Trang chủ", href: "#home" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Dự án tiêu biểu", href: "#projects" },
      { label: "Giới thiệu", href: "#about" },
      { label: "Kinh nghiệm", href: "#experience" },
      { label: "Tư duy", href: "#mindset" },
      { label: "Sản phẩm mẫu", href: "#product-samples" },
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
      cvFallback: "Hiện tại chưa tải được file CV. Vui lòng email {email}, tôi sẽ gửi CV trực tiếp.",
      openArtifact: "Xem tài liệu công việc",
      closeArtifact: "Đóng preview",
      zoomInArtifact: "Phóng to",
      zoomOutArtifact: "Thu nhỏ",
      resetArtifactZoom: "Đặt lại zoom",
      loadingArtifact: "Đang tải tài liệu",
    },
    hero: {
      roleLine: "Tư duy BA/PM cho Game Product, LiveOps và Operations.",
      headline: "Game-focused BA/PM giúp chuyển dịch trải nghiệm người chơi thành tính năng hoàn chỉnh.",
      intro:
        "Tôi giúp đội ngũ phát triển định hình rõ sản phẩm cần xây dựng bằng cách chuyển các ý tưởng sơ khai thành sơ đồ tương tác, bản vẽ phác thảo (mockup) và đặc tả chi tiết. Tôi kết hợp kỷ luật vận hành này với tư duy phân tích dữ liệu và sự am hiểu sâu sắc về hành vi người chơi.",
      usp: {
        label: "Định vị",
        statement:
          "Một BA/PM đang chuyển hướng sang Game Product và LiveOps bằng kỷ luật vận hành, tư duy phân tích dữ liệu và nền tảng am hiểu game cạnh tranh.",
        signals: [
          "Điều phối và phát triển BA/PM qua mockup, đặc tả tính năng, nghiên cứu và quản lý backlog",
          "Tư duy sản phẩm xây dựng từ hành vi người chơi, logic tính năng, trạng thái và các trường hợp biên",
          "Ra quyết định dựa trên dữ liệu từ nền tảng Business Data Analytics",
          "Định hướng game gắn liền với động lực người chơi, sự dịch chuyển meta và vận hành trực tiếp",
        ],
      },
      focusItems: [
        "Định hướng chính: Game Product / LiveOps / Game Operations",
        "Nền tảng chứng minh: Kinh nghiệm bàn giao tính năng BA/PM",
        "Hướng chuyển đổi: Associate PM / Product Operations",
      ],
      trustHint:
        "Bằng chứng tiêu biểu: Tài liệu sản phẩm thực tế, ghi nhận kỹ năng chuyên môn và kinh nghiệm bàn giao tính năng.",
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
        artifactStackLabel: "Orchestration Workspace",
        desktopLabel: "Flow Orchestration Canvas",
        mobileLabel: "Drop-off Analytics",
        tabletLabel: "LiveOps planning board",
        matrixLabel: "Matrix/table layout",
        noteLabel: "Campaign Logic Flow",
        liveOpsLabel: "Campaign logic",
        visualTemplateLabel: "Performance Feedback Loop",
        anonymizedLabel: "Product Work Evidence",
      },
      artifactAria: "Các preview artifact sản phẩm đã chọn",
      ctas: {
        caseStudies: "Xem Case Studies",
        gameDirection: "Khám phá Game Direction",
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
      eyebrow: "Số liệu nổi bật",
      title: "Bằng chứng cụ thể, không chỉ là mô tả năng lực.",
      stats: [
        { value: "65+", label: "Màn hình tính năng / trạng thái", subtitle: "Cấu trúc qua các module CDP & chăm sóc khách hàng" },
        { value: "21", label: "Vai trò người dùng", subtitle: "Thiết lập trong logic phân quyền & kiểm soát truy cập" },
        { value: "~400", label: "Điểm quyền hạn", subtitle: "Cấu trúc chặt chẽ phục vụ quản trị hệ thống" },
        { value: "3-4", label: "Tính năng mỗi sprint", subtitle: "Lập kế hoạch và điều phối trong các chu kỳ bàn giao" },
        { value: "8-10", label: "Task mỗi sprint", subtitle: "Phân phối nhịp nhàng trong quy trình dev handoff" },
        { value: "~5", label: "Lỗi trước UAT", subtitle: "Phát hiện và làm rõ trước khi nghiệm thu phát hành" },
      ],
    },
    about: {
      eyebrow: "Giới thiệu",
      title: "Tôi kết nối logic hệ thống, năng lực bàn giao và sự am hiểu sản phẩm game.",
      body:
        "Tôi là Hoàng, một BA/PM tại Hà Nội, đang định hướng phát triển sang Game Product, LiveOps và Game Operations. Thế mạnh của tôi là chuyển hóa các yêu cầu phức tạp thành sơ đồ tương tác và đặc tả tính năng rõ ràng để lập trình viên sẵn sàng code. Tôi kết hợp kỷ luật vận hành này với nền tảng phân tích dữ liệu cùng sự gắn bó lâu năm với mảng game cạnh tranh.\n\nOutside work, I follow competitive games closely and have supported team preparation through ban/pick planning, opponent analysis, and match strategy — experience that helps me understand player motivation, meta shifts, and competitive behavior beyond surface-level gameplay.",
      portrait: {
        src: "/assets/portrait-nguyen-duc-minh-hoang.jpg",
        alt: "Ảnh chân dung Nguyễn Đức Minh Hoàng",
        title: "Ảnh chân dung Nguyễn Đức Minh Hoàng",
        caption: "Hà Nội, Vietnam",
      },
      points: [
        {
          title: "Tư duy logic & hệ thống",
          description:
            "Tôi bóc tách các tính năng phức tạp thành sơ đồ luồng dữ liệu, trạng thái và các trường hợp biên để đảm bảo tính nhất quán trước khi viết code.",
        },
        {
          title: "Làm rõ yêu cầu & bản vẽ kỹ thuật",
          description:
            "Tôi chuyển dịch ý tưởng thành sơ đồ luồng người dùng (user flow), mockup giao diện, user story và danh sách kiểm thử giúp lập trình viên triển khai chính xác.",
        },
        {
          title: "Am hiểu sâu sắc game cạnh tranh",
          description:
            "Tôi phân tích dòng chảy meta, vòng lặp người chơi và hành vi cạnh tranh từ thực tế chuẩn bị chiến thuật Esports để mang đến những góc nhìn giá trị cho vận hành game.",
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
        subtitle: "BA/PM tư duy Game định hướng hệ thống và bàn giao sản phẩm.",
        placeholder: "Competency Profile",
        chips: ["Tư duy hệ thống", "Tư duy game", "Phân tích dữ liệu", "Điều phối dự án", "Player-centric"],
      },
      educationLabel: "Học vấn",
      education: {
        school: "VNU International School, Vietnam National University, Hanoi",
        degree: "Bachelor of Business Data Analytics",
        period: "2021-2025",
        logo: assets.vnuIsLogo,
      },
    },
    sections: {
      caseStudies: {
        eyebrow: "Case Studies nổi bật",
        title: "Requirement clarity được thể hiện qua artifact sản phẩm thật.",
        description:
          "Các case study này tập trung vào sơ đồ tương tác, logic hệ thống, quy tắc phân quyền và tính sẵn sàng bàn giao thay vì trình bày mang tính hình thức.",
      },
      projects: {
        eyebrow: "Dự án tiêu biểu",
        title: "Bằng chứng bổ sung qua UX, analytics và chiều sâu nghiên cứu.",
        description:
          "Các dự án này nhẹ hơn case study chính. Chúng thể hiện kỹ năng có thể chuyển đổi: cấu trúc web/UX, KPI storytelling và analytical decision support.",
      },
      experience: {
        eyebrow: "Kinh nghiệm tiêu biểu",
        title: "Bằng chứng BA/PM thực tế qua fintech, chuyển đổi số và vận hành.",
        description:
          "Đây là nền tảng chứng minh cho định hướng game: sơ đồ tương tác, tài liệu, quản lý backlog, logic phân quyền, kiểm thử tính năng và điều phối các bộ phận.",
      },
    },
    caseStudyLabels: {
      eyebrow: "Case Study",
      context: "Bối cảnh",
      problem: "Vấn đề",
      role: "Vai trò của tôi",
      keyDecisions: "Quyết định chính / đánh đổi",
      outcomeLearning: "Kết quả / Bài học",
      evidence: "Bằng chứng chính",
      process: "Cách triển khai",
      deliveredArtifacts: "Artifact đã bàn giao",
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
      artifactTags: "Loại artifact",
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
          "Xây trì nhịp độ làm việc ổn định qua từng sprint, giảm thiểu khoảng cách thông tin giữa các bộ phận và chuẩn hóa quy trình xác thực tính năng.",
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
      eyebrow: "Vì sao nên chọn tôi",
      title: "Một BA/PM tư duy game giúp đội ngũ phát triển định hình rõ sản phẩm.",
      description:
        "Tôi kết nối nhu cầu trải nghiệm người chơi với quy trình phát triển kỹ thuật bằng cách chuyển đổi logic phức tạp thành đặc tả dễ hiểu.",
      pillars: [
        {
          title: "Am hiểu sâu sắc về sản phẩm Game",
          body:
            "Là người chơi cạnh tranh trong Liên Quân Mobile, League of Legends, TFT, Valorant và CS2, tôi phân tích động lực người chơi, cân bằng meta và hệ thống tiến trình game dưới góc nhìn sản phẩm.",
          proof: "Lập kế hoạch giải đấu Esports, hỗ trợ chiến thuật ban/pick và phân tích trận đấu.",
        },
        {
          title: "Bàn giao tính năng BA/PM có cấu trúc",
          body:
            "Tôi giúp team chuyển hóa ý tưởng mơ hồ thành sơ đồ tương tác, mockup, backlog item và tài liệu chức năng. Kinh nghiệm quản lý sprint trên Jira và điều phối kiểm thử tính năng.",
          proof: "Đặc tả tính năng, mockup tương tác, quản lý backlog và release checklist.",
        },
        {
          title: "Tư duy phân tích dữ liệu thực tế",
          body:
            "Tốt nghiệp ngành Business Data Analytics kết hợp thực tập data engineering để phân tích chỉ số vận hành, dự báo xu hướng và so sánh các phương án đánh đổi để tối ưu hóa quyết định sản phẩm.",
          proof: "Nền tảng dự báo time-series, ETL pipeline và dashboard theo dõi chỉ số hiệu suất.",
        },
        {
          title: "Điều phối liên phòng ban hiệu quả",
          body:
            "Kinh nghiệm hỗ trợ vận hành đa bộ phận tại British Council Vietnam. Khả năng kết nối nhiều stakeholder, giải quyết các vấn đề phát sinh và giao tiếp hiệu quả dưới áp lực.",
          proof: "Hỗ trợ vận hành đa phòng ban và thư giới thiệu kỹ năng giao tiếp chuyển đổi.",
        },
      ],
    },
    socialProof: {
      eyebrow: "Bằng chứng",
      title: "Độ tin cậy được minh chứng từ thực tế bàn giao.",
      description:
        "Năng lực chuyên môn được chứng minh qua các đề xuất chuyên nghiệp và bằng chứng công việc thực tế.",
      cards: [
        {
          label: "Đề xuất chuyên môn",
          title: "British Council Operations Support",
          body:
            "Được ghi nhận trong thư đề xuất chính thức về sự chuyên nghiệp, độ tin cậy, kỹ năng giao tiếp cấu trúc, làm việc nhóm, tổ chức công việc và trình độ tiếng Anh xuất sắc.",
          evidence: [
            "Điều phối hậu cần & luồng công việc liên phòng ban",
            "Hỗ trợ quản trị và bàn giao dịch vụ phức tạp",
          ],
          logo: assets.britishCouncilLogo,
        },
        {
          label: "Bằng chứng bàn giao",
          title: "Vega Fintech Feature Release",
          body:
            "Minh chứng năng lực phân tích nghiệp vụ thực tế qua việc vẽ sơ đồ luồng người dùng chi tiết, mô phỏng giao diện, phối hợp sprint và thực hiện kiểm thử nghiệm thu pre-UAT.",
          evidence: [
            "Điều phối & theo sát sprint bàn giao",
            "Xây dựng checklist kiểm thử pre-UAT",
            "Mô tả tài liệu đặc tả chức năng",
          ],
          logo: assets.vegaLogo,
        },
        {
          label: "Giới hạn công việc công khai",
          title: "Thiết kế logic không lộ hệ thống",
          body:
            "Các tính năng và quy tắc nghiệp vụ được trình bày qua các mẫu trực quan nhằm minh họa tư duy thiết kế mà không làm lộ cấu hình doanh nghiệp.",
          evidence: [
            "Tài liệu quy trình chuẩn hóa công khai",
            "Mô hình vận hành trực quan hóa logic",
          ],
          logo: assets.vegaLogo,
        },
      ],
    },
    projectProof: {
      eyebrow: "Product UI Proof",
      title: "Những artifact thật phía sau câu chuyện sản phẩm.",
      description:
        "Các preview đã được làm sạch này thể hiện product UI, báo cáo và artifact vận hành như bằng chứng của BA/Product work thực tế.",
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
        tags: ["Nghiên cứu", "Benchmark", "Chuỗi thời gian", "Học máy"],
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
    process: {
      header: {
        eyebrow: "Cách tôi nghĩ",
        title: "Cách tôi tiếp cận những bài toán sản phẩm còn mơ hồ",
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
          title: "Chuyển thành artifact",
          description:
            "Chuyển logic thành tài liệu chức năng, mockup, acceptance criteria, checklist và backlog-ready item.",
        },
        {
          number: "05",
          title: "Đồng thuận và lặp lại",
          description:
            "Dùng artifact để tạo alignment với các bên liên quan, hỗ trợ dev handoff và tinh chỉnh qua review hoặc QA feedback.",
        },
      ],
    },
    approach: {
      header: {
        eyebrow: "Cách tôi làm việc",
        title: "Cách tôi tiếp cận các bài toán sản phẩm",
      },
      items: [
        {
          title: "Tư duy hệ thống",
          body: "Tôi luôn phân tích sự phụ thuộc (dependency), trạng thái và các trường hợp biên (edge case) trước khi đi vào giải pháp.",
        },
        {
          title: "Dịch thuật Business ↔ Technical",
          body: "Tôi đọc tài liệu kỹ thuật, API và hiểu giới hạn hệ thống để chuyển mục tiêu kinh doanh thành đặc tả rõ ràng cho dev.",
        },
        {
          title: "Quyết định dựa trên dữ liệu",
          body: "Tôi sử dụng dữ liệu, tư duy phân tích có cấu trúc và so sánh định lượng để bảo vệ định hướng sản phẩm.",
        },
        {
          title: "Đồng thuận các bên liên quan",
          body: "Tôi tạo flow trực quan, mockup và checklist chi tiết để kết nối và thống nhất ý kiến giữa các bên.",
        },
      ],
    },
    skillGroups: {
      header: {
        eyebrow: "Ma trận kỹ năng",
        title: "Các nhóm năng lực & công cụ",
      },
      groups: [
        {
          category: "Hệ thống & Tích hợp",
          skills: ["API Tích hợp", "OAuth 2.0", "Webhooks", "Thiết kế phân quyền", "Ma trận vai trò", "Event-Driven Flows"],
        },
        {
          category: "BA & Quản lý dự án (BA/PM)",
          skills: ["Thu thập yêu cầu", "Tài liệu BRD/SRS", "User Stories", "Sprint Planning", "Quản lý Backlog", "Jira/Confluence"],
        },
        {
          category: "Product & Thiết kế UX",
          skills: ["Figma Mockups", "User Journey Mapping", "Logic tương tác", "Phân tích trường hợp biên", "Product Wireframes"],
        },
        {
          category: "Dữ liệu & Học máy",
          skills: ["Python (Pandas, NumPy)", "SQL", "Dự báo Time-Series", "Mô hình Machine Learning", "Tối ưu hóa danh mục"],
        },
      ],
    },
    productNotes: {
      eyebrow: "Sản phẩm mẫu",
      title: "Tài liệu mẫu thể hiện tư duy sản phẩm có cấu trúc.",
      description:
        "Tài liệu mẫu tóm tắt ngắn gọn thể hiện phương pháp phân tích, tư duy hệ thống và cách tôi giải quyết các bài toán sản phẩm thực tế.",
      noteLabel: "Tài liệu mẫu / Ghi chú sản phẩm",
      noteTitle: "Cách tôi biến yêu cầu mơ hồ thành product flow rõ ràng",
      notePreview:
        "Một ghi chú ngắn về cách tôi làm rõ bối cảnh, map flow, xác định edge case và chuyển product logic thành các tài liệu kỹ thuật để team phát triển triển khai.",
      availability: "Tài liệu đầy đủ sẵn sàng cung cấp để đánh giá",
    },
    gameDirection: {
      eyebrow: "Định hướng game",
      title: "Game là domain nghề nghiệp tôi đang xây dựng hướng tới.",
      body:
        "Tôi nhìn game như một product domain, không chỉ là sở thích: nơi motivation, competition, progression, retention, community behavior và live operations cùng tác động lên trải nghiệm người chơi. Nền tảng BA/Product/System hiện tại là cầu nối thực tế qua flow logic, edge case, coordination, documentation và delivery clarity.",
      genresTitle: "Thể loại và hệ thống tôi muốn hiểu sâu hơn",
      gamesTitle: "Một số game tôi theo dõi hoặc chơi",
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
          body: "Chuyển nhu cầu mơ hồ thành flow, mockup, BRD/FSD artifact, backlog item và QA-ready checks.",
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
        "Teamfight Tactics",
        "Valorant",
        "CS2",
        "Các tựa game competitive và live-service khác",
      ],
    },
    contact: {
      eyebrow: "Liên hệ",
      title: "Hãy trao đổi về game products, LiveOps, hoặc các tính năng hướng đến người chơi.",
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
