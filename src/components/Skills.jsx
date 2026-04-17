import React from 'react';

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-black text-white min-h-screen py-16 px-4"
    >
      
      {/* Heading */}
      <h1
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
        data-aos="fade-up"
      >
        My <span className="text-purple-500">Skills</span>
      </h1>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Programming Languages */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="0"
          className="bg-[#111] rounded-2xl p-6 shadow-md hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
        >
          <div className="text-center text-4xl mb-3">💻</div>
          <h2 className="text-center mb-6">Programming Languages</h2>

          <div className="space-y-4">
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">Python</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">JavaScript</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">C</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">Java (Basics)</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">SQL</div>
          </div>
        </div>

        {/* Frontend */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="150"
          className="bg-[#111] rounded-2xl p-6 shadow-md hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
        >
          <div className="text-center text-4xl mb-3">📱</div>
          <h2 className="text-center mb-6">Frontend Development</h2>

          <div className="space-y-4">
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">React.js</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">Redux Toolkit</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">Tailwind CSS</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">HTML</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">CSS</div>
          </div>
        </div>

        {/* Backend */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          className="bg-[#111] rounded-2xl p-6 shadow-md hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
        >
          <div className="text-center text-4xl mb-3">🗄️</div>
          <h2 className="text-center mb-6">Backend Development</h2>

          <div className="space-y-4">
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">Node.js</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">Express.js</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">REST APIs</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">MongoDB</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">MySQL</div>
          </div>
        </div>

        {/* AI/ML */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="450"
          className="bg-[#111] rounded-2xl p-6 shadow-md hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
        >
          <div className="text-center text-4xl mb-3">🧠</div>
          <h2 className="text-center mb-6">AI / ML</h2>

          <div className="space-y-4">
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">NumPy</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">NLP</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">Image Processing</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">Keras</div>
            <div className="bg-purple-900/30 text-purple-300 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition">TensorFlow</div>
          </div>
        </div>

      </div>
    </section>
  );
}