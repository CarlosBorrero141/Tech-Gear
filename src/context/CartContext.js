
import React,{useState, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setcart] = useState([]);


    return(
        <CartContext.Provider value={'Esto es una Prueba'}>
            {props.children}
        </CartContext.Provider>
    )
}