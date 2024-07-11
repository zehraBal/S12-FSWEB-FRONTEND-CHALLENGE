import React from "react";
import BasicInfo from "./BasicInfo";
import AboutMe from "./AboutMe";

export default function ProfileContent() {
  return (
    <div className="max-w-[960px] min-h-[290.68px] flex gap-[30px]  bg-transparent max-md:flex-col max-md:h-auto">
      <BasicInfo />
      <div className="w-[300px] h-[290.68px] flex items-stretch justify-center">
        <img
          className="object-cover rounded-[10px] shadow-custom1"
          src="/src/assets/image2.png"
          alt="image2"
        />
      </div>
      <AboutMe />
    </div>
  );
}
