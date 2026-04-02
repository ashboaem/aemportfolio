export interface Project {
  slug: string;
  title: string;
  summary: string;
  categories: string[];
  heroImage: string;
  featured: boolean;
  order: number;
  client?: string;
  timeline?: string;
  role?: string;
  tools: string[];
  intro: string;
  challenge: string[];
  work: string[];
  solution: string[];
  designPriorities: string[];
  responsibilities: string[];
  lessons: string[];
  showcaseImages: string[];
}

export const projects: Project[] = [
  {
    slug: "offshore-technology-conference",
    title: "Offshore Technology Conference",
    summary: "Booth panels designed for bold, distance-readable impact.",
    categories: ["Print Production"],
    heroImage: "/images/projects-page-01.png",
    featured: true,
    order: 1,
    client: "OTC Event Booth",
    timeline: "2025",
    role: "Multimedia Designer",
    tools: ["InDesign", "Illustrator"],
    intro:
      "This project focused on translating complex conference messaging into a booth system that could be understood in seconds. The visual language leaned on confident type scale, restrained color use, and spacing that let the most important messages do the work.",
    challenge: [
      "The conference booth needed a full panel set that remained clear and legible from a distance while still communicating technical credibility.",
      "The system also had to work across multiple panel sizes and preserve a polished brand presence within a busy expo environment."
    ],
    work: [
      "Developed an oversized headline system for the primary hero panels.",
      "Built supporting diagrams and product callouts for smaller placements.",
      "Aligned color, type, and spacing so the full booth felt like one visual system."
    ],
    solution: [
      "I created a modular panel toolkit with bold typography, disciplined spacing, and clear information hierarchy to improve readability on the show floor.",
      "The final package gave the team a cohesive booth environment that was easier to scan and stronger from a distance."
    ],
    designPriorities: [
      "Clear visual hierarchy across panel sizes",
      "High readability for event foot traffic",
      "Consistent branding from entry to product detail"
    ],
    responsibilities: [
      "Designed the overall booth panel concept and production-ready layouts.",
      "Coordinated revisions to ensure messaging remained clear under print constraints.",
      "Prepared final files with production considerations in mind."
    ],
    lessons: [
      "Large-format design succeeds when hierarchy is treated as a viewing-distance problem, not just a layout problem.",
      "Simplifying the message made the booth feel more confident and more premium."
    ],
    showcaseImages: [
      "Entrance panel concept",
      "Product feature panel",
      "Messaging detail",
      "Booth side elevation",
      "Installation view",
      "Final production layout"
    ]
  },
  {
    slug: "reference-guide",
    title: "Reference Guide",
    summary: "Structured collateral designed to be useful, skimmable, and easy to trust.",
    categories: ["Print Production"],
    heroImage: "/images/projects-page-02.png",
    featured: true,
    order: 2,
    client: "Internal Marketing Team",
    timeline: "2024",
    role: "Multimedia Designer",
    tools: ["InDesign", "Illustrator"],
    intro:
      "This piece emphasized editorial discipline. The work centered on turning a dense collection of information into something that felt ordered, legible, and practical for repeated use.",
    challenge: [
      "The source material contained dense information and needed to feel accessible instead of overwhelming.",
      "The guide had to support quick scanning without losing accuracy or consistency."
    ],
    work: [
      "Reorganized content into a repeatable section structure.",
      "Defined a cleaner type hierarchy for headlines, callouts, and body copy.",
      "Built page templates that could scale to additional content updates."
    ],
    solution: [
      "The final guide used a more deliberate editorial system with clearer navigation cues and stronger typography.",
      "That structure made the document easier to scan while still holding a polished, professional tone."
    ],
    designPriorities: [
      "Readability over decoration",
      "Strong page rhythm for long-form content",
      "Consistent visual language across sections"
    ],
    responsibilities: [
      "Reframed the content architecture and page layouts.",
      "Established reusable document components for recurring content blocks.",
      "Prepared export-ready files for print and distribution."
    ],
    lessons: [
      "Editorial design improves when the structure is obvious before the styling is refined.",
      "Readers move faster when each page answers a single question clearly."
    ],
    showcaseImages: [
      "Cover treatment",
      "Contents spread",
      "Specification page",
      "Diagram page",
      "Detail layout",
      "Final guide spread"
    ]
  },
  {
    slug: "website-upgrade",
    title: "Website Upgrade",
    summary: "A clearer, more modern web presence shaped around content hierarchy and usability.",
    categories: ["Branding", "UI/UX", "Web"],
    heroImage: "/images/projects-homepage.png",
    featured: true,
    order: 3,
    client: "Company Website",
    timeline: "2025",
    role: "Designer and Front-End Partner",
    tools: ["Figma", "HTML/CSS", "Analytics"],
    intro:
      "This website refresh balanced brand presentation with usability. The project focused on a more intentional hierarchy, stronger consistency, and a cleaner system for presenting content.",
    challenge: [
      "The legacy site lacked visual consistency and made it difficult to prioritize key content for visitors.",
      "Navigation and page structure needed to support both branding goals and day-to-day content updates."
    ],
    work: [
      "Audited existing pages and simplified the content hierarchy.",
      "Created refreshed UI patterns for hero sections, cards, and navigation.",
      "Paired design decisions with implementation guidance for rollout."
    ],
    solution: [
      "The updated site improved clarity, reduced visual friction, and provided a stronger branded experience across major pages.",
      "It also introduced reusable interface patterns that made future updates easier to maintain."
    ],
    designPriorities: [
      "Cleaner visual system",
      "Better hierarchy for primary actions",
      "Consistency across templates and content types"
    ],
    responsibilities: [
      "Created UI direction, page layouts, and component patterns.",
      "Mapped content priorities to clearer user journeys.",
      "Supported implementation with front-end-ready design decisions."
    ],
    lessons: [
      "A better website often comes from reducing choices rather than adding more interface elements.",
      "Small consistency improvements compound across every page."
    ],
    showcaseImages: [
      "Homepage hero",
      "Navigation pattern",
      "Card system",
      "Section layout",
      "Mobile behavior",
      "Final visual polish"
    ]
  },
  {
    slug: "acosmibot",
    title: "Acosmibot",
    summary: "Branding and interface work for a digital product with a more playful, modern voice.",
    categories: ["Branding", "UI/UX", "Web"],
    heroImage: "/images/homepage.png",
    featured: false,
    order: 4,
    client: "Product Concept",
    timeline: "2024",
    role: "Brand and Web Designer",
    tools: ["Figma", "Illustrator"],
    intro:
      "This concept project explored how a more expressive brand system could still feel usable and clear in a digital product context.",
    challenge: [
      "The concept needed a visual system that felt contemporary without becoming generic.",
      "Product messaging had to stay approachable for a broad audience."
    ],
    work: [
      "Developed a distinctive color and type direction for the concept.",
      "Designed a landing page structure that balanced story, features, and conversion.",
      "Explored iconography and UI patterns that reinforced the brand tone."
    ],
    solution: [
      "The resulting identity felt more recognizable and gave the product a stronger digital presence."
    ],
    designPriorities: [
      "Distinctive personality",
      "Straightforward product storytelling",
      "Cohesion between brand and interface"
    ],
    responsibilities: [
      "Built the visual identity and key landing page concepts.",
      "Aligned UI choices with the broader brand tone.",
      "Prepared concept assets for presentation and iteration."
    ],
    lessons: [
      "Strong product identity depends on where brand expression appears inside the interface, not just outside it.",
      "Restraint kept the concept feeling more credible."
    ],
    showcaseImages: [
      "Identity concept",
      "Landing page hero",
      "Feature grid",
      "Mobile preview",
      "Icon study",
      "Brand detail"
    ]
  },
  {
    slug: "one-punch-pest-control",
    title: "One Punch Pest Control",
    summary: "Local-service branding and web support designed for clarity, trust, and quick action.",
    categories: ["Branding", "Web"],
    heroImage: "/images/homepage.png",
    featured: false,
    order: 5,
    client: "One Punch Pest Control",
    timeline: "2023",
    role: "Designer",
    tools: ["Illustrator", "Webflow"],
    intro:
      "This work focused on making the brand feel confident and practical. The result was a clearer customer-facing presence across both brand and web materials.",
    challenge: [
      "The brand needed to stand out in a crowded local-service market while still signaling professionalism and reliability.",
      "Web touchpoints had to make it easy for potential customers to understand services and make contact."
    ],
    work: [
      "Refined logo usage, color handling, and messaging hierarchy.",
      "Designed service-page sections with clear calls to action.",
      "Built supporting visuals for web and marketing collateral."
    ],
    solution: [
      "The project established a cleaner service brand and a more direct web experience oriented around trust and conversion."
    ],
    designPriorities: [
      "Local credibility",
      "Clear action paths",
      "Memorable but practical branding"
    ],
    responsibilities: [
      "Shaped the core identity direction and page composition.",
      "Supported web content and marketing asset design.",
      "Balanced personality with service clarity."
    ],
    lessons: [
      "Service brands perform better when the interface removes hesitation.",
      "Simple, direct messaging usually wins."
    ],
    showcaseImages: [
      "Logo usage",
      "Service page",
      "Call-to-action layout",
      "Web banner",
      "Mobile card",
      "Brand asset set"
    ]
  },
  {
    slug: "ms150",
    title: "MS150",
    summary: "Motion-forward campaign content built to energize participation and support event storytelling.",
    categories: ["Video", "Motion"],
    heroImage: "/images/homepage.png",
    featured: false,
    order: 6,
    client: "Event Campaign",
    timeline: "2024",
    role: "Motion Designer",
    tools: ["Premiere Pro", "After Effects"],
    intro:
      "This project centered on motion as a storytelling tool. The work focused on creating a repeatable visual rhythm that supported the campaign message and increased impact across deliverables.",
    challenge: [
      "Campaign content had to feel motivating and cohesive across multiple video placements and audience touchpoints.",
      "The motion system needed to support both storytelling and brand recognition."
    ],
    work: [
      "Developed short-form promotional video edits and supporting graphics.",
      "Built transitions, type animation, and layout systems for repeatable use.",
      "Balanced emotional storytelling with campaign clarity."
    ],
    solution: [
      "The final assets gave the campaign a more energetic visual identity and a consistent motion language across outputs."
    ],
    designPriorities: [
      "Emotional momentum",
      "Consistent motion language",
      "Flexible use across placements"
    ],
    responsibilities: [
      "Produced edits and motion graphics for campaign needs.",
      "Created reusable animation patterns for additional assets.",
      "Maintained clarity while increasing visual energy."
    ],
    lessons: [
      "Motion feels strongest when every transition supports the narrative instead of decorating it.",
      "Consistency in type and pacing helped the campaign feel unified."
    ],
    showcaseImages: [
      "Campaign opener",
      "Motion type frame",
      "Social teaser",
      "Transition study",
      "Event recap still",
      "Final export set"
    ]
  },
  {
    slug: "showroom-content",
    title: "Showroom Content",
    summary: "Video and motion assets designed to support in-person merchandising and product storytelling.",
    categories: ["Video", "Motion"],
    heroImage: "/images/homepage.png",
    featured: false,
    order: 7,
    client: "Retail Showroom",
    timeline: "2023",
    role: "Multimedia Designer",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    intro:
      "This showroom content work was built for environments where attention is earned quickly. The visual system emphasized pace, clarity, and a polished branded feel.",
    challenge: [
      "Showroom media needed to attract attention quickly while remaining brand-aligned and easy to update.",
      "The final pieces had to work in an environment where viewers engage briefly and from varying distances."
    ],
    work: [
      "Produced looping content for showroom displays and support screens.",
      "Combined product imagery, messaging, and motion cues into concise visual stories.",
      "Structured templates so future content could be refreshed efficiently."
    ],
    solution: [
      "The deliverables improved product storytelling in the showroom and introduced a more consistent visual cadence across display content."
    ],
    designPriorities: [
      "Quick comprehension",
      "Strong visual rhythm",
      "Flexible content templates"
    ],
    responsibilities: [
      "Directed the motion and visual layout system.",
      "Edited content for brief-viewing environments.",
      "Built reusable templates to support continued rollout."
    ],
    lessons: [
      "Environmental media works best when it respects limited attention spans.",
      "Template thinking made the content more sustainable to maintain."
    ],
    showcaseImages: [
      "Display loop still",
      "Product highlight sequence",
      "Motion template",
      "Messaging frame",
      "Retail environment still",
      "Final rollout sample"
    ]
  }
];
