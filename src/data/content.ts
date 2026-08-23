export const SITE = {
  name: 'Harsh Jha',
  shortName: 'HJ.',
  year: 'CSE / 2ND YEAR',
  title: 'Full Stack & Software Developer',
  location: 'India',
  status: 'Open to Collaborations & Internships',
  email: 'harshhjhha@gmail.com',
  github: 'https://github.com/Hix-001',
  linkedin: 'https://www.linkedin.com/in/harsh-developerxy/',
  leetcode: 'https://leetcode.com/u/hixanly/',
  hackerrank: 'https://www.hackerrank.com/profile/harshhjhha',
  x: 'https://x.com/harshjha_dev',
  bio: 'Second-year Computer Science student passionate about systems, web engineering, and problem solving. Building performant applications and exploring modern stacks.',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Contact', href: '#contact' },
] as const

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
] as const

export const socialLinks = [
  { label: 'GitHub', href: SITE.github },
  { label: 'LinkedIn', href: SITE.linkedin },
  { label: 'LeetCode', href: SITE.leetcode },
  { label: 'HackerRank', href: SITE.hackerrank },
  { label: 'Email', href: `mailto:${SITE.email}` },
] as const

export type SkillLevel = 'COMFORTABLE' | 'LEARNING' | 'EXPLORING'
export type SkillCategory = 'Languages' | 'Frontend' | 'Backend & Cloud' | 'Tools & DevOps' | 'Core CS'

export interface SkillItem {
  name: string
  category: SkillCategory
  level: SkillLevel
  icon: string
  description: string
}

export const skills: SkillItem[] = [
  { name: 'C++', category: 'Languages', level: 'COMFORTABLE', icon: 'cpp', description: 'STL, OOPs, Data Structures & Algorithm Design' },
  { name: 'Python', category: 'Languages', level: 'COMFORTABLE', icon: 'python', description: 'Automation, Scripting, CLI utilities & Data Logic' },
  { name: 'JavaScript (ES6+)', category: 'Languages', level: 'COMFORTABLE', icon: 'js', description: 'Async/Await, DOM, Modern Web APIs & Functional JS' },
  { name: 'TypeScript', category: 'Languages', level: 'COMFORTABLE', icon: 'ts', description: 'Static typing, Generics, interfaces & strict configs' },
  
  { name: 'React 19', category: 'Frontend', level: 'COMFORTABLE', icon: 'react', description: 'Hooks, Custom Hooks, State Architecture & Component Patterns' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'COMFORTABLE', icon: 'tailwind', description: 'Modern responsive UI design, utility-first layout & custom themes' },
  { name: 'HTML5 & Semantic Web', category: 'Frontend', level: 'COMFORTABLE', icon: 'html', description: 'Accessible markup, SEO meta & document structure' },
  { name: 'CSS3 & Motion', category: 'Frontend', level: 'COMFORTABLE', icon: 'css', description: 'Animations, Flexbox/Grid, Glassmorphism & responsive viewports' },

  { name: 'Node.js & Express', category: 'Backend & Cloud', level: 'LEARNING', icon: 'node', description: 'RESTful API architecture, middlewares & backend routing' },
  { name: 'REST APIs', category: 'Backend & Cloud', level: 'LEARNING', icon: 'api', description: 'API contract design, authentication tokens & integration' },
  { name: 'MongoDB / SQL', category: 'Backend & Cloud', level: 'EXPLORING', icon: 'db', description: 'Relational & Document schemas, queries, indexing' },

  { name: 'Git & Version Control', category: 'Tools & DevOps', level: 'COMFORTABLE', icon: 'git', description: 'Branching, PRs, merge workflows & interactive rebase' },
  { name: 'GitHub Ecosystem', category: 'Tools & DevOps', level: 'COMFORTABLE', icon: 'github', description: 'Actions, Releases, Open Source management' },
  { name: 'VS Code & Tooling', category: 'Tools & DevOps', level: 'COMFORTABLE', icon: 'vscode', description: 'Extensions, debugging profiles, shortcuts & linters' },
  { name: 'Figma UI/UX', category: 'Tools & DevOps', level: 'LEARNING', icon: 'figma', description: 'Wireframing, modern typography & design system tokens' },

  { name: 'Data Structures & Algorithms', category: 'Core CS', level: 'LEARNING', icon: 'design', description: 'Arrays, Trees, Graphs, Dynamic Programming & Complexity' },
  { name: 'System Design Basics', category: 'Core CS', level: 'LEARNING', icon: 'design', description: 'Client-server architecture, caching, load balancing & scalability' },
  { name: 'Operating Systems & DBMS', category: 'Core CS', level: 'LEARNING', icon: 'node', description: 'Memory management, processes, concurrency & ACID principles' },
]

