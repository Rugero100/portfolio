import { motion } from "framer-motion";
import {
  HiDesktopComputer,
  HiServer,
  HiDeviceMobile,
  HiColorSwatch,
} from "react-icons/hi";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import { services } from "../data/portfolioData";

const serviceIcons = {
  frontend: HiDesktopComputer,
  backend: HiServer,
  responsive: HiDeviceMobile,
  design: HiColorSwatch,
};

// Services I offer section
export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Services"
          title="What I Can Do For You"
          description="Helping bring your ideas to life with modern web development and design."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <GlassCard key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-5"
                >
                  <Icon className="text-2xl text-indigo-400" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
