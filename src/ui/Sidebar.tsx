import SocialIcons from "./SocialIcons";
import InfoIcons from "./InfoIcons";

function Sidebar() {
  return (
    <div className="w-96 bg-[#1E1E1E] component rounded-lg py-16 max-h-[calc(100vh-100px)]">
      <div className="relative bg-[#373737] aspect-square w-40 mx-auto rounded-xl overflow-hidden">
        <img src="/Me.jpg" alt="LOGO" className="object-cover " />
      </div>

      <div className="py-7 space-y-3 text-center">
        <h1 className="text-4xl text-gray-100 mb-6">Fares Mohamed</h1>
        <p className="text-base text-gray-100 bg-zinc-700 w-fit mx-auto py-2 px-4 rounded-md cursor-pointer transition duration-300 hover:bg-zinc-900">
          Frontend Developer
        </p>
      </div>

      <p className="w-3/4 bg-gray-100/60 mx-auto h-px"></p>

      <InfoIcons />

      <SocialIcons />
    </div>
  );
}

export default Sidebar;
