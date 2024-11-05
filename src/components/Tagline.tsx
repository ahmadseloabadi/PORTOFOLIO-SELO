import React, { useState, useRef, useEffect } from "react";

interface TextContent {
  en: string;
  id: string;
}

interface BilingualTextProps {
  content: TextContent;
  className?: string;
  variant?: "hero" | "contact";
}

const BilingualText: React.FC<BilingualTextProps> = ({
  content,
  className = "",
  variant = "hero",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const enRef = useRef<HTMLParagraphElement>(null);
  const idRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      const enHeight = enRef.current?.offsetHeight || 0;
      const idHeight = idRef.current?.offsetHeight || 0;
      setContainerHeight(Math.max(enHeight, idHeight));
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [content]);

  const getVariantStyles = () => {
    switch (variant) {
      case "contact":
        return {
          container: "text-base relative",
          text: "tracking-wide w-full ",
        };
      case "hero":
      default:
        return {
          container: "text-lg relative ",
          text: "tracking-wide lg:mr-16 lg:mx-0 md:mx-16 mr-0 ",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div
      className={`  ${styles.container} ${className}  `}
      style={{ height: containerHeight }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        ref={enRef}
        className={`absolute break-words  text-center md:text-justify transition-all duration-500 ease-in-out text-white ${
          styles.text
        } ${
          isHovered
            ? "opacity-0 transform -translate-y-1"
            : "opacity-100 transform translate-y-0"
        }`}
      >
        {content.en}
      </p>
      <p
        ref={idRef}
        className={`absolute break-words text-center md:text-justify transition-all duration-500 ease-in-out text-white ${
          styles.text
        } ${
          isHovered
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-1"
        }`}
      >
        {content.id}
      </p>
    </div>
  );
};

const Tagline = ({
  variant,
  content,
}: {
  variant?: "hero" | "contact";
  content?: TextContent;
}) => {
  const defaultContent = {
    en:
      variant === "contact"
        ? "I am passionate about data analysis, data science, and full-stack web development. With a commitment to delivering high-quality results and innovative solutions, I am always open to new collaboration opportunities or projects. Feel free to reach out to me through the contact information below or by filling out the form on the side."
        : "Committed to delivering exceptional web applications and transforming data into meaningful insights through innovative solutions. I'm always open to new collaboration opportunities or projects—let's create something amazing together!",
    id:
      variant === "contact"
        ? "Saya memiliki minat yang kuat dalam data analisis, data science, dan full-stack web development. Dengan komitmen untuk memberikan hasil berkualitas tinggi dan solusi inovatif, saya selalu terbuka untuk peluang kolaborasi baru atau proyek. Jangan ragu untuk menghubungi saya melalui informasi kontak di bawah ini atau dengan mengisi formulir di samping."
        : "Berkomitmen untuk menghadirkan aplikasi web yang luar biasa dan mengubah data menjadi wawasan bermakna melalui solusi inovatif. Saya selalu terbuka untuk peluang kolaborasi atau proyek baru—mari ciptakan sesuatu yang menakjubkan bersama!",
  };

  return (
    <div className="w-full">
      <BilingualText content={content || defaultContent} variant={variant} />
    </div>
  );
};

export default Tagline;
