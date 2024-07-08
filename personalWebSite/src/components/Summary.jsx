import Header from "./Header";
import SummaryContent from "./SummaryContent";

export default function Summary() {
  return (
    <div className="w-screen h-[671px] bg-bgr-background flex flex-row flex-wrap justify-center items-center">
      <div className="w-[138px] h-[18px] top-[35px] left-[851px] absolute text-[#CBF281] font-bold text-[15px]">
        TÜRKÇE'YE GEÇ
      </div>
      <div className="absolute w-[167px] h-6 top-[32px] right-[280px] text-[#4731D3] font-bold">
        <label>
          <input type="checkbox" />
          DARK MODE
        </label>
      </div>
      <Header />
      <SummaryContent />
    </div>
  );
}
