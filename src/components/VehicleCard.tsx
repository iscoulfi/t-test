import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CardData } from '../types/appInterface';

const VehicleCard = (props: CardData) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>{`${props.name} ${props.model}`}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <span className="text-muted">Year:</span> {props.year}
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="text-muted">Color:</span> {props.color}
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="text-muted">Latitude:</span> {props.latitude}
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="text-muted">Longitude:</span> {props.longitude}
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="text-muted">Price:</span> {props.price}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default VehicleCard;
