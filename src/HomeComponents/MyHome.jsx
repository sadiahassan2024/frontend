import React from 'react';
import { motion } from 'framer-motion';
import './MyHome.css';

const MyHome = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  const features = [
    {
      icon: "🏋️‍♂️",
      title: "Member Management",
      description: "Complete member registration, tracking, and profile management system with automated notifications and renewals."
    },
    {
      icon: "📅",
      title: "Class Scheduling",
      description: "Easy-to-use class booking system with real-time availability, instructor assignments, and automated reminders."
    },
    {
      icon: "💳",
      title: "Payment Processing",
      description: "Secure payment gateway integration with subscription management, invoice generation, and financial reporting."
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Comprehensive insights into member activity, revenue trends, popular classes, and business performance metrics."
    },
    {
      icon: "🎯",
      title: "Workout Tracking",
      description: "Personal training logs, progress tracking, goal setting, and performance analytics for every member."
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description: "Automated SMS and email notifications for renewals, class reminders, and important announcements."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Gym Owner",
      image: "👩‍💼",
      review: "This system transformed our gym operations! Member management is now effortless, and our revenue has increased by 40%.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Fitness Manager",
      image: "👨‍💪",
      review: "The scheduling system is fantastic. Our members love the easy booking process, and we've reduced no-shows by 60%.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Personal Trainer",
      image: "👩‍🏫",
      review: "Tracking client progress has never been easier. The analytics help me provide better training programs for each member.",
      rating: 5
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Members", icon: "👥" },
    { number: "500+", label: "Gyms Using", icon: "🏢" },
    { number: "99.9%", label: "Uptime", icon: "⚡" },
    { number: "24/7", label: "Support", icon: "🛟" }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <motion.div variants={itemVariants}>
                <h1 className="hero-title">
                  <span className="gradient-text">Transform</span> Your Gym 
                  <br />with Smart Management
                </h1>
                <p className="hero-description">
                  Streamline operations, boost member satisfaction, and maximize revenue 
                  with our comprehensive gym management system. Everything you need in one platform.
                </p>
                <div className="hero-buttons">
                  <motion.button 
                    className="btn hero-btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Free Trial
                  </motion.button>
                  <motion.button 
                    className="btn hero-btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Watch Demo
                  </motion.button>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div 
                className="hero-image"
                variants={itemVariants}
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="hero-card">
                  <div className="dashboard-preview">
                    <div className="dashboard-header">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="dashboard-content">
                      <h3>Gym Dashboard</h3>
                      <div className="mini-stats">
                        <div className="mini-stat">
                          <span>Active Members</span>
                          <strong>2,847</strong>
                        </div>
                        <div className="mini-stat">
                          <span>Today's Check-ins</span>
                          <strong>156</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="stats-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <motion.div 
                  className="stat-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="features-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="section-title">
              Powerful Features for <span className="gradient-text">Modern Gyms</span>
            </h2>
            <p className="section-description">
              Everything you need to manage your gym efficiently and grow your business
            </p>
          </motion.div>
          
          <div className="row">
            {features.map((feature, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <motion.div 
                  className="feature-card"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="testimonials-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div className="text-center mb-5" variants={itemVariants}>
            <h2 className="section-title">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="section-description">
              Join thousands of satisfied gym owners who trust our platform
            </p>
          </motion.div>
          
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <motion.div 
                  className="testimonial-card"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">{testimonial.image}</div>
                    <div className="testimonial-info">
                      <h5 className="testimonial-name">{testimonial.name}</h5>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                  <p className="testimonial-review">"{testimonial.review}"</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <motion.div variants={itemVariants}>
                <h2 className="cta-title">
                  Ready to <span className="gradient-text">Revolutionize</span> Your Gym?
                </h2>
                <p className="cta-description">
                  Join thousands of gym owners who have transformed their business with our platform. 
                  Start your free trial today - no credit card required.
                </p>
                <div className="cta-buttons">
                  <motion.button 
                    className="btn cta-btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your Free Trial
                  </motion.button>
                  <motion.button 
                    className="btn cta-btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule a Demo
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MyHome;