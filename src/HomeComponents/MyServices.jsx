import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaRunning, FaAppleAlt, FaHeartbeat } from "react-icons/fa";
import "./MyServices.css";

const servicesData = [
  {
    icon: <FaDumbbell />,
    title: "Strength Training",
    description: "Build muscle and power with our expert-led strength training programs."
  },
  {
    icon: <FaRunning />,
    title: "Cardio Workouts",
    description: "Boost stamina and burn calories with our variety of cardio sessions."
  },
  {
    icon: <FaAppleAlt />,
    title: "Nutrition Guidance",
    description: "Personalized diet plans to help you achieve your fitness goals faster."
  },
  {
    icon: <FaHeartbeat />,
    title: "Wellness & Recovery",
    description: "Post-workout therapy, stretching, and recovery programs for a healthy body."
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <motion.h2
        className="services-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our <span>Services</span>
      </motion.h2>

      <motion.p
        className="services-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Experience premium training and wellness solutions designed for champions.
      </motion.p>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
