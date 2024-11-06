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
    // Check if a main category is selected
    if (selectedMainCategory) {
      // Check if the project's main category matches the selected main category
      if (project.category[0] === selectedMainCategory) {
        // Check if a sub category is selected
        if (selectedSubCategory) {
          // Check if the project's sub category matches the selected sub category
          return project.category[1].includes(selectedSubCategory);
        } else {
          // No sub category is selected, so show all projects with the selected main category
          return true;
        }
      } else {
        return false;
      }
    } else {
      // No main category is selected, so show all projects
      return true;
    }
  });

  const handleMainCategoryClick = (category: string) => {
    if (selectedMainCategory === category) {
      // If the same main category is clicked, toggle the sub-category dropdown
      setIsSubCategoryDropdownOpen((prevState) => !prevState);
    } else {
      // If a different main category is clicked, update the selected main category and sub-category
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
          className={`px-4 py-2 rounded-md transition-colors ${
            !selectedMainCategory
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => {
            setSelectedMainCategory(null);
            setSelectedSubCategory(null);
          }}
        >
          All
        </button>
        {mainCategories.map((category) => (
          <div className="relative" key={category}>
            <button
              className={`px-4 py-2 rounded-md transition-colors flex items-center ${
                selectedMainCategory === category
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleMainCategoryClick(category)}
            >
              {selectedMainCategory === category && selectedSubCategory
                ? selectedSubCategory
                : category}
              <LuChevronDown
                className={`ml-2 w-4 h-4 transition-transform ${
                  isSubCategoryDropdownOpen && selectedMainCategory === category
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>
            {isSubCategoryDropdownOpen && selectedMainCategory === category && (
              <div
                ref={dropdownRef}
                className="absolute z-10 bg-white shadow-lg rounded-md mt-2 w-48"
              >
                <button
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-200 ${
                    selectedSubCategory === null ? "bg-gray-200" : "bg-white"
                  }`}
                  onClick={() => handleSubCategoryClick(null)}
                >
                  All
                </button>
                {subCategories[category].map((subCategory) => (
                  <button
                    key={subCategory}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-200 ${
                      selectedSubCategory === subCategory
                        ? "bg-gray-200"
                        : "bg-white"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
