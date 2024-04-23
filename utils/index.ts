import { StockProps } from '../interfaces/StockProps';

export const getStockSymbol = (symbol: string): string => symbol.split(':')[0];

export const getStockTicker = (item: StockProps): boolean =>
  item.price > item.previous_close;
