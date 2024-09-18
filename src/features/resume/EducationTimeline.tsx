import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EducationTimeline() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      className="mt-10 "
    >
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
            }}
          >
            <h1 className="text-gray-200">Education</h1>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ height: "250px" }}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <h3 className="text-xl font-bold text-yellow-400">
              Modern Academy for Computer Science
            </h3>
            <p>2020-2024</p>
            <p>
              I graduated with a degree in Computer Science, achieving a GPA of
              2.75. My studies covered a broad range of topics, including
              programming, algorithms, data structures, and software
              engineering. I gained a solid foundation in both theoretical
              concepts and practical skills, preparing me for various roles in
              the tech industry
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <h3 className="text-xl font-bold text-yellow-400">
              My Graduation Project - A+
            </h3>
            <p>Skin Cancer Detection</p>
            <p>
              Skin Cancer Detection is a web application that helps users
              determine the likelihood of having skin cancer by uploading an
              image of their skin. The app utilizes AI to analyze the image and
              provide results, which are displayed in the user's profile.
            </p>
            <p>
              You can check the website from this link :{" "}
              <Link
                to="https://skin-safe.netlify.app/"
                className="text-blue-500"
              >
                Skin Cancer Detection
              </Link>
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </motion.div>
  );
}
