import React, { useEffect } from 'react';
import Parallax from 'parallax-js';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Logo from '@/assets/images/logo.svg';
import BgWelcome from '@/assets/images/bg-welcome.png';
import ImageWelcome from '@/assets/images/image-welcome-person.png';
import ImageWelcomeBall from '@/assets/images/image-welcome-ball.png';
import LogoApple from '@/assets/images/logo-apple.png';
import LogoAndroid from '@/assets/images/logo-android.png';
import LogoWindow from '@/assets/images/logo-window.png';

import './Welcome.scss';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Col, Row } from 'antd';

const Welcome = () => {
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
    <section className="Welcome" id="welcome">
      <div className="Welcome-bg">
        <img src={BgWelcome} alt="" />
      </div>
      <div className="container">
        <div className="Welcome-wrapper flex items-center justify-between flex-wrap">
          <div className="Welcome-wrapper-item">
            <AnimationOnScroll animateIn="animate__slideInLeft">
              <div className="Welcome-logo flex items-center">
                <img src={Logo} alt="" />
                <span className="bebas-neue-font">
                  FIREFOX
                  <br />
                  <span className="bebas-neue-font">SPORT</span>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInLeft">
              <div className="Welcome-title bebas-neue-font">
                <span className="bebas-neue-font">Sport and trade on</span> Your way
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__slideInLeft">
              <div className="Welcome-description">
                FFE is a 2.0 decentralized exchange for global sports fans. FFE is a completely transparent platform for
                sports tournaments around the world, in which the World Cup is the first tournament to apply this DAO
                Protocol. With a vision to become a global sports trading hub, the FFE ecosystem includes both FanCub
                and Socialfi. The platform is aimed at users who are passionate about sports.
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp">
              <div className="Welcome-btns flex">
                <a href="#" className="Welcome-btn">
                  Our Project
                </a>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <div className="Welcome-total flex items-center">
                <div className="Welcome-total-icon">
                  <Icon name={EIconName.User} color={EIconColor.WHITE} />
                </div>
                <div className="Welcome-total-info">
                  <div className="Welcome-total-info-title">Total players</div>
                  <div className="Welcome-total-info-description">12,712,906</div>
                </div>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp">
              <div className="Welcome-download">
                <div className="Welcome-download-title text-center">Download now for free</div>
                <Row gutter={[24, 24]}>
                  <Col span={8}>
                    <a href="#" className="Welcome-btn flex items-center">
                      <span className="Welcome-btn-icon">
                        <img src={LogoApple} alt="" />
                      </span>
                      <span className="bebas-neue-font" style={{ marginTop: '.4rem' }}>
                        IOS
                      </span>
                    </a>
                  </Col>
                  <Col span={8}>
                    <a href="#" className="Welcome-btn flex items-center">
                      <span className="Welcome-btn-icon">
                        <img src={LogoAndroid} alt="" />
                      </span>
                      <span className="bebas-neue-font">ANDROID</span>
                    </a>
                  </Col>
                  <Col span={8}>
                    <a href="#" className="Welcome-btn flex items-center">
                      <span className="Welcome-btn-icon">
                        <img src={LogoWindow} alt="" />
                      </span>
                      <span className="bebas-neue-font">LAUNCHER</span>
                    </a>
                  </Col>
                </Row>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="Welcome-wrapper-item">
            <div className="scence">
              <div className="Welcome-image" data-depth="0.2">
                <img src={ImageWelcome} alt="" />
              </div>

              <div className="Welcome-image-ball" data-depth="1">
                <img src={ImageWelcomeBall} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
