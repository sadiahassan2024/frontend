import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div style={styles.container}>
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.heading}
      >
        About <span style={{ color: "#ff4040" }}>Our Gym</span>
      </motion.h2>

      {/* Animated Description */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={styles.text}
      >
        At <strong>PowerHouse Fitness</strong>, we believe fitness is more than just a workout — it’s a lifestyle. 
        Our gym offers modern equipment, experienced trainers, and a motivating atmosphere to help 
        you reach your goals. Whether you’re into strength training, cardio, or group classes, 
        we’ve got everything you need to transform your body and mind.
      </motion.p>

      {/* Animated Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77"
        alt="Gym Interior"
        style={styles.image}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
};

// Inline styles for quick integration
const styles = {
  container: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "linear-gradient(135deg, black, #8b0000)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  text: {
    maxWidth: "800px",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "40px",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
  },
};

export default About;