export interface FocusAreaItem {
  id: string
  title: string
  subtitle: string
  description: string
  keyTopics: string[]
  relatedProjects: string[]
  status: 'Actively Building' | 'Deep Diving' | 'Researching'
}

export const exploring: FocusAreaItem[] = [
  {
    id: '01',
    title: 'Advanced Data Structures & Graph Algorithms',
    subtitle: 'Shortest paths, MSTs, Disjoint Sets & Dynamic Programming',
    description:
      'Mastering non-linear data structures, complex graph traversal strategies (Dijkstra, Bellman-Ford, Tarjan, A*), and dynamic programming memoization models for optimal time complexity.',
    keyTopics: ['Graph Theory & Shortest Path', 'Segment Trees & Fenwick Trees', 'Dynamic Programming Patterns', 'Disjoint Set Union (DSU)'],
    relatedProjects: ['AlgoPulse Visualizer', 'LeetCode Problem Sets'],
    status: 'Actively Building',
  },
  {
    id: '02',
    title: 'Full-Stack Architecture & Microservices',
    subtitle: 'Scalable RESTful APIs, JWT Auth & Component Modeling',
    description:
      'Designing clean, modular full-stack architectures with React 19, TypeScript, Node.js, Express, and modern database caching strategies.',
    keyTopics: ['REST API Contract Design', 'JWT & Secure Sessions', 'Database Schema Modeling', 'Serverless Functions'],
    relatedProjects: ['DevVault Hub', 'AlgoPulse Backend'],
    status: 'Actively Building',
  },
  {
    id: '03',
    title: 'Real-time WebSockets & Distributed Systems',
    subtitle: 'Event-driven pub/sub communication & state sync',
    description:
      'Exploring bidirectional event loops, WebSockets, conflict-free replicated data types, and horizontal server clustering for real-time collaboration.',
    keyTopics: ['WebSocket Protocols & Handshakes', 'Pub/Sub Architecture', 'Event-Driven Microservices', 'Data Consistency Models'],
    relatedProjects: ['Real-time Code Playground', 'Interactive Collaboration Engine'],
    status: 'Deep Diving',
  },
  {
    id: '04',
    title: 'Open Source Software Contributions',
    subtitle: 'Code reviews, issue triaging & community tooling',
    description:
      'Contributing to modern developer tools, fixing issues in open source packages, authoring thorough documentation, and learning public engineering standards.',
    keyTopics: ['Git Rebase & Branching Strategies', 'PR Workflows & Issue Triaging', 'Writing Modular Test Suites', 'Documentation & RFCs'],
    relatedProjects: ['GitHub Repositories (@Hix-001)', 'Developer Utilities'],
    status: 'Actively Building',
  },
  {
    id: '05',
    title: 'Cloud Infrastructure & CI/CD Pipelines',
    subtitle: 'GitHub Actions, automated builds & deployment',
    description:
      'Automating build test suites, linting workflows, and zero-downtime deployment pipelines using GitHub Actions, Docker, and edge hosting networks.',
    keyTopics: ['GitHub Actions Workflows', 'Containerization Basics', 'Edge Hosting & CDN Caching', 'Static Site Optimization'],
    relatedProjects: ['Automated Deployments', 'Portfolio CI Pipeline'],
    status: 'Researching',
  },
  {
    id: '06',
    title: 'Modern Developer Tooling & CLI Utilities',
    subtitle: 'Fast terminal tools, AST parsing & scripting',
    description:
      'Building performant command-line interfaces in Python and C++ that speed up daily developer workflows, analyze repositories, and automate routine tasks.',
    keyTopics: ['Terminal TUI / Rich Layouts', 'Subprocess & Shell Interop', 'AST Inspection & Token Parsing', 'Lightweight Binary Distribution'],
    relatedProjects: ['GitTrace CLI', 'ByteCraft OS Simulator'],
    status: 'Deep Diving',
  },
]

export const marqueeItems = [
  'C++',
  'PYTHON',
  'REACT 19',
  'TYPESCRIPT',
  'TAILWIND CSS',
  'NODE.JS',
  'DATA STRUCTURES',
  'ALGORITHMS',
  'GIT & GITHUB',
  'SYSTEM DESIGN BASICS',
  'PROBLEM SOLVING',
]

export interface ProjectItem {
  id: string
  featured?: boolean
  name: string
  subtitle: string
  description: string
  tags: string[]
  live: string
  github: string
  category: 'Full Stack' | 'Frontend' | 'Systems & CLI' | 'Algorithms'
  preview: 'dashboard' | 'browser' | 'code' | 'terminal'
  highlights: string[]
}

export const projects: ProjectItem[] = [
  {
    id: '01',
    featured: true,
    name: 'AlgoPulse',
    subtitle: 'Interactive Algorithm & Data Structure Visualizer',
    description:
      'A visual workbench to step through sorting algorithms, pathfinding graph traversals (Dijkstra, A*), and dynamic tree structures in real time with step-by-step execution metrics.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Algorithms', 'Web Audio API'],
    live: 'https://github.com/Hix-001/algopulse',
    github: 'https://github.com/Hix-001/algopulse',
    category: 'Algorithms',
    preview: 'dashboard',
    highlights: ['Step-by-step visual playback', 'Custom array & node graph generator', 'Time/Space complexity telemetry'],
  },
  {
    id: '02',
    featured: false,
    name: 'DevVault Hub',
    subtitle: 'Developer Snippet & Productivity Command Center',
    description:
      'An offline-first markdown snippet organizer with tag filtering, instant search, syntax highlighting, and keyboard shortcuts designed for engineers.',
    tags: ['React', 'TypeScript', 'IndexedDB', 'Tailwind CSS'],
    live: 'https://github.com/Hix-001/devvault-hub',
    github: 'https://github.com/Hix-001/devvault-hub',
    category: 'Full Stack',
    preview: 'browser',
    highlights: ['Instant Cmd+K fuzzy searching', 'Export to Gist / Markdown', 'Custom theme presets'],
  },
  {
    id: '03',
    featured: false,
    name: 'GitTrace CLI',
    subtitle: 'Interactive Terminal Commit & Branch Visualizer',
    description:
      'A lightweight command-line tool built in Python and C++ to inspect git commit trees, author analytics, and branch history in clean, styled terminal ASCII graphs.',
    tags: ['Python', 'C++', 'CLI', 'Git API', 'Rich'],
    live: 'https://github.com/Hix-001/gittrace-cli',
    github: 'https://github.com/Hix-001/gittrace-cli',
    category: 'Systems & CLI',
    preview: 'terminal',
    highlights: ['ASCII DAG branch visualization', 'Contributor churn metrics', 'Zero external heavy dependencies'],
  },
  {
    id: '04',
    featured: false,
    name: 'ByteCraft OS Simulator',
    subtitle: 'CPU Scheduling & Memory Allocation Playground',
    description:
      'Educational interactive web simulator demonstrating CPU scheduling algorithms (Round Robin, SJF, Priority) and virtual memory paging models with visual timelines.',
    tags: ['JavaScript', 'Canvas API', 'CSS Grid', 'OS Fundamentals'],
    live: 'https://github.com/Hix-001/bytecraft-os-sim',
    github: 'https://github.com/Hix-001/bytecraft-os-sim',
    category: 'Frontend',
    preview: 'code',
    highlights: ['Interactive Gantt chart renderer', 'Turnaround / Waiting time comparison', 'Configurable time quantum & burst rates'],
  },
]

