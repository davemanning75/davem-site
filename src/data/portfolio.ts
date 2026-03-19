export type HeroSignal = {
  value: string;
  label: string;
  detail: string;
};

export type LeadershipPillar = {
  step: string;
  title: string;
  description: string;
  proof: string[];
};

export type SnapshotGroup = {
  title: string;
  items: string[];
};

export type OperatingPhase = {
  id: string;
  step: string;
  title: string;
  summary: string;
  description: string;
  executiveSignals: string[];
  deliverySignals: string[];
  proofSignals: string[];
};

export type ProofCase = {
  id: string;
  category: string;
  title: string;
  headline: string;
  summary: string;
  impact: string[];
  leadership: string[];
  architecture: string[];
  outcomes: string[];
  stack: string[];
  featured?: boolean;
};

export type CareerMetric = {
  value: string;
  label: string;
};

export type CareerRole = {
  period: string;
  role: string;
  company: string;
  summary: string;
  scale: string;
  bullets: string[];
  supportingSignals: string[];
  defaultOpen?: boolean;
};

export type LeaderVoice = {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  context: string;
};

export const siteCopy = {
  navigation: {
    brand: "Dave Manning",
    links: [
      { href: "#about", label: "Mandate" },
      { href: "#services", label: "Operating Model" },
      { href: "#work", label: "Proof" },
      { href: "#career", label: "Career" },
      { href: "#contact", label: "Contact" },
    ],
    ctaLabel: "Leadership Conversation",
  },
  hero: {
    label: "Executive AI leadership",
    title: "I build AI operating models that move enterprises from ambition to governed production delivery.",
    intro:
      "Architected Centrilogic's AI Factory and the COE, Landing Zone, and Agent Factory patterns behind it, then used those foundations to help teams deliver governed AI in regulated enterprise environments.",
    pullQuoteId: "lokesh-kumar-padmanaban",
    primaryCtaLabel: "Review leadership proof",
    secondaryCtaLabel: "Start a leadership conversation",
    imageAlt: "Dave Manning",
    briefLabel: "Current leadership brief",
    briefTitle: "What I am hired to do",
  },
  mandate: {
    label: "Mandate",
    title: "How I think, how I lead, and how I deliver.",
    intro:
      "The differentiator is not whether I have worked with AI. It is whether I can define the system that decides what gets funded, how risk is governed, how teams execute, and how results hold up under scrutiny.",
    narrative: [
      "Executives do not need another polished online resume. They need evidence that a leader can connect strategy, governance, architecture, delivery, and team development into a durable AI capability.",
      "That is the role I play: translating business ambition into a governed operating model, then helping teams use that model to ship production systems with clarity, repeatability, and executive confidence.",
    ],
    noteLabel: "Why this matters",
    noteTitle: "From strategy deck to delivery system.",
    noteBody:
      "The strongest signal for an SVP-level audience is not the breadth of keywords. It is visible judgment about what to standardize, where to govern, and how to scale AI delivery without losing trust.",
    noteBullets: [
      "Operating model ownership, not just project participation",
      "Named strategic artifacts with delivery consequences",
      "Technical depth that still reads clearly at executive altitude",
    ],
  },
  operatingModel: {
    label: "Operating Model",
    title: "The system behind repeatable AI delivery.",
    intro:
      "This is the proof surface that matters most to an executive audience: not just what shipped, but the operating logic that lets teams ship under governance, budget pressure, and real stakeholder scrutiny.",
    detailKicker: "Click a phase to inspect the model",
    executiveHeading: "What executives need",
    deliveryHeading: "What delivery teams get",
    proofHeading: "Grounded in prior proof",
  },
  proof: {
    label: "Leadership Proof",
    title: "Production AI, framed as leadership proof.",
    intro:
      "Each surface goes beyond a project summary. It shows the business context, the leadership decision, the architectural choices, and the outcomes that made the work matter.",
    toggleLabel: "Open proof surface",
    leadership: {
      kicker: "Leadership decision",
      title: "What leadership changed",
    },
    architecture: {
      kicker: "Architecture choices",
      title: "How the system was shaped",
    },
    outcomes: {
      kicker: "Business outcomes",
      title: "What changed in practice",
    },
  },
  voices: {
    anchorId: "voices",
    label: "What leaders say",
    title: "Recognized for depth, delivery, and the ability to make complex things move.",
    heroQuoteLabel: "",
    sourceNote: "Source: LinkedIn recommendations.",
  },
  career: {
    label: "Career",
    title: "Leadership progression, not resume sprawl.",
    intro:
      "Progression matters because it shows a steady increase in accountability for operating models, commercial outcomes, and team leadership, not just increasingly complex technical systems.",
    viewScopeLabel: "View scope",
    responsibilitiesHeading: "Core responsibilities",
    signalsHeading: "Signals that still matter now",
    credentialsLabel: "Supporting credentials",
    credentialsTitle: "Education",
    credentialsBody:
      "",
    chronologyLinkLabel: "Full chronology on LinkedIn",
  },
  contact: {
    label: "Contact",
    title: "Bring me in when the mandate is larger than a pilot.",
    intro:
      "The best-fit conversations are about standing up an AI capability, fixing the gap between strategy and delivery, or evaluating whether executive AI leadership is needed now.",
    cardLabel: "Start the conversation",
    subject: "Leadership conversation from davem.ca",
    fieldLabels: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    submitLabel: "Send Email",
    successMessage: "Mail composer opened. Send when ready.",
    errorMessage: "Sorry, something went wrong. Please try again.",
    validationMessages: {
      spam: "Spam detected.",
      required: "Please fill in all fields.",
      detail: "Please provide a bit more detail in the message.",
      email: "Please enter a valid email address.",
    },
  },
  footer: {
    name: "Dave Manning",
    meta: "Executive AI leadership, architecture, and production delivery · Greater Toronto, ON · davem.ca",
    linkedinLabel: "LinkedIn",
    linkedinAriaLabel: "LinkedIn profile",
  },
} as const;

