import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import BuyerForm from "../BuyerForm/BuyerForm";

import "./CartItems.css";
import {db} from '../../firebase'
import OrderReview from "../OrderReview/OrderReview";

function CartItems() {
  const { cart, setcart, defaultValue, setcantItems, reduceCant, addCant, order, setorder } = useContext(CartContext);
  const [cantidad, setcantidad] = useState(0)
  const [showForm, setshowForm] = useState(false)
  const [showButton, setshowButton] = useState(true)
  

  
  const handleOnClick = () => {
    setshowForm(true)
    setshowButton(false)
  }


  

  const pagar = async (object) => {
    // El Objeto que recibimos por parametro nos trae el state
		// desde el componente FormComponent
		// console.log('Hice Click');
		console.log(object);
		await db.collection('orders').doc().set(object);
		console.log('Nueva orden creada!');
    setcart(defaultValue)
    setcantItems(0)
    setorder(true)
    setshowForm(false)
  }

 
  
  console.log(cart);
  let total = 0;
  return (
    <div>
      {order ?  <OrderReview/>:cart.map((item) => {
        
        return (
          
          <div key={item.item.id} className="contenedorCart">
            
            <img src={item.item.imagen} alt="imagen prod" className="imgCart" />
            <div className="cartProductText">
              <h2>{item.item.nombre}</h2>
              <div>
                <h5>{item.cant}</h5>
                <button className='btn btn-margin' onClick={reduceCant}> - </button>
                <button className='btn btn-margin' onClick={addCant}> + </button>
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
      {order ? null: <h2>Precio Total: ${total}</h2>}
      
      {console.log(total)}

     

      {showButton ? <button className='btn btn-finalizar' onClick={handleOnClick}>Finalizar Compra</button> : null}

      {showForm ? <BuyerForm pagar = {pagar} productsList={cart} total ={total  }/>: null}
      
    </div>
  );
}

export default CartItems;
