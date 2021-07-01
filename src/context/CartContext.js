
import React,{useState, createContext} from 'react';

export const CartContext = createContext();



export const CartProvider = ({defaultValue=[], children}) => {
    const [cart, setcart] = useState(defaultValue);
    
    
     const handleAdd = (item, cant)=>{
         if (cart.length !== 0){
             setcart([{item, cant}])
         }
         setcart([...cart,{item, cant}])
     }

     const removeFromCart = (itemID) => {
        const newItems = cart.filter((item) => item.id !== itemID)
        setcart(newItems);
     }

     const clearCart = () => {
        setcart(defaultValue);
     }



    return(
        <CartContext.Provider value={{cart, handleAdd, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}