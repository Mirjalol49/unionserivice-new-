import React from "react";
import { motion } from "framer-motion";

const ServiceAdvisorCard = ({ name, role, image }) => {
  return (
    <div className="relative max-w-sm mx-auto border border-gray-800 rounded-lg overflow-hidden bg-black text-white shadow-lg">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover grayscale"
        />
        {/* Colored Overlay on Overalls */}
        <div className="absolute top-0 left-0 w-full h-full mix-blend-color bg-blue-600 opacity-50"></div>
      </div>

      {/* Text Content */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold uppercase">{name}</h3>
        <p className="text-gray-400 text-sm tracking-wide">{role}</p>
      </div>
    </div>
  );
};

export default ServiceAdvisorCard;