import Header from "./Header";
import SummaryContent from "./SummaryContent";

export default function Summary() {
  return (
    <div className="w-screen max-h-[671px] bg-bgr-background flex  flex-wrap justify-center items-center dark:bg-dark-background max-lg:justify-start max-sm:bg-none max-sm:bg-custom-purple ">
      <Header />
      <SummaryContent />
    </div>
  );
}
