import React from 'react'

function BuyerForm({pagar}) {

    return (
        <div>
             <div>
        <form action="" className='formulario' >
          <input type="text" placeholder='Nombre' id='nombre' className='input'/>
          <input type="text" placeholder='Correo' id='correo'className='input'/>
          <input type="text" placeholder='Pais' id='pais' className='input'/>
          <input type="text" placeholder='Ciudad' id='ciudad'  className='input'/>
          <input type="text" placeholder='Direccion' id='direccion' className='input'/>
          <input type="text" placeholder='Telefono' id='telefono' className='input'/>
          <button className='btn btn-form' onClick={pagar}>Pagar</button>
        </form>
      </div>
        </div>
    )
  
}

export default BuyerForm
