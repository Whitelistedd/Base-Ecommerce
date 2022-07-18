import { AllColors, AllSizes } from '../data';
import { publicRequest } from '../requests';
import { setError, UpdateProduct } from './cartRedux';

/* функция для оформления заказа и получения URL-адреса покупки */

export const newCheckout = async (dispatch, idemp, order) => {
    try {
        const key = idemp
        const request = { key, ...order }
        const res = await publicRequest.post("/orders/", request)
            .then(response => response)
            .catch(err => dispatch(setError(err.response.data.message)))
        return res.data.confirmation.confirmation_url
    } catch (error) {
    }
}

/* извлечение всех продуктов из базы данных по идентификаторам продуктов, чтобы обновить сведения о продукте */

export const UpdateProducts = async (dispatch, products) => {
    try {
        await Promise.all(products.map(
            async (product, index) => {
                const res = await publicRequest.get("/products/find/" + product._id);
                dispatch(
                    UpdateProduct({
                        index: index,
                        oldproduct: product,
                        newproduct: res.data,
                    })
                );
            }
        )
        )
    } catch (err) {
        console.log(err);
    }
}

export const getProduct = async ({ queryKey }) => {
    const Id = queryKey[1];
    const res = await publicRequest.get("/products/find/" + Id);

    const getAvailableColors = await AllColors.filter((color) =>
        res.data.color.includes(color.colorName)
    );
    const getAvailableSizes = await AllSizes.filter((size) =>
        res.data.size.includes(size.SizeName)
    );

    return { ...res.data, size: getAvailableSizes, color: getAvailableColors };
};

export const getProducts = async ({ queryKey }) => {
    const Category = queryKey[1];
    const response = await publicRequest.get(
        Category ? `products?category=` : `products`
    );
    return response;
};