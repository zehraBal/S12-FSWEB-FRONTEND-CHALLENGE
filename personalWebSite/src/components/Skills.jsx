export default function Skills() {
  return (
    <div className="w-screen flex justify-center items-center h-[552px] dark:bg-[#252128]">
      <div className="w-[960px] h-auto flex justify-between ">
        <h1 className="text-[#4731D3] font-bold text-[48px]">Skills</h1>
        <div className="w-[290px] flex flex-col gap-[35px]">
          <div className="flex items-center gap-6 text-2xl font-medium text-[#777777] dark:text-white">
            <img
              className="rounded-md shadow-custom1"
              width="120"
              height="120"
              src="src/assets/jS.png"
              alt="JS"
            />
            JAVASCRIPT
          </div>
          <div className="flex items-center gap-6 text-2xl font-medium text-[#777777] dark:text-white">
            <img
              className="rounded-md shadow-custom1"
              width="120"
              height="120"
              src="src/assets/react.png"
              alt="react"
            />
            REACT
          </div>
          <div className="flex items-center gap-6 text-2xl font-medium text-[#777777] dark:text-white">
            <div className=" rounded-md bg-violet-700 h-[120px] w-[120px] flex justify-center items-center shadow-custom1">
              <img
                className="object-contain"
                width="110"
                height="110"
                src="src/assets/redux.png"
                alt="redux"
              />
            </div>{" "}
            REDUX
          </div>
        </div>
        <div className="w-[290px] flex flex-col gap-[35px]">
          <div className="flex items-center gap-6 text-2xl font-medium text-[#777777] dark:text-white">
            <div className="w-[120px] h-[120px] bg-black rounded-md shadow-custom1">
              <img
                width="120"
                height="120"
                src="src/assets/node.png"
                alt="node"
              />
            </div>{" "}
            NODE{" "}
          </div>
          <div className="flex items-center gap-6 text-2xl font-medium text-[#777777] dark:text-white">
            <div className="flex justify-center items-center bg-[#038FD6] w-[120px] h-[120px] rounded-md shadow-custom1">
              {" "}
              <img
                className="w-[100px] h-[100px]"
                src="src/assets/vscode.png"
                alt="vsCode"
              />
            </div>
            VS CODE{" "}
          </div>
          <div className="flex items-center gap-6 text-2xl font-medium text-[#777777] dark:text-white">
            <img
              className="w-[120px] h-[120px] rounded-md shadow-custom1"
              src="src/assets/figma.png"
              alt="figma"
            />
            FIGMA
          </div>
        </div>
      </div>
    </div>
  );
}
