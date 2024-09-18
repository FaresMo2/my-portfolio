import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Footer() {
  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto mt-20 text-lg tracking-widest text-center text-gray-100"
    >
      Feel free to talk to me anytime...
    </motion.div>
  );
}

export default Footer;
