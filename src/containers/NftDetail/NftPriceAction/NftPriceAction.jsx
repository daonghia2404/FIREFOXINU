import React from 'react';

import Modal from '@/components/Modal';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './NftPriceAction.scss';

const NftPriceAction = ({ title, btnTitle, visible, label, subTitle, onClose, onSubmit }) => {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      wrapClassName="NftPriceAction-wrapper"
      title={title}
      btnTitle={btnTitle}
      onSubmit={onSubmit}
    >
      <div className="NftPriceAction-price-action">
        <div className="NftPriceAction-row">
          <div className="NftPriceAction-label">{label}</div>
          <div className="NftPriceAction-control flex justify-between items-center">
            <input type="number" placeholder="Enter values" />
            <Icon name={EIconName.Coin} />
          </div>
          {subTitle && (
            <div style={{ marginTop: '1.6rem' }} className="NftPriceAction-label text-center">
              {subTitle}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default NftPriceAction;
