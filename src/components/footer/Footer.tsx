import { motion } from "framer-motion";
import { LuGithub, LuLinkedin, LuInstagram, LuMail } from "react-icons/lu";
import { FooterProps } from "./Types";

const socialIcons: FooterProps[] = [
  {
    index: 1,
    Icon: LuGithub,
    href: "https://github.com/ahmadseloabadi",
    color: "text-white",
    bgColor: "from-gray-700 to-gray-900",
    hoverColor: "group-hover:from-gray-800 group-hover:to-black",
    label: "Github",
  },
  {
    index: 2,
    Icon: LuLinkedin,
    href: "https://www.linkedin.com/in/ahmad-selo-abadi-832812242/",
    color: "text-white",
    bgColor: "from-blue-600 to-blue-800",
    hoverColor: "group-hover:from-blue-700 group-hover:to-blue-900",
    label: "LinkedIn",
  },
  {
    index: 3,
    Icon: LuInstagram,
    href: "https://www.instagram.com/ahmad.selo.abadi/",
    color: "text-white",
    bgColor: "from-pink-500 via-red-500 to-yellow-500",
    hoverColor:
      "group-hover:from-pink-600 group-hover:via-red-600 group-hover:to-yellow-600",
    label: "Instagram",
  },
  {
    index: 4,
    Icon: LuMail,
    href: "mailto:ahmadseloabadi@gmail.com",
    color: "text-white",
    bgColor: "from-red-500 to-red-700",
    hoverColor: "group-hover:from-red-600 group-hover:to-red-800",
    label: "Email",
  },
];
const Footer = () => {
  return (
    <footer className=" w-full bg-gray-950 text-gray-300 py-12 overflow-hidden">
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
              Creating Innovative Solutions through Data Analysis and Web
              Development
            </motion.p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {/* Enhanced Social Icons */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: social.index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`
                    absolute -inset-2 rounded-xl bg-gradient-to-r ${social.bgColor} ${social.hoverColor}
                    opacity-75 blur-lg group-hover:opacity-100
                    transition-all duration-300 group-hover:duration-200
                    animate-tilt
                  `}
                  />
                  <div
                    className={`
                    relative flex items-center justify-center w-12 h-12
                    rounded-xl bg-gradient-to-r ${social.bgColor} ${social.hoverColor}
                    transform transition-all duration-300
                    group-hover:scale-110 group-hover:-translate-y-1
                    group-hover:shadow-xl
                  `}
                  >
                    <social.Icon
                      size={24}
                      className={`
                        ${social.color} transform transition-transform
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
                    {social.label}
                  </span>
                </motion.a>
              ))}
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
