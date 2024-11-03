import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  type: "experience" | "education";
}

const ConnectorLine = ({
  isLeft,
  isHovered = false,
  isMobile = false,
}: {
  isLeft: boolean;
  isHovered?: boolean;
  isMobile?: boolean;
}) => {
  const color = isLeft ? "cyan" : "fuchsia";

  return (
    <div
      className={`
        h-[4px] 
        ${isMobile ? "w-8" : `w-8`}
        bg-${color}-500
        ${isHovered ? "opacity-100" : "opacity-70"}
        transition-all duration-300
      `}
    />
  );
};

const TimelineCard = ({
  item,
  index,
  onHover,
  hoveredIndex,
}: {
  item: TimelineItem;
  index: number;
  onHover: (index: number | null) => void;
  hoveredIndex: number | null;
}) => {
  const isLeft = item.type === "experience";
  const color = isLeft ? "cyan" : "fuchsia";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={`
        group relative w-full 
        md:w-[calc(100%-1rem)] 
        ${isLeft ? "md:mr-auto pl-12  md:pl-0" : "md:ml-auto pl-12  md:pl-0"}
      `}
    >
      {/* Mobile Timeline Elements */}
      <div className="md:hidden flex items-center absolute left-0 top-6">
        <ConnectorLine isLeft={isLeft} isMobile={true} />
      </div>

      {/* Desktop Connector Line */}
      <div
        className={`
          hidden md:flex absolute top-1/2 -translate-y-1/2
          ${isLeft ? "-right-[2rem]" : "-left-[2rem]"}
          items-center
        `}
      >
        <ConnectorLine isLeft={isLeft} isHovered={hoveredIndex === index} />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{
          boxShadow: `0 0 30px 5px ${isLeft ? "#0ff3" : "#f0f3"}`,
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
        className={`
          relative bg-gray-900 p-12 rounded-lg
          border border-${color}-500
          hover:border-${color}-500
          backdrop-blur-sm
          transition-colors duration-300
        `}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-xl font-bold text-${color}-400`}>
            {item.title}
          </h3>
          <span
            className={`
              text-xs px-2 py-1 rounded-md
              bg-transparent text-${color}-400
              border border-${color}-500
            `}
          >
            {item.type === "experience" ? "Experience" : "Education"}
          </span>
        </div>
        <p className="text-gray-400 mb-2">{item.subtitle}</p>
        <p className={`text-sm text-${color}-400`}>{item.period}</p>
      </motion.div>
    </motion.div>
  );
};

const Resume = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const items: TimelineItem[] = [
    {
      title: "experience",
      subtitle: "what you do",
      period: "2021 - 2022",
      type: "experience",
    },
    {
      title: "education",
      subtitle: "learning by doing",
      period: "2019 - 2021",
      type: "education",
    },
    {
      title: "experience",
      subtitle: "what you do",
      period: "2021 - 2022",
      type: "experience",
    },
    {
      title: "education",
      subtitle: "learning by doing",
      period: "2019 - 2021",
      type: "education",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 p-4 md:p-8" id="resume">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          My Resume
        </h1>
        <div className="flex justify-center items-center gap-24">
          <span className="hidden md:block bg-gradient-to-r from-cyan-400 to-fuchsia-400 font-semibold text-lg  text-transparent bg-clip-text">
            Job Experience & Education
          </span>
        </div>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Mobile Timeline Line */}
        <div
          className="absolute left-[7px] top-0 bottom-0 w-[2px] 
          bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-cyan-500 
          opacity-50 md:hidden"
        />

        {/* Desktop Center Line */}
        <div
          className="hidden md:block absolute left-1/2 transform -translate-x-[1px] top-0 bottom-0
          w-[4px] bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-cyan-500
          opacity-50"
        />

        {/* Desktop Timeline Points */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-1 bottom-1">
          {items.map((_item, index) => (
            <div
              key={index}
              className="absolute -ml-[6px]"
              style={{
                top: `${index * 155 + 90}px`,
              }}
            ></div>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="relative md:grid md:grid-cols-2 md:gap-8">
          <div className="md:space-y-32">
            {items
              .filter((item) => item.type === "experience")
              .map((item, index) => (
                <TimelineCard
                  key={index}
                  item={item}
                  index={index * 2}
                  onHover={setHoveredIndex}
                  hoveredIndex={hoveredIndex}
                />
              ))}
          </div>
          <div className="md:space-y-32 md:mt-32">
            {items
              .filter((item) => item.type === "education")
              .map((item, index) => (
                <TimelineCard
                  key={index}
                  item={item}
                  index={index * 2 + 1}
                  onHover={setHoveredIndex}
                  hoveredIndex={hoveredIndex}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
