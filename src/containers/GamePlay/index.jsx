import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Carousels from '@/components/Carousels';
import ImageGameplayPerson from '@/assets/images/image-gameplay-person.png';
import BgGameplay from '@/assets/images/bg-gameplay.png';
import ImageGameplayGem1 from '@/assets/images/image-gameplay-gem-1.png';
import ImageGameplayGem2 from '@/assets/images/image-gameplay-gem-2.png';
import ImageGameplayGem3 from '@/assets/images/image-gameplay-gem-3.png';

import { dataGamePlay } from './GamePlay.data';
import './GamePlay.scss';

const GamePlay = () => {
  return (
    <section className="GamePlay section" id="gameplay">
      <div className="container">
        <div className="GamePlay-wrapper flex flex-wrap">
          <div className="GamePlay-wrapper-item">
            <AnimationOnScroll animateIn="animate__slideInLeft">
              <div className="GamePlay-carousel-item-card-subtitle">Gameplay</div>
            </AnimationOnScroll>
            <div className="GamePlay-carousel">
              <Carousels dots={false} arrows slidesToShow={1} slidesToScroll={1}>
                {[...dataGamePlay, ...dataGamePlay].map((item, index) => (
                  <AnimationOnScroll key={index} animateIn="animate__fadeInUp" delay={(index * 1000) / 4}>
                    <div className="GamePlay-carousel-item">
                      <div className="GamePlay-carousel-item-card">
                        <AnimationOnScroll animateIn="animate__slideInLeft" delay={200}>
                          <div className="GamePlay-carousel-item-card-title">{item.title}</div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__slideInLeft" delay={400}>
                          <div className="GamePlay-carousel-item-card-description">{item.description}</div>
                        </AnimationOnScroll>
                      </div>
                    </div>
                  </AnimationOnScroll>
                ))}
              </Carousels>
            </div>
          </div>
          <div className="GamePlay-wrapper-item">
            <div className="GamePlay-image">
              <AnimationOnScroll animateIn="animate__bounceIn">
                <img className="GamePlay-image-person" src={ImageGameplayPerson} alt="" />
              </AnimationOnScroll>
              <img className="GamePlay-image-background" src={BgGameplay} alt="" />
              <img className="GamePlay-image-gem-1" src={ImageGameplayGem1} alt="" />
              <img className="GamePlay-image-gem-2" src={ImageGameplayGem2} alt="" />
              <img className="GamePlay-image-gem-3" src={ImageGameplayGem3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamePlay;
