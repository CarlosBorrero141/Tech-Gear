import React, {useContext, useState} from "react";
import { Card, Image } from "semantic-ui-react";
import "./CardItem.css";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom'
import { CartContext} from "../../context/CartContext";


function CardItem  ({prods}) {
  const [boton, setBoton] = useState('Añadir al Carrito')
  const {handleAdd} = useContext(CartContext)
  const [link, setlink] = useState('#')
  
  const onAdd = (cantidad) => {
    setBoton('Finalizar Compra');
    setlink('/cart')
    if (boton === 'Añadir al Carrito'){
        handleAdd(prods, cantidad);
    }
    
}
 


  return (
    <div className="cardList">
      
      <Card>
        
        <Image
          src={prods.imagen}
          wrapped
          ui={false}
        />
        <Card.Content>
       
          <Card.Header className='nombre'>{prods.productName}</Card.Header>
          
          <Card.Meta>
            {prods.precio}
          </Card.Meta>
          
        </Card.Content>
        <Card.Content extra>
          <ItemCount stock= {5} initial={1} onAdd={onAdd} boton={boton}
                    link={link}/>
        </Card.Content>

        <Card.Content extra>
        <Link to={`/detail/${prods.id}`}>
          <button className='btn'>Detalles</button>
        </Link>
        </Card.Content>
      </Card>
     
    </div>
  );
};

export default CardItem;


