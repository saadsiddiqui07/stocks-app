import { StockProps } from '../interfaces/StockProps';

// actions.js
export const SET_EMAIL_PASSWORD = 'SET_EMAIL_PASSWORD';
export const ADD_STOCK = 'ADD_STOCK';
export const REMOVE_STOCK = 'REMOVE_STOCK';

export const setEmailPassword = (email: string, password: string) => ({
  type: SET_EMAIL_PASSWORD,
  payload: { email, password },
});

export const addStock = (stock: StockProps) => ({
  type: ADD_STOCK,
  payload: stock,
});

export const removeStock = (symbol: string) => ({
  type: REMOVE_STOCK,
  payload: symbol,
});
