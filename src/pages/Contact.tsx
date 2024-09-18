import { motion } from "framer-motion";
import Form from "../features/contact/Form";
import Title from "../ui/Title";
import Footer from "../ui/Footer";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Contact() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className=""
    >
      <Title title="Contact Me" />
      <Form />
      <Footer />
    </motion.div>
  );
}

export default Contact;
