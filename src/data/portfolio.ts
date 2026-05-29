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
};

export type CaseStudy = {
  title: string;
  mainPreview?: AssetImage;
  detailPreview?: AssetImage;
  context: string;
  problem: string;
  role: string;
  keyDecisions: string[];
  outcomeLearning: string;
  process: string[];
  delivered: string;
  artifacts: string[];
  impact: string;
  skills: string[];
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
};

export type Project = {
  title: string;
  type: string;
  positioning: string;
  contributions: string[];
  relevance: string;
  tags: string[];
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
  };
  hero: {
    roleLine: string;
    headline: string;
    intro: string;
    focusLine: string;
    artifactAria: string;
    ctas: {
      caseStudies: string;
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
    points: {
      title: string;
      description: string;
    }[];
    abstractCard: {
      eyebrow: string;
      title: string;
      lines: string[];
    };
    educationLabel: string;
    education: {
      school: string;
      degree: string;
      period: string;
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
  };
  caseStudies: CaseStudy[];
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
    genres: string[];
    games: string[];
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
  };
};

const assets = {
  cdpCampaignList: "/assets/cdp-campaign-list-ui.png",
  cdpFlowReport: "/assets/cdp-flow-report-detail.png",
  cdpAutomationFlow: "/assets/cdp-automation-flow-map.png",
  cdpFlowStates: "/assets/cdp-flow-management-states.png",
  chatbotJourney: "/assets/chatbot-zalo-journey-flow.png",
  chatbotFeedback: "/assets/chatbot-feedback-rating-flow.png",
};

const assetPreviews = {
  cdpCampaignList: "/assets/previews/cdp-campaign-list-ui-preview.jpg",
  cdpFlowReport: "/assets/previews/cdp-flow-report-detail-preview.jpg",
  cdpAutomationFlow: "/assets/previews/cdp-automation-flow-map-preview.jpg",
  cdpFlowStates: "/assets/previews/cdp-flow-management-states-preview.jpg",
  chatbotJourney: "/assets/previews/chatbot-zalo-journey-flow-preview.jpg",
  chatbotFeedback: "/assets/previews/chatbot-feedback-rating-flow-preview.jpg",
};

