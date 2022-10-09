import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="43" height="62" viewBox="0 0 43 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 13.5C8 6.04416 14.0442 0 21.5 0C28.9558 0 35 6.04416 35 13.5V14.5C35 21.9558 28.9558 28 21.5 28C14.0442 28 8 21.9558 8 14.5V13.5Z"
        fill={color}
      />
      <path
        d="M0 41C0 35.4772 4.47715 31 10 31H33C38.5228 31 43 35.4772 43 41V52C43 57.5228 38.5228 62 33 62H10C4.47715 62 0 57.5228 0 52V41Z"
        fill={color}
      />
      <path d="M0 44H43V62H0V44Z" fill={color} />
    </svg>
  );
};

export default Svg;
