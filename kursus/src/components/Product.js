import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { checkAndAddToCart } from '../utils/cartUtils'
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { CartSumContext } from '../store/CartSumContext';
import Button from '@mui/material/Button'; // terve mooduli
//import {Button} from '@mui/material'; // tüki materialist
import styles from "../css/HomePage.module.css"; 
import { useDispatch } from 'react-redux';
import { increment } from '../redux/counterSlice';

function Product({product}) { // object destructuring {product: .......}
//   const [, setCart] = React.useState(getCart());
  const { t } = useTranslation();
  const {increaseSum} = useContext(CartSumContext);
  const dispatch = useDispatch()


  const addToCart = (product) => {
    checkAndAddToCart(product)
    toast(t("toast.added") + product.title); //product.stringify()
    // setCartSum(99);
    // setCart(getCart());
    increaseSum(product.price);
    dispatch(increment());
}

  return (
    <div className={styles.product}>
        <img src={product.image} alt=""/>
        <div className={styles.title}>{product.title}</div>
        <div>{product.price}</div>
        <div>
            <Button variant="contained" onClick={() => addToCart(product)}>Add to
                cart
            </Button>

            <Link to={"/product/" + product.id}>
                <Button variant="outlined" className="nupp">Vt lähemalt</Button>
            </Link>
        </div>

    </div>
  )
}

export default Product