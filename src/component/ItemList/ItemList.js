import React, {useEffect, useState} from 'react'
import CardItem from '../CardItem/CardItem.js'
import './ItemList.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function ItemList() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        
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
