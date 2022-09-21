import React from 'react';

import Icon, { EIconName } from '@/components/Icon';

import './MyOffers.scss';

const MyOffers = () => {
  return (
    <div className="MyOffers">
      <div className="container">
        <div className="MyOffers-wrapper">
          <div className="MyOffers-card">
            <div className="MyOffers-card-table">
              <table>
                <thead>
                  <tr>
                    <td>Price</td>
                    <td>USD Price</td>
                    <td>Floor Difference</td>
                    <td>Expiration</td>
                    <td>NFT</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <tr key={item}>
                      <td>
                        <div className="flex items-center">
                          <Icon name={EIconName.Coin} />-
                        </div>
                      </td>
                      <td>$0.000</td>
                      <td>21% below</td>
                      <td>2 minutes</td>
                      <td>
                        <span>AIR FORCE 068 #42697</span>
                      </td>
                      <td>
                        <div className="MyOffers-cancel">Cancel</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOffers;
