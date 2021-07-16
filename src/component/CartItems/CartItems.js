import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import BuyerForm from "../BuyerForm/BuyerForm";
import ItemCount from "../ItemCount/ItemCount";
import "./CartItems.css";

function CartItems() {
  const { cart } = useContext(CartContext);
  const [cantidad, setcantidad] = useState(0)
  const [showForm, setshowForm] = useState(false)
  const [showButton, setshowButton] = useState(true)

  const handleOnClick = () => {
    setshowForm(true)
    setshowButton(false)
  }

  const pagar = () => {
    
  }

 
  
  console.log(cart);
  let total = 0;
  return (
    <div>
      {cart.map((item) => {
        
        return (
          
          <div key={item.item.id} className="contenedorCart">
            
            <img src={item.item.imagen} alt="imagen prod" className="imgCart" />
            <div className="cartProductText">
              <h2>{item.item.nombre}</h2>
              <div>
              <ItemCount stock={5} initial={item.cant} boton={'Cambiar Cantidad'} />
                <h5 style={{marginTop:'20px'}}>${item.item.precio * item.cant}</h5>
              </div>
            </div>
          </div>
        );
      })}
      {cart.map((item) => {
        total = item.item.precio * item.cant + total;
        return null;
      })}
      <h2>Precio Total: ${total}</h2>
      {console.log(total)}

     

      {showButton ? <button className='btn btn-finalizar' onClick={handleOnClick}>Finalizar Compra</button> : null}

      {showForm ? <BuyerForm pagar = {pagar}/>: null}
      
    </div>
  );
}

export default CartItems;
