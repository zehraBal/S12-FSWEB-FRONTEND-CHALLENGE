import {
  faCodepen,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faAt } from "@fortawesome/free-solid-svg-icons";

library.add(faAt);
export default function Footer() {
  return (
    <footer className="w-screen h-[454px] bg-[#F9F9F9] flex justify-center items-center">
      <div className="w-[483px] h-[290px] flex flex-col justify-between items-center">
        <div className="w-full">
          <h1 className="font-bold text-[47px] leading-[72px] text-[#4731D3]">
            Send me a message!
          </h1>
        </div>

        <p className="font-normal text-2xl leading-9 ">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <a
          className="font-medium text-[20px] leading-6 text-[#4731D3] underline under "
          href="mailto:fz.bal00@gmail.com"
        >
          fz.bal00@gmail.com
        </a>
        <div className="w-[212px] flex  gap-6 ">
          <FontAwesomeIcon
            className="w-8 h-[26.07px] text-[#4731D3]"
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className="w-8 h-[26.07px] text-[#4731D3]"
            icon={faCodepen}
          />
          <FontAwesomeIcon
            className="w-8 h-[26.07px] text-[#4731D3]"
            icon={faAt}
          />
          <FontAwesomeIcon
            className="w-8 h-[26.07px] text-[#4731D3]"
            icon={faInstagram}
          />
        </div>
      </div>
    </footer>
  );
}
