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
                <div className='bannerContainer'>
                    <h2 className='tituloTeclado'>Teclados</h2>
                    <img src="https://firebasestorage.googleapis.com/v0/b/tech-gear-cc0a9.appspot.com/o/banner01_54ba5e32-c45b-4ddb-b9d9-a806a2dcb21d.jpeg?alt=media&token=97e4979a-cf35-46d9-956b-15f337cdf542" alt="" className='banner' />
                </div>
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