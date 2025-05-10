'use client';

import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#hero" className="text-3xl font-bold text-blue-600 font-[Playfair Display]">
          myjobb Resume AI
        </a>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-lg text-gray-800 hover:text-blue-600">Features</a>
          <a href="#how-it-works" className="text-lg text-gray-800 hover:text-blue-600">How It Works</a>
          <a href="#benefits" className="text-lg text-gray-800 hover:text-blue-600">Benefits</a>
          <a href="#testimonials" className="text-lg text-gray-800 hover:text-blue-600">Testimonials</a>
        </div>

        
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenuAlt3 className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <div className="flex flex-col items-center py-4">
          <a href="#features" className="text-lg text-gray-800 hover:text-blue-600 py-2">Features</a>
          <a href="#how-it-works" className="text-lg text-gray-800 hover:text-blue-600 py-2">How It Works</a>
          <a href="#benefits" className="text-lg text-gray-800 hover:text-blue-600 py-2">Benefits</a>
          <a href="#testimonials" className="text-lg text-gray-800 hover:text-blue-600 py-2">Testimonials</a>
        </div>
      </div>
    </nav>
  );
}
