import React, { useEffect, useState } from "react";
//import { FiMenu, FiX } from "react-icons"
//import { FaGithub, Falinkeden } from "react-icon/fa"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled , setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () =>{
      setIsScrolled(window.scrollY>50)
    }
  })

  const handleMenuItemClick = (sectionId) => {
    activeSection(sectionId);
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
    <nav className="bg-transparent">
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#CD5C5C]">&lt;</span>
          <span className="text-white">Ajay</span>
          <span className="text-[#CD5C5C]">/</span>
          <span className="text-white">Kumar</span>
          <span className="text-[#CD5C5C]">&gt;</span>
        </div>

        <ul className="md:flex space-x-8 text-grey-300">
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
      </div>
    </nav>
  );
};

export default Navbar;
