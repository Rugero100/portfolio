import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiDownload, HiMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import profileImage from "../assets/profile.png";
import { personalInfo } from "../data/portfolioData";
import { useTypingEffect } from "../hooks/useTypingEffect";

// Hero section with profile image, typing effect, and CTA buttons
export default function Hero() {
  const typedText = useTypingEffect(personalInfo.typingRoles);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-32"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-60 blur-sm"
              />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-2xl shadow-indigo-500/30">
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full rounded-full object-cover object-top border-4 border-slate-900"
                />
              </div>
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-2 right-4 glass px-4 py-2 rounded-full text-sm font-medium"
              >
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Available for work
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-indigo-400 font-medium mb-3 tracking-wide"
            >
              Hello, I'm
            </motion.p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Typing effect */}
            <div className="h-10 md:h-12 mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300">
                {typedText}
                <span className="animate-pulse text-indigo-400">|</span>
              </h2>
            </div>

            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-4">
              {personalInfo.tagline}
            </p>

            <p className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm mb-8">
              <FaMapMarkerAlt className="text-indigo-400" />
              {personalInfo.country} · {personalInfo.status}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold cursor-pointer hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Link>

              <a
                href={personalInfo.cvUrl}
                download={personalInfo.cvFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <HiDownload />
                Download CV
              </a>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-indigo-500/50 text-indigo-300 font-semibold cursor-pointer hover:bg-indigo-500/10 transition-all duration-300 hover:scale-105"
              >
                <HiMail />
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
