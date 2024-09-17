import { Link } from "react-router-dom";

const nav = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Navigation() {
  return (
    <div className="component flex items-center py-6 px-16 text-lg bg-[#282828] w-1/2 ml-auto rounded-l-xl">
      <ul className="flex items-center gap-24 w-full justify-end">
        {nav.map((link) => (
          <li
            key={link.name}
            className="text-gray-100 transition duration-300 hover:text-yellow-300"
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
