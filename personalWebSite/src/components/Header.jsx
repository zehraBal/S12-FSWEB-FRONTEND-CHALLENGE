import React from "react";

export default function Header() {
  return (
    <div className="w-[960px] h-[72px] text-[#CBF281] flex justify-between items-center bg-transparent">
      <p className="font-bold text-[32px]">zehra</p>
      <div className="flex  flex-wrap ">
        <div className=" mr-9 text-[15px] font-bold  text-[#CBF281]">
          TÜRKÇE'YE GEÇ
        </div>
        <div className=" ml-9  text-[#4731D3] font-bold flex justify-center items-center gap-3">
          <div className="container-switch">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <span>DARK MODE</span>
        </div>
      </div>
    </div>
  );
}
