import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SummaryContent() {
  const openGit = () => {
    const userConfirm = window.confirm(
      "Bu sayfadan ayrılmak üzeresiniz.Devam etmek için lütfen onaylayın"
    );
    if (userConfirm) {
      window.open("https://github.com/zehraBal");
    }
  };
  const openIn = () => {
    const userConfirm = window.confirm(
      "Bu sayfadan ayrılmak üzeresiniz.Devam etmek için lütfen onaylayın"
    );
    if (userConfirm) {
      window.open(" https://www.linkedin.com/in/fatma-zehra-bal/");
    }
  };

  return (
    <div className="w-[955px] h-[375.89px] flex gap-[83px] mb-[150px]">
      <div className="w-[530px] h-[375px] text-left flex flex-col justify-between flex-wrap gap-[83px ]  ">
        <h1 className="text-[#CBF281] font-bold mt-7">
          I am a Frontend Developer...
        </h1>
        <p className="text-white text-2xl font-normal ">
          ...who likes to craft solid and scalable frontend products with great
          user experience
        </p>
        <div className="w-[278px] h-14 flex gap-3 items-center">
          <button
            className="flex items-center gap-[10px] w-[127px] h-[52px] border rounded-md px-3 pt-3 pb-5 bg-white text-[#4731D3]"
            onClick={openGit}
          >
            <FontAwesomeIcon icon={faGithub} />
            Github
          </button>
          <button
            className="flex items-center gap-[10px] w-[127px] h-[52px] border rounded-md px-3 pt-3 pb-5 bg-white text-[#4731D3]"
            onClick={openIn}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
            Linkedin
          </button>
        </div>
      </div>

      <div className="w-[350px] h-[375.89px] ">
        <img
          className="w-full h-full object-cover border-0 rounded-[18px] "
          src="src/assets/pp.jpeg"
          alt="profilePic"
        />
      </div>
    </div>
  );
}
