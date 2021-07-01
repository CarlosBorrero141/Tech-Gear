import React, { useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";

function ItemCount({ stock, initial, onAdd, boton, link }) {
  const [cantidad, setCantidad] = useState(initial);
  const [disabledsum, setDisabledsum] = useState(false);
  const [disabledres, setDisabledres] = useState(false);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);

      setDisabledres(false);
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

  return (
    <div>
      <div className="itemCounter">
        <button className="btn" disabled={disabledsum} onClick={sumar}>
          +
        </button>
        <p>{cantidad}</p>
        <button className="btn" disabled={disabledres} onClick={restar}>
          -
        </button>
      </div>
      <br />
      <Link to={link}>
        <button  className="btn" onClick={() => onAdd(cantidad)}> {boton}</button>
      </Link>
    </div>
  );
}

Link.defaultProps ={
  to: '#'
}

export default ItemCount;
