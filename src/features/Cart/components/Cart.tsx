import { AppDispatch, useAppSelector } from '@/redux/store/store'
import {
	Bottom,
	Container,
	Info,
	ProductsQauntity,
	ProductsTitle,
	ProductsTotal,
	Shipping,
	StyledButton,
	Top,
	Total,
	Wrapper,
} from '../assets/Cart-styles'
import {
	CartProductType,
	handleQuantityType,
	handleRemoveProductType,
} from '../types/Cart.model'
import { addQuantity, removeProduct, removeQuantity } from '@/redux/slices/cart'

import { CartProduct } from './CartProduct'
import { EmptyCart } from './EmptyCart'
import { UpdateProducts } from '../api/UpdateProducts'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const Cart = () => {
	const router = useRouter()

	const cart = useAppSelector((state) => state.cart)
	const dispatch = AppDispatch()

	/* функция изменения количества продуктов */
	const handlequantity: handleQuantityType = (
		index: number,
		changer: string
	) => {
		if (changer === 'rem' && cart.products[index].quantity >= 2) {
			dispatch(removeQuantity(index))
		} else if (changer === 'add' && cart.products[index].quantity >= 1) {
			dispatch(addQuantity(index))
		}
	}

	/* функция удаления товара */
	const handleRemoveProduct: handleRemoveProductType = (
		index: number,
		item: CartProductType
	) => {
		dispatch(removeProduct({ index, item }))
	}

	/* отправит пользователя на страницу оформления заказа по клику, если в корзине есть товары */
	const handleCheckout = () => {
		if (cart.quantity > 0) {
			router.replace('/checkout')
		}
	}

	/* функция для получения всех продуктов и обновления цен и изображений продуктов в корзине */
	useEffect(() => {
		UpdateProducts(cart.products, dispatch)
	}, [])

	return (
		<Container>
			{/* если у пользователя нет товаров в корзине, покажет компонент пустой корзины */}
			{cart.products.length === 0 ? (
				<EmptyCart />
			) : (
				<Wrapper>
					<Top>
						<ProductsTitle>Product</ProductsTitle>
						<ProductsQauntity>Quantity</ProductsQauntity>
						<ProductsTotal>Total</ProductsTotal>
					</Top>
					<Info>
						{cart.products?.map((item: CartProductType, index: number) => (
							<CartProduct
								key={index}
								item={item}
								index={index}
								handlequantity={handlequantity}
								handleRemoveProduct={handleRemoveProduct}
							/>
						))}
					</Info>
					<Bottom>
						<Total>₽{cart.total}</Total>
						<Shipping>Shipping & taxes calculated at checkout</Shipping>
						<StyledButton onClick={() => handleCheckout()}>
							Checkout
						</StyledButton>
					</Bottom>
				</Wrapper>
			)}
		</Container>
	)
}
