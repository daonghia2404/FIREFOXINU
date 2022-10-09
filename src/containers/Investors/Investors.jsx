import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { dataInvestors } from './Investors.data';
import './Investors.scss';

const Investors = () => {
  return (
    <section className="Investors" id="partner">
      <div className="container">
        <div className="Investors-wrapper">
          <div className="Investors-header">
            <AnimationOnScroll animateIn="animate__slideInDown">
              <div className="Investors-title bebas-neue-font">INVESTORS</div>
            </AnimationOnScroll>
          </div>
          <div className="Investors-images flex flex-wrap items-center justify-center">
            {dataInvestors.map((item, index) => (
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={100 * index}>
                <div className="Investors-images-item">
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

export default Investors;
