import React, { useEffect, useState } from "react";

const OrderEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailjsLoaded, setEmailjsLoaded] = useState(false);

  // EmailJS config
  const EMAILJS_CONFIG = {
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }

    if (!emailjsLoaded || !window.emailjs) {
      setStatus("Form not ready. Please try again shortly.");
      return;
    }

    setIsLoading(true);
    setStatus("");

    try {
      const emailjs = window.emailjs;
      await emailjs.init(EMAILJS_CONFIG.publicKey);

      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone || "Not provided",
          customer_message: formData.message,
          to_email: "skinncosmeticsblr@gmail.com",
          subject: "New Customer Enquiry",
        }
      );

      if (result.status === 200 || result.text === "OK") {
        setStatus("Thank you! Your enquiry has been sent successfully.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/emailjs-com@3.2.0/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      setEmailjsLoaded(true);
      window.emailjs?.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-16 grid grid-cols-1">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        {/* Top Header */}
        <div className="text-center mb-10">
          <h4 className="text-2xl font-semibold mb-3 text-gray-800">
            Get In Touch
          </h4>
          <p className="text-gray-600">
            Interested in our beauty products? Fill out the form below and we'll
            get back to you.
          </p>
        </div>

        {/* Form */}
        <form
          className="space-y-6 md:space-y-0 md:flex md:gap-8"
          onSubmit={handleSubmit}
        >
          {/* Left side inputs */}
          <div className="md:w-1/2 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:ring-1 focus:outline-none focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:ring-1 focus:outline-none focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:ring-1 focus:outline-none focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="Optional"
              />
            </div>
          </div>

          {/* Right side message and button */}
          <div className="md:w-1/2 flex flex-col justify-between space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 h-25 sm:h-43 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:ring-1 focus:outline-none focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                rows="5"
                placeholder="Your enquiry or message..."
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading || !emailjsLoaded}
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 px-6 rounded-lg font-semibold text-white transition-all transform hover:scale-102 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? "Sending..." : "Send Enquiry"}
              </button>

              {status && (
                <div
                  className={`text-sm mt-4 p-4 rounded-lg border ${
                    status.toLowerCase().includes("thank") ||
                    status.toLowerCase().includes("success")
                      ? "text-green-700 bg-green-50 border-green-200"
                      : "text-red-700 bg-red-50 border-red-200"
                  }`}
                >
                  {status}
                </div>
              )}
            </div>
          </div>
        </form>

        {/* Bottom Note */}
        <p className="text-xs text-gray-500 text-center mt-10">
          We typically respond within 24 hours. All enquiries are confidential.
        </p>
      </div>
    </div>
  );
};

export default OrderEnquiryForm;
