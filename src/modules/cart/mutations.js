import {find} from 'lodash';//find: know if a product is added or not to the cart

//function that adds a Product to our cart
export function addProduct(state, product) {
    const productInCart = find(state.cart, {id: product.id});
    if (!productInCart) {
       const copy = Object.assign({}, product);
       copy.qty = 1;
       state.cart.push(copy);
    } else {
       productInCart.qty += 1;
    }
}

//function that removes a product from our cart
export function removeProductFromCart(state, product) {
    state.cart = state.cart.filter(({id}) => id !== product.id);

}