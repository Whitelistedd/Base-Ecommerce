import { publicRequest } from '../requests';
import { newCheckoutType, UpdateProductsType } from './apiCalls.model';

/* функция для оформления заказа и получения URL-адреса покупки */

export const newCheckout : newCheckoutType = async ( idemp, order) => {
    try {
        const key = idemp
        const request = { key, ...order }
        const res = await publicRequest.post("/orders/", request)
            .then(response => response)
            .catch(err => err.response.data.message)
        return res.data.confirmation.confirmation_url ? res.data.confirmation.confirmation_url : res
    } catch (error) {
    }
}

/* извлечение всех продуктов из базы данных по идентификаторам продуктов, чтобы обновить сведения о продукте */

export const UpdateProducts : UpdateProductsType = async (products) => {
    try {
        return await Promise.all(products.map(
            async (product : any, index : number) => {
                const res = await publicRequest.get("/products/find/" + product._id);
                return {
                    index: index,
                    oldproduct: product,
                    newproduct: res.data,
                }
            }
        )
        )
    } catch (err) {
        console.log(err);
    }
}

    /* для получения всех продуктов */
export const getProducts = async (NotHomePage?: boolean) => {
    const response = await publicRequest.get(
        NotHomePage ? `products?category=` : `products`
    );
    return response;
};