import React from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Particles from '@/components/Particles';
import { EIconColor } from '@/components/Icon';

import { dataTeams } from './Teams.data';
import './Teams.scss';

const Teams = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className="Teams">
      <div className="Teams-wrapper">
        <div className="Teams-header">
          <AnimationOnScroll animateIn="animate__slideInDown">
            <div className="Teams-title bebas-neue-font">FFI TEAM</div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__slideInDown">
            <div className="Teams-description">
              These are some prominent members of the community actively directing the project.
            </div>
          </AnimationOnScroll>
        </div>

        <div className="Teams-body">
          <div className={classNames('Teams-bg', { active: inView })}>
            <Particles id="TeamsParticles" color={EIconColor.AZURE_RADIANCE} />
          </div>
          <div className="container">
            <div className="Teams-body-wrapper">
              <Row gutter={[40, 40]}>
                {dataTeams.map((item, index) => (
                  <Col span={12} sm={{ span: 8 }} md={{ span: 6 }}>
                    <AnimationOnScroll animateIn="animate__fadeInUp" delay={100 * index}>
                      <div key={item.key} className="Teams-item">
                        <div className="Teams-item-avatar">
                          <img src={item.avatar} alt="" />
                        </div>
                        <div className="Teams-item-name">{item.name}</div>
                        <div className="Teams-item-job bebas-neue-font">{item.job}</div>
                      </div>
                    </AnimationOnScroll>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
