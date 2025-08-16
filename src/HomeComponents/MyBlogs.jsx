import React from "react";
import "./MyBlogs.css";
import { FaLaptopCode, FaPalette, FaRocket } from "react-icons/fa";

const MyBlogs = () => {
  const blogs = [
    {
      title: "The Future of Web Development",
      date: "12 Aug 2025",
      author: "Sadia Hassan",
      icon: <FaLaptopCode />,
      description:
        "Explore the upcoming trends in web development, including AI-driven design, edge computing, and immersive 3D interfaces."
    },
    {
      title: "Design Tips for a Stunning UI",
      date: "05 Aug 2025",
      author: "Creative Studio",
      icon: <FaPalette />,
      description:
        "Learn the top 10 design practices to create interfaces that are both visually appealing and highly functional."
    },
    {
      title: "Boosting Website Performance",
      date: "28 Jul 2025",
      author: "Tech Insights",
      icon: <FaRocket />,
      description:
        "Discover practical tips for optimizing your website speed and enhancing the user experience for all visitors."
    }
  ];

  return (
    <section className="blogs-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="blogs-heading">Latest Insights</h2>
          <p className="blogs-subtitle">
            Fresh perspectives and tips from the world of technology.
          </p>
        </div>
        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="blog-card">
                <div className="blog-icon">{blog.icon}</div>
                <div className="blog-date">{blog.date}</div>
                <h5 className="blog-title">{blog.title}</h5>
                <p className="blog-meta">By {blog.author}</p>
                <p className="blog-desc">{blog.description}</p>
                <a href="#" className="read-more">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyBlogs;
