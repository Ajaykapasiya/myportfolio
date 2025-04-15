import React from "react";
import ReactTypingEffect from "react-typing-effect";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}

        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ajay kumar
          </h2>
          {/* Skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold  mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a</span>
            <ReactTypingEffect
              text={[" Coder", " Fullstack Developer"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => {
                <span className="text-[#8245ec]">{cursor}</span>;
              }}
            ></ReactTypingEffect>
          </h3>
          {/* about me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mt-10 mb-8 leading-relaxed">
            I'm Ajay Kumar, a passionate and detail-oriented Full Stack
            Developer with a strong foundation in both frontend and backend
            technologies. On the frontend, I specialize in building responsive,
            user-friendly interfaces using React.js, Tailwind CSS, and
            JavaScript. On the backend, I work with Express, and MongoDB to
            create robust and scalable APIs and applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
