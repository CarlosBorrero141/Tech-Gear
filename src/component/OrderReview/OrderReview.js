import React, { useEffect, useState, useContext } from 'react'
import {db} from '../../firebase'; 
import { CartContext } from "../../context/CartContext";
import './OrderReview.css'

function OrderReview({orderID}) {
    const { reiniciar } = useContext(CartContext);
    const [order, setorder] = useState({})
    
    
  
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idOrder])
    if(order){
        return (
            <div className='orderReview'>
                <h2 className='tituloOrden'>Orden</h2>
                <div className='orden'>
                    <h2> <span> Orden ID: </span> {order.id}</h2>
                    <h2> <span> Nombre: </span>   {order.nombre}  </h2>
                    <h2> <span> Pais: </span>  {order.pais} </h2>
                    <h2> <span> Ciudad: </span>  {order.ciudad} </h2>
                    <h2> <span> Direccion: </span>  {order.direccion} </h2>
                    <h2> <span> Telefono: </span>  {order.telefono} </h2>
                    <h2> <span> Total: </span> ${order.precioTotal} </h2>                     
                </div>
    
                <button className='btn' onClick={reiniciar} >Hacer Otra compra</button>
                
            </div>
        )
    }else{return(null)}
}

export default OrderReview
