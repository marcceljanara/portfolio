// About Component
const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js',
    'Node.js', 'Express', 'HTML & CSS', 'Tailwind CSS',
    'Git', 'REST APIs', 'GraphQL', 'MongoDB'
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
                Hello! I'm John, a software engineer based in San Francisco, CA. I enjoy creating 
                things that live on the internet, whether that be websites, applications, or anything 
                in between. My goal is to always build products that provide pixel-perfect, performant 
                experiences.
              </p>
              <p>
                Shortly after graduating from University of California, I joined the engineering team 
                at a tech startup where I work on a wide variety of interesting and meaningful projects 
                on a daily basis.
              </p>
              <p>
                I also recently launched a course that covers everything you need to build a web app 
                with the Spotify API using Node & React.
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
                  <div className="text-6xl mb-2">👨‍💻</div>
                  <p className="text-sm">Your Photo Here</p>
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
