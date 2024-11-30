import { motion } from "framer-motion";

const Languages = ({ langs }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h3 className="text-2xl font-semibold mb-4 text-violet-700 dark:text-violet-400">
        Languages
      </h3>
      <div className="space-y-4">
        {langs.map((language, index) => (
          <div key={index}>
            <h4 className="font-bold dark:text-violet-300">
              {language.language}
            </h4>
            <p className="dark:text-violet-50">{language.level}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Languages;
