import React from 'react';
import { Col, Row } from 'antd';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { dataEcoSystem } from './EcoSystem.data';
import './EcoSystem.scss';

const EcoSystem = () => {
  return (
    <section className="EcoSystem" id="ecosystem">
      <div className="container">
        <div className="EcoSystem-wrapper">
          <div className="EcoSystem-header">
            <AnimationOnScroll animateIn="animate__slideInDown">
              <div className="EcoSystem-title bebas-neue-font">FIREFOX ESPORT ECOSYSTEM</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInDown">
              <div className="EcoSystem-description">
                Firefox ESport App is a completely decentralized football betting phone application on the Binance
                chain.
              </div>
            </AnimationOnScroll>
          </div>

          <div className="EcoSystem-body">
            <Row gutter={[48, 48]}>
              {dataEcoSystem.map((item, index) => (
                <Col key={item.key} span={24} md={{ span: 12 }} lg={{ span: 6 }}>
                  <AnimationOnScroll animateIn="animate__fadeInUp" delay={100 * index}>
                    <div className="EcoSystem-card">
                      <div className="EcoSystem-card-image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="EcoSystem-card-info">
                        <div className="EcoSystem-card-info-title bebas-neue-font">{item.title}</div>
                        <div className="EcoSystem-card-info-description">{item.description}</div>
                      </div>
                    </div>
                  </AnimationOnScroll>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoSystem;
