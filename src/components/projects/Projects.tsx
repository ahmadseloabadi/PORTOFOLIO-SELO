import ProjectsFilter from "./ProjectsFilter";
import { ProjectProps } from "./Types";

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "Sentiment Analysis Myxl App Reviews",
      description:
        "An application that analyzes user sentiment from MyXL reviews on Google Play Store. Using a Genetic Algorithm-optimized SVM model with SMOTE for handle imbalance dataset, it classifies reviews as positive, negative, or neutral, helping improve service quality and user experience.",
      image: "/assets/ansen-gasvm-myxl.png",
      technologies: ["Streamlit", "Python", "Algorithma Genetika", "SVM"],
      category: ["Machine Learning", "Analysis Sentiment"],
      demoUrl: "https://smote-svm-ga-9xbdvfjcqcnk6zbyespptz.streamlit.app/",
      githubUrl: "https://github.com/ahmadseloabadi/SMOTE-SVM-GA",
      features: ["High Accuration", "Detection New Data", "Simple Design"],
    },
    {
      title: "Sentiment Analysis Kredivo App Reviews",
      description:
        "An application that analyzes user sentiment from Kredivo reviews on Google Play Store. Using a Genetic Algorithm-optimized SVM model, it classifies reviews as positive, negative, or neutral, helping improve service quality and user experience.",
      image: "/assets/ansen-gasvm-kredivo.png",
      technologies: ["Streamlit", "Python", "Algorithma Genetika", "SVM"],
      category: ["Machine Learning", "Analysis Sentiment"],
      demoUrl: "https://w5zw4dqpwfsmbhplfqzblc.streamlit.app/",
      githubUrl:
        "https://github.com/ahmadseloabadi/analisis-sentimen-kredivo-GA-SVM",
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
      title: "Manggo Image Classification",
      description:
        "This project is a classification system designed to identify different types of mangoes using a Convolutional Neural Network (CNN) model. The CNN is trained on a dataset of mango images, learning to recognize unique  color for accurate classification.",
      image: "/assets/cnn-mangga.png",
      technologies: ["Python", "CNN", "Flask", "HTML", "CSS", "JavaScript"],
      category: ["Machine Learning", "Img Processing"],
      demoUrl: "#",
      githubUrl: "https://github.com/ahmadseloabadi/klasifikasi-mangga-CNN",
      features: ["High Accuration", "Detection New Data", "Simple Design"],
    },
    {
      title: "Recommendations Restaurant Yogyakarta",
      description:
        "An application providing personalized restaurant recommendations in Yogyakarta using hybrid filtering. By combining content-based and collaborative filtering methods, it delivers tailored suggestions based on user preferences and similar user behaviors, enhancing dining experiences across the city.",
      image: "/assets/sysrec-restaurant.png",
      technologies: ["Streamlit", "Python", "Hybrid filtering"],

      category: ["Machine Learning", "Recomendation"],
      demoUrl:
        "https://recsys-restaurant-app-ezv93g3cu7yuazxuzdv7vi.streamlit.app/",
      githubUrl:
        "https://github.com/ahmadseloabadi/recsys-restaurant-streamlit",
      features: [
        "Simple Desain",
        "CRUD feature in Rating",
        "Real-Time Recommendation",
      ],
    },
    {
      title: "Recommendations Movies",
      description:
        "An application providing personalized Movies recommendations  using collaborative filtering methods, it delivers tailored suggestions based on user preferences and similar user behaviors,",
      image: "/assets/sysrec-movie.png",
      technologies: ["Streamlit", "Python", "collaborative filtering"],

      category: ["Machine Learning", "Recomendation"],
      demoUrl: "https://c283zuqsq3ip535yhxvfiy.streamlit.app/",
      githubUrl:
        "https://github.com/ahmadseloabadi/sysrec-movie-collaborative-filtering-",
      features: ["Simple Desain", "Real-Time Recommendation"],
    },
    {
      title: "BCA stock price Prediction",
      description:
        "This application is designed to predict the stock price of BCA up to 7 days in advance using the SVR method. It allows users, especially investors and stock traders, to gain insights into short-term price movements. By utilizing real-time data from Yahoo Finance",
      image: "/assets/pred-bca.png",
      technologies: ["Streamlit", "Python", "SVR"],

      category: ["Machine Learning", "Prediction"],
      demoUrl:
        "https://prediksi-saham-bca-svr-trth2hfulzzhbnz8qwwbkz.streamlit.app/",
      githubUrl: "https://github.com/ahmadseloabadi/prediksi-saham-BCA-SVR",
      features: ["Simple Desain", "Real-time Prediction ", "Real-Time Data"],
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
      features: ["Responsive Desain", "Interactive App", "User-Friendly"],
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
      features: ["Single Page App", "Simple Design", "Responsive Desain"],
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
      features: ["Single Page App", "Simple Design", "Responsive Desain"],
    },
    {
      title: "Aspect Based Sentiment Female Daily App Reviews",
      description:
        "This project involves developing a classification system for reviews on Female Daily, focusing on sentiment and aspect classification using Support Vector Machine (SVM) and Latent Dirichlet Allocation (LDA) techniques. SVM is utilized for accurately classifying the sentiment of reviews (positive or neutral), while LDA is applied for identifying the main aspects within the reviews",
      image: "/assets/ansen-femaledaily.png",
      technologies: ["Streamlit", "Python", "LDA", "SVM"],
      category: [
        "Machine Learning",
        "Analysis Sentiment",
        "Aspect Based Sentiment",
      ],
      demoUrl:
        "https://female-daily-svm-lda-ymnvtr9bd87xvvjqzjbxhb.streamlit.app/",
      githubUrl: "https://github.com/ahmadseloabadi/FEMALE-DAILY-SVM-LDA",
      features: ["High Accuration", "Detection New Data", "Simple Design"],
    },
    {
      title: "Sentiment Analysis TIX ID App Reviews",
      description:
        "An application that analyzes user sentiment from Tix ID reviews on Google Play Store Using  KNN model and SMOTE for hanndling imbalance dataset, it classifies reviews as positive, negative, or neutral, helping improve service quality and user experience.",
      image: "/assets/ansen-tixid.png",
      technologies: ["Streamlit", "Python", "SMOTE", "KNN"],
      category: ["Machine Learning", "Analysis Sentiment"],
      demoUrl:
        "https://sentiment-analysis-knn-spuhrzb6ozhzdvuska4q5w.streamlit.app/",
      githubUrl: "https://github.com/ahmadseloabadi/sentiment-analysis-KNN",
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
