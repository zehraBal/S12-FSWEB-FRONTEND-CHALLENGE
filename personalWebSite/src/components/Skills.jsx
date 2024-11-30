import { useSelector } from "react-redux";
import { languageSelector, skillSelector } from "../store/selectors/selectors";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

// Skills Component
export default function Skills() {
  const skillCategories = useSelector(skillSelector);
  const lang = useSelector(languageSelector);

  return (
    <section className="py-16 bg-gray-50 dark:bg-[#1A1A1A]">
      <div className="container px-40 flex flex-col flex-wrap">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-14
            text-violet-700 dark:text-violet-400"
        >
          {lang == "en"
            ? "Skills and Proficiencies"
            : "Beceriler ve Yeterlilikler"}
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3
                className="text-2xl font-semibold mb-6 
                text-center text-[#2C3E50] dark:text-gray-200
                border-b-2 border-violet-200 pb-2"
              >
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
