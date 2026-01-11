const projects = [
  {
    title: "Product Admin System",
    description:
      "Admin dashboard to manage products, users, and orders with role-based access.",
    tech: "React, Spring Boot, MongoDB"
  },
  {
    title: "Survey Management System",
    description:
      "Web application for managing surveys, targets, and GIS dashboards.",
    tech: "React, REST APIs, Node.js"
  },
  {
    title: "Authentication Service",
    description:
      "Secure login & signup service using JWT and Spring Security.",
    tech: "Spring Boot, JWT, MySQL"
  }
];

const Project = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-3">
                {project.description}
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Tech:</span> {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
