export const profileData = {
    name: "Archan Banerjee",

    education: "NIT Hamirpur",
    location: "India",
    roles: ["AI Engineer", "Full Stack Developer", "Backend Engineer", "Growth Marketing"],
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
        image: "/callsense.png",
        description:
            "A production-grade voice AI sales agent that holds natural, interruptible phone conversations, tracks purchase intent as it grows, and autonomously acts on it — WhatsApp brochures mid-call, deferred follow-ups when the customer isn't ready. Engineered for reality: idempotent business actions, crash-safe Redis memory, bounded retries, and Prometheus + LangSmith observability on every call.",
        tags: ["Python", "FastAPI", "LangGraph", "Twilio", "Redis", "PostgreSQL", "WhatsApp API", "Prometheus", "LangSmith"],
        links: { live: "#", repo: "https://github.com/SONAI-07/Voice_AI-Agent" },

    },
    {
        id: "fraudlens", title: "FraudLens", year: "2026", featured: true,
        description: "A real-time AI-powered fraud detection platform that analyzes messages, UPI IDs, QR codes, and live phone calls to protect users from scams.",
        tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "Supabase", "pgvector", "Gemini 2.5", "Groq", "Deepgram"],
    },
    {
        id: "claimkaro", title: "ClaimKaro", year: "2026", featured: false,
        description: "Bilingual AI welfare navigator that helps low-income Indian families discover government schemes, fix paperwork errors, and track applications.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Gemini AI", "Firebase"],
    }
];

export const experience = {
    title: "AI Engineer & Distributed Backend Developer",
    subtitle: "Builder",
    date: "2024 – Present",
    nodes: [
        { title: "The Foundation", desc: "Dedicated a focused lock-in to master the modern web ecosystem: FastAPI, PostgreSQL, LLMs for backends; React for UIs." },
        { title: "Architecting the Stack", desc: "Scaled to production-grade tools: FastAPI & SpringBoot for auth — building optimized full-stack workflows and applications." },
        { title: "AI Internals & Automation", desc: "Deep diving into LLM core architecture and intelligent workflow orchestration using AI agents and n8n." },
        { title: "Shipping Real-World Systems", desc: "Building platforms like Voice AI and Services NearBy. Collaborating to integrate complex Python-based AI backends with polished frontends." },
    ],
    stats: [
        { value: "7+", label: "PROJECTS SHIPPED" },
        { value: "4", label: "JOURNEY PHASES" },
        { value: "AI full-stack+ Agents", label: "STACK FOCUS" },
        { value: "300+", label: "GITHUB COMMITS" },
    ]
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