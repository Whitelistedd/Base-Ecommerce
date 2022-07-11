import { AllColors, AllSizes, ProductDataType } from "../GlobalTypes.model"

export type handleQuantityType = string

export type handleProductTypeType = React.ChangeEvent<HTMLInputElement>

export type handleImageSelectionType = (img: string,selectionNumber: number) => void


export interface FiltersProps {
    AvailableColors: Array<AllColors>,
    AvailableSizes: Array<AllSizes>,
    SelectedColor: string,
    selectedSize: string,
    handleProductType: (event: handleProductTypeType) => void,
}

export interface ImageSwipeProps {
    productInfo : {
        img: Array<string>
    }
}

export interface ProductImageProps {
    img: string, 
    active?: boolean, 
    selectionNumber: number, 
    handleClick?: handleImageSelectionType
}

export interface ProductTypeState {
    color: string,
    size: string
}

export interface ProductFormProps {
    productInfo : ProductDataType,
    productType : ProductTypeState,
    handleCart : () => void,
    error: boolean,
    handleProductType: (event: handleProductTypeType) => void,
    handleQuantity: (type: string) => void,
    quantity: number,
}

export interface ProductImagesProps {
    productInfo: ProductDataType
}

export interface SizeButtonProps {
    handleProductType: (event: handleProductTypeType) => void,
    value: string, 
    title: string
}