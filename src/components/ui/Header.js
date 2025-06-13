'use client'
import {
  Search,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
     <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="w-[80px] h-[60px]  flex items-center justify-center">
              <a href="#">
                <img
                  src="/skinnlogo.png"
                  alt="logo"
                  className="w-full h-full"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#categories"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Categories
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 text-gray-600 hover:text-teal-600 cursor-pointer transition-colors" />
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600 hover:text-teal-600 cursor-pointer transition-colors" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600 hover:text-teal-600 cursor-pointer transition-colors" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a
                href="#home"
                className="block py-2 text-gray-700 hover:text-teal-600"
              >
                Home
              </a>
              <a
                href="#gallery"
                className="block py-2 text-gray-700 hover:text-teal-600"
              >
                Gallery
              </a>
              <a
                href="#categories"
                className="block py-2 text-gray-700 hover:text-teal-600"
              >
                Categories
              </a>
              <a
                href="#about"
                className="block py-2 text-gray-700 hover:text-teal-600"
              >
                About
              </a>
              <a
                href="#contact"
                className="block py-2 text-gray-700 hover:text-teal-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
  )
}

export default Header