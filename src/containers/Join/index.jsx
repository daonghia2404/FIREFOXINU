import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import ImagePersonJoin from '@/assets/images/image-person-join.png';
import ImagePersonJoinMobile from '@/assets/images/image-person-join-mb.png';

import { dataSocials } from './Join.data';

import './Join.scss';

const Join = () => {
  return (
    <section className="Join section">
      <div className="container">
        <div className="Join-wrapper flex justify-between flex-wrap">
          <div className="Join-wrapper-item">
            <div className="Join-image">
              <AnimationOnScroll animateIn="animate__slideInLeft">
                <img className="desktop" src={ImagePersonJoin} alt="" />
                <img className="mobile" src={ImagePersonJoinMobile} alt="" />
              </AnimationOnScroll>
            </div>
          </div>
          <div className="Join-wrapper-item">
            <AnimationOnScroll animateIn="animate__slideInRight">
              <div className="Join-title">Join our community</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInRight" delay={300}>
              <div className="Join-description">
                Connect with Calo community to update the newest thing about the market and our business.
              </div>
            </AnimationOnScroll>
            <div className="Join-socials flex flex-wrap justify-end">
              {dataSocials.map((item, index) => (
                <a key={index} className="Join-socials-item" href={item.link} target="_blank">
                  <AnimationOnScroll animateIn="animate__bounceIn" delay={(index * 1000) / 4}>
                    <img src={item.image} alt="" />
                  </AnimationOnScroll>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
