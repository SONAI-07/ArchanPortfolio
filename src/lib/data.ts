export const profileData = {
    name: "Archan Banerjee",

    education: "NIT Hamirpur",
    location: "India",
    roles: ["AI Engineer", "Backend Engineer", "Growth Marketing"],
    aboutBullets: [
        "I build high-performance products combining full-stack engineering with AI to ship things that actually work in productions.",
        "Currently mapping generative AI with Agentic web architecture — building platforms, automating workflows, and learning by shipping.",
        "Open to collaborating on ambitious ideas."
    ]
};

export const contactLinks = [

    { name: "Mail", href: "mailto:sonaibanerjee571@gmail.com", icon: "mail" },
    { name: "X/Twitter", href: "https://x.com/ArchanPsioppen", icon: "X" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/archan-banerjee-b5793521b/", icon: "linkedin" },
    { name: "GitHub", href: "https://github.com/SONAI-07", icon: "github" },

];

export const projects = [
    {
        id: "callsense",
        title: "CallSense AI",
        year: "2026",
        featured: true,
        image: "/callsense.jpg",
        description:
            "Platform to spin up production-grade voice AI sales agent that holds natural phone conversations, " +
            "tracks purchase intent as it grows, and executes business actions.",
        tags: ["Python", "FastAPI", "LangGraph", "Twilio", "Redis", "PostgreSQL", "WhatsApp API", "Prometheus", "LangSmith"],
        links: {
            readme: "https://github.com/SONAI-07/Voice_AI-Agent/blob/main/README.md",
            repo: "https://github.com/SONAI-07/Voice_AI-Agent",
            live: "",
        },
    },
    {
        id: "spring-app",
        title: "Service-Provider web-App",
        year: "2025",
        featured: true,
        image: "/bhaya.jpg",
        description:
            "A full-stack Java web application built on Spring Boot — replace with your one-line pitch: what it does, for whom, and the technical differentiator (security model, caching, integrations).",
        tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Docker", "REST APIs"],


    },
    {
        id: "Agentic CI/CD",
        title: "Autonomous Agentic CI/CD",
        year: "2026",
        featured: true,
        image: "/CI:CD.jpg",
        description:
            "Swarm of agents built for automated review & push to Prod.and serious merge conflicts escalated to devs",
        tags: ["Python","Fast API", "Evals" , "Building ..."],
    },
];

export const experience = {
    title: "Experience",
    date: "Campus → Production",
    subtitle: "three arenas, one operator mindset",
    nodes: [
        {
            title: "The Builder — Independent AI & Backend Engineer",
            desc: "Ships production-grade AI systems end-to-end: CallSense AI (voice agents with idempotent business actions, crash-safe memory, and Prometheus + LangSmith observability), a Spring Boot service platform, and an autonomous agentic CI/CD currently in build. Designs by three rules: failure is expected, real-time and durable are separate lifecycles, and nothing runs unobserved.",
        },
        {
            title: "The Operator — Finance & Growth Lead, Campus Scale",
            desc: "Lead Financial Coordinator for one of the largest tech fests — owned budgets, sponsors, and procurement end-to-end.",
        },
        {
            title: "The Communicator — Writing & Speaking in Public",
            desc: "Journals system design and product journeys on Medium and has hosted and spoken on main stages since school.",
        }
    ],
    stats: [
        { value: "BUILDER", label: "production AI systems" },
        { value: "OPERATOR", label: "national-scale events" },
        { value: "WRITER", label: "Medium & Substack" },
        { value: "SPEAKER", label: "main-stage since school" },
        { value: "ATHLETE", label: "track-trained discipline" },
    ],
};


export type SkillCategory = "Languages" | "Backend" | "Databases" | "AI / ML" | "Frontend" | "DevOps";

export const skills: { name: string; category: SkillCategory; icon: string; color: string }[] = [
    { name: "Python", category: "Languages", icon: "SiPython", color: "#3776AB" },
    { name: "Java", category: "Languages", icon: "SiJava", color: "#007396" },
    { name: "TypeScript", category: "Languages", icon: "SiTypescript", color: "#3178C6" },
    { name: "SQL", category: "Languages", icon: "TbDatabase", color: "#4479A1" },
    { name: "React", category: "Frontend", icon: "SiReact", color: "#149ECA" },
    { name: "Spring Boot", category: "Backend", icon: "SiSpringboot", color: "#6DB33F" },
    { name: "FastAPI", category: "Backend", icon: "SiFastapi", color: "#009688" },
    { name: "REST APIs", category: "Backend", icon: "TbApi", color: "#000000" },
    { name: "JWT", category: "Backend", icon: "SiJsonwebtokens", color: "#000000" },
    { name: "PostgreSQL", category: "Databases", icon: "SiPostgresql", color: "#336791" },
    { name: "MongoDB", category: "Databases", icon: "SiMongodb", color: "#47A248" },
    { name: "MySQL", category: "Databases", icon: "SiMysql", color: "#4479A1" },
    { name: "Firebase", category: "Databases", icon: "SiFirebase", color: "#F57C00" },
    { name: "Redis", category: "Databases", icon: "SiRedis", color: "#FF4438" },
    { name: "LangChain", category: "AI / ML", icon: "SiLangchain", color: "#000000" },
    { name: "LangGraph", category: "AI / ML", icon: "TbNetwork", color: "#000000" },
    { name: "RAG", category: "AI / ML", icon: "TbBrain", color: "#000000" },
    { name: "PyTorch", category: "AI / ML", icon: "SiPytorch", color: "#EE4C2C" },
    { name: "Voice AI Agents", category: "AI / ML", icon: "TbMicrophone", color: "#7C3AED" },

    { name: "Qdrant", category: "AI / ML", icon: "SiQdrant", color: "#DC244C" },
    { name: "Hugging Face", category: "AI / ML", icon: "SiHuggingface", color: "#D97706" },

    { name: "Pydantic", category: "AI / ML", icon: "SiPydantic", color: "#E92067" },
    { name: "n8n", category: "AI / ML", icon: "SiN8N", color: "#EA4B71" },
    { name: "Docker", category: "DevOps", icon: "SiDocker", color: "#2496ED" },
    { name: "Prometheus", category: "DevOps", icon: "SiPrometheus", color: "#E6522C" },
    { name: "Kubernetes", category: "DevOps", icon: "SiKubernetes", color: "#326CE5" },
    { name: "AWS", category: "DevOps", icon: "SiAmazonwebservices", color: "#FF9900" },
    { name: "Git", category: "DevOps", icon: "SiGit", color: "#F05032" },

];