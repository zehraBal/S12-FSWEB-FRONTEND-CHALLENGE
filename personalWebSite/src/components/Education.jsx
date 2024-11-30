import { motion } from "framer-motion";

const Education = ({ edu }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h3 className="text-2xl font-semibold mb-4 text-violet-700 dark:text-violet-400">
        Education
      </h3>
      <div className="space-y-4">
        {edu.map((item, index) => (
          <div key={index}>
            <h4 className="font-bold dark:text-violet-300">{item.title}</h4>
            <p className="dark:text-violet-200">{item.institution}</p>
            <p className="text-sm text-gray-500 dark:text-violet-100">
              {item.startDate} - {item.endDate}
            </p>
            <p className="text-gray-600 dark:text-violet-50">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
