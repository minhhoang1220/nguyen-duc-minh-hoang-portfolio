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
  summary: string;
  evidence: string[];
  mainPreview?: AssetImage;
  detailPreview?: AssetImage;
  visualType?: "permission" | "timeline";
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
  image: AssetImage;
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
    loadingArtifact: string;
  };
  hero: {
    roleLine: string;
    headline: string;
    intro: string;
    focusItems: string[];
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
  immerseVietnamOverview: "/assets/immersevietnam-website-overview.png",
  thesisPortfolioOverview: "/assets/thesis-portfolio-optimization-overview.png",
  dashboardRevenueOverview: "/assets/dashboard-revenue-overview.png",
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
      shortRole: "Game Product / LiveOps-oriented Product/System BA",
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
      loadingArtifact: "Loading high-resolution artifact",
    },
    hero: {
      roleLine:
        "Game Product / LiveOps-oriented Product/System BA — turning complex product logic into clear flows, artifacts, and decisions teams can build from.",
      headline: "Turning ambiguity into clear product flows.",
      intro:
        "I use Product/System BA experience across flow logic, documentation, backlog coordination, and QA-ready artifacts as a proof base for moving toward Game Product, LiveOps, and Game Operations.",
      focusItems: [
        "Primary direction: Game Product / LiveOps / Game Operations",
        "Proof base: Product / System BA experience",
        "Fallback path: Associate PM / Product Operations",
      ],
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
      title: "I bridge product systems, delivery clarity, and game-facing direction.",
      body:
        "I’m Hoàng, a Product/System BA based in Hanoi, aiming toward Game Product, LiveOps, and Game Operations. My current proof base is system-heavy BA/Product work: clarifying feature logic, mapping flows, structuring documentation, and helping teams move from ambiguity to implementation.",
      portrait: {
        src: "/assets/portrait-nguyen-duc-minh-hoang.jpg",
        alt: "Portrait of Nguyễn Đức Minh Hoàng",
        title: "Nguyễn Đức Minh Hoàng portrait",
        caption: "Hanoi, Vietnam",
      },
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
            "Game Product, LiveOps, and Game Operations are the direction I want to move toward next, supported by transferable flow, system, coordination, and analytical thinking.",
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
        eyebrow: "Supporting Projects",
        title: "Additional proof across UX, analytics, and research depth.",
        description:
          "These projects stay lighter than case studies. They show transferable skills: web/UX structure, KPI storytelling, and analytical decision support.",
      },
      experience: {
        eyebrow: "Experience Snapshot",
        title: "Practical Product/System BA evidence across fintech, transformation, and operations.",
        description:
          "This is the proof base behind the game direction: flows, documentation, backlog coordination, permission logic, testing, and stakeholder alignment in system-heavy products.",
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
      sanitized: "Sanitized",
      matrixTitle: "Role-permission matrix",
      matrixMeta: "21 roles / ~400 permissions",
    },
    caseStudies: [
      {
        title: "CDP Automation & Push Notification Flow",
        summary:
          "Mapped complex automation logic across triggers, segments, notification states, reporting behavior, and edge cases.",
        evidence: [
          "Clarified flow/state behavior before handoff",
          "Structured feature logic for stakeholder review",
          "Supported QA/UAT discussion with sanitized artifacts",
        ],
        mainPreview: {
          src: assets.cdpAutomationFlow,
          previewSrc: assetPreviews.cdpAutomationFlow,
          alt: "Sanitized CDP automation flow map showing trigger, segment, state, and notification logic",
          title: "CDP automation flow map",
          caption: "Main flow preview",
        },
        detailPreview: {
          src: assets.cdpFlowStates,
          previewSrc: assetPreviews.cdpFlowStates,
          alt: "Sanitized CDP flow management state screens",
          title: "CDP flow management states",
          caption: "Expanded state preview",
        },
        context:
          "CDP customer-service modules involving Automation Flow, App Push Notification, flow reporting, and feature-state management.",
        problem:
          "The feature logic was complex: triggers, segments, notification states, reporting behavior, and edge cases needed to be aligned before mockup and handoff.",
        role:
          "Product/System BA — responsible for user flow design, feature breakdown, Figma mockup support, edge case analysis, and Dev handoff preparation.",
        keyDecisions: [
          "Separated trigger, segment, action, state, and reporting behavior instead of treating automation as one generic screen flow.",
          "Used flow maps and state screens together so stakeholders could compare product behavior before implementation.",
          "Kept confidential data out of the artifact while preserving enough structure for QA/UAT discussion.",
        ],
        outcomeLearning:
          "The artifact reduced ambiguity for product discussion, helped stakeholders compare behavior across states, and created a clearer basis for Dev handoff and QA/UAT checks.",
        process: [
          "Mapped end-to-end user and system flow for automation and push notification behavior.",
          "Broke feature behavior into trigger, segment, state, notification, and reporting logic.",
          "Prepared mockup-ready requirements and edge-case notes for stakeholder review and Dev handoff.",
        ],
        delivered:
          "End-to-end flows and mockups as part of 65+ screens/features across CDP modules.",
        artifacts: ["Automation flow map", "Feature-state screens", "Figma mockups", "Dev testing checklist"],
        impact:
          "Helped clarify feature behavior, reduce handoff ambiguity, and create a more reliable basis for QA/UAT review.",
        skills: ["Product flow", "System logic", "CDP", "Automation", "Feature breakdown"],
      },
      {
        title: "AI Cash Flow Forecasting System & Backlog Management",
        summary:
          "Structured backlog, sprint planning, release tracking, and pre-UAT checks for an AI forecasting product without exposing confidential screens.",
        evidence: [
          "Translated financial requirements into backlog-ready items",
          "Used planning artifacts instead of sensitive product visuals",
          "Supported sprint coordination and QA readiness",
        ],
        visualType: "timeline",
        context:
          "Vega Fintech cash flow forecasting product involving AI predictive models, financial stakeholder requirements, and release coordination.",
        problem:
          "The work involved sensitive AI/financial logic that could not be shown publicly, while the team still needed clearer requirement structure, backlog handling, and pre-UAT coordination.",
        role: "Project Management Collaborator / Business Analyst — responsible for requirements translation, backlog management, sprint planning, testing, and pre-UAT release tracking.",
        keyDecisions: [
          "Used delivery planning and backlog artifacts rather than product screenshots to represent the work without exposing confidential forecasting logic.",
          "Translated financial stakeholder expectations into functional requirements and acceptance criteria for engineering discussion.",
          "Structured sprint planning, Dev testing checklists, and bug tracking so releases could be reviewed before UAT.",
        ],
        outcomeLearning:
          "Created a clearer delivery rhythm and reduced requirement ambiguity between business stakeholders, AI/product logic, and engineering execution.",
        process: [
          "Conducted requirement clarification with financial and business stakeholders.",
          "Aligned predictive model output expectations with the AI team lead and product requirements.",
          "Structured user stories, backlog items, and acceptance criteria for sprint planning.",
          "Created Dev testing checklists and validated features before UAT release.",
        ],
        delivered: "Product backlog, user stories, functional requirements documentation, testing checklists, and release tracking.",
        artifacts: ["Functional requirements spec", "Sprint planning backlog", "Dev testing checklists", "Pre-UAT release tracker"],
        impact:
          "Improved delivery coordination, made handoff expectations clearer, and created a repeatable basis for testing before UAT.",
        skills: ["Backlog management", "Sprint coordination", "Requirements translation", "Testing & bug tracking", "Stakeholder alignment"],
      },
      {
        title: "Permission Matrix for Internal Operations System",
        summary:
          "Created a role-permission structure to make access-control logic easier to validate before implementation.",
        evidence: [
          "Mapped 21 roles and ~400 permission entries",
          "Clarified inheritance, conflict, and edge-case logic",
          "Improved system governance discussion before build",
        ],
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
          src: assets.cdpFlowReport,
          previewSrc: assetPreviews.cdpFlowReport,
          alt: "Sanitized CDP flow report detail interface showing reporting and operational visibility",
          title: "CDP flow report detail",
          caption: "Reporting / analytics proof",
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
        image: {
          src: assets.immerseVietnamOverview,
          previewSrc: assetPreviews.immerseVietnamOverview,
          alt: "ImmerseVietnam website overview showing hero, navigation, and content sections",
          title: "ImmerseVietnam website overview",
          caption: "Web / UX structure",
        },
        positioning:
          "User-facing web/UX project showing page structure, content layout, and front-end implementation.",
        contributions: ["User persona", "Logical flow", "Figma prototype", "Content layout"],
        relevance:
          "Shows how user needs can become concrete navigation, screen structure, and content flow decisions.",
        tags: ["Product flow", "Prototype", "UX logic", "Content structure"],
      },
      {
        title: "Sales Performance Dashboard",
        type: "Data Analytics Project",
        image: {
          src: assets.dashboardRevenueOverview,
          previewSrc: assetPreviews.dashboardRevenueOverview,
          alt: "Revenue dashboard overview with KPI cards, revenue chart, treemap, and order tables",
          title: "Dashboard revenue overview",
          caption: "KPI / BI storytelling",
        },
        positioning:
          "BI/dashboard project showing KPI design, data storytelling, and operational analysis.",
        contributions: ["ETL pipeline", "Star schema", "KPI dashboard", "Power BI"],
        relevance:
          "Supports product/ops thinking by turning business performance into scan-ready metrics and visual signals.",
        tags: ["ETL", "KPI", "Data model", "Power BI"],
      },
      {
        title: "Market Forecasting & Portfolio Optimization Thesis",
        type: "Analytical / Academic Research",
        image: {
          src: assets.thesisPortfolioOverview,
          previewSrc: assetPreviews.thesisPortfolioOverview,
          alt: "Thesis portfolio optimization overview with investment strategy analysis and portfolio metrics",
          title: "Thesis portfolio optimization overview",
          caption: "Analytical decision support",
        },
        positioning:
          "Analytical research project showing model comparison, forecasting logic, portfolio optimization, and decision-making under uncertainty.",
        contributions: [
          "Model comparison",
          "Time-series forecasting",
          "Portfolio optimization",
          "Decision reasoning",
        ],
        relevance:
          "Adds analytical depth without shifting the portfolio away from Product/System BA and game-product direction.",
        tags: ["Research framing", "Model comparison", "Time-series", "Optimization"],
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
      title: "Games are the domain I want to move toward next.",
      body:
        "I’m especially interested in how game systems create motivation, competition, progression, retention, and long-term engagement. My current BA/Product/System work gives me transferable practice in flow logic, edge cases, coordination, and delivery clarity.",
      genresTitle: "Genres and systems I want to understand deeper",
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
        "Meta shifts",
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
      eyebrow: "Reach out",
      title: "Let’s talk about Game Product, LiveOps, Game Operations, or Product/System BA roles.",
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
      shortRole: "Product/System BA định hướng Game Product / LiveOps",
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
      loadingArtifact: "Đang tải artifact độ phân giải cao",
    },
    hero: {
      roleLine:
        "Product/System BA định hướng Game Product / LiveOps — biến logic sản phẩm phức tạp thành flow, artifact và quyết định đủ rõ để team có thể triển khai.",
      headline: "Biến sự mơ hồ thành product flow rõ ràng.",
      intro:
        "Tôi dùng kinh nghiệm Product/System BA về flow logic, documentation, backlog coordination và artifact hỗ trợ QA/UAT làm nền tảng để tiến gần hơn tới Game Product, LiveOps và Game Operations.",
      focusItems: [
        "Định hướng chính: Game Product / LiveOps / Game Operations",
        "Nền tảng chứng minh: Kinh nghiệm Product / System BA",
        "Hướng dự phòng: Associate PM / Product Operations",
      ],
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
      title: "Tôi kết nối product systems, delivery clarity và định hướng game.",
      body:
        "Tôi là Hoàng, một Product/System BA tại Hà Nội, đang định hướng tới Game Product, LiveOps và Game Operations. Nền tảng hiện tại của tôi là BA/Product work trong các hệ thống phức tạp: làm rõ logic tính năng, map flow, cấu trúc tài liệu và giúp team đi từ ambiguity tới implementation.",
      portrait: {
        src: "/assets/portrait-nguyen-duc-minh-hoang.jpg",
        alt: "Ảnh chân dung Nguyễn Đức Minh Hoàng",
        title: "Ảnh chân dung Nguyễn Đức Minh Hoàng",
        caption: "Hà Nội, Việt Nam",
      },
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
            "Game Product, LiveOps và Game Operations là hướng tôi muốn tiến gần hơn, dựa trên các năng lực có thể chuyển đổi: flow, system, coordination và analytical thinking.",
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
        eyebrow: "Dự án hỗ trợ",
        title: "Bằng chứng bổ sung qua UX, analytics và chiều sâu nghiên cứu.",
        description:
          "Các dự án này nhẹ hơn case study chính. Chúng thể hiện kỹ năng có thể chuyển đổi: cấu trúc web/UX, KPI storytelling và analytical decision support.",
      },
      experience: {
        eyebrow: "Kinh nghiệm tiêu biểu",
        title: "Bằng chứng Product/System BA thực tế qua fintech, chuyển đổi số và vận hành.",
        description:
          "Đây là nền tảng chứng minh cho định hướng game: flow, documentation, backlog coordination, permission logic, testing và stakeholder alignment trong các sản phẩm system-heavy.",
      },
    },
    caseStudyLabels: {
      eyebrow: "Case Study",
      context: "Bối cảnh",
      problem: "Vấn đề",
      role: "Vai trò của tôi",
      keyDecisions: "Quyết định / tradeoff chính",
      outcomeLearning: "Kết quả / bài học",
      evidence: "Bằng chứng chính",
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
        title: "CDP Automation & Push Notification Flow",
        summary:
          "Map automation logic phức tạp qua trigger, segment, trạng thái notification, reporting behavior và edge case.",
        evidence: [
          "Làm rõ flow/state behavior trước handoff",
          "Cấu trúc feature logic để stakeholder review",
          "Hỗ trợ thảo luận QA/UAT bằng artifact đã làm sạch",
        ],
        mainPreview: {
          src: assets.cdpAutomationFlow,
          previewSrc: assetPreviews.cdpAutomationFlow,
          alt: "Sơ đồ CDP automation flow đã được làm sạch, thể hiện trigger, segment, state và notification logic",
          title: "CDP automation flow map",
          caption: "Preview flow chính",
        },
        detailPreview: {
          src: assets.cdpFlowStates,
          previewSrc: assetPreviews.cdpFlowStates,
          alt: "Các màn hình trạng thái CDP flow management đã được làm sạch",
          title: "CDP flow management states",
          caption: "Preview trạng thái mở rộng",
        },
        context:
          "Các module CDP customer-service liên quan đến Automation Flow, App Push Notification, flow reporting và quản lý trạng thái tính năng.",
        problem:
          "Logic tính năng phức tạp: trigger, segment, trạng thái notification, reporting behavior và edge case cần được làm rõ trước mockup và handoff.",
        role:
          "Product/System BA — phụ trách user flow design, feature breakdown, hỗ trợ Figma mockup, edge case analysis và chuẩn bị Dev handoff.",
        keyDecisions: [
          "Tách trigger, segment, action, state và reporting behavior thay vì xem automation như một screen flow chung.",
          "Dùng flow map kết hợp với state screens để stakeholder có thể so sánh product behavior trước implementation.",
          "Loại bỏ dữ liệu nhạy cảm khỏi artifact nhưng vẫn giữ đủ cấu trúc để hỗ trợ thảo luận QA/UAT.",
        ],
        outcomeLearning:
          "Artifact giúp giảm ambiguity trong thảo luận product, hỗ trợ stakeholder so sánh behavior giữa các state và tạo nền tảng rõ hơn cho Dev handoff cũng như QA/UAT checks.",
        process: [
          "Map end-to-end user flow và system flow cho automation và push notification behavior.",
          "Tách feature behavior thành trigger, segment, state, notification và reporting logic.",
          "Chuẩn bị requirement đủ rõ cho mockup, review với stakeholder và Dev handoff.",
        ],
        delivered:
          "End-to-end flows và mockup nằm trong phạm vi 65+ screens/features qua các CDP modules.",
        artifacts: ["Automation flow map", "Feature-state screens", "Figma mockups", "Dev testing checklist"],
        impact:
          "Làm rõ feature behavior, giảm ambiguity khi handoff và tạo nền tảng đáng tin cậy hơn cho QA/UAT review.",
        skills: ["Product flow", "System logic", "CDP", "Automation", "Feature breakdown"],
      },
      {
        title: "AI Cash Flow Forecasting System & Backlog Management",
        summary:
          "Cấu trúc backlog, sprint planning, release tracking và pre-UAT checks cho sản phẩm AI forecasting mà không lộ màn hình nhạy cảm.",
        evidence: [
          "Chuyển yêu cầu tài chính thành backlog-ready items",
          "Dùng planning artifact thay cho product visuals nhạy cảm",
          "Hỗ trợ sprint coordination và QA readiness",
        ],
        visualType: "timeline",
        context:
          "Sản phẩm dự báo dòng tiền tại Vega Fintech liên quan đến AI predictive models, yêu cầu stakeholder tài chính và release coordination.",
        problem:
          "Phần logic AI/tài chính nhạy cảm không thể public, nhưng team vẫn cần cấu trúc requirement, backlog handling và pre-UAT coordination rõ hơn.",
        role:
          "Project Management Collaborator / Business Analyst — phụ trách dịch yêu cầu, quản lý backlog, sprint planning, testing và theo dõi release trước UAT.",
        keyDecisions: [
          "Dùng delivery planning và backlog artifacts thay vì product screenshots để thể hiện công việc mà không lộ logic dự báo nhạy cảm.",
          "Chuyển kỳ vọng của stakeholder tài chính thành functional requirements và acceptance criteria cho engineering discussion.",
          "Cấu trúc sprint planning, Dev testing checklist và bug tracking để release có thể được review trước UAT.",
        ],
        outcomeLearning:
          "Tạo delivery rhythm rõ hơn và giảm ambiguity giữa business stakeholders, AI/product logic và engineering execution.",
        process: [
          "Làm rõ yêu cầu với financial và business stakeholders.",
          "Khớp kỳ vọng về output của mô hình dự báo với AI team lead và product requirements.",
          "Cấu trúc user stories, backlog items và acceptance criteria cho sprint planning.",
          "Xây dựng Dev testing checklists và validate tính năng trước UAT release.",
        ],
        delivered: "Product backlog, user stories, functional requirements documentation, testing checklists và release tracking.",
        artifacts: ["Functional requirements spec", "Sprint planning backlog", "Dev testing checklists", "Pre-UAT release tracker"],
        impact:
          "Cải thiện delivery coordination, làm rõ kỳ vọng handoff và tạo basis lặp lại được cho testing trước UAT.",
        skills: ["Backlog management", "Sprint coordination", "Requirements translation", "Testing & bug tracking", "Stakeholder alignment"],
      },
      {
        title: "Permission Matrix for Internal Operations System",
        summary:
          "Tạo cấu trúc role-permission để access-control logic dễ validate hơn trước implementation.",
        evidence: [
          "Map 21 roles và ~400 permission entries",
          "Làm rõ inheritance, conflict và edge-case logic",
          "Cải thiện thảo luận system governance trước build",
        ],
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
        type: "UX/Product Design Project",
        image: {
          src: assets.immerseVietnamOverview,
          previewSrc: assetPreviews.immerseVietnamOverview,
          alt: "Tổng quan website ImmerseVietnam với hero, navigation và content sections",
          title: "ImmerseVietnam website overview",
          caption: "Cấu trúc web / UX",
        },
        positioning:
          "Dự án web/UX hướng người dùng, thể hiện page structure, content layout và front-end implementation.",
        contributions: ["User persona", "Logical flow", "Figma prototype", "Content layout"],
        relevance:
          "Cho thấy cách user needs có thể trở thành navigation, screen structure và content flow cụ thể.",
        tags: ["Product flow", "Prototype", "UX logic", "Content structure"],
      },
      {
        title: "Sales Performance Dashboard",
        type: "Data Analytics Project",
        image: {
          src: assets.dashboardRevenueOverview,
          previewSrc: assetPreviews.dashboardRevenueOverview,
          alt: "Dashboard doanh thu với KPI cards, revenue chart, treemap và bảng order",
          title: "Dashboard revenue overview",
          caption: "KPI / BI storytelling",
        },
        positioning:
          "Dự án BI/dashboard thể hiện KPI design, data storytelling và operational analysis.",
        contributions: ["ETL pipeline", "Star schema", "KPI dashboard", "Power BI"],
        relevance:
          "Hỗ trợ product/ops thinking bằng cách chuyển performance thành metric và visual signal dễ scan.",
        tags: ["ETL", "KPI", "Data model", "Power BI"],
      },
      {
        title: "Market Forecasting & Portfolio Optimization Thesis",
        type: "Analytical Research Project",
        image: {
          src: assets.thesisPortfolioOverview,
          previewSrc: assetPreviews.thesisPortfolioOverview,
          alt: "Tổng quan thesis portfolio optimization với investment strategy analysis và portfolio metrics",
          title: "Thesis portfolio optimization overview",
          caption: "Analytical decision support",
        },
        positioning:
          "Dự án nghiên cứu phân tích về model comparison, forecasting logic, portfolio optimization và decision-making under uncertainty.",
        contributions: [
          "Model comparison",
          "Time-series forecasting",
          "Portfolio optimization",
          "Decision reasoning",
        ],
        relevance:
          "Bổ sung analytical depth mà không làm lệch portfolio khỏi Product/System BA và định hướng game product.",
        tags: ["Research framing", "Model comparison", "Time-series", "Optimization"],
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
      title: "Game là domain tôi muốn tiến gần hơn trong giai đoạn tiếp theo.",
      body:
        "Tôi đặc biệt quan tâm đến cách game systems tạo motivation, competition, progression, retention và long-term engagement. BA/Product/System work hiện tại cho tôi nền tảng có thể chuyển đổi về flow logic, edge case, coordination và delivery clarity.",
      genresTitle: "Thể loại và hệ thống tôi muốn hiểu sâu hơn",
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
        "Meta shifts",
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
      eyebrow: "Kết nối",
      title: "Hãy trao đổi về Game Product, LiveOps, Game Operations hoặc các vị trí Product/System BA.",
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
