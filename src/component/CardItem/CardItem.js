import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./CardItem.css";
import ItemCount from "../ItemCount/ItemCount";

function CardItem  () {
  const onAdd = (cantidad) => {
    console.log(cantidad)
}
 


  return (
    <div className="cardList">
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
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
