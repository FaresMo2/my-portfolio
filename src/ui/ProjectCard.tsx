import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface Project {
  name: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}

export default function ProjectCard({ project }: { project: Project }) {
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
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="pl-3 pb-4 flex items-center gap-4">
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
