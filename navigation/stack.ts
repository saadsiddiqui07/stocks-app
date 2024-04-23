import { StockProps } from '../interfaces/StockProps';

export type RootStackParams = {
  Home: undefined;
  Login: undefined;
  Details: { stock: StockProps };
  Orders: undefined;
};
