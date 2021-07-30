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
        <div className='bannerContainer'>
                    <h2 className='tituloMouse'>Mouse</h2>
                    <img src="https://firebasestorage.googleapis.com/v0/b/tech-gear-cc0a9.appspot.com/o/b94e950c-9bc8-42b8-b15c-c11fd88dfdf3._CR0%2C0%2C970%2C300_PT0_SX970__.jpg?alt=media&token=96bd2679-f180-4f69-9dbb-1aa7888bf503" alt="" className='banner' />
                </div>
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