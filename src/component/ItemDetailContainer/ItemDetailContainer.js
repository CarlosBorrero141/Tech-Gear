import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer({Pid}) {
    let ID = Pid
    return (
        <div>
            <ItemDetail productId={ID} />
        </div>
    )
}

export default ItemDetailContainer
