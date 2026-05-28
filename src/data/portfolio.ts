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
        "I turn unclear business needs into structured product flows, functional requirements, mockups, and delivery-ready artifacts across product, business, and technical teams.",
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
          "Multi-channel chatbot systems require clear integration logic, permission handling, event triggers, and consistent user interaction flow.",
        role:
          "Requirement analysis, API research, user flow mapping, functional documentation, stakeholder clarification.",
        keyDecisions: [
          "Separated channel behavior, OAuth/webhook constraints, event triggers, and user interaction states so each part could be reviewed clearly.",
          "Kept the flow business-readable while preserving the technical details needed for Dev discussion.",
        ],
        outcomeLearning:
          "The artifact reduced ambiguity for discussion and handoff, especially around event triggers, permissions, and user feedback states.",
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
        title: "CDP Automation & Push Notification Flow",
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
          "CDP customer-service modules involving App Push Notification, Automation Flow, and omnichannel feature behavior.",
        problem:
          "Automation and push notification features can easily become confusing without clear trigger logic, states, segmentation, and edge cases.",
        role: "User flow design, feature breakdown, Figma mockup, edge case analysis, Dev handoff support.",
        keyDecisions: [
          "Structured the feature around trigger, segment, state, and notification behavior instead of treating it as one generic flow.",
          "Highlighted edge cases and state differences so stakeholders could compare behavior before handoff.",
        ],
        outcomeLearning:
          "Helped stakeholders compare behavior across states and created a clearer basis for mockup, handoff, and QA/UAT checks.",
        process: [
          "Broke features into trigger, segment, state, and notification behavior.",
          "Mapped end-to-end user and system flow before preparing mockups.",
          "Identified edge cases and checked behavior against development handoff needs.",
        ],
        delivered: "End-to-end flows and mockups as part of 65+ screens/features across CDP modules.",
        artifacts: ["User flow", "Feature breakdown", "Figma mockups", "Dev testing checklist"],
        impact:
          "Helped align stakeholders, clarify feature behavior, and support product pitching and development handoff.",
        skills: ["Product flow", "UX logic", "CDP", "Automation", "Feature breakdown"],
      },
      {
        title: "Permission Matrix for Internal Operations System",
        context:
          "Internal operations logic for a system with many user roles and permission-sensitive workflows.",
        problem:
          "Internal systems with many roles need consistent access logic to prevent operational confusion and security gaps.",
        role: "Permission logic analysis, role mapping, matrix design, validation support.",
        keyDecisions: [
          "Grouped permissions by operational need and role behavior instead of handling each access request as a separate exception.",
          "Used a matrix format so stakeholders could scan gaps, overlaps, and governance questions before implementation.",
        ],
        outcomeLearning:
          "Made permission logic easier to validate before implementation and reduced access-control ambiguity.",
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
        type: "Analytical Research Project",
        positioning:
          "A comparative analytical research project exploring how forecasting models and portfolio optimization methods can support investment decision-making.",
        contributions: [
          "Structured research framing",
          "Model comparison across ARIMA, GARCH, Random Forest, XGBoost, SVM, LSTM, and Transformer",
          "Portfolio optimization comparison using Markowitz, Black-Litterman, and Reinforcement Learning/PPO",
          "Time-series reasoning and decision-making under uncertainty",
        ],
        relevance:
          "Adds supporting evidence of analytical discipline, model comparison, and business reasoning without shifting the portfolio away from product/system BA work.",
        tags: ["Research framing", "Model comparison", "Time-series", "Decision reasoning"],
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
        "Tôi chuyển hóa nhu cầu kinh doanh chưa rõ ràng thành product flow, tài liệu chức năng, mockup và artifact sẵn sàng cho triển khai giữa product, business và technical team.",
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
        title: "CDP Automation & Push Notification Flow",
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
          "Các module CDP customer-service liên quan đến App Push Notification, Automation Flow và hành vi omnichannel.",
        problem:
          "Automation và push notification dễ trở nên khó hiểu nếu trigger logic, state, segmentation và edge case không được làm rõ.",
        role: "User flow design, feature breakdown, Figma mockup, edge case analysis và Dev handoff support.",
        keyDecisions: [
          "Cấu trúc feature theo trigger, segment, state và notification behavior thay vì xem như một flow chung.",
          "Làm rõ edge case và khác biệt giữa các state để stakeholder có thể so sánh behavior trước handoff.",
        ],
        outcomeLearning:
          "Giúp stakeholder so sánh behavior giữa các state và tạo nền tảng rõ hơn cho mockup, handoff và checklist QA/UAT.",
        process: [
          "Tách feature theo trigger, segment, state và notification behavior.",
          "Map end-to-end user/system flow trước khi chuẩn bị mockup.",
          "Xác định edge case và kiểm tra behavior theo nhu cầu handoff cho development.",
        ],
        delivered: "End-to-end flows và mockups trong nhóm 65+ màn hình/tính năng ở các module CDP.",
        artifacts: ["User flow", "Feature breakdown", "Figma mockups", "Dev testing checklist"],
        impact:
          "Hỗ trợ align stakeholder, làm rõ feature behavior và hỗ trợ product pitching cũng như development handoff.",
        skills: ["Product flow", "UX logic", "CDP", "Automation", "Feature breakdown"],
      },
      {
        title: "Permission Matrix for Internal Operations System",
        context:
          "Logic vận hành nội bộ cho một hệ thống có nhiều user role và các workflow nhạy cảm về quyền truy cập.",
        problem:
          "Hệ thống nội bộ có nhiều role cần access logic nhất quán để tránh nhầm lẫn vận hành và lỗ hổng quản trị.",
        role: "Permission logic analysis, role mapping, matrix design và validation support.",
        keyDecisions: [
          "Nhóm permission theo nhu cầu vận hành và role behavior thay vì xử lý từng yêu cầu quyền như một ngoại lệ riêng.",
          "Dùng matrix để stakeholder dễ scan gap, overlap và câu hỏi governance trước implementation.",
        ],
        outcomeLearning:
          "Giúp permission logic dễ validate hơn trước implementation và giảm ambiguity về access-control.",
        process: [
          "Nhóm role và permission thành matrix để stakeholder có thể review rõ ràng.",
          "Kiểm tra tính nhất quán giữa role behavior, permission scope và operational impact.",
          "Hỗ trợ validation để expectation về access-control rõ ràng trước implementation.",
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
