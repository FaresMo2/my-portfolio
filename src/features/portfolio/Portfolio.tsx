import Title from "../../ui/Title";
import ProjectCard from "../../ui/ProjectCard";
import Filter from "../../ui/Filter";
import { useSearchParams } from "react-router-dom";

interface Project {
  image: string;
  name: string;
  description: string;
  github: string;
  demo: string;
  tech: string;
}

const whatImDoing: Project[] = [
  {
    image: "/project-image1.png",
    name: "Pizza Co 🍕",
    description:
      "A user-friendly web application where users can fully customize their pizza orders, manage their cart, and utilize an API to autofill their delivery address. The app generates an order number for tracking purposes, and users can search for their order by ID.",
    github: "https://github.com/FaresMo2/Pizza.Co",
    demo: "https://eclectic-druid-7efb64.netlify.app/",
    tech: "react",
  },
  {
    image: "/project-image2.png",
    name: "The Wild Oasis",
    description:
      "A user-friendly web application where users can fully customize their pizza orders, manage their cart, and utilize an API to autofill their delivery address. The app generates an order number for tracking purposes, and users can search for their order by ID.",
    github: "https://github.com/FaresMo2/the-wild-oasis",
    demo: "https://the-wild-oasis-seven-tau.vercel.app/",
    tech: "react",
  },
  {
    image: "/project-image3.png",
    name: "Skin Cancer Detection",
    description:
      "A user-friendly web application where users can fully customize their pizza orders, manage their cart, and utilize an API to autofill their delivery address. The app generates an order number for tracking purposes, and users can search for their order by ID.",
    github: "https://github.com/FaresMo2/Skin-Cancer-Detection",
    demo: "https://skin-safe.netlify.app/",
    tech: "react",
  },
  {
    image: "/project-image4.png",
    name: "To-Do List",
    description:
      "A user-friendly web application where users can fully customize their pizza orders, manage their cart, and utilize an API to autofill their delivery address. The app generates an order number for tracking purposes, and users can search for their order by ID.",
    github: "https://github.com/FaresMo2/to-do-list",
    demo: "https://to-do-list-beta-jet.vercel.app/",
    tech: "react",
  },
  {
    image: "/project-image3.jpg",
    name: "Quiz App",
    description:
      "A user-friendly web application where users can fully customize their pizza orders, manage their cart, and utilize an API to autofill their delivery address. The app generates an order number for tracking purposes, and users can search for their order by ID.",
    github: "https://github.com/FaresMo2/Quiz-App",
    demo: "https://quiz-app-beta-swart.vercel.app/",
    tech: "react",
  },
  {
    image: "/project-image2.jpg",
    name: "Weather App",
    description:
      "A user-friendly web application where users can fully customize their pizza orders, manage their cart, and utilize an API to autofill their delivery address. The app generates an order number for tracking purposes, and users can search for their order by ID.",
    github: "https://github.com/FaresMo2/to-do-list",
    demo: "https://to-do-list-beta-jet.vercel.app/",
    tech: "react",
  },
  {
    image: "/project-image2.jpg",
    name: "Hangman Game",
    description:
      "A user-friendly web application where users can fully customize their pizza orders, manage their cart, and utilize an API to autofill their delivery address. The app generates an order number for tracking purposes, and users can search for their order by ID.",
    github: "https://github.com/FaresMo2/Hangman-Game",
    demo: "https://faresmo2.github.io/Hangman-Game/",
    tech: "js",
  },
];

function Portfolio() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("tech") || "all";
  let filterArray: Project[] = [];

  if (filterValue === "all") filterArray = whatImDoing;
  if (filterValue === "react")
    filterArray = whatImDoing.filter((op) => op.tech === "react");
  if (filterValue === "next")
    filterArray = whatImDoing.filter((op) => op.tech === "next");
  if (filterValue === "js")
    filterArray = whatImDoing.filter((op) => op.tech === "js");
  if (filterValue === "htmlcss")
    filterArray = whatImDoing.filter((op) => op.tech === "htmlcss");

  return (
    <div className="py-12">
      <Title title="Portfolio" />
      <Filter
        filterField="tech"
        options={[
          { value: "all", label: "All" },
          { value: "next", label: "Next.JS" },
          { value: "react", label: "React.JS" },
          { value: "js", label: "Only Js" },
          { value: "htmlcss", label: "Only HTML & CSS" },
        ]}
      />
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 mt-10">
        {filterArray.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
