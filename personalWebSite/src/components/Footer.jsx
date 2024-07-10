import {
  faCodepen,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useSelector } from "react-redux";

import { faAt } from "@fortawesome/free-solid-svg-icons";
import { footerSelector } from "../store/selectors/selectors";

library.add(faAt);
export default function Footer() {
  const info = useSelector(footerSelector);
  return (
    <footer className="w-screen h-[454px] bg-[#F9F9F9] flex justify-center items-center dark:bg-[#252128]">
      <div className="w-[483px] h-[290px] flex flex-col justify-between items-center">
        <div className="w-full">
          <h1 className="font-bold text-[47px] leading-[72px] text-[#4731D3] dark:text-[#8F88FF]">
            {info.title}{" "}
          </h1>
        </div>

        <p className="font-normal text-2xl leading-9 dark:text-white">
          {info.content}
        </p>
        <a
          className="font-medium text-[20px] leading-6 text-[#4731D3] underline under dark:text-[#8F88FF]"
          href="mailto:fz.bal00@gmail.com"
        >
          fz.bal00@gmail.com
        </a>
        <div className="w-[212px] flex  gap-6 ">
          <FontAwesomeIcon
            className="w-8 h-[26.07px] text-[#4731D3] dark:text-[#8F88FF]"
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className="w-8 h-[26.07px] text-[#4731D3] dark:text-[#8F88FF]"
            icon={faCodepen}
          />
          <FontAwesomeIcon
            className="w-8 h-[26.07px] text-[#4731D3] dark:text-[#8F88FF]"
            icon={faAt}
          />
          <FontAwesomeIcon
            className="w-8 h-[26.07px] text-[#4731D3] dark:text-[#8F88FF]"
            icon={faInstagram}
          />
        </div>
      </div>
    </footer>
  );
}
