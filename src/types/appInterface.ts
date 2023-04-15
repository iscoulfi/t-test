export interface CardData {
  id: number;
  name: string;
  model: string;
  year: number;
  color: string;
  price: number;
  latitude: number;
  longitude: number;
}

export interface IOption {
  label: string;
  value: string;
}

export interface EditCardProps extends CardData {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export type Inputs = {
  name: string;
  model: string;
  price: number;
};
