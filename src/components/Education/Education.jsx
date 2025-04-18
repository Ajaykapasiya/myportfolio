import React from "react";
import { education } from "../../constants";
const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient "
    >
      {/* Section title */}
      <div className="text-center mb16">
        <h2 className="text-4xl font-bold text-white "> Education </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p></p>
      </div>

      {/* Education Cards */}
      <div className="space-y-10 mt-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-white rounded-xl p-6 shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
            <p className="text-purple-400 font-semibold">{edu.school}</p>
            <p className="text-gray-400 text-sm">{edu.date}</p>
            {edu.grade && (
              <p className="text-gray-300 text-sm mt-1">Grade: {edu.grade}</p>
            )}
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
