import React from 'react';
import classNames from 'classnames';

import { EIconName } from './Icon.enums';
import './Icon.scss';

import AngleLeft from './AngleLeft';
import AngleRight from './AngleRight';

const Icon = ({ name, className, color, onClick }) => {
  const renderIcon = () => {
    switch (name) {
      case EIconName.AngleLeft:
        return <AngleLeft color={color} />;
      case EIconName.AngleRight:
        return <AngleRight color={color} />;

      default:
        return <></>;
    }
  };

  return (
    <div className={classNames('Icon', 'flex', 'justify-center', 'items-center', className)} onClick={onClick}>
      {renderIcon()}
    </div>
  );
};

export default Icon;
