
import React,{useState, createContext} from 'react';

export const CartContext = createContext();



export const CartProvider = ({defaultValue=[], children}) => {
    const [cart, setcart] = useState(defaultValue);
    
    
     const handleAdd = (item, cant)=>{
         setcart([...cart,{item, cant}])
     }



    return(
        <CartContext.Provider value={{cart, handleAdd}}>
            {children}
        </CartContext.Provider>
    )
}