import { motion } from "framer-motion";
import getIcon from "./SkillIcons";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
      className="flex flex-col items-center justify-center 
          p-4 bg-white dark:bg-[#2C2C2C] 
          rounded-lg shadow-md 
          transition-all duration-300 
          hover:shadow-lg"
    >
      <div className="text-5xl mb-3">{getIcon(skill.name, skill.color)}</div>
      <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
        {skill.name}
      </span>
    </motion.div>
  );
};
export default SkillCard;
