"use client";
import {
  Instagram,
  Facebook,
  Twitter,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 overflow-hidden">
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
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Visit Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Come explore our store in person for exclusive deals and
                  beauty demos.
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4" /> Skinn Cosmetics, Sg Palya,
                  Bengaluru.
                </a>
              </li>
              <li>
                <a
                  href="tel:+919847411551"
                  className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" /> +91 9847411551
                </a>
              </li>
              <li>
                <a
                  href="mailto:skinncosmeticsblr@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" /> skinncosmeticsblr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs">
              &copy; 2025 skinncosmetics. All rights reserved.
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
                href="#about"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
