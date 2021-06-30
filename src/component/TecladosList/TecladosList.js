import React, {useEffect, useState} from 'react'
import CardItem from '../CardItem/CardItem.js'
import './TecladosList.css'
import axios from 'axios'


function TecladosList() {

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
                if(prod.categoria === 'teclado'){
                return(
                    
                    <CardItem prods = {prod} key = {prod.id}/>
                    
                )
            }else{
                return null
            }})}
            
        </div>
    )
}

export default TecladosList