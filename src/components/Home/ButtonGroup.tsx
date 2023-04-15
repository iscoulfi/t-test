import { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { removeCard } from '../../redux/slices/vehicles/slice';
import { CardData } from '../../types/appInterface';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import EditCard from './EditCard';

function ColorButtonGroup(props: CardData) {
  const [show, setShow] = useState(false);

  const dispatch = useAppDispatch();

  const deleteCard = () => {
    dispatch(removeCard(props.id));
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonGroup aria-label="Basic example" className="mx-5 my-2">
        <Button variant="success" onClick={handleShow}>
          Edit
        </Button>
        <Button variant="danger" onClick={deleteCard}>
          Delete
        </Button>
      </ButtonGroup>
      <EditCard show={show} setShow={setShow} {...props} />
    </>
  );
}

export default ColorButtonGroup;
