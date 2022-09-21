import React from 'react';

import Modal from '@/components/Modal';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './BuyingProcess.scss';

const BuyingProcess = ({ visible, onClose, onSubmit }) => {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      wrapClassName="BuyingProcess-wrapper"
      title="Completing your buy"
      btnTitle="View item"
      onSubmit={onSubmit}
      disabledSubmit
    >
      <div className="BuyingProcess-processes">
        <div className="BuyingProcess-processes-item flex items-center justify-between">
          <div className="BuyingProcess-processes-item-label">1. Initialize your wallet </div>
          <div className="BuyingProcess-processes-item-status">
            <Icon name={EIconName.Loaded} color={EIconColor.WHITE} />
          </div>
        </div>

        <div className="BuyingProcess-processes-item flex items-center justify-between">
          <div className="BuyingProcess-processes-item-label">2. Approve this item for sale</div>
          <div className="BuyingProcess-processes-item-status rotating">
            <Icon name={EIconName.Loading} color={EIconColor.WHITE} />
          </div>
        </div>

        <div className="BuyingProcess-processes-item flex items-center justify-between">
          <div className="BuyingProcess-processes-item-label">3. Confirm price</div>
          <div className="BuyingProcess-processes-item-status"></div>
        </div>
      </div>
    </Modal>
  );
};

export default BuyingProcess;
