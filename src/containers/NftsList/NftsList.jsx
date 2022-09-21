import React, { useRef, useState } from 'react';
import classNames from 'classnames';

import CharacterCard from '@/components/CharacterCard';
import Select from '@/components/Select';
import Pagination from '@/components/Pagination';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants';
import Checkbox from '@/components/Checkbox';
import SliderRange from '@/components/SliderRange';
import { useOnClickOutside } from '@/utils/hooks';

import {
  dataNftsListListData,
  dataNftsListSort,
  dataRarityFilter,
  EKeyNftsListFilter,
  dataPriceFilter,
  dataTalentFilter,
  dataLevelFilter,
  dataInvitesDoneFilter,
  dataLearningSpeedFilter,
} from './NftsList.data';
import './NftsList.scss';

const NftsList = ({ isOwn }) => {
  const [paramsRequest, setParamsRequest] = useState({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const [visibleFilterMobile, setVisibleFilterMobile] = useState(false);
  const filterMobileRef = useRef();
  useOnClickOutside(filterMobileRef, () => setVisibleFilterMobile(false));

  const dataNftsLists = [
    ...dataNftsListListData,
    ...dataNftsListListData,
    ...dataNftsListListData,
    ...dataNftsListListData,
  ];
  const total = dataNftsLists.length;

  const [marketFilterState, setNftsListFilterState] = useState({
    [EKeyNftsListFilter.PRICE]: undefined,
    [EKeyNftsListFilter.RARITY]: [],
    [EKeyNftsListFilter.TALENT]: undefined,
    [EKeyNftsListFilter.LEVEL]: undefined,
    [EKeyNftsListFilter.INVITES_DONE]: undefined,
    [EKeyNftsListFilter.LEARNING_SPEED]: undefined,
  });

  const countFilterUsed = Object.keys(marketFilterState).reduce((result, item) => {
    if (marketFilterState[item] && marketFilterState[item]?.length > 0) return (result = result + 1);
    return result;
  }, 0);

  const handleChangeNftsListFilter = (key, value, checked) => {
    if (key === EKeyNftsListFilter.RARITY) {
      if (checked) {
        setNftsListFilterState({
          ...marketFilterState,
          [key]: [...marketFilterState[key], value],
        });
      } else {
        setNftsListFilterState({
          ...marketFilterState,
          [key]: marketFilterState[key]?.filter((item) => item !== value),
        });
      }
    } else {
      setNftsListFilterState({
        ...marketFilterState,
        [key]: value,
      });
    }
  };

  const handlePaginateChange = (page) => {
    setParamsRequest({
      ...paramsRequest,
      page,
    });
  };

  const handleClearFilter = () => {
    setNftsListFilterState({
      [EKeyNftsListFilter.PRICE]: [dataPriceFilter.min, dataPriceFilter.max],
      [EKeyNftsListFilter.RARITY]: [],
      [EKeyNftsListFilter.TALENT]: [dataTalentFilter.min, dataTalentFilter.max],
      [EKeyNftsListFilter.LEVEL]: [dataLevelFilter.min, dataLevelFilter.max],
      [EKeyNftsListFilter.INVITES_DONE]: [dataInvitesDoneFilter.min, dataInvitesDoneFilter.max],
      [EKeyNftsListFilter.LEARNING_SPEED]: [dataLearningSpeedFilter.min, dataLearningSpeedFilter.max],
    });
  };

  return (
    <div className="NftsList">
      <div className="container">
        <div className="NftsList-wrapper flex flex-wrap">
          <div ref={filterMobileRef} className={classNames('NftsList-wrapper-item', { visible: visibleFilterMobile })}>
            <div className="flex items-center justify-between" style={{ marginBottom: '2.4rem' }}>
              <div className="NftsList-title">Filter</div>
              <div className="NftsList-clear" onClick={handleClearFilter}>
                Clear all
              </div>
            </div>

            <div className="NftsList-subtitle">Price (USDC)</div>
            <div className="NftsList-filter-item">
              <SliderRange
                min={dataPriceFilter.min}
                max={dataPriceFilter.max}
                value={marketFilterState[EKeyNftsListFilter.PRICE]}
                onChange={(value) => handleChangeNftsListFilter(EKeyNftsListFilter.PRICE, value)}
              />
            </div>
            <div className="NftsList-subtitle">Rarity</div>
            <div className="NftsList-filter-item">
              {dataRarityFilter.map((item) => (
                <div key={item.value} className="NftsList-filter-item-control">
                  <Checkbox
                    checked={marketFilterState[EKeyNftsListFilter.RARITY]?.includes(item.value)}
                    label={<span style={{ color: item.color, ...item.style }}>{item.label}</span>}
                    onChange={(checked) => handleChangeNftsListFilter(EKeyNftsListFilter.RARITY, item.value, checked)}
                  />
                </div>
              ))}
            </div>
            <div className="NftsList-subtitle">Talent</div>
            <div className="NftsList-filter-item">
              <SliderRange
                min={dataTalentFilter.min}
                max={dataTalentFilter.max}
                value={marketFilterState[EKeyNftsListFilter.TALENT]}
                onChange={(value) => handleChangeNftsListFilter(EKeyNftsListFilter.TALENT, value)}
              />
            </div>
            <div className="NftsList-subtitle">Level</div>
            <div className="NftsList-filter-item">
              <SliderRange
                min={dataLevelFilter.min}
                max={dataLevelFilter.max}
                value={marketFilterState[EKeyNftsListFilter.LEVEL]}
                onChange={(value) => handleChangeNftsListFilter(EKeyNftsListFilter.LEVEL, value)}
              />
            </div>
            <div className="NftsList-subtitle">Invites done</div>
            <div className="NftsList-filter-item">
              <SliderRange
                min={dataInvitesDoneFilter.min}
                max={dataInvitesDoneFilter.max}
                value={marketFilterState[EKeyNftsListFilter.INVITES_DONE]}
                onChange={(value) => handleChangeNftsListFilter(EKeyNftsListFilter.INVITES_DONE, value)}
              />
            </div>
            <div className="NftsList-subtitle">Learning Speed</div>
            <div className="NftsList-filter-item">
              <SliderRange
                min={dataLearningSpeedFilter.min}
                max={dataLearningSpeedFilter.max}
                value={marketFilterState[EKeyNftsListFilter.LEARNING_SPEED]}
                onChange={(value) => handleChangeNftsListFilter(EKeyNftsListFilter.LEARNING_SPEED, value)}
              />
            </div>
          </div>

          <div className="NftsList-wrapper-item">
            <div className="NftsList-filter-btn-mobile-wrapper flex justify-end">
              <div
                ref={filterMobileRef}
                className="NftsList-filter-btn-mobile"
                onClick={() => setVisibleFilterMobile(true)}
              >
                Filter ({countFilterUsed})
              </div>
            </div>
            <div className="flex items-center justify-between" style={{ marginBottom: '2.4rem' }}>
              <div className="NftsList-title">{total} Characters</div>
              <div className="NftsList-sort">
                <Select defaultValue={dataNftsListSort[0]} options={dataNftsListSort} />
              </div>
            </div>

            <div className="NftsList-character-list flex flex-wrap">
              {dataNftsLists.map((item, index) => (
                <div key={index} className="NftsList-character-list-item">
                  <CharacterCard {...item} isOwn={isOwn} />
                </div>
              ))}
            </div>

            <div className="NftsList-pagination flex justify-center">
              <Pagination
                page={paramsRequest.page}
                pageSize={paramsRequest.pageSize}
                total={total}
                onChange={handlePaginateChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftsList;
