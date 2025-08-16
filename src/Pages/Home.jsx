import React from 'react';
import Navbar from '../Components/Navbar';

import MyHome from '../HomeComponents/MyHome';
import MyAbout from '../HomeComponents/MyAbout';
import MyServices from '../HomeComponents/MyServices';
import MyBlogs from '../HomeComponents/MyBlogs'; 
import MyContact from '../HomeComponents/MyContact';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <MyHome />
      <MyAbout />
      <MyServices />
      <MyBlogs /> 
      <MyContact />
      <Footer />
    </div>
  );
};

export default Home;
