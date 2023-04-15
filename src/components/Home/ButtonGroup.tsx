import { useAppDispatch } from '../../redux/store';
import { removeCard } from '../../redux/slices/vehicles/slice';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

type ButtonGroupProps = { id: number };

function ColorButtonGroup({ id }: ButtonGroupProps) {
  const dispatch = useAppDispatch();

  const deleteCard = () => {
    dispatch(removeCard(id));
  };
  return (
    <ButtonGroup aria-label="Basic example" className="mx-5 my-2">
      <Button variant="success">Edit</Button>
      <Button variant="danger" onClick={deleteCard}>
        Delete
      </Button>
    </ButtonGroup>
  );
}

export default ColorButtonGroup;
