import { useSelector } from "react-redux";
import { basicInfoSelector } from "../store/selectors/selectors";

export default function BasicInfo() {
  const info = useSelector(basicInfoSelector);
  console.log("info", info);
  return (
    <div className="max-w-[300px] min-h-[290.68px] flex flex-col">
      <div className="max-w-[300px] text-left">
        <h3 className="max-w-[300px] text-white font-inter font-medium text-[30px] leading-[28px] mb-6">
          {info.title}
        </h3>
      </div>
      <div className="max-w-[300px] flex-grow flex">
        <div className="w-[100px] text-left flex flex-col justify-between">
          <ul className="flex-grow text-[#CBF281] font-inter font-semibold text-[16px] leading-[24px] flex flex-col justify-between">
            <li>{info.birthday.title}</li>
            <li>{info.residence.title}</li>
            <li>{info.education.title}</li>
            <li>{info.preference.title}</li>
          </ul>
        </div>
        <div className="w-[200px] text-left flex flex-col justify-between">
          <ul className="flex-grow text-white font-inter font-normal text-[16px] leading-[24px] px-4 flex flex-col justify-between mb-[23px]">
            <li>{info.birthday.data}</li>
            <li>{info.residence.data}</li>
            <li>{info.education.data}</li>
            <li>{info.preference.data}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
