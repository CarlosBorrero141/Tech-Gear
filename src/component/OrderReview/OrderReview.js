import React, { useEffect, useState, useContext } from 'react'
import {db} from '../../firebase'; 
import { CartContext } from "../../context/CartContext";


function OrderReview({orderID}) {
    const { reiniciar } = useContext(CartContext);
    const [order, setorder] = useState({})
    let orden = []
    
  
    let idOrder = orderID
    console.log(idOrder)

    const getOrders = ()=>{
        
        const docs = [];
         db.collection('orders').onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            });
        console.log(docs)
        let filter = docs.find(doc => doc.id === idOrder);
        console.log(filter)
        setorder(filter)
    });
    }
  
    
    
    console.log(order)
    useEffect(()=>{
        getOrders();
    },[idOrder])
    if(order){
        return (
            <div>
                <h2>Orden</h2>
                <h2>Orden ID: {order.id}</h2>
                <h2>Nombre: {order.nombre}  </h2>
                <h2>Pais: {order.pais} </h2>
                <h2>Ciudad: {order.ciudad} </h2>
                <h2>Direccion: {order.direccion} </h2>
                <h2>Telefono: {order.telefono} </h2>
                <h2>Total: ${order.precioTotal} </h2> 
    
                <button onClick={reiniciar} >Hacer Otra compra</button>
                
            </div>
        )
    }else{return(null)}
}

export default OrderReview
