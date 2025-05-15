import { useState } from "react";
import silgoa from "../assets/silgoa-small.png";
import portfolio from "../assets/portfolio-end.png"
import films from "../assets/wyszukiwarka-full.png"

const Projects = () => {
  const [projects] = useState([
    {
      image: silgoa,
      name: "Silgoa",
      description:
        "Strona napisana w czystym kodzie, bez użycia żadnej biblioteki czy frameworku. Strona posiada dedykonay odtwarzacz muzyki.",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      image: films,
      name: "Wyszukiwarka filmów",
      description: "Baza + wyszukiwarka filmów. Strona oparta na React, API - a dokładniej https://www.themoviedb.org/. Możliwość dodania filmów do 'ulubionych'",
      tech: ["React", "API", "JavaScript"]
    },
    {
      image: portfolio,
      name: "Silgoa",
      description: "Moje pierwsze portfolio napisane w React",
      tech: ["React"]
    },
  ]);
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
          Wykonane projekty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900"
            >
              <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap sm:items-center gap-2 mb-4">{project.tech.map((tech, index) => (
                <span key={index} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition">
                    {tech}
                </span>
              ))}
              <div className="flex flex-col text-center my-5 pt-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] cursor-pointer rounded-xl">
                <p className="text-gray-200">Zobacz projekt</p>
                <a href="#" className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"> 
                    <img src={project.image} alt={`zdjęcie ${project.name}`} />
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
