import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  faUser,
  faGraduationCap,
  faCertificate,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import {
  aboutSelector,
  certSelector,
  eduSelector,
  langSelector,
  languageSelector,
} from "../store/selectors/selectors";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Certificates from "./Certificates";
import Languages from "./Languages";

const NewProfile = () => {
  const [activeSection, setActiveSection] = useState("about");
  const language = useSelector(languageSelector);
  const aboutMe = useSelector(aboutSelector);
  const edu = useSelector(eduSelector);
  const langs = useSelector(langSelector);
  const cert = useSelector(certSelector);

  const navItems = [
    {
      id: "about",
      icon: faUser,
      label: "About Me",
    },
    {
      id: "education",
      icon: faGraduationCap,
      label: "Education",
    },
    {
      id: "certificates",
      icon: faCertificate,
      label: "Certificates",
    },
    {
      id: "languages",
      icon: faLanguage,
      label: "Languages",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutMe aboutMe={aboutMe} />;
      case "education":
        return <Education edu={edu} />;
      case "certificates":
        return <Certificates cert={cert} />;
      case "languages":
        return <Languages langs={langs} />;
      default:
        return null;
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-violet-50 to-violet-100 
       dark:from-[#1A1A2E] dark:to-[#16213E] py-16 px-20 max-md:px-0"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-14
            text-violet-700 dark:text-violet-400"
      >
        {language === "en" ? "Profile" : "Profil"}
      </motion.h2>
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row bg-white dark:bg-[#1A1A1A] 
          rounded-xl shadow-lg overflow-hidden"
        >
          {/* Navigation Sidebar */}
          <div
            className="w-full md:w-1/4 bg-violet-100 dark:bg-[#2C2C2C] 
            border-r border-violet-200 dark:border-gray-700 max-md:flex max-md:justify-center max-md:items-center"
          >
            <nav className="flex md:flex-col p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center p-3 m-1 rounded-lg transition-all 
                    ${
                      activeSection === item.id
                        ? "bg-violet-600 text-white"
                        : "hover:bg-violet-300 dark:hover:bg-[#3A3A3A] text-gray-800 dark:text-gray-200"
                    }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-3 w-5 h-5" />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="w-full md:w-3/4">{renderContent()}</div>
        </div>
      </div>
    </motion.section>
  );
};

export default NewProfile;
