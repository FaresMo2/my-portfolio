import { IoLogoWebComponent } from "react-icons/io5";
import { SiFramework7 } from "react-icons/si";
import { SiCssdesignawards } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";

const whatImDoing = [
  {
    icon: <IoLogoWebComponent size={30} />,
    title: "Design and implement user-centric web interfaces",
    description:
      "Create engaging and intuitive user experiences by focusing on responsive design, seamless navigation, and accessibility. Ensure that interfaces are visually appealing and easy to use.",
  },
  {
    icon: <SiFramework7 size={30} />,
    title: "Expertise in modern frameworks",
    description:
      "Utilize React and Tailwind CSS for building responsive, visually appealing applications with a focus on performance optimization and seamless user interaction.",
  },
  {
    icon: <SiCssdesignawards size={30} />,
    title: "Technical and design skills",
    description:
      "Combine strong coding abilities with a keen eye for design, ensuring both functionality and aesthetics are seamlessly integrated into every project.",
  },
  {
    icon: <IoIosPeople size={30} />,
    title: "Focused on growth and collaboration",
    description:
      "Eager to contribute to innovative projects and continuously expand expertise through hands-on experience and learning new technologies.",
  },
];

function WhatImDoing() {
  return (
    <div className="mt-10 ">
      <h2 className="mb-4 text-3xl text-gray-100">What I&apos;m Doing</h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-10">
        {whatImDoing.map((res) => (
          <li
            className="flex gap-4 px-10 py-6 rounded-md component"
            key={res.title}
          >
            <div className="mt-1 text-yellow-300">{res.icon}</div>
            <div className="space-y-3">
              <h3 className="text-xl text-gray-100">{res.title}</h3>
              <p className="text-base text-gray-50/70">{res.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WhatImDoing;
