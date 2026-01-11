const skills = [
  "Java",
  "Spring Boot",
  "React",
  "Node.js",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "JWT / OAuth",
  "Git & GitHub",
  "Docker (Basics)"
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 px-4 py-3 rounded-lg text-center font-medium text-gray-700 shadow"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
