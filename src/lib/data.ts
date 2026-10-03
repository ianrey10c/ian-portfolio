export const profile = {
  name: "Ian Rey Cordova",
  firstName: "Ian",
  role: "Virtual Assistant",
  focus: "Web, Funnels & AI Content",
  email: "ianrey10c@gmail.com",
  phone: "0905 530 1244",
  phoneHref: "tel:+639055301244",
  location: "Agdao, Davao City, Philippines",
  photo: "/images/my-picture.jpg",
  intro:
    "Web-focused digital specialist building and optimizing high-performing websites, landing pages, and complete marketing funnels that support lead generation, conversion, and business growth.",
  summary: [
    "I'm a web-focused digital specialist with a strong emphasis on building and optimizing high-performing websites, landing pages, and complete marketing funnels. I care about seamless user experiences that support lead generation, conversion, and overall business growth.",
    "I work hands-on in GoHighLevel, managing both main accounts and sub-accounts. I build landing pages, develop automated pipelines, and integrate communication channels such as Instagram, Facebook, and SMS to streamline customer engagement and follow-ups.",
    "I combine technical web development with digital marketing strategy, including email automation and funnel optimization, to deliver end-to-end solutions. I also bring a creative edge in content production, using AI tools like ChatGPT, Gemini, and HeyGen alongside design and video platforms to support modern, conversion-focused campaigns.",
  ],
  languages: ["English", "Tagalog", "Bisaya"],
};

export const resume = {
  href: "/resume.pdf",
  fileName: "Ian-Rey-Cordova-Resume.pdf",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
];

export const stats = [
  { value: 6, suffix: "+", label: "Years of experience" },
  { value: 5, suffix: "", label: "Long-term clients" },
  { value: 20, suffix: "", label: "Tools in the kit" },
  { value: 7, suffix: "", label: "WordPress sites managed at once" },
];

export const tools = [
  "WordPress",
  "HighLevel",
  "ClickFunnels",
  "Mailchimp",
  "ActiveCampaign",
  "ChatGPT",
  "Gemini",
  "HeyGen",
  "CapCut",
  "Canva",
  "Filmora",
  "LearnDash",
  "Lodgify",
  "Squarespace",
  "Kajabi",
  "Infusionsoft",
  "Facebook",
  "Instagram",
  "TikTok",
  "CSS",
];

export const skillGroups = [
  {
    title: "Websites & CMS",
    items: ["WordPress", "CSS", "Squarespace", "Kajabi", "LearnDash", "Lodgify"],
  },
  {
    title: "Funnels & CRM",
    items: ["HighLevel", "ClickFunnels", "Infusionsoft"],
  },
  {
    title: "Email Marketing",
    items: ["Mailchimp", "ActiveCampaign"],
  },
  {
    title: "AI Tools",
    items: ["ChatGPT", "Gemini", "HeyGen"],
  },
  {
    title: "Design & Video",
    items: ["Canva", "CapCut", "Filmora"],
  },
  {
    title: "Social Platforms",
    items: ["Facebook", "Instagram", "TikTok"],
  },
];

export const services = [
  {
    icon: "globe",
    title: "Websites & Landing Pages",
    description:
      "WordPress builds, Elementor layouts, and landing pages that stay secure, updated, and fast on every device.",
    tags: ["WordPress", "Elementor", "Squarespace", "Kajabi"],
  },
  {
    icon: "workflow",
    title: "Funnels & CRM Automation",
    description:
      "GoHighLevel accounts and sub-accounts, automated pipelines, and Instagram, Facebook, and SMS wired into one follow-up flow.",
    tags: ["HighLevel", "ClickFunnels", "Infusionsoft"],
  },
  {
    icon: "mail",
    title: "Email Marketing",
    description:
      "Campaigns and automations that keep leads warm and move customers through the funnel without manual chasing.",
    tags: ["Mailchimp", "ActiveCampaign"],
  },
  {
    icon: "sparkles",
    title: "AI-Powered Content",
    description:
      "Short-form video and social content ideated, scripted, and produced faster with generative AI in the daily workflow.",
    tags: ["ChatGPT", "Gemini", "HeyGen", "CapCut"],
  },
  {
    icon: "graduation",
    title: "Courses & Booking Platforms",
    description:
      "Online learning platforms on LearnDash and property booking integrations through Lodgify, linked to the rest of the stack.",
    tags: ["LearnDash", "Lodgify"],
  },
  {
    icon: "file",
    title: "Admin & Content Support",
    description:
      "Inbox, scheduling, fillable PDFs, formatted documents, proofreading, and media prepared and ready to publish.",
    tags: ["Documents", "Scheduling", "Proofreading"],
  },
] as const;

