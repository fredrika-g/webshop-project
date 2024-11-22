import { IProduct } from './IProduct';

export interface ICart {
  id: number;
  content: IProduct[];
}
