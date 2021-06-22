import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Details.css'
import ItemCount from '../../component/ItemCount/ItemCount'

function Detail({match}) {
    let itemID = match.params.id
    const [item, setitem] = useState({})
    const onAdd = (cantidad) => {
        console.log(cantidad +" "+ item.productName)
    }
    

    useEffect(()=>{
        axios(`https://my-json-server.typicode.com/CarlosBorrero141/tech-gear-products/products/${itemID}`).then((resp) => {
           setitem(resp.data)
        })
    },[itemID])
  
    console.log('MATCH', match)
    console.log(item)
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
                    <ItemCount stock= {5} initial={1} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default Detail
