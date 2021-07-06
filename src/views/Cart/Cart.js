import React, {useContext} from 'react'
import CartItemsContainer from '../../component/CartItemsContainer/CartItemsContainer';
import { CartContext } from '../../context/CartContext'
import './Cart.css'

function Cart() {
   
    return (
        <div>
            <CartItemsContainer/>
        </div>
    )
}

export default Cart
