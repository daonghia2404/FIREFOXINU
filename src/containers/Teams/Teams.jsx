import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Particles from '@/components/Particles';
import { EIconColor } from '@/components/Icon';

import { dataTeams } from './Teams.data';
import './Teams.scss';

const Teams = () => {
  const [currentTeam, setCurrentTeam] = useState();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setCurrentTeam(dataTeams[0]);
  }, []);

  return (
    <section ref={ref} className="Teams" id="teams">
      <div className={classNames('Teams-bg', { active: inView })}>
        <Particles id="TeamsParticles" color={EIconColor.AZURE_RADIANCE} />
      </div>
      <div className="container">
        <div className="Teams-wrapper">
          <div className="Teams-header">
            <AnimationOnScroll animateIn="animate__slideInDown">
              <div className="Teams-subtitle bebas-neue-font">FFS TEAM</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInDown">
              <div className="Teams-title bebas-neue-font">Executive Steering Committee</div>
            </AnimationOnScroll>
            {/* <AnimationOnScroll animateIn="animate__slideInDown">
            <div className="Teams-description">
              These are some prominent members of the community actively directing the project.
            </div>
          </AnimationOnScroll> */}
          </div>

          <div className="Teams-body">
            <Row gutter={[96, 48]}>
              <Col span={24} lg={{ span: 10 }}>
                <div className="Teams-list">
                  <Row gutter={[48, 48]}>
                    {dataTeams.map((item, index) => (
                      <Col span={12}>
                        <AnimationOnScroll animateIn="animate__fadeInUp" delay={100 * index}>
                          <div
                            className={classNames('Teams-list-item', { active: item.key === currentTeam?.key })}
                            onClick={() => setCurrentTeam(item)}
                          >
                            <img src={item.avatar} alt="" />
                          </div>
                        </AnimationOnScroll>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
              <Col span={24} lg={{ span: 14 }}>
                <div className="Teams-detail">
                  <AnimationOnScroll animateIn="animate__slideInRight">
                    <h3 className="Teams-detail-title bebas-neue-font">{currentTeam?.name}</h3>
                  </AnimationOnScroll>
                  <AnimationOnScroll animateIn="animate__slideInRight">
                    <h4 className="Teams-detail-subtitle bebas-neue-font">{currentTeam?.job}</h4>
                  </AnimationOnScroll>
                  <AnimationOnScroll animateIn="animate__slideInRight">
                    <p className="Teams-detail-description">{currentTeam?.description}</p>
                  </AnimationOnScroll>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
