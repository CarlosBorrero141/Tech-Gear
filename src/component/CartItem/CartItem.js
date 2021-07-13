import React from 'react'

function CartItem({prod}) {
    return (
        <div>
            <div key={prod.item.id} className="contenedorCart">
            
            <img src={prod.item.imagen} alt="imagen prod" className="imgCart" />
            <div className="cartProductText">
              <h2>{prod.item.nombre}</h2>
              <div>
              <ItemCount stock={5} initial={prod.cant} boton={'Cambiar Cantidad'} />
                <h5>${prod.item.precio * prod.cant}</h5>
              </div>
            </div>
          </div>
        </div>
    )
}

export default CartItem
