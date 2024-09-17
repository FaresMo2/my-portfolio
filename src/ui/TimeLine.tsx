import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function EducationTimeline() {
  return (
    <div>
      <h1>Education</h1>
      <Timeline
        sx={{
          width: "700px",
          marginLeft: "-280px",
          color: "#fff",
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            <h3>Modern Academy for Computer Science</h3>
            <p>2007-2008</p>
            <p>Lorem ipsum dolor sit amet...</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
