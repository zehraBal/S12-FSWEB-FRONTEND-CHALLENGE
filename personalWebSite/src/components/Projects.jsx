import ProjectContent from "./ProjectContent";
import { useSelector } from "react-redux";
import { projectsSelector } from "../store/selectors/selectors";
import { useEffect, useState } from "react";

export default function Projects() {
  const projectsData = useSelector(projectsSelector);
  const [projectContent, setProjectContent] = useState([]);
  useEffect(() => {
    setProjectContent(projectsData.content);
    console.log(projectContent);
  }, []);
  console.log(projectsData);
  return (
    <div className="w-screen  bg-[#CBF281] flex flex-col items-center py-[44px] gap-4 dark:bg-[#1A210B]">
      <div className="w-[960px] text-left max-md:text-center">
        <h1 className="text-[#4731D3] font-bold text-[48px] leadindg-[48px] dark:text-[#CBF281]">
          {projectsData.title}
        </h1>
      </div>
      <ProjectContent />
    </div>
  );
}
