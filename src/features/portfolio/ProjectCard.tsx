import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Project {
  name: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}

const descritionLength = 180;

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  const description: string =
    project.description.length >= descritionLength
      ? project.description.slice(0, descritionLength)
      : project.description;

  return (
    <Card
      sx={{
        maxWidth: 375,
        bgcolor: "#212529",
        borderRadius: 4,
        color: "#ffffff",
      }}
    >
      <CardMedia
        sx={{ height: 220, maxWidthidth: 368, objectFit: "cover" }}
        image={project.image}
        title={project.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "#adb5bd" }}>
          {isOpen ? `${project.description}  ` : `${description}  `}
          <button
            className="text-blue-500"
            onClick={() => setIsOpen((c) => !c)}
          >
            Read More
          </button>
        </Typography>
      </CardContent>
      <CardActions>
        <div className="flex items-center gap-4 pb-4 pl-3">
          <Link to={`${project.github}`} target="_black">
            Github
          </Link>
          <Link to={`${project.demo}`} target="_black">
            Live Demo
          </Link>
        </div>
      </CardActions>
    </Card>
  );
}
