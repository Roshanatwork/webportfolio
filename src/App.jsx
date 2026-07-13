import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal as TerminalIcon,
  Activity,
  Cpu,
  Layers,
  ShieldCheck,
  GraduationCap,
  Award,
  Globe,
  ExternalLink,
  FileText,
  Server,
  CheckCircle2,
  Code,
  ArrowRight,
  Clock,
  Sparkles,
  Command,
  Download,
  AlertCircle,
  Copy,
  Check,
  BookOpen,
  X,
  FileCode,
  CheckSquare,
  Network,
  Workflow,
  Database,
  Cloud,
  CreditCard,
  Shield,
  Briefcase,
  Sun,
  Moon
} from 'lucide-react';

const Linkedin = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Live Terminal Simulation Setup
const INITIAL_LOGS = [
  { type: 'py-header', text: "Python 3.12.3 (main, Apr 15 2026, 14:16:48)" },
  { type: 'py-header', text: "[Clang 15.0.0 (clang-1500.3.9.4)] on darwin" },
  { type: 'py-header', text: 'Type "help()", "copyright()", "credits()" or "license()" for more information.' },
  { type: 'py-prompt', text: "import roshan_automation as sdk" },
  { type: 'py-prompt', text: "engine = sdk.AIAutomationEngine(node='Teesside_UK_Sept')" },
  { type: 'py-prompt', text: "engine.initialize_production_pipeline()" },
  { type: 'log-info', text: "    [INFO] Provisioning production environment state variables..." },
  { type: 'log-success', text: "    ✔ [OK] Programmatic pipeline client connected to TikTok Marketing API" },
  { type: 'log-success', text: "    ✔ [OK] Vector Space Matrix online: FAISS semantic index array loaded" },
  { type: 'log-success', text: "    ✔ [OK] Bidirectional cloud synchronization active on DigitalOcean Droplets" },
  { type: 'py-prompt', text: "engine.verify_global_visa_compliance()" },
  { type: 'dict-brace', text: "{" },
  { type: 'dict-keyval', key: "academic_baseline", val: "B.Tech AI & DS (7.55 CGPA)", isCyan: true, comma: true },
  { type: 'dict-keyval', key: "global_equivalence", val: "ZAB Approved / Certified", isCyan: true, comma: true },
  { type: 'dict-keyval', key: "uk_language_waiver", val: "100% EXEMPT (English Score: 95/100)", isCyan: false, comma: false },
  { type: 'dict-brace', text: "}" }
];

