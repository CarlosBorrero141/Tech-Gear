import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'

function Cart() {
    const {cart} = useContext(CartContext);
    console.log(cart)
    return (
        <div>
            {cart.map((item) =>{
                return (
                  <div key={item.item.id} className='contenedorCart'>
                    <img src={item.item.imagen} alt="imagen prod" className='imgCart' />
                    <div>
                        <h2>{item.item.productName}</h2>
                        <div>
                            <h5>{item.cant}</h5>
                            <h5>{item.item.precio * item.cant}</h5>
                        </div>
                    </div>
                  </div>
                ); 
            })}
        </div>
    )
}

export default Cart
