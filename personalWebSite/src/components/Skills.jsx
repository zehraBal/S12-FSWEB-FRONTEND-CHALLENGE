import { useSelector } from "react-redux";

export default function Skills() {
  const title = useSelector((store) => store.data.skillsTitle);
  return (
    <div className="w-screen flex justify-center items-center min-h-[552px]  dark:bg-[#252128] max-md:h-auto max-md:pb-5">
      <div className="w-full max-w-[960px] h-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 px-4 lg:px-0">
        <h1 className="text-[#4731D3] font-bold text-[48px] dark:text-[#CBF281]   max-md:text-left ">
          {title}
        </h1>
        <div className="w-full lg:w-[290px] flex flex-col gap-[35px]">
          <div className="flex items-center gap-6 text-2xl font-medium text-[#777777] dark:text-white">
            <img
              className="rounded-md shadow-custom1"
              width="120"
              height="120"
              src="/images/jS.png"
              alt="JS"
            />
            JAVASCRIPT
          </div>
          <div className="flex items-center gap-6 text-2xl font-medium text-[#777777] dark:text-white">
            <img
              className="rounded-md shadow-custom1"
              width="120"
              height="120"
              src="/images/react.png"
              alt="react"
            />
            REACT
          </div>
          <div className="flex items-center gap-6 text-2xl font-medium text-[#777777] dark:text-white">
            <div className="rounded-md bg-violet-700 h-[120px] w-[120px] flex justify-center items-center shadow-custom1">
              <img
                className="object-contain"
                width="110"
                height="110"
                src="/images/redux.png"
                alt="redux"
              />
            </div>{" "}
            REDUX
          </div>
        </div>
        <div className="w-full lg:w-[290px] flex flex-col gap-[35px]">
          <div className="flex items-center gap-6 text-2xl font-medium text-[#777777] dark:text-white">
            <div className="w-[120px] h-[120px] bg-black rounded-md shadow-custom1">
              <img width="120" height="120" src="/images/node.png" alt="node" />
            </div>{" "}
            NODE{" "}
          </div>
          <div className="flex items-center gap-6 text-2xl font-medium text-[#777777] dark:text-white">
            <div className="flex justify-center items-center bg-[#038FD6] w-[120px] h-[120px] rounded-md shadow-custom1">
              {" "}
              <img
                className="w-[100px] h-[100px]"
                src="/images/vscode.png"
                alt="vsCode"
              />
            </div>
            VS CODE{" "}
          </div>
          <div className="flex items-center gap-6 text-2xl font-medium text-[#777777] dark:text-white">
            <img
              className="w-[120px] h-[120px] rounded-md shadow-custom1"
              src="/images/figma.png"
              alt="figma"
            />
            FIGMA
          </div>
        </div>
      </div>
    </div>
  );
}
