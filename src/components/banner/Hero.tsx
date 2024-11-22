import { useState, useEffect, useRef } from "react";
import {
  LuGithub,
  LuLinkedin,
  LuInstagram,
  LuMail,
  LuDownload,
  LuChevronDown,
} from "react-icons/lu";
import { FaKaggle } from "react-icons/fa";
import ParticlesBackground from "../reuseable/ParticlesBackground";
import Tagline from "../reuseable/Tagline";
import { HeroProps } from "./Types";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [currentProfession, setCurrentProfession] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDownloadCV = (language: "ID" | "EN") => {
    // Replace these URLs with your actual CV file URLs
    const cvFiles = {
      ID: "/assets/cv/CV_Ahmad_Selo_Abadi_ID.pdf",
      EN: "/assets/cv/CV_Ahmad_Selo_Abadi_EN.pdf",
    };

    const link = document.createElement("a");
    link.href = cvFiles[language];
    link.download = `CV_Ahmad_Selo_Abadi_${language}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fullName = "AHMAD SELO ABADI";
  const professions = [
    {
      title: "Data Analyst",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      shadowColor: "shadow-emerald-500/50",
    },
    {
      title: "Data Science",
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      shadowColor: "shadow-blue-500/50",
    },
    {
      title: "Full Stack Web",
      gradient: "from-rose-400 via-fuchsia-500 to-indigo-600",
      shadowColor: "shadow-rose-500/50",
    },
  ];

  const socialIcons: HeroProps[] = [
    {
      Icon: LuGithub,
      href: "https://github.com/ahmadseloabadi",
      color: "text-white",
      bgColor: "from-gray-700 to-gray-900",
      hoverColor: "group-hover:from-gray-800 group-hover:to-black",
      label: "Github",
    },
    {
      Icon: LuLinkedin,
      href: "https://www.linkedin.com/in/ahmad-selo-abadi-832812242/",
      color: "text-white",
      bgColor: "from-blue-600 to-blue-800",
      hoverColor: "group-hover:from-blue-700 group-hover:to-blue-900",
      label: "LinkedIn",
    },
    {
      Icon: LuInstagram,
      href: "https://www.instagram.com/ahmad.selo.abadi/",
      color: "text-white",
      bgColor: "from-pink-500 via-red-500 to-yellow-500",
      hoverColor:
        "group-hover:from-pink-600 group-hover:via-red-600 group-hover:to-yellow-600",
      label: "Instagram",
    },
    {
      Icon: LuMail,
      href: "mailto:ahmadseloabadi@gmail.com",
      color: "text-white",
      bgColor: "from-red-500 to-red-700",
      hoverColor: "group-hover:from-red-600 group-hover:to-red-800",
      label: "Email",
    },
    {
      Icon: FaKaggle,
      href: "https://www.kaggle.com/ahmadseloabadi",
      color: "text-white",
      bgColor: "from-blue-500 to-blue-700",
      hoverColor: "group-hover:from-blue-600 group-hover:to-blue-800",
      label: "Kaggle",
    },
  ];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Enhanced typing effect with pause and delete
  useEffect(() => {
    const handleTyping = () => {
      const currentText = fullName;
      const shouldDelete = isDeleting;
      const current = typedText;

      if (!shouldDelete && current.length < currentText.length) {
        setTypedText(currentText.slice(0, current.length + 1));
        setTypingSpeed(150);
      } else if (shouldDelete && current.length > 0) {
        setTypedText(currentText.slice(0, current.length - 1));
        setTypingSpeed(75);
      } else if (shouldDelete && current.length === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  // Profession rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfession((prev) => (prev + 1) % professions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [professions.length]);

  return (
    <div
      className=" min-h-screen bg-gray-950  text-white flex items-center justify-center p-6"
      id="home"
    >
      <ParticlesBackground />
      <div className="absolute max-w-6xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-20">
          {/* Enhanced Profile Section */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 animate-float">
            <div
              className={`absolute inset-0 rounded-full opacity-20 blur-xl animate-pulse bg-gradient-to-r ${professions[currentProfession].gradient}`}
            ></div>
            <div
              className={`relative w-64 h-64 rounded-full overflow-hidden border-4 border-opacity-50 transform hover:scale-105 transition-transform duration-300 ${professions[currentProfession].shadowColor} shadow-lg border-white/20`}
            >
              <img
                src="/assets/pas_foto.png"
                alt="Portfolio"
                className="w-full h-full object-contain scale-125 translate-y-6"
              />
            </div>
          </div>
          {/* Content Section */}
          <div className="w-full flex flex-col space-y-8 text-center lg:text-left">
            {/* Enhanced Name with Typing Effect */}
            <div className="w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Hi, I'm{" "}
                <span className="relative">
                  <span
                    className="text-gray-950
        [text-shadow:_0_0_5px_#fff,_0_0_10px_#fff,_0_0_20px_#fff]
        hover:[text-shadow:_0_0_10px_#fff,_0_0_20px_#fff,_0_0_30px_#fff]
        transition-all duration-300"
                  >
                    {typedText}
                  </span>
                  <span className="absolute -right-4 top-0 h-full w-[2px] bg-blue-400 animate-blink" />
                </span>
              </h1>
            </div>

            {/* Enhanced Profession Section with dynamic colors */}
            <div className="h-8 overflow-hidden ">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateY(-${currentProfession * 2}rem)`,
                }}
              >
                {professions.map((profession, index) => (
                  <p
                    key={index}
                    className={`text-3xl h-8 flex items-center justify-center lg:justify-start bg-gradient-to-r ${profession.gradient} bg-clip-text text-transparent font-semibold tracking-wide transform transition-all duration-300 scale-100`}
                  >
                    {profession.title}
                  </p>
                ))}
              </div>
            </div>

            <Tagline variant="hero" />

            {/* Enhanced Social Icons */}
            <div className="flex flex-wrap gap-12 justify-center lg:justify-start">
              {socialIcons.map(
                ({ Icon, href, color, bgColor, hoverColor, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group relative"
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
                  </a>
                )
              )}
            </div>

            {/* Single CV Button with Dropdown */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className="group relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50 blur group-hover:opacity-75 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-2">
                    <LuDownload className="w-5 h-5" />
                    <span className="font-medium">Download CV</span>
                    <LuChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    className="absolute mt-2 w-full rounded-xl overflow-hidden bg-gray-800 shadow-lg border border-gray-700"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {(["ID", "EN"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleDownloadCV(lang)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
                      >
                        <span className="w-6 font-light ">
                          {lang === "ID" ? "ID" : " EN "}
                        </span>
                        <span className="border-l-2 pl-2">
                          {" "}
                          {lang === "ID" ? "Indonesia" : "English"}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