export default function App() {
  // Global Theme State ('dark' or 'light')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
      document.documentElement.style.backgroundColor = '#FAF9F6';
      document.body.style.backgroundColor = '#FAF9F6';
    } else {
      document.documentElement.style.backgroundColor = '#000000';
      document.body.style.backgroundColor = '#000000';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Static Time Placeholder
  const systemTimeLabel = "STATIC // 14:16:48 UTC";

  // Interactive Terminal State
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [terminalInput, setTerminalInput] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const terminalEndRef = useRef(null);
  const terminalContainerRef = useRef(null);

  // Auto-typing effect for initial logs
  useEffect(() => {
    if (typingIndex < INITIAL_LOGS.length) {
      const timeout = setTimeout(() => {
        setTerminalHistory((prev) => [...prev, INITIAL_LOGS[typingIndex]]);
        setTypingIndex((prev) => prev + 1);
      }, typingIndex === 0 ? 500 : 700);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

  // Auto scroll terminal container ONLY (prevents window scrolling)
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const input = terminalInput.trim();
    if (!input) return;

    const newHistory = [...terminalHistory, { type: 'py-prompt', text: input }];
    setTerminalInput('');

    let output = [];
    const normalizedInput = input.toLowerCase().replace(/\s+/g, '').replace(/\(\)/g, ''); // Normalize input to match keywords

    switch (normalizedInput) {
      case 'help':
        output = [
          { type: 'log-amber', text: "['metrics', 'architecture', 'clear']" }
        ];
        break;
      case 'metrics':
        output = [
          { type: 'dict-brace', text: "{" },
          { type: 'dict-keyval', key: "production_statistics", val: "Blink Digital Production Node Active", isCyan: true, comma: true },
          { type: 'dict-keyval', key: "academic_cgpa", val: "7.55 / 10.0 B.Tech AI & DS", isCyan: true, comma: true },
          { type: 'dict-keyval', key: "english_specialty_score", val: "95 / 100 Intermediate Specialty", isCyan: false, comma: false },
          { type: 'dict-brace', text: "}" }
        ];
        break;
      case 'architecture':
        output = [
          { type: 'log-info', text: ">>> Initializing connection sequence with TikTok open API..." },
          { type: 'log-info', text: "  HOST:   ads.tiktok.com" },
          { type: 'log-info', text: "  PATH:   /open_api/v1.3/oauth2/token/" },
          { type: 'log-success', text: "  ✔ [OK] Connection protocols handshake: ESTABLISHED" },
          { type: 'log-success', text: "  ✔ [OK] Sync database matrix: 200 OK Response" }
        ];
        break;
      case 'clear':
        setTerminalHistory(INITIAL_LOGS);
        return;
      default:
        // Fallback options
        if (normalizedInput === 'about' || normalizedInput === 'engine.about') {
          output = [
            { type: 'log-success', text: "AIAutomationEngine // Node: Teesside_UK_Sept" },
            { type: 'log-info', text: "Practice bridges dense machine learning pipelines with high-throughput cloud infrastructure." }
          ];
        } else if (normalizedInput === 'skills' || normalizedInput === 'engine.get_skills') {
          output = [
            { type: 'dict-brace', text: "[" },
            { type: 'log-info', text: "  'Python', 'FastAPI', 'React', 'LangChain', 'FAISS', 'DigitalOcean', 'OCI'" },
            { type: 'dict-brace', text: "]" }
          ];
        } else {
          output = [
            { type: 'log-error', text: `Traceback (most recent call last):` },
            { type: 'log-error', text: `  File "<stdin>", line 1, in <module>` },
            { type: 'log-error', text: `NameError: name '${input}' is not defined. Type 'help' for suggestions.` }
          ];
        }
    }

    setTerminalHistory([...newHistory, ...output]);
  };

  // Pipeline Tab Selection
  const [pipelineTab, setPipelineTab] = useState('copilot');

  // Resume Drawer Modal State
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [isConfidentialOpen, setIsConfidentialOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const copyResumeText = () => {
    navigator.clipboard.writeText(fullResumeMarkdown);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const downloadResume = () => {
    const element = document.createElement("a");
    const file = new Blob([fullResumeMarkdown], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "mohammad_roshan_ali_resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Dynamic styles based on Theme State
  const bgClass = theme === 'dark' ? 'bg-[#000000] text-neutral-300' : 'bg-[#FAF9F6] text-zinc-900';
  const cardClass = theme === 'dark' ? 'bg-[#0A0A0A] border-[#1A1A1A]' : 'bg-white border-zinc-200 shadow-sm';
  const borderClass = theme === 'dark' ? 'border-[#1A1A1A]' : 'border-zinc-200';
  const textMain = theme === 'dark' ? 'text-white' : 'text-[#09090B]';
  const textMuted = theme === 'dark' ? 'text-neutral-400' : 'text-zinc-600';
  const accentText = theme === 'dark' ? 'text-[#00FF66]' : 'text-[#007A3E]';
  const accentBg = theme === 'dark' ? 'bg-[#00FF66]/5 border-[#00FF66]/20' : 'bg-[#007A3E]/5 border-[#007A3E]/20';
  const accentColor = theme === 'dark' ? '#00FF66' : '#007A3E';
  const treeActive = theme === 'dark' ? 'text-[#00FF66] font-semibold' : 'text-[#007A3E] font-semibold';
  const termPrompt = theme === 'dark' ? 'text-[#00E5FF]' : 'text-[#006D7A]';
  const termValueCyan = theme === 'dark' ? 'text-[#00E5FF]' : 'text-[#006D7A]';
  const termValueGreen = theme === 'dark' ? 'text-[#00FF66]' : 'text-[#007A3E]';
  const cursorBg = theme === 'dark' ? 'bg-[#00FF66]' : 'bg-[#007A3E]';
  const gridClass = theme === 'dark' ? 'bg-grid-pattern' : 'bg-grid-pattern-light';

  // Modal Theme Classes
  const modalBg = theme === 'dark' ? 'bg-[#070708] border-[#121214] text-neutral-300' : 'bg-white border-zinc-200 text-zinc-750';
  const modalHeaderBg = theme === 'dark' ? 'bg-[#0b0b0d] border-[#121214]' : 'bg-zinc-50 border-zinc-200';
  const modalTitle = theme === 'dark' ? 'text-white' : 'text-zinc-900';
  const modalCloseBtn = theme === 'dark'
    ? 'bg-black/40 border-[#121214] hover:border-red-500/50 hover:bg-red-950/20 text-neutral-400 hover:text-red-400'
    : 'bg-zinc-100 border-zinc-200 hover:border-red-500/30 hover:bg-red-50 text-zinc-500 hover:text-red-600';

  // Primary CTA Button Style (Solid Green Accent)
  const primaryBtnClass = theme === 'dark'
    ? 'bg-[#00FF66] text-black hover:bg-[#00FF66]/85 border border-transparent shadow-[0_0_12px_rgba(0,255,102,0.15)] font-bold'
    : 'bg-[#007A3E] text-white hover:bg-[#007A3E]/85 border border-transparent shadow-[0_0_12px_rgba(0,122,62,0.15)] font-bold';

  // Secondary CTA Button Style (Outlined Zinc Bounds)
  const secondaryBtnClass = theme === 'dark'
    ? 'border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 bg-transparent font-medium'
    : 'border border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:border-zinc-400 bg-transparent font-medium';

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-300 ${theme === 'dark' ? 'selection:bg-[#00FF66]/20 selection:text-[#00FF66]' : 'selection:bg-[#007A3E]/20 selection:text-[#007A3E]'} ${bgClass}`}>
      {/* Grid Background overlay */}
      <div className={`absolute inset-0 opacity-[0.2] pointer-events-none z-0 transition-all ${gridClass}`} />
      
      {/* Top Gradient Flare */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] blur-sm pointer-events-none z-0 ${
        theme === 'dark' ? 'bg-gradient-to-r from-transparent via-[#00FF66]/15 to-transparent' : 'bg-gradient-to-r from-transparent via-[#007A3E]/15 to-transparent'
      }`} />
      
      {/* ================= GLOBAL STICKY NAVIGATION BAR ================= */}
      <nav className={`sticky top-0 z-40 border-b backdrop-blur-md transition-all duration-300 ${
        theme === 'dark' ? 'bg-[#000000]/95 border-[#1A1A1A]' : 'bg-[#FAF9F6]/95 border-zinc-200 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-5">
            <span className="font-bold tracking-tight font-sans text-xs md:text-sm shrink-0">
              Mohammad Roshan Ali <span className="opacity-40 font-normal">// Portfolio</span>
            </span>
            {/* Anchor scroll links */}
            <div className="hidden md:flex items-center space-x-4 text-[11px] font-mono text-neutral-500">
              <a href="#about" className="hover:text-[#007A3E] dark:hover:text-[#00FF66] transition-colors">About</a>
              <a href="#experience" className="hover:text-[#007A3E] dark:hover:text-[#00FF66] transition-colors">Experience</a>
              <a href="#competencies" className="hover:text-[#007A3E] dark:hover:text-[#00FF66] transition-colors">Competencies</a>
              <a href="#systems" className="hover:text-[#007A3E] dark:hover:text-[#00FF66] transition-colors">Systems</a>
              <a href="#credentials" className="hover:text-[#007A3E] dark:hover:text-[#00FF66] transition-colors">Credentials</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">


            {/* Global Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-lg border transition-all duration-300 cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700' 
                  : 'bg-white border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:border-zinc-300 shadow-sm'
              }`}
              title="Toggle system theme"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Layout Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-5 md:py-6 flex flex-col gap-7.5">
        
        {/* ================= HERO & COMMAND CENTER BENTO GRID ================= */}
        <div id="about">
          <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest mb-2 flex items-center gap-1.5 select-none">
            <span className={`h-1.5 w-1.5 rounded-full ${theme === 'dark' ? 'bg-[#00FF66]' : 'bg-[#007A3E]'}`} />
            System Control Center
          </div>
          
          <main className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Hero Board */}
            <section 
              className={`md:col-span-2 border rounded-xl p-4 md:p-5 flex flex-col justify-between border-glow-hover relative overflow-hidden transition-colors duration-300 ${cardClass}`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neutral-500/5 via-transparent to-transparent pointer-events-none" />
              
              <div>
                <div className="mb-3 flex flex-wrap items-start">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[10px] font-mono font-medium tracking-wide ${accentBg} ${accentText}`}>
                    <span className={`h-1.5 w-1.5 rounded-full animate-pulse-fast inline-block ${theme === 'dark' ? 'bg-[#00FF66]' : 'bg-[#007A3E]'}`}></span>
                    Node: Active // Relocating to UK for MSc AI @ Teesside University
                  </span>
                </div>

                <div className="mb-3">
                  <h2 className={`text-2xl font-extrabold tracking-tight leading-none mb-1 font-sans ${textMain}`}>
                    Mohammad Roshan Ali
                  </h2>
                  <p className={`text-xs font-mono tracking-wide ${accentText}`}>
                    AI Automation Engineer // Full-Stack Cloud Developer
                  </p>
                </div>

                <p className={`text-sm leading-relaxed font-sans max-w-3xl mb-4 ${theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'}`}>
                  AI Automation Engineer building production-grade agentic pipelines, marketing API automations, and scalable cloud applications using <strong>FastAPI</strong>, <strong>LangChain</strong>, and <strong>DigitalOcean</strong>.
                </p>

                {/* 4-column metric counter grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 my-4">
                  {[
                    { value: "10+ Months", label: "Industry Production Experience" },
                    { value: "15+ Modules", label: "End-to-End AI Automations Shipped" },
                    { value: "3 Platforms", label: "Fully Deployed Production Architectures" },
                    { value: "100k+ Runs", label: "API Payloads Successfully Processed" }
                  ].map((metric, idx) => (
                    <div key={idx} className={`p-2.5 rounded-lg border ${theme === 'dark' ? 'bg-[#0A0A0A]/50 border-[#1A1A1A]' : 'bg-zinc-50 border-zinc-200'} text-left`}>
                      <div className={`text-base font-mono font-bold ${accentText}`}>{metric.value}</div>
                      <div className="text-[9px] text-neutral-500 font-sans mt-0.5 leading-tight">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action hooks */}
              <div className={`flex flex-wrap gap-4 border-t pt-3.5 ${borderClass}`}>
                <a 
                  id="link-linkedin"
                  href="https://www.linkedin.com/in/mdroshanali/" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`group inline-flex items-center gap-1 text-[11px] font-mono transition-colors ${textMain} hover:${accentText}`}
                >
                  <Linkedin className={`w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity ${accentText}`} />
                  <span className="underline decoration-neutral-700 underline-offset-4">LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-85" />
                </a>

                <a 
                  id="link-github"
                  href="https://github.com/Roshanatwork" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`group inline-flex items-center gap-1 text-[11px] font-mono transition-colors ${textMain} hover:${accentText}`}
                >
                  <Github className={`w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity ${accentText}`} />
                  <span className="underline decoration-neutral-700 underline-offset-4">GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-85" />
                </a>

                <a 
                  id="btn-fetch-resume"
                  href="/resume.html"
                  target="_blank"
                  rel="noreferrer"
                  className={`group inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${primaryBtnClass}`}
                >
                  <FileText className="w-3 h-3 text-black" />
                  <span>Fetch Full Resume PDF</span>
                </a>
              </div>
            </section>

            {/* Asymmetric "NOW // LIVE OPERATIONS" Card */}
            <section 
              className={`md:col-span-1 border rounded-xl p-4 flex flex-col justify-between border-glow-hover transition-colors duration-300 ${cardClass}`}
            >
              <div>
                <div className={`flex items-center justify-between border-b pb-2 mb-3.5 ${borderClass}`}>
                  <h3 className={`text-[11px] font-mono uppercase tracking-wider ${accentText}`}>
                    // Now // Live Operations
                  </h3>
                  <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${theme === 'dark' ? 'bg-[#00FF66]' : 'bg-[#007A3E]'}`}></span>
                </div>
                
                <p className="text-xs leading-relaxed font-sans mb-3 space-y-2">
                  📍 <strong>Currently Operating:</strong> Mumbai, India (Remote Operations) <br/><br/>
                  ⚡ <strong>Focus:</strong> Optimizing High-Throughput Token Generation &amp; Enterprise Workflows <br/><br/>
                  🚀 <strong>Next Phase:</strong> Advancing Core Research Matrix at Teesside University, UK.
                </p>
              </div>
              
              <div className={`mt-3 pt-2.5 border-t flex items-center justify-between text-[9px] font-mono text-neutral-500 ${borderClass}`}>
                <span className="flex items-center gap-1">
                  <ShieldCheck className={`w-3 h-3 ${theme === 'dark' ? 'text-[#00FF66]' : 'text-[#007A3E]'}`} /> Credentials Active
                </span>
                <span className={`${accentText} font-bold`}>OPERATIONAL</span>
              </div>
            </section>

            {/* Python Interactive Terminal */}
            <section 
              id="terminal-box" 
              className={`md:col-span-2 border rounded-xl overflow-hidden border-glow-hover flex flex-col h-[320px] transition-colors duration-300 ${
                theme === 'dark' ? 'bg-[#0A0A0A] border-[#1A1A1A]' : 'bg-white border-zinc-200 shadow-sm'
              }`}
            >
              <div className={`border-b px-4 py-2 flex items-center justify-between transition-colors duration-300 ${
                theme === 'dark' ? 'bg-[#0b0b0d] border-[#1A1A1A]' : 'bg-zinc-100 border-zinc-200'
              }`}>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="text-xs font-mono text-neutral-500 pl-2">roshan-bot@vercel-node-01</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TerminalIcon className="w-3 h-3 text-neutral-500" />
                  <span className={`text-[9px] font-mono bg-black/40 px-2 py-0.5 rounded border border-steel/50 ${
                    theme === 'dark' ? 'text-neutral-500' : 'text-zinc-600 bg-white border-zinc-200'
                  }`}>python</span>
                </div>
              </div>

              <div 
                ref={terminalContainerRef}
                className={`p-4 font-mono text-xs md:text-sm overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-steel/60 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-[#000000]/60' : 'bg-white/80'
                }`}>
                <div className="space-y-1">
                  {terminalHistory.map((line, index) => {
                    if (line.type === 'py-header') {
                      return (
                        <div key={index} className={`text-xs select-none leading-relaxed ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'}`}>
                          {line.text}
                        </div>
                      );
                    }
                    if (line.type === 'py-prompt') {
                      return (
                        <div key={index} className="flex items-start leading-relaxed">
                          <span className={`font-bold mr-2 select-none ${termPrompt}`}>&gt;&gt;&gt;</span>
                          <span className={`font-mono ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-800'}`}>{line.text}</span>
                        </div>
                      );
                    }
                    if (line.type === 'log-info') {
                      return (
                        <div key={index} className={`leading-relaxed font-mono ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'}`}>
                          {line.text}
                        </div>
                      );
                    }
                    if (line.type === 'log-success') {
                      return (
                        <div key={index} className={`leading-relaxed font-mono font-medium ${termValueGreen}`}>
                          {line.text}
                        </div>
                      );
                    }
                    if (line.type === 'log-error') {
                      return (
                        <div key={index} className="text-red-500 leading-relaxed font-mono">
                          {line.text}
                        </div>
                      );
                    }
                    if (line.type === 'log-amber') {
                      return (
                        <div key={index} className={`leading-relaxed font-mono font-semibold ${theme === 'dark' ? 'text-[#FFD700]' : 'text-[#8F6B00]'}`}>
                          {line.text}
                        </div>
                      );
                    }
                    if (line.type === 'dict-brace') {
                      return (
                        <div key={index} className={`leading-relaxed font-mono ${theme === 'dark' ? 'text-[#FFD700]' : 'text-[#8F6B00]'}`}>
                          {line.text}
                        </div>
                      );
                    }
                    if (line.type === 'dict-keyval') {
                      return (
                        <div key={index} className="leading-relaxed font-mono pl-4">
                          <span className={theme === 'dark' ? 'text-[#FFD700]' : 'text-[#8F6B00]'}>"{line.key}"</span>
                          <span className={theme === 'dark' ? 'text-[#FFD700]' : 'text-[#8F6B00]'}>: </span>
                          <span className={line.isCyan ? termValueCyan : termValueGreen}>"{line.val}"</span>
                          {line.comma && <span className={theme === 'dark' ? 'text-[#FFD700]' : 'text-[#8F6B00]'}>,</span>}
                        </div>
                      );
                    }
                    return (
                      <div key={index} className={`leading-relaxed pl-4 font-mono ${theme === 'dark' ? 'text-neutral-400' : 'text-zinc-600'}`}>
                        {line.text}
                      </div>
                    );
                  })}
                  
                  {typingIndex < INITIAL_LOGS.length && (
                    <div className="flex items-center pl-4 text-neutral-600 italic text-xs animate-pulse">
                      <span>streaming python compilation...</span>
                    </div>
                  )}

                  {typingIndex >= INITIAL_LOGS.length && (
                    <form onSubmit={handleTerminalSubmit} className="flex items-center pt-1.5">
                      <span className={`font-bold mr-2 select-none ${termPrompt}`}>&gt;&gt;&gt;</span>
                      <div className="flex-grow flex items-center relative">
                        <input 
                          id="terminal-input-field"
                          type="text" 
                          value={terminalInput}
                          onChange={(e) => setTerminalInput(e.target.value)}
                          placeholder="Type 'help', 'metrics', 'architecture', 'clear'..."
                          className={`bg-transparent border-none outline-none font-mono focus:ring-0 p-0 text-sm w-full ${
                            theme === 'dark' ? 'text-zinc-300 placeholder:text-neutral-700' : 'text-zinc-800 placeholder:text-zinc-300'
                          }`}
                          autoComplete="off"
                        />
                        {terminalInput === '' && (
                          <span className={`absolute left-0 w-2 h-4 animate-pulse pointer-events-none ${cursorBg}`} />
                        )}
                      </div>
                    </form>
                  )}
                  <div ref={terminalEndRef} />
                </div>
              </div>
              
              {/* Terminal status bar */}
              <div className={`border-t px-4 py-2 flex items-center justify-between text-[10px] font-mono text-neutral-600 transition-colors duration-300 ${
                theme === 'dark' ? 'bg-[#0b0b0d]/80 border-[#1A1A1A]' : 'bg-zinc-100/90 border-zinc-200'
              }`}>
                <span>Interactive Session (python)</span>
                <span>ESC / Enter to execute</span>
              </div>
            </section>

            {/* Architecture Schematics Panel */}
            <section 
              id="topology-panel" 
              className={`md:col-span-1 border rounded-xl p-4 flex flex-col justify-between border-glow-hover min-h-[320px] transition-colors duration-300 ${cardClass}`}
            >
              <div>
                <div className={`flex items-center justify-between border-b pb-2 mb-3.5 ${borderClass}`}>
                  <h3 className={`text-xs font-mono uppercase tracking-wider ${accentText}`}>
                    // Architectural Schematics
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-500">v1.2.0</span>
                </div>

                {/* Tree Toggles */}
                <div className={`font-mono text-xs border p-3 mb-4 leading-normal flex flex-col gap-1 rounded-lg ${
                  theme === 'dark' ? 'bg-black/40 border-[#1A1A1A]' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <div className={`font-semibold mb-0.5 ${accentText}`}>// Infrastructure Tree (Click nodes)</div>
                  <button
                    onClick={() => setPipelineTab('tiktok')}
                    className={`w-full text-left font-mono text-xs py-0.5 cursor-pointer transition-colors duration-200 outline-none select-none ${
                      pipelineTab === 'tiktok' ? treeActive : (theme === 'dark' ? 'text-neutral-400 hover:text-neutral-200 dark:hover:text-white' : 'text-zinc-500 hover:text-zinc-900')
                    }`}
                  >
                    ┌── TikTok Marketing API
                  </button>
                  <button
                    onClick={() => setPipelineTab('creatify')}
                    className={`w-full text-left font-mono text-xs py-0.5 cursor-pointer transition-colors duration-200 outline-none select-none ${
                      pipelineTab === 'creatify' ? treeActive : (theme === 'dark' ? 'text-neutral-400 hover:text-neutral-200 dark:hover:text-white' : 'text-zinc-500 hover:text-zinc-900')
                    }`}
                  >
                    ├── Creatify Video Gen API
                  </button>
                  <button
                    onClick={() => setPipelineTab('gateway')}
                    className={`w-full text-left font-mono text-xs py-0.5 cursor-pointer transition-colors duration-200 outline-none select-none ${
                      pipelineTab === 'gateway' ? treeActive : (theme === 'dark' ? 'text-neutral-400 hover:text-neutral-200 dark:hover:text-white' : 'text-zinc-500 hover:text-zinc-900')
                    }`}
                  >
                    ├── FastAPI Server Gateway
                  </button>
                  <button
                    onClick={() => setPipelineTab('droplet')}
                    className={`w-full text-left font-mono text-xs py-0.5 cursor-pointer transition-colors duration-200 outline-none select-none ${
                      pipelineTab === 'droplet' ? treeActive : (theme === 'dark' ? 'text-neutral-400 hover:text-neutral-200 dark:hover:text-white' : 'text-zinc-500 hover:text-zinc-900')
                    }`}
                  >
                    └── DigitalOcean Deployment Cluster
                  </button>
                </div>

                {/* Tab selectors */}
                <div className={`flex border-b mb-3 ${borderClass}`}>
                  <button 
                    id="tab-copilot"
                    onClick={() => setPipelineTab('copilot')}
                    className={`flex-1 pb-2 text-[10px] font-mono tracking-wider text-center uppercase cursor-pointer border-b transition-colors duration-300 select-none ${
                      pipelineTab === 'copilot' 
                        ? `${accentText} border-${theme === 'dark' ? '[#00FF66]' : '[#00B34A]'} font-semibold` 
                        : 'text-neutral-500 border-transparent hover:text-neutral-300'
                    }`}
                    style={{ borderBottomColor: pipelineTab === 'copilot' ? accentColor : 'transparent' }}
                  >
                    Data Co-Pilot
                  </button>
                  <button 
                    id="tab-rag"
                    onClick={() => setPipelineTab('rag')}
                    className={`flex-1 pb-2 text-[10px] font-mono tracking-wider text-center uppercase cursor-pointer border-b transition-colors duration-300 select-none ${
                      pipelineTab === 'rag' 
                        ? `${accentText} border-${theme === 'dark' ? '[#00FF66]' : '[#00B34A]'} font-semibold` 
                        : 'text-neutral-500 border-transparent hover:text-neutral-300'
                    }`}
                    style={{ borderBottomColor: pipelineTab === 'rag' ? accentColor : 'transparent' }}
                  >
                    LangChain RAG
                  </button>
                </div>

                <div className="min-h-[110px] transition-all duration-500">
                  {pipelineTab === 'copilot' && (
                    <div className="space-y-2 animate-[fadeIn_0.3s_ease-out]">
                      <p className={`text-xs leading-normal font-sans ${textMuted}`}>
                        Orchestrates campaign updates and automated creative exports. Binds <strong>TikTok Marketing API</strong> payloads with backend Celery nodes.
                      </p>
                      <div className={`font-mono text-[9px] p-2 rounded leading-none space-y-1 ${
                        theme === 'dark' ? 'text-[#00FF66]/80 bg-[#00FF66]/5 border border-[#00FF66]/10' : 'text-[#00B34A]/80 bg-[#00B34A]/5 border border-[#00B34A]/10'
                      }`}>
                        <div>TikTok API --[JSON Campaign Data]--&gt; FastAPI</div>
                        <div>FastAPI --[Async Video Jobs]--&gt; Creatify</div>
                        <div>Creatify --[MP4 Payload]--&gt; DigitalOcean CDN</div>
                      </div>
                    </div>
                  )}
                  {pipelineTab === 'rag' && (
                    <div className="space-y-2 animate-[fadeIn_0.3s_ease-out]">
                      <p className={`text-xs leading-normal font-sans ${textMuted}`}>
                        Retrieves structured citations from semantic datasets. Employs <strong>FAISS Vector Search</strong> mapping query contexts.
                      </p>
                      <div className={`font-mono text-[9px] p-2 rounded leading-none space-y-1 ${
                        theme === 'dark' ? 'text-[#00FF66]/80 bg-[#00FF66]/5 border border-[#00FF66]/10' : 'text-[#00B34A]/80 bg-[#00B34A]/5 border border-[#00B34A]/10'
                      }`}>
                        <div>Query Input --[LangChain Vector Embeds]--&gt; FAISS</div>
                        <div>FAISS --[Cosine Similarity Match]--&gt; Retrieval</div>
                        <div>Retrieval --[Enriched Prompt Context]--&gt; LLM Response</div>
                      </div>
                    </div>
                  )}
                  {pipelineTab === 'tiktok' && (
                    <div className="space-y-2 animate-[fadeIn_0.3s_ease-out]">
                      <p className={`text-xs leading-normal font-sans ${textMuted}`}>
                        Programmatic pipelines configured with campaign structures. Speeds up configurations setup through direct open APIs endpoints.
                      </p>
                      <div className={`font-mono text-[9px] p-2 rounded leading-none space-y-1 ${
                        theme === 'dark' ? 'text-[#00FF66]/80 bg-[#00FF66]/5 border border-[#00FF66]/10' : 'text-[#00B34A]/80 bg-[#00B34A]/5 border border-[#00B34A]/10'
                      }`}>
                        <div>ENDPOINT: ads.tiktok.com/open_api/v1.3/</div>
                        <div>SYNC:     CONNECTED // STREAMING LIVE METRICS</div>
                        <div>ARRAYS:   [AD_GROUPS], [CAMPAIGNS], [ASSETS]</div>
                      </div>
                    </div>
                  )}
                  {pipelineTab === 'creatify' && (
                    <div className="space-y-2 animate-[fadeIn_0.3s_ease-out]">
                      <p className={`text-xs leading-normal font-sans ${textMuted}`}>
                        Generative rendering endpoints converting script prompts into visual reels in Celery workers.
                      </p>
                      <div className={`font-mono text-[9px] p-2 rounded leading-none space-y-1 ${
                        theme === 'dark' ? 'text-[#00FF66]/80 bg-[#00FF66]/5 border border-[#00FF66]/10' : 'text-[#00B34A]/80 bg-[#00B34A]/5 border border-[#00B34A]/10'
                      }`}>
                        <div>ENDPOINT: api.creatify.ai/v1/videos</div>
                        <div>SYNC:     STANDBY // WAITING ON COMPILATION</div>
                        <div>ARRAYS:   [RENDER_QUEUE], [VOICEOVER_TRACKS]</div>
                      </div>
                    </div>
                  )}
                  {pipelineTab === 'gateway' && (
                    <div className="space-y-2 animate-[fadeIn_0.3s_ease-out]">
                      <p className={`text-xs leading-normal font-sans ${textMuted}`}>
                        FastAPI router verification pipelines. Monitors request latency dynamically.
                      </p>
                      <div className={`font-mono text-[9px] p-2 rounded leading-none space-y-1 ${
                        theme === 'dark' ? 'text-[#00FF66]/80 bg-[#00FF66]/5 border border-[#00FF66]/10' : 'text-[#00B34A]/80 bg-[#00B34A]/5 border border-[#00B34A]/10'
                      }`}>
                        <div>GATEWAY:  gateway.roshan.dev/api/v1/</div>
                        <div>SYNC:     ONLINE // ACTIVE ROUTING</div>
                        <div>ARRAYS:   [WHITELISTED_IPS], [API_KEYS]</div>
                      </div>
                    </div>
                  )}
                  {pipelineTab === 'droplet' && (
                    <div className="space-y-2 animate-[fadeIn_0.3s_ease-out]">
                      <p className={`text-xs leading-normal font-sans ${textMuted}`}>
                        Standalone server containers hosting FastAPI microservices. Linked via Docker networks.
                      </p>
                      <div className={`font-mono text-[9px] p-2 rounded leading-none space-y-1 ${
                        theme === 'dark' ? 'text-[#00FF66]/80 bg-[#00FF66]/5 border border-[#00FF66]/10' : 'text-[#00B34A]/80 bg-[#00B34A]/5 border border-[#00B34A]/10'
                      }`}>
                        <div>NODES:    droplet-lon-01, droplet-lon-02</div>
                        <div>SYNC:     RUNNING // LOAD STABLE</div>
                        <div>ARRAYS:   [DOCKER_IMAGES], [FAISS_INDEX]</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className={`text-[10px] font-mono mt-4 pt-2.5 border-t ${borderClass} ${textMuted}`}>
                Pipeline Status: <span className={`font-semibold ${accentText}`}>SYNCHRONIZED &amp; INGESTING</span>
              </div>
            </section>

          </main>
        </div>

        {/* ================= 2. PROFESSIONAL TIMELINE & ROADMAP SECTION ================= */}
        <section id="experience" className={`border-t pt-6 ${borderClass}`}>
          <div className="mb-5">
            <div className={`text-xs font-mono uppercase tracking-widest mb-1.5 ${accentText}`}>01 // PROFESSIONAL TIMELINE</div>
            <h3 className={`text-lg font-bold font-sans ${textMain}`}>Chronological engineering records within active enterprise environments.</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            
            {/* Visual Vertical Node Roadmap */}
            <div className={`lg:col-span-1 p-5 rounded-xl border flex flex-col justify-center ${cardClass}`}>
              <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-6 ml-4 space-y-6">
                {[
                  { year: "2021", text: "Commenced Core AI Foundations" },
                  { year: "2025", text: "Graduated B.Tech AI & Data Science (7.55 / 10.0 CGPA)" },
                  { year: "2025", text: "Appointed AI Automation Engineer @ Blink Digital India" },
                  { year: "2026", text: "Incoming MSc Artificial Intelligence Scholar @ Teesside University, UK" }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <span className={`absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 transition-all ${
                      theme === 'dark' ? 'bg-black border-[#00FF66]' : 'bg-[#FAF9F6] border-[#00B34A]'
                    }`} />
                    <div className="flex flex-col">
                      <span className={`font-mono text-xs font-bold leading-none ${accentText}`}>{item.year} ──&gt;</span>
                      <span className={`text-[11px] font-sans font-bold leading-normal mt-0.5 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Detail Card */}
            <div className={`lg:col-span-2 p-5 rounded-xl border transition-all duration-300 relative ${cardClass}`}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                <div>
                  <h4 className={`text-lg font-bold font-sans ${textMain}`}>Blink Digital India Pvt Ltd</h4>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">Mumbai, India | Remote</p>
                </div>
                <div className="md:text-right">
                  <span className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-mono font-medium ${accentBg} ${accentText}`}>
                    AI Automation Engineer &amp; Full-Stack Developer
                  </span>
                  <p className="text-xs text-neutral-500 font-mono mt-1">Oct 2025 - Present</p>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Architected and maintained end-to-end <strong>TikTok Marketing API</strong> programmatic pipelines on <strong>DigitalOcean</strong> droplet clusters, cutting manual campaign deployment workflows from <strong>4h ──&gt; 10m</strong>.",
                  "Engineered a <strong>Bidirectional Sync</strong> data reconciliation engine between client dashboards and TikTok Ads Manager, reducing synchronization lag to near-zero.",
                  "Built and deployed an automated script-to-video creative factory utilizing the Creatify API, supporting 50+ unique ad variants per batch execution.",
                  "Integrated secure payment infrastructures via the <strong>Stripe API</strong> with strict multi-tenant isolation protocols across production micro-frontends."
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`h-1.5 w-1.5 rounded-full shrink-0 mt-2 ${theme === 'dark' ? 'bg-[#00FF66]' : 'bg-[#007A3E]'}`} />
                    <span 
                      className={`text-xs md:text-sm font-sans leading-relaxed ${theme === 'dark' ? 'text-neutral-300' : 'text-zinc-700'}`}
                      dangerouslySetInnerHTML={{ __html: bullet }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= 3. EXPANDED CORE SKILLS GRID ================= */}
        <section id="competencies" className={`border-t pt-6 ${borderClass}`}>
          <div className="mb-5">
            <div className={`text-xs font-mono uppercase tracking-widest mb-1.5 ${accentText}`}>02 // CORE COMPETENCIES</div>
            <h3 className={`text-lg font-bold font-sans ${textMain}`}>Distributed systems, AI orchestration, and cloud infrastructure frameworks.</h3>
          </div>

          <div className={`rounded-xl border p-5 transition-all duration-300 ${cardClass}`}>
            <div className="space-y-4">
              
              {/* Row 1 */}
              <div className={`flex flex-col md:flex-row md:items-center justify-between pb-4 border-b ${borderClass} gap-4`}>
                <span className={`font-mono text-xs ${textMuted} w-48 shrink-0 flex items-center gap-1.5 select-none`}>
                  AI / ML Frameworks <span className="hidden md:inline">──────&gt;</span>
                </span>
                <div className="flex flex-wrap gap-2 flex-grow">
                  {["LangChain", "FAISS Vector Search", "LLM Fine-Tuning", "OpenAI API", "Prompt Engineering", "Semantic Retrieval"].map((skill, idx) => (
                    <span key={idx} className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-all ${
                      theme === 'dark' 
                        ? 'bg-black/30 border-[#1A1A1A] text-neutral-300 hover:border-[#00FF66]/20' 
                        : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:border-[#007A3E]/30'
                    }`}>
                      {skill === 'LangChain' || skill === 'FAISS Vector Search' ? <strong>{skill}</strong> : skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Row 2 */}
              <div className={`flex flex-col md:flex-row md:items-center justify-between pb-4 border-b ${borderClass} gap-4`}>
                <span className={`font-mono text-xs ${textMuted} w-48 shrink-0 flex items-center gap-1.5 select-none`}>
                  Backend &amp; Database <span className="hidden md:inline">─────&gt;</span>
                </span>
                <div className="flex flex-wrap gap-2 flex-grow">
                  {["Python (Advanced)", "FastAPI", "PostgreSQL", "REST API Architecture", "Data Processing", "Webhooks"].map((skill, idx) => (
                    <span key={idx} className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-all ${
                      theme === 'dark' 
                        ? 'bg-black/30 border-[#1A1A1A] text-neutral-300 hover:border-[#00FF66]/20' 
                        : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:border-[#007A3E]/30'
                    }`}>
                      {skill === 'FastAPI' ? <strong>{skill}</strong> : skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <span className={`font-mono text-xs ${textMuted} w-48 shrink-0 flex items-center gap-1.5 select-none`}>
                  DevOps &amp; Cloud <span className="hidden md:inline">────────&gt;</span>
                </span>
                <div className="flex flex-wrap gap-2 flex-grow">
                  {["DigitalOcean", "Oracle Cloud (OCI)", "Docker", "CI/CD Github Actions", "Stripe Integration", "Git Workflows"].map((skill, idx) => (
                    <span key={idx} className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-all ${
                      theme === 'dark' 
                        ? 'bg-black/30 border-[#1A1A1A] text-neutral-300 hover:border-[#00FF66]/20' 
                        : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:border-[#007A3E]/30'
                    }`}>
                      {skill === 'DigitalOcean' || skill === 'Stripe Integration' ? <strong>{skill}</strong> : skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= 4. FORMAL PORTFOLIO PROJECT MATRIX ================= */}
        <section id="systems" className={`border-t pt-6 ${borderClass}`}>
          <div className="mb-5">
            <div className={`text-xs font-mono uppercase tracking-widest mb-1.5 ${accentText}`}>03 // VERIFIED CODEBASE PROJECTS</div>
            <h3 className={`text-lg font-bold font-sans ${textMain}`}>Asymmetric production codebase directory and launch sandboxes.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Card A: AdTech Optimization Suite */}
            <div className={`p-5 md:p-6 rounded-xl border hover:border-glow-hover transition-all duration-300 flex flex-col justify-between md:col-span-2 ${cardClass}`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider select-none">// Core Enterprise Deployment</span>
                  <div className="flex gap-1">
                    {["Node.js", "TikTok API", "DigitalOcean", "Stripe"].map((t, idx) => (
                      <span key={idx} className={`px-2 py-0.5 rounded text-[9px] font-mono ${accentBg} ${accentText}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className={`text-lg font-bold font-sans ${textMain} mb-1.5`}>AdTech Optimization Suite</h4>
                
                {/* Restructured Case Study Lifecycles */}
                <div className={`space-y-1.5 text-xs font-sans mt-2 mb-3 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  <div><span className="font-bold font-mono text-[9px] text-neutral-500 tracking-wide">// THE CHALLENGE:</span> Slicing massive, 4-hour manual marketing configurations down to programmatic cycles.</div>
                  <div><span className="font-bold font-mono text-[9px] text-neutral-500 tracking-wide">// THE IMPLEMENTATION:</span> Programmatic middleware binding the <strong>TikTok Marketing API</strong> with automated creative rendering assets.</div>
                  <div><span className="font-bold font-mono text-[9px] text-neutral-500 tracking-wide">// THE METRIC OUTCOME:</span> Secured a <strong>95.8% reduction</strong> in human configuration latency, scaling live client spend on <strong>DigitalOcean</strong> drops.</div>
                </div>

                {/* System Topology flowcharts */}
                <div className={`mt-3 p-2.5 rounded font-mono text-[9px] overflow-x-auto whitespace-nowrap border ${
                  theme === 'dark' ? 'bg-black/50 border-[#1A1A1A] text-[#00E5FF]' : 'bg-zinc-50 border-zinc-100 text-[#006D7A]'
                }`}>
                  <div className="text-neutral-500 mb-0.5">// Data Flow System Topology Map</div>
                  Authentication ──&gt; Campaign Management ──&gt; Creative Generation ──&gt; Media Synchronization ──&gt; Marketing API ──&gt; Analytics &amp; Reporting
                </div>

                {/* Complexity Infrastructure Table A (Removed Subjective Labels) */}
                <div className={`mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5 p-3 rounded-lg border text-[10px] font-mono transition-colors ${
                  theme === 'dark' ? 'bg-black/40 border-[#1A1A1A]' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Engineered Complexity:</span>
                    <span className={`${textMain} font-bold`}>4.6 / 5.0</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Infrastructure Target:</span>
                    <span className={`${textMain} font-bold`}>DigitalOcean Droplets</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Concurrency State:</span>
                    <span className={`${textMain} font-bold`}>Multi-Tenant Isolated</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Architecture Stack:</span>
                    <span className={`${textMain} font-bold`}>Production-Grade Multi-Agent Lifecycle</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Processing Threshold:</span>
                    <span className={`${textMain} font-bold`}>Up to 500MB CSV Engine</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Optimization Yield:</span>
                    <span className={`${accentText} font-bold`}>95.8% Workload Crushed</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button 
                  onClick={() => setIsPreviewModalOpen(true)}
                  className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-200 select-none cursor-pointer w-full sm:w-1/2 ${primaryBtnClass}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>
                <button 
                  onClick={() => setIsConfidentialOpen(true)}
                  className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 select-none cursor-pointer w-full sm:w-1/2 ${secondaryBtnClass}`}
                >
                  <Shield className="w-3.5 h-3.5 text-red-500" />
                  <span>🔒 Private Enterprise Repository</span>
                </button>
              </div>
            </div>

            {/* Card B: Automated Data Co-Pilot */}
            <div className={`p-5 rounded-xl border hover:border-glow-hover transition-all duration-300 flex flex-col justify-between md:col-span-1 ${cardClass}`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider select-none">// Data Engineering App</span>
                  <div className="flex gap-1">
                    {["Pandas", "Scikit", "Streamlit"].map((t, idx) => (
                      <span key={idx} className={`px-2 py-0.5 rounded text-[9px] font-mono ${accentBg} ${accentText}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className={`text-base font-bold font-sans ${textMain} mb-1.5`}>Automated Data Co-Pilot</h4>
                
                {/* Restructured Case Study Lifecycles */}
                <div className={`space-y-1.5 text-xs font-sans mt-2 mb-3 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  <div><span className="font-bold font-mono text-[9px] text-neutral-500 tracking-wide">// THE CHALLENGE:</span> Manually cleaning, processing, and evaluating high-dimensional CSV data.</div>
                  <div><span className="font-bold font-mono text-[9px] text-neutral-500 tracking-wide">// THE IMPLEMENTATION:</span> Automated stream mapping dataset cleanups to scikit-learn training threads and SHAP matrices.</div>
                  <div><span className="font-bold font-mono text-[9px] text-neutral-500 tracking-wide">// THE METRIC OUTCOME:</span> Slashed turnaround times by <strong>70% Latency Drop</strong> on <strong>500MB CSV Datasets</strong>.</div>
                </div>

                {/* System Topology flowchart */}
                <div className={`mt-3 p-2.5 rounded font-mono text-[9px] overflow-x-auto whitespace-nowrap border ${
                  theme === 'dark' ? 'bg-black/50 border-[#1A1A1A] text-[#00E5FF]' : 'bg-zinc-50 border-zinc-100 text-[#006D7A]'
                }`}>
                  <div className="text-neutral-500 mb-0.5">// Data Flow System Topology Map</div>
                  Raw CSV (Up to 500MB) ──&gt; [Pandas Processing] ──&gt; [Scikit AutoML] ──&gt; [SHAP Matrix] ──&gt; Streamlit UI
                </div>

                {/* Complexity Infrastructure Table B (Removed Subjective Labels) */}
                <div className={`mt-4 grid grid-cols-1 gap-y-1 p-3 rounded-lg border text-[10px] font-mono transition-colors ${
                  theme === 'dark' ? 'bg-black/40 border-[#1A1A1A]' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Engineered Complexity:</span>
                    <span className={`${textMain} font-bold`}>4.0 / 5.0</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Infrastructure:</span>
                    <span className={`${textMain} font-bold`}>Streamlit Cloud droplets</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Concurrency:</span>
                    <span className={`${textMain} font-bold`}>Single Tenant Sandbox</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Architecture Stack:</span>
                    <span className={`${textMain} font-bold`}>Production Data Pipeline</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Threshold:</span>
                    <span className={`${textMain} font-bold`}>Up to 500MB CSV Engine</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Yield:</span>
                    <span className={`${accentText} font-bold`}>70% Delay Reduction</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <a 
                  href="https://github.com/Roshanatwork/Data_Co_Pilot/blob/main/README.md" 
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 select-none cursor-pointer w-full ${primaryBtnClass}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Summary</span>
                </a>
                <a 
                  href="https://github.com/Roshanatwork/Data_Co_Pilot" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 select-none cursor-pointer w-full ${secondaryBtnClass}`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Source</span>
                </a>
              </div>
            </div>

            {/* Card C: Financial Equity RAG Assistant */}
            <div className={`p-5 md:p-6 rounded-xl border hover:border-glow-hover transition-all duration-300 flex flex-col justify-between md:col-span-3 ${cardClass}`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider select-none">// Vector Knowledge Graph</span>
                  <div className="flex gap-1">
                    {["LangChain", "OpenAI", "FAISS"].map((t, idx) => (
                      <span key={idx} className={`px-2 py-0.5 rounded text-[9px] font-mono ${accentBg} ${accentText}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className={`text-lg font-bold font-sans ${textMain} mb-1.5`}>Financial Equity RAG Assistant</h4>
                
                {/* Restructured Case Study Lifecycles */}
                <div className={`space-y-1.5 text-xs font-sans mt-2 mb-3 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  <div><span className="font-bold font-mono text-[9px] text-neutral-500 tracking-wide">// THE CHALLENGE:</span> Searching through unstructured PDF reports to extract citation-tracked answers.</div>
                  <div><span className="font-bold font-mono text-[9px] text-neutral-500 tracking-wide">// THE IMPLEMENTATION:</span> Cosine vector similarity indexing mapped asynchronously on FAISS index vectors via <strong>LangChain</strong>.</div>
                  <div><span className="font-bold font-mono text-[9px] text-neutral-500 tracking-wide">// THE METRIC OUTCOME:</span> Achieved sub-second document citations lookup with zero validation hallucinations.</div>
                </div>

                {/* System Topology flowchart */}
                <div className={`mt-3 p-2.5 rounded font-mono text-[9px] overflow-x-auto whitespace-nowrap border ${
                  theme === 'dark' ? 'bg-black/50 border-[#1A1A1A] text-[#00E5FF]' : 'bg-zinc-50 border-zinc-100 text-[#006D7A]'
                }`}>
                  <div className="text-neutral-500 mb-0.5">// Data Flow System Topology Map</div>
                  PDF Corpus ──&gt; [Recursive Text Splitter] ──&gt; [OpenAI embeddings-3-small] ──&gt; [FAISS Index Storage] ──&gt; Enriched Context LLM Response
                </div>

                {/* Complexity Infrastructure Table C (Removed Subjective Labels) */}
                <div className={`mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5 p-3 rounded-lg border text-[10px] font-mono transition-colors ${
                  theme === 'dark' ? 'bg-black/40 border-[#1A1A1A]' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Engineered Complexity:</span>
                    <span className={`${textMain} font-bold`}>4.8 / 5.0</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Infrastructure Target:</span>
                    <span className={`${textMain} font-bold`}>LangChain Server API</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Concurrency State:</span>
                    <span className={`${textMain} font-bold`}>Stateless Execution</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Architecture Stack:</span>
                    <span className={`${textMain} font-bold`}>Production-Grade Vector Retrieval Lifecycle</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Processing Threshold:</span>
                    <span className={`${textMain} font-bold`}>Unstructured PDF Arrays</span>
                  </div>
                  <div className="flex justify-between border-b pb-1 border-neutral-800/20 dark:border-steel/20">
                    <span className="text-neutral-500">Optimization Yield:</span>
                    <span className={`${accentText} font-bold`}>Sub-Second Vector Query Match</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a 
                  href="https://github.com/Roshanatwork/AI_Powered_Equity_Research_Tool/blob/main/output.png" 
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-200 select-none cursor-pointer w-full sm:w-1/2 ${primaryBtnClass}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Preview Output</span>
                </a>
                <a 
                  href="https://github.com/Roshanatwork/AI_Powered_Equity_Research_Tool" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 select-none cursor-pointer w-full sm:w-1/2 ${secondaryBtnClass}`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Source on GitHub</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 6: CREDENTIALS & COMPLIANCE BOARD ================= */}
        <section id="credentials" className={`border-t pt-6 ${borderClass}`}>
          <div className="mb-5">
            <div className={`text-xs font-mono uppercase tracking-widest mb-1.5 ${accentText}`}>04 // ACADEMIC & COMPLIANCE LOGS</div>
            <h3 className={`text-lg font-bold font-sans ${textMain}`}>Academic degree equivalence and language waiver approvals.</h3>
          </div>
          
          <div 
            className={`border rounded-xl p-5 md:p-6 border-glow-hover flex flex-col justify-between transition-all duration-300 ${cardClass}`}
          >
            <div>
              <div className={`flex items-center justify-between border-b pb-3 mb-6 ${borderClass}`}>
                <h3 className={`text-xs font-mono uppercase tracking-wider flex items-center gap-2 ${accentText}`}>
                  <ShieldCheck className="w-4 h-4" /> Credentials, Compliance &amp; Certifications Matrix
                </h3>
                <span className="text-[10px] font-mono text-neutral-500">ZAB &amp; UK Academic Language Compliant</span>
              </div>

              {/* Lanes Horizontal Stack */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                
                {/* LANE 1: Education */}
                <div className={`border p-4 rounded-lg flex flex-col justify-between hover:border-glow-hover transition-all duration-300 ${
                  theme === 'dark' ? 'bg-black/30 border-[#1A1A1A]' : 'bg-zinc-50/50 border-zinc-200'
                }`}>
                  <div>
                    <div className={`flex items-center space-x-2 mb-2.5 ${accentText}`}>
                      <GraduationCap className="w-4 h-4" />
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider">LANE 1 // Education</h4>
                    </div>
                    <div className="space-y-1.5">
                      <div className={`text-sm font-semibold ${textMain}`}>SRKR Engineering College</div>
                      <div className={`text-xs ${textMuted}`}>B.Tech in Artificial Intelligence &amp; Data Science</div>
                      <div className="text-xs font-mono text-neutral-500">Class of 2025 // <strong>7.55 / 10.0 CGPA</strong></div>
                    </div>
                  </div>
                  <div className="mt-5 pt-2.5 border-t border-steel/50">
                    <span className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded border ${accentBg} ${accentText}`}>
                      ZAB Approved • Equivalent to German Bachelor's
                    </span>
                  </div>
                </div>

                {/* LANE 2: Certifications */}
                <div className={`border p-4 rounded-lg flex flex-col justify-between hover:border-glow-hover transition-all duration-300 ${
                  theme === 'dark' ? 'bg-black/30 border-[#1A1A1A]' : 'bg-zinc-50/50 border-zinc-200'
                }`}>
                  <div>
                    <div className={`flex items-center space-x-2 mb-2.5 ${accentText}`}>
                      <Award className="w-4 h-4" />
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider">LANE 2 // Certifications</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-1.5 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-[#00B34A] flex-shrink-0" />
                        <span className={`font-medium ${textMain}`}>OCI Certified GenAI Professional '25</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-[#00B34A] flex-shrink-0" />
                        <span className={`font-medium ${textMain}`}>OCI Certified Data Science Professional '25</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-[#00B34A] flex-shrink-0" />
                        <span className={`font-medium ${textMain}`}>Google Analytics GA4 Certification</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 pt-2.5 border-t border-steel/50">
                    <span className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded border ${accentBg} ${accentText}`}>
                      All Certifications Active &amp; Valid
                    </span>
                  </div>
                </div>

                {/* LANE 3: Exemptions */}
                <div className={`border p-4 rounded-lg flex flex-col justify-between hover:border-glow-hover transition-all duration-300 ${
                  theme === 'dark' ? 'bg-black/30 border-[#1A1A1A]' : 'bg-zinc-50/50 border-zinc-200'
                }`}>
                  <div>
                    <div className={`flex items-center space-x-2 mb-2.5 ${accentText}`}>
                      <Globe className="w-4 h-4" />
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider">LANE 3 // Language Waiver</h4>
                    </div>
                    <div className="space-y-1.5">
                      <div className={`text-sm font-semibold ${textMain}`}>Board of Intermediate Education</div>
                      <div className={`text-xs ${textMuted}`}>Intermediate: 952/1000 Total Marks</div>
                      <div className="text-xs font-mono text-neutral-500">English Specialty Score: 95/100</div>
                    </div>
                  </div>
                  <div className="mt-5 pt-2.5 border-t border-steel/50">
                    <span className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded border ${accentBg} ${accentText}`}>
                      100% Qualified UK Language Waiver
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ================= 5. DEPLOY EXPLICIT CONTACT & CAPABILITIES LANE ================= */}
        <section className={`border-t pt-6 ${borderClass}`}>
          <div className="mb-4">
            <div className={`text-xs font-mono uppercase tracking-widest mb-1.5 ${accentText}`}>05 // RUNTIME STATUS & OUTREACH NODE</div>
            <h3 className={`text-lg font-bold font-sans ${textMain}`}>Direct programmatic channel for hiring and consultation proposals.</h3>
          </div>
          
          <div className={`p-5 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 ${cardClass}`}>
            <div className="space-y-1.5">
              <div className={`text-sm font-semibold ${textMain}`}>
                Currently available for: AI Automation Engineering // Distributed Systems Architecture // Backend Cloud Pipelines
              </div>
              <p className={`text-xs ${textMuted} font-sans`}>
                Open to corporate engineering contracts, remote automation setups, and academic collaboration. Located in Mumbai, India.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a 
                href="mailto:roshanali999m@gmail.com"
                className={`flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 select-none cursor-pointer ${primaryBtnClass}`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Initialize Direct Communication via Email</span>
              </a>
              
              <a 
                href="https://github.com/Roshanatwork" 
                target="_blank" 
                rel="noreferrer" 
                className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono transition-all duration-200 select-none cursor-pointer ${secondaryBtnClass}`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/mdroshanali/" 
                target="_blank" 
                rel="noreferrer" 
                className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono transition-all duration-200 select-none cursor-pointer ${secondaryBtnClass}`}
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>



        {/* Footer */}
        <footer className={`mt-2 pt-4 border-t flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4 ${borderClass}`}>
          <div>
            © {new Date().getFullYear()} Mohammad Roshan Ali. All systems operational.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-[#007A3E] dark:hover:text-[#00FF66] transition-colors cursor-pointer select-none">Security Policy</span>
            <span>•</span>
            <span className="hover:text-[#007A3E] dark:hover:text-[#00FF66] transition-colors cursor-pointer select-none">Compliance Logs</span>
            <span>•</span>
            <span className="hover:text-[#007A3E] dark:hover:text-[#00FF66] transition-colors cursor-pointer select-none">Vercel Edge Gateway</span>
          </div>
        </footer>
      </div>

      {/* Confidentiality Modal */}
      {isConfidentialOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 z-50 transition-all">
          <div 
            id="confidential-modal-content"
            className={`border rounded-xl w-full max-w-lg shadow-2xl relative overflow-hidden transition-all duration-300 ${modalBg}`}
          >
            <div className="h-1 bg-red-500" />
            
            {/* Modal Header */}
            <div className={`p-4 border-b flex items-center justify-between transition-colors duration-300 ${modalHeaderBg}`}>
              <div className="flex items-center space-x-2.5">
                <Shield className="w-4 h-4 text-red-500" />
                <span className={`text-xs font-bold font-mono uppercase tracking-wide transition-colors duration-300 ${modalTitle}`}>
                  Confidentiality Protocol
                </span>
              </div>
              <button
                onClick={() => setIsConfidentialOpen(false)}
                className={`p-1 rounded border transition-all cursor-pointer ${modalCloseBtn}`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 font-sans text-xs md:text-sm leading-relaxed space-y-4">
              <p>
                This project was developed as part of my professional work at <strong>Blink Digital</strong>. Due to company confidentiality and intellectual property policies, the source code and live production environment cannot be shared publicly.
              </p>
              <p>
                The portfolio includes technical architecture, engineering decisions, measurable outcomes, and production workflows while protecting proprietary business logic.
              </p>
              <p>
                Additional implementation details can be discussed during technical interviews.
              </p>
            </div>

            {/* Modal Footer */}
            <div className={`border-t p-4 flex justify-end transition-colors duration-300 ${modalHeaderBg}`}>
              <button 
                onClick={() => setIsConfidentialOpen(false)}
                className={`px-4 py-1.5 rounded text-xs font-mono font-bold cursor-pointer ${primaryBtnClass}`}
              >
                Acknowledge &amp; Return
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AdTech Preview Modal */}
      {isPreviewModalOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 z-50 transition-all">
          <div 
            id="adtech-preview-modal-content"
            className={`border rounded-xl w-full max-w-lg shadow-2xl relative overflow-hidden transition-all duration-300 ${modalBg}`}
          >
            <div className={`h-1 bg-gradient-to-r from-transparent via-${theme === 'dark' ? '[#00FF66]' : '[#007A3E]'} to-transparent`} />
            
            {/* Modal Header */}
            <div className={`p-4 border-b flex items-center justify-between transition-colors duration-300 ${modalHeaderBg}`}>
              <div className="flex items-center space-x-2.5">
                <Globe className={`w-4 h-4 ${accentText}`} />
                <span className={`text-xs font-bold font-mono uppercase tracking-wide transition-colors duration-300 ${modalTitle}`}>
                  AdTech Suite Preview
                </span>
              </div>
              <button
                onClick={() => setIsPreviewModalOpen(false)}
                className={`p-1 rounded border transition-all cursor-pointer ${modalCloseBtn}`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 font-sans text-xs md:text-sm leading-relaxed space-y-4">
              <p>
                This platform was developed during my role as an AI Automation Engineer at <strong>Blink Digital India Pvt Ltd</strong>. It automates enterprise campaign operations by integrating campaign management, AI-powered creative generation, media synchronization, and production cloud infrastructure.
              </p>
              <p>
                Due to company confidentiality and intellectual property policies, the production environment and source code cannot be shared publicly. This preview highlights the platform's capabilities, architecture, and engineering outcomes while protecting proprietary information.
              </p>
            </div>

            {/* Modal Footer */}
            <div className={`border-t p-4 flex justify-end transition-colors duration-300 ${modalHeaderBg}`}>
              <button 
                onClick={() => setIsPreviewModalOpen(false)}
                className={`px-4 py-1.5 rounded text-xs font-mono font-bold cursor-pointer ${primaryBtnClass}`}
              >
                Acknowledge &amp; Return
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= RESUME DRAWER/MODAL ================= */}
      {isResumeOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 z-50 transition-all">
          <div 
            id="resume-modal-content"
            className={`border rounded-xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden transition-all duration-300 ${modalBg}`}
          >
            <div className={`h-1 bg-gradient-to-r from-transparent via-${theme === 'dark' ? '[#00FF66]' : '[#007A3E]'} to-transparent`} />
            
            {/* Modal Header */}
            <div className={`p-5 border-b flex items-center justify-between transition-colors duration-300 ${modalHeaderBg}`}>
              <div className="flex items-center space-x-3">
                <FileText className={`w-5 h-5 ${theme === 'dark' ? 'text-[#00FF66]' : 'text-[#007A3E]'}`} />
                <div>
                  <h3 className={`text-sm font-bold tracking-wide transition-colors duration-300 ${modalTitle}`}>
                    Mohammad_Roshan_Ali_CV.txt
                  </h3>
                  <p className={`text-[10px] font-mono transition-colors duration-300 ${theme === 'dark' ? 'text-neutral-500' : 'text-zinc-500'}`}>
                    Size: 4.8 KB | Format: UTF-8 Monospace Standard
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  id="btn-copy-resume"
                  onClick={copyResumeText}
                  className={`p-2 rounded border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono ${theme === 'dark' ? 'bg-black/40 border-[#121214] hover:border-[#00FF66]/30 text-neutral-400 hover:text-white' : 'bg-zinc-100 border-zinc-200 hover:border-[#007A3E]/30 text-zinc-650 hover:text-zinc-950'}`}
                  title="Copy CV contents to Clipboard"
                >
                  {copiedText ? (
                    <>
                      <Check className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#00FF66]' : 'text-[#007A3E]'}`} />
                      <span className={theme === 'dark' ? 'text-[#00FF66]' : 'text-[#007A3E]'}>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <button
                  id="btn-download-resume"
                  onClick={downloadResume}
                  className={`p-2 rounded border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono ${theme === 'dark' ? 'bg-black/40 border-[#121214] hover:border-[#00FF66]/30 text-neutral-400 hover:text-white' : 'bg-zinc-100 border-zinc-200 hover:border-[#007A3E]/30 text-zinc-650 hover:text-zinc-950'}`}
                  title="Download raw CV text file"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
                <button
                  id="btn-close-resume"
                  onClick={() => setIsResumeOpen(false)}
                  className={`p-2 rounded border transition-all cursor-pointer ${modalCloseBtn}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className={`p-6 md:p-8 overflow-y-auto flex-grow font-mono text-xs md:text-sm leading-relaxed scrollbar-thin select-text transition-colors duration-300 ${theme === 'dark' ? 'bg-black/60 text-neutral-300 scrollbar-thumb-steel/60' : 'bg-zinc-50/50 text-zinc-700 scrollbar-thumb-zinc-300'}`}>
              <pre className={`whitespace-pre-wrap font-mono font-semibold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                {fullResumeMarkdown}
              </pre>
            </div>

            {/* Modal Footer */}
            <div className={`border-t p-4 flex items-center justify-between text-[10px] font-mono transition-colors duration-300 ${modalHeaderBg}`}>
              <span className="flex items-center gap-1">
                <CheckSquare className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#00FF66]' : 'text-[#007A3E]'}`} /> Academic Waiver &amp; German Bachelor Equivalence Verified
              </span>
              <button 
                id="btn-close-resume-bottom"
                onClick={() => setIsResumeOpen(false)}
                className={`hover:underline cursor-pointer ${theme === 'dark' ? 'text-[#00FF66]' : 'text-[#007A3E]'}`}
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Full text résumé formatted as elite terminal output structure for Mohammad Roshan Ali
const fullResumeMarkdown = `================================================================================
MOHAMMAD ROSHAN ALI
AI Automation Engineer // Full-Stack Cloud Developer
Email: roshanali999m@gmail.com | Phone: (Exempt / In-App Messaging)
LinkedIn: linkedin.com/in/mdroshanali/ | GitHub: github.com/Roshanatwork
================================================================================

[PROFESSIONAL PROFILE]
Principal-grade automated systems architect. Specialty in designing low-latency
agentic AI pipelines, data ingestion frameworks, and high-throughput serverless
gateways. Extensive experience connecting marketing automations (TikTok AdTech)
with FastAPI, vector embedding indexes, and cloud node clusters.

--------------------------------------------------------------------------------
[EDUCATION]
* SRKR Engineering College (Class of 2025)
  - Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science
  - CGPA: 7.55 / 10.0
  - ZAB Evaluation: Certified Statement of Comparability Approved. Equal to a
    German Bachelor's Degree in computer science related field.
    
* Teesside University, United Kingdom (Enrollment Sept 2026)
  - Master of Science (MSc) in Artificial Intelligence
  - Status: Relocating to UK, enrollment confirmation completed.

--------------------------------------------------------------------------------
[CORE TECHNICAL CAPABILITIES]
* Agentic AI / RAG: LangChain, FAISS Vector Matrix, Cosine Embeddings, LLM-orchestration
* Back-End Gateways: FastAPI, Node.js, Express, REST APIs, Webhooks, Python, ES6+
* Databases: PostgreSQL, MongoDB, Redis Cache Systems
* DevOps & Cloud: DigitalOcean (Droplets, CDN, firewalls), Docker Containerization, Git CI/CD
* Integration Engineering: TikTok Marketing AdTech Configs, Video Assembly automation, Creatify APIs

--------------------------------------------------------------------------------
[REPRESENTATIVE PROJECT MILESTONES]
1. TikTok Campaign AdTech Automation Pipeline
   * Integrated programmatic campaign config loaders via TikTok Marketing API.
   * Reduced configuration setup processing time from 4 hours manual work to 10 minutes automated execution (95.8% Latency Drop).
   * Deployed via FastAPI microservices hosted on DigitalOcean droplet clusters.

2. Generative Video Compilation Pipeline (Creatify Video API Integration)
   * Designed backend worker framework mapping user inputs to automated audio/visual assets.
   * Leveraged FastAPI endpoints to manage high-volume video assembly requests asynchronously.
   * Implemented custom CDN caching for video payloads, reducing DigitalOcean outbound costs.

3. LangChain Semantic Document QA Engine
   * Engineered retrieval augmented generation system utilizing FAISS dense vector search matrices.
   * Optimized prompt injection vectors to maintain high-precision source citations.
   * Reduced semantic matching response overhead by 70% using optimized exploratory data analysis.

--------------------------------------------------------------------------------
[CERTIFICATIONS & AWARDS]
* Oracle Certified Cloud Infrastructure (OCI) GenAI Professional '25
* Oracle Certified Cloud Infrastructure (OCI) Data Science Professional '25
* Google Analytics (GA4) Certification
* Academic Distinction: 952/1000 Marks (Board of Intermediate Education, Class of 2021)
  - English Specialty Score: 95/100

--------------------------------------------------------------------------------
[COMPLIANCE & IMMIGRATION METRICS]
* UK Visa English Language Exemption:
  - English Specialty Intermediate Score (95/100) satisfies the medium of instruction criteria.
  - 100% Qualified for Official UK Academic Language Waiver (IELTS / PTE Exam Exempt).
* German Equivalence: ZAB (Zentralstelle für ausländisches Bildungswesen) certified.

================================================================================
[SYSTEM END OF LOG]
================================================================================
`;
