import Header from "./Header";
import SummaryContent from "./SummaryContent";

export default function Summary() {
  return (
    <div className="w-screen max-h-[671px] bg-bgr-background flex  flex-wrap justify-center items-center dark:bg-dark-background max-md:justify-start">
      <Header />
      <SummaryContent />
    </div>
  );
}
