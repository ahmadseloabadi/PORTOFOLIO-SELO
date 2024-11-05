import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import Tagline from "./Tagline";

interface SocialIcon {
  Icon: typeof Github;
  href: string;
  color: string;
  label: string;
  bgColor: string;
  hoverColor: string;
}

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [currentProfession, setCurrentProfession] = useState(0);

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

  const socialIcons: SocialIcon[] = [
    {
      Icon: Github,
      href: "https://github.com/ahmadseloabadi",
      color: "text-white",
      bgColor: "from-gray-700 to-gray-900",
      hoverColor: "group-hover:from-gray-800 group-hover:to-black",
      label: "Github",
    },
    {
      Icon: Linkedin,
      href: "#",
      color: "text-white",
      bgColor: "from-blue-600 to-blue-800",
      hoverColor: "group-hover:from-blue-700 group-hover:to-blue-900",
      label: "LinkedIn",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/ahmad.selo.abadi/",
      color: "text-white",
      bgColor: "from-pink-500 via-red-500 to-yellow-500",
      hoverColor:
        "group-hover:from-pink-600 group-hover:via-red-600 group-hover:to-yellow-600",
      label: "Instagram",
    },
    {
      Icon: Mail,
      href: "mailto:ahmadseloabadi@gmail.com",
      color: "text-white",
      bgColor: "from-red-500 to-red-700",
      hoverColor: "group-hover:from-red-600 group-hover:to-red-800",
      label: "Email",
    },
  ];

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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Enhanced Profile Section */}

          <div className="relative w-64 h-64 md:w-72 md:h-72 animate-float">
            <div
              className={`absolute inset-0 rounded-full opacity-20 blur-xl animate-pulse bg-gradient-to-r ${professions[currentProfession].gradient}`}
            ></div>
            <div
              className={`relative w-full h-full rounded-full overflow-hidden border-4 border-opacity-50 transform hover:scale-105 transition-transform duration-300 ${professions[currentProfession].shadowColor} shadow-lg border-white/20`}
            >
              <img
                src="/assets/pas_foto.png"
                alt="Portfolio"
                className="w-full h-full object-contain scale-125 translate-y-6"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            {/* Enhanced Name with Typing Effect */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
