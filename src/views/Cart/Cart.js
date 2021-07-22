import React, {useContext} from 'react'
import CartItemsContainer from '../../component/CartItemsContainer/CartItemsContainer';
import './Cart.css'
import { CartContext} from "../../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {

    const { cart, order } = useContext(CartContext);
    if(cart.length === 0 && order===false){
        return(
            <div>
            <h2>El Carrito esta Vacio</h2>
            <Link to = '/'>
            <button className = "btn">Volver a la tienda</button>
            </Link>
            </div>
        )
    }else{
        return (
            <div>
                <CartItemsContainer/>
            </div>
        )
    }
   
    
}

export default Cart
