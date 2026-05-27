export type NavItem = {
  label: string;
  href: string;
};

export type CaseStudy = {
  title: string;
  preview: "api" | "automation" | "matrix";
  context: string;
  problem: string;
  role: string;
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

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type GameNote = {
  title: string;
  label: string;
  focus: string;
  points: string[];
};

export const portfolio = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Game/Product Thinking", href: "#game-thinking" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  personal: {
    name: "Nguyễn Đức Minh Hoàng",
    shortRole: "Business Analyst / Associate PM",
    roleLine:
      "Business Analyst / Associate PM focused on product systems, requirement clarity, and game-oriented product thinking.",
    tagline:
      "Turning ambiguous requirements into clear flows, structured decisions, and build-ready product artifacts.",
    intro:
      "I turn unclear business needs into structured product flows, functional requirements, mockups, and delivery-ready artifacts. My work sits between business, product, technical teams, and users — with a long-term direction toward Game BA, Product Operations, and LiveOps.",
    location: "Hanoi, Vietnam",
    email: "hoang.nguyenducminh@gmail.com",
    linkedin: "https://www.linkedin.com/in/hoangnguyenducminh/",
    cv: "/Nguyen-Duc-Minh-Hoang-CV.pdf",
  },
  proof: [
    "65+ Figma screens/features",
    "21 roles / ~400 permissions",
    "3–4 features per sprint",
    "API / OAuth / webhook research",
    "BA + Product + System Thinking",
  ],
  caseStudies: [
    {
      title: "Omnichannel AI Chatbot / API Integration Flow",
      preview: "api",
      context:
        "Vega Fintech work across AI/customer-service modules where multiple channels and platform constraints needed to be translated into implementation-ready logic.",
      problem:
        "Multi-channel chatbot systems require clear integration logic, permission handling, event triggers, and consistent user interaction flow.",
      role:
        "Requirement analysis, API research, user flow mapping, functional documentation, stakeholder clarification.",
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
      preview: "automation",
      context:
        "CDP customer-service modules involving App Push Notification, Automation Flow, and omnichannel feature behavior.",
      problem:
        "Automation and push notification features can easily become confusing without clear trigger logic, states, segmentation, and edge cases.",
      role: "User flow design, feature breakdown, Figma mockup, edge case analysis, Dev handoff support.",
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
      preview: "matrix",
      context:
        "Internal operations logic for a system with many user roles and permission-sensitive workflows.",
      problem:
        "Internal systems with many roles need consistent access logic to prevent operational confusion and security gaps.",
      role: "Permission logic analysis, role mapping, matrix design, validation support.",
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
  ] satisfies CaseStudy[],
  projects: [
    {
      title: "ImmerseVietnam",
      type: "UX/Product Design Project",
      positioning:
        "A product-flow project focused on turning user needs into screen structure, interaction logic, and a working prototype.",
      contributions: ["User persona", "Logical flow", "Figma prototype", "Multi-platform UX logic"],
      relevance:
        "Supports Associate PM and Game BA positioning by showing how ambiguous user needs become concrete screens, journeys, and interaction decisions.",
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
      type: "Machine Learning / Analytical Research Project",
      positioning:
        "A research-depth proof point that supports analytical rigor alongside BA/Product work.",
      contributions: [
        "Time-series forecasting",
        "Machine learning model comparison",
        "Portfolio optimization",
        "ARIMA, GARCH, Random Forest, XGBoost, SVM, LSTM, Transformer, Reinforcement Learning",
      ],
      relevance:
        "Adds evidence of research depth, model comparison, and structured evaluation while keeping the site's main story focused on product systems.",
      tags: ["Forecasting", "Model comparison", "Research", "Optimization"],
    },
  ] satisfies Project[],
  experience: [
    {
      company: "Vega Fintech",
      role: "Project Management & Business Analysis Collaborator",
      period: "03/2026 – Present",
      context: "AI, customer service, fintech, and CDP product modules.",
      evidence: [
        "Designed end-to-end user flows and Figma mockups for around 65 screens/features across CDP customer-service modules.",
        "Managed backlog and sprint planning for 3–4 features per sprint and 8–10 tasks.",
        "Built Dev testing checklists, found around 5 bugs per sprint before UAT, and mapped 21 roles / ~400 permissions.",
      ],
    },
    {
      company: "CMC Technology & Solutions",
      role: "Data & Business Analyst Intern",
      period: "09/2024 – 12/2024",
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
      period: "08/2021 – 12/2025",
      context: "High-pressure service operations with multiple internal stakeholders.",
      evidence: [
        "Coordinated operations, inventory, and data workflows across departments.",
        "Handled practical service issues where customer experience and operational timing mattered.",
        "Built stakeholder communication habits and sensitivity to frontline execution constraints.",
      ],
    },
  ] satisfies Experience[],
  skillGroups: [
    {
      title: "BA/Product",
      skills: ["Requirement analysis", "BRD / SRS", "User stories", "Functional documentation", "Feature breakdown"],
    },
    {
      title: "PM/Coordination",
      skills: ["Backlog management", "Sprint planning", "Stakeholder alignment", "Bug tracking", "UAT support"],
    },
    {
      title: "UX/System Flow",
      skills: ["User flow", "Interaction logic", "Edge cases", "Process mapping", "Figma mockup"],
    },
    {
      title: "Technical Understanding",
      skills: ["API documentation", "OAuth", "Webhook", "Permission scope", "Event triggers"],
    },
    {
      title: "Game/Product Domain",
      skills: ["Player behavior", "LiveOps", "Retention logic", "Game balancing", "Monetization systems"],
    },
  ] satisfies SkillGroup[],
  gameThinking: {
    description:
      "I study game systems as product systems, not just as a player. I look at how events, missions, rewards, ranked loops, monetization, balance updates, and community feedback shape behavior, retention, and product decisions.",
    notes: [
      {
        title: "Arena of Valor — LiveOps Event & Retention Loop Breakdown",
        label: "Mini Product Analysis",
        focus: "Event loop, reward motivation, retention friction, and BA/Product takeaway.",
        points: [
          "Map the loop from event entry to mission action, reward claim, and return motivation.",
          "Identify friction where reward value, task clarity, or timing can reduce participation.",
          "Translate observations into BA/Product questions for event design and retention review.",
        ],
      },
      {
        title: "Teamfight Tactics — Patch/meta and system balance analysis",
        label: "Planned Product Note",
        focus: "Patch/meta and system balance analysis",
        points: [
          "Track how patch changes shift viable strategies and player decision-making.",
          "Separate balance symptoms from underlying system incentives.",
        ],
      },
      {
        title: "League of Legends / Garena ecosystem — Player journey and monetization/community loop",
        label: "Upcoming Analysis",
        focus: "Player journey and monetization/community loop",
        points: [
          "Review onboarding, account ecosystem, event participation, and monetization touchpoints.",
          "Connect community feedback loops with product and operations decisions.",
        ],
      },
    ],
  },
  about: {
    primary:
      "I work best when turning unclear ideas into structured product artifacts. I usually start by understanding the “why,” mapping the flow, identifying dependencies and edge cases, then translating that logic into documents, mockups, checklists, or backlog items that teams can act on.",
    secondary:
      "I’m especially drawn to roles that sit between business, product, technical teams, and users — where clear thinking can reduce misunderstanding and improve execution.",
  },
  education: {
    school: "VNU International School, Vietnam National University, Hanoi",
    degree: "Bachelor of Business Data Analytics",
    period: "2021–2025",
  },
};
