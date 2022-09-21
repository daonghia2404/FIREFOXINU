import React from 'react';

import classNames from 'classnames';

import { dataNavigation } from './Navigation.data';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="container">
        <div className="Navigation-wrapper flex items-center">
          {dataNavigation.map((item) => (
            <a
              className={classNames('Navigation-item bebas-neue-font', { button: item.isButton })}
              key={item.key}
              href={item.link}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
