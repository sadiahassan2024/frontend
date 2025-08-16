import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav
      className={`navbar navbar-expand-lg custom-navbar ${isScrolled ? 'scrolled' : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-fluid">
        <motion.div
          className="navbar-brand custom-brand"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{
              textShadow: [
                '0 0 5px rgba(255,255,255,0.8)',
                '0 0 10px rgba(255,255,255,0.6)',
                '0 0 5px rgba(255,255,255,0.8)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            MyBrand
          </motion.span>
        </motion.div>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <motion.li className="nav-item" variants={linkVariants} whileHover="hover" whileTap="tap">
              <Link className="nav-link custom-nav-link active" to="/">
                <motion.span animate={{ x: [0, 2, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  Home
                </motion.span>
              </Link>
            </motion.li>

            <motion.li className="nav-item" variants={linkVariants} whileHover="hover" whileTap="tap">
              <Link className="nav-link custom-nav-link" to="/about">
                <motion.span animate={{ x: [0, -2, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
                  About
                </motion.span>
              </Link>
            </motion.li>

            <motion.li className="nav-item" variants={linkVariants} whileHover="hover" whileTap="tap">
              <Link className="nav-link custom-nav-link" to="/services">
                <motion.span animate={{ y: [0, -2, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                  Services
                </motion.span>
              </Link>
            </motion.li>

            <motion.li className="nav-item" variants={linkVariants} whileHover="hover" whileTap="tap">
              <Link className="nav-link custom-nav-link" to="/blogs">
                <motion.span animate={{ rotate: [0, 1, -1, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
                  Blogs
                </motion.span>
              </Link>
            </motion.li>

            <motion.li className="nav-item" variants={linkVariants} whileHover="hover" whileTap="tap">
              <Link className="nav-link custom-nav-link" to="/contact">
                <motion.span animate={{ rotate: [0, 1, -1, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                  Contact
                </motion.span>
              </Link>
            </motion.li>
          </ul>

          <motion.form
            className="d-flex custom-search"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.input
              className="form-control me-2 custom-search-input"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              whileFocus={{ scale: 1.05 }}
            />
            <motion.button
              className="btn custom-search-btn"
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,255,0,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                Search
              </motion.span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
