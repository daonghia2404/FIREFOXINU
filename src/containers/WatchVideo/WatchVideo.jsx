import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import ImageWatchVideo from '@/assets/images/image-watch-video.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './WatchVideo.scss';

const WatchVideo = () => {
  return (
    <section className="WatchVideo" id="watchVideo">
      <div className="WatchVideo-wrapper">
        <div className="WatchVideo-thumbnail">
          <img src={ImageWatchVideo} alt="" />
        </div>
        <div className="WatchVideo-play flex items-center justify-center flex-col">
          <div className="WatchVideo-play-wrapper">
            <AnimationOnScroll animateIn="animate__slideInDown">
              <span>Watch The Video</span>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__rotateIn">
              <Icon name={EIconName.AngleRight} color={EIconColor.WHITE} />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchVideo;
