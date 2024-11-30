import { motion } from "framer-motion";

const AboutMe = ({ aboutMe }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h3 className="text-2xl font-semibold mb-4 text-violet-700 dark:text-violet-400">
        About Me
      </h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {aboutMe}
      </p>
    </motion.div>
  );
};

export default AboutMe;
