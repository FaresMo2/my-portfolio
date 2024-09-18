import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SocialIcons() {
  return (
    <div className="flex flex-col items-center mx-auto space-y-10 text-center lg:flex-row lg:space-y-0 lg:w-1/2 lg:gap-6 text-yellow-300/90">
      <Link
        to="https://x.com/Faresmo221"
        target="_blank"
        className="flex items-center justify-center transition duration-300 rounded-md cursor-pointer lg:w-10 lg:bg-zinc-900 lg:aspect-square hover:bg-zinc-700"
      >
        <FaGithub />
      </Link>
      <Link
        to="https://github.com/FaresMo2"
        target="_blank"
        className="flex items-center justify-center transition duration-300 rounded-md cursor-pointer lg:w-10 lg:bg-zinc-900 lg:aspect-square hover:bg-zinc-700"
      >
        <FaLinkedin />
      </Link>
      <Link
        to="https://www.linkedin.com/in/fares-mohamed-576968267/"
        target="_blank"
        className="flex items-center justify-center transition duration-300 rounded-md cursor-pointer lg:w-10 lg:bg-zinc-900 lg:aspect-square hover:bg-zinc-700"
      >
        <FaSquareXTwitter />
      </Link>
    </div>
  );
}

export default SocialIcons;
