// import React from "react";
//import { experiences } from "../../constants";
//
//const Experience = () => {
//  return (
//    <section
//      id="experience"
//      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient "
//    >
//      {/* Section title */}
//      <div className="text-center mb-16">
//        <h2 className="text-4xl font-bold text-white">Experience</h2>
//        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4" />
//        <p className="text-gray-400 mt-4 text-lg font-semibold">
//          "An overview of my professional journey and the positions I've held
//          across different organizations."
//        </p>
//      </div>
//      {/* Experience timeline  */}
//
//      <div className="relative">
//        {/* Vertical line */}
//        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0" />
//
//        {/* Experience title */}
//        {experiences.map((experiences, index) => (
//          <div
//            key={experiences.id}
//            className={`relative flex flex-col sm:flex-row items-center mb-16 ${
//              index % 2 === 0
//                ? "sm:flex-row-reverse sm:items-start"
//                : "sm:items-start"
//            }`}
//          >
//            {/* Timeline circle */}
//            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-[#8245ec] border-white border-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full z-10">
//              <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
//                <img
//                  src={experiences.img}
//                  alt={experiences.company}
//                  className="w-full h-full object-cover rounded-full"
//                />
//              </div>
//            </div>
//
//            {/* Content Section */}
//
//            <div
//              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//              } sm:ml-16 sm:mr-16 mx-4 mx-auto transform transition-transform duration-300 hover:scale-105`}
//            >
//              <div className="flex items-center space-x-6">
//                {/* Company Logo/Image */}
//                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
//                  <img
//                    src={experiences.img}
//                    alt={experiences.company}
//                    className="w-full h-full object-cover"
//                  />
//                </div>
//
//                {/* Role, Company Name, and Date */}
//                <div className="flex flex-col justify-between">
//                  <div>
//                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                      {experiences.role}
//                    </h3>
//                    <h4 className="text-md sm:text-sm text-gray-300">
//                      {experiences.company}
//                    </h4>
//                  </div>
//                  {/* Date at the bottom */}
//                  <p className="text-sm text-gray-500 mt-2">
//                    {experiences.date}
//                  </p>
//                </div>
//              </div>
//              <p className="mt-4 text-gray-400">{experiences.desc}</p>
//              <div className="mt-4">
//                <h5 className="font-medium text-white">Skills:</h5>
//                <ul className="flex flex-wrap mt-2">
//                  {experiences.skills.map((skill, index) => (
//                    <li
//                      key={index}
//                      className="bg-[#8245ec] text-white px-3 py-1 text-xs sm:text-sm rounded-full mr-2 mb-2"
//                    >
//                      {skill}
//                    </li>
//                  ))}
//                </ul>
//              </div>
//            </div>
//          </div>
//        ))}
//      </div>
//    </section>
//  );
//};

//export default Experience;
