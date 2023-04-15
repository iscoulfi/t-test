import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EditCardProps, Inputs } from '../../types/appInterface';
import { useAppDispatch } from '../../redux/store';
import { editCard } from '../../redux/slices/vehicles/slice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function EditCard({ show, setShow, name, model, price, ...props }: EditCardProps) {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(editCard({ ...data, ...props }));
    handleClose();
  };

  const handleClose = () => setShow(false);

  useEffect(() => {
    reset({
      name,
      model,
      price,
    });
  }, [reset, name, model, price]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="my-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              {...register('name', { required: true })}
              isInvalid={!!errors.name}
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              {...register('model', { required: true })}
              isInvalid={!!errors.model}
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              {...register('price', { required: true })}
              isInvalid={!!errors.price}
              autoComplete="off"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditCard;
