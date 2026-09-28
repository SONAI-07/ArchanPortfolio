export const profileData = {
    name: "Archan Banerjee",
    location: "India",
    roles: ["Open Source Contributor", "AI Developer", "Full Stack Developer", "Backend Engineer"],
    aboutBullets: [
        "I build polished, high-performance digital products combining full-stack engineering with AI to ship things that actually matter.",
        "Currently deep in the intersection of generative AI and modern web architecture — building platforms, automating workflows, and learning by shipping.",
        "Open to collaborating on ambitious ideas."
    ]
};

export const contactLinks = [
    { name: "GitHub", href: "https://github.com/", icon: "github" },
    { name: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
    { name: "X/Twitter", href: "https://twitter.com/", icon: "X" },
    { name: "Mail", href: "mailto:hello@example.com", icon: "mail" },
    { name: "Threads", href: "https://threads.net/", icon: "threads" },
];

export const projects = [
    {
        id: "nextcareer", title: "NextCareer AI", year: "2025", featured: true,
        description: "An AI-powered career platform that lets users build professional resumes and generate personalized career roadmaps using the latest AI models.",
        tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Drizzle ORM", "Neon", "Clerk", "Gemini AI", "Vercel"],
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
    subtitle: "Independent Builder",
    date: "2024 – Present",
    nodes: [
        { title: "The Foundation (Locking In)", desc: "Dedicated a focused lock-in to master the modern web ecosystem: Node.js, Express, PostgreSQL for backends; React and Tailwind CSS for UIs." },
        { title: "Architecting the Stack", desc: "Scaled to production-grade tools: Next.js 15, Drizzle ORM, and Clerk for auth — building optimized full-stack dashboards and applications." },
        { title: "AI Internals & Automation", desc: "Deep diving into LLM core architecture and intelligent workflow orchestration using AI agents and n8n." },
        { title: "Shipping Real-World Systems", desc: "Building platforms like NextCareer AI and FraudLens. Collaborating to integrate polished frontends with complex Python-based AI backends." },
    ],
    stats: [
        { value: "5+", label: "PROJECTS SHIPPED" },
        { value: "4", label: "JOURNEY PHASES" },
        { value: "AI+Web", label: "STACK FOCUS" },
        { value: "300+", label: "GITHUB COMMITS" },
    ]
};