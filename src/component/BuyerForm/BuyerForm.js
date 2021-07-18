import React, {useState} from 'react'

function BuyerForm({pagar, productsList, total}) {

  const initialOrder = {
		productos: productsList,
		precioTotal: total,
    nombre:'',
    correo:'',
    pais:'',
    ciudad:'',
    direccion:'',
    telefono:'',
	};

  const [values, setValues] = useState(initialOrder);

  const handleOnChange = (e) => {
		const { name, value } = e.target;
		// console.log(name, value);
    setValues({ ...values, [name]: value });
    // console.log(values)
	};

  const handleOnSubmit = (e) => {
		e.preventDefault();
		pagar(values);
		setValues({ ...initialOrder });
	};

    return (
        <div>
             <div>
        <form action="" className='formulario' >
          <input onChange={handleOnChange} type="text" placeholder='Nombre' id='nombre' className='input' value={values.nombre} name='nombre'/>
          <input onChange={handleOnChange} type="text" placeholder='Correo' id='correo'className='input' value={values.correo} name='correo'/>
          <input onChange={handleOnChange} type="text" placeholder='Pais' id='pais' className='input' value={values.pais} name='pais'/>
          <input onChange={handleOnChange} type="text" placeholder='Ciudad' id='ciudad'  className='input' value={values.ciudad} name='ciudad'/>
          <input onChange={handleOnChange} type="text" placeholder='Direccion' id='direccion' className='input' value ={values.direccion} name='direccion'/>
          <input onChange={handleOnChange} type="text" placeholder='Telefono' id='telefono' className='input' value={values.telefono} name='telefono'/>
          <button className='btn btn-form' onClick={handleOnSubmit}>Pagar</button>
        </form>
      </div>
        </div>
    )
  
}

export default BuyerForm
