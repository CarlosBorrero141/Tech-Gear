import React from 'react'
import MouseList from '../MouseList/MouseList'
import TecladosList from '../TecladosList/TecladosList'
import './CategoriaListContainer.css'

function CategoriaListContainer() {
    return (
        <div>
            <h2 className='tituloSeccion'>Teclados</h2>
            <TecladosList/>
            <h2 className='tituloSeccion'>Mouse</h2>
            <MouseList/>
        </div>
    )
}

export default CategoriaListContainer
