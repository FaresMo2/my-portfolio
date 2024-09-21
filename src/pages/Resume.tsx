import Title from "../ui/Title";
import Skills from "../features/resume/Skills";
import { motion } from "framer-motion"; // Import Framer Motion
import EducationTimeline from "../features/resume/EducationTimeline";
import Experience from "../features/resume/Experience";

// Variants for animations
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Reusem() {
  return (
    <motion.div
      className="h-full "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Title title="Resume" />
      <EducationTimeline />
      <Experience />
      <Skills />
    </motion.div>
  );
}

export default Reusem;
