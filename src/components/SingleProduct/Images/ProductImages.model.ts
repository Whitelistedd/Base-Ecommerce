import { ProductDataType } from '../../GlobalTypes.model'

export interface ImageSwipeProps {
  productInfo: {
    img: Array<string>
  }
}

export interface ProductImagesProps {
  productInfo: ProductDataType
}

export type handleImageSelectionType = (
  img: string,
  selectionNumber: number
) => void

export interface ProductImageProps {
  img: string
  active?: boolean
  selectionNumber: number
  handleClick?: handleImageSelectionType
  className?: string
}
