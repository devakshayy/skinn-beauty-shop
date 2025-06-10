"use client";
import {
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">S</span>
                </div>
                <h3 className="text-xl font-bold">Skinn</h3>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Your digital gallery for discovering premium beauty products and
                staying inspired.
              </p>
              <div className="flex space-x-3">
                <div className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors cursor-pointer">
                  <a href="https://www.instagram.com/skinn.cos_?igsh=MW5kNWEyYmxvM2t1cw==">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
                <div className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors cursor-pointer">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors cursor-pointer">
                  <Twitter className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#categories"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Categories
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    Skincare
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    Makeup
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    Fragrance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    Hair Care
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Stay Inspired
              </h4>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Get beauty inspiration and product spotlights delivered to your
                inbox.
              </p>
              <div className="space-y-3">
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-500 text-white placeholder-gray-400 text-sm mb-2"
                  />
                  <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-700 transition-all text-sm">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  Beauty tips and inspiration only. No spam.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-gray-400 text-xs">
                &copy; 2025 Skinn. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4 text-xs">
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer