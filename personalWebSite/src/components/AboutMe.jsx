import { useSelector } from "react-redux";
import { aboutMeSelector } from "../store/selectors/selectors";

export default function AboutMe() {
  const abaoutMeData = useSelector(aboutMeSelector);
  console.log(abaoutMeData);

  return (
    <div className="max-w-[300px]  min-h-[290.68px] text-left flex flex-col gap-3 max-md:h-auto max-md:mb-5">
      <div>
        <h3 className="max-w-[300px] h-[28px] text-white font-inter font-medium text-[30px] leading-[28px]">
          {abaoutMeData.title}
        </h3>
      </div>
      <p className="font-normal text-lg leading-7 text-white">
        {abaoutMeData.data}
      </p>
    </div>
  );
}
