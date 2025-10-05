// Hero Component
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl">
        <p className="text-cyan-400 mb-4 text-lg font-mono">Hi, my name is</p>
        <h1 className="text-6xl md:text-7xl font-bold text-slate-100 mb-4">
          I Nengah Marccel Janara Brata Cipta
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-400 mb-6">
          I build things for the web.
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-12 leading-relaxed">
            I’m a software engineer passionate about building intelligent, scalable systems that blend technology
             and design seamlessly. Currently, I focus on developing IoT-driven and AI-powered solutions with clean 
             architecture and purposeful user experiences.
        </p>
        <a 
          href="#projects" 
          className="inline-block px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-all font-mono text-sm"
        >
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Hero;
