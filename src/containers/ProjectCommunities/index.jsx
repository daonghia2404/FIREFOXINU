import React from 'react';

import Carousels from '@/components/Carousels';

import { dataProjectCommunities } from './ProjectCommunities.data';

import './ProjectCommunities.scss';

const ProjectCommunities = () => {
  return (
    <section className="ProjectCommunities section">
      <div className="container">
        <div className="ProjectCommunities-wrapper">
          <div className="ProjectCommunities-title">Partners & Communities</div>

          <div className="ProjectCommunities-carousel">
            <Carousels
              dots={false}
              arrows={false}
              slidesToShow={6}
              slidesToScroll={2}
              autoplay
              responsive={[
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 5,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4,
                  },
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 375,
                  settings: {
                    slidesToShow: 2,
                  },
                },
              ]}
            >
              {[...dataProjectCommunities, ...dataProjectCommunities].map((item, index) => (
                <div key={index} className="ProjectCommunities-carousel-item">
                  <img src={item} alt="" />
                </div>
              ))}
            </Carousels>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCommunities;
