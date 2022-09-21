import React from 'react';

import { dataProjectBackers } from './ProjectBackers.data';

import './ProjectBackers.scss';

const ProjectBackers = () => {
  return (
    <section className="ProjectBackers section">
      <div className="container">
        <div className="ProjectBackers-wrapper">
          <div className="ProjectBackers-title">Project Backers & Partners</div>

          <div className="ProjectBackers-main flex flex-wrap">
            {dataProjectBackers.map((item, index) => (
              <div key={index} className="ProjectBackers-main-item">
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBackers;
