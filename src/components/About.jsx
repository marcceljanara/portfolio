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
                Hello! I’m Marccel, a software engineer based in Indonesia who loves building smart,
                connected systems — from IoT platforms to modern web applications. I specialize in backend development 
                using Node.js and Express.js, designing scalable APIs and robust data architectures that power seamless, real-world experiences.
              </p>
              <p>
                Shortly after graduating from University of Lampung, I continued developing my research project
                on IoT-based rover systems for smart agriculture, focusing on real-time monitoring,
                two-way communication, and AI-driven data processing. This experience deepened my passion for 
                building intelligent backend architectures and scalable connected systems.
              </p>
              <p>
                I’m also open to collaborations and new opportunities to build innovative,
                impactful projects that combine technology, intelligence, and great design.
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
                    <img src="photo_profile.jpg" alt="photo_profile" srcset="" />
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
