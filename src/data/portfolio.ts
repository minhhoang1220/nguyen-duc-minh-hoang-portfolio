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
      fit?: "cover" | "contain";
    }
  | {
      type: "matrix";
      title: string;
      meta: string;
      rowLabel: string;
      columnLabels: string[];
    }
  | {
      type: "timeline";
      title: string;
      meta: string;
      phases: string[];
    };

export type CaseStudy = {
  title: string;
  preview: "api" | "automation" | "matrix";
  mainPreview?: AssetImage;
  detailPreview?: AssetImage;
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
    items: string[];
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
    process: string;
    deliveredArtifacts: string;
    delivered: string;
    impact: string;
    skills: string;
    viewSummary: string;
    hideSummary: string;
    sanitized: string;
    matrixTitle: string;
    matrixColumns: string[];
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
  skillsMatrix: {
    header: SectionCopy;
    groups: SkillGroup[];
  };
  gameThinking: {
    header: SectionCopy;
    description: string;
    notes: GameNote[];
  };
  about: {
    eyebrow: string;
    title: string;
    primary: string;
    secondary: string;
    educationLabel: string;
    education: {
      school: string;
      degree: string;
      period: string;
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
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

export const portfolioContent: Record<Language, PortfolioContent> = {
  en: {
    navigation: [
      { label: "Home", href: "#home" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Game/Product Thinking", href: "#game-thinking" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    personal: {
      name: "Nguyễn Đức Minh Hoàng",
      shortRole: "Business Analyst / Associate PM",
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
    },
    hero: {
      roleLine:
        "Business Analyst / Associate PM focused on product systems, requirement clarity, and game-oriented product thinking.",
      headline: "Turning ambiguity into clear product flows.",
      intro:
        "I turn unclear business needs into structured product flows, functional requirements, mockups, and delivery-ready artifacts across product, business, and technical teams.",
      focusLine: "Focused on BA, product systems, and game-oriented product thinking.",
      artifactAria: "Selected product artifact previews",
      ctas: {
        caseStudies: "View Case Studies",
        cv: "Download CV",
        linkedin: "LinkedIn",
      },
      artifacts: [
        {
          type: "image",
          title: "Product UI proof",
          meta: "CDP feature screen",
          image: {
            src: assets.cdpCampaignList,
            alt: "Sanitized CDP campaign list product UI screenshot",
            title: "CDP campaign list UI",
          },
          fit: "contain",
        },
        {
          type: "image",
          title: "Journey flow proof",
          meta: "Chatbot / Zalo OA",
          image: {
            src: assets.chatbotJourney,
            alt: "Sanitized chatbot Zalo OA user journey flow diagram",
            title: "Chatbot Zalo journey flow",
          },
          fit: "contain",
        },
        {
          type: "matrix",
          title: "Permission matrix",
          meta: "21 roles / ~400 permissions",
          rowLabel: "Role",
          columnLabels: ["Read", "Create", "Edit", "Approve", "Admin"],
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
      eyebrow: "Proof Points",
      title: "Measured artifacts, not abstract traits.",
      items: [
        "65+ Figma screens/features",
        "21 roles / ~400 permissions",
        "3-4 features per sprint",
        "API / OAuth / webhook research",
        "BA + Product + System Thinking",
      ],
    },
    sections: {
      caseStudies: {
        eyebrow: "Featured Case Studies",
        title: "Requirement clarity shown through system-heavy product artifacts.",
        description:
          "Each case is framed around the problem, the artifact produced, and how the work clarified expectations for product, business, and technical handoff.",
      },
      projects: {
        eyebrow: "Selected Projects",
        title: "Supporting evidence across product flow, analytics, and research depth.",
        description:
          "Academic and side projects add context around product flow, KPI thinking, and structured analysis without shifting the portfolio away from BA/Product work.",
      },
      experience: {
        eyebrow: "Experience Snapshot",
        title: "Practical BA/Product evidence across fintech, transformation, and operations.",
        description:
          "The emphasis is on transferable product systems work: flows, documentation, backlog coordination, permission logic, testing, and stakeholder alignment.",
      },
    },
    caseStudyLabels: {
      eyebrow: "Case Study",
      context: "Context",
      problem: "Problem",
      role: "My Role",
      process: "Process",
      deliveredArtifacts: "Delivered Artifacts",
      delivered: "Delivered",
      impact: "Product/System Impact",
      skills: "Skills Demonstrated",
      viewSummary: "View Summary",
      hideSummary: "Hide Summary",
      sanitized: "Sanitized",
      matrixTitle: "Role-permission matrix",
      matrixColumns: ["Role", "Read", "Create", "Edit", "Approve", "Admin"],
    },
    caseStudies: [
      {
        title: "Omnichannel AI Chatbot / API Integration Flow",
        preview: "api",
        mainPreview: {
          src: assets.chatbotJourney,
          alt: "Sanitized Zalo OA chatbot journey flow used to clarify channel and system behavior",
          title: "Zalo OA chatbot journey flow",
          caption: "Main flow preview",
        },
        detailPreview: {
          src: assets.chatbotFeedback,
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
        mainPreview: {
          src: assets.cdpAutomationFlow,
          alt: "Sanitized CDP automation flow map showing trigger and flow logic",
          title: "CDP automation flow map",
          caption: "Main flow preview",
        },
        detailPreview: {
          src: assets.cdpFlowStates,
          alt: "Sanitized CDP flow management state screens",
          title: "CDP flow management states",
          caption: "Expanded detail preview",
        },
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
    ],
    projectProof: {
      eyebrow: "Product UI Proof",
      title: "Sanitized UI and reporting artifacts that support the product systems story.",
      description:
        "These previews keep the focus on how feature screens, reports, and flow states become clearer for stakeholders and delivery teams.",
      images: [
        {
          src: assets.cdpCampaignList,
          alt: "Sanitized CDP campaign list product UI screenshot",
          title: "CDP campaign list UI",
          caption: "Feature screen / operations proof",
        },
        {
          src: assets.cdpFlowReport,
          alt: "Sanitized CDP flow report detail interface screenshot",
          title: "CDP flow report detail",
          caption: "Reporting / performance proof",
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
        positioning: "A research-depth proof point that supports analytical rigor alongside BA/Product work.",
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
    ],
    experience: [
      {
        company: "Vega Fintech",
        role: "Project Management & Business Analysis Collaborator",
        period: "03/2026 - Present",
        context: "AI, customer service, fintech, and CDP product modules.",
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
    skillsMatrix: {
      header: {
        eyebrow: "Skills Matrix",
        title: "A product-system skill stack, not a pure data or software engineering profile.",
        description:
          "The matrix connects BA fundamentals with product flow, technical understanding, coordination, and game/product direction.",
      },
      groups: [
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
      ],
    },
    gameThinking: {
      header: {
        eyebrow: "Game & Product Thinking",
        title: "Game interest framed as product systems analysis.",
      },
      description:
        "I study game systems as product systems, not just as a player. I look at how events, missions, rewards, ranked loops, monetization, balance updates, and community feedback shape behavior, retention, and product decisions.",
      notes: [
        {
          title: "Arena of Valor - LiveOps Event & Retention Loop Breakdown",
          label: "Mini Product Analysis",
          focus: "Event loop, reward motivation, retention friction, and BA/Product takeaway.",
          points: [
            "Map the loop from event entry to mission action, reward claim, and return motivation.",
            "Identify friction where reward value, task clarity, or timing can reduce participation.",
            "Translate observations into BA/Product questions for event design and retention review.",
          ],
        },
        {
          title: "Teamfight Tactics - Patch/meta and system balance analysis",
          label: "Planned Product Note",
          focus: "Patch/meta and system balance analysis",
          points: [
            "Track how patch changes shift viable strategies and player decision-making.",
            "Separate balance symptoms from underlying system incentives.",
          ],
        },
        {
          title: "League of Legends / Garena ecosystem - Player journey and monetization/community loop",
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
      eyebrow: "About / Working Style",
      title: "Turning unclear ideas into structured artifacts teams can use.",
      primary:
        "I work best when turning unclear ideas into structured product artifacts. I usually start by understanding the why, mapping the flow, identifying dependencies and edge cases, then translating that logic into documents, mockups, checklists, or backlog items that teams can act on.",
      secondary:
        "I am especially drawn to roles that sit between business, product, technical teams, and users, where clear thinking can reduce misunderstanding and improve execution.",
      educationLabel: "Education",
      education: {
        school: "VNU International School, Vietnam National University, Hanoi",
        degree: "Bachelor of Business Data Analytics",
        period: "2021-2025",
      },
    },
    contact: {
      eyebrow: "Reach Out",
      title: "Let's talk about product systems, requirement clarity, and game-oriented BA work.",
      description:
        "I am open to Business Analyst, Associate PM, Product Operations, System/Product Analyst, and Game BA conversations where clear thinking can reduce ambiguity and improve execution.",
      emailLabel: "Email me",
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
      { label: "Case Studies", href: "#case-studies" },
      { label: "Dự án", href: "#projects" },
      { label: "Kinh nghiệm", href: "#experience" },
      { label: "Kỹ năng", href: "#skills" },
      { label: "Game/Product Thinking", href: "#game-thinking" },
      { label: "Giới thiệu", href: "#about" },
      { label: "Liên hệ", href: "#contact" },
    ],
    personal: {
      name: "Nguyễn Đức Minh Hoàng",
      shortRole: "Business Analyst / Associate PM",
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
    },
    hero: {
      roleLine:
        "Business Analyst / Associate PM tập trung vào product systems, requirement clarity và tư duy sản phẩm định hướng game.",
      headline: "Biến yêu cầu mơ hồ thành product flow rõ ràng.",
      intro:
        "Tôi chuyển hóa nhu cầu kinh doanh chưa rõ ràng thành product flow, tài liệu chức năng, mockup và artifact sẵn sàng cho triển khai giữa product, business và technical team.",
      focusLine: "Tập trung vào BA, product systems và game-oriented product thinking.",
      artifactAria: "Các preview artifact sản phẩm đã chọn",
      ctas: {
        caseStudies: "Xem Case Studies",
        cv: "Tải CV",
        linkedin: "LinkedIn",
      },
      artifacts: [
        {
          type: "image",
          title: "Bằng chứng product UI",
          meta: "Màn hình tính năng CDP",
          image: {
            src: assets.cdpCampaignList,
            alt: "Ảnh chụp UI danh sách campaign CDP đã được làm sạch thông tin nhạy cảm",
            title: "CDP campaign list UI",
          },
          fit: "contain",
        },
        {
          type: "image",
          title: "Bằng chứng journey flow",
          meta: "Chatbot / Zalo OA",
          image: {
            src: assets.chatbotJourney,
            alt: "Sơ đồ user journey chatbot Zalo OA đã được làm sạch thông tin nhạy cảm",
            title: "Chatbot Zalo journey flow",
          },
          fit: "contain",
        },
        {
          type: "matrix",
          title: "Permission matrix",
          meta: "21 vai trò / ~400 quyền hạn",
          rowLabel: "Role",
          columnLabels: ["Read", "Create", "Edit", "Approve", "Admin"],
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
      eyebrow: "Proof Points",
      title: "Bằng chứng cụ thể, không chỉ là mô tả năng lực.",
      items: [
        "65+ màn hình/tính năng Figma",
        "21 vai trò / ~400 quyền hạn",
        "3-4 feature mỗi sprint",
        "Nghiên cứu API / OAuth / webhook",
        "BA + Product + System Thinking",
      ],
    },
    sections: {
      caseStudies: {
        eyebrow: "Case Studies nổi bật",
        title: "Requirement clarity được thể hiện qua các artifact sản phẩm có logic hệ thống.",
        description:
          "Mỗi case tập trung vào vấn đề cần làm rõ, artifact được tạo ra và cách artifact đó giúp business, product và technical team thống nhất kỳ vọng trước khi triển khai.",
      },
      projects: {
        eyebrow: "Dự án chọn lọc",
        title: "Bằng chứng bổ trợ về product flow, analytics và chiều sâu phân tích.",
        description:
          "Các dự án học thuật và cá nhân bổ sung góc nhìn về product flow, KPI thinking và phân tích có cấu trúc, nhưng không làm lệch trọng tâm BA/Product của portfolio.",
      },
      experience: {
        eyebrow: "Kinh nghiệm tiêu biểu",
        title: "Bằng chứng BA/Product thực tế qua fintech, chuyển đổi số và vận hành.",
        description:
          "Trọng tâm là năng lực có thể chuyển giao: flow, documentation, backlog coordination, permission logic, testing và stakeholder alignment.",
      },
    },
    caseStudyLabels: {
      eyebrow: "Case Study",
      context: "Bối cảnh",
      problem: "Vấn đề",
      role: "Vai trò của tôi",
      process: "Quy trình xử lý",
      deliveredArtifacts: "Artifact đã bàn giao",
      delivered: "Kết quả bàn giao",
      impact: "Tác động tới product/system",
      skills: "Kỹ năng thể hiện",
      viewSummary: "Xem tóm tắt",
      hideSummary: "Ẩn tóm tắt",
      sanitized: "Đã làm sạch",
      matrixTitle: "Role-permission matrix",
      matrixColumns: ["Role", "Read", "Create", "Edit", "Approve", "Admin"],
    },
    caseStudies: [
      {
        title: "Omnichannel AI Chatbot / API Integration Flow",
        preview: "api",
        mainPreview: {
          src: assets.chatbotJourney,
          alt: "Flow chatbot Zalo OA đã được làm sạch, dùng để làm rõ hành vi giữa channel và system",
          title: "Zalo OA chatbot journey flow",
          caption: "Preview flow chính",
        },
        detailPreview: {
          src: assets.chatbotFeedback,
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
        preview: "automation",
        mainPreview: {
          src: assets.cdpAutomationFlow,
          alt: "Sơ đồ CDP automation flow đã được làm sạch, thể hiện trigger và flow logic",
          title: "CDP automation flow map",
          caption: "Preview flow chính",
        },
        detailPreview: {
          src: assets.cdpFlowStates,
          alt: "Các màn hình trạng thái CDP flow management đã được làm sạch",
          title: "CDP flow management states",
          caption: "Preview chi tiết mở rộng",
        },
        context:
          "Các module CDP customer-service liên quan đến App Push Notification, Automation Flow và hành vi omnichannel.",
        problem:
          "Automation và push notification dễ trở nên khó hiểu nếu trigger logic, state, segmentation và edge case không được làm rõ.",
        role: "User flow design, feature breakdown, Figma mockup, edge case analysis và Dev handoff support.",
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
        preview: "matrix",
        context:
          "Logic vận hành nội bộ cho một hệ thống có nhiều user role và các workflow nhạy cảm về quyền truy cập.",
        problem:
          "Hệ thống nội bộ có nhiều role cần access logic nhất quán để tránh nhầm lẫn vận hành và lỗ hổng quản trị.",
        role: "Permission logic analysis, role mapping, matrix design và validation support.",
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
      title: "Artifact UI và reporting đã làm sạch, hỗ trợ câu chuyện về product systems.",
      description:
        "Các preview này tập trung vào cách feature screen, report và flow state giúp stakeholder và delivery team hiểu rõ hơn.",
      images: [
        {
          src: assets.cdpCampaignList,
          alt: "Ảnh chụp UI danh sách campaign CDP đã được làm sạch thông tin nhạy cảm",
          title: "CDP campaign list UI",
          caption: "Bằng chứng feature screen / operations",
        },
        {
          src: assets.cdpFlowReport,
          alt: "Ảnh chụp giao diện CDP flow report detail đã được làm sạch",
          title: "CDP flow report detail",
          caption: "Bằng chứng reporting / performance",
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
          "Hỗ trợ định vị Associate PM và Game BA bằng cách cho thấy cách nhu cầu mơ hồ trở thành screen, journey và interaction decision cụ thể.",
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
        type: "Machine Learning / Analytical Research Project",
        positioning: "Một proof point về chiều sâu nghiên cứu, bổ trợ cho BA/Product work.",
        contributions: [
          "Time-series forecasting",
          "Machine learning model comparison",
          "Portfolio optimization",
          "ARIMA, GARCH, Random Forest, XGBoost, SVM, LSTM, Transformer, Reinforcement Learning",
        ],
        relevance:
          "Bổ sung bằng chứng về research depth, model comparison và structured evaluation, trong khi vẫn giữ trọng tâm chính là product systems.",
        tags: ["Forecasting", "Model comparison", "Research", "Optimization"],
      },
    ],
    experience: [
      {
        company: "Vega Fintech",
        role: "Project Management & Business Analysis Collaborator",
        period: "03/2026 - Present",
        context: "AI, customer service, fintech và CDP product modules.",
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
    skillsMatrix: {
      header: {
        eyebrow: "Skills Matrix",
        title: "Skill stack thiên về product-system, không phải pure data hay software engineering.",
        description:
          "Matrix này kết nối nền tảng BA với product flow, technical understanding, coordination và định hướng game/product.",
      },
      groups: [
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
      ],
    },
    gameThinking: {
      header: {
        eyebrow: "Game & Product Thinking",
        title: "Phân tích game như một product system, không chỉ từ góc nhìn người chơi.",
      },
      description:
        "Tôi quan tâm đến cách live-service games định hình hành vi người chơi thông qua hệ thống: sự kiện, nhiệm vụ, phần thưởng, ranked loop, monetization, cập nhật cân bằng và phản hồi cộng đồng. Mục tiêu của tôi là đưa tư duy BA/Product/System Thinking vào các sản phẩm game, nơi sự rõ ràng, khả năng iteration và trải nghiệm người chơi ảnh hưởng trực tiếp đến retention.",
      notes: [
        {
          title: "Arena of Valor - LiveOps Event & Retention Loop Breakdown",
          label: "Mini Product Analysis",
          focus: "Event loop, reward motivation, retention friction và BA/Product takeaway.",
          points: [
            "Map loop từ event entry tới mission action, reward claim và động lực quay lại.",
            "Xác định friction khi reward value, task clarity hoặc timing làm giảm participation.",
            "Chuyển quan sát thành câu hỏi BA/Product cho event design và retention review.",
          ],
        },
        {
          title: "Teamfight Tactics - Patch/meta and system balance analysis",
          label: "Ghi chú sản phẩm dự kiến",
          focus: "Patch/meta và system balance analysis",
          points: [
            "Theo dõi cách patch changes thay đổi viable strategies và player decision-making.",
            "Tách balance symptoms khỏi underlying system incentives.",
          ],
        },
        {
          title: "League of Legends / Garena ecosystem - Player journey and monetization/community loop",
          label: "Phân tích sắp thực hiện",
          focus: "Player journey và monetization/community loop",
          points: [
            "Review onboarding, account ecosystem, event participation và monetization touchpoints.",
            "Kết nối community feedback loops với product và operations decisions.",
          ],
        },
      ],
    },
    about: {
      eyebrow: "Giới thiệu / Working Style",
      title: "Biến ý tưởng chưa rõ thành artifact có cấu trúc để team có thể triển khai.",
      primary:
        "Tôi làm tốt nhất khi biến những ý tưởng chưa rõ ràng thành artifact sản phẩm có cấu trúc. Tôi thường bắt đầu bằng việc hiểu why, map flow, xác định dependency và edge case, sau đó chuyển logic đó thành tài liệu, mockup, checklist hoặc backlog item để team có thể triển khai.",
      secondary:
        "Tôi đặc biệt phù hợp với các vai trò nằm giữa business, product, technical team và người dùng, nơi tư duy rõ ràng có thể giảm hiểu sai và cải thiện execution.",
      educationLabel: "Học vấn",
      education: {
        school: "VNU International School, Vietnam National University, Hanoi",
        degree: "Bachelor of Business Data Analytics",
        period: "2021-2025",
      },
    },
    contact: {
      eyebrow: "Kết nối với tôi",
      title: "Trao đổi về product systems, requirement clarity và game-oriented BA work.",
      description:
        "Tôi đang mở cho các cơ hội Business Analyst, Associate PM, Product Operations, System/Product Analyst và Game BA, nơi tư duy rõ ràng giúp giảm ambiguity và cải thiện execution.",
      emailLabel: "Gửi email",
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
