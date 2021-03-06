import { keyframes } from 'styled-components'
import { ProductDataType } from './components/GlobalTypes.model'

export const AllColors = [
  {
    id: 'ub7ET',
    colorName: 'black',
    RussianName: 'Черный',
    HexColor: '#151314',
  },
  {
    id: 'aCxKM',
    colorName: 'white',
    RussianName: 'Белый',
    HexColor: '#f5f4f0',
  },
  {
    id: 'QD7GC',
    colorName: 'green',
    RussianName: 'Зеленый',
    HexColor: '#c6ddcb',
  },
  {
    id: '8Pl6H',
    colorName: 'blue',
    RussianName: 'Синий',
    HexColor: '#9ae2ee',
  },
  {
    id: 'PbKq3',
    colorName: 'beige',
    RussianName: 'Бежевый',
    HexColor: '#fae7d8',
  },
]

export const AllSizes = [
  {
    id: 'vgV8c',
    SizeName: 'XS',
    title: 'XS',
  },
  {
    id: 'MTmmT',
    SizeName: 'S',
    title: 'S',
  },
  {
    id: 'fhpjE',
    SizeName: 'M',
    title: 'M',
  },
  {
    id: 'zc0ph',
    SizeName: 'L',
    title: 'L',
  },
  {
    id: 'rgE2W',
    SizeName: 'XL',
    title: 'XL',
  },
  {
    id: '6ut0s',
    SizeName: 'XXL',
    title: 'XXL',
  },
]

export const AllGenders = [
  {
    id: 'PcfoZ',
    GenderName: 'men',
    title: 'Мужчины',
  },
  {
    id: '0S9QN',
    GenderName: 'women',
    title: 'Женщины',
  },
]

export const AllCategories = [
  {
    id: 'EaXOa',
    CategoryName: 'pants',
    title: 'Брюки',
  },
  {
    id: 'SLGPi',
    CategoryName: 'hoodies',
    title: 'Толстовка',
  },
  {
    id: 'bnJZk',
    CategoryName: 'sweatshirts',
    title: 'Фуфайка',
  },
  {
    id: 'bnJZw',
    CategoryName: 'shirt',
    title: 'Рубашка',
  },
]

export const MenuItems = [
  {
    id: 'bnJ5w',
    text: 'Мужчины',
    path: '/products?filter=men',
  },
  {
    id: 'znJZz',
    text: 'Женщины',
    path: '/products?filter=women',
  },
  {
    id: 'gdJZw',
    text: 'FAQ',
    path: '/FAQ',
  },
]

export const devices = {
  Phone: 500,
  Tablet: 871,
  Laptop: 1000,
  Desktop: 1200,
}

export const FooterPages = [
  'FAQ',
  'Возвраты',
  'Инструкция по уходу',
  'Поддержка',
  'Условия',
]

export const unFade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

export const fakeProduct: ProductDataType = {
  _v: 1,
  _id: '',
  categories: [''],
  color: [
    {
      id: '',
      colorName: '',
      RussianName: '',
      HexColor: '',
    },
  ],
  createdAt: '',
  desc: '',
  gender: [''],
  img: [''],
  inStock: false,
  price: 0,
  size: [
    {
      id: '',
      SizeName: '',
      title: '',
    },
  ],
  title: '',
  updatedAt: '',
}

export const VersionCards = [
  {
    Image: '/images/Nextjs-logo.svg',
    title: 'NextJS',
  },
  {
    Image: '/images/React-icon.svg',
    title: 'ReactJS',
  },
]
