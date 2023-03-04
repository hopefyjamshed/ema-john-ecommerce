import { getStoredCart } from "../../utilities/fakedb"

export const ProductAndCartDataLoader = async () => {
    // get products data
    const productData = await fetch('products.json')
    const products = await productData.json()

    // get cart data
    const cartData = getStoredCart()
    const initial = []

    for (const id in cartData) {
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            const quantity = cartData[id]
            addedProduct.quantity = quantity;
            initial.push(addedProduct)

        }
    }
    return { products, initial };
}