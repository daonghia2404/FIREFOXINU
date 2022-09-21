import React from 'react';
import { Col, Row } from 'antd';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { dataHowItWorks } from './HowItWorks.data';
import './HowItWorks.scss';

const HowItWorks = () => {
  return (
    <div className="HowItWorks">
      <div className="HowItWorks-wrapper">
        <div className="HowItWorks-header">
          <AnimationOnScroll animateIn="animate__slideInDown">
            <div className="HowItWorks-title bebas-neue-font">Here’s how it works</div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__slideInDown">
            <div className="HowItWorks-description">
              FFI.net is the all-in-one app that rewards fans. Influence, play, win and trade Fan Tokens, starting
              today!
            </div>
          </AnimationOnScroll>
        </div>

        <div className="HowItWorks-body">
          <Row gutter={[48, 48]}>
            {dataHowItWorks.map((item, index) => (
              <Col key={item.key} span={4}>
                <AnimationOnScroll animateIn="animate__fadeInUp" delay={100 * index}>
                  <div className="HowItWorks-card">
                    <div className="HowItWorks-card-image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="HowItWorks-card-info">
                      <div className="HowItWorks-card-info-title bebas-neue-font">{item.title}</div>
                      <div className="HowItWorks-card-info-description">{item.description}</div>
                    </div>
                  </div>
                </AnimationOnScroll>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
