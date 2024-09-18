import Title from "../../ui/Title";
import WhatImDoing from "../../ui/WhatImDoing";

export default function About() {
  return (
    <div className="flex flex-col h-full pb-7 gap-x-4 gap-y-3">
      <Title title="About Me" />

      <p className="text-lg text-gray-50/80">
        Hello! I&apos;m Fares, a passionate Front-End Developer with a B.Sc. in
        Computer Science from the Modern Academy. I specialize in creating
        dynamic, user-friendly web applications using modern technologies such
        as React, Tailwind CSS, and Next.js.
      </p>
      <p className="text-lg text-gray-50/80">
        With hands-on experience in various projects, including developing
        e-commerce sites, dashboards, and interactive web applications, I bring
        a strong understanding of both design and functionality. My background
        in customer service has equipped me with excellent problem-solving
        skills and the ability to understand user needs deeply. I&apos;m
        currently seeking opportunities to leverage my skills in a collaborative
        environment where I can contribute to impactful projects and continue to
        grow as a developer. Let&apos;ss connect and explore how I can help
        bring your next project to life!
      </p>

      <WhatImDoing />
    </div>
  );
}
