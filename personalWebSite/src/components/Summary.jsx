import Header from "./Header";
import SummaryContent from "./SummaryContent";

export default function Summary() {
  return (
    <div className="w-screen h-[671px] bg-bgr-background flex flex-row flex-wrap justify-center items-center dark:bg-dark-background">
      <Header />
      <SummaryContent />
    </div>
  );
}
