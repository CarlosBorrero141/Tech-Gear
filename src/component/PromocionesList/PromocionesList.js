import React, {useEffect, useState} from 'react'
import CardItem from '../CardItem/CardItem.js'
import './PromocionesList.css'
import axios from 'axios'
import {db} from '../../firebase'


function PromocionesList() {

    const [productos, setProductos] = useState([])

    const getPromociones = () => {
        const docs = [];
        db.collection('productos').onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            })
            console.log(docs)
            let filter = docs.filter(doc => doc.promocion === true)
            console.log(filter)
            setProductos(filter)
        })
    }

    useEffect(() => {
        getPromociones();

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