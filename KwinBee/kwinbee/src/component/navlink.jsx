import React, { useEffect, useState } from 'react';
import './navlink.css';
import icon from './logo kwinbee.png';

const Navbar = () => {
  const [backgroundColor, setBackgroundColor] = useState('rgba(0, 0, 0,0.9)');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Change the background color based on scroll position
      if (scrollY > 1000) {
        setBackgroundColor('#fcab26');
      } else {
        setBackgroundColor('rgba(0, 0, 0,0.9)');
      }
      setScrollPosition(scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="change" style={{ backgroundColor }}>
      <div className="logo">
        <img src={icon} alt="Kwinbee Logo" />
        <div className="poppins">KWINBEE</div>
      </div>

      <nav>
        <ul className="nav-links" id="navLinks">
          <li><a href="#packages123" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Course Quests</a></li>
          <li><a href="#achievers" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Gallery</a></li>
          <li><a href="aboutus.html" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>About us</a></li>
          <li><a href="https://blog.kwinbee.com" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Chess Blogs</a></li>
          <li><a href="#reviews" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Reviews</a></li>
          <li><a href="contact.html" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Contact Us</a></li>
        </ul>
        <div className="toggle-button">
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>

      <div className="dropdown_menu">
        <li><a href="#packages123" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Course Quests</a></li>
        <li><a href="#achievers" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Gallery</a></li>
        <li><a href="aboutus.html" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>About us</a></li>
        <li><a href="https://blog.kwinbee.com" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Chess Blogs</a></li>
        <li><a href="#reviews" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Reviews</a></li>
        <li><a href="contact.html" className={scrollPosition > 1000 ? "hover-color2" : "hover-color1"}>Contact Us</a></li>
      </div>
    </header>
  );
};

export default Navbar;
