// src/utils/cartUtils.js

export const checkIfInCart = (productId) => {
    try {
        const cart = getCart();
        return cart.findIndex(product => product.cartProduct.id === productId);
    } catch (error) {
        console.error("Failed to parse cart JSON string:", error);
        return -1;
    }
};

export const getCart = () => {
    try {
        const cart = localStorage.getItem('cart');
        if (cart) {
            return JSON.parse(cart);
        }
        return []; // Return an empty array if no cart is found
    } catch (error) {
        console.error("Error retrieving cart from localStorage:", error);
        return []; // Return an empty array in case of error
    }
}

export const checkAndAddToCart = (product) => {
    const index = checkIfInCart(product.id);
    const cart = getCart();
    console.log(index);
    if (index !== -1) {
        // suurendame koguse
        cart[index].quantity = cart[index].quantity + 1;
        console.log("Product is already in the cart.");
    } else {
        // lisame lõppu juurde, kogusega 1
        console.log("Product is not in the cart.");
        // const cart = getCart();
        cart.push({"cartProduct": product, "quantity": 1});
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}
export const clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
}

export const removeFromCart = (productId) => {
    try {
        let cart = getCart();
        const updatedCart = cart.filter(product => product.cartProduct.id !== productId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        console.log("Product removed from the cart.");
        return true;
    } catch (error) {
        console.error("Error removing product from cart:", error);
        return false;
    }
};