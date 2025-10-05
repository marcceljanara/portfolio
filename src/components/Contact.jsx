// Contact Component
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 bg-slate-900">
      <div className="max-w-2xl text-center">
        <p className="text-cyan-400 font-mono mb-4">04. What's Next?</p>
        <h2 className="text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href="mailto:inengahmarcceljbc@gmail.com" 
          className="inline-block px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-all font-mono"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
