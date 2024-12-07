import { motion } from "framer-motion";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import {
  languageSelector,
  summarySelector,
} from "../store/selectors/selectors";
import Swal from "sweetalert2";

export default function SummaryContent() {
  const lang = useSelector(languageSelector);
  const sum = useSelector(summarySelector);

  const openGit = () => {
    Swal.fire({
      title:
        lang === "en"
          ? "You are about to leave this page"
          : "Bu sayfadan ayrılmak üzeresiniz.",
      text:
        lang === "en"
          ? "Please confirm to continue"
          : "Devam etmek için lütfen onaylayın",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: lang === "en" ? "Yes" : "Evet",
      cancelButtonText: lang === "en" ? "No" : "Hayır",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("https://github.com/zehraBal", "_blank");
      }
    });
  };

  const openIn = () => {
    Swal.fire({
      title:
        lang === "en"
          ? "You are about to leave this page"
          : "Bu sayfadan ayrılmak üzeresiniz.",
      text:
        lang === "en"
          ? "Please confirm to continue"
          : "Devam etmek için lütfen onaylayın",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: lang === "en" ? "Yes" : "Evet",
      cancelButtonText: lang === "en" ? "No" : "Hayır",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("https://www.linkedin.com/in/fatma-zehra-bal/", "_blank");
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex my-16 max-md:flex-col max-sm:my-10"
    >
      <div className="basis-full flex gap-20 px-40 flex-grow justify-center items-center flex-wrap md:px-0  max-sm:px-0">
        {/* Text Content */}
        <div className="max-w-[45%] flex flex-col justify-between flex-wrap gap-[20px]">
          <h1 className="text-violet-700 dark:text-white font-bold mt-7">
            {sum.sumTitle}
          </h1>
          <p className="text-[#333333] dark:text-gray-300 text-xl">
            {sum.sumContent}
          </p>
        </div>

        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 3 }}
          className="w-60 h-60 max-lg:hidden"
        >
          <img
            className="shadow-2xl w-full h-full object-cover border-0 rounded-full 
              img-hover-effect dark:border-4 dark:border-gray-700"
            src="images/pp.jpeg"
            alt="profilePic"
          />
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-5 items-center justify-center">
          {/* GitHub Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="summary-button"
            onClick={openGit}
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </motion.button>

          {/* LinkedIn Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="summary-button"
            onClick={openIn}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
            Linkedin
          </motion.button>

          {/* Email Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="summary-button"
            onClick={() => (window.location.href = "mailto:fz.bal00@gmail.com")}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            {lang === "en" ? "E-mail" : "E-posta"}
          </motion.button>

          {/* Resume Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="summary-button"
            onClick={() => window.open("/cv/ZehraBal_CV.pdf", "_blank")}
          >
            <FontAwesomeIcon icon={faFilePdf} />
            {lang === "en" ? "Resume" : "Özgeçmiş"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
