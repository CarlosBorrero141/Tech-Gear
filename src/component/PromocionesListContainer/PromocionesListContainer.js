import React from 'react'
import './PromocionesListContainer.css'

import PromocionesList from '../PromocionesList/PromocionesList'

function PromocionesListContainer() {
    return (
        <div className='promocionesListContainer'>
            <div className='bannerContainer'>
            <h2>Promociones</h2>
            <img src="https://firebasestorage.googleapis.com/v0/b/tech-gear-cc0a9.appspot.com/o/564-descuentos%20banner.png?alt=media&token=409e9e9b-65a7-4a44-8f4f-738b32a4810d" alt="Promociones Banner" className='banner' />
            </div>
            <PromocionesList/>
        </div>
    )
}

export default PromocionesListContainer
