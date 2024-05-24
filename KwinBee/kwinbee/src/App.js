import './App.css';
import React, { useEffect, useState } from 'react';
import NavLink from './component/navlink/navlink';
import Introduction from './component/interoduction/introduction';
import ReasonsComponent from './component/reason/reason';
import CourseSection from './component/cource/course';
import AchieversSection from './component/achivers/achive';
import MentorSection from './component/mentorsection/mentorsection';
import ReviewsSection from './component/review/review';
import Footer from './component/footer/footer';
import WHATSAPP from './component/whatsapp-400.png'; // Import the WhatsApp image

function App() {
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Adjust the condition to your needs, e.g., when scrolling down 1000px
      if (scrollY > 1000) {
        setDisplay('flex');
      } else {
        setDisplay('none');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <NavLink />
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

export default App;
