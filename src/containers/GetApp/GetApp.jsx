import React, { useEffect } from 'react';
import Parallax from 'parallax-js';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import BgGetApp from '@/assets/images/bg-get-app.png';
import ImageGetApp from '@/assets/images/image-get-app.png';

import './GetApp.scss';

const GetApp = () => {
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
    <div className="GetApp">
      <div className="GetApp-bg">
        <img src={BgGetApp} alt="" />
      </div>
      <div className="container">
        <div className="GetApp-wrapper flex items-center justify-between">
          <div className="GetApp-wrapper-item">
            <AnimationOnScroll animateIn="animate__slideInLeft">
              <div className="GetApp-title bebas-neue-font">
                <span className="bebas-neue-font">Influence</span>, Play & Win
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInLeft">
              <div className="GetApp-description">It’s what we do</div>
              <div className="GetApp-description">It’s what he does</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <a href="#" className="GetApp-btn">
                GET THE APP
              </a>
            </AnimationOnScroll>
          </div>
          <div className="GetApp-wrapper-item">
            <div className="scence">
              <div className="GetApp-image" data-depth="0.2">
                <img src={ImageGetApp} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
