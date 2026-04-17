import React from 'react';


export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* IMAGE SECTION */}
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex justify-center relative"
        >
          {/* Gradient Background */}
          <div className="h-[250px] sm:h-[300px] w-[250px] sm:w-[350px] bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute rotate-12 rounded-full z-0"></div>

          {/* Image */}
          <img
            src="/about.svg" 
            alt="about picture" 
            className="relative z-10 w-[200px] sm:w-[300px] drop-shadow-lg"
          />
        </figure>

        {/* TEXT SECTION */}
        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          {/* Glow */}
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-40 -top-10 -left-10"></div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            About Me
          </h1>

          <p className="text-gray-300 mb-4">
            I am a passionate frontend developer with a strong foundation in computer science.
            I specialize in creating responsive and user-friendly web applications using modern
            technologies like React.js and Tailwind CSS.
          </p>

          <p className="text-gray-300">
            With a keen eye for design and a commitment to writing clean, maintainable code,
            I strive to deliver exceptional user experiences.
          </p>

          <button className="inline-flex text-white border-2 border-purple-500 py-2 px-6 rounded-full text-lg hover:bg-purple-700 transition-all duration-300 mt-6">
            Learn More
          </button>
        </article>

      </div>
    </section>
  );
}