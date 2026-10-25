import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  instagram: FaInstagram,
};

// Site footer with copyright and social links
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-stone-400 text-sm text-center md:text-left"
        >
          © {year}{" "}
          <span className="text-white font-medium">{personalInfo.name}</span>.
          All rights reserved.
        </motion.p>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="p-3 rounded-xl glass text-stone-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <Icon className="text-lg" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
