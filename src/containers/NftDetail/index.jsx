import React, { useState } from 'react';

import ImageNftDetail from '@/assets/images/image-nft-detail.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { dataNftsListListData, dataNftsListSort } from '@/containers/NftsList/NftsList.data';
import Select from '@/components/Select';
import Carousels from '@/components/Carousels';
import CharacterCard from '@/components/CharacterCard';
import BuyNftModal from '@/containers/NftDetail/BuyNftModal';
import BuyingProcess from '@/containers/NftDetail/BuyingProcess';
import NftPriceAction from '@/containers/NftDetail/NftPriceAction';

import './NftDetail.scss';

const NftDetail = ({ isOwn }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [visibleBuyNftModal, setVisibleBuyNftModal] = useState(false);
  const [visibleBuyingProcessModal, setVisibleBuyingProcessModal] = useState(false);
  const [visibleOfferActionModal, setVisibleOfferActionModal] = useState(false);
  const [visibleSellNftModal, setVisibleSellNftModal] = useState(false);
  const [visibleSendNftModal, setVisibleSendNftModal] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleOpenBuyNftModal = () => {
    setVisibleBuyNftModal(true);
  };
  const handleCloseBuyNftModal = () => {
    setVisibleBuyNftModal(false);
  };
  const handleSubmitBuyNftModal = () => {
    handleCloseBuyNftModal();
    handleOpenBuyingProcessModal();
  };

  const handleOpenBuyingProcessModal = () => {
    setVisibleBuyingProcessModal(true);
  };
  const handleCloseBuyingProcessModal = () => {
    setVisibleBuyingProcessModal(false);
  };

  const handleOpenOfferActionModal = () => {
    setVisibleOfferActionModal(true);
  };
  const handleCloseOfferActionModal = () => {
    setVisibleOfferActionModal(false);
  };
  const handleSubmitOfferActionModal = () => {
    handleCloseOfferActionModal();
    handleOpenBuyingProcessModal();
  };

  const handleOpenSellNftModal = () => {
    setVisibleSellNftModal(true);
  };
  const handleCloseSellNftModal = () => {
    setVisibleSellNftModal(false);
  };
  const handleSubmitSellNftModal = () => {
    handleCloseSellNftModal();
    handleOpenBuyingProcessModal();
  };

  const handleOpenSendNftModal = () => {
    setVisibleSendNftModal(true);
  };
  const handleCloseSendNftModal = () => {
    setVisibleSendNftModal(false);
  };
  const handleSubmitSendNftModal = () => {
    handleCloseSendNftModal();
    handleOpenBuyingProcessModal();
  };

  return (
    <div className="NftDetail">
      <div className="container">
        <div className="NftDetail-wrapper flex flex-wrap justify-between">
          <div className="NftDetail-wrapper-item">
            <div className="NftDetail-card">
              <div className="NftDetail-image">
                <img src={ImageNftDetail} alt="" />
              </div>

              <div className="NftDetail-favorites flex items-center" onClick={toggleFavorite}>
                4
                <Icon name={isFavorite ? EIconName.Heart : EIconName.HeartOutline} color={EIconColor.WHITE} />
              </div>
            </div>

            <div className="NftDetail-group-title mobile">
              <div className="NftDetail-subtitle">GUYS.RUN</div>
              <div className="NftDetail-title">AIR FORCE 068 #42697</div>
              <div className="NftDetail-text">
                Owned by <span>Guys</span>
              </div>
            </div>

            <div className="NftDetail-card">
              <div className="NftDetail-card-title">Description</div>
              <div className="NftDetail-text">
                By <span>GUYS.RUN</span>
              </div>

              <div className="line"></div>

              <div className="NftDetail-card-title">Properties</div>
              <div className="NftDetail-tags flex flex-wrap">
                <div className="NftDetail-tags-item active">Epic</div>
                <div className="NftDetail-tags-item">Sneaker A</div>
              </div>

              <div className="line"></div>

              <div className="NftDetail-card-title">About</div>

              <div className="NftDetail-text">
                Guys Run is a revolutionary fitness application that lets you earn cryptocurrency while you walk and get
                healthy. Walking as it is, is one of the regular activities which is performed whether it’s in the house
                or outside.
                <br />
                Based on blockchain, You can equip yourself with an NFT and start the game by moving . By those daily
                activities, you can earn more tokens to use in games or even cash out easily.
              </div>

              <div className="line"></div>

              <div className="NftDetail-card-title">About</div>
              <div className="NftDetail-row flex items-center justify-between">
                <div className="NftDetail-text">Contract Address</div>
                <div className="NftDetail-text">
                  <span>0x5bd8...dff9</span>
                </div>
              </div>
              <div className="NftDetail-row flex items-center justify-between">
                <div className="NftDetail-text">Token ID</div>
                <div className="NftDetail-text">
                  <span>11321</span>
                </div>
              </div>
              <div className="NftDetail-row flex items-center justify-between">
                <div className="NftDetail-text">Token Standard</div>
                <div className="NftDetail-text">Bep 20</div>
              </div>
              <div className="NftDetail-row flex items-center justify-between">
                <div className="NftDetail-text">Blockchain</div>
                <div className="NftDetail-text">Binance smart chain</div>
              </div>
              <div className="NftDetail-row flex items-center justify-between">
                <div className="NftDetail-text">Creator Fees</div>
                <div className="NftDetail-text">1%</div>
              </div>
            </div>
          </div>
          <div className="NftDetail-wrapper-item">
            <div className="NftDetail-group-title">
              <div className="NftDetail-subtitle">GUYS.RUN</div>
              <div className="NftDetail-title">AIR FORCE 068 #42697</div>
              <div className="NftDetail-text">
                Owned by <span>Guys</span>
              </div>
            </div>

            <div className="NftDetail-card">
              <div className="NftDetail-countdown">
                <div className="NftDetail-countdown-text">Sale start July, 2022</div>
                <div className="NftDetail-countdown-timer flex items-center">
                  <div className="NftDetail-countdown-timer-item">
                    00
                    <div className="NftDetail-countdown-text">Hours</div>
                  </div>

                  <div className="NftDetail-countdown-timer-item">
                    00
                    <div className="NftDetail-countdown-text">Minutes</div>
                  </div>

                  <div className="NftDetail-countdown-timer-item">
                    00
                    <div className="NftDetail-countdown-text">Seconds</div>
                  </div>
                </div>
              </div>

              <div className="line"></div>

              <div className="NftDetail-price">
                <div className="NftDetail-price-text">Current price</div>
                <div className="NftDetail-price-value flex items-center">
                  <Icon name={EIconName.Coin} />
                  {isOwn ? (
                    <span className="NftDetail-price-text">
                      <strong>-</strong>
                    </span>
                  ) : (
                    <>
                      <span className="NftDetail-price-text">
                        <strong>-</strong>
                      </span>
                      <span className="NftDetail-price-text">($ 0.000)</span>
                    </>
                  )}
                </div>

                {isOwn ? (
                  <div className="NftDetail-price-actions flex">
                    <div className="NftDetail-price-actions-btn" onClick={handleOpenSellNftModal}>
                      Sell
                    </div>
                    <div className="NftDetail-price-actions-btn" onClick={handleOpenSendNftModal}>
                      Send
                    </div>
                  </div>
                ) : (
                  <div className="NftDetail-price-actions flex">
                    <div className="NftDetail-price-actions-btn gradient" onClick={handleOpenBuyNftModal}>
                      Buy now
                    </div>
                    <div className="NftDetail-price-actions-btn" onClick={handleOpenOfferActionModal}>
                      Make offer
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="NftDetail-card">
              <div className="NftDetail-card-title">Price history</div>
              <div className="NftDetail-card-filter flex flex-wrap">
                <Select defaultValue={dataNftsListSort[0]} options={dataNftsListSort} />
              </div>
            </div>

            <div className="NftDetail-card">
              <div className="NftDetail-card-title">Listings</div>
              <div className="NftDetail-card-table">
                <table>
                  <thead>
                    <tr>
                      <td>Price</td>
                      <td>USD Price</td>
                      <td>Expiration</td>
                      <td>From</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="flex items-center">
                          <Icon name={EIconName.Coin} />-
                        </div>
                      </td>
                      <td>$0.000</td>
                      <td>1 minutes</td>
                      <td>
                        <span>GUYS.RUN</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="NftDetail-card">
              <div className="NftDetail-card-title">Offers</div>
              <div className="NftDetail-card-table">
                <table>
                  <thead>
                    <tr>
                      <td>Price</td>
                      <td>USD Price</td>
                      <td>Floor Difference</td>
                      <td>Expiration</td>
                      <td>From</td>
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
                          <span>NFT88</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="NftDetail-wrapper-item full">
            <div className="NftDetail-card">
              <div className="NftDetail-card-title">Item Activity</div>
              <div className="NftDetail-card-table">
                <table>
                  <thead>
                    <tr>
                      <td>Event</td>
                      <td>Price</td>
                      <td>From</td>
                      <td>To</td>
                      <td>Date</td>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                      <tr key={item}>
                        <td>List</td>
                        <td>
                          <div className="flex items-center">
                            <Icon name={EIconName.Coin} />-
                          </div>
                        </td>
                        <td>
                          <span>GUYS.RUN</span>
                        </td>
                        <td>-</td>
                        <td>2 minutes ago</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="NftDetail-card">
              <div className="NftDetail-card-title">More from this collection</div>

              <div className="NftDetail-collections">
                <Carousels
                  slidesToShow={4}
                  slidesToScroll={1}
                  infinite={false}
                  dots={false}
                  arrows={false}
                  responsive={[
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 2,
                      },
                    },
                    {
                      breakpoint: 991,
                      settings: {
                        slidesToShow: 3,
                      },
                    },
                  ]}
                >
                  {dataNftsListListData.map((item, index) => (
                    <div key={index} className="NftDetail-collections-item">
                      <CharacterCard {...item} />
                    </div>
                  ))}
                </Carousels>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BuyNftModal visible={visibleBuyNftModal} onClose={handleCloseBuyNftModal} onSubmit={handleSubmitBuyNftModal} />

      <BuyingProcess visible={visibleBuyingProcessModal} onClose={handleCloseBuyingProcessModal} />

      <NftPriceAction
        visible={visibleOfferActionModal}
        title="Make offer"
        btnTitle="Offer"
        label="Price"
        onClose={handleCloseOfferActionModal}
        onSubmit={handleSubmitOfferActionModal}
      />

      <NftPriceAction
        visible={visibleSellNftModal}
        title="Sell"
        btnTitle="Sell"
        label="Price"
        subTitle="Total: 122 token (2.5% Service Fee)"
        onClose={handleCloseSellNftModal}
        onSubmit={handleSubmitSellNftModal}
      />

      <NftPriceAction
        visible={visibleSendNftModal}
        title="Send"
        btnTitle="Send"
        label="Price"
        subTitle="Total: 122 token (2.5% Service Fee)"
        onClose={handleCloseSendNftModal}
        onSubmit={handleSubmitSendNftModal}
      />
    </div>
  );
};

export default NftDetail;
