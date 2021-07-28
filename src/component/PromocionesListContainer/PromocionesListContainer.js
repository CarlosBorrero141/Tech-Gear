import React from 'react'
import './PromocionesListContainer.css'

import PromocionesList from '../PromocionesList/PromocionesList'

function PromocionesListContainer() {
    return (
        <div className='promocionesListContainer'>
            <div className='bannerContainer'>
            <h2>Promociones</h2>
            <img src="https://yamoshi.com.pe/modules/vnlab_categoriesimages/images/564-descuentos%20banner.png" alt="Promociones Banner" className='banner' />
            </div>
            <PromocionesList/>
        </div>
    )
}

export default PromocionesListContainer
