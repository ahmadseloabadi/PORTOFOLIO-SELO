import ProjectsFilter from "./ProjectsFilter";
import { ProjectProps } from "./Types";

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "Javanese Script Classification and Recognition",
      description:
        "An application that classifies and recognizes Javanese script using SVM-HOG feature extraction. identifies and interprets Javanese characters from images, supporting digital preservation and study of Javanese script.",
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
      category: ["Machine Learning", "Img Processing"],
      demoUrl: "#",
      githubUrl: "#",
      features: ["High Accuration", "Detection New Data", "Simple Design"],
    },
    {
      title: "Recommendations Restaurant Yogyakarta",
      description:
        "An application providing personalized restaurant recommendations in Yogyakarta using hybrid filtering. By combining content-based and collaborative filtering methods, it delivers tailored suggestions based on user preferences and similar user behaviors, enhancing dining experiences across the city.",
      image: "/assets/sysrec-restaurant.png",
      technologies: ["Streamlit", "Python", "Hybrid filtering"],

      category: ["Machine Learning", "Recomendation"],
      demoUrl: "#",
      githubUrl: "#",
      features: [
        "Simple Desain",
        "CRUD feature in Rating",
        "Real-Time Recommendation",
      ],
    },
    {
      title: "Sentiment Analysis Myxl",
      description:
        "An application that analyzes user sentiment from MyXL reviews on Google Play Store. Using a Genetic Algorithm-optimized SVM model, it classifies reviews as positive, negative, or neutral, helping improve service quality and user experience.",
      image: "/assets/ansen-gasvm-myxl.png",
      technologies: ["Streamlit", "Python", "Algorithma Genetika", "SVM"],
      category: ["Machine Learning", "Analysis Sentiment"],
      demoUrl: "#",
      githubUrl: "#",
      features: ["High Accuration", "Detection New Data", "Simple Design"],
    },
    {
      title: "Qiscus Landing Page",
      description: "landing page from qiscus web app",
      image: "#",
      technologies: ["HTML", "CSS"],
      category: ["Web App", "Single Page App"],
      demoUrl: "#",
      githubUrl: "#",
      features: ["High Accuration", "Detection New Data", "Simple Design"],
    },
    {
      title: "We Fly",
      description:
        "Result of the final project of SYNRGY academy whose theme is E-Flight Ticket Platform.",
      image: "#",
      technologies: ["React", "Typescript", "Tailwind"],
      category: ["Web App", "Interactive App"],
      demoUrl: "#",
      githubUrl: "#",
      features: ["High Accuration", "Detection New Data", "Simple Design"],
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-950 py-20 px-4 sm:px-6 lg:px-8"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          My Projects
        </h2>
        <div className="w-4/6 h-1 bg-gray-800 rounded-xl mx-auto mb-12"></div>

        <ProjectsFilter projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
