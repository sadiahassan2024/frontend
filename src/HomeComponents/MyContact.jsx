import React from "react";
import { motion } from "framer-motion";
import "./MyContact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const MyContact = () => {
  return (
    <div className="contact-container">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-heading"
      >
        Get In <span>Touch</span>
      </motion.h2>

      {/* Contact Info Cards */}
      <div className="contact-info">
        <motion.div
          className="info-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaMapMarkerAlt className="info-icon" />
          <p>123 Fitness Street, Gym City</p>
        </motion.div>
        <motion.div
          className="info-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <FaPhoneAlt className="info-icon" />
          <p>+92 300 1234567</p>
        </motion.div>
        <motion.div
          className="info-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaEnvelope className="info-icon" />
          <p>info@gymexample.com</p>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="contact-form"
      >
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input type="email" placeholder="Your Email" className="contact-input" />
        <textarea placeholder="Your Message" className="contact-textarea"></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="contact-button"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Media Links */}
      <div className="social-icons">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
      </div>
    </div>
  );
};

export default MyContact;
