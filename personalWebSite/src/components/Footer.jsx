import { useState } from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

import ContactForm from "./ContactForm";

export default function Footer() {
  const [showForm, setShowForm] = useState(false);

  // Social media links
  const socialLinks = [
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/fatma-zehra-bal/",
      color: "#0A66C2",
    },
    {
      icon: faGithub,
      link: "https://github.com/zehraBal",
      color: "#333",
    },
  ];

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <footer className="w-full bg-[#F9F9F9] dark:bg-[#252128] py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 max-w-3xl flex flex-col items-center text-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer mb-6"
          onClick={handleShowForm}
        >
          <h1
            className="text-5xl font-bold text-[#4731D3] dark:text-[#8F88FF] 
            transition-colors duration-300 hover:text-opacity-80"
          >
            Get in Touch
          </h1>
        </motion.div>

        <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="mailto:fz.bal00@gmail.com"
          className="text-2xl font-medium text-[#4731D3] dark:text-[#8F88FF] 
            underline mb-6 flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          fz.bal00@gmail.com
        </motion.a>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-3xl"
              style={{ color: social.color }}
            >
              <FontAwesomeIcon icon={social.icon} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Zehra Bal. All Rights Reserved.
        </p>
      </motion.div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showForm && (
          <ContactForm handleClose={handleCloseForm} key="contact-form" />
        )}
      </AnimatePresence>
    </footer>
  );
}
