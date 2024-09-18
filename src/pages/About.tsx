import { motion } from "framer-motion";
import Title from "../ui/Title";
import WhatImDoing from "../features/about/WhatImDoing";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col h-full pb-7 gap-x-4 gap-y-4"
    >
      <Title title="About Me" />

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg text-gray-50/80"
      >
        Hello! I&apos;m Fares, a passionate Front-End Developer with a B.Sc. in
        Computer Science from the Modern Academy. I specialize in creating
        dynamic, user-friendly web applications using modern technologies such
        as React, Tailwind CSS, and Next.js.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg text-gray-50/80"
      >
        With hands-on experience in various projects, including developing
        e-commerce sites, dashboards, and interactive web applications, I bring
        a strong understanding of both design and functionality. My background
        in customer service has equipped me with excellent problem-solving
        skills and the ability to understand user needs deeply. I&apos;m
        currently seeking opportunities to leverage my skills in a collaborative
        environment where I can contribute to impactful projects and continue to
        grow as a developer. Let&apos;s connect and explore how I can help bring
        your next project to life!
      </motion.p>

      <WhatImDoing />
    </motion.div>
  );
}
