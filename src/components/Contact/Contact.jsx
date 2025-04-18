import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* section title */}

      <div className="text-center mb-16">
        <h2 className="text-4xl text-white font-bold">Contact</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* Contact form  */}

      <div
        className="mt-8 w-full max-w-md bg-[#0d081f] p-6  rounded-lg shadow-lg border border-gray-700 hover:shadow-purple-500/40 transition-shadow duration-300"
      >
        <h3 className="text-xl font-semibold  text-white  text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

     <form>
      <input type="email" name="your email" placeholder="Your Email" required
      
      />
     </form>

      </div>
    </section>
  );
};

export default Contact;
