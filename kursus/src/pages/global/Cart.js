import React, { useContext, useEffect, useState } from 'react';
import {toast} from "react-toastify";
import  "../../utils/cartUtils";
import {clearCart, getCart, removeFromCart} from "../../utils/cartUtils";
import Payment from '../../components/Payment';
import { CartSumContext } from '../../store/CartSumContext';
import styles from "../../css/Cart.module.css"; 
import { useDispatch } from 'react-redux';
import { decrement, decrementByAmount, empty, increment } from '../../redux/counterSlice';


function Cart(props) {

    const [cart, setCart] = React.useState(getCart());
    const [parcelmachines, setParcelmachines] = useState([]);
    const cartSumCtx = useContext(CartSumContext);
    const dispatch = useDispatch()

    useEffect(() => {
        fetch("https://www.omniva.ee/locations.json")
            .then(res => res.json())
            .then(json => setParcelmachines(json.filter(pm => pm.A0_NAME === "EE")))
    }, []);

    function handleRemoveFromCart(product) {
        if (removeFromCart(product.cartProduct.id)) {
            toast(product.cartProduct.title + ' removed from cart');
            const cart = getCart();
            setCart(cart); // setin uue carti
            //cartSumCtx.setCartSum(cartSumCtx.determineCartSum()); // kasutan täpselt seda carti
            cartSumCtx.decreaseSum(product.quantity * product.cartProduct.price);
            dispatch(decrementByAmount(product.quantity));
        }
    }

    function handleClearCart() {
        clearCart();
        const cart = getCart();
        setCart(cart); // siin uuendab, mõju avaldub aga funktsiooni lõpus
        cartSumCtx.empty(); // getCost() läheb vana väärtusega käima
        dispatch(empty());
    }

    function getCount() {
        return cart.length;
    }

    function getCost() {
        let sum = 0;
        //sum = cart.reduce((acc, product) => acc + product.price, 0);
        cart.forEach((product) => {
            sum += product.cartProduct.price * product.quantity;
        })
        return sum.toFixed(2);
    }

    function decreaseQuantity(product) {
        const index = cart.findIndex(p => p.cartProduct.id === product.cartProduct.id);
        cart[index].quantity--;
        if (cart[index].quantity === 0) {
            cart.splice(index,1);
        }
        setCart(cart.slice());
        localStorage.setItem("cart", JSON.stringify(cart));
        cartSumCtx.decreaseSum(product.cartProduct.price);
        dispatch(decrement());
    }

    function increaseQuantity(product) {
        const index = cart.findIndex(p => p.cartProduct.id === product.cartProduct.id);
        cart[index].quantity++;
        setCart(cart.slice());
        localStorage.setItem("cart", JSON.stringify(cart));
        cartSumCtx.increaseSum(product.cartProduct.price);
        dispatch(increment());
    }

    function getTotalCount() {
        let sum = 0;
        cart.forEach((product) => {
            sum += product.quantity;
        })
        return sum;
    }

    return (
        <div><h2>Cart</h2>
            <div>
                <button onClick={() => handleClearCart()}>handleClearCart</button>
            </div>
            <div>different item count: {getCount()}</div>
            <div>total item count: {getTotalCount()}</div>
            <div>total cost: {getCost()}</div>
            <div>
                {cart.map(product =>
                    <div className={styles.product} key={product.cartProduct.id}>
                        <img src={product.cartProduct.image} alt=""/>
                        <div className={styles.title}>{product.cartProduct.title}</div>
                        <div className={styles.price}>{product.cartProduct.price.toFixed(2)} €</div>
                        <button onClick={() => decreaseQuantity(product)}>-</button>
                        <div className={styles.quantity}>{product.quantity} pcs</div>
                        <button onClick={() => increaseQuantity(product)}>+</button>
                        <div className={styles.sum}>{(product.cartProduct.price * product.quantity).toFixed(2)} €</div>
                        <div>
                            <button onClick={() => handleRemoveFromCart(product)}>removeFromCart</button>
                        </div>
                    </div>
                )}
            </div>

            <select>
                {parcelmachines.map(pm => 
                    <option key={pm.NAME}>{pm.NAME}</option>
                )}
            </select>

            <Payment sum={getCost()} />

        </div>
    );
}

export default Cart;