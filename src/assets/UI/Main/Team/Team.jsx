import React from "react";
import { motion } from "framer-motion";
import Team1 from "../../../images/team1.jpg";
import Team2 from "../../../images/team2.jpg";
import Team3 from "../../../images/team3.jpg";
import './Team.css';
// Team Member Card Component
const TeamMemberCard = ({ image, name, role }) => {
  return (
    <div className="relative max-w-xs mx-auto text-center">
      {/* Image Section */}
      <div className="relative overflow-hidden border border-gray-800 rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-96 object-cover"
        />
     
      </div>

      {/* Name & Role */}
      <h3 className="mt-4 text-2xl font-extrabold uppercase text-white">
        {name}
      </h3>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  );
};

// Main Team Section Component (Hardcoded)
const TeamSection = () => {
  return (
    <section className=" team-section bg-black py-16 text-center">
      {/* Section Title */}
      <p className="text-blue-500 uppercase font-bold tracking-wider">
        Our Team
      </p>
      <h2 className="text-white text-5xl font-extrabold mt-2">
        Meet Our Amazing Team
      </h2>
      <h2 className=" team-title text-white text-5xl font-extrabold">
        Team of Mechanics
      </h2>

      {/* Team Members Grid (Hardcoded) */}
      <div className="flex flex-wrap justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TeamMemberCard image={Team1} name="John Carter" role="Mechanic" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TeamMemberCard image={Team2} name="Sam Houston" role="Service Advisor" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TeamMemberCard image={Team3} name="Peter More" role="Auto Technician" />
        </motion.div>
      </div>

      {/* Join Our Team Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="team-button px-6 py-3 border border-white text-white text-lg font-bold uppercase rounded-md hover:bg-white hover:text-black transition"
      >
        Join Our Team
      </motion.button>
    </section>
  );
};

export default TeamSection;