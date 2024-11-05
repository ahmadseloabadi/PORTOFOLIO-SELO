import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface Section {
  id: string;
  title: string;
  href: string;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sections: Section[] = [
    { id: "home", title: "HOME", href: "#home" },
    { id: "projects", title: "PROJECT", href: "#projects" },
    { id: "Skills", title: "SKILL", href: "#Skills" },
    { id: "resume", title: "RESUME", href: "#resume" },
    { id: "contact", title: "CONTACT", href: "#contact" },
  ];

  // Enhanced scroll spy with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll to section
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out
                 ${
                   isScrolled
                     ? "bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg py-2  "
                     : "bg-transparent py-4"
                 }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex-shrink-0 group cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <img src="/assets/superman.png" alt="" className="h-16 w-16 " />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <div
                key={section.id}
                className="relative px-4 py-2"
                onMouseEnter={() => setHoveredItem(section.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button
                  onClick={() => handleNavClick(section.id)}
                  className={`relative px-3 py-2 text-base font-medium transition-all duration-300
                             ${
                               activeSection === section.id
                                 ? "text-teal-400"
                                 : "text-gray-300 hover:text-teal-400"
                             }`}
                >
                  {section.title}

                  {/* Active/Hover Indicator */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-all duration-300
                               ${
                                 activeSection === section.id
                                   ? "bg-teal-400 scale-x-100"
                                   : hoveredItem === section.id
                                   ? "bg-teal-400/50 scale-x-75"
                                   : "bg-teal-400/0 scale-x-0"
                               }`}
                  />

                  {/* Background Glow */}
                  <span
                    className={`absolute inset-0 rounded-lg transition-all duration-300
                               ${
                                 activeSection === section.id
                                   ? "bg-teal-400/20 blur-lg opacity-100"
                                   : hoveredItem === section.id
                                   ? "bg-teal-400/10 blur-md opacity-75"
                                   : "opacity-0"
                               }`}
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group relative p-2 rounded-lg transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-teal-400" />
              ) : (
                <Menu className="h-6 w-6 text-gray-300 group-hover:text-teal-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out
                     ${
                       isMobileMenuOpen
                         ? "max-h-96 opacity-100"
                         : "max-h-0 opacity-0 pointer-events-none"
                     }`}
        >
          <div className="py-3 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`group w-full px-4 py-3 text-left rounded-lg transition-all duration-300
                           ${
                             activeSection === section.id
                               ? "bg-teal-400/20 text-teal-400"
                               : "text-gray-300 hover:bg-teal-400/10 hover:text-teal-400"
                           }`}
              >
                <span className="relative">
                  {section.title}
                  {/* Mobile Active Indicator */}
                  <span
                    className={`absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1/2 rounded-r
                               transition-all duration-300 transform
                               ${
                                 activeSection === section.id
                                   ? "bg-teal-400 scale-y-100"
                                   : "bg-teal-400/0 scale-y-0"
                               }`}
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