export const portfolioContent: Record<Language, PortfolioContent> = {
  en: {
    navigation: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "How I Think", href: "#skills" },
      { label: "Product Notes", href: "#product-notes" },
      { label: "Game Direction", href: "#game-direction" },
      { label: "Contact", href: "#contact" },
    ],
    personal: {
      name: "Nguyễn Đức Minh Hoàng",
      shortRole: "Product/System Business Analyst",
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
      openArtifact: "View artifact",
      closeArtifact: "Close artifact preview",
      zoomInArtifact: "Zoom in",
      zoomOutArtifact: "Zoom out",
      resetArtifactZoom: "Reset zoom",
    },
    hero: {
      roleLine:
        "Product/System Business Analyst focused on turning ambiguous requirements into clear flows, documentation, and delivery-ready artifacts.",
      headline: "Turning ambiguity into clear product flows.",
      intro:
        "I turn ambiguous requirements into delivery-ready artifacts — across product flows, system specs, and stakeholder alignment.",
      focusLine: "Primary focus: Product/System BA. Secondary direction: Associate PM and Product Operations. Future direction: Game Product and LiveOps.",
      artifactAria: "Selected product artifact previews",
      ctas: {
        caseStudies: "View Case Studies",
        cv: "Download CV",
        linkedin: "LinkedIn",
      },
      artifacts: [
        {
          type: "image",
          title: "Flow management states",
          meta: "Feature states",
          priority: true,
          image: {
            src: assets.cdpFlowStates,
            previewSrc: assetPreviews.cdpFlowStates,
            alt: "Sanitized CDP flow management state screens showing feature-state and operational logic",
            title: "CDP flow management states",
            caption: "Main visual proof of feature-state clarity and operational logic.",
          },
        },
        {
          type: "image",
          title: "Chatbot journey",
          meta: "System flow",
          image: {
            src: assets.chatbotJourney,
            previewSrc: assetPreviews.chatbotJourney,
            alt: "Sanitized chatbot Zalo OA journey flow diagram",
            title: "Chatbot Zalo journey flow",
            caption: "Supporting artifact for channel journey and interaction logic.",
          },
        },
        {
          type: "image",
          title: "Report detail",
          meta: "Operations view",
          image: {
            src: assets.cdpFlowReport,
            previewSrc: assetPreviews.cdpFlowReport,
            alt: "Sanitized CDP flow report detail interface screenshot",
            title: "CDP flow report detail",
            caption: "Supporting artifact for reporting and operational visibility.",
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
        { value: "65+", label: "Figma screens / feature states across CDP modules" },
        { value: "21", label: "Roles mapped in permission logic" },
        { value: "~400", label: "Permissions structured for access control" },
        { value: "3-4", label: "Features planned per sprint" },
        { value: "8-10", label: "Tasks coordinated per sprint" },
        { value: "~5", label: "Bugs found per sprint before UAT" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "I bridge requirements, product logic, and system clarity.",
      body:
        "I’m Hoàng, a Product/System Business Analyst profile based in Hanoi. I work best where unclear requirements need to become structured flows, documentation, artifacts, and decisions that teams can actually build from.",
      points: [
        {
          title: "System-first thinking",
          description:
            "I like breaking complex features into flows, dependencies, states, permissions, and edge cases before jumping into solutions.",
        },
        {
          title: "Business-to-technical translation",
          description:
            "I work best between business, product, and technical teams — turning needs into functional documents, mockups, checklists, and backlog-ready items.",
        },
        {
          title: "Game direction",
          description:
            "Game Product and LiveOps are where I want to apply this product/system thinking next, especially in player-facing systems and live-service operations.",
        },
      ],
      abstractCard: {
        eyebrow: "Working profile",
        title: "BA / Product / Systems",
        lines: ["Requirement clarity", "Flow mapping", "Permission logic", "Delivery readiness"],
      },
      educationLabel: "Education",
      education: {
        school: "VNU International School, Vietnam National University, Hanoi",
        degree: "Bachelor of Business Data Analytics",
        period: "2021-2025",
      },
    },
    sections: {
      caseStudies: {
        eyebrow: "Featured Case Studies",
        title: "Requirement clarity shown through real product artifacts.",
        description:
          "These cases focus on flow logic, system behavior, permissions, and delivery-ready artifacts rather than decorative portfolio work.",
      },
      projects: {
        eyebrow: "Selected Projects",
        title: "Supporting evidence across product flow, analytics, and research depth.",
        description:
          "Projects add context around product thinking, KPI logic, and structured analysis without shifting the portfolio into a pure data profile.",
      },
      experience: {
        eyebrow: "Experience Snapshot",
        title: "Practical Product/System BA evidence across fintech, transformation, and operations.",
        description:
          "The emphasis is current evidence: flows, documentation, backlog coordination, permission logic, testing, and stakeholder alignment. Associate PM/Product Operations is a secondary direction built from this base.",
      },
    },
    caseStudyLabels: {
      eyebrow: "Case Study",
      context: "Context",
      problem: "Problem",
      role: "My Role",
      keyDecisions: "Key Decisions / Tradeoffs",
      outcomeLearning: "Outcome / Learning",
      process: "Process",
      deliveredArtifacts: "Delivered Artifacts",
      delivered: "Delivered",
      impact: "Product/System Impact",
      skills: "Skills Demonstrated",
      viewDetails: "View details",
      hideDetails: "Hide details",
      sanitized: "Sanitized",
      matrixTitle: "Role-permission matrix",
      matrixMeta: "21 roles / ~400 permissions",
    },
    caseStudies: [
      {
        title: "Omnichannel AI Chatbot / API Integration Flow",
        mainPreview: {
          src: assets.chatbotJourney,
          previewSrc: assetPreviews.chatbotJourney,
          alt: "Sanitized Zalo OA chatbot journey flow used to clarify channel and system behavior",
          title: "Zalo OA chatbot journey flow",
          caption: "Main flow preview",
        },
        detailPreview: {
          src: assets.chatbotFeedback,
          previewSrc: assetPreviews.chatbotFeedback,
          alt: "Sanitized chatbot feedback and rating flow detail",
          title: "Feedback and rating flow",
          caption: "Expanded detail preview",
        },
        context:
          "Vega Fintech work across AI/customer-service modules where multiple channels and platform constraints needed to be translated into implementation-ready logic.",
        problem:
          "The company needed to integrate an AI chatbot across multiple channels (Zalo, web, internal) but had no API strategy, flow documentation, or stakeholder alignment.",
        role:
          "Business Analyst / Product flow designer — responsible for requirement analysis, API research, user flow mapping, functional documentation, and stakeholder clarification.",
        keyDecisions: [
          "Researched and documented OAuth 2.0 flows, webhook event triggers, and permission handling across channels.",
          "Designed user interaction flows, trigger logic, and conversation state transitions.",
          "Created feature mockups for stakeholder review and coordinated requirement alignment across product, engineering, and business teams.",
        ],
        outcomeLearning:
          "Delivered complete flow documents and feature specifications that unblocked engineering to begin implementation. Reduced ambiguity in cross-team handoffs.",
        process: [
          "Read API documentation for OAuth, webhook, permission scope, and event trigger logic.",
          "Mapped channel-to-system behavior so business expectations could be checked against technical constraints.",
          "Clarified ambiguous interaction states with stakeholders before Dev handoff.",
        ],
        delivered:
          "OAuth/webhook/event-trigger research, integration flows, feature logic, mockup support, documentation.",
        artifacts: ["API research notes", "Integration flow", "Functional requirement notes", "Mockup support"],
        impact:
          "Reduced ambiguity for handoff, clarified technical-business expectations, and supported implementation planning.",
        skills: ["API research", "System flow", "BA documentation", "Stakeholder alignment"],
      },
      {
        title: "AI Cash Flow Forecasting System & Backlog Management",
        mainPreview: {
          src: assets.cdpAutomationFlow,
          previewSrc: assetPreviews.cdpAutomationFlow,
          alt: "Sanitized CDP automation flow map showing trigger and flow logic",
          title: "CDP automation flow map",
          caption: "Main flow preview",
        },
        detailPreview: {
          src: assets.cdpFlowStates,
          previewSrc: assetPreviews.cdpFlowStates,
          alt: "Sanitized CDP flow management state screens",
          title: "CDP flow management states",
          caption: "Expanded detail preview",
        },
        context:
          "Vega Fintech cash flow forecasting product involving AI predictive models and financial stakeholder requirements.",
        problem:
          "The team was building a cash flow forecasting system with AI components but lacked a structured requirement pipeline, backlog structure, or sprint process.",
        role: "Project Management Collaborator / Business Analyst — responsible for requirements translation, backlog management, sprint planning, testing, and pre-UAT release tracking.",
        keyDecisions: [
          "Translated complex financial stakeholder requirements into functional specifications for the engineering team.",
          "Coordinated with the AI Team Lead to align machine learning model outputs with product expectations and business logic.",
          "Managed the product backlog, structured sprint planning, and established pre-UAT testing and bug tracking.",
        ],
        outcomeLearning:
          "Established a repeatable sprint delivery process and significantly improved requirement clarity between business stakeholders and engineering.",
        process: [
          "Conducted requirement elicitation sessions with financial and business stakeholders.",
          "Mapped predictive model output requirements with the AI team lead.",
          "Structured user stories, backlog items, and acceptance criteria in Jira.",
          "Created Dev testing checklists and validated features before UAT release.",
        ],
        delivered: "Product backlog, user stories, functional requirements documentation, and testing checklists.",
        artifacts: ["Functional requirements spec", "Sprint planning backlog", "Dev testing checklists", "Pre-UAT release tracker"],
        impact:
          "Streamlined cross-team development cycles, reduced requirement ambiguity, and ensured high-quality releases before UAT.",
        skills: ["Backlog management", "Sprint coordination", "Requirements translation", "Testing & bug tracking", "Stakeholder alignment"],
      },
      {
        title: "Permission Matrix for Internal Operations System",
        context:
          "Internal operations logic for a system with many user roles and permission-sensitive workflows.",
        problem:
          "The internal platform had no permission framework. Needed a model covering 21 user roles and ~400 permission entries with clear conflict resolution rules.",
        role: "Business Analyst / System analyst — responsible for permission logic analysis, role mapping, matrix design, and validation support.",
        keyDecisions: [
          "Designed the full permission matrix (21 roles, ~400 entries) with clear conflict resolution rules.",
          "Defined edge cases, role inheritance logic, and conflict resolution rules.",
          "Tracked issue lifecycle on Jira; consolidated stakeholder feedback into requirement updates.",
        ],
        outcomeLearning:
          "Delivered permission specification that served as the single source of truth for engineering during implementation.",
        process: [
          "Grouped roles and permissions into a matrix structure that could be reviewed by stakeholders.",
          "Checked consistency across role behavior, permission scope, and operational impact.",
          "Supported validation so access-control expectations were explicit before implementation.",
        ],
        delivered: "Permission matrix for 21 roles and around 400 permissions.",
        artifacts: ["Role-permission matrix", "Permission logic notes", "Validation support"],
        impact: "Improved access-control clarity and system governance.",
        skills: ["System thinking", "Permission design", "Operational logic", "Edge case analysis"],
      },
    ],
    projectProof: {
      eyebrow: "Product UI Proof",
      title: "Real artifacts behind the product story.",
      description:
        "These sanitized previews show product UI, reporting, and operations artifacts as evidence of practical BA/Product work.",
      images: [
        {
          src: assets.cdpCampaignList,
          previewSrc: assetPreviews.cdpCampaignList,
          alt: "Sanitized CDP campaign list product UI screenshot",
          title: "CDP campaign list UI",
          caption: "Feature screen / operations proof",
        },
        {
          src: assets.cdpAutomationFlow,
          previewSrc: assetPreviews.cdpAutomationFlow,
          alt: "Sanitized CDP automation flow map showing trigger and delivery logic",
          title: "CDP automation flow map",
          caption: "Flow-builder / automation proof",
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
        type: "UX/Product Design Project",
        positioning:
          "A product-flow project focused on turning user needs into screen structure, interaction logic, and a working prototype.",
        contributions: ["User persona", "Logical flow", "Figma prototype", "Multi-platform UX logic"],
        relevance:
          "Supports Associate PM/Product Operations direction by showing how ambiguous user needs become concrete screens, journeys, and interaction decisions.",
        tags: ["Product flow", "Prototype", "UX logic", "User journey"],
      },
      {
        title: "Sales Performance Dashboard",
        type: "Data Analytics Project",
        positioning:
          "A structured analytics project showing data modeling discipline and stakeholder-facing KPI clarity.",
        contributions: ["ETL pipeline", "Star schema", "KPI dashboard", "Power BI visualization"],
        relevance:
          "Shows analytical grounding for KPI thinking, reporting clarity, and stakeholder-facing business metrics.",
        tags: ["ETL", "KPI", "Data model", "Power BI"],
      },
      {
        title: "Market Forecasting & Portfolio Optimization Thesis",
        type: "Analytical / Academic Research",
        positioning:
          "Can ML models outperform traditional methods in forecasting market trends and optimizing investment portfolios across 15 global companies (2020–2024)? Sole researcher and implementer.",
        contributions: [
          "Collected and processed 4 years of market data via yfinance and Macrotrends",
          "Implemented and compared 7 forecasting models: ARIMA, GARCH, Random Forest, XGBoost, SVM, LSTM, Transformer",
          "Implemented 3 portfolio strategies: Mean-Variance (Markowitz), Black-Litterman, Reinforcement Learning (PPO)",
          "Validated results with paired t-tests; visualized Sharpe ratios and drawdown across strategies",
        ],
        relevance:
          "Demonstrates ability to frame research questions, manage ambiguous data problems, make evidence-based decisions, and communicate quantitative findings clearly. Deep learning models (LSTM, Transformer) outperformed on volatile periods; RL-based rebalancing showed more adaptive behavior than static Markowitz under stress scenarios.",
        tags: ["Research framing", "Model comparison", "Time-series", "Decision reasoning", "Python"],
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
          "Core experience where I practiced BA/Product work across AI, customer-service, fintech, and CDP systems — translating unclear needs into flows, mockups, documentation, backlog items, and QA-ready checklists.",
        proofLabel: "What it proves",
        proof:
          "Practical Product/System BA ability in system-heavy contexts: clarifying behavior, structuring handoff artifacts, coordinating work, and checking logic before UAT.",
        highlights: [
          { value: "65+", label: "screens / feature states" },
          { value: "21 / ~400", label: "roles and permissions" },
          { value: "3-4", label: "features planned per sprint" },
          { value: "8-10", label: "tasks coordinated per sprint" },
          { value: "~5", label: "bugs found before UAT" },
        ],
        evidence: [
          "Designed end-to-end user flows and Figma mockups for around 65 screens/features across CDP customer-service modules.",
          "Managed backlog and sprint planning for 3-4 features per sprint and 8-10 tasks.",
          "Built Dev testing checklists, found around 5 bugs per sprint before UAT, and mapped 21 roles / ~400 permissions.",
        ],
      },
      {
        company: "CMC Technology & Solutions",
        role: "Data & Business Analyst Intern",
        period: "09/2024 - 12/2024",
        context: "Digital transformation projects across business and technical teams.",
        evidence: [
          "Supported requirement gathering and documentation for transformation initiatives.",
          "Worked with BRD, SRS, process mapping, system analysis, and cloud data flow.",
          "Practiced technical-business communication across banking, education, and construction contexts.",
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
      eyebrow: "Product Notes",
      title: "Writing sample for structured product thinking.",
      description:
        "A lightweight note signal, not a published blog. It shows how I explain BA/Product reasoning in a concise, reviewable format.",
      noteLabel: "Writing sample / Draft note",
      noteTitle: "How I turn vague requirements into product flows",
      notePreview:
        "A short note on how I clarify context, map flows, identify edge cases, and turn product logic into artifacts that teams can discuss and build from.",
      availability: "Available on request",
    },
    gameDirection: {
      eyebrow: "Game direction",
      title: "Games are where I want to apply product/system thinking next.",
      body:
        "Game Product and LiveOps are a future direction, not the main evidence base yet. I’m interested in how different genres create motivation, competition, progression, and long-term engagement, especially across MOBA, FPS, battle royale, auto-battler, card games, strategy games, and live-service multiplayer systems.",
      genresTitle: "Game genres and systems I’m interested in",
      gamesTitle: "Games I follow or play",
      genres: [
        "MOBA",
        "FPS",
        "Battle royale",
        "Auto-battler",
        "Card games",
        "Strategy games",
        "Competitive multiplayer systems",
        "Ranked systems",
        "Live-service events",
        "Progression and reward loops",
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
      eyebrow: "Reach out",
      title: "Let’s talk about product systems, BA/Product roles, or future Game Product/LiveOps direction.",
      emailLabel: "Send an email →",
      linkedinLabel: "LinkedIn",
      cvLabel: "Download CV",
    },
    footer: {
      location: "Hanoi, Vietnam",
      techStack: "Built with React, TypeScript, and Tailwind CSS",
      vibeNote:
        "Built through vibe coding — combining product thinking, AI-assisted development, and manual refinement.",
    },
  },
  vi: {
    navigation: [
      { label: "Trang chủ", href: "#home" },
      { label: "Giới thiệu", href: "#about" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Dự án", href: "#projects" },
      { label: "Kinh nghiệm", href: "#experience" },
      { label: "Cách tiếp cận", href: "#skills" },
      { label: "Ghi chú", href: "#product-notes" },
      { label: "Định hướng game", href: "#game-direction" },
      { label: "Liên hệ", href: "#contact" },
    ],
    personal: {
      name: "Nguyễn Đức Minh Hoàng",
      shortRole: "Product/System Business Analyst",
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
      openArtifact: "Xem artifact",
      closeArtifact: "Đóng preview artifact",
      zoomInArtifact: "Phóng to",
      zoomOutArtifact: "Thu nhỏ",
      resetArtifactZoom: "Đặt lại zoom",
    },
    hero: {
      roleLine:
        "Business Analyst định hướng Product/System, tập trung biến yêu cầu mơ hồ thành flow, tài liệu và artifact sẵn sàng triển khai.",
      headline: "Biến sự mơ hồ thành product flow rõ ràng.",
      intro:
        "Tôi biến những yêu cầu mơ hồ thành tài liệu sẵn sàng để phát triển — từ product flow, system spec đến stakeholder alignment.",
      focusLine: "Trọng tâm hiện tại: Product/System BA. Hướng phát triển gần: Associate PM và Product Operations. Định hướng dài hạn: Game Product và LiveOps.",
      artifactAria: "Các preview artifact sản phẩm đã chọn",
      ctas: {
        caseStudies: "Xem Case Studies",
        cv: "Tải CV",
        linkedin: "LinkedIn",
      },
      artifacts: [
        {
          type: "image",
          title: "Flow management states",
          meta: "Feature states",
          priority: true,
          image: {
            src: assets.cdpFlowStates,
            previewSrc: assetPreviews.cdpFlowStates,
            alt: "Các màn hình trạng thái CDP flow management đã được làm sạch, thể hiện feature-state và operational logic",
            title: "CDP flow management states",
            caption: "Bằng chứng chính về feature-state clarity và operational logic.",
          },
        },
        {
          type: "image",
          title: "Chatbot journey",
          meta: "System flow",
          image: {
            src: assets.chatbotJourney,
            previewSrc: assetPreviews.chatbotJourney,
            alt: "Sơ đồ user journey chatbot Zalo OA đã được làm sạch",
            title: "Chatbot Zalo journey flow",
            caption: "Artifact bổ trợ cho channel journey và interaction logic.",
          },
        },
        {
          type: "image",
          title: "Report detail",
          meta: "Operations view",
          image: {
            src: assets.cdpFlowReport,
            previewSrc: assetPreviews.cdpFlowReport,
            alt: "Ảnh chụp giao diện CDP flow report detail đã được làm sạch",
            title: "CDP flow report detail",
            caption: "Artifact bổ trợ cho reporting và operational visibility.",
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
        { value: "65+", label: "Màn hình / trạng thái tính năng Figma trong các module CDP" },
        { value: "21", label: "Vai trò được mapping trong permission logic" },
        { value: "~400", label: "Quyền hạn được cấu trúc cho access control" },
        { value: "3-4", label: "Feature được lập kế hoạch mỗi sprint" },
        { value: "8-10", label: "Task được điều phối mỗi sprint" },
        { value: "~5", label: "Bug phát hiện mỗi sprint trước UAT" },
      ],
    },
    about: {
      eyebrow: "Giới thiệu",
      title: "Tôi kết nối requirement, product logic và system clarity.",
      body:
        "Tôi là Hoàng, định hướng Product/System Business Analyst tại Hà Nội. Tôi làm tốt nhất khi requirement chưa rõ ràng cần được chuyển thành flow, tài liệu, artifact và quyết định đủ rõ để team có thể triển khai.",
      points: [
        {
          title: "Tư duy hệ thống",
          description:
            "Tôi thường tách feature phức tạp thành flow, dependency, state, permission và edge case trước khi đi vào solution.",
        },
        {
          title: "Cầu nối business và technical team",
          description:
            "Tôi làm tốt ở vị trí giữa business, product và technical team — chuyển nhu cầu thành tài liệu chức năng, mockup, checklist và backlog item rõ ràng.",
        },
        {
          title: "Định hướng game",
          description:
            "Game Product và LiveOps là nơi tôi muốn áp dụng tư duy product/system này trong bước tiếp theo, đặc biệt với player-facing systems và live-service operations.",
        },
      ],
      abstractCard: {
        eyebrow: "Working profile",
        title: "BA / Product / Systems",
        lines: ["Requirement clarity", "Flow mapping", "Permission logic", "Delivery readiness"],
      },
      educationLabel: "Học vấn",
      education: {
        school: "VNU International School, Vietnam National University, Hanoi",
        degree: "Bachelor of Business Data Analytics",
        period: "2021-2025",
      },
    },
    sections: {
      caseStudies: {
        eyebrow: "Case Studies nổi bật",
        title: "Requirement clarity được thể hiện qua artifact sản phẩm thật.",
        description:
          "Các case này tập trung vào flow logic, system behavior, permission và artifact sẵn sàng handoff thay vì portfolio decoration.",
      },
      projects: {
        eyebrow: "Dự án chọn lọc",
        title: "Bằng chứng bổ trợ về product flow, analytics và chiều sâu phân tích.",
        description:
          "Các dự án bổ sung góc nhìn về product thinking, KPI logic và phân tích có cấu trúc, nhưng không biến portfolio thành pure data profile.",
      },
      experience: {
        eyebrow: "Kinh nghiệm tiêu biểu",
        title: "Bằng chứng Product/System BA thực tế qua fintech, chuyển đổi số và vận hành.",
        description:
          "Trọng tâm là evidence hiện tại: flow, documentation, backlog coordination, permission logic, testing và stakeholder alignment. Associate PM/Product Operations là hướng phát triển thứ hai từ nền tảng này.",
      },
    },
    caseStudyLabels: {
      eyebrow: "Case Study",
      context: "Bối cảnh",
      problem: "Vấn đề",
      role: "Vai trò của tôi",
      keyDecisions: "Quyết định / tradeoff chính",
      outcomeLearning: "Kết quả / bài học",
      process: "Quy trình xử lý",
      deliveredArtifacts: "Artifact đã bàn giao",
      delivered: "Kết quả bàn giao",
      impact: "Tác động tới product/system",
      skills: "Kỹ năng thể hiện",
      viewDetails: "Xem chi tiết",
      hideDetails: "Ẩn chi tiết",
      sanitized: "Đã làm sạch",
      matrixTitle: "Role-permission matrix",
      matrixMeta: "21 vai trò / ~400 quyền hạn",
    },
    caseStudies: [
      {
        title: "Omnichannel AI Chatbot / API Integration Flow",
        mainPreview: {
          src: assets.chatbotJourney,
          previewSrc: assetPreviews.chatbotJourney,
          alt: "Flow chatbot Zalo OA đã được làm sạch, dùng để làm rõ hành vi giữa channel và system",
          title: "Zalo OA chatbot journey flow",
          caption: "Preview flow chính",
        },
        detailPreview: {
          src: assets.chatbotFeedback,
          previewSrc: assetPreviews.chatbotFeedback,
          alt: "Flow feedback và rating của chatbot đã được làm sạch",
          title: "Feedback and rating flow",
          caption: "Preview chi tiết mở rộng",
        },
        context:
          "Công việc tại Vega Fintech trong các module AI/customer-service, nơi nhiều channel và giới hạn nền tảng cần được chuyển hóa thành logic sẵn sàng triển khai.",
        problem:
          "Hệ thống chatbot đa kênh cần logic tích hợp, permission handling, event trigger và interaction flow nhất quán.",
        role:
          "Requirement analysis, API research, user flow mapping, functional documentation và stakeholder clarification.",
        keyDecisions: [
          "Tách riêng channel behavior, OAuth/webhook constraints, event trigger và trạng thái tương tác để từng phần có thể được review rõ ràng.",
          "Giữ flow đủ dễ hiểu cho business nhưng vẫn giữ chi tiết kỹ thuật cần thiết cho trao đổi với Dev.",
        ],
        outcomeLearning:
          "Artifact giúp giảm ambiguity trong thảo luận và handoff, đặc biệt quanh event trigger, permission và trạng thái feedback của user.",
        process: [
          "Đọc tài liệu API về OAuth, webhook, permission scope và event trigger logic.",
          "Map hành vi giữa channel và system để kiểm tra kỳ vọng business với ràng buộc kỹ thuật.",
          "Làm rõ các trạng thái tương tác còn mơ hồ với stakeholder trước Dev handoff.",
        ],
        delivered:
          "OAuth/webhook/event-trigger research, integration flows, feature logic, mockup support và documentation.",
        artifacts: ["API research notes", "Integration flow", "Functional requirement notes", "Mockup support"],
        impact:
          "Giảm ambiguity khi handoff, làm rõ kỳ vọng technical-business và hỗ trợ planning triển khai.",
        skills: ["API research", "System flow", "BA documentation", "Stakeholder alignment"],
      },
      {
        title: "Hệ thống Dự báo Dòng tiền AI & Quản lý Backlog",
        mainPreview: {
          src: assets.cdpAutomationFlow,
          previewSrc: assetPreviews.cdpAutomationFlow,
          alt: "Sơ đồ CDP automation flow đã được làm sạch, thể hiện trigger và flow logic",
          title: "CDP automation flow map",
          caption: "Preview flow chính",
        },
        detailPreview: {
          src: assets.cdpFlowStates,
          previewSrc: assetPreviews.cdpFlowStates,
          alt: "Các màn hình trạng thái CDP flow management đã được làm sạch",
          title: "CDP flow management states",
          caption: "Preview chi tiết mở rộng",
        },
        context:
          "Sản phẩm dự báo dòng tiền tại Vega Fintech tích hợp các module dự đoán bằng AI và yêu cầu nghiệp vụ tài chính phức tạp.",
        problem:
          "Đội ngũ phát triển hệ thống dự báo dòng tiền AI nhưng thiếu một quy trình pipeline yêu cầu, cấu trúc backlog hoặc quy trình sprint rõ ràng.",
        role: "Project Management Collaborator / Business Analyst — chịu trách nhiệm dịch yêu cầu, quản lý backlog, lập kế hoạch sprint, testing và theo dõi release trước UAT.",
        keyDecisions: [
          "Dịch các yêu cầu phức tạp từ stakeholder tài chính thành functional spec cụ thể cho đội ngũ kỹ thuật.",
          "Làm việc chặt chẽ với AI Team Lead để khớp đầu ra của mô hình máy học với kỳ vọng thực tế của sản phẩm.",
          "Quản lý backlog sản phẩm, cấu trúc kế hoạch sprint và thiết lập quy trình kiểm thử và theo dõi lỗi trước UAT.",
        ],
        outcomeLearning:
          "Xây dựng thành công quy trình sprint bàn giao lặp lại hiệu quả, tăng tính rõ ràng của yêu cầu giữa kinh doanh và kỹ thuật.",
        process: [
          "Thực hiện các buổi làm rõ yêu cầu với stakeholder tài chính và kinh doanh.",
          "Định hình tiêu chí nghiệm thu của mô hình dự báo cùng AI team lead.",
          "Cấu trúc user story, backlog item và tiêu chí chấp nhận trên Jira.",
          "Xây dựng checklists kiểm thử cho Dev và xác thực tính năng trước khi chạy UAT.",
        ],
        delivered: "Backlog sản phẩm, đặc tả yêu cầu chức năng và checklists kiểm thử.",
        artifacts: ["Đặc tả yêu cầu chức năng", "Backlog & kế hoạch sprint", "Checklist kiểm thử", "Release tracker trước UAT"],
        impact:
          "Tối ưu hóa chu kỳ phát triển liên phòng ban, loại bỏ sự mơ hồ trong bàn giao và đảm bảo chất lượng release trước UAT.",
        skills: ["Backlog management", "Sprint coordination", "Translate requirements", "Testing & bug tracking", "Stakeholder alignment"],
      },
      {
        title: "Permission Matrix for Internal Operations System",
        context:
          "Logic vận hành nội bộ cho một hệ thống có nhiều user role và các workflow nhạy cảm về quyền truy cập.",
        problem:
          "Nền tảng nội bộ chưa có khung phân quyền nhất quán. Cần thiết kế một mô hình quản lý quyền truy cập bao gồm 21 vai trò (role) và khoảng 400 mục quyền hạn (permission entries) với các quy tắc giải quyết xung đột rõ ràng.",
        role: "Business Analyst / System Analyst — chịu trách nhiệm phân tích permission logic, role mapping, thiết kế ma trận phân quyền và hỗ trợ kiểm thử logic phân quyền.",
        keyDecisions: [
          "Thiết kế ma trận phân quyền hoàn chỉnh (21 roles, ~400 entries) với cơ chế giải quyết xung đột quyền hạn rõ ràng.",
          "Xác định rõ các trường hợp biên (edge case), logic kế thừa quyền (role inheritance) và các quy tắc xung đột.",
          "Quản lý và theo dõi vòng đời ticket trên Jira; tổng hợp phản hồi vận hành từ stakeholder để cập nhật đặc tả yêu cầu.",
        ],
        outcomeLearning:
          "Bàn giao đặc tả phân quyền chi tiết làm single source of truth giúp kỹ thuật triển khai chính xác và rút ngắn thời gian phát triển.",
        process: [
          "Nhóm các role và permission thành cấu trúc ma trận để các bên liên quan tiện xem xét.",
          "Kiểm tra tính nhất quán chéo giữa hành vi vai trò, phạm vi quyền hạn và tác động vận hành.",
          "Xây dựng và làm rõ các logic thừa kế, xung đột quyền trước khi chuyển giao cho đội phát triển.",
        ],
        delivered: "Permission matrix cho 21 role và khoảng 400 permission.",
        artifacts: ["Role-permission matrix", "Permission logic notes", "Validation support"],
        impact: "Cải thiện độ rõ ràng của access-control và system governance.",
        skills: ["System thinking", "Permission design", "Operational logic", "Edge case analysis"],
      },
    ],
    projectProof: {
      eyebrow: "Product UI Proof",
      title: "Những artifact thật phía sau câu chuyện sản phẩm.",
      description:
        "Các preview đã làm sạch này thể hiện product UI, reporting và operations artifacts như bằng chứng của BA/Product work thực tế.",
      images: [
        {
          src: assets.cdpCampaignList,
          previewSrc: assetPreviews.cdpCampaignList,
          alt: "Ảnh chụp UI danh sách campaign CDP đã được làm sạch thông tin nhạy cảm",
          title: "CDP campaign list UI",
          caption: "Bằng chứng feature screen / operations",
        },
        {
          src: assets.cdpAutomationFlow,
          previewSrc: assetPreviews.cdpAutomationFlow,
          alt: "Sơ đồ CDP automation flow đã được làm sạch, thể hiện trigger và delivery logic",
          title: "CDP automation flow map",
          caption: "Bằng chứng flow-builder / automation",
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
        type: "UX/Product Design Project",
        positioning:
          "Dự án product-flow tập trung vào việc chuyển user needs thành screen structure, interaction logic và prototype.",
        contributions: ["User persona", "Logical flow", "Figma prototype", "Multi-platform UX logic"],
        relevance:
          "Hỗ trợ định hướng Associate PM/Product Operations bằng cách cho thấy cách nhu cầu mơ hồ trở thành screen, journey và interaction decision cụ thể.",
        tags: ["Product flow", "Prototype", "UX logic", "User journey"],
      },
      {
        title: "Sales Performance Dashboard",
        type: "Data Analytics Project",
        positioning:
          "Dự án analytics có cấu trúc, thể hiện kỷ luật data modeling và khả năng làm rõ KPI cho stakeholder.",
        contributions: ["ETL pipeline", "Star schema", "KPI dashboard", "Power BI visualization"],
        relevance:
          "Thể hiện nền tảng phân tích cho KPI thinking, reporting clarity và business metrics phục vụ stakeholder.",
        tags: ["ETL", "KPI", "Data model", "Power BI"],
      },
      {
        title: "Market Forecasting & Portfolio Optimization Thesis",
        type: "Analytical Research Project",
        positioning:
          "Một dự án nghiên cứu phân tích so sánh cách các mô hình dự báo và phương pháp tối ưu danh mục có thể hỗ trợ ra quyết định đầu tư.",
        contributions: [
          "Định khung câu hỏi nghiên cứu có cấu trúc",
          "So sánh mô hình ARIMA, GARCH, Random Forest, XGBoost, SVM, LSTM và Transformer",
          "So sánh tối ưu danh mục với Markowitz, Black-Litterman và Reinforcement Learning/PPO",
          "Time-series reasoning và ra quyết định trong điều kiện không chắc chắn",
        ],
        relevance:
          "Bổ sung bằng chứng về analytical discipline, model comparison và business reasoning, trong khi vẫn giữ trọng tâm portfolio là Product/System BA.",
        tags: ["Research framing", "Model comparison", "Time-series", "Decision reasoning"],
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
          "Kinh nghiệm chính nơi tôi thực hành BA/Product work qua các hệ thống AI, CSKH, fintech và CDP — chuyển nhu cầu chưa rõ ràng thành flow, mockup, tài liệu, backlog item và checklist hỗ trợ QA/UAT.",
        proofLabel: "Điều kinh nghiệm này chứng minh",
        proof:
          "Năng lực Product/System BA trong bối cảnh system-heavy: làm rõ behavior, cấu trúc artifact handoff, điều phối công việc và kiểm tra logic trước UAT.",
        highlights: [
          { value: "65+", label: "màn hình / trạng thái tính năng" },
          { value: "21 / ~400", label: "vai trò và quyền hạn" },
          { value: "3-4", label: "feature được plan mỗi sprint" },
          { value: "8-10", label: "task được điều phối mỗi sprint" },
          { value: "~5", label: "bug phát hiện trước UAT" },
        ],
        evidence: [
          "Thiết kế end-to-end user flows và Figma mockups cho khoảng 65 screens/features trong các module CDP customer-service.",
          "Quản lý backlog và sprint planning cho 3-4 features mỗi sprint và 8-10 tasks.",
          "Xây Dev testing checklists, phát hiện khoảng 5 bugs mỗi sprint trước UAT và map 21 roles / ~400 permissions.",
        ],
      },
      {
        company: "CMC Technology & Solutions",
        role: "Data & Business Analyst Intern",
        period: "09/2024 - 12/2024",
        context: "Digital transformation projects giữa business và technical teams.",
        evidence: [
          "Hỗ trợ requirement gathering và documentation cho các sáng kiến chuyển đổi số.",
          "Làm việc với BRD, SRS, process mapping, system analysis và cloud data flow.",
          "Rèn luyện technical-business communication trong bối cảnh banking, education và construction.",
        ],
      },
      {
        company: "British Council Vietnam",
        role: "Multi-department Operations Support",
        period: "08/2021 - 12/2025",
        context: "Môi trường service operations áp lực cao với nhiều internal stakeholders.",
        evidence: [
          "Điều phối operations, inventory và data workflows giữa nhiều bộ phận.",
          "Xử lý các vấn đề thực tế nơi customer experience và operational timing có ảnh hưởng trực tiếp.",
          "Xây dựng thói quen stakeholder communication và hiểu constraints của frontline execution.",
        ],
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
          description: "Hiểu business goal, người dùng, constraint và tiêu chí thành công trước khi đi vào solution.",
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
          title: "Align và iterate",
          description:
            "Dùng artifact để align stakeholder, hỗ trợ dev handoff và refine qua review hoặc QA feedback.",
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
          body: "Tôi đọc tài liệu kỹ thuật, API, hiểu giới hạn hệ thống để dịch mục tiêu kinh doanh thành đặc tả rõ ràng cho dev.",
        },
        {
          title: "Quyết định dựa trên dữ liệu",
          body: "Tôi sử dụng dữ liệu, tư duy phân tích có cấu trúc và so sánh định lượng để bảo vệ định hướng sản phẩm.",
        },
        {
          title: "Đồng thuận stakeholder",
          body: "Tôi tạo ra luồng flow trực quan, mockup và checklist chi tiết để kết nối và thống nhất ý kiến giữa các bên.",
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
      eyebrow: "Ghi chú sản phẩm",
      title: "Mẫu viết thể hiện tư duy sản phẩm có cấu trúc.",
      description:
        "Một tín hiệu viết nhẹ, không phải bài blog đã xuất bản. Phần này cho thấy cách tôi giải thích BA/Product reasoning ngắn gọn và dễ review.",
      noteLabel: "Mẫu viết / Ghi chú nháp",
      noteTitle: "Cách tôi biến yêu cầu mơ hồ thành product flow rõ ràng",
      notePreview:
        "Một ghi chú ngắn về cách tôi làm rõ context, map flow, xác định edge case và chuyển product logic thành artifact để team có thể thảo luận và triển khai.",
      availability: "Có thể gửi khi cần",
    },
    gameDirection: {
      eyebrow: "Định hướng game",
      title: "Game là nơi tôi muốn áp dụng product/system thinking trong bước tiếp theo.",
      body:
        "Game Product và LiveOps là định hướng tương lai, chưa phải evidence base chính hiện tại. Tôi quan tâm đến cách các thể loại game tạo động lực, cạnh tranh, progression và long-term engagement, đặc biệt trong MOBA, FPS, battle royale, auto-battler, card games, strategy games và live-service multiplayer systems.",
      genresTitle: "Thể loại và hệ thống game tôi quan tâm",
      gamesTitle: "Một số game tôi theo dõi hoặc chơi",
      genres: [
        "MOBA",
        "FPS",
        "Battle royale",
        "Auto-battler",
        "Card games",
        "Strategy games",
        "Competitive multiplayer systems",
        "Ranked systems",
        "Live-service events",
        "Progression và reward loops",
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
      eyebrow: "Kết nối",
      title: "Hãy trao đổi về product systems, BA/Product roles hoặc định hướng Game Product/LiveOps.",
      emailLabel: "Gửi email →",
      linkedinLabel: "LinkedIn",
      cvLabel: "Tải CV",
    },
    footer: {
      location: "Hà Nội, Việt Nam",
      techStack: "Xây dựng bằng React, TypeScript và Tailwind CSS",
      vibeNote:
        "Được xây dựng bằng vibe coding — kết hợp tư duy sản phẩm, AI-assisted development và tinh chỉnh thủ công.",
    },
  },
};
