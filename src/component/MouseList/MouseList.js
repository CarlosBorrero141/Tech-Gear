import React, {useEffect, useState} from 'react'
import CardItem from '../CardItem/CardItem.js'
import './MouseList.css'
import axios from 'axios'
import { db } from '../../firebase.js'


function MouseList() {

    const [productos, setProductos] = useState([])

    const getMouse = () => {
        const docs = [];
        db.collection('productos').onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            })

            const filter = docs.filter(doc => doc.categoria === 'mouse')
            setProductos(filter)

        })

    }

    useEffect(() => {
        getMouse();
    },[]) ;

if(productos.length > 0){
    return (
        <div>
        <h2 className='tituloSeccion'>Mouse</h2>
        <div className='List'>
            

            
            
            {productos.map((prod) =>{
                if(prod.categoria === 'mouse'){
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

export default MouseList