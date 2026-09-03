/**
 * Central content source for Anamica's portfolio.
 * Update text, links, certificates and gallery items here — components read from this file.
 *
 * PRIVACY RULE: never store full credential IDs. Use masked form only (e.g. "XXXX-XXXX-4115").
 */

import portraitPhoto from "@/assets/photos/portrait.jpg";
import heroPhoto from "@/assets/photos/hero-2.jpg";
import teachingPhoto from "@/assets/photos/teaching.jpg";
import resumePdf from "@/assets/anamica-resume.pdf";

export const photos = {
  hero: heroPhoto,
  portrait: portraitPhoto,
  teaching: teachingPhoto,
};

export const profile = {
  name: "Anamica",
  pronouns: "She/Her",
  location: "Ludhiana, Punjab, India",
  education: "B.Tech Computer Science & Engineering, Lovely Professional University",
  graduation: "2029",
  cgpa: "9.07",
  headline:
    "B.Tech CSE Student | Frontend Developer | Google Gemini Student Ambassador | EventEye Brand Face | Anchor | Hackathon Enthusiast",
  email: "anamicagupta246@gmail.com",
  linkedin: "https://www.linkedin.com/in/ana2406/",
  github: "https://github.com/Anamicacodes",
  /** Digits only, with country code — used to build the wa.me link. */
  whatsapp: "919876543210",
  whatsappMessage:
    "Hi Anamica! I came across your portfolio and would like to discuss a collaboration.",
  cvUrl: resumePdf,
};

/** Ready-to-use WhatsApp deep link (single source of truth). */
export const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
  profile.whatsappMessage,
)}`;


export interface SkillGroup {
  title: string;
  note?: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    skills: ["C", "C++", "Python", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Libraries",
    note: "Currently exploring",
    skills: ["NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["VS Code", "Git", "GitHub", "HackerRank", "LeetCode"],
  },
  {
    title: "Beyond the code",
    skills: [
      "Event Management",
      "Public Speaking",
      "Team Collaboration",
      "Problem-Solving",
      "Adaptability",
      "Communication",
      "Critical Thinking",
      "Leadership",
    ],
  },
];

export interface Experience {
  role: string;
  org: string;
  period: string;
  location: string;
  logoInitial: string;
  points: string[];
  skills: string[];
  certificate?: string; // certificate title this links to, if any
}

export const experiences: Experience[] = [
  {
    role: "Google Gemini Student Ambassador",
    org: "Google Student Ambassador Program",
    period: "2025 – 2026",
    location: "Remote",
    logoInitial: "G",
    points: [
      "Represented Google Gemini and helped students explore AI tools and productivity solutions.",
      "Conducted awareness sessions and assisted peers in understanding responsible AI use.",
      "Supported technology-focused events and student engagement initiatives.",
      "Developed communication, leadership, community management, and event coordination skills.",
    ],
    skills: ["Community Management", "AI Awareness", "Public Speaking", "Event Coordination"],
    certificate: "Google Student Ambassador Program — Certificate of Participation",
  },
  {
    role: "Brand Face — EventEye",
    org: "EventEye",
    period: "September 2025 – October 2025",
    location: "Jalandhar, Punjab, India",
    logoInitial: "E",
    points: [
      "EventEye is a startup that manages events across India, working closely with colleges and universities.",
      "Represented EventEye as an official Brand Face.",
      "Supported student outreach, digital engagement, and community representation.",
      "Helped strengthen EventEye's presence among student communities and campus networks.",
    ],
    skills: ["Branding", "Outreach", "Digital Engagement"],
  },
  {
    role: "Web Development Intern",
    org: "Crupid Technology Solution LLP",
    period: "May 2026 – June 2026",
    location: "Internship",
    logoInitial: "C",
    points: [
      "Completed an internship in Web Development.",
      "Gained practical exposure to web design, frontend and backend development, database integration, and website deployment.",
      "Contributed to learning and implementation across the web-development workflow.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Databases", "Deployment"],
    certificate: "Web Development Internship — Crupid Technology Solution LLP",
  },
];

export interface Project {
  title: string;
  status: string;
  inDevelopment?: boolean;
  tech: string[];
  description: string;
  features: string[];
  // TODO: add real links when available
  liveUrl?: string;
  githubUrl?: string;
  tier?: "major" | "mini";
}

export const projects: Project[] = [
  {
    title: "Cuddle — Clothing Brand Website",
    status: "Currently in development",
    inDevelopment: true,
    tech: ["HTML", "CSS", "JavaScript"],
    tier: "major",
    description:
      "A winter-wear clothing brand concept I am currently developing, focused on creating a cozy, stylish and youthful identity for winter fashion.",
    features: [
      "Cozy cardigans & winter-wear listings",
      "Product-detail pages",
      "Shopping cart functionality",
      "Responsive navigation",
      "Consistent visual branding",
      "Scalable frontend structure",
    ],
  },
  {
    title: "Free Classroom Finder — LPU Touch",
    status: "Ongoing",
    inDevelopment: true,
    tier: "major",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A web page on the LPU Touch app that scans the university timetable and lists classrooms that are free at any given slot — so students can quickly find a place to study, practise or hold a session.",
    features: [
      "Matches free rooms against the live timetable",
      "Filter by block and time slot",
      "Built for the LPU Touch platform",
      "Made for students, by a student",
    ],
  },
  {
    title: "Tic-Tac-Toe",
    status: "Completed",
    tier: "mini",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "The classic two-player grid game in the browser — clean UI, instant restarts and win detection.",
    features: [
      "Two-player mode",
      "Win & draw detection",
      "Score tracking",
      "One-click restart",
    ],
  },
  {
    title: "Snake Game",
    status: "Completed",
    tier: "mini",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A retro-style snake game with smooth keyboard controls, growing difficulty and a high-score chase.",
    features: [
      "Keyboard controls",
      "Speed ramps up as you grow",
      "High-score tracking",
      "Collision & boundary logic",
    ],
  },
  {
    title: "Rock · Paper · Scissors",
    status: "Completed",
    tier: "mini",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A quick-play game against the computer with animated results and a running scoreboard.",
    features: [
      "Play vs computer",
      "Randomised computer moves",
      "Animated result reveal",
      "Session scoreboard",
    ],
  },
];

export type CertCategory =
  | "Development"
  | "AI"
  | "Hackathons"
  | "Leadership"
  | "Community"
  | "Workshops";

export interface Certificate {
  title: string;
  issuer: string;
  category: CertCategory;
  date?: string;
  detail?: string;
  maskedId?: string; // masked credential, last 4 only — never the full ID
}

/**
 * Certificate list compiled from the certificate PDF index provided in the brief.
 * TODO: verify each title/date against the uploaded PDF, add thumbnails and
 * PDF viewer links (drop files in /public/certificates/).
 */
export const certificates: Certificate[] = [
  {
    title: "Google Student Ambassador Program — Certificate of Participation",
    issuer: "Google",
    category: "Community",
    detail: "Participation in the Google Student Ambassador Program.",
  },
  {
    title: "Google Student Ambassador Program — Pitch Night Edition",
    issuer: "Google",
    category: "Community",
    detail: "Pitch Night edition recognition.",
  },
  {
    title: "Web-a-thon 2.0",
    issuer: "Details available in certificate",
    category: "Hackathons",
  },
  {
    title: "CodeFest'26 — CTF Event",
    issuer: "Details available in certificate",
    category: "Hackathons",
  },
  {
    title: "GSSoC 2026 — Contributor / Mentee Acceptance",
    issuer: "GirlScript Summer of Code",
    category: "Development",
  },
  {
    title: "Web Development Internship",
    issuer: "Crupid Technology Solution LLP",
    category: "Development",
    date: "May – June 2026",
  },
  {
    title: "Times Critical Thinking Championship 2026",
    issuer: "Times",
    category: "Leadership",
  },
  {
    title: "Basics of Training & Leadership",
    issuer: "Cambridge International Qualifications / UniAthena",
    category: "Leadership",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Details available in certificate",
    category: "AI",
  },
  {
    title: "AI Tools Workshop",
    issuer: "be10x",
    category: "Workshops",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "Details available in certificate",
    category: "Development",
  },
  {
    title: "Cod-A-Fest 3.0 — Astitwa",
    issuer: "Details available in certificate",
    category: "Hackathons",
  },
  {
    title: "Introduction to Prompt Engineering with GitHub Copilot",
    issuer: "Details available in certificate",
    category: "AI",
  },
  {
    title: "Computer Programming",
    issuer: "Neo Colab",
    category: "Development",
  },
  {
    title: "Data Science & Analytics",
    issuer: "HP LIFE",
    category: "Development",
  },
  {
    title: "Introduction to MS Excel",
    issuer: "Details available in certificate",
    category: "Workshops",
  },
  {
    title: "Learning Full Stack React",
    issuer: "Details available in certificate",
    category: "Development",
  },
  {
    title: "Introduction to Python",
    issuer: "Details available in certificate",
    category: "Development",
  },
  {
    title: "Power BI for Beginners",
    issuer: "Details available in certificate",
    category: "Development",
  },
  {
    title: "Professional Networking for Career Growth",
    issuer: "HP LIFE",
    category: "Community",
  },
  {
    title: "NESTGEN Manufacturing & Engineering Masterclass",
    issuer: "NESTGEN",
    category: "Workshops",
  },
  {
    title: "NESTGEN Digital & Marketing Masterclass",
    issuer: "NESTGEN",
    category: "Workshops",
  },
  {
    title: "Community Development Project",
    issuer: "Times Foundation",
    category: "Community",
  },
];

export const certCategories: Array<"All" | CertCategory> = [
  "All",
  "Development",
  "AI",
  "Hackathons",
  "Leadership",
  "Community",
  "Workshops",
];

import scienceCongress from "@/assets/photos/science-congress.jpg";
import vguJaipur from "@/assets/photos/vgu.jpg";
import teamCrew from "@/assets/photos/team.jpg";
import pravirbhavTalk from "@/assets/photos/talk.jpg";
import mittalPodium from "@/assets/photos/podium.jpg";
import hypeCrew from "@/assets/photos/hype.jpg";
import googlify from "@/assets/photos/googlify.jpg";
import arenaTeam from "@/assets/photos/arena-team.jpg";
import blazerCampus from "@/assets/photos/blazer.jpg";
import cdp1 from "@/assets/photos/cdp-1.jpg";
import cdp2 from "@/assets/photos/cdp-2.jpg";
import cdp3 from "@/assets/photos/cdp-3.jpg";
import cdp4 from "@/assets/photos/cdp-4.jpg";
import cdp5 from "@/assets/photos/cdp-5.jpg";
import cdpNews from "@/assets/photos/cdp-news.jpg";
import hackathonSquad from "@/assets/photos/hackathon.jpg";
import roomates from "@/assets/photos/roomates.jpg";
import roomates2 from "@/assets/photos/roomates2.jpg";

export const personalPhotos = {
  roomates: roomates,
  roomates2: roomates2,
};

export interface GalleryItem {
  label: string;
  category: string;
  date?: string;
  src?: string;
}

export const galleryCategories = [
  "All",
  "CDP",
  "Public speaking",
  "Anchoring",
  "Community building",
  "Workshops",
  "Hackathons",
  "Campus events",
  "Team activities",
  "Learning & networking",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    label: "Critical thinking seminar, Jagraon",
    category: "CDP",
    date: "Jul 2026",
    src: cdp3,
  },
  {
    label: "Teaching machine language basics",
    category: "CDP",
    date: "Jul 2026",
    src: cdp1,
  },
  {
    label: "Session with students, Salempura Road school",
    category: "CDP",
    date: "Jul 2026",
    src: cdp2,
  },
  {
    label: "Outdoor session, Sadarpura Road school",
    category: "CDP",
    date: "Jul 2026",
    src: cdp4,
  },
  {
    label: "Full house at the CDP workshop",
    category: "CDP",
    date: "Jul 2026",
    src: cdp5,
  },
  {
    label: "Newspaper coverage of the critical thinking seminar",
    category: "CDP",
    date: "Jul 2026",
    src: cdpNews,
  },
  {
    label: "Hackmanthan 2025 squad",
    category: "Hackathons",
    date: "2025",
    src: hackathonSquad,
  },
  {
    label: "At the Indian Science Congress, LPU",
    category: "Public speaking",
    date: "Jan 2024",
    src: scienceCongress,
  },
  {
    label: "Presenting at Avirbhav, LPU",
    category: "Public speaking",
    src: pravirbhavTalk,
  },
  {
    label: "On the podium at Mittal School of Business",
    category: "Anchoring",
    src: mittalPodium,
  },
  {
    label: "Hype crew on stage, VGU Jaipur",
    category: "Community building",
    src: hypeCrew,
  },
  {
    label: "Team Arena, seated for the competition rounds",
    category: "Team activities",
    date: "Aug 2026",
    src: arenaTeam,
  },
  {
    label: "With the Hackmanthan 2025 team",
    category: "Team activities",
    date: "2025",
    src: teamCrew,
  },
  {
    label: "Googlify 2024 at LPU",
    category: "Learning & networking",
    date: "Sep 2024",
    src: googlify,
  },
  {
    label: "Campus formals day",
    category: "Campus events",
    src: blazerCampus,
  },
  {
    label: "Visiting VGU Jaipur",
    category: "Campus events",
    src: vguJaipur,
  },
];


export interface Milestone {
  title: string;
  period: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    title: "Started B.Tech CSE",
    period: "2025",
    description: "Began Computer Science & Engineering at Lovely Professional University.",
  },
  {
    title: "Google Gemini Student Ambassador",
    period: "2025 – 2026",
    description: "Represented Google Gemini and led AI awareness among students.",
  },
  {
    title: "EventEye Brand Face",
    period: "Sep – Oct 2025",
    description: "Official Brand Face supporting student outreach and engagement.",
  },
  {
    title: "Hackathons & coding events",
    period: "2025 – 2026",
    description: "Web-a-thon 2.0, CodeFest'26 CTF, Cod-A-Fest 3.0 and more.",
  },
  {
    title: "Web Development Internship",
    period: "May – June 2026",
    description: "Hands-on web development at Crupid Technology Solution LLP.",
  },
  {
    title: "Certifications across AI, data & cloud",
    period: "Ongoing",
    description: "20+ certificates spanning AI, programming, cloud, and leadership.",
  },
  {
    title: "Community development",
    period: "Ongoing",
    description: "Community projects with the Times Foundation and student initiatives.",
  },
  {
    title: "Building Cuddle",
    period: "Ongoing",
    description: "Developing a winter-wear clothing brand concept.",
  },
];

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Collaborate", href: "/#collaborate" },
  { label: "Contact", href: "/#contact" },
];


/* ---------------------------------------------------------------------------
 * Compact, interactive content blocks (About facets, Right now, Achievements,
 * Brand collaborations). Each lives in exactly one place on the site.
 * ------------------------------------------------------------------------ */

export interface Facet {
  id: string;
  label: string;
  tagline: string;
  detail: string;
  tags: string[];
}

export const facets: Facet[] = [
  {
    id: "stage",
    label: "On Stage",
    tagline: "Anchoring, public speaking, events",
    detail:
      "Happiest with a mic — anchoring SISSCON 2026, HackManthan and Web-a-thon 2.0, and speaking at campus stages.",
    tags: ["Anchoring", "Public speaking", "Events"],
  },
  {
    id: "desk",
    label: "At My Desk",
    tagline: "C, C++, Python, DSA",
    detail:
      "First-year CSE at LPU with a 9.07 CGPA — building fundamentals in C and C++, solving DSA, and writing Python.",
    tags: ["C", "C++", "Python", "DSA"],
  },
  {
    id: "building",
    label: "Building",
    tagline: "Cuddle, web projects, creative ideas",
    detail:
      "Developing Cuddle, a winter-wear clothing brand concept, plus web projects like the LPU Touch classroom finder.",
    tags: ["Cuddle", "Frontend", "Product ideas"],
  },
  {
    id: "beyond",
    label: "Beyond Code",
    tagline: "Dance, events, content & modeling",
    detail:
      "12 years of Kathak, Bharatanatyam and classical dance, poetry and sketching — plus brand face and content work.",
    tags: ["Dance", "Content", "Brand face"],
  },
];

export const currentlyLearning = ["OOP in C++", "Data Structures & Algorithms (DSA)"];

export const rightNow = [
  { verb: "Learning", value: "C++ OOP + DSA" },
  { verb: "Building", value: "Cuddle" },
  { verb: "Exploring", value: "Brand collaborations & content" },
  { verb: "Doing", value: "Anchoring & events" },
];

export interface Achievement {
  title: string;
  meta: string;
  detail: string;
}

export const achievements: Achievement[] = [
  {
    title: "1st Position — Inter-Hostel State Representation",
    meta: "Dance competition",
    detail: "Represented Punjab and took first place in the inter-hostel state representation.",
  },
  {
    title: "Anchored SISSCON 2026",
    meta: "Conference stage",
    detail: "Hosted the conference and kept a full auditorium running to schedule.",
  },
  {
    title: "Anchored HackManthan & Web-a-thon 2.0",
    meta: "Hackathon stages",
    detail: "On the mic across two campus hackathons — openings, rounds and results.",
  },
  {
    title: "Brand Face of EventEye",
    meta: "Sep – Oct 2025",
    detail: "Official face of the campus event startup, driving student outreach.",
  },
];

export const brandWork = [
  "Brand & product promotional shoots",
  "Short-form promotional content",
  "Fashion & clothing promotions",
  "Café, food & lifestyle promotions",
  "Event promotion",
  "Brand representation",
];

/** Secondary destinations tucked into the desktop "More" menu. */
export const moreLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Certificates", href: "/certificates" },
  { label: "Other projects & games", href: "/#projects" },
  { label: "More about me", href: "/more-about-me" },
  { label: "Journey", href: "/#journey" },
];
