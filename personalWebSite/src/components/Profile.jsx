import ProfileContent from "./ProfileContent";

export default function Profile() {
  return (
    <div className="bg-[#4731D3] w-screen h-[552px] flex flex-col justify-center items-center gap-6">
      <div className="w-[960px] text-left font-bold text-[#CBF281]">
        <h1>Profile</h1>
      </div>
      <ProfileContent />
    </div>
  );
}
