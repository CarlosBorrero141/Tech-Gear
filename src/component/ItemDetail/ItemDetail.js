import React, { useEffect, useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase";

function ItemDetail({ productId }) {
  const { handleAdd } = useContext(CartContext);
  const [boton, setBoton] = useState("Añadir al Carrito");
  const [link, setlink] = useState("#");
  let itemID = productId;
  const [item, setitem] = useState({});
  const onAdd = (cantidad) => {
    setBoton("Finalizar Compra");
    setlink("/cart");
    if (boton === "Añadir al Carrito") {
      handleAdd(item, cantidad);
    }
  };

  const getItemDetail = () => {
    const docs = [];
    db.collection('productos').onSnapshot((querySnapshot) =>{
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id})
        });
        console.log(docs)
        console.log(itemID)
        let filter = docs.find(doc => doc.id === itemID);
        console.log(filter)
        setitem(filter)
            
        
    })
    }
    

  useEffect(() => {
    return getItemDetail();
  }, [itemID]);

  return (
    <div className="details">
      <h2>Detalle producto</h2>
      <div className="itemDetails">
        <div>
          <img className="productImg" src={item.imagen} alt="" />
        </div>
        <div>
          <h3 className="productName">{item.nombre}</h3>
          <p className="productDescription">{item.descripcion}</p>
          <h4 className="productPrice">{item.precio}</h4>
          <ItemCount
            stock={5}
            initial={1}
            onAdd={onAdd}
            boton={boton}
            link={link}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
