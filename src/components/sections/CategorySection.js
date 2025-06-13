import React from 'react'
import { categories } from '@/lib/data';

const CategorySection = () => {
  return (
<section id="categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Discover our curated collections
            </p>
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default CategorySection