export const Projecs = () => {
  return (
    <section
      id="projetos"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent text-center">
          Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition">
            <h3 className="text-xl font-bold mb-2"> Cloud Platform</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              illum laudantium, unde quo esse sunt quis facilis maxime, dolorum
              iusto alias debitis veritatis quasi, laborum quos modi nisi
              pariatur culpa.
            </p>
            <div>
              {["React", "Node.js", "AWS", "Docker"].map((tech, key) => {
                <span
                  key={key}
                  className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
