const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Contact Me
        </h2>

        <p className="text-gray-700 mb-6">
          Feel free to reach out for job opportunities, collaborations,
          or technical discussions.
        </p>

        <div className="space-y-4 text-gray-700">
          <p>
            📧 Email:{" "}
            <span className="font-medium">amit@example.com</span>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <span className="font-medium">linkedin.com/in/amit-chaman</span>
          </p>
          <p>
            🧑‍💻 GitHub:{" "}
            <span className="font-medium">github.com/amit-chaman</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
