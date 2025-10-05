import { useState } from "react";

// Experience Component
const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      company: 'Dicoding Indonesia',
      position: 'External Code Reviewer',
      period: 'Mar 2025 - Present',
      responsibilities: [
        'Review and provide feedback on code submissions from students',
        'Suggest improvements and best practices for coding standards',
        'Collaborate with other reviewers to ensure consistency',
        'Help maintain the quality of coding projects'
      ],
      technologies: ['Node.js', 'Code Review', 'Postman', 'Feedback']
    },
    {
      company: 'Dicoding Academy',
      position: 'Certified Independent Study Student',
      period: 'Feb 2024 - Jun 2024',
      responsibilities: [
        'Studied and completed various coding modules and projects',
        'Applied learned skills in real-world scenarios',
        'Collaborated with peers and mentors for knowledge sharing',
        'Achieved certification in multiple programming disciplines'
      ],
      technologies: ['JavaScript', 'Node.js', 'CSS', 'HTML', 'Express.js', 'PostgreSQL', 'Postman']
    },
    {
      company: 'Telecommunication Laboratory, Unila',
      position: 'Backend Developer',
      period: 'Feb 2024 - Jan 2025',
      responsibilities: [
        'Developed backend project for competition Lomba Riset Sawit 2024 using Node.js and Express',
        'Developed backend project for PPK Ormawa KOPMA Unila using Node.js and Express',
        'Participated in collaboration meetings and contributed to project planning',
        'Providing lessons and exercises during the practicum period for lab practitioners',
      ],
      technologies: ['Network', 'Node.js', 'Express.js', 'PostgreSQL', 'Github']
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
          <span className="text-cyan-400 font-mono mr-2">02.</span>
          Experience
          <div className="h-px bg-slate-700 flex-1 ml-4"></div>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 text-left whitespace-nowrap border-l-2 transition-all ${
                  activeTab === index
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-slate-700 text-slate-400 hover:bg-slate-800'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-100 mb-1">
              {experiences[activeTab].position}
              <span className="text-cyan-400"> @ {experiences[activeTab].company}</span>
            </h3>
            <p className="text-slate-400 font-mono text-sm mb-6">
              {experiences[activeTab].period}
            </p>
            
            <ul className="space-y-4">
              {experiences[activeTab].responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start text-slate-400">
                  <span className="text-cyan-400 mr-3 mt-1">▹</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {experiences[activeTab].technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
