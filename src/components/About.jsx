
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { github, lindin, twiter, whatsup, instra } from "../assets";
import { FiDownload } from "react-icons/fi";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="service-icon"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who I Am</p>
        <h2 className={styles.sectionHeadText}>Freelance Developer</h2>
      </motion.div>

      {/* Social Links + Resume */}
      <motion.div className="flex flex-wrap items-center justify-start gap-4 mt-6">
        {/* GitHub */}
        <div
          onClick={() => window.open("https://github.com/raviraj786", "_blank")}
          className="bg-slate-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <img src={github} alt="GitHub" className="w-1/2 h-1/2 object-contain" />
        </div>

        {/* LinkedIn */}
        <div
          onClick={() => window.open("https://www.linkedin.com/in/raviraj-choudhary/", "_blank")}
          className="bg-slate-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <img src={lindin} alt="LinkedIn" className="w-1/2 h-1/2 object-contain" />
        </div>

        {/* Twitter */}
        <div
          onClick={() => window.open("https://x.com/rajravi78600", "_blank")}
          className="bg-slate-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <img src={twiter} alt="Twitter" className="w-1/2 h-1/2 object-contain" />
        </div>

        {/* Instagram */}
        <div
          onClick={() => window.open("https://www.instagram.com/razzzravix/", "_blank")}
          className="bg-slate-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <img src={instra} alt="Instagram" className="w-1/2 h-1/2 object-contain" />
        </div>

        {/* WhatsApp */}
        <div
          onClick={() => window.open("https://wa.me/917879544294?text=Hi%20there!", "_blank")}
          className="bg-slate-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          <img src={whatsup} alt="WhatsApp" className="w-1/2 h-1/2 object-contain" />
        </div>

        {/* Resume Button */}
        <a
          href="/Raviraj_Choudhary_Resume.pdf"
          download
          className="flex items-center gap-2 bg-[#304bd4] text-white px-5 py-2 rounded-full shadow-md hover:bg-[#1e1bb8] transition font-medium"
        >
          <FiDownload />
          Download Resume
        </a>
      </motion.div>

      {/* Bio */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I'm Raviraj — a passionate Full-Stack Developer with 4+ years of experience in building scalable, high-performance web and mobile apps using React.js, React Native, Node.js, and MongoDB.
        <br /><br />
        I'm currently open to <strong>freelance projects</strong> where I can help startups, businesses, or individuals build clean, fast, and production-ready applications. Whether it's an MVP, e-commerce site, admin dashboard, mobile app, or API — I bring ideas to life with quality code and UI precision.
        <br /><br />
        Let’s collaborate on your next project and build something impactful together 🚀.
      </motion.p>

      {/* Services */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");