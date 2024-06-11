import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavLink from './component/navlink/navlink';
import Introduction from './component/introduction/introduction';
import ReasonsComponent from './component/reason/reason';
import CourseSection from './component/course/course';
import AchieversSection from './component/achievers/achieve';
import MentorSection from './component/mentorsection/mentorsection';
import ReviewsSection from './component/review/review';
import Footer from './component/footer/footer';
import WHATSAPP from './component/whatsapp-400.png';
import Blog from './component/blog/blog';
import Coach from './component/coach/coach';
import BlogPost from './component/blog/readmore';
import MoreStudents from './component/achievers/morestudents'; // Import the MoreStudents component

function Home() {
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 1000) {
        setDisplay('flex');
      } else {
        setDisplay('none');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Introduction />
      <ReasonsComponent />
      <CourseSection />
      <AchieversSection />
      <MentorSection />
      <ReviewsSection />
      <Footer />
      <div className="contact-button" style={{ display: display }}>
        <a href="https://wa.link/weua1t" target="_blank" rel="noopener noreferrer">
          <img src={WHATSAPP} alt="WhatsApp Logo for WhatsApp button" />
          <strong>BOOK A DEMO</strong>
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <NavLink />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/more-students" element={<MoreStudents />} /> {/* New Route for More Students */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
