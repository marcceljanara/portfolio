// About Component
const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Redis',
    'Node.js', 'Express', 'HTML & CSS', 'RabbitMQ',
    'Git', 'GitHub Action', 'REST APIs', 'PostgreSQL', 'Docker'
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
          <span className="text-cyan-400 font-mono mr-2">01.</span>
          About Me
          <div className="h-px bg-slate-700 flex-1 ml-4"></div>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
          <div className="text-slate-400 space-y-4 leading-relaxed">
            <p>
              Hello! I’m Marccel, a <strong>Backend Software Engineer</strong> and <strong>IoT Specialist</strong> based in Indonesia. 
              I believe reliable backend code should be "boring" it just works, scales, and stays secure. 
              Currently, I serve as an <strong>External Code Reviewer</strong> at Dicoding, where I audit code quality, 
              security (OWASP), and architectural standards for hundreds of student projects monthly.
            </p>
            <p>
              My engineering journey is defined by bridging software with the real world. I spearheaded the R&D of a 
              <strong> patented autonomous Rover Drone</strong> system for smart agriculture, architecting a high-concurrency 
              microservices backend using <strong>Node.js, RabbitMQ, and AWS</strong>. This experience honed my ability to build 
              resilient distributed systems that perform under pressure.
            </p>
            <p>
              I thrive on solving complex architectural challenges from optimizing database queries to deploying secure cloud infrastructure. 
              I’m always open to opportunities where I can engineer production-grade solutions that deliver tangible impact.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
            
            <div className="grid grid-cols-2 gap-2 mt-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center text-slate-400 text-sm">
                  <span className="text-cyan-400 mr-2">▹</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 rounded overflow-hidden">
              <div className="aspect-square bg-slate-700 flex items-center justify-center text-slate-500">
                <div className="text-center">
                  <p className="text-sm">
                    <img src="photo_profile2.jpeg" alt="photo_profile" srcset="" />
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-cyan-400 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