export const timeline = [
  {
    stage: '01',
    title: 'FOUNDATIONS & EXPLORATION',
    timeframe: 'Semester 1 - 2',
    description: 'Mastered programming fundamentals in C++ and Python, basic problem solving, and object-oriented paradigms.',
    items: ['C++ & Object Oriented Programming', 'Basic Data Structures & LeetCode Foundations', 'Git version control basics and GitHub workflows'],
  },
  {
    stage: '02',
    title: 'BUILDING & MODERN WEB TECH',
    timeframe: 'Semester 3 - Present',
    description: 'Diving deep into modern web engineering with React, TypeScript, Tailwind CSS, and full-stack API patterns.',
    items: ['Modern React 19 architecture & custom hooks', 'TypeScript strict mode & interface modeling', 'Frontend state management & responsive UI design'],
  },
  {
    stage: '03',
    title: 'SYSTEMS & ADVANCED CS',
    timeframe: 'In Progress',
    description: 'Strengthening core computer science pillars including Database Management, Operating Systems, and System Design.',
    items: ['Graph algorithms & dynamic programming patterns', 'Relational database modeling & query optimization', 'Networking protocols & API security fundamentals'],
  },
  {
    stage: '04',
    title: 'HORIZONS & CONTRIBUTIONS',
    timeframe: 'Upcoming Target',
    description: 'Aiming for impactful software engineering internships, large-scale production contributions, and open-source impact.',
    items: ['Open source contributions to major developer tools', 'High-impact software engineering internships', 'Building scalable distributed systems projects'],
  },
]

export const highlights = [
  {
    label: 'PROBLEM SOLVING',
    value: '250+',
    unit: 'Problems Solved',
    text: 'Actively solving Data Structures & Algorithms challenges on LeetCode and HackerRank.',
  },
  {
    label: 'PROJECTS BUILT',
    value: '10+',
    unit: 'Repositories',
    text: 'Building full-stack web applications, CLI utilities, and CS simulation sandboxes.',
  },
  {
    label: 'CONTINUOUS LEARNING',
    value: 'Year 2',
    unit: 'B.Tech CSE',
    text: 'Strong academic grounding in Operating Systems, DBMS, Computer Networks & OOP.',
  },
  {
    label: 'OPEN COLLABORATION',
    value: '100%',
    unit: 'Public Code',
    text: 'Learning in public, documenting architectural decisions, and sharing reusable tools.',
  },
]

export const terminalCommands: Record<string, string | string[]> = {
  help: [
    'Available commands:',
    '  about       - Overview of Harsh Jha',
    '  skills      - List core tech stack & competencies',
    '  projects    - View featured engineering projects',
    '  contact     - Display email, socials, and connection endpoints',
    '  socials     - Direct links to GitHub, LinkedIn, LeetCode, X',
    '  stats       - Quick summary stats & metrics',
    '  whoami      - Current user context',
    '  clear       - Clear the terminal screen',
  ],
  about: [
    'Harsh Jha — 2nd Year Computer Science & Engineering Student',
    'Location: India',
    'Focus: Software Development, Full-Stack Web & Systems',
    'Passionate about writing clean code, architecting performant interfaces, and mastering algorithms.',
  ],
  skills: [
    'Languages:       C++, Python, JavaScript (ES6+), TypeScript',
    'Frontend:        React 19, Tailwind CSS, HTML5, CSS3, Responsive Design',
    'Backend & DB:    Node.js, Express, REST APIs, MongoDB, SQL Basics',
    'Tools & CS:      Git, GitHub, VS Code, Figma, Data Structures & Algorithms',
  ],
  projects: [
    '1. AlgoPulse       - Interactive Algorithm & Graph Visualizer',
    '2. DevVault Hub    - Developer Snippet & Productivity Command Center',
    '3. GitTrace CLI    - Terminal ASCII Commit & Branch Visualizer',
    '4. ByteCraft OS    - CPU Scheduling & Memory Allocation Simulator',
    'Type "projects" in navigation or scroll to #projects for live demos.',
  ],
  contact: [
    'Email:     harshhjhha@gmail.com',
    'GitHub:    https://github.com/Hix-001',
    'LinkedIn:  https://www.linkedin.com/in/harsh-developerxy/',
    'LeetCode:  https://leetcode.com/u/hixanly/',
    'Status:    Open for software engineering opportunities & collaborations!',
  ],
  socials: [
    'GitHub:     https://github.com/Hix-001',
    'LinkedIn:   https://www.linkedin.com/in/harsh-developerxy/',
    'LeetCode:   https://leetcode.com/u/hixanly/',
    'HackerRank: https://www.hackerrank.com/profile/harshhjhha',
  ],
  stats: [
    'Academic Year:   2nd Year CSE',
    'Coding Streak:   Active on LeetCode & GitHub',
    'Projects Built:  10+ repositories',
    'Status:          Available for Summer Internships & Dev Roles',
  ],
  whoami: [
    'visitor@harshjha.in - Welcome to Harsh\'s interactive portfolio workspace!',
  ],
}
