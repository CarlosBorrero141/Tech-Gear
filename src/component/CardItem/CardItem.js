import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./CardItem.css";
import ItemCount from "../ItemCount/ItemCount";

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
          <Card.Description>
            {prods.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <ItemCount stock= {5} initial={1} onAdd={onAdd}/>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CardItem;


