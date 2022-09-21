import React from 'react';
import { Select as AntdSelect } from 'antd';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Select.scss';

const Select = ({ dropdownClassName, ...rest }) => {
  return (
    <div className="Select">
      <AntdSelect
        labelInValue
        dropdownClassName={classNames('Select-wrapper', dropdownClassName)}
        suffixIcon={<Icon name={EIconName.ChevronDown} color={EIconColor.WHITE} />}
        {...rest}
      />
    </div>
  );
};

export default Select;
