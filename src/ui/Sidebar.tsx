import SocialIcons from "./SocialIcons";
import InfoIcons from "./InfoIcons";

function Sidebar() {
  return (
    <div className="sidebar pt-24 w-14 lg:w-96 bg-[#1E1E1E] component lg:rounded-lg  lg:py-16 h-screen lg:max-h-[calc(100vh-70px)]">
      <div className="w-8 rounded-full relative bg-[#373737] aspect-square lg:w-40 mx-auto lg:rounded-xl overflow-hidden">
        <img src="/Me.jpg" alt="LOGO" className="object-cover" />
      </div>

      <div className="space-y-3 text-center py-7">
        <h1 className="text-[10px] text-gray-100 lg:text-4xl lg:mb-6 ">
          Fares <span className="hidden lg:inline-block">Mohamed</span>
        </h1>
        <p className="text-[7px] py-2 mx-auto text-gray-100 transition duration-300 cursor-pointer lg:rounded-md lg:text-base lg:px-4 lg:bg-zinc-700 w-fit hover:bg-zinc-900">
          Frontend <span className="hidden lg:inline-block">Developer</span>
        </p>
      </div>

      <p className="w-3/4 h-px mx-auto bg-gray-100/60"></p>

      <InfoIcons />

      <SocialIcons />
    </div>
  );
}

export default Sidebar;
