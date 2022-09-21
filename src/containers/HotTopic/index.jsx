import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Carousels from '@/components/Carousels';

import { dataHotTopic } from './HotTopic.data';
import './HotTopic.scss';

const HotTopic = () => {
  return (
    <section className="HotTopic section">
      <div className="container">
        <div className="HotTopic-title">News</div>
        <div className="HotTopic-description">Press Release</div>

        <div className="HotTopic-wrapper flex flex-wrap">
          <div className="HotTopic-wrapper-item">
            <div className="HotTopic-carousel">
              <Carousels
                dots={false}
                arrows
                slidesToShow={2}
                slidesToScroll={1}
                infinite={false}
                responsive={[
                  {
                    breakpoint: 575,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                ]}
              >
                {[...dataHotTopic, ...dataHotTopic].map((item, index) => (
                  <AnimationOnScroll key={index} animateIn="animate__fadeInUp" delay={(index * 1000) / 4}>
                    <div className="HotTopic-carousel-item">
                      <div className="HotTopic-carousel-item-card">
                        <div className="HotTopic-carousel-item-card-image">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="HotTopic-carousel-item-card-title">{item.title}</div>
                        <div className="HotTopic-carousel-item-card-description">{item.description}</div>
                      </div>
                    </div>
                  </AnimationOnScroll>
                ))}
              </Carousels>
            </div>
          </div>
          <div className="HotTopic-wrapper-item iframe">
            <div className="HotTopic-iframe">
              <a
                style={{ display: 'block' }}
                class="twitter-timeline"
                data-height="400"
                data-theme="dark"
                href="https://twitter.com/GuysrunApp?ref_src=twsrc%5Etfw"
              >
                Tweets by GuysrunApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotTopic;
