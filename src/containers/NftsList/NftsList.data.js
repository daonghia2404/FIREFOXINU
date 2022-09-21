import ImageCharacter1 from '@/assets/images/image-character-1.png';
import ImageCharacter2 from '@/assets/images/image-character-2.png';
import ImageCharacter3 from '@/assets/images/image-character-3.png';
import ImageCharacter4 from '@/assets/images/image-character-4.png';

export const ECharacterCardType = {
  UNCOMMON: 'uncommon',
  RARE: 'rare',
  EPIC: 'epic',
  LEGENDARY: 'legendary',
};

const randomNumber = (range) => Math.floor(Math.random() * (range || 100));

export const dataNftsListListData = [
  {
    id: randomNumber(99999),
    image: ImageCharacter1,
    type: ECharacterCardType.EPIC,
    diamond: randomNumber(),
    ticket: `${randomNumber(6)}/6`,
    shield: randomNumber(),
    global: `${randomNumber(240)}/240`,
    coin: '-',
    latestCoin: randomNumber(24),
  },
  {
    id: randomNumber(99999),
    image: ImageCharacter2,
    type: ECharacterCardType.UNCOMMON,
    diamond: randomNumber(),
    ticket: `${randomNumber(6)}/6`,
    shield: randomNumber(),
    global: `${randomNumber(240)}/240`,
    coin: '-',
    latestCoin: randomNumber(24),
  },
  {
    id: randomNumber(99999),
    image: ImageCharacter3,
    type: ECharacterCardType.RARE,
    diamond: randomNumber(),
    ticket: `${randomNumber(6)}/6`,
    shield: randomNumber(),
    global: `${randomNumber(240)}/240`,
    coin: '-',
    latestCoin: randomNumber(24),
  },
  {
    id: randomNumber(99999),
    image: ImageCharacter4,
    type: ECharacterCardType.LEGENDARY,
    diamond: randomNumber(),
    ticket: `${randomNumber(6)}/6`,
    shield: randomNumber(),
    global: `${randomNumber(240)}/240`,
    coin: '-',
    latestCoin: randomNumber(24),
  },
  {
    id: randomNumber(99999),
    image: ImageCharacter1,
    type: ECharacterCardType.EPIC,
    diamond: randomNumber(),
    ticket: `${randomNumber(6)}/6`,
    shield: randomNumber(),
    global: `${randomNumber(240)}/240`,
    coin: '-',
    latestCoin: randomNumber(24),
  },
  {
    id: randomNumber(99999),
    image: ImageCharacter2,
    type: ECharacterCardType.UNCOMMON,
    diamond: randomNumber(),
    ticket: `${randomNumber(6)}/6`,
    shield: randomNumber(),
    global: `${randomNumber(240)}/240`,
    coin: '-',
    latestCoin: randomNumber(24),
  },
  {
    id: randomNumber(99999),
    image: ImageCharacter3,
    type: ECharacterCardType.RARE,
    diamond: randomNumber(),
    ticket: `${randomNumber(6)}/6`,
    shield: randomNumber(),
    global: `${randomNumber(240)}/240`,
    coin: '-',
    latestCoin: randomNumber(24),
  },
  {
    id: randomNumber(99999),
    image: ImageCharacter4,
    type: ECharacterCardType.LEGENDARY,
    diamond: randomNumber(),
    ticket: `${randomNumber(6)}/6`,
    shield: randomNumber(),
    global: `${randomNumber(240)}/240`,
    coin: '-',
    latestCoin: randomNumber(24),
  },
];

export const dataNftsListSort = [
  { label: 'Lastest listed', value: 'lastest' },
  { label: 'Lowest price', value: 'lowest' },
  { label: 'Highest price', value: 'highest' },
];

export const dataRarityFilter = [
  { label: 'Uncommon', value: ECharacterCardType.UNCOMMON, color: '#70D260' },
  { label: 'Rare', value: ECharacterCardType.RARE, color: '#9C41F4' },
  { label: 'Epic', value: ECharacterCardType.EPIC, color: '#FF9900' },
  {
    label: 'Legendary',
    value: ECharacterCardType.LEGENDARY,
    color: 'transparent',
    style: {
      background: 'linear-gradient(269.09deg, #104AFB 0.78%, #00FFD1 99.53%)',
      backgroundClip: 'text',
      webkitBackgroundClip: 'text',
      webkitTextFillColor: 'transparent',
      textFillColor: 'transparent',
    },
  },
];

export const EKeyNftsListFilter = {
  PRICE: 'price',
  RARITY: 'rarity',
  TALENT: 'talent',
  LEVEL: 'level',
  INVITES_DONE: 'invites_done',
  LEARNING_SPEED: 'learning_speed',
};

export const dataPriceFilter = {
  min: 60,
  max: 10000,
};

export const dataTalentFilter = {
  min: 20,
  max: 59,
};

export const dataLevelFilter = {
  min: 1,
  max: 47,
};

export const dataInvitesDoneFilter = {
  min: 0,
  max: 6,
};

export const dataLearningSpeedFilter = {
  min: 85,
  max: 137,
};
