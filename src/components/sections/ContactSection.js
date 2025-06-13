import { Mail, Phone, MapPin } from "lucide-react";
import OrderEnquiryForm from "../ui/OrderEnquiryForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600">
            Questions about our featured products?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Location Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
            <MapPin className="w-12 h-12 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Location
            </h3>

            <div className="w-full flex justify-center mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.6300854776814!2d77.60481647507576!3d12.931480387380223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU1JzUzLjMiTiA3N8KwMzYnMjYuNiJF!5e0!3m2!1sen!2sin!4v1749571137192!5m2!1sen!2sin"
                width="100%"
                height="80"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Skinn Cosmetics, Sg Palya
              <br />
              Bengaluru, Karnataka 560029
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
            <Phone className="w-12 h-12 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Contact Info
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              <a href="tel:+919847411551" className="hover:underline">
                +91 984 741 1551
              </a>
              <br />
              Mon–Sun: 10AM–6PM
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
            <Mail className="w-12 h-12 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Email Us
            </h3>
            <a
              href="mailto:skinncosmeticsblr@gmail.com"
              className="text-gray-600 text-sm leading-relaxed break-all hover:underline"
            >
              skinncosmeticsblr@gmail.com
            </a>
          </div>
        </div>
        {/* Form Card */}
        <OrderEnquiryForm />
      </div>
    </section>
  );
};

export default ContactSection;