export const leaderVoices: LeaderVoice[] = [
  {
    id: "derek-rickaby",
    quote:
      '"Dave was routinely sought out for his depth of expertise and his ability to analyze and set strategic direction for major projects and systems. He has a unique ability to lead large groups through mission-critical design and implementation programs."',
    name: "Derek Rickaby",
    title: "VP & Managing Director",
    company: "NuvoLinQ",
    context: "managed Dave directly",
  },
  {
    id: "lokesh-kumar-padmanaban",
    quote:
      '"When architecture drives outcomes and challenges demand clarity, Dave Manning is the person I trust to lead."',
    name: "Lokesh Kumar Padmanaban",
    title: "Cloud Solutions Architect",
    company: "CentriLogic",
    context: "direct report, 3+ years",
  },
  {
    id: "mike-coccimiglio",
    quote:
      '"Dave brings a rare blend of deep technical expertise and pragmatic business insight. His ability to distill complexity into actionable plans is invaluable. He excels in high-stakes environments with our most strategic and demanding customers. Dave is someone who can lead with vision, execute with rigor, and elevate the people and teams around him."',
    name: "Mike Coccimiglio",
    title: "Cloud Practice Lead",
    company: "CentriLogic",
    context: "Oct 2025",
  },
];

export const heroSignals: HeroSignal[] = [
  {
    value: "20+ years",
    label: "Enterprise Transformation",
    detail: "Architecture, Strategy, and Delivery Leadership",
  },
  {
    value: "AI Factory",
    label: "AI Operating Model Architect",
    detail: "COE, Landing Zone, and Agent Factory Patterns",
  },
  {
    value: "3 director roles",
    label: "Leadership Progression",
    detail: "Architecture, Consulting, and Technical Strategy",
  },
  {
    value: "Regulated + F500",
    label: "Trust Environments",
    detail: "Financial Services, Public Sector, and Enterprise Delivery",
  },
];

export const heroMandate = [
  "Lead architecture teams across AI, cloud, and enterprise domains.",
  "Turn executive AI ambition into governed delivery systems that can ship.",
  "Create reusable foundations so teams stop starting from scratch.",
];

export const heroMetrics: CareerMetric[] = [
  {
    value: "20+",
    label: "years in enterprise IT and transformation",
  },
  {
    value: "20+",
    label: "architects led across global delivery teams",
  },
  {
    value: "$110M",
    label: "hosting portfolio supported in IBM leadership roles",
  },
  {
    value: "180 / 800 / 5",
    label: "applications, servers, and data centres under portfolio scope",
  },
];

export const leadershipPillars: LeadershipPillar[] = [
  {
    step: "01",
    title: "Build the operating model",
    description:
      "Design the structures that let executives fund AI with confidence and let delivery teams execute repeatedly.",
    proof: [
      "AI Factory delivery model",
      "AI COE framework",
      "AI Landing Zone and Agent Factory patterns",
    ],
  },
  {
    step: "02",
    title: "Lead governed production delivery",
    description:
      "Translate architecture, governance, tooling, and business priorities into AI systems that hold up in production.",
    proof: [
      "Genesys + Salesforce + Azure OpenAI contact-centre agent",
      "Role-based GenAI knowledge assistant for regulatory content",
      "Audit-ready workflows in regulated environments",
    ],
  },
  {
    step: "03",
    title: "Grow teams executives can trust",
    description:
      "Recruit, coach, and align architects while connecting technical depth to proposals, SOWs, and executive decisions.",
    proof: [
      "Architecture practice leadership",
      "Proposal and SOW ownership on strategic accounts",
      "Business translation across AI, cloud, and enterprise transformation",
    ],
  },
];

export const snapshotGroups: SnapshotGroup[] = [
  {
    title: "Industries",
    items: [
      "Financial services",
      "Public sector",
      "Manufacturing",
      "Technology",
      "Education",
    ],
  },
  {
    title: "Transformation patterns",
    items: [
      "AI operating models",
      "Production agents",
      "Knowledge systems",
      "Contact-centre transformation",
      "Enterprise roadmaps",
      "RFP and SOW automation",
    ],
  },
  {
    title: "What leaders hire me for",
    items: [
      "Standing up an AI practice",
      "Moving from pilots to governed production",
      "Building executive confidence in architecture decisions",
      "Coaching architecture teams through change",
    ],
  },
];

export const operatingPhases: OperatingPhase[] = [
  {
    id: "mandate",
    step: "01",
    title: "Mandate and portfolio alignment",
    summary:
      "Tie AI investment to business outcomes, governance, and sponsor-ready decision-making.",
    description:
      "The operating model starts by deciding what deserves investment, where risk needs to be managed, and how success will be measured across a portfolio of use cases rather than a series of isolated pilots.",
    executiveSignals: [
      "Prioritized use-case portfolio tied to business value",
      "Governance posture aligned to regulated environments",
      "Roadmaps executives can sponsor, defend, and sequence",
    ],
    deliverySignals: [
      "Bid and no-bid discipline for internal demand",
      "Shared operating metrics for velocity, quality, and auditability",
      "Clear language across sponsors, architects, and delivery leaders",
    ],
    proofSignals: [
      "Enterprise IT roadmaps delivered across financial services, public sector, and manufacturing",
      "Technical detail translated into proposals, SOWs, and program direction",
    ],
  },
  {
    id: "foundations",
    step: "02",
    title: "Governed foundations",
    summary:
      "Create reusable architecture, security, and data foundations so teams do not start over each quarter.",
    description:
      "Reusable patterns matter more than isolated demos. The goal is a governed AI foundation that can support multiple workloads while preserving security, access, and compliance expectations.",
    executiveSignals: [
      "AI COE framework and decision model",
      "AI Landing Zone and Agent Factory patterns",
      "Security, access, data, and compliance guardrails by design",
    ],
    deliverySignals: [
      "Reference architecture for pro-code AI solutions",
      "Microsoft stack alignment across Azure OpenAI, Azure AI Foundry, Fabric, and OneLake",
      "Reusable integration patterns for enterprise systems",
    ],
    proofSignals: [
      "Foundations designed for parallel enterprise engagements",
      "Governed access for regulated knowledge and contact-centre workflows",
    ],
  },
  {
    id: "delivery",
    step: "03",
    title: "Production delivery engine",
    summary:
      "Move from pilot to production with repeatable mechanics, measurable cadence, and clear ownership.",
    description:
      "AI credibility is earned in production. The delivery engine must support throughput, hardening, and operational readiness so that new use cases can move without re-litigating the architecture every time.",
    executiveSignals: [
      "Delivery model that moves beyond POC and sandbox limitations",
      "Measurable cadence for multiple AI use cases per month",
      "Clear handoff from architecture to delivery and operations",
    ],
    deliverySignals: [
      "End-to-end coordination across architecture, data, tooling, and operational readiness",
      "Patterns for summarization, orchestration, retrieval, and human review",
      "Operational metrics and audit-ready outputs",
    ],
    proofSignals: [
      "Production contact-centre agent with Genesys Cloud, Salesforce, and Azure OpenAI",
      "Governed GenAI knowledge assistant with role-based access to regulatory content",
    ],
  },
  {
    id: "leadership",
    step: "04",
    title: "Leadership and commercial engine",
    summary:
      "Build the team, rituals, and commercial motion that make the operating model durable.",
    description:
      "A strong AI capability depends on people and process as much as architecture. That means coaching architects, shaping offerings, and connecting technical depth to executive action.",
    executiveSignals: [
      "Architecture practice leadership across AI, cloud, and enterprise domains",
      "Offer development, proposals, and technical leadership on strategic accounts",
      "Senior leadership participation on complex enterprise programs",
    ],
    deliverySignals: [
      "Coaching rhythms for architects and solution leaders",
      "Repeatable deliverables, diagrams, and implementation standards",
      "Tighter alignment between discovery, design, delivery, and account leadership",
    ],
    proofSignals: [
      "Led 20+ architects globally in IBM hosting portfolio work",
      "Provided thought leadership across teams of 200+ delivery professionals",
    ],
  },
];

export const proofCases: ProofCase[] = [
  {
    id: "ai-factory",
    category: "Flagship proof",
    title: "The AI Factory",
    headline: "An enterprise AI operating model built to scale governed delivery.",
    summary:
      "Architected Centrilogic's AI Factory, a production delivery model designed to move organizations beyond POC and support multiple AI use cases per month at predictable, measurable velocity.",
    impact: [
      "Multiple AI use cases per month",
      "Reusable governed architecture",
      "Executive-ready delivery cadence",
    ],
    leadership: [
      "Defined the AI Factory service model and delivery motion",
      "Designed the AI COE framework, AI Landing Zone, and AI Agent Factory",
      "Connected business sponsorship, governance, architecture, and team execution",
    ],
    architecture: [
      "Pro-code patterns on Azure OpenAI, Azure AI Foundry, Microsoft Fabric, and OneLake",
      "Reusable controls for data access, orchestration, and auditability",
      "Foundations built for parallel enterprise engagements rather than single demos",
    ],
    outcomes: [
      "Created a repeatable path from experimentation to production",
      "Raised confidence that AI delivery could be governed and measured",
      "Shifted the conversation from isolated pilots to operating capability",
    ],
    stack: [
      "Azure AI Foundry",
      "Azure OpenAI",
      "Github Copilot",
      "Microsoft Fabric",
      "OneLake",
      "Governed pro-code delivery",
    ],
    featured: true,
  },
  {
    id: "contact-centre",
    category: "Production agent",
    title: "AI-Powered Contact Centre Agent",
    headline: "Operational automation in a regulated customer-service environment.",
    summary:
      "Delivered a production-grade AI contact-centre agent integrating Genesys Cloud, Salesforce, and Azure OpenAI to eliminate manual after-call work and create auditable CRM records at scale.",
    impact: [
      "Manual after-call work removed",
      "Auditable CRM records created",
      "Contact-centre workflows accelerated",
    ],
    leadership: [
      "Shaped the solution around regulatory expectations and operational fit",
      "Aligned platform, process, and stakeholder decisions across business and technology owners",
    ],
    architecture: [
      "Integrated Genesys Cloud, Salesforce, and Azure OpenAI",
      "Embedded summarization and record generation into production workflows",
    ],
    outcomes: [
      "Automated end-to-end call summarization",
      "Reduced manual effort for agents",
      "Improved auditability in a regulated environment",
    ],
    stack: ["Genesys Cloud", "Salesforce", "Github Copilot", "Governed workflow integration"],
  },
  {
    id: "knowledge-assistant",
    category: "Governed knowledge",
    title: "Agentic AI Knowledge Assistant Avatar",
    headline: "Secure access to sensitive regulatory knowledge at enterprise scale.",
    summary:
      "Delivered a secure, governed Agentic AI knowledge assistant with role-based access to regulatory content, reducing dependence on SMEs and accelerating compliance workflows.",
    impact: [
      "Role-based access to sensitive content",
      "SME dependence reduced",
      "Compliance workflows accelerated",
    ],
    leadership: [
      "Positioned governance and access control as first-class design requirements",
      "Connected risk management expectations to user experience and adoption",
    ],
    architecture: [
      "Designed governed retrieval and access patterns for regulated information",
      "Protected content exposure while improving search and response speed",
    ],
    outcomes: [
      "Improved access to regulatory knowledge",
      "Reduced reliance on manual expert intervention",
      "Managed compliance risk through governed architecture",
    ],
    stack: ["Agentic Retrieval-Augmented Generation", "Role-based access", "Governed content patterns"],
  },
  {
    id: "rfp-automation",
    category: "Commercial acceleration",
    title: "RFP Bid/No-Bid and Response Automation",
    headline: "Internal agents that increase response speed without losing judgment.",
    summary:
      "Built internal Copilot agents that evaluate bid opportunities against real capabilities and draft compliant responses from an evolving knowledge base.",
    impact: [
      "50-70% faster response cycles",
      "Stronger bid discipline",
      "Reduced effort for proposal teams",
      "Better quality and brand tone",
    ],
    leadership: [
      "Applied product thinking to internal commercial operations",
      "Connected capability reality, proposal quality, and executive decision-making",
    ],
    architecture: [
      "Knowledge-backed automation across historical RFP content and response assets",
      "Draft generation paired with gap analysis and recommendation logic",
    ],
    outcomes: [
      "Accelerated response velocity",
      "Improved consistency and compliance in outputs",
      "Created leverage for presales and solution teams",
    ],
    stack: ["Copilot agents", "Knowledge indexing", "Gap analysis", "Response & SOW generation"],
  },
  {
    id: "enterprise-roadmaps",
    category: "Executive strategy",
    title: "Enterprise IT Roadmaps and Cloud Transformation",
    headline: "Architecture strategy that gives large organizations a direction they can execute.",
    summary:
      "Led IT strategy engagements for large enterprise clients, delivering roadmaps from current-state assessment through target architecture across cloud, infrastructure, and AI transformation.",
    impact: [
      "Business-aligned target-state direction",
      "Multi-year transformation sequencing",
      "Executive confidence in major change programs",
    ],
    leadership: [
      "Worked directly with account and executive leadership on strategic planning",
      "Translated broad technical choices into business and program direction",
    ],
    architecture: [
      "Defined target architectures across Azure, AWS, and hybrid environments",
      "Mapped tactical migration steps from current state to target state",
    ],
    outcomes: [
      "Enabled large-scale cloud and infrastructure transformation",
      "Linked roadmaps to business priorities and measurable value",
      "Supported major renewals, extensions, and strategic decision-making",
    ],
    stack: ["Azure", "AWS", "Hybrid architecture", "Roadmap design", "Executive planning"],
  },
];

export const careerMetrics: CareerMetric[] = [
  {
    value: "20+ years",
    label: "Enterprise Transformation and Architecture Leadership",
  },
  {
    value: "3",
    label: "Director-level Leadership Roles",
  },
  {
    value: "$110M",
    label: "Portfolio Value in IBM Hosting Leadership Scope",
  },
  {
    value: "180 / 800 / 5",
    label: "Applications, Servers, and Data Centres Supported",
  },
  {
    value: "20+ / 200+",
    label: "Architects Led and Delivery Professionals Influenced",
  },
];

export const careerRoles: CareerRole[] = [
  {
    period: "2021 - Present",
    role: "Director of Architecture",
    company: "Centrilogic / WatServ",
    summary:
      "Leads and grows a high-performing architecture practice while driving AI capability from strategy through production delivery.",
    scale:
      "Current role spans AI, cloud, and enterprise architecture with direct responsibility for reusable delivery models and team development.",
    bullets: [
      "Architected and launched the AI Factory as a production and delivery model for Agentic AI.",
      "Designed the AI COE framework, AI Landing Zone, and AI Agent Factory on the Microsoft stack.",
      "Delivered enterprise AI solutions including contact-centre automation and agentic knowledge assistants.",
      "Works with account leadership and executives on proposals, SOWs, planning, and strategic client direction.",
    ],
    supportingSignals: [
      "Architecture team leadership across AI, cloud, and enterprise domains",
      "Executive translation of technical strategy into business action",
      "Operational focus on shipping governed, production-ready AI and AI managed services, not just demos",
    ],
    defaultOpen: true,
  },
  {
    period: "2015 - 2021",
    role: "Director, Consulting - Enterprise Architecture, Technical Strategy, Innovation",
    company: "CGI Inc.",
    summary:
      "Led architecture consulting teams, advised executives, and translated broad transformation goals into practical architecture and migration plans.",
    scale:
      "Scope included strategic public-sector and enterprise work, proposal leadership, and account-facing technical strategy.",
    bullets: [
      "Provided counsel to account leadership and executives, turning technical complexity into business decisions.",
      "Supported multi-million dollar renewals and extensions through strong technical leadership and contract development.",
      "Built tactical migration plans and target architectures aligned to client business goals.",
      "Developed and sold proposals to senior management and technical stakeholders.",
    ],
    supportingSignals: [
      "Executive-facing enterprise architecture",
      "Renewal and growth support on strategic accounts",
      "Roadmaps tied to business goals and operational realities",
    ],
  },
  {
    period: "2008 - 2015",
    role: "Senior IT Architect",
    company: "IBM Canada - Custom Hosting Services",
    summary:
      "Operated as part of the senior team managing a profitable hosting business with significant technical and commercial scope.",
    scale:
      "The portfolio covered 180 applications on 800 servers across 5 data centres with total contract value of $110M.",
    bullets: [
      "Led 20+ architects globally and governed end-to-end technical hosting solutions from engagement through production.",
      "Created common architecture and transition deliverables that improved consistency and standards alignment.",
      "Drove automation and process change that generated annual profits of up to $4M and cost savings of $2M.",
      "Provided thought leadership to 200+ service delivery professionals across multiple countries.",
    ],
    supportingSignals: [
      "Large-scale operational complexity",
      "Global leadership and standards governance",
      "Commercial accountability alongside architecture depth",
    ],
  },
  {
    period: "2002 - 2008",
    role: "Technical Lead and Architect",
    company: "IBM Canada - Common Development and Test Centre",
    summary:
      "Led major release and upgrade work while automating operations and improving platform reliability.",
    scale:
      "Early leadership scope combined technical decision-making, automation, and cross-team coordination across large server estates.",
    bullets: [
      "Delivered 100 percent successful upgrades during tenure with no failed changes.",
      "Automated build and upgrade processes for 300+ servers and created monitoring tooling.",
      "Chaired capacity planning and performance monitoring work to keep environments aligned to service levels.",
      "Coordinated with global architects to improve best-practice adherence.",
    ],
    supportingSignals: [
      "Strong delivery discipline",
      "Automation mindset before AI became the focus",
      "Foundational credibility in large-scale technical operations",
    ],
  },
];

export const educationHighlights = [
  "MBA, Managing Innovation and New Technology - McMaster University",
  "B.Eng.Mgt, Computer Engineering and Management - McMaster University",
  "Select recent learning across AI strategy, Microsoft and AWS cloud, and modern sales and advisory motions",
];

export const contactFocusAreas = [
  "Standing up an AI practice or operating model",
  "Moving enterprise AI from pilots to governed production delivery",
  "Hiring a strategic leader for architecture, AI, or transformation",
  "Connecting executive sponsorship to technical execution and measurable outcomes",
];