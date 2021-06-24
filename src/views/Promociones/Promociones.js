import React from 'react'
import PromocionesListContainer from '../../component/PromocionesListContainer/PromocionesListContainer'
import './Promociones.css'

function Promociones() {
    return (
        <div>
            <h1 className='tituloSeccion'>Promociones</h1>
            <PromocionesListContainer/>
        </div>
    )
}

export default Promociones
