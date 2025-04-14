import React from "react";
//import { FiMenu, FiX } from "react-icons"
//import { FaGithub, Falinkeden } from "react-icon/fa"
const Navbar = () => {
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
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Ajay</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Kumar</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        <ul className="md:flex space-x-8 text-grey-300">
          {menuItem.map((item) => (
            <li key={item.id} className="">
              <button>
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
