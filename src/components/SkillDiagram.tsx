import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const SkillDiagram = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [activeLine, setActiveLine] = useState<number | null>(null);
  const controls = useAnimationControls();

  const skills = [
    {
      id: "js",
      name: "JavaScript",
      position: { x: -580, y: -200 },
      color: "#F7DF1E",
      glowColor: "rgba(247, 223, 30, 0.6)",
      path: "M-50,0 L-50,-250 L-200,-250 L-200,-150 L-400,-150 L-400,-300 L-570,-300 L-570,-200",
      pathPoints: [
        { x: -50, y: 0 },
        { x: -50, y: -250 },
        { x: -200, y: -250 },
        { x: -200, y: -150 },
        { x: -400, y: -150 },
        { x: -400, y: -300 },
        { x: -570, y: -300 },
        { x: -570, y: -250 },
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: "python",
      name: "Python",
      position: { x: 560, y: -200 },
      color: "#3776AB",
      glowColor: "rgba(55, 118, 171, 0.6)",
      path: "M50,0 L50,-250 L200,-250 L200,-150 L400,-150 L400,-300 L570,-300 L570,-200",
      pathPoints: [
        { x: 50, y: 0 },
        { x: 50, y: -250 },
        { x: 200, y: -250 },
        { x: 200, y: -150 },
        { x: 400, y: -150 },
        { x: 400, y: -300 },
        { x: 570, y: -300 },
        { x: 570, y: -250 },
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      id: "html",
      name: "HTML",
      position: { x: -625, y: 0 },
      color: "#E34F26",
      glowColor: "rgba(227, 79, 38, 0.6)",
      path: "M0,0 L-200,0 L-200,-100 L-400,-100 L-400,0 L-300,0 L-300,100 L-500,100 L-500,10 L-550,10 L-625,10",
      pathPoints: [
        { x: 0, y: 0 },
        { x: -200, y: 0 },
        { x: -200, y: -100 },
        { x: -400, y: -100 },
        { x: -400, y: 0 },
        { x: -300, y: 0 },
        { x: -300, y: 100 },
        { x: -500, y: 100 },
        { x: -500, y: 10 },
        { x: -550, y: 10 },
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: "css",
      name: "CSS",
      position: { x: 610, y: 0 },
      color: "#1572B6",
      glowColor: "rgba(21, 114, 182, 0.6)",
      path: "M0,0 L200,0 L200,-100 L400,-100 L400,0 L300,0 L300,100 L500,100 L500,10 L560,10 L610,10",
      pathPoints: [
        { x: 0, y: 0 },
        { x: 200, y: 0 },
        { x: 200, y: -100 },
        { x: 400, y: -100 },
        { x: 400, y: 0 },
        { x: 300, y: 0 },
        { x: 300, y: 100 },
        { x: 500, y: 100 },
        { x: 500, y: 10 },
        { x: 555, y: 10 },
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: "react",
      name: "React",
      position: { x: -580, y: 200 },
      color: "#61DAFB",
      glowColor: "rgba(97, 218, 251, 0.6)",
      path: "M-50,0 L-50,250 L-200,250 L-200,150 L-400,150 L-400,330 L-570,330 L-570,270 L-570,200",
      pathPoints: [
        { x: -50, y: 0 },
        { x: -50, y: 250 },
        { x: -200, y: 250 },
        { x: -200, y: 150 },
        { x: -400, y: 150 },
        { x: -400, y: 330 },
        { x: -570, y: 330 },
        { x: -570, y: 270 },
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: "sql",
      name: "sql",
      position: { x: 560, y: 200 },
      color: "#028DF8",
      glowColor: "rgba(56, 178, 172, 0.6)",
      path: "M50,0 L50,250 L200,250 L200,150 L400,150 L400,330 L570,330 L570,270 L570,200",
      pathPoints: [
        { x: 50, y: 0 },
        { x: 50, y: 250 },
        { x: 200, y: 250 },
        { x: 200, y: 150 },
        { x: 400, y: 150 },
        { x: 400, y: 330 },
        { x: 570, y: 330 },
        { x: 570, y: 270 },
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    },
  ];

  const animateBall = async (skill) => {
    setActiveLine(currentAnimation);

    controls.set({
      x: 0,
      y: 0,
      scale: 0,
      opacity: 0,
    });

    await controls.start({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    });

    for (let i = 0; i < skill.pathPoints.length; i++) {
      await controls.start({
        x: skill.pathPoints[i].x,
        y: skill.pathPoints[i].y,
        transition: {
          duration: 0.5,
          ease: "linear",
        },
      });
    }

    setActiveSkill(currentAnimation);
    await new Promise((resolve) => setTimeout(resolve, 500));

    for (let i = skill.pathPoints.length - 1; i >= 0; i--) {
      await controls.start({
        x: skill.pathPoints[i].x,
        y: skill.pathPoints[i].y,
        transition: {
          duration: 0.5,
          ease: "linear",
        },
      });
    }

    await controls.start({
      scale: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    });

    setActiveSkill(null);
    setActiveLine(null);
    setCurrentAnimation((prev) => (prev + 1) % skills.length);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      animateBall(skills[currentAnimation]);
    }, 2000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAnimation]);

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-gray-950 "
      id="Skills"
    >
      <div className="relative w-2/6 h-[400px]">
        {/* CPU core with enhanced glow effect */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-40 h-40 bg-gray-800/80 rounded-lg z-30
                      border-2 border-cyan-400 
                      backdrop-blur-sm overflow-hidden"
          style={{
            boxShadow: `0 0 20px rgba(34,211,238,0.6),
                       inset 0 0 15px rgba(34,211,238,0.3)`,
          }}
        >
          {/* CPU Grid Pattern */}
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

          {/* CPU Label with enhanced glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center z-10">
              <span
                className="text-3xl font-bold text-cyan-400 animate-pulse"
                style={{ textShadow: "0 0 10px #22d3ee" }}
              >
                SKILL
              </span>

              <div className="mt-2 w-16 h-0.5 mx-auto bg-cyan-400/20 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
            </div>
          </div>

          {/* Heat Spreader Detail */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute inset-2 border border-cyan-400/20 rounded" />
            <div className="absolute inset-4 border border-cyan-400/15 rounded" />
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
                  strokeWidth="2"
                  strokeLinecap="square"
                  className="transition-all duration-700"
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  animate={{
                    stroke: isLineActive || isHovered ? skill.color : "#1f2937",
                    filter:
                      isLineActive || isHovered
                        ? `drop-shadow(0 0 8px ${skill.glowColor})`
                        : "none",
                    opacity: isLineActive || isHovered ? 1 : 0.3,
                  }}
                />
                {skill.pathPoints.map((point, i) => (
                  <motion.circle
                    key={i}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    onMouseEnter={() => setHoveredSkill(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    animate={{
                      fill: isLineActive || isHovered ? skill.color : "#1f2937",
                      filter:
                        isLineActive || isHovered
                          ? `drop-shadow(0 0 5px ${skill.glowColor})`
                          : "none",
                      opacity: isLineActive || isHovered ? 1 : 0.3,
                    }}
                  />
                ))}
              </svg>
              {/* circle animation */}
              {index === currentAnimation && (
                <motion.div
                  animate={controls}
                  className="absolute w-3 h-3 rounded-full z-20"
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  style={{
                    left: "50%",
                    top: "50%",
                    backgroundColor: skill.color,
                    boxShadow: `0 0 20px ${skill.glowColor}`,
                  }}
                />
              )}
              {/* skill icon */}
              <motion.div
                className="absolute flex items-center justify-center rounded-lg 
                         transition-all duration-500 cursor-pointer backdrop-blur-sm"
                style={{
                  left: `calc(50% + ${skill.position.x}px - 32px)`,
                  top: `calc(50% + ${skill.position.y}px - 32px)`,
                  width: "80px",
                  height: "80px",
                  background: "rgba(18, 24, 27, 0.8)",
                }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                animate={{
                  scale: isActive || isHovered ? 1.15 : 1,
                  boxShadow:
                    isActive || isHovered
                      ? `0 0 25px ${skill.glowColor}`
                      : "0 0 10px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 transition-all duration-500"
                  style={{
                    filter:
                      isActive || isHovered
                        ? "brightness(120%) grayscale(0)"
                        : "brightness(60%) grayscale(100%)",
                  }}
                />

                {(isActive || isHovered) && (
                  <motion.div
                    className="absolute w-full h-full rounded-lg
                             border-2 border-current"
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

                {isHovered && (
                  <div
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
                             bg-gray-800/90 px-3 py-1.5 rounded-lg text-sm text-white
                             whitespace-nowrap border border-gray-700
                             shadow-lg backdrop-blur-sm"
                  >
                    {skill.name}
                  </div>
                )}
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SkillDiagram;
