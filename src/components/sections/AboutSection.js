import React from 'react'

const AboutSection = () => {
  return (
     <section
        id="about"
        className="py-20 bg-gradient-to-r from-teal-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About Skinn
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Skinn is your digital showcase for discovering the world&apos;s
                finest beauty products. We curate and present premium skincare,
                cosmetics, and beauty essentials from renowned brands.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our platform serves as an inspiration gallery where beauty
                enthusiasts can explore, discover trends, and learn about the
                latest innovations in the beauty industry.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-teal-600">500+</div>
                  <div className="text-sm text-gray-600">Products Featured</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">50+</div>
                  <div className="text-sm text-gray-600">Premium Brands</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">24/7</div>
                  <div className="text-sm text-gray-600">Browse Anytime</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop"
                alt="Beauty products showcase"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection