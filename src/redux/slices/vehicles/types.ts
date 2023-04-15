import { CardData } from '../../../types/appInterface';

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface VehiclesState {
  cards: CardData[] | [];
  status: Status;
}

export interface QueryCharactersData extends CardData {
  results: CardData[];
}
