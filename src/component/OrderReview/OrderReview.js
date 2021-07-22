import React, { useEffect, useState } from 'react'
import {db} from '../../firebase'; 


function OrderReview() {
    const [order, setorder] = useState([])

    const getOrders = ()=>{
        
        db.collection('orders').onSnapshot((querySnapshot) =>{
            console.log(querySnapshot.docs[0])
            setorder(querySnapshot.docs[0].id)
        })
    };

    useEffect(()=>{
        getOrders();
    },[])
    return (
        <div>
            <h2>Orden</h2>
            <h2>Orden Numero: {order}</h2>
        </div>
    )
}

export default OrderReview
