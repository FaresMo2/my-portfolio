import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function SocialIcons() {
  return (
    <div className="w-1/2 text-center mx-auto flex items-center gap-6 text-yellow-300/90">
      <span className="bg-zinc-900 w-10 aspect-square flex justify-center items-center rounded-md cursor-pointer transition duration-300 hover:bg-zinc-700">
        <FaGithub />
      </span>
      <span className="bg-zinc-900 w-10 aspect-square flex justify-center items-center rounded-md cursor-pointer transition duration-300 hover:bg-zinc-700">
        <FaLinkedin />
      </span>
      <span className="bg-zinc-900 w-10 aspect-square flex justify-center items-center rounded-md cursor-pointer transition duration-300 hover:bg-zinc-700">
        <FaInstagramSquare />
      </span>
    </div>
  );
}

export default SocialIcons;
