import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setcart] = useState(defaultValue);
  const [cantItems, setcantItems] = useState(0);

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
    const newItems = cart.filter((item) => item.id !== itemID);
    setcart(newItems);
    setcantItems(cantItems - cant)
  };

  const clearCart = () => {
    setcart(defaultValue);
  };

  const modifyCant = (itemID, cant) => {
    const itemsModify = cart.find((item) => item.id !== itemID)
    console.log(itemsModify);
  }

  return (
    <CartContext.Provider
      value={{ cart, handleAdd, removeFromCart, clearCart, cantItems, modifyCant, setcart, defaultValue, setcantItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
