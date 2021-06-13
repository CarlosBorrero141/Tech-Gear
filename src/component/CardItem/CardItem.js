import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./CardItem.css";

function CardItem  () {

  const [cantidad, setCantidad] = React.useState(0);

  const sumar = () => {
    setCantidad(cantidad + 1)
  }
    const restar = () => {
      setCantidad(cantidad - 1);
    };
  

 
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
          <button onClick={sumar}>+</button>
          <p>{cantidad}</p>
          <button onClick={restar}>-</button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CardItem;
