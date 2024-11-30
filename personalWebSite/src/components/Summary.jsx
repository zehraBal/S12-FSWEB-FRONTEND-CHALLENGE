import Header from "./Header";
import SummaryContent from "./SummaryContent";

export default function Summary() {
  return (
    <div className="flex bg-[#ECF0F1] dark:bg-[#2C3E50] flex-col md:flex-row justify-center items-center py-10 px-5 dark:text-[#BDC3C7] max-lg:justify-start">
      <SummaryContent />
    </div>
  );
}
