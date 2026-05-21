import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { HiCheck, HiExclamation } from "react-icons/hi";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import { personalInfo, socialLinks } from "../data/portfolioData";

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  instagram: FaInstagram,
};

// Contact section with EmailJS form and social links
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // EmailJS configuration — replace with your credentials from https://www.emailjs.com/
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Fallback: open email app when EmailJS keys are not set yet
    if (!serviceId || !templateId || !publicKey) {
      const body = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        "",
        formData.message,
      ].join("\n");

      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(body)}`;

      setStatus({
        type: "success",
        message:
          "Opening your email app to send the message. To enable in-form sending, add EmailJS keys to a .env file (see EMAILJS_SETUP.md).",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: personalInfo.email,
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send message. Check your EmailJS keys in .env and restart the dev server.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors";

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Get In Touch"
          title="Contact Me"
          description="Have a project in mind or want to connect? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <GlassCard hover={false}>
              <h3 className="text-lg font-bold text-white mb-4">
                Let's talk
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors mb-6"
              >
                <div className="p-3 rounded-xl bg-indigo-500/20">
                  <FaEnvelope className="text-indigo-400" />
                </div>
                <span className="text-sm">{personalInfo.email}</span>
              </a>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = socialIconMap[social.icon];
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="p-3 rounded-xl glass text-slate-400 hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>
            </GlassCard>
          </div>

          {/* Contact form */}
          <GlassCard className="lg:col-span-3" hover={false}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-slate-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status message */}
              {status.message && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-xl text-sm ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {status.type === "success" ? <HiCheck /> : <HiExclamation />}
                  {status.message}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <FaPaperPlane />
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
