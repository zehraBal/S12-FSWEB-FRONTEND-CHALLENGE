export default function BasicInfo() {
  return (
    <div className="w-[300px] h-[290.68px] flex flex-col">
      <div className="w-[300px] text-left">
        <h3 className="w-[300px] text-white font-inter font-medium text-[30px] leading-[28px] mb-6">
          Basic Information
        </h3>
      </div>
      <div className="w-[300px] flex-grow flex">
        <div className="w-[100px] text-left flex flex-col justify-between">
          <ul className="flex-grow text-[#CBF281] font-inter font-semibold text-[16px] leading-[24px] flex flex-col justify-between">
            <li>Doğum tarihi</li>
            <li>İkamet şehri</li>
            <li>Eğitim durumu</li>
            <li>Tercih Ettiği Rol</li>
          </ul>
        </div>
        <div className="w-[200px] text-left flex flex-col justify-between">
          <ul className="flex-grow text-white font-inter font-normal text-[16px] leading-[24px] px-3 flex flex-col justify-between mb-[23px]">
            <li>11.11.1198</li>
            <li>İstanbul</li>
            <li>Sakarya Ünv. Elektrik Elektronik Müh., 2022</li>
            <li>Frontend, UI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
