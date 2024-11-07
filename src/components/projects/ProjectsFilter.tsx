import { useState, useEffect, useRef } from "react";
import { ProjectProps } from "./Types";
import ProjectsCard from "./ProjectsCard";
import { LuChevronDown } from "react-icons/lu";

const ProjectsFilter = ({ projects }: { projects: ProjectProps[] }) => {
  const [selectedMainCategory, setSelectedMainCategory] = useState<
    string | null
  >(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );
  const [isSubCategoryDropdownOpen, setIsSubCategoryDropdownOpen] =
    useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get unique main categories from project data
  const mainCategories = [
    ...new Set(projects.flatMap((project) => project.category[0])),
  ];

  // Get unique sub categories for each main category
  const subCategories: { [key: string]: string[] } = {};
  mainCategories.forEach((category) => {
    subCategories[category] = [
      ...new Set(
        projects
          .filter((project) => project.category[0] === category)
          .flatMap((project) => project.category[1])
      ),
    ];
  });

  const filteredProjects = projects.filter((project) => {
    if (selectedMainCategory) {
      if (project.category[0] === selectedMainCategory) {
        if (selectedSubCategory) {
          return project.category[1].includes(selectedSubCategory);
        }
        return true;
      }
      return false;
    }
    return true;
  });

  const handleMainCategoryClick = (category: string) => {
    if (selectedMainCategory === category) {
      setIsSubCategoryDropdownOpen((prevState) => !prevState);
    } else {
      setSelectedMainCategory(category);
      setSelectedSubCategory(null);
      setIsSubCategoryDropdownOpen(true);
    }
  };

  const handleSubCategoryClick = (category: string | null) => {
    setSelectedSubCategory(category);
    setIsSubCategoryDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSubCategoryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          className={`px-6 py-2  transform hover:shadow-black  hover:text-white duration-300  hover:shadow-xl hover:border-designColor border-transparent transition-all  active:bg-[hsl(225,9%,9%)] active:shadow-lg active:scale-95  rounded-lg text-base uppercase
            ${
              !selectedMainCategory
                ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] hover:bg-blue-600"
                : "shadow-[6px_6px_15px_-2px_#161716,-4px_-4px_15px_-8px_#ffffff]   text-gray-100 tracking-wider   "
            } relative overflow-hidden group`}
          onClick={() => {
            setSelectedMainCategory(null);
            setSelectedSubCategory(null);
          }}
        >
          <span className="relative z-10">All</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>

        {mainCategories.map((category) => (
          <div className="relative" key={category}>
            <button
              className={`pl-6 pr-4 py-2  transform hover:shadow-black  hover:text-white duration-300  hover:shadow-xl hover:border-designColor border-transparent transition-all  active:bg-[hsl(225,9%,9%)] active:shadow-lg active:scale-95  rounded-lg text-base uppercase flex items-center
                ${
                  selectedMainCategory === category
                    ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] hover:bg-blue-600"
                    : "shadow-[6px_6px_15px_-2px_#161716,-4px_-4px_15px_-8px_#ffffff]   text-gray-100 tracking-wider "
                } relative overflow-hidden group`}
              onClick={() => handleMainCategoryClick(category)}
            >
              <span className="relative z-10">
                {selectedMainCategory === category && selectedSubCategory
                  ? selectedSubCategory
                  : category}
              </span>
              <LuChevronDown
                className={`ml-2 w-4 h-4 transition-transform duration-300 relative z-10
                  ${
                    isSubCategoryDropdownOpen &&
                    selectedMainCategory === category
                      ? "rotate-180"
                      : ""
                  }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            {isSubCategoryDropdownOpen && selectedMainCategory === category && (
              <div
                ref={dropdownRef}
                className="absolute z-10 bg-gray-800 shadow-[0_0_20px_rgba(59,130,246,0.3)] rounded-lg mt-2 w-52 
                  backdrop-blur-sm backdrop-filter animate-fadeIn"
              >
                <button
                  className={`block rounded-lg w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-200 uppercase
                    ${
                      selectedSubCategory === null
                        ? "bg-blue-500 text-white "
                        : "text-gray-300"
                    }`}
                  onClick={() => handleSubCategoryClick(null)}
                >
                  All
                </button>
                {subCategories[category].map((subCategory) => (
                  <button
                    key={subCategory}
                    className={`block w-full rounded-lg text-left px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-200 uppercase 
                      ${
                        selectedSubCategory === subCategory
                          ? "bg-blue-500 text-white"
                          : "text-gray-300"
                      }`}
                    onClick={() => handleSubCategoryClick(subCategory)}
                  >
                    {subCategory}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 animate-fadeIn">
        {filteredProjects.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
