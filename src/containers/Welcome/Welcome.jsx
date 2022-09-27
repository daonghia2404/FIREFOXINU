import React, { useEffect } from 'react';
import Parallax from 'parallax-js';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Logo from '@/assets/images/logo.svg';
import BgWelcome from '@/assets/images/bg-welcome.png';
import ImageWelcome from '@/assets/images/image-welcome-person.png';
import ImageWelcomeBall from '@/assets/images/image-welcome-ball.png';

import './Welcome.scss';

const Welcome = () => {
  const configBackground = () => {
    const scence = document.querySelectorAll('.scence');

    scence.forEach((item) => {
      const parallax = new Parallax(item, {
        relativeInput: true,
      });
    });
  };

  useEffect(() => {
    configBackground();
  }, []);

  return (
    <section className="Welcome" id="welcome">
      <div className="Welcome-bg">
        <img src={BgWelcome} alt="" />
      </div>
      <div className="container">
        <div className="Welcome-wrapper flex items-center justify-between flex-wrap">
          <div className="Welcome-wrapper-item">
            <AnimationOnScroll animateIn="animate__slideInLeft">
              <div className="Welcome-logo flex items-center">
                <img src={Logo} alt="" />
                <span className="bebas-neue-font">
                  FIREFOX
                  <br />
                  SPORT
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInLeft">
              <div className="Welcome-title bebas-neue-font">be more than a fan</div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__slideInLeft">
              <div className="Welcome-description">
                FIREFOX SPORT is the only World Cup mascot, launched to serve the global community of football fans. A
                new crypto-currency has been created by football fans. FIREFOX SPORT holders enjoy these benefits:
                <br />
                FIREFOX SPORT token holders will automatically receive 5% of each transaction, The main purpose of
                FIREFOX SPORT is to build a community of football fans and a betting platform on mobile applications.
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp">
              <div className="Welcome-btns flex">
                <a href="#" className="Welcome-btn">
                  GET THE APP
                </a>
                <a href="#" className="Welcome-btn">
                  BUY ON PANCAKE
                </a>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="Welcome-wrapper-item">
            <div className="scence">
              <div className="Welcome-image" data-depth="0.2">
                <img src={ImageWelcome} alt="" />
              </div>

              <div className="Welcome-image-ball" data-depth="1">
                <img src={ImageWelcomeBall} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
