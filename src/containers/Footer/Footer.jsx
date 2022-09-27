import React from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Col, Row } from 'antd';

import Logo from '@/assets/images/logo.svg';
import IconApple from '@/assets/icons/icon-apple.svg';
import IconCloudDownload from '@/assets/icons/icon-cloud-download.svg';
import IconGooglePlay from '@/assets/icons/icon-google-play.svg';

import Particles from '@/components/Particles';
import { EIconColor } from '@/components/Icon';

import { dataFooterMenu, dataFooterSocials } from './Footer.data';
import './Footer.scss';

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className="Footer" id="footer">
      <div className="container">
        <div className={classNames('Footer-bg', { active: inView })}>
          <Particles id="FooterParticles" color={EIconColor.AZURE_RADIANCE} />
        </div>

        <div className="Footer-wrapper">
          <Row justify="center" gutter={[0, 42]}>
            <Col span={24} lg={{ span: 12 }}>
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="Footer-logo flex items-center justify-center">
                  <img src={Logo} alt="" />
                  <span className="bebas-neue-font">FIREFOX SPORT</span>
                </div>
              </AnimationOnScroll>

              <div className="Footer-download">
                <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
                  <div className="Footer-download-btn flex items-center">
                    <div className="Footer-download-btn-icon">
                      <img src={IconApple} alt="" />
                    </div>
                    <span className="bebas-neue-font">APP STORE</span>
                  </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp" delay={200}>
                  <div className="Footer-download-btn flex items-center">
                    <div className="Footer-download-btn-icon">
                      <img src={IconGooglePlay} alt="" />
                    </div>
                    <span className="bebas-neue-font">GOOGLE PLAY</span>
                  </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" delay={300}>
                  <div className="Footer-download-btn flex items-center">
                    <div className="Footer-download-btn-icon">
                      <img src={IconCloudDownload} alt="" />
                    </div>
                    <span className="bebas-neue-font">DOWNLOAD APK</span>
                  </div>
                </AnimationOnScroll>
              </div>
            </Col>

            <Col span={24} lg={{ span: 6 }}>
              <h5 className="Footer-title bebas-neue-font">EXPLORE</h5>
              <div className="Footer-socials">
                {dataFooterMenu.map((item, index) => (
                  <a key={index} className="Footer-socials-item flex items-center" href={item.link} target="_blank">
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            </Col>

            <Col span={24} lg={{ span: 6 }}>
              <h5 className="Footer-title bebas-neue-font">Social</h5>
              <div className="Footer-socials">
                {dataFooterSocials.map((item, index) => (
                  <a key={index} className="Footer-socials-item flex items-center" href={item.link} target="_blank">
                    <div className="Footer-socials-item-icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Footer;
