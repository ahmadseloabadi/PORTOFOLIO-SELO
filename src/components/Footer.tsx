import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

interface SocialIcon {
  index: number;
  Icon: typeof Github;
  href: string;
  color: string;
  label: string;
  bgColor: string;
  hoverColor: string;
}

const Footer = () => {
  const socialIcons: SocialIcon[] = [
    {
      index: 1,
      Icon: Github,
      href: "https://github.com/ahmadseloabadi",
      color: "text-white",
      bgColor: "from-gray-700 to-gray-900",
      hoverColor: "group-hover:from-gray-800 group-hover:to-black",
      label: "Github",
    },
    {
      index: 2,
      Icon: Linkedin,
      href: "#",
      color: "text-white",
      bgColor: "from-blue-600 to-blue-800",
      hoverColor: "group-hover:from-blue-700 group-hover:to-blue-900",
      label: "LinkedIn",
    },
    {
      index: 3,
      Icon: Instagram,
      href: "https://www.instagram.com/ahmad.selo.abadi/",
      color: "text-white",
      bgColor: "from-pink-500 via-red-500 to-yellow-500",
      hoverColor:
        "group-hover:from-pink-600 group-hover:via-red-600 group-hover:to-yellow-600",
      label: "Instagram",
    },
    {
      index: 4,
      Icon: Mail,
      href: "mailto:ahmadseloabadi@gmail.com",
      color: "text-white",
      bgColor: "from-red-500 to-red-700",
      hoverColor: "group-hover:from-red-600 group-hover:to-red-800",
      label: "Email",
    },
  ];

  return (
    <footer className=" w-full bg-gray-950 text-gray-300 py-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-px bg-cyan-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white mb-2"
            >
              AHMAD SELO ABADI
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm text-gray-400 text-center md:text-left"
            >
              Creating innovative solutions through data analysis
            </motion.p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {/* Enhanced Social Icons */}
            <div className="flex flex-wrap gap-12 justify-center lg:justify-start">
              {socialIcons.map(
                ({ Icon, href, color, bgColor, hoverColor, label, index }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div
                      className={`
                    absolute -inset-2 rounded-xl bg-gradient-to-r ${bgColor} ${hoverColor}
                    opacity-75 blur-lg group-hover:opacity-100
                    transition-all duration-300 group-hover:duration-200
                    animate-tilt
                  `}
                    />
                    <div
                      className={`
                    relative flex items-center justify-center w-12 h-12
                    rounded-xl bg-gradient-to-r ${bgColor} ${hoverColor}
                    transform transition-all duration-300
                    group-hover:scale-110 group-hover:-translate-y-1
                    group-hover:shadow-xl
                  `}
                    >
                      <Icon
                        size={24}
                        className={`
                        ${color} transform transition-transform
                        duration-300 group-hover:scale-110 group-hover:rotate-6
                      `}
                      />
                      <div
                        className="absolute inset-0 rounded-xl bg-white/20 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <span
                      className="
                    absolute -bottom-8 left-1/2 -translate-x-1/2 w-max
                    text-sm text-gray-300 opacity-0 group-hover:opacity-100
                    transition-all duration-300 transform group-hover:-translate-y-1
                  "
                    >
                      {label}
                    </span>
                  </motion.a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500"
        >
          <p>
            &copy; {new Date().getFullYear()} Ahmad Selo Abadi. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
