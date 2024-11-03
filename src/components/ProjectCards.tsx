import { useState, useRef } from "react";
import { Globe, Github } from "lucide-react";

const ProjectCards = () => {
  const projects = [
    {
      title: "Javanese Script Classification and Recognition",
      description:
        "in this project will classify and recognize javanese script and translit it into latin script,with SVM methods and HOG for feature extraction",
      image: "/assets/svm-hog.png",
      technologies: [
        "Python",
        "SVM",
        "HOG",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      demoUrl: "#",
      githubUrl: "#",
      features: ["High Accuration", "Detection New Data", "Simple Design"],
    },
    {
      title: "Recommendations Restaurant Yogyakarta",
      description:
        "In this project will recommendation restaurant in yogyakarta with hybrid filtering method ",
      image: "/assets/sysrec-restaurant.png",
      technologies: ["Streamlit", "Python", "Hybrid filtering"],
      demoUrl: "#",
      githubUrl: "#",
      features: [
        "Simple Desain",
        "CRUD feature in Rating",
        "Real-Time Recommendation",
      ],
    },
    {
      title: "AI Image Generator",
      description:
        "Web application that generates unique images using machine learning algorithms and user inputs. Creates stunning artwork with just a few clicks.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Python", "TensorFlow", "AWS"],
      demoUrl: "#",
      githubUrl: "#",
      features: ["AI-Powered", "Custom Styles", "High Resolution Output"],
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-950 py-20 px-4 sm:px-6 lg:px-8"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef<HTMLInputElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (rect.height / 2)) * -7;
    const rotateY = (mouseX / (rect.width / 2)) * 7;

    const glowX = ((e.clientX - rect.left) / rect.width) * 100;
    const glowY = ((e.clientY - rect.top) / rect.height) * 100;

    setRotation({ x: rotateX, y: rotateY });
    setGlowPosition({ x: glowX, y: glowY });
  };

  const handleMouseEnter = () => {
    setIsHovered(isHovered == true);
  };

  const handleMouseLeave = () => {
    setIsHovered(isHovered == false);
    setRotation({ x: 0, y: 0 });
    setGlowPosition({ x: 50, y: 50 });
  };

  const TechBadge = ({ tech }) => {
    const colorMap = {
      React: "bg-blue-400 border-blue-300",
      "Node.js": "bg-green-400 border-green-300",
      MongoDB: "bg-green-600 border-green-500",
      TypeScript: "bg-blue-600 border-blue-500",
      "Vue.js": "bg-emerald-400 border-emerald-300",
      Python: "bg-yellow-500 border-yellow-400",
      PostgreSQL: "bg-blue-500 border-blue-400",
      TailwindCSS: "bg-cyan-400 border-cyan-300",
      TensorFlow: "bg-orange-400 border-orange-300",

      // Additional Technologies
      HTML: "bg-orange-600 border-orange-500", // HTML
      CSS: "bg-blue-500 border-blue-400", // CSS
      Flask: "bg-gray-700 border-gray-600", // Flask
      Streamlit: "bg-red-700 border-red-600", // Flask
      OpenCV: "bg-purple-600 border-purple-500", // OpenCV
      "Scikit-Learn": "bg-orange-300 border-orange-200", // Scikit-Learn
      Keras: "bg-red-400 border-red-300", // Keras
      PyTorch: "bg-red-500 border-red-400", // PyTorch
      Pandas: "bg-indigo-400 border-indigo-300", // Pandas
      NumPy: "bg-blue-300 border-blue-200", // NumPy
      Matplotlib: "bg-blue-700 border-blue-600", // Matplotlib
      Seaborn: "bg-teal-400 border-teal-300", // Seaborn
      XGBoost: "bg-green-500 border-green-400", // XGBoost
      LightGBM: "bg-lime-500 border-lime-400", // LightGBM
      NLTK: "bg-green-400 border-green-300", // NLTK

      // Newly Added
      SVM: "bg-gray-600 border-gray-500", // SVM (Support Vector Machine)
      HOG: "bg-pink-400 border-pink-300", // HOG (Histogram of Oriented Gradients)
      JavaScript: "bg-yellow-400 border-yellow-300", // JavaScript
    };

    return (
      <div
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          colorMap[tech] || "bg-gray-400 border-gray-300"
        } 
        text-gray-900 border transform hover:scale-105 transition-transform duration-200`}
      >
        {tech}
      </div>
    );
  };

  return (
    <div
      ref={cardRef}
      className="relative group perspective-2000"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Main Card */}
      <div
        className={`relative bg-gray-800 rounded-2xl overflow-hidden transition-all duration-300 ease-out
          shadow-lg hover:shadow-2xl border border-gray-700 h-full`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(0)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, 
              rgba(56, 189, 248, 0.3) 0%, 
              rgba(17, 24, 39, 0) 60%)`,
          }}
        />

        {/* Project Image */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full  object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />

          {/* Floating Project Title */}
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 transform translate-z-20">
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs text-blue-300 bg-blue-900/30 px-2 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>

          {/* Action Links */}
          <div className="flex gap-4 mt-auto">
            <a
              href={project.demoUrl}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 
                rounded-lg text-white text-sm font-medium transition-colors duration-200"
            >
              <Globe size={16} />
              <span>Live Demo</span>
            </a>
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 
                rounded-lg text-white text-sm font-medium transition-colors duration-200"
            >
              <Github size={16} />
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
