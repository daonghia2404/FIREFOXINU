import React from 'react';

import Modal from '@/components/Modal';
import Icon, { EIconName } from '@/components/Icon';
import ImageNftDetail from '@/assets/images/image-nft-detail.png';

import './BuyNftModal.scss';

const BuyNftModal = ({ visible, onClose, onSubmit }) => {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      wrapClassName="BuyNftModal-wrapper"
      title="Buy NFT"
      btnTitle="Buy"
      onSubmit={onSubmit}
    >
      <div className="BuyNftModal-row">
        <div className="BuyNftModal-label">Item</div>
        <div className="BuyNftModal-card flex items-center">
          <div className="BuyNftModal-card-image">
            <img src={ImageNftDetail} alt="" />
          </div>
          <div className="BuyNftModal-card-info">
            <div className="BuyNftModal-card-info-subtitle">GUYS.RUN</div>
            <div className="BuyNftModal-card-info-title">AIR FORCE 068 #42697</div>
            <div className="BuyNftModal-card-info-description">Fees: 2.5%</div>
          </div>
        </div>
      </div>
      <div className="BuyNftModal-row flex items-center justify-between">
        <div className="BuyNftModal-label">Item</div>
        <div className="BuyNftModal-label flex items-center">
          <Icon name={EIconName.Coin} />
          <strong>0.000</strong>
        </div>
      </div>

      <div className="BuyNftModal-row flex items-center justify-between">
        <div className="BuyNftModal-label">Total</div>
        <div className="BuyNftModal-label flex items-center">
          <Icon name={EIconName.Coin} />
          <strong>0.000</strong>
        </div>
      </div>
    </Modal>
  );
};

export default BuyNftModal;
