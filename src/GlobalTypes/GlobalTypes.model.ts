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
  inStock: boolean
  price: number
  size: Array<AllSizes>
  title: string
  updatedAt: string
}

export type ProductsArrayType = Array<ProductDataType>

export type filtersType = {
  color: string
  size: string
  gender: string
  categories: string
}

export type itemFilterType = {
  [key: string]: string
}
