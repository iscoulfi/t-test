import Select, { SingleValue } from 'react-select';
import { IOption } from '../types/appInterface';
import Form from 'react-bootstrap/Form';
import options from '../assets/options';

interface SortFieldProps {
  currentField: string;
  setCurrentField: React.Dispatch<React.SetStateAction<string>>;
}

const SortField = ({ currentField, setCurrentField }: SortFieldProps) => {
  const getValue = () => (currentField ? options.find((r) => r.value === currentField) : '');

  const onChange = (newValue: SingleValue<string | IOption>) => {
    setCurrentField((newValue as IOption).value);
  };

  return (
    <>
      <Form.Label>Sorted by:</Form.Label>
      <Select
        className="mb-3"
        onChange={onChange}
        value={getValue()}
        options={options}
        placeholder="Select..."
      />
    </>
  );
};

export default SortField;
