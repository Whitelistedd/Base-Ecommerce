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
  color: Array<AllColors> | string
  createdAt: string
  desc: string
  gender: Array<string>
  img: Array<string>
  inStock: boolean
  price: number
  size: Array<AllSizes> | string
  title: string
  updatedAt: string
}

export type ProductsArrayType = Array<ProductDataType>
