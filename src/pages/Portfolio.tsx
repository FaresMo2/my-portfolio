import { motion } from "framer-motion";
import Title from "../ui/Title";
import ProjectCard from "../features/portfolio/ProjectCard";
import Filter from "../ui/Filter";
import { useSearchParams } from "react-router-dom";

interface Project {
  id: number;
  image: string;
  name: string;
  description: string;
  github: string;
  demo: string;
  tech: string;
}

const whatImDoing: Project[] = [
  {
    id: 1,
    image: "/project-image1.jpg",
    name: "Pizza Co 🍕",
    description:
      "A user-friendly web application where users can fully customize their pizza orders, manage their cart, and utilize an API to autofill their delivery address. The app generates an order number for tracking purposes, and users can search for their order by ID.",
    github: "https://github.com/FaresMo2/Pizza.Co",
    demo: "https://eclectic-druid-7efb64.netlify.app/",
    tech: "react",
  },
  {
    id: 2,
    image: "/project-image2.jpg",
    name: "The Wild Oasis",
    description:
      "A comprehensive dashboard for managing hotel reservations, available rooms, and all other aspects related to hotel management. Users can adjust settings, view detailed information, and perform actions like logging in to manage the system.",
    github: "https://github.com/FaresMo2/the-wild-oasis",
    demo: "https://the-wild-oasis-seven-tau.vercel.app/",
    tech: "react",
  },
  {
    id: 3,
    image: "/project-image3.jpg",
    name: "Skin Cancer Detection",
    description:
      "Skin Cancer Detection is a web application that helps users determine the likelihood of having skin cancer by uploading an image of their skin. The app utilizes AI to analyze the image and provide results, which are displayed in the user's profile.",
    github: "https://github.com/FaresMo2/Skin-Cancer-Detection",
    demo: "https://skin-safe.netlify.app/",
    tech: "react",
  },
  {
    id: 5,
    image: "/project-image4.jpg",
    name: "To-Do List",
    description:
      "A simple and user-friendly To-Do List application that allows users to add, complete, and delete tasks. This project manages tasks within the application's state, provides a persistent data option, and comes with a clean user interface for a seamless experience.",
    github: "https://github.com/FaresMo2/to-do-list",
    demo: "https://to-do-list-beta-jet.vercel.app/",
    tech: "react",
  },
  {
    id: 5,
    image: "/project-image5.jpg",
    name: "Weather App",
    description:
      "This is a Weather Application built with React (Vite) and Tailwind CSS, offering users the ability to search for weather conditions by city or country and view forecasts for the upcoming days. The app includes a map feature, which allows users to search for their current location.",
    github: "https://github.com/FaresMo2/to-do-list",
    demo: "https://to-do-list-beta-jet.vercel.app/",
    tech: "react",
  },
  {
    id: 6,
    image: "/project-image6.jpg",
    name: "Quiz React App",
    description:
      "This is a Quiz Application built with React and json-server as the backend. The app is designed to provide a seamless and customizable quiz experience.",
    github: "https://github.com/FaresMo2/Quiz-App",
    demo: "https://quiz-app-beta-swart.vercel.app/",
    tech: "react",
  },
  {
    id: 7,
    image: "/project-image7.jpg",
    name: "Hangman Game",
    description:
      "A fun and interactive Hangman game where players must guess a word based on a specific category. For every wrong guess, a part of the hangman is drawn. You lose the game after making 8 incorrect guesses.",
    github: "https://github.com/FaresMo2/Hangman-Game",
    demo: "https://faresmo2.github.io/Hangman-Game/",
    tech: "js",
  },
  {
    id: 8,
    image: "/project-image8.jpg",
    name: "Discover Project",
    description:
      "Discover-Project is a responsive web application built using only HTML and CSS. The project focuses on showcasing modern web design practices, ensuring accessibility, and delivering a user-friendly interface. The design leverages advanced CSS techniques to create a visually engaging and performant web experience without the need for JavaScript or external frameworks.",
    github: "https://github.com/FaresMo2/Discover-Project",
    demo: "https://faresmo2.github.io/Discover-Project/",
    tech: "htmlcss",
  },
  {
    id: 9,
    image: "/project-image9.jpg",
    name: "Dashboard Rroject",
    description:
      "This is a simple Dashboard built with HTML and CSS, designed to practice layout techniques and navigation. The project includes multiple linked pages and uses Font Awesome for icons.",
    github: "https://github.com/FaresMo2/Dashboard_Rroject",
    demo: "https://faresmo2.github.io/Dashboard_Rroject/",
    tech: "htmlcss",
  },
  {
    id: 10,
    image: "/project-image10.jpg",
    name: "Quiz js Application",
    description:
      "This is a Quiz Application built with vanilla JavaScript, HTML, and CSS. The app is designed to offer a smooth and engaging quiz experience without the need for a frontend framework.",
    github: "https://github.com/FaresMo2/Quiz-js-app",
    demo: "https://faresmo2.github.io/Quiz-js-app/",
    tech: "js",
  },
  {
    id: 11,
    image: "/project-image11.jpg",
    name: "Bring Repos From Github",
    description:
      "This project is a simple JavaScript application that allows you to fetch and display all public repositories of a GitHub user by entering their GitHub username.",
    github: "https://github.com/FaresMo2/Bring-Repos-From-Github",
    demo: "https://faresmo2.github.io/Bring-Repos-From-Github/",
    tech: "js",
  },
  {
    id: 12,
    image: "/project-image12.jpg",
    name: "Image Slider JS",
    description:
      "This project is a simple JavaScript application that allows you to fetch and display all public repositories of a GitHub user by entering their GitHub username.",
    github: "https://github.com/FaresMo2/image-slider-js",
    demo: "https://faresmo2.github.io/image-slider-js/",
    tech: "js",
  },
  {
    id: 13,
    image: "/project-image13.jpg",
    name: "usePopcorn",
    description:
      "usePopcorn is a user-friendly website that allows you to search for any movie and see detailed information such as the movie's poster, release date, duration, genre, IMDb rating, and starring cast.",
    github: "https://github.com/FaresMo2/usePopcorn",
    demo: "https://faresmo2.github.io/image-slider-js/",
    tech: "react",
  },
  {
    id: 14,
    image: "/project-image14.jpg",
    name: "EAT-N-SPLIT 🙋‍♂️",
    description:
      "Split a Bill is a web application that helps users manage and split bills among friends. Users can add friends, select them, and calculate how much each person owes based on their share of the total bill.",
    github: "https://github.com/FaresMo2/EAT-N-SPLIT",
    demo: "https://eat-n-split-teal.vercel.app/",
    tech: "react",
  },
  {
    id: 15,
    image: "/project-image15.jpg",
    name: "The Atomic Blog ⚛️",
    description:
      "The Atomic Blog is a simple, responsive blogging application built with React. It allows users to create, delete, and manage blog posts with ease. The app features an archive system for old posts and supports a dark mode for better readability in low-light environments.",
    github: "https://github.com/FaresMo2/Atomic-Blog",
    demo: "https://atomic-blog-rosy.vercel.app/",
    tech: "react",
  },
  {
    id: 16,
    image: "/project-image16.jpg",
    name: "Type Rush ⌨️",
    description:
      "Welcome to the Typing Speed Challenge! This web application is designed to test and improve your typing speed through a series of timed typing exercises.",
    github: "https://github.com/FaresMo2/typeRush",
    demo: "https://type-rush-kappa.vercel.app/",
    tech: "react",
  },
  {
    id: 17,
    image: "/project-image17.jpg",
    name: "The Wild Oasis 🏩",
    description:
      "Welcome to the Typing Speed Challenge! This web application is designed to test and improve your typing speed through a series of timed typing exercises.",
    github: "https://github.com/FaresMo2/the-wild-oasis-website",
    demo: "https://the-wild-oasis-website-chi-puce.vercel.app/",
    tech: "next",
  },
];

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
    <motion.div initial="hidden" animate="visible" variants={variants}>
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
    </motion.div>
  );
}

export default Portfolio;
