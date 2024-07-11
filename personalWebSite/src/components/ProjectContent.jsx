import { useSelector } from "react-redux";
import { projectsSelector } from "../store/selectors/selectors";

export default function ProjectContent() {
  const projectsData = useSelector(projectsSelector);
  const contentData = projectsData.content;

  return (
    <div className="flex flex-col gap-4 ">
      {contentData.map((project, index) => {
        return (
          <div
            key={index}
            className="max-w-[960px] min-h-[360px] rounded-xl flex gap-4 bg-white items-center shadow-custom1 dark:bg-[#2B2727] max-md:flex-col max-md:w-auto max-md:h-auto max-md:pb-5 max-md:justify-center max-md:gap-0"
          >
            <div className="w-[360px] h-[360px] max-md:hidden">
              <img
                className="w-full h-full object-cover rounded-[12px_0px_0px_12px] boreder-r border-[#D2D2D2]"
                src="src/assets/image2.png"
                alt="project"
              />
            </div>
            <div className="max-w-[584px] min-h-[247px] pr-8 text-left flex flex-col justify-between items-start max-md:px-4">
              <div className="w-[520px]">
                {" "}
                <h3 className="font-bold text-[32px] leading-8 text-[#4731D3] dark:text-[#C1BAED]">
                  {project.title}
                </h3>
              </div>
              <div className="max-w-[520px] min-h-[100px] text-justify">
                <p className="font-normal text-base leading-5 dark:text-white">
                  {project.description}
                </p>
              </div>

              <div className=" max-w-[296.14px] flex flex-wrap  gap-4 items-center">
                {project.used.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="w-[68px] h-[31px] rounded-[23px] bg-[#4731D3] p-[8px, 18px, 9px, 18px] text-white text-center dark:bg-[#8173DA]"
                    >
                      {" "}
                      {item}
                    </div>
                  );
                })}
              </div>
              <div className="w-[180.9px] flex space-x-4 mt-4 ">
                <a
                  className="text-[#120B39] font-medium text-base leading-4 underline underline-offset-2 dark:text-[#CBF281]"
                  href={project.viewSite}
                  target="_blank"
                >
                  View Site
                </a>
                <a
                  className="text-[#120B39] font-medium text-base leading-4 underline underline-offset-2 dark:text-[#CBF281]"
                  href={project.git}
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
