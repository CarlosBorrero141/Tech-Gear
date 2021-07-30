import React from 'react'
import MouseList from '../MouseList/MouseList'
import TecladosList from '../TecladosList/TecladosList'
import './CategoriaListContainer.css'

function CategoriaListContainer() {
    return (
        <div className='categoriasListContainer'>
            
            <TecladosList/>
            <MouseList/>
        </div>
    )
}

export default CategoriaListContainer
