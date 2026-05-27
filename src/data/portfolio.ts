export type NavItem = {
  label: string;
  href: string;
};

export type CaseStudy = {
  title: string;
  problem: string;
  role: string;
  delivered: string;
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

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type GameNote = {
  title: string;
  label: string;
  focus: string;
};

export const portfolio = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Case Studies", href: "#case-studies" },
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
      "I bridge business needs, product logic, and technical constraints to clarify how systems should work. My work focuses on requirement analysis, user flows, functional documentation, backlog coordination, and product/system thinking — with a long-term direction toward Game BA, Product Operations, and LiveOps.",
    location: "Hanoi, Vietnam",
    email: "hoang.nguyenducminh@gmail.com",
    linkedin: "#",
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
      problem:
        "Multi-channel chatbot systems require clear integration logic, permission handling, event triggers, and consistent user interaction flow.",
      role:
        "Requirement analysis, API research, user flow mapping, functional documentation, stakeholder clarification.",
      delivered:
        "OAuth/webhook/event-trigger research, integration flows, feature logic, mockup support, documentation.",
      impact:
        "Reduced ambiguity for handoff, clarified technical-business expectations, and supported implementation planning.",
      skills: ["API research", "System flow", "BA documentation", "Stakeholder alignment"],
    },
    {
      title: "CDP Automation & Push Notification Flow",
      problem:
        "Automation and push notification features can easily become confusing without clear trigger logic, states, segmentation, and edge cases.",
      role: "User flow design, feature breakdown, Figma mockup, edge case analysis, Dev handoff support.",
      delivered: "End-to-end flows and mockups as part of 65+ screens/features across CDP modules.",
      impact:
        "Helped align stakeholders, clarify feature behavior, and support product pitching and development handoff.",
      skills: ["Product flow", "UX logic", "CDP", "Automation", "Feature breakdown"],
    },
    {
      title: "Permission Matrix for Internal Operations System",
      problem:
        "Internal systems with many roles need consistent access logic to prevent operational confusion and security gaps.",
      role: "Permission logic analysis, role mapping, matrix design, validation support.",
      delivered: "Permission matrix for 21 roles and around 400 permissions.",
      impact: "Improved access-control clarity and system governance.",
      skills: ["System thinking", "Permission design", "Operational logic", "Edge case analysis"],
    },
  ] satisfies CaseStudy[],
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
      "I’m interested in how live-service games shape player behavior through systems — events, missions, rewards, ranked loops, monetization, balance updates, and community feedback. My goal is to bring BA/Product/System Thinking into game products where clarity, iteration, and player experience directly affect retention.",
    notes: [
      {
        title: "Arena of Valor",
        label: "Upcoming Analysis",
        focus: "LiveOps event and retention loop breakdown",
      },
      {
        title: "Teamfight Tactics",
        label: "Planned Product Note",
        focus: "Patch/meta and system balance analysis",
      },
      {
        title: "League of Legends / Garena ecosystem",
        label: "Upcoming Analysis",
        focus: "Player journey and monetization/community loop",
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
