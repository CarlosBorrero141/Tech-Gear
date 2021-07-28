import React from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

function ItemListContainer() {
    return (
        <div className='itemListContainer'>
            <img src="https://www.syntech.co.za/wp-content/uploads/2017/04/banner_redragon.jpg" alt="Banner" className='banner' />
            <ItemList/>
        </div>
    )
}

export default ItemListContainer
