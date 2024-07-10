import { useSelector } from "react-redux";
import { aboutMeSelector } from "../store/selectors/selectors";

export default function AboutMe() {
  const abaoutMeData = useSelector(aboutMeSelector);
  console.log(abaoutMeData);

  return (
    <div className="w-[300px]  h-[290.68px] text-left flex flex-col gap-4">
      <div>
        <h3 className="w-[300px] h-[28px] text-white font-inter font-medium text-[30px] leading-[28px]">
          {abaoutMeData.title}
        </h3>
      </div>
      <p className="font-normal text-lg leading-7 text-white">
        {abaoutMeData.data}
      </p>
    </div>
  );
}
