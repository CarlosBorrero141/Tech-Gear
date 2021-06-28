import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

function Cart() {
    const cart = useContext(CartContext);
    return (
        <div>
            <h1>{cart}</h1>
        </div>
    )
}

export default Cart
