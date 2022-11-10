import { UserProfile } from '@auth0/nextjs-auth0'

export type queryKeyType = readonly unknown[]

export type AllSizes = {
  id: string
  SizeName: string
  title: string
}

export type AllColors = {
  id: string
  colorName: string
  RussianName: string
  HexColor: string
}

export type ProductDataType = {
  _v: number
  _id: string
  categories: Array<string>
  color: Array<AllColors>
  createdAt: string
  desc: string
  gender: Array<string>
  img: Array<string>
  inStock: number
  price: number
  size: Array<AllSizes>
  title: string
  updatedAt: string
}

export type ProductsArrayType = Array<ProductDataType>

export type filtersType = {
  [name: string]: any
}

export type itemFilterType = {
  [key: string]: string
}

export interface ProfileInfo extends UserProfile {
  firstName: string
  lastName: string
  phoneNumber: string
  shippingMethod: string
  saveInfo: boolean
  address: {
    address: string
    apartment: string
    city: string
    country: string
    zipCode: string
  }
}
