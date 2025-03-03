import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ src, title, description }) => {
  return (
    <div className="relative max-w-md mx-auto sm:max-w-lg lg:max-w-xl xl:max-w-2xl border border-gray-800 rounded-lg overflow-hidden bg-black text-white">
      {/* Image Section */}
      <div className="relative">
        <img
          src={src} // ✅ Dynamically using src
          alt={title} // ✅ Use title for accessibility
          className="w-full h-100 object-cover grayscale"
        />
        {/* Colored Highlight */}
        <div className="absolute top-3 right-3 w-10 h-10 bg-blue-600 rounded-md"></div>

        {/* Hover Arrow */}
        <motion.div
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center  rounded-md cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUpRight size={20} className="text-white" />
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="p-6">
        <h3 className="text-3xl font-bold  text-white uppercase">{title}</h3> {/* ✅ Dynamic Title */}
        <p className="text-gray-300 mt-2">{description}</p> {/* ✅ Dynamic Description */}
      </div>
    </div>
  );
};

export default ServiceCard;