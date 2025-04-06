'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import SVG components
const TwitterIcon = dynamic(() => import('./icons/TwitterIcon'), { ssr: false });
const LinkedInIcon = dynamic(() => import('./icons/LinkedInIcon'), { ssr: false });
const GitHubIcon = dynamic(() => import('./icons/GitHubIcon'), { ssr: false });
const ResumeIcon = dynamic(() => import('./icons/ResumeIcon'), { ssr: false });

const SidebarLayout = () => {
  const projects = [
    {
      title: "Gamified Natural Language To-do List",
      description: "Used LLM's to process natural language to create tasks, assigning custom exp values for a gamified to-do list.",
      category: "SOFTWARE",
      link: "https://github.com/sid-chava/exp-task-tracker"
    },
    {
      title: "LinkedIn Scraper/Parser/Outreach Tool",
      description: "Integrated company data sources, used LLM for lead evaluation, and gmail api for end to end outreach automation.",
      category: "SOFTWARE",
      link: "https://sidchava.me"
    },
    {
      title: "Daily Market Update",
      description: "Set up a daily script to pull newsletters, turn them into vector embeddings, and used LLM's to summarize a daily market outlook including live data from Tiingo API.",
      category: "SOFTWARE",
      link: "https://nonewsletters.streamlit.app"
    },
    {
      title: "QRNG ML Classification",
      description: "Used ML to prove that quantum random numbers can be detected from classical random numbers based on error signatures. Used Qiskit and IBM hardware to design and run quantum circuits.",
      category: "SOFTWARE",
      link: "https://github.com/dorahacksglobal/qc-classifier/tree/main"
    },
    {
      title: "Citi Bike ETL Pipeline",
      description: "Scraped Citi Bike data, cleaned and transformed it, and loaded it into a database to be used for analytics and visualization.",
      category: "SOFTWARE",
      link: "https://github.com/sid-chava/CitibikeETL"
    },
    {
      title: "Consensys Mesh Token Analytics Script",
      description: "A fully automated daily token script that provided analtics and tracking for the 50mm token portfolio of Consensys Mesh.",
      category: "SOFTWARE",
      link: "https://sidchava.me"
    },
    {
      title: "Premier League Match Prediction",
      description: "Using historical data to predict the outcome of Premier League matches. Also seeing if we can cluster teams around specific playstile types.",
      category: "SOFTWARE",
      link: "https://github.com/sid-chava/PAOffensiveClustering"
    },
    {
      title: "Classification of Quantum Errors",
      description: "Wrote a report to summarize the findings from our ML classification of quantum random numbers.",
      category: "RESEARCH",
      link: "https://research.dorahacks.io/2024/09/06/ai-inspired-quantum-computer-classifier/"
    },
    {
      title: "Quantum PDE Solvers",
      description: "An overview of current research on approximating partial differential equations using quantum computers.",
      category: "RESEARCH",
      link: "https://drive.google.com/file/d/1cGL-BEQ6bTkP-KVf9PxzqcUnx9fyE-5E/view?usp=sharing"
    },
    {
      title: "Commons Pitch Deck",
      description: "A pitch deck on Commons, a carbon tracking app, presented to judges from Sequoia, General Atlantic, and more. Tied for third at NYUVC.",
      category: "SOURCING",
      link: "https://drive.google.com/file/d/1X5RSGJNZb3TzG0pLAweenjVGqPWAs8pd/view?usp=sharing"
    },
    {
      title: "Hathora Investement Memo",
      description: "A comprehensive analysis of Hathora's market position, business model, and investment potential.",
      category: "SOURCING",
      link: "https://strategic-venture-society.notion.site/Hathora-Investment-Memorandum-1dd8554d3a5946efbdc892dd3ffc12c8?pvs=4"
    },
    {
      title: "Modular and Shared Living Pitch",
      description: "An analysis of the Modular and Shared Living industries complete with investment guidelines",
      category: "SOURCING",
      link: "https://drive.google.com/drive/folders/1KE6wivXtY8bUUX1yL4JFk7-1-7Bwrc6q?dmr=1&ec=wgc-drive-hero-goto"
    },
    {
      title: "Preset Pitch Deck",
      description: "A pitch deck on Preset, an cloud layer built on top of the popular open source data visualization software, Apache Superset.",
      category: "SOURCING",
      link: "https://drive.google.com/file/d/1SjBsyrED4umpRKRUCbY4KxM3xjiTn--f/view?usp=drive_link"
    },

    {
      title: "AI/ML Infrastructure Deep Dive",
      description: "An in-depth look at AI and machine learning infrastructure, covering current trends, challenges, and future directions.",
      category: "RESEARCH",
      link: "https://strategic-venture-society.notion.site/SVS-AI-ML-Memo-be4074b618594fe1b85df5cff7f918e7"
    },
    {
      title: "Mobileye IPO Analysis",
      description: "An analysis of Mobileyes business, technology, outlook and recommendations on its 2022 IPO.",
      category: "RESEARCH",
      link: "https://drive.google.com/file/d/1S_PoDL4pP_6Zc9a0yH28J-0BqMHc4Cds/view?usp=sharing"

    },
    {
      title: "Sports Gambling Industry Report",
      description: "A in-depth analysis of the global sports gambling and betting industry.",
      category: "RESEARCH",
      link: "https://drive.google.com/file/d/1H9nE1qEXelAPM-AG6_pEYww80BANB0E9/view?usp=drive_link"
    }
    
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-y-auto">
      {/* Sidebar */}
      <div className="w-full md:w-72 fixed h-full border-r border-gray-200 bg-white p-4">
        {/* Profile Section */}
        <div className="mb-4 mt-2">
          <h2 className="text-sm text-black font-medium mb-1">Sid</h2>
          <p className="text-xs text-gray-600">
            I am a research engineer dedicated to designing creative and intelligent systems.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 mb-4 text-gray-600">
          <a href="https://twitter.com/sid_chava" 
             className="hover:text-black transition-colors"
             rel="noopener"
             loading="lazy">
            <TwitterIcon className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/sid-chava" 
             className="hover:text-black transition-colors"
             rel="noopener"
             loading="lazy">
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a href="https://github.com/sid-chava" 
             className="hover:text-black transition-colors"
             rel="noopener"
             loading="lazy">
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a href="https://drive.google.com/file/d/11uVbe2aGkRZMookJZthh0ebrDW4T6XVA/view?usp=drive_link" 
             className="hover:text-black transition-colors"
             rel="noopener"
             loading="lazy">
            <ResumeIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Navigation Categories */}
        <nav className="space-y-3">
          {/* Software Section */}
          <div>
            <p className="text-xs text-gray-400 mb-1">Software</p>
            <ul className="space-y-0.5">
              {projects
                .filter(project => project.category.includes('SOFTWARE'))
                .map((project) => (
                  <li key={project.title}>
                    {project.link ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-600 hover:text-black transition-all duration-200 opacity-60 hover:opacity-100 block py-0.5 truncate"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span className="text-xs text-gray-600 block py-0.5 truncate opacity-60">
                        {project.title}
                      </span>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          {/* Research Section */}
          <div>
            <p className="text-xs text-gray-400 mb-1">Research</p>
            <ul className="space-y-0.5">
              {projects
                .filter(project => project.category.includes('RESEARCH'))
                .map((project) => (
                  <li key={project.title}>
                    {project.link ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-600 hover:text-black transition-all duration-200 opacity-60 hover:opacity-100 block py-0.5 truncate"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span className="text-xs text-gray-600 block py-0.5 truncate opacity-60">
                        {project.title}
                      </span>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          {/* Sourcing Section */}
          <div>
            <p className="text-xs text-gray-400 mb-1">Sourcing</p>
            <ul className="space-y-0.5">
              {projects
                .filter(project => project.category === 'SOURCING')
                .map((project) => (
                  <li key={project.title}>
                    {project.link ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-600 hover:text-black transition-all duration-200 opacity-60 hover:opacity-100 block py-0.5 truncate"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span className="text-xs text-gray-600 block py-0.5 truncate opacity-60">
                        {project.title}
                      </span>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Main Content Area - Hidden on mobile */}
      <div className="hidden md:block md:ml-72 flex-1 p-12 overflow-y-auto">
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <div key={index} className="flex flex-col">
      {project.link ? (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity"
        >
          <div className="mb-2">
            <div className="text-xs text-gray-500 mb-1">{project.category}</div>
            <h2 className="text-xl font-normal text-black mb-2">{project.title}</h2>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            {project.description}
          </p>
        </a>
      ) : (
        <>
          <div className="mb-2">
            <div className="text-xs text-gray-500 mb-1">{project.category}</div>
            <h2 className="text-xl font-normal text-black mb-2">{project.title}</h2>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            {project.description}
          </p>
        </>
      )}
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default SidebarLayout;