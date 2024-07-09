import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectContent from "./ProjectContent";

export default function Projects() {
  return (
    <div className="w-screen h-screen bg-[#CBF281] flex flex-col items-center justify-around ">
      <div className="w-[960px] text-left">
        <h1 className="text-[#4731D3] font-bold text-[48px] leadindg-[58.09px]">
          Projects
        </h1>
      </div>
      <ProjectContent />
    </div>
  );
}
