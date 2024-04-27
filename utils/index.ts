import { StockProps } from '../interfaces/StockProps';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const getStockSymbol = (symbol: string): string => symbol.split(':')[0];

export const getStockTicker = (item: StockProps): boolean =>
  item.price > item.previous_close;

export const isValidEmail = (email: string) => EMAIL_REGEX.test(email);

export const debounce = (func: any, delay: number) => {
  let timeoutId: any;

  return (...args: any) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
