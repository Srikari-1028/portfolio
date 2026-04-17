import React from 'react'

const ProjectCard = ({ image, title }) => {
  return (
    <article className="relative w-full max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div 
        className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"
      ></div>

      <div className="relative z-10">
        <figure className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
          />
          
        </figure>

        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl nb-2">{title}</h3>
          </header>
        </div>
      </div>
    </article>
  )
}


const Projects = () => {
  const listProjects = [
    {
       image: "/work2.jpg",
      title: "Full-Stack MERN E-Commerce Platform "
    },
    {

      image: "/work4.jpeg",
      title: "Segmentation Of Microwave Brain images for stroke Identification"
    },
    {
      image: "/work1.jpeg",
      title: "Influence of AI in Smart Cities"
    },
    {
       image: "/work3.jpeg",
      title: "Credit Card Fraud Detection Based on Transaction Behaviour"
    }
    
  ];

  return (
    <section id="projects" className="scroll bg-black text-white min-h-screen py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My <span className="text-purple-500">Projects</span>
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
  {listProjects.map((project, index) => (
    <div
  key={index}
  className="w-full flex justify-center"
  data-aos={index < 2 ? "fade-right" : "fade-left"}
  data-aos-duration="1000"
>
  <ProjectCard {...project} />
</div>
  ))}
</div>
    </section>
  );
}

export default Projects;