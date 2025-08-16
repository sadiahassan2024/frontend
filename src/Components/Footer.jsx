import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaDumbbell, FaHeartbeat } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="luxury-footer">
      {/* Floating Icons Background */}
      <motion.div
        className="floating-icon dumbbell"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <FaDumbbell />
      </motion.div>
      <motion.div
        className="floating-icon heartbeat"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <FaHeartbeat />
      </motion.div>

      {/* Left Section */}
      <div className="footer-left">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Gym<span>Master</span>
        </motion.h2>
        <p>Transform your body. Elevate your mind. Join the elite fitness experience.</p>
      </div>

      {/* Center Links */}
      <motion.ul
        className="footer-links"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <li>🏠 Home</li>
        <li>💪 Services</li>
        <li>📖 About</li>
        <li>📩 Contact</li>
      </motion.ul>

      {/* Right Social */}
      <motion.div
        className="footer-social"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p>© {new Date().getFullYear()} GymMaster | Designed for Legends</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
