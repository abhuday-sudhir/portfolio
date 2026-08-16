'use client';

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  ArrowUpRight, 
  Briefcase, 
  BookOpen, 
  Code2, 
  CheckCircle2,
  Download,
  Send,
  Menu,
  X
} from 'lucide-react';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'backend' | 'ai'>('backend');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:abhudaysudhir2003@gmail.com?subject=${subject}&body=${body}`;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 6000);
  };

  // Scroll Spy Logic
  useEffect(() => {
    const sections = ['hero', 'experience', 'projects', 'achievements', 'contact'];
    
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 80) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "7startup",
      period: "June 2026 – Present",
      location: "Remote, India",
      points: [
        "Spearheaded the company's inaugural CRM database migration, architecting a modular framework for 11 tables with zero post-migration data issues reported.",
        "Engineered a custom seed data generator, decreasing API testing environment setup by 40% (from two hours to 40 minutes) and empowering three developers to test and debug endpoints.",
        "Engineered an atomic, staging-to-production review pipeline that eliminated 100% of unreviewed and malformed data from reaching the live directory by developing a PL/pgSQL stored-procedure bulk-insert workflow and in-memory deduplication in Python/PostgreSQL.",
        "Eliminated a critical client-side data leakage vulnerability across 100+ partner accounts by designing a server-side data-masking engine, role-based reveal gating, and prompt-level filters for an AI company dossier pipeline.",
        "Resolved 6+ silent scoring bugs across a 7-domain engine (100-point scale) and prevented double-spend race conditions by auditing data-shape mismatches and implementing atomic PostgreSQL transaction procedures for credit allocations.",
        "Cut frontend-backend schema drift to zero across 42 dynamic form fields by architecting a centralized JSON configuration system shared across 3 layers (Express API and dual React frontends), supported by 8+ idempotent SQL schema migrations."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "InstaPrepsAI",
      period: "June 2025 – Sept 2025",
      location: "Remote, India",
      points: [
        "Developed a modular image annotation platform using ReactJS and AWS S3, enabling scalable labelling for 10,000+ images while reducing storage latency by 25%[cite: 1].",
        "Integrated AWS S3 data pipelines with the frontend UI, automating dataset retrieval and improving throughput by 30%[cite: 1].",
        "Delivered 3 annotation features in collaboration with AI researchers, reducing dataset preparation time by 20% across 2 model training cycles[cite: 1]."
      ]
    }
  ];

  const backendProjects = [
    {
      title: "Order Flow Microservices",
      tags: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "Docker Compose"],
      description: "Built a 4-service Kafka-based microservices architecture, reducing transaction latency by 40ms and eliminating synchronous service calls. Engineered stateless JWT auth with Redis refresh token rotation and Saga transactions[cite: 1].",
      link: "https://github.com/abhuday-sudhir"
    },
    {
      title: "IAM & Auth Platform",
      tags: ["Java", "Spring Boot", "OAuth2", "JWT", "PostgreSQL", "Redis"],
      description: "Architected an IAM platform with OAuth2 and Redis-backed token blacklisting, reducing unauthorized access attempts by 90% across 500+ simulated sessions with structured SLF4J audit logging[cite: 1].",
      link: "https://github.com/abhuday-sudhir"
    },
    {
      title: "Distributed URL Shortener",
      tags: ["Java", "Redis", "Spring Boot", "PostgreSQL"],
      description: "Reduced redirect latency by 50% (40ms → 20ms) using Redis cache-aside (85% cache hit rate). Reduced PostgreSQL write load by 95% by buffering click events in Redis and flushing via scheduled batch jobs[cite: 1].",
      link: "https://github.com/abhuday-sudhir"
    }
  ];

  const aiProjects = [
    {
      title: "Multi-Agent Supply Chain",
      tags: ["Python", "LangGraph", "SQLAlchemy", "Streamlit"],
      description: "Engineered a multi-agent orchestration system using LangGraph, with shared state management, improving workflow coordination efficiency across 4+ autonomous agents via ReAct-based reasoning[cite: 2].",
      link: "https://github.com/abhuday-sudhir"
    },
    {
      title: "AI Research Paper Assistant",
      tags: ["FastAPI", "Gemini API", "LangChain", "RAG"],
      description: "Reduced research paper drafting and formatting effort by 60% with automated IEEE formatting validation and RAG-based conversational retrieval pipelines supporting sub-2s response latency[cite: 2].",
      link: "https://github.com/abhuday-sudhir"
    },
    {
      title: "Agentic Meeting Scheduler",
      tags: ["Python", "Flask", "Gemini API", "SQLite"],
      description: "Reduced manual scheduling effort by 80% by developing an agentic meeting scheduling assistant using Gemini API and automated coordination workflows over REST endpoints[cite: 2].",
      link: "https://github.com/abhuday-sudhir"
    }
  ];

  const navLinks = [
    { name: 'About', href: '#hero', id: 'hero' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
  ];

  return (
    <div className="min-h-screen bg-[#020b0c] text-gray-200 selection:bg-emerald-500/30 font-sans relative overflow-x-hidden scroll-smooth">
      {/* Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(20, 184, 166, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(20, 184, 166, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Floating Responsive Header */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="w-full max-w-2xl">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-2 rounded-full bg-[#07191b]/90 backdrop-blur-md border border-teal-500/20 shadow-lg shadow-black/50 text-xs sm:text-sm">
            <a href="#hero" className="flex items-center gap-2 cursor-pointer">
              <span className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold flex items-center justify-center text-xs">
                A
              </span>
              <span className="font-semibold text-white tracking-wide">Abhuday</span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full transition-all duration-200 font-medium ${
                      isActive 
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm shadow-emerald-500/10' 
                        : 'text-gray-400 hover:text-white hover:bg-teal-950/40'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Desktop Contact CTA */}
            <a 
              href="#contact" 
              className={`hidden md:inline-block px-4 py-1.5 rounded-full transition-all font-medium text-xs ${
                activeSection === 'contact'
                  ? 'bg-emerald-500 text-gray-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-teal-950/40 border border-transparent'
              }`}
            >
              Contact me
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} className="text-emerald-400" /> : <Menu size={20} />}
            </button>
          </nav>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#07191b]/95 backdrop-blur-xl border border-teal-500/30 shadow-2xl flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      isActive 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                        : 'text-gray-400 hover:text-white hover:bg-teal-950/40'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-2.5 rounded-xl bg-emerald-500 text-gray-950 font-bold text-xs shadow-md shadow-emerald-500/20"
              >
                Contact me
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 pb-16 relative z-10">
        <div className="mb-6 flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-[#0a2729] to-[#041315] border border-teal-500/30 p-1 shadow-xl flex items-center justify-center">
            {/* Avatar & Name Badge */}
            <div className="mb-8 flex flex-col items-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-b from-[#0a2729] to-[#041315] border border-teal-500/30 p-1.5 shadow-2xl shadow-teal-950/50 flex items-center justify-center">
                <img 
                  src="/profile.png" 
                  alt="Abhuday Sudhir" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <span className="mt-3 text-xs sm:text-sm font-mono text-emerald-300 bg-[#071d20] px-4 py-1 rounded-full border border-teal-500/30 whitespace-nowrap shadow-md">
                Abhuday Sudhir
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
          From Clean Code To Scale, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-300 to-teal-400">
            I Make Systems Work Better!
          </span>
        </h1>

        <p className="max-w-2xl text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
          Java backend engineer architecting event-driven microservices with Spring Boot, Kafka, and Redis, paired with autonomous Agentic AI workflows.
        </p>

        {/* Hero Actions */}
        <div className="flex flex-wrap justify-center items-center gap-3.5 mb-16">
          <a 
            href="#contact" 
            className="px-6 py-2.5 rounded-full bg-white text-gray-950 font-semibold text-xs tracking-wide hover:bg-gray-200 transition-all shadow-md"
          >
            Contact me
          </a>
          <a 
            href="#projects" 
            className="px-6 py-2.5 rounded-full bg-[#0a2022] hover:bg-[#0f2d30] border border-teal-500/30 text-emerald-200 font-medium text-xs transition-all"
          >
            See portfolio
          </a>
          <a 
            href="/resume.pdf" 
            download="Abhuday_Sudhir_Resume.pdf"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-medium text-xs transition-all"
          >
            <Download size={14} />
            <span>Download CV</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-10 text-xs font-mono text-emerald-500/60 pt-6 border-t border-teal-950/80 max-w-3xl w-full">
          <span>#Spring_Boot</span>
          <span>#Kafka_Microservices</span>
          <span>#Distributed_Systems</span>
          <span>#LangGraph_Agents</span>
          <span>#PostgreSQL_Redis</span>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-20 relative z-10 scroll-mt-24">
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="text-emerald-400" size={22} />
          <h2 className="text-2xl font-bold text-white tracking-tight">Work Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-[#041517]/80 border border-teal-500/20 hover:border-teal-500/40 transition-all backdrop-blur-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                  <p className="text-sm text-emerald-400 font-medium">{exp.company} • <span className="text-gray-400 font-normal">{exp.location}</span></p>
                </div>
                <span className="text-xs font-mono text-gray-400 mt-1 sm:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-2.5 mt-4 text-xs sm:text-sm text-gray-300/90 leading-relaxed">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16 relative z-10 scroll-mt-24">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-10 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Featured Architecture & Systems</h2>
            <p className="text-xs sm:text-sm text-gray-400">High-throughput microservices and intelligent multi-agent pipelines.</p>
          </div>

          <div className="flex bg-[#041517] p-1 rounded-xl border border-teal-500/20 w-fit">
            <button
              onClick={() => setActiveTab('backend')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'backend' ? 'bg-emerald-500 text-gray-950 font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              Backend / Microservices
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'ai' ? 'bg-emerald-500 text-gray-950 font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              Applied GenAI
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(activeTab === 'backend' ? backendProjects : aiProjects).map((proj, idx) => (
            <div 
              key={idx} 
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#041517]/80 border border-teal-500/20 hover:border-teal-400/40 transition-all group"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-white text-base group-hover:text-emerald-300 transition-colors">
                    {proj.title}
                  </h3>
                  <a href={proj.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-emerald-400">
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">{proj.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {proj.tags.map((t, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-[#082326] text-[11px] text-emerald-300/80 border border-emerald-500/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="max-w-4xl mx-auto px-6 py-16 relative z-10 scroll-mt-24">
        <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Publications & Coding Profiles</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a 
            href="https://leetcode.com/u/abhuday-sudhir" 
            target="_blank" 
            rel="noreferrer" 
            className="p-6 rounded-2xl bg-[#041517]/80 border border-teal-500/20 hover:border-emerald-400/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <Code2 size={20} />
                  <span className="font-semibold text-white text-base">LeetCode Profile</span>
                </div>
                <ArrowUpRight size={18} className="text-gray-500 group-hover:text-emerald-400 transition-colors" />
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Solved 500+ algorithmic challenges with a contest rating of 1744, ranking within the top 12% globally[cite: 3].
              </p>
            </div>
          </a>

          <a 
            href="https://www.igi-global.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-6 rounded-2xl bg-[#041517]/80 border border-teal-500/20 hover:border-emerald-400/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <BookOpen size={20} />
                  <span className="font-semibold text-white text-base">Research Publication</span>
                </div>
                <ArrowUpRight size={18} className="text-gray-500 group-hover:text-emerald-400 transition-colors" />
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Authored &quot;AI-Driven Assessment of Cognitive Stress&quot; — Book Chapter accepted in a Scopus-indexed IGI Global series[cite: 2].
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16 relative z-10 scroll-mt-24">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#061e20] to-[#030e10] border border-teal-500/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
                Let&apos;s build scalable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">
                  systems together.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Open for full-time Software Engineer / Backend roles starting 2026.
              </p>
              <div className="text-xs text-gray-400 space-y-1.5 font-mono">
                <p>📍 Agra / Remote, India</p>
                <p>📧 abhudaysudhir2003@gmail.com[cite: 3]</p>
                <p>📞 +91 6397253171[cite: 3]</p>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-3">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-4 py-2.5 rounded-xl bg-[#020b0c] border border-teal-500/20 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
              />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your Email"
                className="w-full px-4 py-2.5 rounded-xl bg-[#020b0c] border border-teal-500/20 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
              />
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your Message..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#020b0c] border border-teal-500/20 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2"
              >
                <Send size={15} />
                <span>{isSent ? 'Opening Mail Client...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-teal-950/80 py-8 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto px-6 gap-4 relative z-10">
        <p>© 2026 Abhuday Sudhir. Built with Next.js & Tailwind CSS.</p>
        <div className="flex items-center gap-4 text-gray-400">
          <a href="https://github.com/abhuday-sudhir" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
            <GithubIcon size={16} />
          </a>
          <a href="https://linkedin.com/in/abhuday-sudhir" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
            <LinkedinIcon size={16} />
          </a>
          <a href="mailto:abhudaysudhir2003@gmail.com" className="hover:text-emerald-400 transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}