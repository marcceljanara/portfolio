import { useState } from "react";

// Experience Component
const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      company: 'Tech Company',
      position: 'Senior Frontend Engineer',
      period: '2022 - Present',
      responsibilities: [
        'Build and maintain critical components used to construct the company\'s frontend, across the whole product',
        'Work closely with cross-functional teams, including developers, designers, and product managers',
        'Implement and advocate for best practices in web accessibility',
        'Contribute to the development of internal tools and documentation'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Storybook']
    },
    {
      company: 'Digital Agency',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      responsibilities: [
        'Developed and shipped highly interactive web applications for clients',
        'Built reusable code and libraries for future use',
        'Collaborated with designers to implement pixel-perfect UI components',
        'Optimized applications for maximum speed and scalability'
      ],
      technologies: ['JavaScript', 'React', 'SCSS', 'WordPress', 'Node.js']
    },
    {
      company: 'Startup Inc',
      position: 'Junior Developer',
      period: '2019 - 2020',
      responsibilities: [
        'Assisted in the development of client-facing web applications',
        'Wrote modern, performant, maintainable code for diverse projects',
        'Participated in code reviews and learned from senior developers',
        'Contributed to team discussions and sprint planning'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
          <span className="text-cyan-400 font-mono mr-2">02.</span>
          Where I've Worked
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
