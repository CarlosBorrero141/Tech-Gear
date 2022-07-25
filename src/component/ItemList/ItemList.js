import React, {useEffect, useState} from 'react'
import CardItem from '../CardItem/CardItem.js'
import './ItemList.css'

import {db} from '../../firebase'; 


function ItemList() {

    const [productos, setProductos] = useState([])

    const getProducts = ()=>{
        const docs = [];
        db.collection('productos').onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            });
            console.log(docs)
            setProductos(docs)
        })
    };

    useEffect(() => {
        getProducts();
    },[]) ;



    return (
        <div className='List'>
            
            {productos.map((prod) =>{
                return(
                    
                    <CardItem prods = {prod} key = {prod.id}/>
                    
                )
            })}
            
        </div>
    )
}

export default ItemList
