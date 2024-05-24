import React, { useEffect, useState } from 'react';
import './introduction.css'; // Create and import a CSS file for styling the introduction
import { useSpring, animated } from 'react-spring';
import chessQueenImage from './chessqueen.png'; // Update the path accordingly
import chessback from './chesstransback.png'; // Update the path accordingly
const Counter = ({ number }) => {
  
  const props = useSpring({
    from: { count: 0 },
    to: { count: number },
    config: { duration: 2000 }, // Animation duration in milliseconds
  });

  return (
    <animated.span>
      {props.count.interpolate(value => Math.floor(value))}
    </animated.span>
  );
};
const Introduction = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const redirectToWebsite = () => {
    window.location.href = "https://wa.link/weua1t";
  };

  return (
    <main>
      <section id="introduction">
        <div id="herocol">
          <div className="intro-text poppins-bold-italic">
            <h1>Every Pawn Has <br /> the Potential To<br /> Be A Queen.</h1>
            <p>Kwinbee, the chess world’s wake up<br /> call rooster, Brings you the best chess tutor!</p>
          </div>
          <div id="chesspiece">
            <img src={chessQueenImage} alt="Chess Queen" className="animated-image" />
          </div>

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
          <div className="content-box">
            <div className="containerst">
              <div className="row text-center">
                <div className="col-md-3">
                  <div className="stat-items">
                    <h2><span className="counter text-center"><Counter number ={4000} /></span><span>+</span></h2>
                    <p>Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-box">
            <div className="containerst">
              <div className="row text-center">
                <div className="col-md-3">
                  <div className="stat-items">
                    <h2><span className="counter text-center"><Counter number ={50} /></span><span>+</span></h2>
                    <p>Mentors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-box">
            <div className="containerst">
              <div className="row text-center">
                <div className="col-md-3">
                  <div className="stat-items">
                    <h2><span className="counter text-center"><Counter number ={10} /></span><span>+</span></h2>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlaying image */}
        <div id="overlay">
          <img src={chessback} alt="Background" />
        </div>
      </section>
    </main>
  );
};

export default Introduction;
