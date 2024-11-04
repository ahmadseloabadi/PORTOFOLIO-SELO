import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const SkillDiagram = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [activeLine, setActiveLine] = useState<number | null>(null);
  const [isCpuHovered, setIsCpuHovered] = useState(false);
  const controls = useAnimationControls();

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Fungsi untuk menghitung skala berdasarkan ukuran layar dan orientasi
  const calculateScale = () => {
    const isPortrait = windowSize.height > windowSize.width;
    const baseWidth = 1440; // Ukuran layar referensi untuk desktop
    let scale;

    if (windowSize.width <= 640) {
      // Mobile
      scale = isPortrait
        ? Math.min(windowSize.width / (baseWidth * 0.4), 0.3)
        : Math.min(windowSize.width / (baseWidth * 0.6), 0.4);
    } else if (windowSize.width <= 768) {
      // Tablet
      scale = isPortrait
        ? Math.min(windowSize.width / (baseWidth * 0.5), 0.4)
        : Math.min(windowSize.width / (baseWidth * 0.7), 0.5);
    } else if (windowSize.width <= 1024) {
      // Small laptop
      scale = Math.min(windowSize.width / (baseWidth * 0.8), 0.7);
    } else {
      // Desktop
      scale = Math.min(windowSize.width / baseWidth, 1);
    }

    return Math.max(scale, 0.25); // Minimal skala 0.25
  };

  // Update ukuran window saat resize menggunakan debounce
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 150); // Debounce 150ms
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const scale = calculateScale();

  // Fungsi untuk menghitung ukuran CPU core berdasarkan ukuran layar
  const getCpuSize = () => {
    if (windowSize.width <= 640) return "w-24 h-24"; // Mobile
    if (windowSize.width <= 768) return "w-32 h-32"; // Tablet
    return "w-40 h-40"; // Desktop
  };

  // Fungsi untuk menghitung ukuran font CPU text berdasarkan ukuran layar
  const getCpuTextSize = () => {
    if (windowSize.width <= 640) return "text-xl"; // Mobile
    if (windowSize.width <= 768) return "text-2xl"; // Tablet
    return "text-3xl"; // Desktop
  };

  const skills = [
    {
      id: "js",
      name: "JavaScript",
      position: { x: -580 * scale, y: -200 * scale },
      color: "#F7DF1E",
      glowColor: "rgba(247, 223, 30, 0.6)",
      path: `M${-50 * scale},0 L${-50 * scale},${-250 * scale} L${
        -200 * scale
      },${-250 * scale} L${-200 * scale},${-150 * scale} L${-400 * scale},${
        -150 * scale
      } L${-400 * scale},${-300 * scale} L${-570 * scale},${-300 * scale} L${
        -570 * scale
      },${-200 * scale}`,
      pathPoints: [
        { x: -50 * scale, y: 0 },
        { x: -50 * scale, y: -250 * scale },
        { x: -200 * scale, y: -250 * scale },
        { x: -200 * scale, y: -150 * scale },
        { x: -400 * scale, y: -150 * scale },
        { x: -400 * scale, y: -300 * scale },
        { x: -570 * scale, y: -300 * scale },
        { x: -570 * scale, y: -200 * scale },
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: "python",
      name: "Python",
      position: { x: 560 * scale, y: -200 * scale },
      color: "#3776AB",
      glowColor: "rgba(55, 118, 171, 0.6)",
      path: `M${50 * scale},0 L${50 * scale},${-250 * scale} L${200 * scale},${
        -250 * scale
      } L${200 * scale},${-150 * scale} L${400 * scale},${-150 * scale} L${
        400 * scale
      },${-300 * scale} L${570 * scale},${-300 * scale} L${570 * scale},${
        -200 * scale
      }`,
      pathPoints: [
        { x: 50 * scale, y: 0 },
        { x: 50 * scale, y: -250 * scale },
        { x: 200 * scale, y: -250 * scale },
        { x: 200 * scale, y: -150 * scale },
        { x: 400 * scale, y: -150 * scale },
        { x: 400 * scale, y: -300 * scale },
        { x: 570 * scale, y: -300 * scale },
        { x: 570 * scale, y: -200 * scale },
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      id: "html",
      name: "HTML",
      position: { x: -625 * scale, y: 0 },
      color: "#E34F26",
      glowColor: "rgba(227, 79, 38, 0.6)",
      path: `M0,0 L${-200 * scale},0 L${-200 * scale},${-100 * scale} L${
        -400 * scale
      },${-100 * scale} L${-400 * scale},0 L${-300 * scale},0 L${
        -300 * scale
      },${100 * scale} L${-500 * scale},${100 * scale} L${-500 * scale},${
        10 * scale
      } L${-550 * scale},${10 * scale} L${-625 * scale},${10 * scale}`,
      pathPoints: [
        { x: 0, y: 0 },
        { x: -200 * scale, y: 0 },
        { x: -200 * scale, y: -100 * scale },
        { x: -400 * scale, y: -100 * scale },
        { x: -400 * scale, y: 0 },
        { x: -300 * scale, y: 0 },
        { x: -300 * scale, y: 100 * scale },
        { x: -500 * scale, y: 100 * scale },
        { x: -500 * scale, y: 10 * scale },
        { x: -550 * scale, y: 10 * scale },
        { x: -625 * scale, y: 10 * scale },
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: "css",
      name: "CSS",
      position: { x: 610 * scale, y: 0 },
      color: "#1572B6",
      glowColor: "rgba(21, 114, 182, 0.6)",
      path: `M0,0 L${200 * scale},0 L${200 * scale},${-100 * scale} L${
        400 * scale
      },${-100 * scale} L${400 * scale},0 L${300 * scale},0 L${300 * scale},${
        100 * scale
      } L${500 * scale},${100 * scale} L${500 * scale},${10 * scale} L${
        560 * scale
      },${10 * scale} L${610 * scale},${10 * scale}`,
      pathPoints: [
        { x: 0, y: 0 },
        { x: 200 * scale, y: 0 },
        { x: 200 * scale, y: -100 * scale },
        { x: 400 * scale, y: -100 * scale },
        { x: 400 * scale, y: 0 },
        { x: 300 * scale, y: 0 },
        { x: 300 * scale, y: 100 * scale },
        { x: 500 * scale, y: 100 * scale },
        { x: 500 * scale, y: 10 * scale },
        { x: 560 * scale, y: 10 * scale },
        { x: 610 * scale, y: 10 * scale },
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: "react",
      name: "React",
      position: { x: -580 * scale, y: 200 * scale },
      color: "#61DAFB",
      glowColor: "rgba(97, 218, 251, 0.6)",
      path: `M${-50 * scale},0 L${-50 * scale},${250 * scale} L${
        -200 * scale
      },${250 * scale} L${-200 * scale},${150 * scale} L${-400 * scale},${
        150 * scale
      } L${-400 * scale},${330 * scale} L${-570 * scale},${330 * scale} L${
        -570 * scale
      },${270 * scale} L${-570 * scale},${200 * scale}`,
      pathPoints: [
        { x: -50 * scale, y: 0 },
        { x: -50 * scale, y: 250 * scale },
        { x: -200 * scale, y: 250 * scale },
        { x: -200 * scale, y: 150 * scale },
        { x: -400 * scale, y: 150 * scale },
        { x: -400 * scale, y: 330 * scale },
        { x: -570 * scale, y: 330 * scale },
        { x: -570 * scale, y: 270 * scale },
        { x: -570 * scale, y: 200 * scale },
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: "sql",
      name: "sql",
      position: { x: 560 * scale, y: 200 * scale },
      color: "#028DF8",
      glowColor: "rgba(56, 178, 172, 0.6)",
      path: `M${50 * scale},0 L${50 * scale},${250 * scale} L${200 * scale},${
        250 * scale
      } L${200 * scale},${150 * scale} L${400 * scale},${150 * scale} L${
        400 * scale
      },${330 * scale} L${570 * scale},${330 * scale} L${570 * scale},${
        270 * scale
      } L${570 * scale},${200 * scale}`,
      pathPoints: [
        { x: 50 * scale, y: 0 },
        { x: 50 * scale, y: 250 * scale },
        { x: 200 * scale, y: 250 * scale },
        { x: 200 * scale, y: 150 * scale },
        { x: 400 * scale, y: 150 * scale },
        { x: 400 * scale, y: 330 * scale },
        { x: 570 * scale, y: 330 * scale },
        { x: 570 * scale, y: 270 * scale },
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    },
  ];

  const animateBall = async (skill) => {
    setActiveLine(currentAnimation);

    // Reset posisi dan tampilan awal
    controls.set({
      x: 0,
      y: 0,
      scale: 0,
      opacity: 0,
    });

    // Animasi munculnya bola
    await controls.start({
      scale: [0, 1.2, 1],
      opacity: 1,
      transition: {
        duration: 0.4,
        times: [0, 0.7, 1],
        ease: "easeOut",
      },
    });

    // Animasi perjalanan bola
    for (let i = 0; i < skill.pathPoints.length; i++) {
      await controls.start({
        x: skill.pathPoints[i].x,
        y: skill.pathPoints[i].y,
        scale: [1, 1.2, 1], // Pulsing effect selama pergerakan
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          scale: {
            duration: 0.3,
            repeat: 1,
            repeatType: "reverse",
          },
        },
      });
    }

    setActiveSkill(currentAnimation);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Animasi kembali
    for (let i = skill.pathPoints.length - 1; i >= 0; i--) {
      await controls.start({
        x: skill.pathPoints[i].x,
        y: skill.pathPoints[i].y,
        scale: [1, 1.2, 1], // Pulsing effect selama pergerakan kembali
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          scale: {
            duration: 0.3,
            repeat: 1,
            repeatType: "reverse",
          },
        },
      });
    }

    // Animasi menghilang
    await controls.start({
      scale: [1, 1.2, 0],
      opacity: 0,
      transition: {
        duration: 0.4,
        times: [0, 0.3, 1],
        ease: "easeIn",
      },
    });

    setActiveSkill(null);
    setActiveLine(null);
    setCurrentAnimation((prev) => (prev + 1) % skills.length);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      animateBall(skills[currentAnimation]);
    }, 3000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAnimation]);

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-gray-950 py-8 px-4"
      id="Skills"
    >
      <div
        className={`relative w-full max-w-[800px] aspect-square ${
          windowSize.width < 768
            ? "scale-75"
            : windowSize.width < 1024
            ? "scale-90"
            : "scale-100"
        }`}
      >
        {/* CPU core with hover detection */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    ${getCpuSize()} bg-gray-800/80 rounded-lg z-30
                    border-2 border-cyan-400 
                    backdrop-blur-sm overflow-hidden
                    transition-all duration-500 cursor-pointer`}
          style={{
            boxShadow: `0 0 ${20 * scale}px ${
              isCpuHovered ? "rgba(34,211,238,0.8)" : "rgba(34,211,238,0.6)"
            },
                     inset 0 0 ${15 * scale}px rgba(34,211,238,0.3)`,
          }}
          onMouseEnter={() => setIsCpuHovered(true)}
          onMouseLeave={() => setIsCpuHovered(false)}
        >
          {/* CPU Grid Pattern remains the same */}
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-0.5 p-2">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-700/50 rounded-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent" />
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-cyan-400/50" />
                  <div className="absolute left-1/2 top-0 w-px h-full bg-cyan-400/50" />
                </div>
              </div>
            ))}
          </div>

          {/* CPU Label with enhanced animation when hovered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center z-10">
              <span
                className={`${getCpuTextSize()} font-bold text-cyan-400  ${
                  isCpuHovered ? "animate-pulse " : "animate-pulse"
                }`}
                style={{
                  textShadow: `0 0 ${10 * scale}px ${
                    isCpuHovered ? "#ffffff" : "#22d3ee"
                  }`,
                }}
              >
                SKILL
              </span>
              <div
                className={`mt-2 w-${
                  windowSize.width <= 640 ? "12" : "16"
                } h-0.5 mx-auto bg-cyan-400/20 rounded-full animate-[pulse_2s_ease-in-out_infinite]`}
              />
            </div>
          </div>
        </div>

        {/* Circuit paths and skills */}
        {skills.map((skill, index) => {
          const isActive = activeSkill === index;
          const isHovered = hoveredSkill === skill.id;
          const isLineActive = activeLine === index;

          return (
            <React.Fragment key={skill.id}>
              <svg
                className="absolute top-1/2 left-1/2 transform"
                width="full"
                height="full"
                style={{ overflow: "visible" }}
              >
                <motion.path
                  d={skill.path}
                  fill="none"
                  strokeWidth={scale * 2}
                  strokeLinecap="square"
                  className="transition-all cursor-pointer duration-700"
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  animate={{
                    stroke:
                      isLineActive || isHovered || isCpuHovered
                        ? skill.color
                        : "#1f2937",
                    filter:
                      isLineActive || isHovered || isCpuHovered
                        ? `drop-shadow(0 0 8px ${skill.glowColor})`
                        : "none",
                    opacity:
                      isLineActive || isHovered || isCpuHovered ? 1 : 0.3,
                  }}
                />
                {skill.pathPoints.map((point, i) => (
                  <motion.circle
                    key={i}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    animate={{
                      fill:
                        isLineActive || isHovered || isCpuHovered
                          ? skill.color
                          : "#1f2937",
                      filter:
                        isLineActive || isHovered || isCpuHovered
                          ? `drop-shadow(0 0 5px ${skill.glowColor})`
                          : "none",
                      opacity:
                        isLineActive || isHovered || isCpuHovered ? 1 : 0.3,
                    }}
                  />
                ))}
              </svg>
              {/* circle animation */}
              {index === currentAnimation && (
                <motion.div
                  animate={controls}
                  className="absolute rounded-full z-20 flex items-center justify-center"
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  style={{
                    left: "50%",
                    top: "50%",
                    width: `${14 * scale}px`,
                    height: `${14 * scale}px`,
                    background: `radial-gradient(circle at center,
          #ffffff 0%,
          ${skill.color} 50%,
          ${skill.color} 100%)`,
                    boxShadow: `
          0 0 ${20 * scale}px ${skill.glowColor},
          0 0 ${10 * scale}px ${skill.color},
          inset 0 0 ${8 * scale}px rgba(255,255,255,0.8)
        `,
                  }}
                >
                  {/* Inner white glow */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: `${12 * scale}px`,
                      height: `${12 * scale}px`,
                      background: `radial-gradient(circle at center,
            rgba(255,255,255,0.9) 0%,
            rgba(255,255,255,0.5) 50%,
            transparent 100%)`,
                      filter: `blur(${2 * scale}px)`,
                    }}
                  />
                </motion.div>
              )}
              {/* skill icon */}
              <motion.div
                className="absolute flex items-center justify-center rounded-lg 
                       transition-all duration-500 cursor-pointer backdrop-blur-sm"
                style={{
                  left: `calc(50% + ${skill.position.x}px - ${32 * scale}px)`,
                  top: `calc(50% + ${skill.position.y}px - ${32 * scale}px)`,
                  width: `${80 * scale}px`,
                  height: `${80 * scale}px`,
                  background: "rgba(18, 24, 27, 0.8)",
                }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                animate={{
                  scale: isActive || isHovered || isCpuHovered ? 1.15 : 1,
                  boxShadow:
                    isActive || isHovered || isCpuHovered
                      ? `0 0 ${25 * scale}px ${skill.glowColor}`
                      : `0 0 ${10 * scale}px rgba(0,0,0,0.3)`,
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-4/5 h-4/5 transition-all duration-500"
                  style={{
                    filter:
                      isActive || isHovered || isCpuHovered
                        ? "brightness(120%) grayscale(0)"
                        : "brightness(60%) grayscale(100%)",
                  }}
                />

                {(isActive || isHovered || isCpuHovered) && (
                  <motion.div
                    className="absolute w-full h-full rounded-lg border-2 border-current"
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ color: skill.color }}
                  />
                )}

                {isHovered ||
                  (isCpuHovered && (
                    <div
                      className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
                           bg-gray-800/90 px-3 py-1.5 rounded-lg text-sm text-white
                           whitespace-nowrap border border-gray-700
                           shadow-lg backdrop-blur-sm"
                    >
                      {skill.name}
                    </div>
                  ))}
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SkillDiagram;
