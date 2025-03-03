import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import './Footer.css'
import Logo from '../../images/logo.svg'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Brand Name & Slogan */}
        <div>
        <a href='/' className='logo-footer'><img src={Logo} alt='logo' /></a>
          <p className="text-gray-400 mt-2 text-sm">
            Reliable construction vehicle repairs, anywhere in Uzbekistan.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* Telegram Contact */}
        <a
          href="https://t.me/mirjalol_shamsiddinov"
          className=" footer-telegram flex items-center gap-2 text-blue-500 hover:text-blue-400 transition text-lg font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send className="w-5 h-5" />
          Telegram
        </a>
      </motion.div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} AutoFix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;