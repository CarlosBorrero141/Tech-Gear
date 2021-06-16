import React from "react";
import "./ItemCount.css"

function ItemCount({ stock, initial }) {
  const [cantidad, setCantidad] = React.useState(initial);
  const [disabledsum, setDisabledsum] = React.useState(false);
  const [disabledres, setDisabledres] = React.useState(false);
  
  
  const sumar = () => {
    if (cantidad < stock ) {
      setCantidad(cantidad + 1);
      
      setDisabledres(false)
    } else {
      setDisabledsum(true);
    }
  };
  const restar = () => {
    if (cantidad >= 1) {
      setCantidad(cantidad - 1);
      setDisabledsum(false);
    } else {
      setDisabledres(true);
    }
  };

  const onAdd = () => {
      console.log(cantidad)
  }

  return (
    <div>
        <div className='itemCounter'>
      <button disabled={disabledsum} onClick={sumar}>
        +
      </button>
      <p>{cantidad}</p>
      <button disabled={disabledres} onClick={restar}>
        -
      </button>
      </div>
    <br />
      <button onClick={onAdd}>
          Agregar a Carrito
      </button>
    </div>
  );
}

export default ItemCount;
