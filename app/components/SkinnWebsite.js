'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Star, Heart, Search, Menu, X, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const SkinnBeautyShop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Discover Your Natural Glow",
      subtitle: "Premium skincare and cosmetics for every skin type",
      bg: "bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600"
    },
    {
      title: "Luxury Beauty Essentials",
      subtitle: "Curated collection of high-end beauty products",
      bg: "bg-gradient-to-r from-rose-400 via-pink-500 to-red-500"
    },
    {
      title: "Transform Your Skincare Routine",
      subtitle: "Professional-grade products for radiant skin",
      bg: "bg-gradient-to-r from-violet-400 via-purple-500 to-purple-600"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Vitamin C Serum",
      category: "Skincare",
      price: "$45",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Hydrating Face Mask",
      category: "Treatment",
      price: "$32",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop",
      badge: "New"
    },
    {
      id: 3,
      name: "Matte Lipstick Set",
      category: "Makeup",
      price: "$28",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop",
      badge: ""
    },
    {
      id: 4,
      name: "Eye Shadow Palette",
      category: "Makeup",
      price: "$55",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop",
      badge: "Limited"
    },
    {
      id: 5,
      name: "Anti-Aging Cream",
      category: "Skincare",
      price: "$68",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop",
      badge: ""
    },
    {
      id: 6,
      name: "Foundation Stick",
      category: "Makeup",
      price: "$42",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1631214540242-e4366915c46c?w=300&h=300&fit=crop",
      badge: "New"
    }
  ];

  const categories = [
    { name: "Skincare", count: "120+ products", icon: "✨", color: "bg-gradient-to-br from-pink-100 to-pink-200" },
    { name: "Makeup", count: "85+ products", icon: "💄", color: "bg-gradient-to-br from-purple-100 to-purple-200" },
    { name: "Fragrance", count: "45+ products", icon: "🌸", color: "bg-gradient-to-br from-rose-100 to-rose-200" },
    { name: "Hair Care", count: "60+ products", icon: "💆‍♀️", color: "bg-gradient-to-br from-indigo-100 to-indigo-200" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                skinn
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-pink-600 transition-colors">Products</a>
              <a href="#categories" className="text-gray-700 hover:text-pink-600 transition-colors">Categories</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 text-gray-600 hover:text-pink-600 cursor-pointer transition-colors" />
              <Heart className="w-6 h-6 text-gray-600 hover:text-pink-600 cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingBag className="w-6 h-6 text-gray-600 hover:text-pink-600 cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-pink-600">Home</a>
              <a href="#products" className="block py-2 text-gray-700 hover:text-pink-600">Products</a>
              <a href="#categories" className="block py-2 text-gray-700 hover:text-pink-600">Categories</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-pink-600">About</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-pink-600">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 ${heroSlides[currentSlide].bg} transition-all duration-1000`}>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {heroSlides[currentSlide].title}
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {heroSlides[currentSlide].subtitle}
          </p>
          <div className="space-x-4">
            <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Discover our curated collections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Our most loved beauty essentials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-pink-500" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    </div>
                    <span className="text-xl font-bold text-pink-600">{product.price}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Skinn</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Skinn, we believe that beauty comes from confidence and self-expression. Our carefully curated collection features premium skincare and cosmetics from leading brands worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded with a passion for helping everyone discover their unique beauty, we offer personalized consultations and expert advice to help you build the perfect beauty routine.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-pink-600">500+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-600">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-600">5★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop"
                alt="Beauty products"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
              <MapPin className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Our Store</h3>
              <p className="text-gray-600">123 Beauty Lane<br />Fashion District, NY 10001</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
              <Phone className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567<br />Mon-Sat: 9AM-8PM</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
              <Mail className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">hello@skinn.beauty<br />support@skinn.beauty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">S</span>
                </div>
                <h3 className="text-xl font-bold">skinn</h3>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Your destination for premium beauty and skincare products that enhance your natural glow.
              </p>
              <div className="flex space-x-3">
                <div className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors cursor-pointer">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors cursor-pointer">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors cursor-pointer">
                  <Twitter className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">Home</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">Products</a></li>
                <li><a href="#categories" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">Categories</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Customer Care</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">Size Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">Track Order</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Subscribe for beauty tips and exclusive offers.
              </p>
              <div className="space-y-3">
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500 text-white placeholder-gray-400 text-sm mb-2"
                  />
                  <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all text-sm">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-gray-400 text-xs">
                &copy; 2025 Skinn Beauty Shop. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4 text-xs">
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkinnBeautyShop;