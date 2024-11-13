import {
  AppWindow,
  LayoutPanelTop,
  Code,
  Server,
  Cloud,
  GitGraph,
  Database,
  List,
  FileText,
} from "lucide-react";

export const personalInfo = {
  name: "Manohar Kakumani",
  title: "Full Stack Developer | Technology Explorer | Open Source Enthusiast",
  location: "Erie, PA",
  email: "manoharkakumani@gmail.com",
  github: "https://github.com/manoharkakumani",
  linkedin: "https://linkedin.com/in/manoharkakumani",
};

export const education = [
  {
    degree: "Master of Science in Information Technology",
    school: "Gannon University",
    location: "Erie, PA",
    gpa: "3.78",
    date: "Dec 2024",
  },
  {
    degree:
      "Bachelor of Technology, Electronics and Communications Engineering",
    school: "Koneru Lakshmaiah Education Foundation",
    gpa: "9.16",
    date: "May 2020",
  },
];

export const experience = [
  {
    title: "Graduate Teaching Assistant",
    company: "Gannon University",
    location: "Erie, PA",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Assisted students in overcoming technical challenges during labs",
      "Worked with self-hosted applications including Coolify, Penpot, Supabase",
      "Used Cloudflare for secure VM connections",
      "Developed and deployed React.js applications using Docker",
    ],
  },
  {
    title: "Assistant Systems Engineer",
    company: "Tata Consultancy Services",
    location: "Bangalore, India",
    date: "Jan 2021 - Jun 2022",
    points: [
      "Deployed SAP solutions across diverse cloud environments",
      "Reduced deployment time by 25%",
      "Managed cloud migration projects with zero downtime",
      "Reduced issue resolution time by 30%",
    ],
  },
];

export const projects = [
  {
    title: "Vehicle Breakdown Service App",
    description:
      "A mobile app using MERN stack to connect drivers with nearby mechanics, featuring real-time location tracking, route planning, and secure payments.",
    technologies: [
      "React Native",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Stripe",
      "WebSockets",
    ],
    category: "fullstack",
  },
  {
    title: "Chat System",
    description:
      "A full-stack video and text chat system with peer-to-peer communication using WebRTC and WebSockets.",
    technologies: ["MERN Stack", "WebRTC", "WebSockets", "Tailwind CSS"],
    category: "fullstack",
  },
  {
    title: "Mano: Networking Application",
    description:
      "A Python networking application implementing data communication and protocol handling.",
    technologies: ["Python", "Socket Programming", "Network Protocols"],
    category: "backend",
  },
  {
    title: "MyMo: Byte Code Interpreter",
    description:
      "A C-based bytecode interpreter demonstrating low-level programming expertise.",
    technologies: ["C", "System Programming", "Computer Architecture"],
    category: "system",
  },
  {
    title: "Online Banking System",
    description:
      "A Java-based terminal application for banking operations with SQL database integration.",
    technologies: ["Java", "SQL", "Terminal UI"],
    category: "backend",
  },
  {
    title: "Online Voting System",
    description: "A secure web-based voting system with database integration.",
    technologies: ["PHP", "SQL", "Web Security"],
    category: "fullstack",
  },
  {
    title: "AES Block Cipher",
    description:
      "Hardware implementation of the AES encryption algorithm in Verilog.",
    technologies: ["Verilog", "HDL", "Cryptography"],
    category: "system",
  },
];

export const skills = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: "JavaScript, Python, Java, C, Elixir",
  },
  {
    icon: AppWindow,
    title: "Frontend Development",
    skills: "React, React Native, HTML5, CSS3, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: "Node.js, Express, MongoDB, SQL, REST APIs",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: "AWS, Azure, Docker, System Architecture, TCP/IP",
  },
  {
    icon: Database,
    title: "Data Analysis & Database Management",
    skills: "Google Analytics, SQL, Microsoft Excel, MongoDB",
  },
  {
    icon: GitGraph,
    title: "Version Control & Collaboration",
    skills: "Git, GitHub, GitLab",
  },
  {
    icon: List,
    title: "Project Management & Development",
    skills: "Agile, Scrum, MVP Creation, JIRA, Atlassian, Scope Management",
  },
  {
    icon: FileText,
    title: "API Integration & Development",
    skills: "REST APIs, APIs, SDKs, Webhooks",
  },
  {
    icon: LayoutPanelTop,
    title: "Design & UX/UI",
    skills: "Figma, Sketch, Wireframing, Prototyping",
  },
];
