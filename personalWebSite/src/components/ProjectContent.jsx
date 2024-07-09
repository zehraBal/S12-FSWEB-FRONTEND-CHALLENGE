export default function ProjectContent() {
  return (
    <div className="w-[960px] h-[360px] rounded-xl flex gap-4 bg-white items-center shadow-custom1">
      <div className="w-[360px] h-[360px]">
        <img
          className="w-full h-full object-cover rounded-[12px_0px_0px_12px] boreder-r border-[#D2D2D2]"
          src="src/assets/image2.png"
          alt="project"
        />
      </div>
      <div className="w-[584px] h-[247px] pr-8 text-left flex flex-col justify-between items-start ">
        <div className="w-[520px]">
          {" "}
          <h3 className="font-bold text-[32px] leading-8 text-[#4731D3]">
            Title
          </h3>
        </div>
        <div className="w-[520px] h-[100px] text-justify">
          <p className="font-normal text-base leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className=" w-[296.14px] flex  justify-between items-center">
          <div className="w-[68px] h-[31px] rounded-[23px] bg-[#4731D3] p-[8px, 18px, 9px, 18px] text-white text-center ">
            {" "}
            react
          </div>
          <div className="w-[68px] h-[31px] rounded-[23px] bg-[#4731D3] p-[8px, 18px, 9px, 18px] text-white text-center">
            {" "}
            redux
          </div>
          <div className="w-[68px] h-[31px] rounded-[23px] bg-[#4731D3] p-[8px, 18px, 9px, 18px] text-white text-center">
            {" "}
            vercel
          </div>
        </div>
        <div className="w-[180.9px] flex space-x-4 mt-4 ">
          <a
            className="text-[#120B39] font-medium text-base leading-4 underline underline-offset-2"
            href="https://www.youtube.com/watch?v=oOLDtj7sKWE"
            target="_blank"
          >
            View Site
          </a>
          <a
            className="text-[#120B39] font-medium text-base leading-4 underline underline-offset-2"
            href="https://github.com/zehraBal/FSWeb-S2G4-JavaScript-tekrar"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
