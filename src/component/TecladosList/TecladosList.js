import React, {useEffect, useState} from 'react'
import CardItem from '../CardItem/CardItem.js'
import './TecladosList.css'
import axios from 'axios'
import {db} from '../../firebase'


function TecladosList() {

    const [productos, setProductos] = useState([])

    const getTeclados = () => {
        const docs = [];
        db.collection('productos').onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            })

            const filter = docs.filter(doc => doc.categoria === 'teclado')
            setProductos(filter)

        })

    }

    useEffect(() => {
        getTeclados();
    },[]) ;



    if(productos.length > 0){
        return (
            <div>
            <h2 className='tituloSeccion'>Teclados</h2>
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
            </div>
        )
    }else{
        return null
    }
}

export default TecladosList