// src/utils/cartUtils.js
// import productsJSON from "../data/products.json";
import React from "react";
// export const getProducts = () => {
//     return  productsJSON;
// }

export const getProductDetails = () => {
    const details = [
        'id',
        'category',
        'description',
        'image',
        'price',
        'rating',
        'title',
    ];
    return details;
}

export const getProductTitleForUrl = (product) => {
    return product.title.toLocaleLowerCase().replaceAll(" ","-").replaceAll("õ","o").replaceAll("ä","a").replaceAll("ü","u").replaceAll("ö","o")
}

export const getTableValue = (product, detail) => {
    if (detail === "rating") {
        return product[detail]['rate'];
    }
    if (detail === "image") {
        return <img style={{width:"200px"}} src={product.image} alt=''/>
    }
    return product[detail];
}

export const getProductById = (products, id) => {
    return products.find(product => product.id === id);
}

export const getUniqueCategories = (products) => {
    const categories = new Set();
    products.forEach(product => {
        categories.add(product.category);
    });
    return Array.from(categories);
};
/*
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
    const inCart = checkIfInCart(product.id);
    if (inCart) {
        console.log("Product is already in the cart.");
        printCartData();
        return false;
    } else {
        console.log("Product is not in the cart.");
        const cart = getCart();
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        printCartData();
        return true;
    }
}
export const clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
}

export const printCartData = () => {
    const cart = getCart()
    console.log(cart);
};

export const removeFromCart = (productId) => {
    try {
        let cart = getCart();
        const updatedCart = cart.filter(product => product.id !== productId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        console.log("Product removed from the cart.");
        printCartData();
        return true;
    } catch (error) {
        console.error("Error removing product from cart:", error);
        return false;
    }
};*/