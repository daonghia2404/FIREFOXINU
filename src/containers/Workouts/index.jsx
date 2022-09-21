import React, { useEffect } from 'react';
import Parallax from 'parallax-js';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Logo from '@/assets/images/logo.svg';
import ImageWorkoutsPerson from '@/assets/images/image-workouts-person.png';
import BgWorkouts from '@/assets/images/bg-workouts.png';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Workouts.scss';
import { copyText } from '@/utils/functions';

const Workouts = () => {
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
    <section className="Workouts section">
      <div className="container">
        <div className="Workouts-wrapper flex justify-between flex-wrap">
          <div className="Workouts-wrapper-item">
            <div className="Workouts-info flex flex-wrap">
              <div className="Workouts-info-item">
                <div className="Workouts-info-item-logo">
                  <img src={Logo} alt="" />
                </div>
              </div>
              <div className="Workouts-info-item border">
                <div className="Workouts-info-item-bid">
                  <div className="Workouts-info-item-subtitle">Current bid</div>
                  <div className="Workouts-info-item-title">$6.88</div>
                </div>
              </div>
              <div className="Workouts-info-item border">
                <div className="Workouts-info-item-contact">
                  <div className="Workouts-info-item-subtitle">Contract Address:</div>
                  <div className="Workouts-info-item-title flex items-center">
                    0xd6b112...8888868
                    <Icon
                      name={EIconName.Copy}
                      color={EIconColor.ELECTRIC_VIOLET}
                      onClick={() => copyText('0xd6b112...8888868')}
                    />
                  </div>
                </div>
              </div>
              <div className="Workouts-info-item">
                <div className="Workouts-info-item-token">
                  <div className="Workouts-info-item-subtitle">Swap GUYS token:</div>
                  <div className="Workouts-info-item-tokens flex items-center">
                    <Icon name={EIconName.Pancake} />
                    <Icon name={EIconName.Uniswap} />
                  </div>
                </div>
              </div>
            </div>

            <AnimationOnScroll animateIn="animate__slideInLeft">
              <div className="Workouts-title">
                Workout,
                <br />
                play,
                <br /> rewards.
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__slideInLeft" delay={300}>
              <div className="Workouts-btn-wrapper flex">
                <div className="Workouts-btn">
                  Explore
                  <Icon name={EIconName.ArrowLongRight} color={EIconColor.WHITE} />
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="Workouts-wrapper-item">
            <div className="Workouts-image">
              {/* <div className="Workouts-background-wrapper">
                <div className="Workouts-background scence">
                  <div className="Workouts-background-image" data-depth="0.2">
                    <img src={BgWorkouts} alt="" />
                  </div>
                </div>
              </div> */}

              <img className="Workouts-image-person" src={ImageWorkoutsPerson} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workouts;
