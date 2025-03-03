import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Wrench } from "lucide-react";
import './Contact.css'
const ContactSection = () => {
  return (
    <section className="contact-section">
        <div className="container">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <h2 className=" contact-title text-4xl font-extrabold text-center mb-10">Need Repairs? Call Us Anytime!</h2>
        <p className=" contact-text text-gray-400 mt-4 text-lg">
          We operate <span className="text-blue-500 font-bold">24/7</span> across Uzbekistan.  
          Our team specializes in <strong>on-site construction vehicle repairs</strong> – we come to you, no matter where you are!  
        </p>

        {/* Contact Info Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Location */}
            <div className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-md">
              <MapPin className="w-10 h-10 text-blue-500 mb-3" />
              <h3 className="text-xl font-bold">Our Location</h3>
              <p className="text-gray-400 mt-2">Tashkent, Uzbekistan</p>
            </div>

            {/* Phone Numbers */}
            <div className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-md">
              <Phone className="w-10 h-10 text-blue-500 mb-3" />
              <h3 className="text-xl font-bold">Call Us</h3>
              <p className="text-gray-400 mt-2">+998 90 136 93 34</p>
              <p className="text-gray-400">+998 93 748 91 41</p>
            </div>

            {/* Services */}
            <div className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-md sm:col-span-2">
              <Wrench className="w-10 h-10 text-blue-500 mb-3" />
              <h3 className="text-xl font-bold">We Fix It All</h3>
              <p className="text-gray-400 mt-2 text-center">
                <strong>Bulldozers, Excavators, Cranes, Loaders & More</strong> – Anywhere in Uzbekistan!
              </p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-80 overflow-hidden rounded-xl shadow-md">
            <iframe
              className="w-full h-full border-none rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.4500330984446!2d69.2400736758332!3d41.31115117126609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b172f5a6781%3A0x8f4e06dfac3c3b95!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1649882887770!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;