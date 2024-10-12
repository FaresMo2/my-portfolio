import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSass } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiReactquery } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiLibrariesdotio } from "react-icons/si";

interface Skill {
  skill: string;
  icon: JSX.Element; // This can be a class name for FontAwesome, a URL for an image, etc.
}

const skillsList: Skill[] = [
  { skill: "HTML", icon: <FaHtml5 size={60} /> }, // Replace with actual icon class or URL
  { skill: "CSS", icon: <FaCss3Alt size={60} /> }, // Replace with actual icon class or URL
  { skill: "JavaScript", icon: <IoLogoJavascript size={60} /> }, // Replace with actual icon class or URL
  { skill: "TypeScript", icon: <SiTypescript size={60} /> }, // Replace with actual icon class or URL
  { skill: "React.js", icon: <FaReact size={60} /> }, // Replace with actual icon class or URL
  { skill: "Next.js", icon: <SiNextdotjs size={60} /> }, // Replace with actual icon class or URL
  { skill: "Tailwind", icon: <RiTailwindCssFill size={60} /> }, // Replace with actual icon class or URL
  { skill: "SASS", icon: <SiSass size={60} /> }, // Replace with actual icon class or URL
  { skill: "Redux", icon: <TbBrandRedux size={60} /> }, // Replace with actual icon class or URL
  { skill: "React Query", icon: <SiReactquery size={60} /> }, // Replace with actual icon class or URL
  { skill: "MUI", icon: <SiMui size={60} /> }, // Replace with actual icon class or URL
  { skill: "Third Party", icon: <SiLibrariesdotio size={60} /> }, // Replace with actual icon class or URL
];

function Skills() {
  return (
    <div className="mt-20">
      <Timeline
        sx={{
          width: "1700px",
          marginLeft: "-770px",
          color: "#fff",
        }}
      >
        <TimelineItem sx={{ height: "120px", color: "red" }}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            <h1>SKILLS</h1>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <div className="px-20 pt-5 pb-10 mx-auto">
        <ul className="grid grid-cols-4 grid-rows-3 gap-20">
          {skillsList.map((skill) => (
            <li
              key={skill.skill}
              className="component w-40 h-40 bg-[#282828]  cursor-pointer transition duration-300 flex items-center justify-center hover:scale-105"
            >
              <div className="flex flex-col items-center space-y-7">
                <p className="text-2xl text-gray-50/80">{skill.skill}</p>
                <p className="text-gray-50/80">{skill.icon}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
