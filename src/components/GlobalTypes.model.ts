/* eslint-disable @typescript-eslint/no-explicit-any */
export type queryKeyType = readonly unknown[]

export type AllSizes = {
  [key: string]: any
}

export type AllColors = {
  [key: string]: any
}

export type ProductDataType = {
  _v: any
  _id: string
  categories: Array<string>
  color: Array<AllColors>
  createdAt: string
  desc: string
  gender: Array<string>
  img: Array<string>
  inStock: boolean
  price: any
  size: Array<AllSizes>
  title: string
  updatedAt: string
}

export type ProductsArrayType = Array<ProductDataType>
