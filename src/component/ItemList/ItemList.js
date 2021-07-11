import React, {useEffect, useState} from 'react'
import CardItem from '../CardItem/CardItem.js'
import './ItemList.css'
import axios from 'axios'
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
        })
    };

    useEffect(() => {
        getProducts();
        axios(
            'https://my-json-server.typicode.com/CarlosBorrero141/tech-gear-products/products'
        )
       
        .then((res)=> setProductos(res.data));
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
