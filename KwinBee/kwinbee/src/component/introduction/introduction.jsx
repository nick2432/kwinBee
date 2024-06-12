import React, { useEffect, useState } from 'react';
import './introduction.css';
import { useSpring, animated } from 'react-spring';
import Scene from './chesspices'; // Make sure the path is correct
import backimage from './chesstransback.png';

const Counter = ({ number, onAnimationEnd }) => {
  const props = useSpring({
    from: { count: 0 },
    to: { count: number },
    config: { duration: 2000 },
    onRest: onAnimationEnd, // Call onAnimationEnd when animation finishes
  });

  return (
    <animated.span className="animated-number">
      {props.count.interpolate(value => `${Math.floor(value)}+`)}
    </animated.span>
  );
};

const Introduction = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationComplete, setAnimationComplete] = useState(false); // New state for tracking animation completion

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const redirectToWebsite = () => {
    window.location.href = "https://wa.link/weua1t";
  };

  const [students, setStudents] = useState(4000);
  const [mentors, setMentors] = useState(50);
  const [yearsOfExperience, setYearsOfExperience] = useState(10);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Callback function to set the animation as complete
  const handleAnimationEnd = () => {
    setAnimationComplete(true);
  };

  return (
    <main>
      <section id="introduction">
        <div id="herocol">
          <div className="intro-text poppins-bold-italic">
            <h1>Every Pawn Has <br /> the Potential To<br /> Be A Queen.</h1>
            <p>Kwinbee, the chess world’s wake up<br /> call rooster, Brings you the best chess tutor!</p>
          </div>

          {/* Render empbox or the 3D scene based on animationComplete state */}
          {!animationComplete ? (
            <div className='empbox'>
              <p>Loading...</p>
            </div>
          ) : (
            <Scene mousePosition={mousePosition} /> // Render the 3D scene
          )}

          <div className="bookme poppins-bold-italic">
            <h1>Book A FREE <br />DEMO NOW</h1><br />
            <p>AND <strong>REFER</strong> TO GET <strong>DISCOUNT</strong></p><br />
            <div className="bookme-button" onClick={redirectToWebsite}>
              <a href="https://wa.link/weua1t" target="_blank" rel="noopener noreferrer">
                <strong>BOOK A DEMO!</strong>
              </a>
            </div>
          </div>
        </div>

        <div className="stat" id="stats">
          <div className="stat-item">
            <Counter number={students} onAnimationEnd={handleAnimationEnd} />
            <p>Students</p>
          </div>
          <div className="stat-item">
            <Counter number={mentors} onAnimationEnd={handleAnimationEnd} />
            <p>Mentors</p>
          </div>
          <div className="stat-item">
            <Counter number={yearsOfExperience} onAnimationEnd={handleAnimationEnd} />
            <p>Years of Experience</p>
          </div>
        </div>

        <div id="overlay">
          <img src={backimage} />
        </div>
      </section>
    </main>
  );
};

export default Introduction;
