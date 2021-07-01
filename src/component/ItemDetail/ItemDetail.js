import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext} from "../../context/CartContext";

function ItemDetail({productId}) {
    const {cart, handleAdd} = useContext(CartContext)
    const [boton, setBoton] = useState('Añadir al Carrito')
    const [link, setlink] = useState('#')
    let itemID = productId
    const [item, setitem] = useState({})
    const onAdd = (cantidad) => {
        setBoton('Finalizar Compra');
        setlink('/cart')
        if (boton === 'Añadir al Carrito'){
            handleAdd(item, cantidad);
        }
        
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
