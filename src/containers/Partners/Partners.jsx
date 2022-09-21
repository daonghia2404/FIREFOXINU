import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { dataPartners } from './Partners.data';
import './Partners.scss';

const Partners = () => {
  return (
    <div className="Partners">
      <div className="container">
        <div className="Partners-wrapper">
          <div className="Partners-header">
            <AnimationOnScroll animateIn="animate__slideInDown">
              <div className="Partners-title bebas-neue-font">50+ PARTNERS AND COUNTING</div>
            </AnimationOnScroll>
          </div>
          <div className="Partners-images flex flex-wrap items-center justify-center">
            {dataPartners.map((item, index) => (
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={100 * index}>
                <div className="Partners-thumbnail">
                  <img src={item} alt="" />
                </div>
              </AnimationOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
