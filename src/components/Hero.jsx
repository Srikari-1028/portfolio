import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden flex flex-col items-center">
      
      {/* Gradient Background Shape */}
      <div className="md:h-[550px] h-[400px] w-[400px] md:w-[500px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] absolute rotate-45 z-0 right-[-100px] top-20 rounded-3xl opacity-80"></div>

      {/* Navbar */}
      <Navbar />

      <main id="home" className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl px-6 md:px-16 pt-28 md:pt-36 pb-10 z-10">
        
        {/* LEFT CONTENT */}
        <section className="flex-1 text-center md:text-left mt-10 md:mt-0 relative">
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-40 -top-10 -left-10"></div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Appannagari Srikari
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-[#c744ec] mb-4">
            Frontend Developer
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
            Computer Science graduate specializing in Frontend Development with strong expertise in HTML, CSS, JavaScript, and
React.js. Experienced in building responsive, user-friendly MERN applications and optimizing web performance.
Passionate about creating intuitive UI/UX designs and delivering seamless cross-browser experiences.
          </p>

          {/* Social Icons - USING PUBLIC FOLDER PATHS */}
          <div className="flex justify-center md:justify-start items-center space-x-5 mb-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/github.png" 
                alt="GitHub"
                className="w-8 h-8 hover:scale-110 transition-transform duration-300"
              />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8 hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>

          <a href="/New_resume.pdf" download>
            <button className="inline-flex text-white border-2 border-purple-500 py-2 px-6 rounded-full text-lg hover:bg-purple-700 transition-all duration-300">
              Download Resume
            </button>
          </a>
        </section>

        {/* RIGHT IMAGE - USING PUBLIC FOLDER PATH */}
        <section className="flex-1 flex justify-center items-center">
          <img
            src="/programmer.svg"
            alt="Programmer"
            className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] drop-shadow-lg"
          />
        </section>
      </main>
    </div>
  );
};

export default Hero;