import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({productId}) {
    const [boton, setBoton] = useState('Añadir al Carrito')
    const [link, setlink] = useState('#')
    let itemID = productId
    const [item, setitem] = useState({})
    const onAdd = (cantidad) => {
        setBoton('Finalizar Compra');
        if(boton == 'Finalizar Compra'){
            setlink('/cart')
        }else{alert(cantidad +" "+ item.productName);}
    }
    

    useEffect(()=>{
        axios(`https://my-json-server.typicode.com/CarlosBorrero141/tech-gear-products/products/${itemID}`).then((resp) => {
           setitem(resp.data)
        })
    },[itemID])
  

    return (
        <div className='details'>
            <h2>Detalle producto</h2>
            <div className='itemDetails'>
                <div>
                    <img className='productImg' src={item.imagen} alt="" />
                </div>
                <div>
                    <h3 className='productName'>{item.productName}</h3>
                    <p className='productDescription'>{item.description}</p>
                    <h4 className='productPrice'>{item.precio}</h4>
                    <ItemCount 
                    stock= {5} 
                    initial={1} 
                    onAdd={onAdd} 
                    boton={boton}
                    link={link}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
