import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const menuItem = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
  ];
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#50414] bg-opacity-50  backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#CD5C5C]">&lt;</span>
          <span className="text-white">Ajay</span>
          <span className="text-[#CD5C5C]">/</span>
          <span className="text-white">Kumar</span>
          <span className="text-[#CD5C5C]">&gt;</span>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItem.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#CD5C5C] ${
                activeSection === item.id ? "text-[#CD5C5C]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Ajaykapasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#CD5C5C]"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/ajay-kumar-b698a523a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#CD5C5C]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* MENU ICON FOR MOBILE VIEW */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#CD5C5C] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#CD5C5C] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* moblie menu item*/}

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter           backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItem.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white 
              ${activeSection === item.id ? "text-[#CD5C5C]" : ""}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4 ">
              <a
                href="https://github.com/Ajaykapasiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/ajay-kumar-b698a523a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
