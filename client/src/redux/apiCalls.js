import { publicRequest } from '../requests';
import { setError, UpdateProduct } from './cartRedux';
import { confirmOrder } from './userRedux';

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

export const FetchMany = async (dispatch, products) => {
    try {
        let UpdatedProducts = []
        let i = 0
        for await (const product of products) {
            const res = await publicRequest.get("/products/find/" + product._id);
            dispatch(UpdateProduct({ index: i, oldproduct: product, newproduct: res.data }))
            UpdatedProducts.push({ ...res.data, ...product })
            i += 1
        }
        return UpdatedProducts
    } catch (err) {
        console.log(err);
    }
}

/* export const checkoutAgain = async(dispatch,idemp,order) => {
    try {
        const key = idemp
        const request = {key,order}
        const res = await publicRequest.post("/orders/",request)
        dispatch(confirmOrder(res.data.payment.confirmation["confirmation_token"]))
        return res.data.payment.confirmation["confirmation_token"]
    } catch (error) {
        console.log(error)
    }
} */