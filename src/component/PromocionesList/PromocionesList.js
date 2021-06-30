import React, {useEffect, useState} from 'react'
import CardItem from '../CardItem/CardItem.js'
import './PromocionesList.css'
import axios from 'axios'


function PromocionesList() {

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
                if(prod.promocion === true){
                return(
                    
                    <CardItem prods = {prod} key = {prod.id}/>
                    
                )
            }else{
                return null
            }})}
            
        </div>
    )
}

export default PromocionesList