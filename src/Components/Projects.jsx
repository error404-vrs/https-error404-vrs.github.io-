import { motion } from "framer-motion";
import Project from "./Project";

const PROJECTS = [
  {
    image: "./src/assets/pizza.png",
    name: "Pizza API",
    languages: "HTML CSS JS",
    githubPage: "https://github.com/error404-vrs/pizza-evaluation-api",
    githubCode:
      "https://github.com/error404-vrs/pizza-evaluation-api/blob/main/index.html",
  },
  {
    image: "./src/assets/countriesapi.png",
    name: "Countries API",
    languages: "HTML CSS JS",
    githubPage: "https://github.com/error404-vrs/Countries-API",
    githubCode:
      "https://github.com/error404-vrs/Countries-API/blob/main/index.html",
  },
];

function Projects() {
  return (
    <div className="w-[97%] mr-auto ml-auto p-8 rounded-sm shadow-2xl bg-gradient-to-br font-bold mb-4 from-gray-900 via-gray-800 to-gray-900">
      <h2 className="text-4xl text-center mb-12 font-extrabold uppercase tracking-wider">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-16 gap-x-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 bg-opacity-90 rounded-3xl shadow-lg p-6 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 60,
            }}
            whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}
          >
            <Project
              image={project.image}
              name={project.name}
              languages={project.languages}
              githubPage={project.githubPage}
              githubCode={project.githubCode}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
