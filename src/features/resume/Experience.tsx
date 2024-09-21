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

function Experience() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      className="my-16"
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
            <h1 className="text-gray-200">Experience</h1>
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
            <h3 className="text-xl font-bold text-yellow-400">Pizza.Co 🍕</h3>
            <p>2023</p>
            <p>
              A comprehensive dashboard for managing hotel reservations,
              available rooms, and all other aspects related to hotel
              management. Users can adjust settings, view detailed information,
              and perform actions like logging in to manage the system.
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
              The Wild Oasis 🏨
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

export default Experience;
