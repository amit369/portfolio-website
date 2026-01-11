const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m <span className="text-blue-400">Amit Chaman</span>
        </h1>

        <h2 className="text-2xl mb-6 text-gray-300">
          Full Stack Developer | Java | MERN
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Backend-focused developer with 8+ years of IT experience.
          Specialized in Java Spring Boot, REST APIs, and MERN stack.
          Currently working as Specialist Officer (Scale II).
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-black"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
