import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { dataFirefoxSportBacker } from './FirefoxSportBacker.data';
import './FirefoxSportBacker.scss';

const FirefoxSportBacker = () => {
  return (
    <section className="FirefoxSportBacker" id="partner">
      <div className="container">
        <div className="FirefoxSportBacker-wrapper">
          <div className="FirefoxSportBacker-header">
            <AnimationOnScroll animateIn="animate__slideInDown">
              <div className="FirefoxSportBacker-title bebas-neue-font">FIREFOX ESPORT BACKER</div>
            </AnimationOnScroll>
          </div>
          <div className="FirefoxSportBacker-images flex flex-wrap items-center justify-center">
            {dataFirefoxSportBacker.map((item, index) => (
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={100 * index}>
                <div className="FirefoxSportBacker-images-item">
                  <img src={item} alt="" />
                </div>
              </AnimationOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirefoxSportBacker;
