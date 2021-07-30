import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setcart] = useState(defaultValue);
  const [cantItems, setcantItems] = useState(0);
  const [order, setorder] = useState(false)

  const handleAdd = (item, cant) => {
    if (cart.length !== 0) {
      let aux = cart.findIndex((obj) => {
        return obj.item.id === item.id;
      });
      if (aux !== -1) {
        const newCart = cart;
        newCart[aux].cant = newCart[aux].cant + cant;
        setcart(newCart);
        console.log(newCart[aux]);
        setcantItems(cantItems + cant);
      } else {
        setcart([...cart, { item, cant }]);
        setcantItems(cantItems + cant);
      }
    } else {
      setcart([...cart, { item, cant }]);
      setcantItems(cantItems + cant);
    }
  };

  const removeFromCart = (itemID, cant) => {
    let id = itemID
    const newCart = cart.filter((item) => item.item.id !== id);
    setcart(newCart)
    setcantItems(cantItems - cant)
  };

  const clearCart = () => {
    setcart(defaultValue);
  };

  const clearCartCant = () => {
    setcantItems(0)
  }

  const reduceCant = (itemID) => {
    const reduceItem = cart.find((item) => item.item.id === itemID)
   let itemsCart = cantItems;
   reduceItem.cant --;
   itemsCart --;
   setcantItems(itemsCart);
  }

  const addCant = (itemID) => {
    const itemsModify = cart.find((item) => item.item.id === itemID)
    let itemsCart = cantItems;
    itemsModify.cant ++;
    itemsCart ++;
    setcantItems(itemsCart)
  }

  const changeOrder = () =>{
    setorder(true)
  }

  const reiniciar = () => {
    setorder(false)
  }

  return (
    <CartContext.Provider
      value={{ cart, handleAdd, removeFromCart, clearCart, cantItems, reduceCant, clearCartCant, addCant, order, changeOrder, reiniciar }}
    >
      {children}
    </CartContext.Provider>
  );
};
