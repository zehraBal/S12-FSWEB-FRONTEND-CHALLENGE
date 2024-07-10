import { useSelector } from "react-redux";
import ProfileContent from "./ProfileContent";
import { basicInfoSelector } from "../store/selectors/selectors";

export default function Profile() {
  const info = useSelector(basicInfoSelector);
  console.log("info at Profile", info);
  return (
    <div className="bg-[#4731D3] w-screen h-[552px] flex flex-col justify-center items-center gap-6 dark:bg-[#171043]">
      <div className="w-[960px] text-left font-bold text-[#CBF281]">
        <h1>{info.profileTitle}</h1>
      </div>
      <ProfileContent />
    </div>
  );
}
