import React, { useState } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
   
    {
      
  title: "Expense Split",
  description: "Full‑stack MERN expense sharing application that allows users to create groups, add shared expenses, split costs (equal, exact or percentage), track balances and record settlements.",
  tech: ["Node.js", "Express", "MongoDB", "React", "JWT", "Axios", "Render", "Vercel"],
  features: [
    "Secure authentication with JWT based authorization",
    "Create groups and manage members",
    "Supports Equal, Exact and Percentage expense splits",
    "Tracks who owes whom with clear balance summary",
    "Settlement system to clear dues while preserving expense history",
    "Mobile‑responsive UI with user‑friendly workflow"
  ],
  link: "https://equisplit.anandgoyal.online/",
  live: true



    },
     {
      title: "Full Stack Educational Website",
      description: "MERN-based school management system with role-based access for admin, teachers, and students.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Passport.js", "Cloudinary"],
      features: [
        "Secure authentication with role-based route protection",
        "Class and student management modules",
        "Homework posting and fee viewing system",
        "Image handling with Multer and Cloudinary"
      ],
      link: "https://schoolshikha.onrender.com/",
      live: true
    },
    {
      title: "Ride Hailing Platform (Uber Clone)",
      description: "Full-stack ride-hailing platform with real-time location tracking and socket-based communication.",
      tech: ["Socket.IO", "Express.js", "MongoDB", "React.js", "JWT", "LocationIQ API"],
      features: [
        "Real-time ride requests and driver communication",
        "Live location tracking and route mapping",
        "Secure JWT authentication",
        "RESTful API design for user and driver management"
      ],
      link: "https://frontend-uber-ag.onrender.com/",
      live: true
    }
  ];

  const skills = {
    "Languages": ["C++", "Java", "Python", "JavaScript"],
    "Frontend": ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "JWT", "Passport.js", "Socket.IO"],
    "Databases": ["MongoDB", "MySQL", "MongoDB Atlas"],
    "Tools & Cloud": ["Git/GitHub", "Postman", "Render", "Vercel"],
    "DSA": ["1000+ LeetCode Problems", "500-Day Streak"]
  };

  const achievements = [
    { icon: "🏆", title: "LeetCode 500-Day Badge", desc: "Consistent problem-solving for 500+ days" },
    { icon: "🎓", title: "MMVY Scholarship", desc: "Top-10 rank holder continuously from 2021" },
    { icon: "✅", title: "HackerRank Certified", desc: "SQL Intermediate & Basic Certification" },
    { icon: "📄", title: "Research Publication", desc: "Co-author in carbon monoxide research paper" }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AG
          </h1>
          <div className="flex gap-6">
            {['about', 'skills', 'projects', 'achievements'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section ? 'text-purple-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
     <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm mb-4">
                Full Stack Developer
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Anand Goyal
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                B.Tech @ NIT Warangal | MERN Stack Developer | Building scalable web applications with modern technologies
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-4 md:gap-6 mb-8">

                <div className="bg-slate-800/50 px-6 py-3 rounded-lg border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-400">8.08</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>
                <div className="bg-slate-800/50 px-6 py-3 rounded-lg border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-400">1000+</div>
                  <div className="text-sm text-gray-400">LeetCode Problems</div>
                </div>
                <div className="bg-slate-800/50 px-6 py-3 rounded-lg border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-400">500+</div>
                  <div className="text-sm text-gray-400">Day Streak</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="https://github.com/AnandGoyal264" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-slate-800 hover:bg-purple-600 rounded-lg transition-all hover:scale-110 flex items-center justify-center w-12 h-12">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://leetcode.com/u/anandgoyal0810/" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-slate-800 hover:bg-purple-600 rounded-lg transition-all hover:scale-110 flex items-center justify-center w-12 h-12">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                </a>
                <a href="mailto:anandgoyal9171@gmail.com"
                   className="p-3 bg-slate-800 hover:bg-purple-600 rounded-lg transition-all hover:scale-110 flex items-center justify-center w-12 h-12">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/anand-goyal-93136a250/" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-slate-800 hover:bg-purple-600 rounded-lg transition-all hover:scale-110 flex items-center justify-center w-12 h-12">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* LeetCode Card */}
<div className="flex-1 max-w-md">
  <div className="bg-gradient-to-br from-slate-800 to-purple-900/30 p-6 md:p-8 rounded-2xl border border-purple-500/30 shadow-2xl">
    <div className="flex items-center gap-3 mb-6">
      <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
      <h3 className="text-xl md:text-2xl font-bold">LeetCode Profile</h3>
    </div>
    
    {/* LeetCode Stats Image */}
    <div className="mb-6 flex justify-center">
      <img 
        src="https://leetcard.jacoblin.cool/anandgoyal0810?theme=dark&font=Inter&ext=contest" 
        alt="LeetCode Stats"
        className="w-full max-w-sm rounded-lg"
      />
    </div>
    
    <a href="https://leetcode.com/u/anandgoyal0810/" target="_blank" rel="noopener noreferrer"
       className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all">
      View Full Profile
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-14 md:py-20 px-4 md:px-6
 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <span className="text-3xl">💻</span>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <h3 className="text-xl font-bold mb-4 text-purple-300">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-14 md:py-20 px-4 md:px-6
">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <span className="text-3xl">🚀</span>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.live && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                        Live
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5">›</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-14 md:py-20 px-4 md:px-6
bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 text-center hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="font-bold mb-2 text-purple-300">{achievement.title}</h3>
                <p className="text-sm text-gray-400">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-14 md:py-20 px-4 md:px-6
">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <span className="text-3xl">🎓</span>
            Experience
          </h2>
        <div className="bg-slate-800/50 p-5 md:p-8 rounded-xl border border-purple-500/20">

            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">Summer Intern</h3>
                <p className="text-purple-400">IIT Goa</p>
              </div>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                Summer 2024
              </span>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">›</span>
                Extracted gene data from NCBI using Python and analyzed 2000+ gene neighborhoods
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">›</span>
                Identified COG IDs, mapped pathways, and visualized results using pie charts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">›</span>
                Tools: Python, Biopython, NCBI API, Pandas, Matplotlib
              </li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-5 md:p-8 rounded-xl border border-purple-500/20">
          {/* Hackathon Experience */}
<div className="bg-slate-800/50 p-5 md:p-8 rounded-xl border border-purple-500/20 mb-6">
  <div className="flex justify-between items-start mb-4">
    <div>
      <h3 className="text-2xl font-bold">Full Stack Developer (Hackathon)</h3>
      <p className="text-purple-400">Expense Split Web App</p>
    </div>
    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
      2025
    </span>
  </div>

  <ul className="space-y-2 text-gray-300">
    <li className="flex items-start gap-2">
      <span className="text-purple-400 mt-0.5">›</span>
      Built a Splitwise‑like full‑stack MERN application for group expense sharing
    </li>
    <li className="flex items-start gap-2">
      <span className="text-purple-400 mt-0.5">›</span>
      Implemented Equal, Exact & Percentage based expense split logic
    </li>
    <li className="flex items-start gap-2">
      <span className="text-purple-400 mt-0.5">›</span>
      Designed secure authentication, groups, balances and settlement system
    </li>
    <li className="flex items-start gap-2">
      <span className="text-purple-400 mt-0.5">›</span>
      Tech: React, Node.js, Express, MongoDB, JWT, Render, Vercel
    </li>
  </ul>
</div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="py-14 md:py-20 px-4 md:px-6
 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            Open to opportunities and collaborations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:anandgoyal9171@gmail.com"
               className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a href="tel:+919171577518"
               className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold transition-all">
              +91-9171577518
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Anand Goyal</p>
        </div>
      </footer>
    </div>
  );
}