export type Experience = {
  client: string;
  role: string;
  period: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    client: "Teneille Hunter",
    role: "Social Media & AI Content Specialist",
    period: "2025 – 2026",
    highlights: [
      "Spearheaded short-form video strategies built on viral trends across Facebook Reels, Instagram Reels, and TikTok to maximize audience reach.",
      "Integrated generative AI into daily workflows, using ChatGPT and Gemini Pro for rapid content ideation, copywriting, and scripting.",
      "Produced, edited, and upscaled engaging social media videos in CapCut and designed visual assets in Canva.",
      "Managed property management and booking platform integration using Lodgify.",
      "Stayed ahead of digital trends by experimenting with AI video generation platforms like HeyGen to learn advanced, budget-friendly content creation workflows.",
    ],
    stack: ["ChatGPT", "Gemini", "HeyGen", "CapCut", "Canva", "Lodgify"],
  },
  {
    client: "Grace Garcia",
    role: "Web Developer & Social Media Manager",
    period: "2024 – 2025",
    highlights: [
      "Oversaw complete social media management for Facebook and Instagram, ensuring cohesive brand messaging and engaging visual content.",
      "Served as the primary multimedia editor, creating high-quality graphics and videos with Adobe Photoshop, Adobe Illustrator, Filmora, Canva, and CapCut.",
      "Worked hands-on with GoHighLevel (GHL).",
    ],
    stack: ["HighLevel", "Photoshop", "Illustrator", "Filmora", "Canva", "CapCut"],
  },
  {
    client: "Marie Gress",
    role: "Website Manager & WordPress Support Specialist",
    period: "2023 – 2024",
    highlights: [
      "Managed and maintained 4–7 WordPress websites, keeping them secure, updated, and fully functional.",
      "Performed daily monitoring of WordPress core, Elementor, plugins, and themes to identify and apply the updates needed for stability and performance.",
      "Handled routine website maintenance, content updates, layout adjustments in Elementor, and troubleshooting of technical issues.",
      "Regularly tested websites after updates to ensure compatibility, responsiveness, and a seamless user experience across all managed sites.",
    ],
    stack: ["WordPress", "Elementor", "Plugins & Themes"],
  },
  {
    client: "Rebecca Fagan",
    role: "Web Developer & Marketing Automation Specialist",
    period: "2020 – 2024",
    highlights: [
      "Designed, built, and maintained WordPress websites and online learning platforms using LearnDash.",
      "Managed sales funnels in ClickFunnels and GoHighLevel (GHL), supporting lead generation and customer conversions.",
      "Created and managed email marketing campaigns and automations using Mailchimp and ActiveCampaign.",
      "Handled Facebook and Instagram advertising campaigns and produced engaging video content with CapCut, WeVideo, and Vimeo to support the brand's online presence.",
    ],
    stack: ["WordPress", "LearnDash", "ClickFunnels", "HighLevel", "Mailchimp", "ActiveCampaign"],
  },
  {
    client: "Amy Scialdone",
    role: "Administrative & Content Support Specialist",
    period: "2021 – 2022",
    highlights: [
      "Created and edited fillable PDF documents and formatted Microsoft Word files, including proofreading, correcting grammar and spelling, and paraphrasing content for clarity and professionalism.",
      "Edited video content for social media, ensuring high-quality and engaging results.",
      "Provided administrative and content support by preparing documents and media assets for publication, keeping the workflow organized and supporting audience engagement across social platforms.",
    ],
    stack: ["Microsoft Word", "PDF Forms", "Video Editing"],
  },
];

export const testimonials = [
  {
    name: "Rebecca Fagan",
    title: "Physiotherapist, Yoga & Mindfulness · Integrative Physioyoga PD Retreats",
    image: "/images/rebecca-fagan.jpg",
    source: "Message on LinkedIn",
    quote: [
      "Ian has been a great help with my IT, linking my platforms. He effectively works to find solutions to problems in my LearnDash and follows through on tasks. Great to work with.",
    ],
  },
  {
    name: "Grace Garcia",
    title: "Founder & Owner · Swanky! Paramount Aesthetics",
    image: "/images/grace-garcia.jpg",
    source: "Letter of recommendation",
    quote: [
      "During our time working together, Ian consistently demonstrated reliability, organization, and strong professional judgment. Ian followed tasks and instructions accurately and was excellent at managing emails, scheduling, and outgoing communications. His ability to stay consistent with scheduling and follow-ups helped keep operations organized and running efficiently.",
      "He is a strong communicator: clear, responsive, and dependable. Ian did not miss workdays and showed a high level of accountability and professionalism throughout our working relationship.",
      "Additionally, Ian is very tech-savvy and quickly adapted to the systems and tools. His comfort with technology allowed him to work efficiently and independently, making him a valuable support asset to my business.",
      "I confidently recommend Ian Rey Cordova for any virtual assistant or administrative support role. He would be an asset to any team seeking someone dependable, communicative, and organized.",
    ],
  },
];
