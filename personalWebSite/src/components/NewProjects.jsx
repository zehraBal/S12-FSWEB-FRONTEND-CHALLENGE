import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  frontendProjectsSelector,
  backendProjectsSelector,
  languageSelector,
} from "../store/selectors/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// Individual Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-[#2C2C2C] 
        rounded-xl shadow-lg overflow-hidden 
        transform transition-all duration-300 
        hover:shadow-xl"
    >
      <div className="p-6">
        <ProjectHeader project={project} />
        <ProjectDescription project={project} />
        <ProjectTechnologies technologies={project.used} />
        <ProjectLinks project={project} />
      </div>
    </motion.div>
  );
};

// Sub-components for ProjectCard
const ProjectHeader = ({ project }) => (
  <div className="flex items-center mb-4">
    <h3 className="text-xl font-semibold text-violet-800 dark:text-gray-200">
      {project.title}
    </h3>
  </div>
);

const ProjectDescription = ({ project }) => (
  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
);

const ProjectTechnologies = ({ technologies }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {technologies.map((tech, techIndex) => (
      <span
        key={techIndex}
        className="bg-violet-100 dark:bg-gray-700 
          text-violet-800 dark:text-violet-300 
          px-3 py-1 rounded-full text-xs"
      >
        {tech}
      </span>
    ))}
  </div>
);

const ProjectLinks = ({ project }) => (
  <div className="flex space-x-4">
    {project.git && (
      <a
        href={project.git}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white dark:text-gray-200 
      bg-violet-600 dark:bg-violet-700 
      px-3 py-2 rounded-full 
      flex items-center gap-2
      hover:bg-violet-700 dark:hover:bg-violet-600 
      transition duration-300"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="pr-1 text-white dark:text-gray-200"
        />
        GitHub
      </a>
    )}
    {project.viewSite && (
      <a
        href={project.viewSite}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white dark:text-gray-200 
      bg-green-600 dark:bg-green-700 
      px-3 py-2 rounded-full 
      flex items-center gap-2
      hover:bg-green-700 dark:hover:bg-green-600 
      transition duration-300"
      >
        <FontAwesomeIcon
          icon={faLink}
          className="pr-1 text-white dark:text-gray-200"
        />
        Live Site
      </a>
    )}
  </div>
);

// Tab Navigation Component
const ProjectTabNavigation = ({ activeTab, onTabChange }) => {
  const tabStyles = (tab) => `
    px-6 py-2 rounded-full transition-all duration-300 
    ${
      activeTab === tab
        ? "bg-violet-500 text-white"
        : "hover:bg-violet-100 dark:hover:bg-gray-700"
    }
  `;

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white dark:bg-[#2C2C2C] rounded-full p-2 flex space-x-2 shadow-lg">
        <button
          onClick={() => onTabChange("frontend")}
          className={tabStyles("frontend")}
        >
          Frontend Projects
        </button>
        <button
          onClick={() => onTabChange("backend")}
          className={tabStyles("backend")}
        >
          Backend Projects
        </button>
      </div>
    </div>
  );
};

// Main Projects Component
const NewProjects = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const frontendProjects = useSelector(frontendProjectsSelector);
  const backendProjects = useSelector(backendProjectsSelector);
  const lang = useSelector(languageSelector);

  const projects = {
    frontend: frontendProjects,
    backend: backendProjects,
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-violet-50 to-violet-100 px-20 flex  flex-wrap max-sm:flex-col
        dark:from-[#1A1A2E] dark:to-[#16213E] py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-violet-800 dark:text-violet-300">
          {lang == "en" ? "My Projects" : "Projeler"}
        </h2>

        <ProjectTabNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects[activeTab].map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewProjects;
