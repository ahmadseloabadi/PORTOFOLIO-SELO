import ProjectsFilter from "./ProjectsFilter";
import { ProjectProps } from "./Types";

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "Sentiment Analysis Myxl",
      description:
        "An application that analyzes user sentiment from MyXL reviews on Google Play Store. Using a Genetic Algorithm-optimized SVM model with SMOTE for handle imbalance dataset, it classifies reviews as positive, negative, or neutral, helping improve service quality and user experience.",
      image: "/assets/ansen-gasvm-myxl.png",
      technologies: ["Streamlit", "Python", "Algorithma Genetika", "SVM"],
      category: ["Machine Learning", "Analysis Sentiment"],
      demoUrl: "#",
      githubUrl: "https://github.com/ahmadseloabadi/SMOTE-SVM-GA",
      features: ["High Accuration", "Detection New Data", "Simple Design"],
    },
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
      githubUrl: "https://github.com/ahmadseloabadi/svm-hog",
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
      title: "We Fly",
      description:
        "The final project from SYNRGY Academy, completed by Team 8, was themed around creating an E-Flight Ticket Platform.",
      image: "/assets/wefly.png",
      technologies: ["React", "TypeScript", "Tailwind", "PostgreSQL"],
      category: ["Web App", "Interactive App"],
      demoUrl: "https://wefly.netlify.app/",
      githubUrl: "https://github.com/WeFly-Team/Fullstack-Web-Javascript",
      features: ["Responsive Desain", "Interactive App"],
    },

    {
      title: "Qiscus Landing Page",
      description:
        "Clone landing page from qiscus web app . part of SYNRGY Challenge",
      image: "/assets/qiscus.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: ["Web App", "Single Page App"],
      demoUrl: "https://ahmadseloabadi.github.io/slicing-qiscus/",
      githubUrl: "https://github.com/ahmadseloabadi/slicing-qiscus",
      features: ["Single Page App", "Simple Design"],
    },
    {
      title: "Cashier Landing Page",
      description:
        "Results of learning website slicing from a Figma design in a class at BuildWithAngga.",
      image: "/assets/Cashier-bwa.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: ["Web App", "Single Page App"],
      demoUrl: "https://ahmadseloabadi.github.io/slicing-cashier-bwa/",
      githubUrl: "https://github.com/ahmadseloabadi/slicing-cashier-bwa",
      features: ["Single Page App", "Simple Design"],
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
