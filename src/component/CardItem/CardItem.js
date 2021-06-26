import React, {useState} from "react";
import { Card, Image } from "semantic-ui-react";
import "./CardItem.css";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom'


function CardItem  ({prods}) {
  
  const onAdd = (cantidad) => {
    console.log(cantidad +" "+ prods.productName)
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
          <ItemCount stock= {5} initial={1} onAdd={onAdd} boton={'Anadir a Carrito'}/>
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


