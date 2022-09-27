import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Col, Row } from 'antd';

import BgRoadMap from '@/assets/images/bg-roadmap.png';

import { dataRoadMap } from './Roadmap.data';
import './Roadmap.scss';

const Roadmap = () => {
  return (
    <section className="Roadmap" id="roadmap">
      <div className="container">
        <div className="Roadmap-bg">
          <img src={BgRoadMap} alt="" />
        </div>
        <div className="Roadmap-wrapper">
          <div className="Roadmap-header">
            <AnimationOnScroll animateIn="animate__slideInDown">
              <div className="Roadmap-title bebas-neue-font">Road Map</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInDown">
              <div className="Roadmap-description">This timeline details our funding and development goals</div>
            </AnimationOnScroll>
          </div>

          <div className="Roadmap-body">
            <div className="Roadmap-line" />

            <div className="Roadmap-timeline">
              {dataRoadMap.map((item, index) => (
                <Row gutter={[0, 64]}>
                  <Col span={12} />

                  <Col key={index} span={12}>
                    {/* <AnimationOnScroll animateIn={index % 2 !== 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'}> */}

                    <AnimationOnScroll animateIn="animate__fadeInRight">
                      <div className="Roadmap-item">
                        <div className="Roadmap-item-title">
                          <span className="bebas-neue-font">{item.title}</span>
                          <div className="Roadmap-item-title-circle" />
                          <div className="Roadmap-item-title-line" />
                        </div>
                        <div className="Roadmap-item-list">
                          {item.list.map((list, listIndex) => (
                            <div key={listIndex} className="Roadmap-item-list-item">
                              {list}
                            </div>
                          ))}
                        </div>
                      </div>
                    </AnimationOnScroll>
                  </Col>
                </Row>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
