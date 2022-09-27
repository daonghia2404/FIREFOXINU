import React from 'react';

import Logo from '@/assets/images/logo.svg';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Navigation from '@/containers/Navigation';

import './Header.scss';

const Header = ({ visibleMenu, onClickOverlay, onClickMenu }) => {
  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex items-center justify-between">
          <div className="Header-logo bebas-neue-font">
            <img src={Logo} alt="" />
            FIREFOX SPORT
          </div>

          <Navigation visible={visibleMenu} onClickOverlay={onClickOverlay} />

          {/* <div className="Header-flags">
            <Carousels
              dots={false}
              arrows
              slidesToShow={6}
              slidesToScroll={1}
              infinite
              autoplay={false}
              responsive={[
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 3,
                  },
                },
              ]}
            >
              {[...dataCountryFlags, ...dataCountryFlags].map((item) => (
                <div key={item.key} className="Header-flags-item">
                  <img src={item.flag} alt="" />
                </div>
              ))}
            </Carousels>
          </div> */}

          <div className="Header-menu" onClick={onClickMenu}>
            <Icon name={EIconName.Menu} color={EIconColor.RED_RIBBON} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
