import React from 'react';

const SidebarLayout = () => {
  const projects = [
    {
      title: "QRNG ML Classification",
      description: "Used ML to prove that quantum random numbers can be detected from classical random numbers based on error signatures. Used Qiskit and IBM hardware to design and run quantum circuits.",
      category: "SOFTWARE+RESEARCH"
    },
    {
      title: "Citi Bike ETL Pipeline",
      description: "Scraped Citi Bike data, cleaned and transformed it, and loaded it into a database to be used for analytics and visualization.",
      category: "SOFTWARE"
    },
    {
      title: "Consensys Mesh Token Analytics Script",
      description: "A fully automated daily token script that provided analtics and tracking for the 50mm token portfolio of Consensys Mesh.",
      category: "SOFTWARE"
    },
    {
      title: "Premier League Match Prediction",
      description: "[In Progress] Using historical data to predict the outcome of Premier League matches. Also seeing if we can cluster teams around specific playstile types.",
      category: "SOFTWARE"
    },
    {
      title: "Classification of Quantum Errors",
      description: "Wrote a report to summarize the findings from our ML classification of quantum random numbers.",
      category: "RESEARCH"
    },
    {
      title: "Quantum PDE Solvers",
      description: "An overview of current research on approximating partial differential equations using quantum computers.",
      category: "RESEARCH"
    },
    {
      title: "Commons Pitch Deck",
      description: "A pitch deck on Commons, a carbon tracking app, presented to judges from Sequoia, General Atlantic, and more. Tied for third at NYUVC.",
      category: "SOURCING"
    },
    {
      title: "Preset Pitch Deck",
      description: "A pitch deck on Preset, a cloud layer for Apache Superset, the popular open source BI tool.",
      category: "SOURCING"
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 fixed h-full border-r border-gray-200 bg-white p-4">
        {/* Profile Section */}
        <div className="mb-4 mt-2">
          <h2 className="text-sm text-black font-medium mb-1">Sid</h2>
          <p className="text-xs text-gray-600">
            I am a research engineer dedicated to desiging creative and intelligent systems.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 mb-4 text-gray-600">
          <a href="https://twitter.com" className="hover:text-black transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.67365L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0555L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.1931L10.8574 12.2218L5.31391 4.16582H7.70053L12.1742 10.6218L12.8709 11.5931L18.6861 19.9906H16.2995L11.5541 13.1934V13.1931Z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" className="hover:text-black transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>
          <a href="https://github.com" className="hover:text-black transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="/resume.pdf" className="hover:text-black transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>

        {/* Navigation Categories */}
        <nav className="space-y-3">
          {/* Software Section */}
          <div>
            <p className="text-xs text-gray-400 mb-1">Software</p>
            <ul className="space-y-0.5">
              {[
                'QRNG ML Classification',
                'Citi Bike ETL Pipeline',
                'Consensys Mesh Token Analytics Script',
                'Premier League Match Prediction'
              ].map((item) => (
                <li key={item}>
                  <button className="text-xs text-gray-600 hover:text-black transition-all duration-200 opacity-60 hover:opacity-100 w-full text-left py-0.5 truncate">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Section */}
          <div>
            <p className="text-xs text-gray-400 mb-1">Research</p>
            <ul className="space-y-0.5">
              {[
                'Quantum Error Signatures',
                'Quantum PDE Solvers',
                'AI/ML Infrastructure Deep Dive',
                'Mobileye IPO Analysis',
                'Sports Gambling Industry Report'
              ].map((item) => (
                <li key={item}>
                  <button className="text-xs text-gray-600 hover:text-black transition-all duration-200 opacity-60 hover:opacity-100 w-full text-left py-0.5 truncate">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sourcing Section */}
          <div>
            <p className="text-xs text-gray-400 mb-1">Sourcing</p>
            <ul className="space-y-0.5">
              {[
                'Commons Pitch Deck',
                'Preset Pitch Deck',
                'Hathora Investment Memo',
                'Modular and Shared Living Pitch Deck'
              ].map((item) => (
                <li key={item}>
                  <button className="text-xs text-gray-600 hover:text-black transition-all duration-200 opacity-60 hover:opacity-100 w-full text-left py-0.5 truncate">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="ml-72 flex-1 p-12">
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-2">
                <div className="text-xs text-gray-500 mb-1">{project.category}</div>
                <h2 className="text-xl font-normal text-black mb-2">{project.title}</h2>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;