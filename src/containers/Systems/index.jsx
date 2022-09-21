import React, { useEffect } from 'react';
import Parallax from 'parallax-js';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import BgSystems from '@/assets/images/bg-system.png';
import ImageSystem from '@/assets/images/image-system.png';
import { dataSystemProduct } from '@/containers/Systems/Systems.data';

import './Systems.scss';

const Systems = () => {
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
    <>
      <div className="Systems" id="system">
        <div className="Systems-background scence">
          <div className="Systems-background-image" data-depth="0.2">
            <img src={BgSystems} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="Systems-wrapper">
            <div className="Systems-title">NFTs Sneakers System</div>
            <div className="Systems-description">
              GUYS Metaverse builds up the NFTs Sneakers system and create game-play around them.
            </div>
            <div className="Systems-image flex items-center justify-center">
              {dataSystemProduct.map((item, index) => (
                <div key={index} className={`Systems-image-item item-${index + 1}`}>
                  <div className="Systems-image-item-number">{item.number}</div>
                  <div className="Systems-image-item-title">{item.title}</div>
                  <img src={item.image} alt="" />
                </div>
              ))}

              <div className="Systems-image-item main">
                <img src={ImageSystem} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Systems-products">
        <div className="container">
          <div className="Systems-products-wrapper flex flex-wrap">
            {dataSystemProduct.map((item, index) => (
              <div key={index} className={`Systems-products-item item-${index + 1}`}>
                <AnimationOnScroll animateIn="animate__fadeInUp" delay={(index * 1000) / 4}>
                  <div className="Systems-products-item-number">{item.number}</div>
                  <div className="Systems-products-item-title">{item.title}</div>
                  <img src={item.image} alt="" />
                </AnimationOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Systems;
