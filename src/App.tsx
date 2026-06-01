import React, { useState, useMemo } from 'react';
import { 
  Dna, 
  ShieldAlert, 
  Activity, 
  Search, 
  Database, 
  Workflow, 
  GitCommit, 
  BarChart3, 
  CheckCircle2, 
  Code, 
  Binary, 
  Cloud, 
  Eye, 
  Server, 
  AreaChart, 
  LineChart, 
  Cpu, 
  Users,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  ChevronRight,
  ChevronDown,
  Sparkles,
  SearchCode,
  Linkedin
} from 'lucide-react';
import { EXPERIENCES, EDUCATION, SKILLS, PUBLICATIONS, PROJECTS } from './data';
import { ExperienceItem, PublicationItem, SkillCategory } from './types';

// Cosmic theme is the default and only active theme

// Helper to map string names to Lucide icons dynamically with fallback
function getSkillIcon(name: string) {
  switch (name) {
    case 'Dna': return <Dna className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />;
    case 'ShieldAlert': return <ShieldAlert className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />;
    case 'Activity': return <Activity className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />;
    case 'SearchCode': return <SearchCode className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />;
    case 'Database': return <Database className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />;
    case 'Workflow': return <Workflow className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />;
    case 'GitCommit': return <GitCommit className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />;
    case 'BarChart3': return <BarChart3 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />;
    case 'CheckCircle2': return <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0" />;
    case 'Code': return <Code className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />;
    case 'Binary': return <Binary className="w-4 h-4 text-pink-600 dark:text-pink-400 shrink-0" />;
    case 'Cloud': return <Cloud className="w-4 h-4 text-blue-500 dark:text-blue-300 shrink-0" />;
    case 'Eye': return <Eye className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0" />;
    case 'Server': return <Server className="w-4 h-4 text-slate-600 dark:text-slate-300 shrink-0" />;
    case 'AreaChart': return <AreaChart className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />;
    case 'LineChart': return <LineChart className="w-4 h-4 text-indigo-500 dark:text-indigo-300 shrink-0" />;
    case 'Cpu': return <Cpu className="w-4 h-4 text-purple-500 dark:text-purple-300 shrink-0" />;
    case 'Users': return <Users className="w-4 h-4 text-emerald-500 dark:text-emerald-300 shrink-0" />;
    default: return <Award className="w-4 h-4 text-slate-500 shrink-0" />;
  }
}

export default function App() {
  const theme = 'cosmic-navy';
  
  // States for search and interactive filters
  const [globalSearch, setGlobalSearch] = useState('');
  const [pubSearch, setPubSearch] = useState('');
  const [pubYearFilter, setPubYearFilter] = useState('All');
  const [expandedWorkId, setExpandedWorkId] = useState<string | null>('daiichi-sankyo');

  // Filter Publications
  const filteredPublications = useMemo(() => {
    return PUBLICATIONS.filter(pub => {
      const matchesSearch = 
        pubSearch.trim() === '' || 
        pub.title.toLowerCase().includes(pubSearch.toLowerCase()) ||
        pub.authors.toLowerCase().includes(pubSearch.toLowerCase()) ||
        pub.journal.toLowerCase().includes(pubSearch.toLowerCase());
      
      const matchesYear = 
        pubYearFilter === 'All' || 
        pub.year.toString() === pubYearFilter;
        
      return matchesSearch && matchesYear;
    });
  }, [pubSearch, pubYearFilter]);

  // Filter Projects & Experience based on Global Search (if applicable)
  const filteredProjects = useMemo(() => {
    if (!globalSearch.trim()) return PROJECTS;
    return PROJECTS.filter(proj => 
      proj.title.toLowerCase().includes(globalSearch.toLowerCase()) ||
      proj.description.toLowerCase().includes(globalSearch.toLowerCase()) ||
      proj.tags.some(tag => tag.toLowerCase().includes(globalSearch.toLowerCase()))
    );
  }, [globalSearch]);

  const publicationYears = useMemo(() => {
    const years = PUBLICATIONS.map(p => p.year);
    const uniqueYears = Array.from(new Set(years)).sort((a, b) => b - a);
    return ['All', ...uniqueYears.map(String)];
  }, []);

  // Styling maps based on selected theme
  const activeTheme = {
    wrapper: 'bg-slate-950 text-slate-100 font-sans min-h-screen',
    cardStyle: 'bg-slate-900/60 border border-slate-800 hover:border-blue-900/50 shadow-lg rounded-xl',
    badgeStyle: 'bg-blue-950 text-blue-300 border-blue-900/40',
    titleHighlightColor: 'text-blue-400 font-display',
    accentBg: 'bg-blue-600 hover:bg-blue-750 text-white',
    accentText: 'text-blue-400',
    accentBorder: 'border-blue-600',
    heroBg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-900/10 to-transparent',
    tabActive: 'bg-blue-600 text-white',
    tabInactive: 'hover:bg-slate-800 text-slate-400',
    headerBg: 'bg-slate-900/80 border-b border-slate-800'
  };

  return (
    <div id="portfolio-container" className={activeTheme.wrapper}>

      {/* Hero Header Area */}
      <header className={`relative py-12 md:py-16 ${activeTheme.headerBg} no-print`}>
        {/* Ambient glow effects if applicable */}
        <div className={`absolute inset-0 ${activeTheme.heroBg} pointer-events-none`} />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="space-y-4 md:max-w-3xl">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 border rounded-full text-xs font-semibold tracking-wider font-mono uppercase ${activeTheme.badgeStyle}`}>
                <Award className="w-3.5 h-3.5" />
                <span>Ph.D., Bioinformatics</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-none text-slate-900 dark:text-white mb-2">
                Venkat J. Thodima, Ph.D.
              </h1>
              
              <p className="text-xl md:text-2xl font-light font-display text-slate-300">
                Associate Director, Translational Bioinformatics
              </p>
              
              {/* Profile Bio summary text */}
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-sans max-w-2xl pt-2">
                With over <strong className="text-slate-900 dark:text-slate-200">20+ years of hands-on expertise</strong>, I bridge advanced computational biology, high-throughput multi-omics data models, and clinical systems to fast-track oncology target identification, drug response workflows, and precision therapeutics.
              </p>

              {/* Quick Contact Icons */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs md:text-sm font-mono text-slate-500 dark:text-slate-400 pt-3">
                <a 
                  href="mailto:tvjagan@gmail.com" 
                  className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                  title="Official Mail"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>tvjagan@gmail.com</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Basking Ridge, NJ</span>
                </div>
                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                  title="Google Scholar"
                >
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  <span>Google Scholar</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-slate-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PRINT-ONLY HEADER FOR HIGHEST FIDELITY PRINTABLE FORMAT */}
      <div className="hidden print-only max-w-5xl mx-auto p-4 border-b border-zinc-300 mb-8 leading-tight">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">Venkat J. Thodima, Ph.D.</h1>
          <p className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Associate Director, Translational Bioinformatics</p>
          <div className="mt-2 text-xs text-zinc-650 flex justify-center gap-4">
            <span>Email: tvjagan@gmail.com</span>
            <span>Basking Ridge, NJ</span>
          </div>
        </div>
        <div className="mt-4 border-t border-zinc-200 pt-3">
          <p className="text-[10.5pt] leading-relaxed text-zinc-750 text-justify">
            <strong>Objectives:</strong> To understand and interpret rapidly expanding knowledge about the genetic landscape of various cancers through data-driven biomarkers and translational clinical genomics.
          </p>
        </div>
      </div>

      {/* Main Dynamic Workspace Fluid Layout */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print-cols">
          
          {/* LEFT SIDEBAR: Skills matrix & Dynamic interactive Genomics Lab box */}
          <div className="lg:col-span-4 space-y-8 print-only:hidden no-print">
            
            {/* Quick Metrics Badge Dashboard */}
            <div className={`p-6 ${activeTheme.cardStyle}`}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Bioinformatics Metrics</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-100/40 dark:bg-zinc-900/60 p-3 rounded-lg border border-slate-200/40 dark:border-zinc-800">
                  <div className="text-2xl font-black font-display text-blue-600 dark:text-blue-400">20+</div>
                  <div className="text-3xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Years Experience</div>
                </div>
                <div className="bg-slate-100/40 dark:bg-zinc-900/60 p-3 rounded-lg border border-slate-200/40 dark:border-zinc-800">
                  <div className="text-2xl font-black font-display text-emerald-600 dark:text-emerald-400">17</div>
                  <div className="text-3xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Peer Pubs</div>
                </div>
                <div className="bg-slate-100/40 dark:bg-zinc-900/60 p-3 rounded-lg border border-slate-200/40 dark:border-zinc-800">
                  <div className="text-2xl font-black font-display text-amber-600 dark:text-amber-400">6+</div>
                  <div className="text-3xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Clinical Assays</div>
                </div>
                <div className="bg-slate-100/40 dark:bg-zinc-900/60 p-3 rounded-lg border border-slate-200/40 dark:border-zinc-800">
                  <div className="text-2xl font-black font-display text-purple-600 dark:text-purple-400">FDA</div>
                  <div className="text-3xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">MAQC-II Expert</div>
                </div>
              </div>
              </div>

            {/* Quick Education info card */}
            <div className={`p-6 ${activeTheme.cardStyle}`}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 font-bold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-500" />
                <span>Academic Baseline</span>
              </h3>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-slate-200 dark:border-zinc-850 pl-3 space-y-1">
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                      {edu.degree} in {edu.field}
                    </h4>
                    <p className="text-3xs text-slate-500 dark:text-slate-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-2xs text-slate-500 dark:text-slate-450 leading-relaxed font-sans mt-1">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT FLOW: Expanded Detailed Section Chronicles, Papers, Projects */}
          <div className="lg:col-span-8 space-y-10">

            {/* Core Skills Dashboard, printed naturally at top */}
            <section id="academic-skills-matrix" className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-800 pb-2">
                <h2 className={`text-xl font-bold font-display tracking-tight flex items-center gap-2 ${activeTheme.titleHighlightColor}`}>
                  <Award className="w-5 h-5 shrink-0" />
                  <span>Technical Expertise & Core Skills</span>
                </h2>
                <span className="text-3xs font-mono text-slate-400 uppercase tracking-widest no-print">Certified Expert Levels</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SKILLS.map((cat, idx) => (
                  <div key={cat.title} className={`p-4 ${activeTheme.cardStyle}`}>
                    <h3 className="text-xs font-bold font-mono tracking-wide text-slate-700 dark:text-slate-300 pb-2.5 mb-3 border-b border-slate-100 dark:border-zinc-850/60 flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      <span>{cat.title}</span>
                    </h3>
                    <ul className="space-y-2">
                      {cat.skills.map((skill) => (
                        <li key={skill.name} className="flex items-start gap-2.5 text-2xs md:text-xs">
                          {getSkillIcon(skill.iconName)}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                                {skill.name}
                              </span>
                              <span className="text-[9px] font-mono select-none px-1 py-0.2 bg-slate-100 dark:bg-zinc-900 border border-slate-200/40 dark:border-zinc-800 rounded">
                                {skill.level}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Experience timeline with toggle-expanded descriptions */}
            <section id="professional-experience" className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-800 pb-2">
                <h2 className={`text-xl font-bold font-display tracking-tight flex items-center gap-2 ${activeTheme.titleHighlightColor}`}>
                  <Briefcase className="w-5 h-5 shrink-0" />
                  <span>Professional Career Chronicles</span>
                </h2>
                <span className="text-3xs font-mono text-slate-400 uppercase tracking-widest no-print">Click items to toggle details</span>
              </div>

              {/* Main Timeline listing */}
              <div className="space-y-4 no-print">
                {EXPERIENCES.map((item) => {
                  const isExpanded = expandedWorkId === item.id;
                  return (
                    <div 
                      key={item.id} 
                      className={`transition-all duration-200 overflow-hidden cursor-pointer ${activeTheme.cardStyle} ${
                        isExpanded ? 'ring-1 ring-blue-500/20 shadow-md' : 'hover:bg-slate-100/10'
                      }`}
                      onClick={() => setExpandedWorkId(isExpanded ? null : item.id)}
                    >
                      {/* Condensed overview row */}
                      <div className="p-5 flex items-start gap-4">
                        <div className="p-2.5 rounded-lg shrink-0 bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-slate-350">
                          <Dna className="w-5 h-5" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                            <span className="text-3xs font-mono text-blue-600 dark:text-blue-400 tracking-wider font-semibold">
                              {item.period}
                            </span>
                            <span className="text-3xs text-slate-450 font-medium font-mono">
                              {item.location}
                            </span>
                          </div>
                          
                          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mt-0.5 font-display leading-snug">
                            {item.role}
                          </h3>
                          
                          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.2">
                            {item.company}
                          </p>
                        </div>

                        {/* Chevron expansion controller */}
                        <div className="no-print text-slate-400 hover:text-slate-600 transition-colors pt-2 shrink-0">
                          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </div>
                      </div>

                      {/* Expandable key bullets container */}
                      {isExpanded && (
                        <div className="px-5 pb-5 pt-1.5 border-t border-slate-100 dark:border-zinc-850/60 bg-slate-50/25 dark:bg-black/20 font-sans">
                          <ul className="space-y-2.5 text-xs text-slate-650 dark:text-slate-400">
                            {item.bullets.map((bullet, index) => (
                              <li key={index} className="flex gap-2.5 items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-blue-500" />
                                <p className="leading-relaxed text-justify">{bullet}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* IMMACULATE NATURAL LAYOUT PRINT VERSION (NO EXPANSION NEST; ALL VIEW EXPANDED AND FLUID FOR RESUME) */}
              <div className="hidden print-only space-y-6">
                {EXPERIENCES.map((item) => (
                  <div key={'print-' + item.id} className="text-slate-900 border-b border-zinc-200 pb-5 last:border-0 leading-snug">
                    <div className="flex justify-between items-start text-xs font-bold font-mono tracking-wide text-zinc-650 uppercase">
                      <div>{item.company} · <span className="normal-case italic font-sans text-zinc-550">{item.location}</span></div>
                      <div>{item.period}</div>
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1.5 font-display text-[11pt] mt-0.5">
                      {item.role}
                    </h3>
                    <ul className="space-y-1.5 text-justify text-[10pt] pl-3 leading-relaxed">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="list-disc pl-1 text-slate-800">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Print education nested inline for continuous sheet */}
                <div className="mt-8 pt-6 border-t-2 border-zinc-300">
                  <h3 className="text-sm font-bold font-mono uppercase tracking-widest text-zinc-650 mb-4">Academic Background</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {EDUCATION.map((edu) => (
                      <div key={'print-edu-' + edu.degree}>
                        <h4 className="text-xs font-bold text-slate-900">{edu.degree} {edu.field}</h4>
                        <div className="text-xs text-zinc-650 font-medium">{edu.institution}</div>
                        <p className="text-2xs text-zinc-500 mt-1 italic leading-relaxed">{edu.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Science / Clinical Diagnostic Projects */}
            <section id="translational-milestones" className="space-y-4 no-print">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-800 pb-2">
                <h2 className={`text-xl font-bold font-display tracking-tight flex items-center gap-2 ${activeTheme.titleHighlightColor}`}>
                  <Activity className="w-5 h-5 shrink-0" />
                  <span>Featured Scientific Milestones & Systems</span>
                </h2>
              </div>

              <div className="space-y-4">
                {filteredProjects.map((proj) => (
                  <div key={proj.title} className={`p-5 ${activeTheme.cardStyle}`}>
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {proj.tags.map((tag) => (
                        <span key={tag} className={`px-2 py-0.5 text-3xs font-mono uppercase tracking-wider rounded ${activeTheme.badgeStyle}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 font-display mb-1.5">
                      {proj.title}
                    </h3>
                    
                    <p className="text-2xs md:text-xs text-slate-650 dark:text-slate-400 leading-relaxed text-justify mb-2">
                      {proj.description}
                    </p>

                    <div className="bg-slate-50/50 dark:bg-zinc-900/40 p-3 rounded-lg border border-slate-100 dark:border-zinc-850/60 text-3xs flex items-start gap-2 select-none">
                      <span className="font-bold text-blue-600 dark:text-blue-400 font-mono shrink-0 uppercase">Key Impact:</span>
                      <span className="text-slate-500 dark:text-slate-400 italic font-sans">{proj.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Comprehensive paginated, searchable publications section */}
            <section id="scholarly-publications" className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 dark:border-zinc-800 pb-2 gap-3">
                <h2 className={`text-xl font-bold font-display tracking-tight flex items-center gap-2 ${activeTheme.titleHighlightColor}`}>
                  <BookOpen className="w-5 h-5 shrink-0" />
                  <span>Scholarly Publications ({PUBLICATIONS.length})</span>
                </h2>
                
                {/* Year and Text Filters in UI */}
                <div className="flex items-center gap-2 text-2xs font-mono no-print">
                  <div className="relative">
                    <input
                      type="text"
                      className="pl-7 pr-3 py-1.5 bg-white dark:bg-zinc-950 dark:border-zinc-800 text-2xs rounded-lg border border-slate-200 outline-none focus:border-blue-500 w-36"
                      placeholder="Search papers..."
                      value={pubSearch}
                      onChange={(e) => setPubSearch(e.target.value)}
                      aria-label="Search Publications"
                    />
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                  </div>
                  
                  <select
                    className="px-2.5 py-1.5 bg-white dark:bg-zinc-950 dark:border-zinc-800 rounded-lg border border-slate-200 outline-none cursor-pointer"
                    value={pubYearFilter}
                    onChange={(e) => setPubYearFilter(e.target.value)}
                    aria-label="Filter Publication Year"
                  >
                    {publicationYears.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Interactive searchable scroll-box for Publications */}
              <div className="space-y-3.5 no-print max-h-[550px] overflow-y-auto pr-1">
                {filteredPublications.length > 0 ? (
                  filteredPublications.map((pub, idx) => (
                    <article 
                      key={pub.id} 
                      className={`p-4 transition-all duration-200 ${activeTheme.cardStyle}`}
                    >
                      <div className="flex items-center justify-between gap-2.5 mb-1 bg-slate-50 dark:bg-zinc-900/40 px-2 py-1 rounded">
                        <span className="text-[10px] font-mono font-bold tracking-wide text-blue-600 dark:text-blue-400">
                          {pub.journal}
                        </span>
                        <span className="text-[10px] font-mono text-slate-450 pr-1">
                          {pub.dateStr}
                        </span>
                      </div>
                      
                      <h3 className="text-2xs md:text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-sans mb-1.5">
                        {pub.title}
                      </h3>
                      
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 italic mb-2 select-text font-serif leading-relaxed line-clamp-2 md:line-clamp-none">
                        {pub.authors}
                      </p>

                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 hover:text-emerald-700 dark:text-lime-400 dark:hover:text-lime-500 select-none font-bold tracking-tight bg-slate-100 dark:bg-zinc-900 px-2.5 py-1.2 rounded-md hover:underline"
                        >
                          <span>Article Resource Path</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </article>
                  ))
                ) : (
                  <div className="text-center text-xs text-slate-400 py-10">
                    No research publications match your current filters.
                  </div>
                )}
              </div>

              {/* IMMACULATE NATURAL UN-PAGINATED PRINT OUTPUT (PERFECT BIBLIOGRAPHY FORMAT) */}
              <div className="hidden print-only space-y-4">
                {PUBLICATIONS.map((pub, idx) => (
                  <div key={'print-pub-' + pub.id} className="text-justify text-[10pt] leading-tight pb-2 font-serif text-slate-800">
                    <span className="font-bold print-only font-sans mr-2">{idx + 1}.</span>
                    <strong>{pub.authors}</strong> ({pub.year}). {pub.title}. <em className="font-sans font-bold text-slate-900">{pub.journal}</em>. {pub.dateStr}. {pub.link && <span className="text-3xs text-slate-500 block break-all leading-none mt-0.5">{pub.link}</span>}
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 dark:bg-black text-slate-400 text-xs py-12 px-6 border-t border-slate-800 mt-20 no-print text-center leading-relaxed">
        <div className="max-w-5xl mx-auto space-y-3 font-mono">
          <p>© {new Date().getFullYear()} Dr. Venkat J. Thodima, Ph.D. — Professional Translational Genomics Portfolio.</p>
          <p className="text-3xs text-slate-500 max-w-xl mx-auto">
            Translational Bioinformatics Research & Assay-Based Molecular Stratification Methods.
          </p>
        </div>
      </footer>
    </div>
  );
}
