import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Fixed typo: Fix -> FiX

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'About', link: '#about' },
    { id: 3, name: 'Skills', link: '#skills' },
    { id: 4, name: 'My projects', link: '#projects' }, 
    { id: 5, name: 'Contact', link: '#contact' }
  ];

  return (
    <header className='fixed top-0 left-0 w-full z-20 text-white' data-aos='fade-up' data-aos-delay='300'>
      <div className='container mx-auto flex items-center justify-between p-5'>
        {/* LOGO */}
        <a href="#home" className='text-4xl font-bold italic text-white'>
          Portfolio
        </a>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center space-x-7'>
          {NavbarLinks.map((link) => (
            <a key={link.id} href={link.link} className='hover:text-gray-200 text-lg'>
              {link.name}
            </a>
          ))}
          
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button className='md:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
          <FiMenu className='w-8 h-8 text-white' />
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 w-full h-screen bg-[#801b9c] flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden`}
      >
        {/* Close Button */}
        <button className="absolute top-5 right-5 text-white" onClick={() => setIsOpen(false)}>
          <FiX className="w-10 h-10" />
        </button>

        {/* Mobile Navigation Links */}
        {NavbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="text-2xl text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        {/* Mobile Contact Button 
        <button 
          className="inline-flex text-white border-2 py-2 px-10 focus:outline-none hover:bg-purple-800 rounded-full text-xl"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </button>*/}
      </div>
    </header>
  );
}
