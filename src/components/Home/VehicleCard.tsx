import { CardData } from '../../types/appInterface';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from './ButtonGroup';

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
      <ButtonGroup id={props.id} />
    </Card>
  );
};

export default VehicleCard;
